import { GummyInsight } from "../types/gummy";
import { GummyMood } from "../enums/gummyMood";
import { ProductImprovementsData } from "../types/ai";
import { Product } from "../types/api";
import { stringifyProductImprovementItem } from "../utils/stringifyProductImprovementItem";

export const WelcomeGummyInsight: GummyInsight = {
  name: "welcome",
  searchable: false,
  messages: [{
    content: "Hi there! I'm Gummy, your best personal advisor.",
    mood: GummyMood.Chilling,
    skippable: true
  }, {
    content: "I'll do my best to boost your sales and enhance your products.",
    skippable: true
  }, {
    content: "We're in this together!",
    skippable: true,
    mood: GummyMood.Smiling
  }]
};
export const AnalyzingDataGummyInsights: GummyInsight = {
  name: "analyzing-data",
  searchable: false,
  messages: [{
    content: "Let me take a look at your data.",
    mood: GummyMood.Concerned,
    skippable: false
  }]
};

export const createProductImprovementsInsight = (
  product: Product,
  improvementsData: ProductImprovementsData
): GummyInsight => {
  const {
    tags,
    description
  } = improvementsData;

  return {
    name: "product-improvement",
    publicLabel: `Improvements for product ${product.name}`,
    relatedItemId: product.id,
    searchable: true,
    messages: [{
      content: `${stringifyProductImprovementItem(description)}\n\n${stringifyProductImprovementItem(tags)}`,
      mood: GummyMood.Concerned,
      skippable: false
    }]
  };
};
