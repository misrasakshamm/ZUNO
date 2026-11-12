import Link from "next/link";
import { posterBackground } from "./Poster";

// Poster card: image (if you add one to /public/posters) on top of a gradient placeholder,
// with the caption centered underneath like in the design.
export default function PosterCard({ item }) {
  return (
    <Link href={`/title/${item.slug}`} className="zcard">
      <div className="zposter">
        <div className="zposter-ph" style={{ background: posterBackground(item.hue) }}>
          <span>{item.title}</span>
        </div>
        {item.src && <div className="zposter-img" style={{ backgroundImage: `url(${item.src})` }} />}
      </div>
      <p className="zcap">{item.title}</p>
    </Link>
  );
}
