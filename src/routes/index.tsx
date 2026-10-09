import { createFileRoute } from "@tanstack/react-router";
import { TempleExperience } from "@/components/temple/TempleExperience";
import { SiteNav } from "@/components/aikyam/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Where Earth Meets the Divine — A Temple Journey" },
      { name: "description", content: "Scroll through a cinematic journey into a sacred Hindu temple — from the sky to the sanctum." },
      { property: "og:title", content: "Where Earth Meets the Divine — A Temple Journey" },
      { property: "og:description", content: "A scroll-driven cinematic passage through sacred architecture and living tradition." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="aikyam-page">
      <SiteNav />
      <TempleExperience />
    </div>
  );
}
