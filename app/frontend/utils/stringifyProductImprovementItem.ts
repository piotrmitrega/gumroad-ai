import { ProductImprovementItem, ProductImprovementsData } from "../types/ai";

export const stringifyProductImprovementItem = (improvement: ProductImprovementItem) => {
  if (!improvement.needsChanges) {
    return "";
  }

  return `${improvement.overview}\n\n${improvement.suggestions.map(suggestion => `👉 ${suggestion}`)
    .join("\n")}`
  }
