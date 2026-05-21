"use client";

import { useState } from "react";
import { THEMES, type ThemeKey } from "@/lib/themes";

interface ColorPickerProps {
  themeKey: ThemeKey;
  setTheme: (key: ThemeKey) => void;
}

export function ColorPicker({ themeKey, setTheme }: ColorPickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-[100]">
      {open && (
        <div className="absolute bottom-14 right-0 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 w-52">
          <p className="font-mono text-[9px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Choose your color
          </p>
          <div className="flex gap-1.5 flex-wrap">
            {(Object.entries(THEMES) as [ThemeKey, typeof THEMES[ThemeKey]][]).map(([k, v]) => (
              <button
                key={k}
                onClick={() => setTheme(k)}
                title={v.label}
                className="w-7 h-7 rounded-full transition-all duration-150"
                style={{
                  background: v.accent,
                  border: themeKey === k ? "3px solid #111" : "3px solid transparent",
                  transform: themeKey === k ? "scale(1.15)" : "scale(1)",
                }}
              />
            ))}
          </div>
          <p className="font-caveat text-xs text-gray-300 mt-2">saved automatically ✓</p>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer text-lg text-white border-[3px] border-white transition-transform duration-300 hover:scale-110"
        style={{
          background: THEMES[themeKey].accent,
          boxShadow: `0 4px 16px ${THEMES[themeKey].accent}40`,
        }}
      >
        {open ? "✕" : "🎨"}
      </button>
    </div>
  );
}
