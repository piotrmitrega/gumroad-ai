import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "../NavLink";
import { IconType } from "../../../enums/iconType";
import { RoutePath } from "../../../enums/routePath";
import styles from "./styles.module.scss";

export const Navbar = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.navbar}>
      <a className={styles.logoLink} href={RoutePath.Dashboard}>
        <div className={styles.logo} />
      </a>

      <section className={styles.navSection}>
        <NavLink
          to={RoutePath.Dashboard}
          isActive={pathname === RoutePath.Dashboard}
          iconType={IconType.Shop}
        >
          Home
        </NavLink>
        <NavLink
          to={RoutePath.Products}
          isActive={pathname === RoutePath.Products}
          iconType={IconType.Archive}
        >
          Products
        </NavLink>
        <NavLink disabled iconType={IconType.Cart}>
          Checkout
        </NavLink>
        <NavLink disabled iconType={IconType.Envelope}>
          Emails
        </NavLink>
        <NavLink disabled iconType={IconType.Diagram}>
          Workflows
        </NavLink>
        <NavLink disabled iconType={IconType.Dollar}>
          Sales
        </NavLink>
        <NavLink disabled iconType={IconType.BarChart}>
          Analytics
        </NavLink>
      </section>

      <section className={styles.navSection}>
        <NavLink disabled iconType={IconType.Dollar}>
          Payouts
        </NavLink>
        <NavLink disabled iconType={IconType.Search}>
          Discover
        </NavLink>
        <NavLink disabled iconType={IconType.Bookmark}>
          Library
        </NavLink>
      </section>

      <section className={styles.navSection}>
        <NavLink disabled iconType={IconType.BookOpen}>
          Help
        </NavLink>
        <NavLink disabled iconType={IconType.Settings}>
          Settings
        </NavLink>
      </section>
    </nav>
  );
};
