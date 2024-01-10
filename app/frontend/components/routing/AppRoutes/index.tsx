import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { RoutePath } from "../../../enums/routePath";
import { DashboardPage } from "../../../pages/DashboardPage";
import { ProductsPage } from "../../../pages/ProductsPage";

export const AppRoutes = (): JSX.Element => {
  return (
    <Switch>
      <Route path={RoutePath.Dashboard}>
        <DashboardPage />
      </Route>
      <Route path={RoutePath.Products} >
        <ProductsPage />
      </Route>
      <Route>
        <Redirect to={RoutePath.Dashboard} />
      </Route>
    </Switch>
  );
};
