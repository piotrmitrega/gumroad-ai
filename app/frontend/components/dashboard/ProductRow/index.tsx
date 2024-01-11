import React, { useCallback } from "react";
import { Product } from "../../../types/api";
import { ProductImprovementsData } from "../../../types/ai";
import { Icon } from "../../base/Icon";
import { IconType } from "../../../enums/iconType";
import { GummySuggestionAvailableButton } from "../../gummy/GummySuggestionAvailableButton";
import { useGummyContext } from "../../../contexts/GumyContext";
import { createProductImprovementsInsight } from "../../../consts/gummy";
import styles from "./styles.module.scss";

export type ProductRowProps = {
  product: Product;
  productImprovements: ProductImprovementsData;
}

export const ProductRow = ({
  productImprovements,
  product
}: ProductRowProps): JSX.Element => {
  const {
    insight,
    setInsight,
    hideInsight
  } = useGummyContext();

  const isActive = insight?.relatedItemId === product.id;

  const onClick = useCallback(() => {
    if (isActive) {
      hideInsight();
    } else {
      setInsight(createProductImprovementsInsight(product, productImprovements));
    }
  }, [isActive, product, productImprovements]);

  return (
    <tr key={product.id} className={isActive && styles.highlighted}>
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

      {Boolean(productImprovements) && <GummySuggestionAvailableButton onClick={onClick} />}
    </tr>
  );
};
