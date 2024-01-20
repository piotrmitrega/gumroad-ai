import React, { useCallback, useEffect, useState } from "react";
import { ProductRewriteResponse, ProductImprovementsResponse } from "../../../types/ai";
import { GummySuggestionAvailableButton } from "../../gummy/GummySuggestionAvailableButton";
import { useGummyContext } from "../../../contexts/GumyContext";
import { createProductImprovementsInsight } from "../../../consts/gummy";
import classnames from "classnames";
import { useFetchRequest } from "../../../hooks/useFetchRequest";
import { ProductRow, ProductRowProps } from "../ProductRow";
import styles from "./styles.module.scss";
import { useRequest } from "../../../hooks/useRequest";
import { useEffectAsync } from "../../../hooks/useEffectAsync";

export type ProductRowWithAiProps = ProductRowProps;

export const ProductRowWithAi = ({
  product
}: ProductRowWithAiProps): JSX.Element => {
  const {
    insight,
    setInsight,
    hideInsight
  } = useGummyContext();

  const { data: productImprovements } = useFetchRequest<ProductImprovementsResponse>(`/api/ai/product/${product.id}/suggestion`);
  const { request } = useRequest<ProductRewriteResponse>();

  const [rewrittenDescription, setRewrittenDescription] = useState<string>();

  useEffectAsync(async () => {
    if (!productImprovements) {
      return;
    }

    const response = await request(`/api/ai/product/${product.id}/rewrite`);

    console.log(response)
    setRewrittenDescription(response.description);
  }, [productImprovements, product.id]);

  const isActive = insight?.relatedItemId === product.id;

  const onClick = useCallback(() => {
    if (isActive) {
      hideInsight();
    } else {
      setInsight(createProductImprovementsInsight(product, productImprovements));
    }
  }, [isActive, product, productImprovements]);

  return (
    <ProductRow product={product} className={classnames(isActive && styles.highlighted)}>
      {Boolean(productImprovements) && <GummySuggestionAvailableButton onClick={onClick} />}
    </ProductRow>
  );
};
