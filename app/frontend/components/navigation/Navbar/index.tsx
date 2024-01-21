import React, { useCallback } from "react";
import classnames from "classnames";
import { useLocation } from "react-router-dom";
import { NavLinkWithIcon } from "../NavLinkWithIcon";
import { IconType } from "../../../enums/iconType";
import { RoutePath } from "../../../enums/routePath";
import { NavLink } from "../NavLink";
import { useUserContext } from "../../../contexts/UserContext";
import { Logo } from "../../base/Logo";
import gummyChillingPath from "../../../images/gummy-chilling.png";

import styles from "./styles.module.scss";
import { useRequest } from "../../../hooks/useRequest";

export const Navbar = (): JSX.Element => {
  const { pathname } = useLocation();
  const { user } = useUserContext();

  const { request } = useRequest();

  const onLogout = useCallback(async () => {
    await request("/logout", { method: "delete" });
    window.location.href = RoutePath.Login;
  }, [request]);

  return (
    <nav className={styles.navbar}>
      <a className={styles.logoLink} href={RoutePath.Dashboard}>
        <Logo />
      </a>

      <section className={classnames(styles.navSection, styles.withMargin)}>
        <NavLinkWithIcon
          to={RoutePath.Dashboard}
          isActive={pathname === RoutePath.Dashboard}
          iconType={IconType.Shop}
        >
          Home
        </NavLinkWithIcon>
        <NavLinkWithIcon disabled iconType={IconType.Archive}>
          Products
        </NavLinkWithIcon>
        <NavLinkWithIcon disabled iconType={IconType.Cart}>
          Checkout
        </NavLinkWithIcon>
        <NavLinkWithIcon disabled iconType={IconType.Envelope}>
          Emails
        </NavLinkWithIcon>
        <NavLinkWithIcon disabled iconType={IconType.Diagram}>
          Workflows
        </NavLinkWithIcon>
        <NavLinkWithIcon disabled iconType={IconType.Dollar}>
          Sales
        </NavLinkWithIcon>
        <NavLinkWithIcon disabled iconType={IconType.BarChart}>
          Analytics
        </NavLinkWithIcon>
      </section>

      <section className={classnames(styles.navSection, styles.withMargin)}>
        <NavLinkWithIcon disabled iconType={IconType.Dollar}>
          Payouts
        </NavLinkWithIcon>
        <NavLinkWithIcon disabled iconType={IconType.Search}>
          Discover
        </NavLinkWithIcon>
        <NavLinkWithIcon disabled iconType={IconType.Bookmark}>
          Library
        </NavLinkWithIcon>
      </section>

      <section className={classnames(styles.navSection, styles.bottomSection)}>
        <NavLinkWithIcon disabled iconType={IconType.BookOpen}>
          Help
        </NavLinkWithIcon>
        <NavLinkWithIcon disabled iconType={IconType.Settings}>
          Settings
        </NavLinkWithIcon>
      </section>

      <NavLink className={styles.userInfo} onClick={onLogout}>
        <img className={styles.userPhoto} src={user.profile_url || gummyChillingPath} />{user.name}
      </NavLink>
    </nav>
  );
};
