import React, { useCallback } from "react";
import classnames from "classnames";
import { GummyMood } from "../../../enums/gummyMood";
import { GummyInsights } from "../GummyInsights";
import { useGummyContext } from "../../../contexts/GumyContext";
import styles from "./styles.module.scss";

export const GummyAvatar = (): JSX.Element => {
  const { mood, hideInsight } = useGummyContext();

  const onClick = useCallback(() => {
    hideInsight();
  }, [hideInsight]);

  return (
    <div className={styles.gummy} onClick={onClick}>
      <div
        className={classnames(
          styles.chilling, mood === GummyMood.Chilling && styles.active
        )}
      />
      <div
        className={classnames(
          styles.concerned, mood === GummyMood.Concerned && styles.active
        )}
      />
      <div
        className={classnames(
          styles.grinning, mood === GummyMood.Grinning && styles.active
        )}
      />
      <div
        className={classnames(
          styles.sad, mood === GummyMood.Sad && styles.active
        )}
      />
      <div
        className={classnames(
          styles.smiling, mood === GummyMood.Smiling && styles.active
        )}
      />

      <GummyInsights />
    </div>
  );
};
