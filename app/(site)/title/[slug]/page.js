import Link from "next/link";
import { notFound } from "next/navigation";
import Poster, { posterBackground } from "@/components/Poster";
import Row from "@/components/Row";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import BackButton from "@/components/BackButton";
import { catalog, episodes } from "@/lib/data";

export function generateStaticParams() {
  return catalog.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }) {
  const t = catalog.find((x) => x.slug === params.slug);
  return { title: t ? `${t.title} – ZUNO` : "ZUNO" };
}

export default function TitlePage({ params }) {
  const item = catalog.find((x) => x.slug === params.slug);
  if (!item) notFound();

  const more = catalog.filter((x) => x.slug !== item.slug).slice(0, 6);

  return (
    <>
      <section
        className="detail-banner"
        style={{ background: posterBackground(item.hue) }}
      >
        <div className="container"><BackButton /></div>
        <div className="container detail-top">
          <Poster item={item} />
          <div>
            <h1>{item.title}</h1>
            <div className="facts">
              <span className="chip">{item.type === "movie" ? "Movie" : "Series"}</span>
              <span className="chip dark">{item.year}</span>
              <span className="chip dark">{item.genre}</span>
              <span className="chip dark">★ {item.rating}</span>
            </div>
            <p>
              A gripping story that keeps you on the edge of your seat. Follow the
              characters through twists, tension and unforgettable moments in this
              acclaimed {item.genre.toLowerCase()} title.
            </p>
            <div className="hero-actions" style={{ marginTop: 18 }}>
              <button className="btn btn-red">▶ Play Now</button>
              <button className="btn btn-ghost">＋ My List</button>
            </div>
          </div>
        </div>
      </section>

      {item.type === "series" && (
        <section className="section">
          <div className="container">
            <div className="section-head"><h2>All episodes</h2></div>
            <div className="episode-list">
              {episodes.map((e) => (
                <div key={e.n} className="episode">
                  <span className="ep-n">{String(e.n).padStart(2, "0")}</span>
                  <div className="ep-thumb" style={{ background: posterBackground((item.hue + e.n * 25) % 360) }} />
                  <div>
                    <h4>{e.title}</h4>
                    <p>{e.text}</p>
                  </div>
                  <span className="ep-time">{e.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Row name="More Like This" items={more} />
      <Faq />
      <Cta />
    </>
  );
}
