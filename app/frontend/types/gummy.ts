import { GummyMood } from "../enums/gummyMood";

export type GummyInsight = {
  name: string;
  messages: GummyMessage[];
  searchable: boolean;
  publicLabel?: string;
}

export type GummyMessage = {
  content: string;
  skippable: boolean;
  hideAfterMs?: number;
  action?: () => void;
  mood?: GummyMood;
}
