export const CINE_FRAME_COUNT = 169;

export const cineFramePath = (n) =>
  `/frames2/frame_${String(n).padStart(4, "0")}.jpg`;

export const BEATS = [
  {
    id: "b1",
    show: 0.1,
    hide: 0.3,
    label: "01 — Discover",
    quote: "Start with the problem, not the technology.",
    speaker: "Nhim Dara",
    film: "PROCESS — RESEARCH",
  },
  {
    id: "b2",
    show: 0.35,
    hide: 0.55,
    label: "02 — Engineer",
    quote: "Make every layer clear, reliable, and maintainable.",
    speaker: "Nhim Dara",
    film: "PROCESS — BUILD",
  },
  {
    id: "b3",
    show: 0.6,
    hide: 0.8,
    label: "03 — Deliver",
    quote: "A project matters when it reaches the people it was made for.",
    speaker: "Nhim Dara",
    film: "PROCESS — SHIP",
  },
];

export const CINE_INTRO_FADE_END = 0.08;
