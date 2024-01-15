import React, { HTMLAttributes } from "react";
import classnames from "classnames";
import { GummyMood } from "../../../enums/gummyMood";
import styles from "./styles.module.scss";

export type GummyAvatarProps = HTMLAttributes<HTMLDivElement> & {
  mood: GummyMood
}

export const GummyAvatar = ({
  className,
  children,
  mood,
  ...baseProps
}: GummyAvatarProps): JSX.Element => {
  return (
    <div className={classnames(styles.gummy, className)} {...baseProps}>
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

      {children}
    </div>
  );
};
