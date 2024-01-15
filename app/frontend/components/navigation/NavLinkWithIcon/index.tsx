import React from "react";
import { Icon } from "../../base/Icon";
import { IconType } from "../../../enums/iconType";
import { NavLink, NavLinkProps } from "../NavLink";
import styles from "./styles.module.scss";

export type NavLinkWithIconProps = NavLinkProps & {
  iconType: IconType;
}

export const NavLinkWithIcon = ({
  iconType,
  children,
  ...baseProps
}: NavLinkWithIconProps): JSX.Element => {
  return (
    <NavLink {...baseProps}>
      <Icon className={styles.icon} iconType={iconType} />
      {children}
    </NavLink>
  );
};
