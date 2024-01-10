import React from "react";
import { PageWrapper } from "../../components/layout/PageWrapper";
import { HeaderWrapper } from "../../components/layout/HeaderWrapper";

export const DashboardPage = (): JSX.Element => {
  return (
    <PageWrapper>
      <HeaderWrapper>
        <h1>Hey, Piotr! Welcome back to Gumroad.</h1>
      </HeaderWrapper>
    </PageWrapper>
  );
};
