"use client";

import { useEffect, useState } from "react";

const LOGO_SRC = "/images/b18f4.png"; // original ZUNO logo from Figma (alpha mask)

// ZUNO wordmark. Uses the original Figma logo when /public/images/b18f4.png exists,
// otherwise falls back to a drawn wordmark. Size it from the parent (width; height follows).
export default function Logo({ className = "" }) {
  const [real, setReal] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setReal(true);
    img.src = LOGO_SRC;
  }, []);

  return (
    <span className={`z-logo ${className}`} role="img" aria-label="ZUNO">
      {real ? (
        <span
          className="z-logo-mask"
          style={{ WebkitMaskImage: `url(${LOGO_SRC})`, maskImage: `url(${LOGO_SRC})` }}
        />
      ) : (
        <svg viewBox="0 0 146 50" width="100%" height="100%" fill="currentColor" aria-hidden="true">
          <polygon points="0,0 33,0 33,10 14,40 33,40 33,50 0,50 0,40 19,10 0,10" />
          <path d="M37 0H48V39H59V0H70V50H37Z" />
          <polygon points="74,50 74,0 86,0 96,30 96,0 107,0 107,50 95,50 85,20 85,50" />
          <path
            fillRule="evenodd"
            d="M118 0H138A8 8 0 0 1 146 8V42A8 8 0 0 1 138 50H118A8 8 0 0 1 110 42V8A8 8 0 0 1 118 0Z M121 11V39H135V11Z"
          />
        </svg>
      )}
    </span>
  );
}
