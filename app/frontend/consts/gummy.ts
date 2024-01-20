import { GummyInsight, GummyRewrittenProductMessageData } from "../types/gummy";
import { GummyMood } from "../enums/gummyMood";
import { ProductImprovementsResponse } from "../types/ai";
import { Product } from "../types/api";
import { stringifyProductImprovementItem } from "../utils/stringifyProductImprovementItem";
import { GummyInsightCustomComponentId } from "../enums/gummyInsightCustomComponentId";

export const WelcomeGummyInsight: GummyInsight = {
  name: "welcome",
  searchable: false,
  messages: [{
    content: `Hello! I'm Gummy, your dedicated personal advisor.
     
     First of all, I deeply appreciate the effort and creativity you've put into your products.
     
     If you don't mind, I'll review some of them to ensure their accuracy and persuasive appeal. My goal is to enhance their potential to attract and engage users effectively, complementing the hard work you've already invested.`,
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
  improvementsData: ProductImprovementsResponse,
  rewrittenDescription: string
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
      customComponentId: GummyInsightCustomComponentId.RewrittenProduct,
      data: {
        productImprovements: improvementsData,
        rewrittenDescription
      } as GummyRewrittenProductMessageData,
      mood: GummyMood.Concerned,
      skippable: false,
      fullScreen: true
    }]
  };
};
