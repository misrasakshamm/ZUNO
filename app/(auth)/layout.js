import { catalog } from "@/lib/data";
import { posterBackground } from "@/components/Poster";

// Poster-collage backdrop (gradient tiles, no images or API).
export default function AuthLayout({ children }) {
  const tiles = Array.from({ length: 45 }, (_, i) => catalog[i % catalog.length]);

  return (
    <div className="auth">
      <div className="auth-bg" aria-hidden="true">
        {tiles.map((t, i) => (
          <div key={i} className="auth-tile" style={{ background: posterBackground((t.hue + i * 13) % 360) }}>
            {t.title}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}
