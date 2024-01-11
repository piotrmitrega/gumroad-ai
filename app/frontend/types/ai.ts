export type ProductImprovementItem = {
  needsChanges: boolean;
  overview: string;
  suggestions: string[];
}

export type ProductImprovementsData = {
  description: ProductImprovementItem;
  tags: ProductImprovementItem;
}
