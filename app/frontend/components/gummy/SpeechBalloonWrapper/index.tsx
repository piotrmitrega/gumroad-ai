import React, { HTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";

export type SpeechBalloonWrapperProps = HTMLAttributes<HTMLDivElement>;

export const SpeechBalloonWrapper = ({
  className,
  ...baseProps
}: SpeechBalloonWrapperProps): JSX.Element => {
  return (
    <div className={classnames(styles.speechBalloon, className)} {...baseProps} />
  );
};
