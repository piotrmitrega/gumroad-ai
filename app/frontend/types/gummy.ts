import { GummyMood } from "../enums/gummyMood";
import { GummyInsightCustomComponentId } from "../enums/gummyInsightCustomComponentId";
import { ProductImprovementItem, ProductImprovementsResponse, ProductRewriteResponse } from "./ai";

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
  rewrittenDescription: string;
}
