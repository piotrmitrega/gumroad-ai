import React, { useCallback } from "react";
import { GummyInsights } from "../GummyInsights";
import { useGummyContext } from "../../../contexts/GumyContext";
import { GummyAvatar } from "../GummyAvatar";
import styles from "./styles.module.scss";

export const GummyAvatarContainer = (): JSX.Element => {
  const { mood, hideInsight } = useGummyContext();

  const onClick = useCallback(() => {
    hideInsight();
  }, [hideInsight]);

  return (
    <GummyAvatar className={styles.gummyFixed} onClick={onClick} mood={mood}>
      <GummyInsights />
    </GummyAvatar>
  );
};
