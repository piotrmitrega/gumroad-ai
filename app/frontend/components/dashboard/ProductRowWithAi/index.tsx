import React, { useCallback, useState } from "react";
import { ProductRewriteResponse, ProductImprovementsResponse } from "../../../types/ai";
import { GummySuggestionAvailableButton } from "../../gummy/GummySuggestionAvailableButton";
import { useGummyContext } from "../../../contexts/GumyContext";
import { createProductImprovementsInsight } from "../../../consts/gummy";
import classnames from "classnames";
import { usePollRequest } from "../../../hooks/usePollRequest";
import { ProductRow, ProductRowProps } from "../ProductRow";
import styles from "./styles.module.scss";

export type ProductRowWithAiProps = ProductRowProps;

export const ProductRowWithAi = ({
  product
}: ProductRowWithAiProps): JSX.Element => {
  const {
    insight,
    setInsight,
    hideInsight
  } = useGummyContext();

  const { data: productImprovements } = usePollRequest<ProductImprovementsResponse>(
    `/api/ai/product/${product.id}/suggestion`
  );
  const { data: rewrittenDescriptionResponse } = usePollRequest<ProductRewriteResponse>(
    `/api/ai/product/${product.id}/rewrite`,
    null,
    Boolean(productImprovements)
  );

  const isActive = insight?.relatedItemId === product.id;

  const onClick = useCallback(() => {
    if (isActive) {
      hideInsight();
    } else {
      setInsight(createProductImprovementsInsight(product, productImprovements, rewrittenDescriptionResponse.description));
    }
  }, [isActive, product, productImprovements, rewrittenDescriptionResponse]);

  return (
    <ProductRow product={product} className={classnames(isActive && styles.highlighted)}>
      {Boolean(productImprovements && rewrittenDescriptionResponse) &&
        <GummySuggestionAvailableButton onClick={onClick} />}
    </ProductRow>
  );
};
