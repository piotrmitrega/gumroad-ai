import React, { HTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";
import { IconType } from "../../../enums/iconType";

export type IconProps = HTMLAttributes<HTMLDivElement> & {
  iconType: IconType;
}

export const Icon = ({
  iconType,
  className,
  ...baseProps
}: IconProps): JSX.Element => {

  return (
    <div className={classnames(styles.icon, styles[iconType], className)} {...baseProps} />
  );
};
