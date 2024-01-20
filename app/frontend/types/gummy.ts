import { GummyMood } from "../enums/gummyMood";
import { GummyInsightCustomComponentId } from "../enums/gummyInsightCustomComponentId";
import { ProductImprovementsResponse } from "./ai";
import { Product } from "./api";

export type GummyInsight = {
  name: string;
  messages: GummyMessage[];
  searchable: boolean;
  publicLabel?: string;
  relatedItemId?: string;
}

export type GummyMessage = {
  skippable: boolean;
  content?: string;
  fullScreen?: boolean;
  hideAfterMs?: number;
  action?: () => void;
  mood?: GummyMood;
  customComponentId?: GummyInsightCustomComponentId;
  data?: Record<string, any>;
}

export type GummyRewrittenProductMessageData = {
  productImprovements: ProductImprovementsResponse;
  product: Product;
  rewrittenDescription: string;
}
