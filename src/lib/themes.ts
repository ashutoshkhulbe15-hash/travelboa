export const THEMES = {
  copper:   { label: "Copper",     accent: "#c2662d", sticky: "#fef3c7", stickyText: "#854d0e" },
  terra:    { label: "Terracotta", accent: "#b5503f", sticky: "#fde8c8", stickyText: "#7c3318" },
  burgundy: { label: "Burgundy",   accent: "#8a2c42", sticky: "#fce4ea", stickyText: "#6b1a30" },
  teal:     { label: "Teal",       accent: "#0d8a7f", sticky: "#ccfbf1", stickyText: "#065f46" },
  indigo:   { label: "Indigo",     accent: "#4f46e5", sticky: "#e0e7ff", stickyText: "#3730a3" },
  forest:   { label: "Forest",     accent: "#2d7a3a", sticky: "#dcfce7", stickyText: "#166534" },
  slate:    { label: "Slate",      accent: "#475569", sticky: "#f1f5f9", stickyText: "#334155" },
  coral:    { label: "Coral",      accent: "#d4553a", sticky: "#fee8e3", stickyText: "#8a2e1e" },
} as const;

export type ThemeKey = keyof typeof THEMES;
export type Theme = (typeof THEMES)[ThemeKey];

export const DEFAULT_THEME: ThemeKey = "copper";
export const STORAGE_KEY = "travelboa-theme";
