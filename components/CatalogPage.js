import Link from "next/link";
import Hero from "./Hero";
import CatalogRow from "./CatalogRow";
import RecentlyWatched from "./RecentlyWatched";
import Faq from "./Faq";
import Plans from "./Plans";
import Cta from "./Cta";
import { rows, recent } from "@/lib/data";
import { findImage } from "@/lib/images";

// Shared page body used by Home, Web series, All movies and Tv shows
// (the design uses the same layout with a different hero banner).
export default function CatalogPage({ hero }) {
  const heroImg = findImage("hero", hero.slug);

  const withImage = (it) => ({ title: it.title, slug: it.slug, hue: it.hue, src: findImage("posters", it.slug) });

  // 6 posters are visible; a few more sit off-screen behind the round arrow.
  const rowData = rows.map((r, i) => ({
    name: r.name,
    items: [...r.items, ...rows[(i + 1) % rows.length].items.slice(0, 4)].map(withImage),
  }));

  const episodes = recent.map((e) => ({ ...e, src: findImage("episodes", e.id) }));

  return (
    <>
      <Hero hero={hero} image={heroImg} />
      <div className="zrows">
        {rowData.map((r) => (
          <CatalogRow key={r.name} label={r.name} items={r.items} />
        ))}
      </div>
      <div className="zcenter">
        <Link href="/search" className="zpill">explore more</Link>
      </div>
      <RecentlyWatched items={episodes} />
      <Faq />
      <Plans />
      <Cta />
    </>
  );
}
