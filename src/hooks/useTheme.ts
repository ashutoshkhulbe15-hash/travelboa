"use client";

import { useState, useEffect, useCallback } from "react";
import { THEMES, DEFAULT_THEME, STORAGE_KEY, type ThemeKey } from "@/lib/themes";

export function useTheme() {
  const [themeKey, setThemeKey] = useState<ThemeKey>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ThemeKey | null;
      if (saved && THEMES[saved]) setThemeKey(saved);
    } catch {}
  }, []);

  const setTheme = useCallback((key: ThemeKey) => {
    if (!THEMES[key]) return;
    setThemeKey(key);
    try { localStorage.setItem(STORAGE_KEY, key); } catch {}
  }, []);

  return {
    themeKey,
    theme: THEMES[themeKey],
    setTheme,
    accent: THEMES[themeKey].accent,
    mounted,
  };
}
