import React, { HTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";

export type LogoProps = HTMLAttributes<HTMLDivElement>;

export const Logo = ({
  className,
  ...baseProps
}: LogoProps): JSX.Element => {
  return (
    <div className={classnames(styles.logo, className)} {...baseProps} />
  );
};
