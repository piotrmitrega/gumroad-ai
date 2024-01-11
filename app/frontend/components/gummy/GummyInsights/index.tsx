import React, { useCallback, useEffect, useState } from "react";
import classnames from "classnames";
import { SpeechBalloonWrapper } from "../SpeechBalloonWrapper";
import { useGummyContext } from "../../../contexts/GumyContext";
import styles from "./styles.module.scss";

export type GummyInsightsProps = {}

export const GummyInsights = ({}: GummyInsightsProps): JSX.Element => {
  const {
    insight,
    hideInsight,
    setMood
  } = useGummyContext();

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    setCurrentMessageIndex(0);
  }, [insight]);

  useEffect(() => {
    if (!insight) {
      return;
    }

    const message = insight.messages[currentMessageIndex];

    if (message?.mood) {
      setMood(message.mood);
    }
  }, [insight, currentMessageIndex]);

  const onClick = useCallback(() => {
    if (currentMessageIndex >= insight.messages.length - 1) {
      console.log("Last message clicked, hiding");
      hideInsight();
      return;
    }

    setCurrentMessageIndex(currentMessageIndex + 1);
  }, [insight, currentMessageIndex, setCurrentMessageIndex, hideInsight]);

  const currentMessage = insight?.messages[currentMessageIndex];

  if (!insight || !currentMessage) {
    return null;
  }


  return (
    <SpeechBalloonWrapper
      className={classnames(styles.balloon, currentMessage.skippable && styles.clickable)}
      onClick={currentMessage.skippable ? onClick : null}
    >
      {currentMessage.content}
    </SpeechBalloonWrapper>
  );
};
