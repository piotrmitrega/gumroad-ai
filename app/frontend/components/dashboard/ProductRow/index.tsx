import React, { HTMLAttributes } from "react";
import { Product } from "../../../types/api";
import { Icon } from "../../base/Icon";
import { IconType } from "../../../enums/iconType";
import styles from "./styles.module.scss";

export type ProductRowProps = HTMLAttributes<HTMLTableRowElement> & {
  product: Product;
}

export const ProductRow = ({
  product,
    children,
  ...baseProps
}: ProductRowProps): JSX.Element => {
  return (
    <tr key={product.id} {...baseProps}>
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
      <td className={styles.lastCell}>
        {product.published ? "Published" : "Unpublished"}
        {children}
      </td>
    </tr>
  );
};
