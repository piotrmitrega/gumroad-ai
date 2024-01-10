import React from "react";
import styles from "./styles.module.scss";

export type ButtonProps = {}

export const Button = ({}: ButtonProps): JSX.Element => {
  return (
    <button className={styles.button} />
  );
};
