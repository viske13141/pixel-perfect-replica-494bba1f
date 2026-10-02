// Story chapters are defined in FRAME numbers (1-based) of the combined 71-frame
// sequence, so timing stays correct when frames or scroll weights change.
//  1–44  original journey (aerial → interior)
// 45–64  courtyard update: Shiva courtyard, side view, Nandi, Nandi detail, water architecture
// 65–71  original sunset sanctuary reveal
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
  startFrame: number;
  endFrame: number;
  eyebrow?: string;
  title: string[];
  description?: string;
  position: ChapterPosition;
  size?: "md" | "lg" | "sm";
  holdToEnd?: boolean;
}

/** Scroll weight per frame (default 1). Higher = camera lingers longer. */
export const frameWeights: Record<number, number> = {
  45: 1.6, 46: 1.4, // arrival in the Shiva courtyard
  49: 0.6, // darkened frame passes quickly
  63: 2.2, 64: 2.6, // frontal Nandi — a slow pause
  57: 0, // (unused key guard)
  70: 1.5, 71: 2.5, // final reveal settles
};

export const chapters: Chapter[] = [
  { id: "aerial", startFrame: 1, endFrame: 7.5, eyebrow: "A Sacred Journey", title: ["Where Earth", "Meets the Divine"],
    description: "An immersive passage through sacred architecture, timeless devotion and living tradition.", position: "top-left" },
  { id: "approach", startFrame: 8, endFrame: 14.5, eyebrow: "The Approach", title: ["Every Step", "Has Meaning"],
    description: "From the first threshold, architecture guides the visitor from the outer world toward inner stillness.", position: "right" },
  { id: "threshold", startFrame: 15, endFrame: 19.5, eyebrow: "The Threshold", title: ["Enter a World", "Shaped by Devotion"],
    description: "Stone, symmetry and sacred geometry transform the entrance into a passage between worlds.", position: "left" },
  { id: "sculpted", startFrame: 20, endFrame: 24.5, eyebrow: "Sculpted Stories", title: ["Every Detail", "Carries a Story"],
    description: "Carvings, pillars and sacred forms preserve generations of craftsmanship and belief.", position: "top-right" },
  { id: "architecture", startFrame: 25, endFrame: 29.5, eyebrow: "Sacred Architecture", title: ["Built to Be", "Experienced"],
    description: "Light, proportion and geometry guide the eye through spaces designed for contemplation.", position: "top-left" },
  { id: "above", startFrame: 30, endFrame: 34, eyebrow: "Look Above", title: ["Architecture", "Reaching for the Divine"],
    position: "bottom-center", size: "lg" },
  { id: "stone", startFrame: 34.5, endFrame: 38.5, eyebrow: "Crafted in Stone", title: ["Centuries", "in Every Detail"],
    description: "Every surface becomes part of a larger visual language of symbolism, memory and devotion.", position: "bottom-left", size: "sm" },
  { id: "beyond", startFrame: 39.5, endFrame: 44.5, title: ["Move Beyond", "What Can Be Seen"],
    description: "The journey inward is as important as the journey through.", position: "center", size: "sm" },
  // — courtyard update —
  { id: "courtyard", startFrame: 45, endFrame: 48.5, eyebrow: "The Inner Courtyard", title: ["Stillness", "Held in Water"],
    position: "top-left", size: "sm" },
  { id: "nandi", startFrame: 62.5, endFrame: 65, eyebrow: "Darshan", title: ["Before Nandi"],
    position: "top-right", size: "sm" },
  { id: "water", startFrame: 59.5, endFrame: 62, eyebrow: "Carried by Many Hands", title: ["Stone Above", "Still Water"],
    position: "top-right", size: "sm" },
  // — original finale —
  { id: "reveal", startFrame: 66, endFrame: 71, title: ["A Timeless", "Sanctuary"],
    description: "Where architecture, devotion and human craftsmanship exist as one.", position: "final", size: "lg", holdToEnd: true },
];

export const progressMarks = [
  { label: "01", frame: 1 },
  { label: "02", frame: 15 },
  { label: "03", frame: 30 },
  { label: "04", frame: 45 },
  { label: "05", frame: 52 },
  { label: "06", frame: 65 },
];
