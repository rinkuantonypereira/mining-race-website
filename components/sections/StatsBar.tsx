"use client";
import { useEffect, useRef, useState } from "react";

const WalletsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const MinerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/><path d="M12 12v9"/><path d="M8 21h8"/>
    <path d="M15 5.5l3-3"/><path d="M16.5 7l2-2"/>
  </svg>
);
const RewardsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
  </svg>
);
const PowerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const STATS = [
  { Icon: WalletsIcon, value: 128642,   label: "Active Wallets",     prefix: "",  suffix: "",       isFloat: false },
  { Icon: MinerIcon,   value: 56981,    label: "Active Miners",      prefix: "",  suffix: "",       isFloat: false },
  { Icon: RewardsIcon, value: 24387652, label: "Rewards Paid (USD)", prefix: "$", suffix: "",       isFloat: false },
  { Icon: PowerIcon,   value: 512.8,    label: "Total Grid Power",   prefix: "",  suffix: " PH/s",  isFloat: true  },
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
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1800, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = eased * stat.value;
      setCount(stat.isFloat ? parseFloat(val.toFixed(1)) : Math.round(val));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, stat.value, stat.isFloat]);

  const display = !stat.isFloat && count > 999
    ? Math.round(count).toLocaleString()
    : count.toLocaleString();

  return (
    <div ref={ref} style={{ padding: "1.75rem 1rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.625rem" }}>
      <stat.Icon />
      <p style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.875rem)", fontWeight: 700, color: "#F0F4F8", letterSpacing: "-0.02em", lineHeight: 1 }}>
        {stat.prefix}{display}{stat.suffix}
      </p>
      <p style={{ fontSize: "0.68rem", color: "#475569", textTransform: "uppercase", letterSpacing: "0.09em" }}>
        {stat.label}
      </p>
    </div>
  );
}

export function StatsBar() {
  return (
    <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#0C0C12" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          {STATS.map((stat, i) => (
            <div key={stat.label} style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <StatItem stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
