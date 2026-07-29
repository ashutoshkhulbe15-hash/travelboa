import Link from "next/link";
import type { RelatedLink } from "@/lib/related";

interface Props {
  title: string;
  note?: string;
  links: RelatedLink[];
  /** Compact list style for in-article placement. */
  variant?: "cards" | "list";
}

const KIND_LABEL: Record<RelatedLink["kind"], string> = {
  destination: "DESTINATION",
  gear: "GEAR",
  guide: "GUIDE",
};

export function RelatedLinks({ title, note, links, variant = "list" }: Props) {
  if (!links.length) return null;

  if (variant === "cards") {
    return (
      <section className="py-14 sm:py-16" style={{ borderTop: "1.5px dashed var(--line)" }}>
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <p className="kicker mb-2">{title}</p>
          {note && (
            <span className="font-caveat text-[22px] block -rotate-1 mb-5" style={{ color: "var(--terra)" }}>
              {note}
            </span>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group bg-white rounded-2xl p-5 border no-underline flex flex-col gap-2 transition-all duration-200 hover:-translate-y-1"
                style={{ borderColor: "#e3e9e6" }}
              >
                <span className="font-mono text-[10px] tracking-[0.12em]" style={{ color: "var(--terra)" }}>
                  {KIND_LABEL[l.kind]}
                </span>
                <span className="text-[17px] font-bold leading-snug" style={{ color: "var(--ink)" }}>
                  {l.title}
                </span>
                <span className="text-[14.5px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {l.blurb}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="mt-10">
      <p className="kicker mb-2">{title}</p>
      {note && (
        <span className="font-caveat text-[21px] block -rotate-1 mb-2" style={{ color: "var(--terra)" }}>
          {note}
        </span>
      )}
      <ul className="mt-3 border-t-2 list-none p-0" style={{ borderColor: "var(--ink)" }}>
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="flex items-baseline gap-4 py-3.5 border-b text-[16.5px] font-medium no-underline transition-all duration-200 hover:pl-3 hover:bg-white"
              style={{ borderColor: "#e0e7e3", color: "var(--ink)" }}
            >
              <span className="font-mono text-[10px] shrink-0 w-[74px]" style={{ color: "var(--terra)" }}>
                {KIND_LABEL[l.kind]}
              </span>
              <span className="flex-1">{l.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
