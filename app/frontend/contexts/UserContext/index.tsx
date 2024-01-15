import React, { useContext, useMemo } from "react";
import { User } from "../../types/api";

export type UserContextValue = {
  user: User
}

export const UserContext =
  React.createContext<UserContextValue>({
    user: null
  });

export type UserContextProviderProps = {
  children: React.ReactNode;
  user: User;
}

export const UserContextProvider = (
  {
    children,
    user
  }: UserContextProviderProps
): JSX.Element => {
  const value = useMemo(() => ({ user }), [user]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextValue => {
  return useContext(UserContext);
};
