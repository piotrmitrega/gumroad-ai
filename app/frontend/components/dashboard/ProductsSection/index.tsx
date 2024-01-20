import React from "react";
import { Product } from "../../../types/api";
import styles from "./styles.module.scss";
import { ProductImprovementsResponse } from "../../../types/ai";
import { ProductRow } from "../ProductRow";
import { chooseProductIdsToAnalyze } from "../../../utils/chooseProductIdsToAnalyze";
import { ProductRowWithAi } from "../ProductRowWithAi";

export type ProductsSectionProps = {
  products: Product[];
  totalSales: number;
  totalRevenue: number;
}

export const ProductsSection = ({
  products,
  totalRevenue,
  totalSales
}: ProductsSectionProps): JSX.Element => {
  const productsToAnalyze = chooseProductIdsToAnalyze(products);

  return (
    <table className={styles.table}>
      <caption>Products</caption>

      <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Sales</th>
        <th>Revenue</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
      </thead>

      <tbody>

      {products.map(product => {
          return productsToAnalyze.includes(product.id) ? (
            <ProductRowWithAi key={product.id} product={product} />
          ) : (
            <ProductRow key={product.id} product={product} />
          );
        }
      )}
      </tbody>

      <tfoot>
      <tr>
        <td colSpan={2}>Totals</td>
        <td>{totalSales}</td>
        <td colSpan={5}>${totalRevenue}</td>
      </tr>
      </tfoot>
    </table>
  );
};
