import React, { useCallback, useContext, useMemo, useState } from "react";
import { GummyInsight } from "../../types/gummy";
import { GummyMood } from "../../enums/gummyMood";
import { WelcomeGummyInsight } from "../../consts/gummy";

export type GummyContextValue = {
  setInsight: (insight: GummyInsight, purgeQueue?: boolean) => void;
  hideInsight: (purgeQueue?: boolean) => void;
  queueInsight: (insight: GummyInsight) => void;
  insight: GummyInsight | null;
  queuedInsights: GummyInsight[];
  mood: GummyMood;
  setMood: (mood: GummyMood) => void;
}

export const GummyContext =
  React.createContext<GummyContextValue>({
    hideInsight: () => {
    },
    setInsight: () => {
    },
    setMood: () => {
    },
    queueInsight: () => {
    },
    queuedInsights: [],
    insight: WelcomeGummyInsight,
    mood: GummyMood.Chilling
  });

export type GummyContextProviderProps = {
  children: React.ReactNode
}

export const GummyContextProvider = (
  { children }: GummyContextProviderProps
): JSX.Element => {
  const [mood, setMood] = useState<GummyMood>(GummyMood.Chilling);
  const [insight, setInsight] = useState<GummyInsight>(WelcomeGummyInsight);
  const [queuedInsights, setQueuedInsights] = useState<GummyInsight[]>([]);

  const hideInsight = useCallback((purgeQueue = false) => {
    setInsight(null);
    setMood(GummyMood.Chilling);

    if (purgeQueue) {
      setQueuedInsights([]);
      return;
    }

    const queuedInsight = queuedInsights[queuedInsights.length - 1];
    if (queuedInsight) {
      setInsight(queuedInsight);

      if (queuedInsight.messages[0].mood) {
        setMood(queuedInsight.messages[0].mood);
      }
    }
  }, [setMood, setInsight, queuedInsights]);

  const queueInsight = useCallback((insight: GummyInsight) => {
    setQueuedInsights(prev => [...prev, insight]);
  }, [setQueuedInsights]);

  const value = useMemo(() => ({
    mood,
    setMood,
    insight,
    setInsight,
    hideInsight,
    queueInsight,
    queuedInsights
  }), [mood, setMood, insight, setInsight, hideInsight, queueInsight]);

  return (
    <GummyContext.Provider value={value}>
      {children}
    </GummyContext.Provider>
  );
};

export const useGummyContext = (): GummyContextValue => {
  return useContext(GummyContext);
};
