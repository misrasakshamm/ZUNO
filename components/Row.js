import Link from "next/link";
import Poster from "./Poster";

export default function Row({ name, items, href }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2>{name}</h2>
          {href && <Link href={href}>View all →</Link>}
        </div>
        <div className="grid">
          {items.map((it) => <Poster key={it.slug} item={it} />)}
        </div>
      </div>
    </section>
  );
}
