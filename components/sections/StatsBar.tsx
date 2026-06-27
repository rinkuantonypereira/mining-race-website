"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "Active Wallets",    value: 128642,   prefix: "",  suffix: "",      icon: "👥" },
  { label: "Active Miners",     value: 56981,    prefix: "",  suffix: "",      icon: "⛏️" },
  { label: "Rewards Paid (USD)",value: 24387652, prefix: "$", suffix: "",      icon: "💰" },
  { label: "Total Grid Power",  value: 512.8,    prefix: "",  suffix: " PH/s", icon: "⚡" },
];

function StatItem({ stat }: { stat: typeof STATS[0] }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = eased * stat.value;
      setCount(stat.value % 1 !== 0 ? parseFloat(val.toFixed(1)) : Math.round(val));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, stat.value]);

  const display = stat.value > 1000 && stat.value % 1 === 0
    ? Math.round(count).toLocaleString()
    : count.toLocaleString();

  return (
    <div ref={ref} style={{ padding: "1.75rem 1.5rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
      <span style={{ fontSize: "1.5rem" }}>{stat.icon}</span>
      <p style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#F0F4F8", letterSpacing: "-0.02em" }}>
        {stat.prefix}{display}{stat.suffix}
      </p>
      <p style={{ fontSize: "0.7rem", color: "#475569", textTransform: "uppercase", letterSpacing: "0.1em" }}>
        {stat.label}
      </p>
    </div>
  );
}

export function StatsBar() {
  return (
    <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)", background: "#0F0F13" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
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
