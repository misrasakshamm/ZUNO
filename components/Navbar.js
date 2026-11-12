"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { searchHistory } from "@/lib/data";

// The design has only three top links.
const links = [
  { href: "/movies", label: "All movies" },
  { href: "/tvshows", label: "Tv shows" },
  { href: "/series", label: "Web series" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const go = (term) => {
    setFocus(false);
    router.push(`/search?q=${encodeURIComponent(term.trim())}`);
  };

  const list = searchHistory.filter((s) => s.includes(q.trim().toLowerCase()));

  return (
    <header className={`znav ${solid ? "solid" : ""}`}>
      <div className="znav-inner">
        <Link href="/" className="zlogo" aria-label="ZUNO home">
          <Logo />
        </Link>

        <nav className={`znav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? "active" : ""}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="zsearch-wrap">
          <form
            className="zsearch"
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              go(q);
            }}
          >
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.5-4.5" />
            </svg>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onFocus={() => setFocus(true)}
              onBlur={() => setTimeout(() => setFocus(false), 120)}
              placeholder="Search"
              aria-label="Search movies and shows"
            />
            <Link href="/search" className="zfilter" aria-label="Filters">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                <path d="M3 6h18M6.5 12h11M10 18h4" />
              </svg>
            </Link>
          </form>

          {focus && list.length > 0 && (
            <div className="zdrop">
              {list.map((s) => (
                <button key={s} type="button" onMouseDown={(e) => { e.preventDefault(); go(s); }}>
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 12a9 9 0 1 0 3-6.7" />
                    <path d="M3 4v5h5" />
                    <path d="M12 7.5V12l3 2" />
                  </svg>
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <Link href="/login" className="zavatar" aria-label="Login or account">
          <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z" />
          </svg>
        </Link>

        <button className="zmenu" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
      </div>
    </header>
  );
}
