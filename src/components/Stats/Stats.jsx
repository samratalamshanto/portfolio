import { useReveal } from "../../hooks/useReveal.js";
import { yearsDecimal } from "../../utils/experience.js";
import "./Stats.css";

export default function Stats() {
  const ref = useReveal();
  const stats = [
    { num: "60M+", label: "Subscribers served (Robi Loyalty)" },
    { num: "1,200 TPS", label: "Sustained peak throughput" },
    { num: "600+", label: "Algorithmic problems solved" },
    { num: `${yearsDecimal()} yrs`, label: "Engineering experience" },
  ];
  return (
    <section className="stats container reveal" ref={ref} aria-label="Quick facts">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <span className="stat__num">{s.num}</span>
          <span className="stat__label">{s.label}</span>
        </div>
      ))}
    </section>
  );
}
