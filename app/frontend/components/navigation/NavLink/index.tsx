import React from "react";
import { Link, LinkProps } from 'react-router-dom';
import classnames from "classnames";
import styles from "./styles.module.scss";

export type NavLinkProps = LinkProps & {
  isActive?: boolean
  disabled?: boolean;
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
      {children}
    </Link>
  );
};
