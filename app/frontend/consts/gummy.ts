import { GummyInsight } from "../types/gummy";
import { GummyMood } from "../enums/gummyMood";

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

export const create: GummyInsight = {
  name: "product-description",
  searchable: false,
  messages: [{
    content: "I had a closer look to your products. May I suggest something?",
    mood: GummyMood.Grinning
  }]
};
