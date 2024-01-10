import React, { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { Link, LinkProps } from 'react-router-dom';
import classnames from "classnames";
import { Icon } from "../../base/Icon";
import { IconType } from "../../../enums/iconType";
import styles from "./styles.module.scss";

export type NavLinkProps = LinkProps & {
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
  to,
  ...baseProps
}: NavLinkProps): JSX.Element => {
  return (
    <Link
      className={classnames(
        styles.navLink,
        disabled && styles.disabled,
        isActive && styles.active,
        className
      )}
      to={to || ''}
      {...baseProps}
    >
      <Icon className={styles.icon} iconType={iconType} />
      {children}
    </Link>
  );
};
