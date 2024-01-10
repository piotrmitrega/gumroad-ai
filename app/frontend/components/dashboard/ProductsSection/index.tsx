import React from "react";
import { Product } from "../../../types/api";
import styles from "./styles.module.scss";
import { Icon } from "../../base/Icon";
import { IconType } from "../../../enums/iconType";

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
        return (
          <tr>
            <td className={styles.thumbnailCell}>
              {product.thumbnail_url ? (
                <img className={styles.thumbnailImg} src={product.thumbnail_url} />
              ) : (
                <Icon iconType={IconType.Image} />
              )}
            </td>
            <td>
              <div>
                <h4>{product.name}</h4>
                <a className={styles.link} href={product.short_url}>{product.short_url}</a>
              </div>
            </td>
            <td>{product.sales_count}</td>
            <td>${product.sales_usd_cents / 100}</td>
            <td>${product.price / 100}</td>
            <td>{product.published ? "Published" : "Unpublished"}</td>
          </tr>
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
