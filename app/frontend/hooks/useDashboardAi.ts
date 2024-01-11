import { ProductImprovementsData } from "../types/ai";
import { useState } from "react";
import { useEffectAsync } from "./useEffectAsync";

type UseDashboardAiValue = {
  isFetching: boolean;
  data: Record<string, ProductImprovementsData>
}

export const useDashboardAi = (): UseDashboardAiValue => {
  const [isFetching, setFetching] = useState(true);
  const [data, setData] = useState<Record<string, ProductImprovementsData>>();

  // fetch
  useEffectAsync(async () => {
    const time = Math.random() * 3000;
    console.log('time', time)
      await new Promise<void>((resolve) => setTimeout(() => resolve(), Math.random() * 3000));

      setFetching(false);
      setData({
        "3OHg_UOhMhh15ikmBYM3-w==": {
          "description": {
            "needsChanges": true,
            "overview": "The product description is informative, but it can be more engaging and persuasive. Here are some suggestions:",
            "suggestions": [
              "Craft a captivating headline: Instead of 'Convert raster graphics to vectors with 1 click!' consider something like 'Transform Pixelated Images into Crisp Vector Graphics with a Single Click!'",
              "Highlight the benefits: Emphasize the key benefits of the product, such as saving time, enabling scalability, and enhancing visual quality. For example, 'Effortlessly enhance your designs with sharp and scalable vector graphics. Transform pixelated images into stunning visuals, saving valuable time and elevating your creative work!'",
              "Include customer testimonials or success stories: Adding testimonials or success stories from satisfied users can help build trust and showcase the effectiveness of the product."
            ]
          },
          "tags": {
            "needsChanges": false,
            "overview": "The tags provided are relevant and appropriately describe the product.",
            "suggestions": []
          }
        }
      });
      console.log("jupi");
    }, []
  );

  return {
    isFetching,
    data
  };
};
