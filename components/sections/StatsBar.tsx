"use client";
import { useEffect, useRef, useState } from "react";

const WalletsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const MinerIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/><path d="M12 12v9"/><path d="M8 21h8"/>
    <path d="M15 5.5l3-3"/><path d="M16.5 7l2-2"/>
  </svg>
);
const RewardsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
  </svg>
);
const PowerIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const STATS = [
  { Icon: WalletsIcon, value: 128642,   label: "ACTIVE WALLETS",     prefix: "",  suffix: "",       isFloat: false },
  { Icon: MinerIcon,   value: 56981,    label: "ACTIVE MINERS",      prefix: "",  suffix: "",       isFloat: false },
  { Icon: RewardsIcon, value: 24387652, label: "REWARDS PAID (USD)", prefix: "$ ", suffix: "",       isFloat: false },
  { Icon: PowerIcon,   value: 512.8,    label: "TOTAL GRID POWER",   prefix: "",  suffix: " PH/s",  isFloat: true  },
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
    <div ref={ref} style={{
      padding: "1.5rem 1.25rem",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    }}>
      <div style={{
        width: "48px",
        height: "48px",
        borderRadius: "0.625rem",
        background: "rgba(0,200,150,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        <stat.Icon />
      </div>
      <div>
        <p style={{
          fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
          fontWeight: 700,
          color: "#00C896",
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
        }}>
          {stat.prefix}{display}{stat.suffix}
        </p>
        <p style={{
          fontSize: "0.65rem",
          color: "#475569",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginTop: "0.125rem",
        }}>
          {stat.label}
        </p>
      </div>
    </div>
  );
}

export function StatsBar() {
  return (
    <div style={{ background: "#06060A", padding: "0 0 2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
        <div style={{
          background: "rgba(12,16,22,0.7)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRadius: "1rem",
          border: "1px solid rgba(0,200,150,0.15)",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 0 40px rgba(0,200,150,0.05), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}>
          {/* Teal top glow */}
          <div style={{
            position: "absolute", top: 0, left: "10%", right: "10%", height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(0,200,150,0.5), transparent)",
          }} />
          <div style={{
            position: "absolute", top: 0, left: "20%", right: "20%", height: "40px",
            background: "radial-gradient(ellipse at top, rgba(0,200,150,0.08), transparent)",
            pointerEvents: "none",
          }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
            {STATS.map((stat, i) => (
              <div key={stat.label} style={{
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}>
                <StatItem stat={stat} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
