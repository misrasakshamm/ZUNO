import Link from "next/link";

export default function Hero({ hero, image }) {
  return (
    <section className="zhero">
      <div className="zhero-bg" />
      {image && <div className="zhero-img" style={{ backgroundImage: `url(${image})` }} />}

      <div className="zhero-body">
        <p className="zhero-label">{hero.label}</p>
        <h1>{hero.title}</h1>
        <p className="zhero-text">{hero.text}</p>

        <div className="zhero-meta">
          <span className="zhero-tag">{hero.tag}</span>
          <span>{hero.years}</span>
          <span>IMDb</span>
          <span>★</span>
          <span>{hero.rating}</span>
        </div>

        <div className="zhero-btns">
          <Link href={hero.playHref} className="zhero-btn red">
            Play Now
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true"><path d="M5 2.5v19L21 12z" /></svg>
          </Link>
          <button type="button" className="zhero-btn ghost">
            Add to watchlist
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><path d="M12 4v16M4 12h16" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
