import Link from "next/link";

// Gradient placeholder poster (no image assets, no API).
export function posterBackground(hue) {
  return `linear-gradient(160deg, hsl(${hue} 70% 38%) 0%, hsl(${(hue + 40) % 360} 60% 18%) 60%, #0c0c0c 100%)`;
}

export default function Poster({ item }) {
  return (
    <Link href={`/title/${item.slug}`} className="poster" aria-label={item.title}>
      <div className="poster-art" style={{ background: posterBackground(item.hue) }} />
      <span className="poster-rate">★ {item.rating}</span>
      <div className="poster-title">
        {item.title}
        <span className="poster-meta">{item.year} · {item.genre}</span>
      </div>
    </Link>
  );
}
