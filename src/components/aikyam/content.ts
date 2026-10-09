import manifest from "@/assets/aikyam-about-manifest.json";
import publicCopy from "@/assets/aikyam-about-copy.json";

export const gates = [
  { name: "Shakti", intention: "I CREATE", detail: "18 Maha Shakti Peethas" },
  { name: "Shiva", intention: "I SEE", detail: "12 Jyotirlingas" },
  { name: "Bhakti", intention: "I RELATE", detail: "Nine forms of devotion" },
  { name: "Karma", intention: "I CONTRIBUTE", detail: "Five Maha Yajnas" },
];

const copy = [
  "Scroll to explore.",
  "A journey of bringing awareness, action, and relationships together.",
  "Consciousness and energy. Stillness and movement, experienced together.",
  "A shared journey of awareness, learning, connection, and service.",
  "Four paths. One journey towards wholeness.",
  "Bringing the four paths together in everyday life.",
  "Awareness in thought. Care in relationships. Responsibility in action. A moment of reflection, listening with care, a simple act of service.",
  "Experience the Kshetra. Continue exploring online through the AIKYA Mandala and discover the intention behind participation.",
  "Carry the journey forward. Explore the four paths, or discover ways to participate.",
];

export const sections = manifest.sequences
  .flatMap((sequence, sequenceIndex) =>
    sequence.sections.map((section) => ({ ...section, sequence: sequenceIndex + 1 })),
  )
  .map((section, index) => ({
    ...section,
    title: section.id === "centre" ? "The Centre — I Integrate" : section.title,
    copy: copy[index]!,
    content: publicCopy[index]! as Record<string, string>,
    images: section.images.map((path) => `/images/aikyam-about/${path.replace(/\.jpg$/, ".webp")}`),
  }));

export const sequences = [1, 2, 3].map((number) =>
  sections.filter((section) => section.sequence === number),
);
export type AboutSection = (typeof sections)[number];
