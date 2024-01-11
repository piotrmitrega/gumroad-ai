import React, { HTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";
import { GummyMood } from "../../../enums/gummyMood";
import { SpeechBalloonWrapper } from ".././SpeechBalloonWrapper";
import { GummyInsights } from "../GummyInsights";
import { useGummyContext } from "../../../contexts/GumyContext";

export type GummyAvatarProps = HTMLAttributes<HTMLDivElement> & {
  mood: GummyMood
}

export const GummyAvatar = (): JSX.Element => {
  const { mood } = useGummyContext();

  console.log("Gummy mood", mood)
  return (
    <div className={styles.gummy}>
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
