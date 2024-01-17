export type ProductImprovementItem = {
  overview: string;
  suggestions: string[];
}

export type ProductImprovementsData = {
  description: ProductImprovementItem;
  tags: ProductImprovementItem;
}
