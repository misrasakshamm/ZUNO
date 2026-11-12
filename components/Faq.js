"use client";

import Link from "next/link";
import { useState } from "react";
import { faqs } from "@/lib/data";

export default function Faq() {
  const [open, setOpen] = useState(-1); // all closed, like the design

  return (
    <section className="zsec" id="faq">
      <div className="zwrap">
        <div className="zsec-head">
          <h2>Frequently asked questions</h2>
          <Link href="/contact" className="zask">Ask question</Link>
        </div>
        <div className="zfaq">
          {faqs.map((f, i) => (
            <div key={f.q} className={`zfaq-item ${open === i ? "open" : ""}`}>
              <button type="button" className="zfaq-head" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="zfaq-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="zfaq-q">{f.q}</span>
                <span className="zfaq-chev">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 9l7 7 7-7" />
                  </svg>
                </span>
              </button>
              <p className="zfaq-a">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
