import { createFileRoute } from "@tanstack/react-router";
import { IntroPage } from "@/components/aikyam/SiteLayout";
import { gates } from "@/components/aikyam/content";

export const Route = createFileRoute("/aikya-mandala")({
  head: () => ({ meta: [{ title: "Explore AIKYA Mandala — AIKYAM" }] }),
  component: () => (
    <IntroPage eyebrow="The four paths" title="Explore AIKYA Mandala">
      <p>Four paths come together in a journey towards wholeness.</p>
      <dl className="mandala-paths">
        {gates.map((gate) => (
          <div key={gate.name}>
            <dt>
              {gate.name} <span>— {gate.intention}</span>
            </dt>
            <dd>{gate.detail}</dd>
          </div>
        ))}
        <div>
          <dt>
            Centre: AIKYAM <span>— I INTEGRATE</span>
          </dt>
          <dd>Bringing the four paths together in everyday life.</dd>
        </div>
      </dl>
    </IntroPage>
  ),
});
