import React from "react";
import { Route, Switch } from "react-router-dom";
import { RoutePath } from "../../../enums/routePath";
import { ProtectedAppRoutes } from "../ProtectedAppRoutes";
import { LoginPage } from "../../../pages/LoginPage";

export const AppRoutes = (): JSX.Element => {
  return (
    <Switch>
      <Route path={RoutePath.Login}>
        <LoginPage />
      </Route>
      <Route >
        <ProtectedAppRoutes />
      </Route>
    </Switch>
  );
};
