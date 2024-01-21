import React, { useCallback, useContext, useMemo, useState } from "react";
import { GummyInsight } from "../../types/gummy";
import { GummyMood } from "../../enums/gummyMood";
import { WelcomeGummyInsight } from "../../consts/gummy";

export type GummyContextValue = {
  setInsight: (insight: GummyInsight) => void;
  hideInsight: (purgeQueue?: boolean) => void;
  insight: GummyInsight | null;
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

  const hideInsight = useCallback(() => {
    setInsight(null);
    setMood(GummyMood.Chilling);
  }, [setMood, setInsight]);

  const value = useMemo(() => ({
    mood,
    setMood,
    insight,
    setInsight,
    hideInsight
  }), [mood, setMood, insight, setInsight, hideInsight]);

  return (
    <GummyContext.Provider value={value}>
      {children}
    </GummyContext.Provider>
  );
};

export const useGummyContext = (): GummyContextValue => {
  return useContext(GummyContext);
};
