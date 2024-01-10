import React from "react";
import { PageWrapper } from "../../components/layout/PageWrapper";
import { HeaderWrapper } from "../../components/layout/HeaderWrapper";
import { useFetchRequest } from "../../hooks/useFetchRequest";
import { PageContentWrapper } from "../../components/layout/PageContentWrapper";
import { Product, Sale } from "../../types/api";
import { StatSections } from "../../components/dashboard/StatSections";

export const DashboardPage = (): JSX.Element => {
  const {
    data: products,
    isError: isProductsError,
    isFetching: isFetchingProducts
  } = useFetchRequest<Product[]>("/api/products");

  const {
    data: sales,
    isError: isSalesError,
    isFetching: isFetchingSales
  } = useFetchRequest<Sale[]>("/api/sales");

  if (isFetchingProducts || isFetchingSales) {
    return <div>Loading...</div>;
  }

  if (isProductsError || isSalesError) {
    return <div>Sorry but we could not load data :(</div>;
  }

  return (
    <PageWrapper>
      <HeaderWrapper>
        <h1>Hey, Piotr! Welcome back to Gumroad.</h1>
      </HeaderWrapper>

      <PageContentWrapper>
        <StatSections products={products} sales={sales} />
      </PageContentWrapper>
    </PageWrapper>
  );
};
