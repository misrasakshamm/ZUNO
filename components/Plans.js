import Link from "next/link";
import { plans } from "@/lib/data";

export default function Plans() {
  return (
    <section className="zsec" id="plans">
      <div className="zwrap">
        <div className="zsec-head plain"><h2>Subscription and Plans</h2></div>
        <div className="zplans">
          {plans.map((p) => (
            <div key={p.name} className="zplan">
              <h3>{p.name}</h3>
              <div className="zplan-mid">
                <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                <div className="zprice">${p.price}</div>
              </div>
              <Link href="/signup" className="zbuy">Buy Now</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
