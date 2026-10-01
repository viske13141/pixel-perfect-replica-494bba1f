// Story chapters mapped to the real frame ranges of the 51-frame sequence.
// progress = (frameIndex - 1) / 50
export type ChapterPosition =
  | "top-left"
  | "right"
  | "left"
  | "top-right"
  | "bottom-center"
  | "bottom-left"
  | "center"
  | "final";

export interface Chapter {
  id: string;
  start: number;
  end: number;
  eyebrow?: string;
  title: string[];
  description?: string;
  position: ChapterPosition;
  size?: "md" | "lg" | "sm";
  holdToEnd?: boolean;
}

export const chapters: Chapter[] = [
  {
    id: "aerial", // frames 1–7: top-down aerial
    start: 0,
    end: 0.13,
    eyebrow: "A Sacred Journey",
    title: ["Where Earth", "Meets the Divine"],
    description:
      "An immersive passage through sacred architecture, timeless devotion and living tradition.",
    position: "top-left",
  },
  {
    id: "approach", // frames 8–14: descent toward the gateway
    start: 0.14,
    end: 0.27,
    eyebrow: "The Approach",
    title: ["Every Step", "Has Meaning"],
    description:
      "From the first threshold, architecture guides the visitor from the outer world toward inner stillness.",
    position: "right",
  },
  {
    id: "threshold", // frames 15–19: carved entrance gate
    start: 0.28,
    end: 0.37,
    eyebrow: "The Threshold",
    title: ["Enter a World", "Shaped by Devotion"],
    description:
      "Stone, symmetry and sacred geometry transform the entrance into a passage between worlds.",
    position: "left",
  },
  {
    id: "sculpted", // frames 20–24: carved wall on left, domes right
    start: 0.38,
    end: 0.47,
    eyebrow: "Sculpted Stories",
    title: ["Every Detail", "Carries a Story"],
    description:
      "Carvings, pillars and sacred forms preserve generations of craftsmanship and belief.",
    position: "top-right",
  },
  {
    id: "architecture", // frames 25–29: great dome
    start: 0.48,
    end: 0.57,
    eyebrow: "Sacred Architecture",
    title: ["Built to Be", "Experienced"],
    description:
      "Light, proportion and geometry guide the eye through spaces designed for contemplation.",
    position: "top-left",
  },
  {
    id: "above", // frames 30–33: pillared hall, carved ceiling
    start: 0.58,
    end: 0.66,
    eyebrow: "Look Above",
    title: ["Architecture", "Reaching for the Divine"],
    position: "bottom-center",
    size: "lg",
  },
  {
    id: "stone", // frames 34–38: stone floor, colonnade
    start: 0.67,
    end: 0.75,
    eyebrow: "Crafted in Stone",
    title: ["Centuries", "in Every Detail"],
    description:
      "Every surface becomes part of a larger visual language of symbolism, memory and devotion.",
    position: "bottom-left",
    size: "sm",
  },
  {
    id: "beyond", // frames 39–44: emerging toward sanctum
    start: 0.77,
    end: 0.87,
    title: ["Move Beyond", "What Can Be Seen"],
    description: "The journey inward is as important as the journey through.",
    position: "center",
    size: "sm",
  },
  {
    id: "reveal", // frames 46–51: sunset sanctuary
    start: 0.9,
    end: 1,
    title: ["A Timeless", "Sanctuary"],
    description: "Where architecture, devotion and human craftsmanship exist as one.",
    position: "final",
    size: "lg",
    holdToEnd: true,
  },
];

export const progressMarks = [
  { label: "01", at: 0 },
  { label: "02", at: 0.28 },
  { label: "03", at: 0.48 },
  { label: "04", at: 0.67 },
  { label: "05", at: 0.9 },
];
