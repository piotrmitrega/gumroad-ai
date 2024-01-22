import React from "react";
import { GummyMessage, GummyRewrittenProductMessageData } from "../../../types/gummy";
import { stringifyProductImprovementItem } from "../../../utils/stringifyProductImprovementItem";
import { Icon } from "../../base/Icon";
import { IconType } from "../../../enums/iconType";
import { useGummyContext } from "../../../contexts/GumyContext";
import styles from "./styles.module.scss";

export type GummyRewrittenProductMessageProps = {
  message: GummyMessage
}

export const GummyRewrittenProductMessage = ({ message }: GummyRewrittenProductMessageProps): JSX.Element => {
  const {
    product,
    rewrittenDescription,
    productImprovements
  } = message.data as GummyRewrittenProductMessageData;

  const { hideInsight } = useGummyContext();

  return (
    <div>
      <div className={styles.headerWrapper}>
        <h2 className={styles.header}>Feedback for "{product.name}"</h2>

        <button className={styles.closeButton} onClick={hideInsight}>
          <Icon className={styles.closeIcon} iconType={IconType.XSquare} />
        </button>
      </div>

      <div className={styles.feedback}>
        {stringifyProductImprovementItem(productImprovements.description)}
        <br />
        <br />
        For your convenience, I prepared a revised version of the description:
      </div>

      <div className={styles.sideBySide}>
        <h3 className={styles.title}>Current version</h3>
        <h3 className={styles.title}>My suggestion</h3>
      </div>

      <div className={styles.sideBySide}>
        <div className={styles.item} dangerouslySetInnerHTML={{ __html: product.description }} />
        <div className={styles.item} dangerouslySetInnerHTML={{ __html: rewrittenDescription }} />
      </div>
    </div>
  );
};
