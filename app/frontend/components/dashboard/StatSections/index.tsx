import React, { useMemo } from "react";
import { Product, Sale } from "../../../types/api";
import styles from './styles.module.scss';

export type StatSectionsProps = {
  products: Product[];
  sales: Sale[]
}

export const StatSections = ({
  products,
  sales
}: StatSectionsProps): JSX.Element => {
  const [totalSales, totalRevenue] = useMemo(() => {
    let totalSalesValue = 0;
    let totalRevenueValue = 0;

    products.forEach(product => {
      totalSalesValue += product.sales_count;
      totalRevenueValue += product.sales_usd_cents;
    })

    return [totalSalesValue, totalRevenueValue / 100]
  }, [sales, products]);

  return (
    <div className={styles.cardsLayout}>
      {/*that should be a separated component*/}
      <section className={styles.statsCard}>
        <h2 className={styles.cardHeader}>Sales</h2>

        <span>{totalSales.toLocaleString()}</span>
      </section>

      <section className={styles.statsCard}>
        <h2 className={styles.cardHeader}>Total Revenue</h2>

        ${totalRevenue}
      </section>
    </div>
  );
};
