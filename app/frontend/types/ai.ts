export type ProductImprovementItem = {
  overview: string;
  suggestions: string[];
}

export type ProductImprovementsResponse = {
  description: ProductImprovementItem;
  tags: ProductImprovementItem;
}

export type ProductRewriteResponse = {
  description: string;
}
