import React, { AnchorHTMLAttributes, HTMLAttributes } from "react";
import classnames from "classnames";
import { Icon } from "../../base/Icon";
import { IconType } from "../../../enums/iconType";
import styles from "./styles.module.scss";

export type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  isActive?: boolean
  disabled?: boolean;
  iconType: IconType;
}

export const NavLink = ({
  iconType,
  className,
  isActive,
  disabled,
  children,
  ...baseProps
}: NavLinkProps): JSX.Element => {
  return (
    <a
      className={classnames(
        styles.navLink,
        disabled && styles.disabled,
        isActive && styles.active,
        className
      )}
      {...baseProps}
    >
      <Icon className={styles.icon} iconType={iconType} />
      {children}
    </a>
  );
};
