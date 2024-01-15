import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { RoutePath } from "../../../enums/routePath";
import { DashboardPage } from "../../../pages/DashboardPage";
import { ProductsPage } from "../../../pages/ProductsPage";
import { useFetchRequest } from "../../../hooks/useFetchRequest";
import { User } from "../../../types/api";
import { Navbar } from "../../navigation/Navbar";
import { AppLayoutWrapper } from "../../layout/AppLayoutWrapper";
import { GummyContextProvider } from "../../../contexts/GumyContext";
import { UserContextProvider } from "../../../contexts/UserContext";

export const ProtectedAppRoutes = (): JSX.Element => {
  const {
    data: user,
    isError,
    isFetching
  } = useFetchRequest<User>("/api/me");

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Redirect to={RoutePath.Login} />;
  }

  return (
    <GummyContextProvider>
      <UserContextProvider user={user}>
        <AppLayoutWrapper>
          <Navbar />
          <Switch>
            <Route path={RoutePath.Dashboard}>
              <DashboardPage />
            </Route>
            <Route path={RoutePath.Products}>
              <ProductsPage />
            </Route>
            <Route>
              <Redirect to={RoutePath.Dashboard} />
            </Route>
          </Switch>
        </AppLayoutWrapper>
      </UserContextProvider>
    </GummyContextProvider>
  );
};
