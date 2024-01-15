import React from "react";
import { useFetchRequest } from "../../../hooks/useFetchRequest";
import { User } from "../../../types/api";
import { RoutePath } from "../../../enums/routePath";
import { Redirect} from 'react-router-dom';

type AuthGuardProps = {
  children: React.ReactNode
}
export const AuthGuard = ({ children }: AuthGuardProps): JSX.Element => {
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

  return <>{children}</>;
};
