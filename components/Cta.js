import Link from "next/link";
import Logo from "./Logo";
import { findImage } from "@/lib/images";

export default function Cta() {
  const art = findImage("banner", "free-trial");

  return (
    <section className="zcta-sec">
      <div className="zwrap">
        <div className="zcta">
          <div className="zcta-art" style={art ? { backgroundImage: `url(${art})` } : undefined} />
          <div className="zcta-text">
            <h3>
              Start a free trial<br />with just
              <b>$0</b>
            </h3>
            <Link href="/signup" className="zcta-btn">Start now</Link>
          </div>
          <Logo className="zcta-logo" />
        </div>
      </div>
    </section>
  );
}
