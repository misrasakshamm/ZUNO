import Link from "next/link";

export default function RecentlyWatched({ items }) {
  return (
    <section className="zrecent">
      <div className="zwrap">
        <h2 className="zrow-label">RECENTLY WATCHED</h2>
        <div className="zrecent-grid">
          {items.map((e, i) => (
            <div key={e.id} className="zep">
              <div className="zep-thumb" style={{ "--h": (i * 53 + 20) % 360 }}>
                {e.src && <div className="zep-img" style={{ backgroundImage: `url(${e.src})` }} />}
                <div className="zep-bar"><i style={{ width: `${e.progress}%` }} /></div>
              </div>
              <h4>{e.title}</h4>
              <p>Episode aired Feb 12, 2022</p>
            </div>
          ))}
        </div>
        <div className="zmore">
          <Link href="/search" className="zpill caps">View more</Link>
        </div>
      </div>
    </section>
  );
}
