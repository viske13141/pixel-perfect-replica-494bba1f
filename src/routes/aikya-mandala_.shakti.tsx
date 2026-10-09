import { createFileRoute } from "@tanstack/react-router";
import { ShaktiJourney } from "@/components/shakti/ShaktiJourney";

export const Route = createFileRoute("/aikya-mandala_/shakti")({
  head: () => ({
    meta: [
      { title: "Shakti — I CREATE | The 18 Maha Shakti Peethas | AIKYAM" },
      {
        name: "description",
        content:
          "Explore sacred expressions of Shakti and reflect on creative energy, intention, and the possibilities you bring into the world.",
      },
    ],
  }),
  component: ShaktiJourney,
});
