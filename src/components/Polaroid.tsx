"use client";

import { useState } from "react";
import Link from "next/link";

interface PolaroidProps {
  name: string;
  slug: string;
  info: string;
  note: string;
  temp: string;
  grad: string;
  rot: number;
  accent: string;
  selected?: boolean;
  onClick?: () => void;
}

export function Polaroid({ name, slug, info, note, temp, grad, rot, accent, selected, onClick }: PolaroidProps) {
  const [hovered, setHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Link
      href={`/${slug}`}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block no-underline w-full"
      style={{
        background: "white", padding: "6px 6px 12px", cursor: "pointer",
        boxShadow: hovered ? "8px 14px 40px rgba(0,0,0,0.13)" : "4px 6px 20px rgba(0,0,0,0.07)",
        transform: `${hovered ? "translateY(-6px) scale(1.02)" : ""}`,
        transition: "all 0.3s cubic-bezier(0.2,0,0,1)",
        zIndex: hovered ? 20 : 10,
        outline: selected ? `2.5px solid ${accent}` : "none",
        outlineOffset: selected ? "2px" : "0",
      }}
    >
      <div style={{ aspectRatio: "4/3", background: grad, borderRadius: 2, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 40%,rgba(0,0,0,0.45) 100%)" }} />
        <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/30 text-[10px] sm:text-[11px] font-bold text-white">{temp}</div>
        <div className="absolute bottom-1.5 left-2 text-sm sm:text-base font-extrabold text-white">{name}</div>
      </div>
      <div className="pt-1.5 px-1">
        <p className="font-mono text-[9px] sm:text-[10px] text-gray-400">{info}</p>
        <p className="font-caveat text-xs sm:text-sm transition-colors duration-300" style={{ color: accent }}>{note}</p>
      </div>
    </Link>
  );
}
