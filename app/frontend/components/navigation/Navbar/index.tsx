import React from "react";
import { NavLink } from "../NavLink";
import { IconType } from "../../../enums/iconType";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";
import { RoutePath } from "../../../enums/routePath";

export const Navbar = (): JSX.Element => {
  const location = useLocation();

  const route = RoutePath[location.pathname];

  console.log(route, "is", route === RoutePath.Dashboard || !route);

  return (
    <nav className={styles.navbar}>
      <a className={styles.logoLink} href="/dashboard">
        <div className={styles.logo} />
      </a>

      <section className={styles.navSection}>
        <NavLink isActive={route === RoutePath.Dashboard || !route} iconType={IconType.Shop}>
          Home
        </NavLink>
        <NavLink isActive={route === RoutePath.Products} iconType={IconType.Archive}>
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
