import { createFileRoute } from "@tanstack/react-router";
import { AboutExperience } from "@/components/aikyam/AboutExperience";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AIKYAM — From Separation to Wholeness" },
      {
        name: "description",
        content:
          "Explore AIKYAM through awareness, connection, and the four paths towards wholeness.",
      },
    ],
  }),
  component: AboutExperience,
});
