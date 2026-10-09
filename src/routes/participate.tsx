import { createFileRoute } from "@tanstack/react-router";
import { IntroPage } from "@/components/aikyam/SiteLayout";

export const Route = createFileRoute("/participate")({
  head: () => ({ meta: [{ title: "Discover Ways to Participate — AIKYAM" }] }),
  component: () => (
    <IntroPage eyebrow="Learning · Community · Service" title="Discover Ways to Participate">
      <p>
        Our intention is to engage through learning, community, and service: deepening awareness,
        building connections, and bringing care into action.
      </p>
      <p className="participation-note">Participation details will be added soon.</p>
    </IntroPage>
  ),
});
