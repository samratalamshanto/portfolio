import { useReveal } from "../../hooks/useReveal.js";
import "./Stats.css";

const STATS = [
  { num: "60M+", label: "Subscribers served (Robi Loyalty)" },
  { num: "1,200 TPS", label: "Sustained peak throughput" },
  { num: "600+", label: "Algorithmic problems solved" },
  { num: "4.5 yrs", label: "Engineering experience" },
];

export default function Stats() {
  const ref = useReveal();
  return (
    <section className="stats container reveal" ref={ref} aria-label="Quick facts">
      {STATS.map((s) => (
        <div className="stat" key={s.label}>
          <span className="stat__num">{s.num}</span>
          <span className="stat__label">{s.label}</span>
        </div>
      ))}
    </section>
  );
}
