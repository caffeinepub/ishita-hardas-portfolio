import { useCountUp } from "../hooks/useCountUp";

function StatCard({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, display } = useCountUp(value, 2200, suffix);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex flex-col items-center gap-2 px-8 py-6 rounded-2xl card-hover animate-float"
      style={{
        background: "oklch(0.22 0.018 285)",
        border: "1px solid oklch(0.74 0.12 80 / 0.35)",
        boxShadow:
          "0 10px 40px rgba(0,0,0,0.4), 0 0 20px oklch(0.74 0.12 80 / 0.08), inset 0 1px 0 oklch(0.74 0.12 80 / 0.1)",
      }}
    >
      <span
        className="text-4xl md:text-5xl font-display font-bold"
        style={{ color: "var(--gold)" }}
      >
        {display}
      </span>
      <span
        className="text-xs tracking-widest uppercase text-center"
        style={{
          color: "oklch(0.72 0.04 90)",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section
      id="stats"
      className="py-16 px-6"
      style={{ background: "var(--surface-2)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard value={34} suffix="%" label="Social Engagement Increase" />
          <StatCard value={2000} suffix="+" label="New Followers Gained" />
          <StatCard value={95} suffix="K+" label="YouTube Video Views" />
          <StatCard value={1} suffix="M+" label="Organic Instagram Views" />
        </div>
      </div>
    </section>
  );
}
