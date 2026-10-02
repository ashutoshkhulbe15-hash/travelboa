"use client";

import { useState, useEffect, useCallback } from "react";
import { THEMES, DEFAULT_THEME, STORAGE_KEY, type ThemeKey } from "@/lib/themes";

const DARK_KEY = "travelboa-dark";

export function useTheme() {
  const [themeKey, setThemeKey] = useState<ThemeKey>(DEFAULT_THEME);
  const [dark, setDarkState] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let savedTheme: ThemeKey = DEFAULT_THEME;
    let savedDarkValue = false;
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ThemeKey | null;
      if (saved && THEMES[saved]) savedTheme = saved;
      const savedDark = localStorage.getItem(DARK_KEY);
      savedDarkValue = savedDark === "true";
    } catch {}
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      setThemeKey(savedTheme);
      setDarkState(savedDarkValue);
      setMounted(true);
    });
    return () => { cancelled = true; };
  }, []);

  const setTheme = useCallback((key: ThemeKey) => {
    if (!THEMES[key]) return;
    setThemeKey(key);
    try { localStorage.setItem(STORAGE_KEY, key); } catch {}
  }, []);

  const setDark = useCallback((val: boolean) => {
    setDarkState(val);
    try { localStorage.setItem(DARK_KEY, val.toString()); } catch {}
  }, []);

  const toggleDark = useCallback(() => {
    setDark(!dark);
  }, [dark, setDark]);

  return {
    themeKey,
    theme: THEMES[themeKey],
    setTheme,
    accent: THEMES[themeKey].accent,
    dark,
    setDark,
    toggleDark,
    mounted,
  };
}
