"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import Poster from "@/components/Poster";
import { catalog } from "@/lib/data";

const tabs = [
  { key: "all", label: "All" },
  { key: "movie", label: "Movies" },
  { key: "series", label: "TV Shows" },
];

export default function SearchView() {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get("q") || "";
  const [q, setQ] = useState(initial);
  const [tab, setTab] = useState("all");

  const term = initial.toLowerCase();
  const results = catalog.filter(
    (t) =>
      (tab === "all" || t.type === tab) &&
      (!term || t.title.toLowerCase().includes(term) || t.genre.toLowerCase().includes(term))
  );

  const submit = (e) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <div className="container page-pad">
      <h1 className="page-title">Search</h1>
      <p className="page-sub">
        {initial ? `Results for “${initial}”` : "Browse everything on ZUNO"}
      </p>
      <form className="big-search" onSubmit={submit}>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by title or genre" />
        <button className="btn btn-red">Search</button>
      </form>
      <div className="filters">
        {tabs.map((t) => (
          <button key={t.key} className={`pill ${tab === t.key ? "on" : ""}`} onClick={() => setTab(t.key)}>
            {t.label}
          </button>
        ))}
      </div>
      {results.length ? (
        <div className="grid">{results.map((r) => <Poster key={r.slug} item={r} />)}</div>
      ) : (
        <p className="empty">No titles found. Try another search.</p>
      )}
    </div>
  );
}
