/**
 * Shakti Journey — Data Manifest
 *
 * ASSET MAPPING NOTE (requires editorial review):
 * The 40 frames in /goddesvideo2/ depict 9 visual scenes.
 * Provisionally mapped to goddesses 01–09 (Shankari through Mahakali).
 * Flag: MAPPING_UNCERTAIN — visual confirmation required before publication.
 */

export interface GoddessEntry {
  id: string;
  seq: number;
  name: string;
  location: string;
  description: string;
  side: "left" | "right";
  source: "frames" | "still";
  frameStart?: number;
  frameEnd?: number;
  repFrame?: number;
  stillPath?: string;
  focalPoint: string;
}

export const VIDEO_SCENES: GoddessEntry[] = [
  {
    id: "shankari",
    seq: 1,
    name: "Shankari",
    location: "Kanchipuram, Tamil Nadu",
    description:
      "Shankari, the auspicious one, presides at Kanchipuram. Her presence invites reflection on the creative power that underlies all form and the grace that sustains it.",
    side: "left",
    source: "frames",
    frameStart: 1,
    frameEnd: 4,
    repFrame: 2,
    focalPoint: "50% 30%",
  },
  {
    id: "kamakshi",
    seq: 2,
    name: "Kamakshi",
    location: "Kanchipuram, Tamil Nadu",
    description:
      "Kamakshi, whose eyes fulfil all desires, embodies the creative will that moves from intention to manifestation. She is the energy of compassionate purpose.",
    side: "right",
    source: "frames",
    frameStart: 5,
    frameEnd: 8,
    repFrame: 6,
    focalPoint: "50% 30%",
  },
  {
    id: "shrinkhala",
    seq: 3,
    name: "Shrinkhala",
    location: "Prayagraj, Uttar Pradesh",
    description:
      "Shrinkhala, the bound one who liberates, holds the paradox of constraint and freedom. Her sacred site at Prayagraj marks the confluence of rivers and intentions.",
    side: "left",
    source: "frames",
    frameStart: 9,
    frameEnd: 13,
    repFrame: 11,
    focalPoint: "50% 35%",
  },
  {
    id: "chamundeshwari",
    seq: 4,
    name: "Chamundeshwari",
    location: "Mysuru, Karnataka",
    description:
      "Chamundeshwari, the fierce protector, stands atop Chamundi Hill. Her energy transforms what obstructs creative expression into the clarity needed for new beginnings.",
    side: "right",
    source: "frames",
    frameStart: 14,
    frameEnd: 17,
    repFrame: 15,
    focalPoint: "50% 30%",
  },
  {
    id: "jogulamba",
    seq: 5,
    name: "Jogulamba",
    location: "Alampur, Telangana",
    description:
      "Jogulamba at Alampur is a sacred destination in this journey through the eighteen Maha Shakti Peethas. Her presence speaks to the primordial creative force that precedes all form and thought.",
    side: "left",
    source: "frames",
    frameStart: 18,
    frameEnd: 21,
    repFrame: 19,
    focalPoint: "50% 30%",
  },
  {
    id: "bhramaramba",
    seq: 6,
    name: "Bhramaramba",
    location: "Srisailam, Andhra Pradesh",
    description:
      "Bhramaramba, the bee goddess, dwells at Srisailam alongside Mallikarjuna. Her humming energy represents the ceaseless creative vibration within all living things.",
    side: "right",
    source: "frames",
    frameStart: 22,
    frameEnd: 25,
    repFrame: 23,
    focalPoint: "50% 30%",
  },
  {
    id: "mahalakshmi",
    seq: 7,
    name: "Mahalakshmi",
    location: "Kolhapur, Maharashtra",
    description:
      "Mahalakshmi at Kolhapur is the goddess of abundance and creative prosperity. She reminds us that creation flourishes when intention is aligned with generosity.",
    side: "left",
    source: "frames",
    frameStart: 26,
    frameEnd: 29,
    repFrame: 27,
    focalPoint: "50% 30%",
  },
  {
    id: "ekaveerika-renuka",
    seq: 8,
    name: "Ekaveerika — Renuka",
    location: "Mahur, Maharashtra",
    description:
      "Renuka at Mahur embodies the creative courage to act with integrity. Her story speaks to the power of truth as the foundation of all meaningful creation.",
    side: "right",
    source: "frames",
    frameStart: 30,
    frameEnd: 34,
    repFrame: 32,
    focalPoint: "50% 30%",
  },
  {
    id: "mahakali",
    seq: 9,
    name: "Mahakali",
    location: "Ujjain, Madhya Pradesh",
    description:
      "Mahakali at Ujjain is the great transformer. Her energy dissolves what no longer serves, creating the sacred space from which new possibilities emerge.",
    side: "left",
    source: "frames",
    frameStart: 35,
    frameEnd: 40,
    repFrame: 37,
    focalPoint: "50% 30%",
  },
];

export const STILL_GODDESSES: GoddessEntry[] = [
  {
    id: "puruhutika",
    seq: 10,
    name: "Puruhutika",
    location: "Pithapuram, Andhra Pradesh",
    description:
      "Explore Puruhutika at Pithapuram, one of the sacred destinations in this journey through the eighteen Maha Shakti Peethas.",
    side: "right",
    source: "still",
    stillPath: "/goddess18/10-puruhutika.jpg",
    focalPoint: "50% 25%",
  },
  {
    id: "girija-biraja",
    seq: 11,
    name: "Girija — Biraja",
    location: "Jajpur, Odisha",
    description:
      "At Jajpur, this journey honours Devi as Biraja. Pause here to reflect on intention, care, and the ways creativity takes shape in everyday life.",
    side: "left",
    source: "still",
    stillPath: "/goddess18/11-girija-biraja.jpg",
    focalPoint: "50% 25%",
  },
  {
    id: "manikyamba",
    seq: 12,
    name: "Manikyamba",
    location: "Draksharama, Andhra Pradesh",
    description:
      "Discover Manikyamba at Draksharama, a sacred destination in the eighteen-Peetha journey. Reflect on how attention and devotion can give meaning to creative expression.",
    side: "right",
    source: "still",
    stillPath: "/goddess18/12-manikyamba.jpg",
    focalPoint: "50% 25%",
  },
  {
    id: "kamakhya",
    seq: 13,
    name: "Kamakhya",
    location: "Guwahati, Assam",
    description:
      "Explore Kamakhya at Guwahati, a sacred destination associated with Shakti. This section invites reflection on creation, renewal, and the rhythms of life.",
    side: "left",
    source: "still",
    stillPath: "/goddess18/13-kamakhya.jpg",
    focalPoint: "50% 25%",
  },
  {
    id: "madhaveshwari",
    seq: 14,
    name: "Madhaveshwari",
    location: "Prayagraj, Uttar Pradesh",
    description:
      "This journey honours Madhaveshwari at Prayagraj. Pause to consider how intention can guide the beginnings and direction of your own creative work.",
    side: "right",
    source: "still",
    stillPath: "/goddess18/14-madhaveshwari.jpg",
    focalPoint: "50% 25%",
  },
  {
    id: "vishalakshi",
    seq: 15,
    name: "Vishalakshi",
    location: "Varanasi, Uttar Pradesh",
    description:
      "Discover Vishalakshi at Varanasi. Let this moment in the journey invite attentive observation, compassion, and care in how you engage with the world.",
    side: "left",
    source: "still",
    stillPath: "/goddess18/15-vishalakshi.jpg",
    focalPoint: "50% 25%",
  },
  {
    id: "mangala-gauri",
    seq: 16,
    name: "Mangala Gauri",
    location: "Gaya, Bihar",
    description:
      "Explore Mangala Gauri at Gaya. Reflect on the care and commitment that help meaningful intentions grow into everyday action.",
    side: "right",
    source: "still",
    stillPath: "/goddess18/16-mangala-gauri.jpg",
    focalPoint: "50% 25%",
  },
  {
    id: "saraswati-sharada",
    seq: 17,
    name: "Saraswati — Sharada",
    location: "Sharada Peeth, Kashmir",
    description:
      "This journey honours Sharada and the historic Sharada Peeth in Kashmir. Reflect on the relationship between learning, understanding, and creative expression.",
    side: "left",
    source: "still",
    stillPath: "/goddess18/17-saraswati-sharada.jpg",
    focalPoint: "50% 25%",
  },
  {
    id: "jwalamukhi",
    seq: 18,
    name: "Jwalamukhi",
    location: "Kangra, Himachal Pradesh",
    description:
      "Explore Jwalamukhi in Kangra, where sacred flames are central to worship. Reflect on the energy and commitment that sustain meaningful action.",
    side: "right",
    source: "still",
    stillPath: "/goddess18/18-jwalamukhi.jpg",
    focalPoint: "50% 25%",
  },
];

export const GODDESS_FRAMES = Array.from(
  { length: 40 },
  (_, i) => `/goddesvideo2/frame_${String(i + 1).padStart(4, "0")}.jpg`,
);

export function buildFrameWeights(): number[] {
  const weights = new Array(40).fill(1.0);
  const transitions = [4, 8, 13, 17, 21, 25, 29, 34];
  transitions.forEach((i) => {
    if (weights[i] !== undefined) weights[i] = 0.4;
    if (i > 0 && weights[i - 1] !== undefined) weights[i - 1] = 0.6;
  });
  VIDEO_SCENES.forEach((scene) => {
    const rep = (scene.repFrame ?? 1) - 1;
    if (weights[rep] !== undefined) weights[rep] = 2.0;
    if (rep + 1 < 40 && weights[rep + 1] !== undefined) weights[rep + 1] = 1.6;
  });
  weights[39] = 2.5;
  weights[38] = 1.8;
  return weights;
}
