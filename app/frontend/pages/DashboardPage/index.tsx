import React, { useMemo } from "react";
import { PageWrapper } from "../../components/layout/PageWrapper";
import { HeaderWrapper } from "../../components/layout/HeaderWrapper";
import { useFetchRequest } from "../../hooks/useFetchRequest";
import { PageContentWrapper } from "../../components/layout/PageContentWrapper";
import { Product, Sale } from "../../types/api";
import { ProductsSection } from "../../components/dashboard/ProductsSection";
import { ActivitySection } from "../../components/dashboard/ActivitySection";
import { StatsSections } from "../../components/dashboard/StatsSection";
import { GummyAvatarContainer } from "../../components/gummy/GummyAvatarContainer";
import { useUserContext } from "../../contexts/UserContext";

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

  const { user } = useUserContext();

  const [totalSales, totalRevenue] = useMemo(() => {
    if (!products) {
      return [];
    }

    let totalSalesValue = 0;
    let totalRevenueValue = 0;

    products.forEach(product => {
      totalSalesValue += product.sales_count;
      totalRevenueValue += product.sales_usd_cents;
    });

    return [totalSalesValue, totalRevenueValue / 100];
  }, [products]);

  if (isFetchingProducts || isFetchingSales) {
    return <div>Loading...</div>;
  }

  if (isProductsError || isSalesError) {
    return <div>Sorry but we could not load data :(</div>;
  }

  return (
    <PageWrapper>
      <HeaderWrapper>
        <h1>Hey, {user.name}! Welcome back to Gumroad.</h1>
      </HeaderWrapper>

      <PageContentWrapper>
        <StatsSections
          totalSales={totalSales}
          totalRevenue={totalRevenue}
        />
        <ProductsSection
          products={products}
          totalSales={totalSales}
          totalRevenue={totalRevenue}
        />
        <ActivitySection sales={sales} />
      </PageContentWrapper>

      <GummyAvatarContainer />
    </PageWrapper>
  );
};
