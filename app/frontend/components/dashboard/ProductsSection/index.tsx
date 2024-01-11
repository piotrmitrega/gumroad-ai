import React from "react";
import { Product } from "../../../types/api";
import styles from "./styles.module.scss";
import { Icon } from "../../base/Icon";
import { IconType } from "../../../enums/iconType";
import { GummySuggestionAvailableButton } from "../../gummy/GummySuggestionAvailableButton";
import { ProductImprovementsData } from "../../../types/ai";
import { ProductRow } from "../ProductRow";

export type ProductsSectionProps = {
  products: Product[];
  totalSales: number;
  totalRevenue: number;
  productImprovements?: Record<string, ProductImprovementsData>
}

export const ProductsSection = ({
  products,
  totalRevenue,
  totalSales,
  productImprovements
}: ProductsSectionProps): JSX.Element => {
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
        const improvement = productImprovements?.[product.id];

        return (
          <ProductRow key={product.id} product={product} productImprovements={improvement} />
        );
      })}
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
