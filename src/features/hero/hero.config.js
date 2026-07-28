export const FRAME_COUNT = 169;

export const framePath = (n) =>
  `/frames/frame_${String(n).padStart(4, "0")}.jpg`;

export const DIALOGUES = [
  {
    id: "d1",
    show: 0.1,
    hide: 0.3,
    quote: "I learn fastest when an idea becomes something people can actually use.",
    speaker: "Nhim Dara",
    film: "DEVELOPER NOTE — 2026",
  },
  {
    id: "d2",
    show: 0.35,
    hide: 0.55,
    quote: "Clean code, thoughtful design, and user-centered thinking belong together.",
    speaker: "Nhim Dara",
    film: "BUILD PRINCIPLE — 2026",
  },
  {
    id: "d3",
    show: 0.6,
    hide: 0.8,
    quote: "Every project is a chance to turn curiosity into capability.",
    speaker: "Nhim Dara",
    film: "LEARNING LOG — 2026",
  },
];

export const HERO_TEXT_FADE_END = 0.08;
