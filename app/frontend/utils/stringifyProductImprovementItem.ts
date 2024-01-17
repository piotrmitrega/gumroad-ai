import { ProductImprovementItem } from "../types/ai";

export const stringifyProductImprovementItem = (improvement: ProductImprovementItem) => {
  return `${improvement.overview}\n\n${improvement.suggestions.map(suggestion => `👉 ${suggestion}`)
    .join("\n")}`
  }
