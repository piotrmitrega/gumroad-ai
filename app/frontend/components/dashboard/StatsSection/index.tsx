import React from "react";
import styles from './styles.module.scss';

export type StatsSectionsProps = {
  totalSales: number;
  totalRevenue: number;
}

export const StatsSections = ({
  totalSales,
  totalRevenue
}: StatsSectionsProps): JSX.Element => {

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
