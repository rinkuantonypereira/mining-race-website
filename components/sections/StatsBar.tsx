"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { icon: "👥", value: 128642, label: "Active Wallets", prefix: "", suffix: "" },
  { icon: "⛏", value: 56981,  label: "Active Miners",  prefix: "", suffix: "" },
  { icon: "💰", value: 24387652, label: "Rewards Paid (USD)", prefix: "$", suffix: "" },
  { icon: "⚡", value: 512.8, label: "Total Grid Power", prefix: "", suffix: " PH/s" },
];

function useCountUp(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(target % 1 !== 0 ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

function StatItem({ stat }: { stat: typeof STATS[0] }) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(stat.value, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const display = stat.value > 1000 && stat.value % 1 === 0
    ? Math.round(count).toLocaleString()
    : count.toLocaleString();

  return (
    <div ref={ref} className="py-6 px-6 text-center flex flex-col items-center gap-2">
      <span className="text-2xl">{stat.icon}</span>
      <p className="text-2xl sm:text-3xl font-bold text-white">
        {stat.prefix}{display}{stat.suffix}
      </p>
      <p className="text-xs text-mr-muted uppercase tracking-wider">{stat.label}</p>
    </div>
  );
}

export function StatsBar() {
  return (
    <div
      className="border-y border-mr-border bg-mr-dark"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          {STATS.map((stat, i) => (
            <div key={stat.label} style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
              <StatItem stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
