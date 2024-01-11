import React, { HTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";

export type GummySuggestionAvailableButtonProps = HTMLAttributes<HTMLButtonElement> & {

}

export const GummySuggestionAvailableButton = ({className, ...baseProps}: GummySuggestionAvailableButtonProps): JSX.Element => {
  return (
    <button className={classnames(styles.gummyButton, className)} {...baseProps} />
  );
};
