import React, { useEffect, useMemo, useState } from "react";
import { PageWrapper } from "../../components/layout/PageWrapper";
import { HeaderWrapper } from "../../components/layout/HeaderWrapper";
import { useFetchRequest } from "../../hooks/useFetchRequest";
import { PageContentWrapper } from "../../components/layout/PageContentWrapper";
import { Product, Sale } from "../../types/api";
import { StatsSections } from "../../components/dashboard/././StatsSection";
import { ProductsSection } from "../../components/dashboard/ProductsSection";
import { ActivitySection } from "../../components/dashboard/ActivitySection";
import { GummyAvatar } from "../../components/gummy/GummyAvatar";
import { GummyMood } from "../../enums/gummyMood";

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

  const [mood, setMood] = useState(GummyMood.Chilling);

  useEffect(() => {
  // setInterval(() => {
  //   setMood(previousMood => {
  //     const values = Object.values(GummyMood);
  //     const index = values.indexOf(previousMood);
  //
  //     console.log(index + 1)
  //     return values[index + 1]
  //   })
  // }, 1000)
  }, []);

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
        <h1>Hey, Piotr! Welcome back to Gumroad.</h1>
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

      <GummyAvatar mood={mood}/>
    </PageWrapper>
  );
};
