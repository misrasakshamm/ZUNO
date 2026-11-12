"use client";

import { useRef } from "react";
import PosterCard from "./PosterCard";

// One labelled row of posters. Six are visible; the round arrow scrolls to the rest.
export default function CatalogRow({ label, items }) {
  const track = useRef(null);

  const next = () => {
    const el = track.current;
    if (!el) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + el.clientWidth + gap, behavior: "smooth" });
  };

  return (
    <section className="zrow">
      <div className="zwrap">
        <h2 className="zrow-label">{label}</h2>
        <div className="zrow-view">
          <div className="zrow-track" ref={track}>
            {items.map((it, i) => (
              <PosterCard key={`${it.slug}-${i}`} item={it} />
            ))}
          </div>
          <button type="button" className="zarrow" aria-label="Next" onClick={next}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 12h16M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
