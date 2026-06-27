"use client";
import Image from "next/image";

const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    ),
    title: "Real-Time Dashboard",
    desc: "Monitor power, earnings, and grid performance live.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "Smart Earnings",
    desc: "Transparent payouts with real-time reward tracking.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    title: "Easy Management",
    desc: "Manage all your products in one simple interface.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Secure & Transparent",
    desc: "Enterprise-grade security with full transparency.",
  },
];

const SCREENS = [
  { src: "/images/app-dashboard.png", alt: "Dashboard screen" },
  { src: "/images/app-mining.png",    alt: "Mining screen" },
  { src: "/images/app-rewards.png",   alt: "Rewards screen" },
];

interface AppShowcaseProps { onDownload?: () => void; }

export function AppShowcase({ onDownload }: AppShowcaseProps) {
  return (
    <section style={{ padding: "5rem 0", background: "#0A0A0F", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

          {/* Left — phones */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "0.875rem" }}>
            {SCREENS.map((s, i) => (
              <div key={s.src} style={{
                borderRadius: "1.25rem",
                overflow: "hidden",
                border: i === 1 ? "1px solid rgba(0,200,150,0.2)" : "1px solid rgba(255,255,255,0.08)",
                flexShrink: 0,
                width: i === 1 ? "165px" : "140px",
                transform: i === 1 ? "translateY(-1.5rem) scale(1.05)" : "none",
                zIndex: i === 1 ? 10 : 5,
                boxShadow: i === 1
                  ? "0 0 40px rgba(0,200,150,0.1), 0 20px 60px rgba(0,0,0,0.5)"
                  : "0 8px 32px rgba(0,0,0,0.5)",
              }}>
                <Image src={s.src} alt={s.alt} width={200} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            ))}
          </div>

          {/* Right — content */}
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "1rem" }}>
              All-in-one experience
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#F0F4F8", lineHeight: 1.2, marginBottom: "1rem" }}>
              Your Mining.<br />In Your Hands.
            </h2>
            <p style={{ fontSize: "0.92rem", color: "#94A3B8", lineHeight: 1.75, marginBottom: "2rem" }}>
              Track performance, manage products, and earn rewards all from the Mining RACE App.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
              {FEATURES.map(f => (
                <div key={f.title} style={{ display: "flex", gap: "0.75rem" }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "0.5rem",
                    background: "rgba(0,200,150,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {f.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.85rem", fontWeight: 600, color: "#F0F4F8", marginBottom: "0.2rem" }}>{f.title}</h4>
                    <p style={{ fontSize: "0.78rem", color: "#475569", lineHeight: 1.55 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
              <button
                onClick={onDownload}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "#00C896", color: "#06060A", fontWeight: 700,
                  borderRadius: "0.625rem", padding: "0.75rem 1.75rem", fontSize: "0.9rem",
                  border: "none", cursor: "pointer",
                  boxShadow: "0 0 20px rgba(0,200,150,0.25)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download App
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#475569", fontSize: "0.8rem" }}>
                <span>Available on</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#94A3B8"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#94A3B8"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.834 1.64a1 1 0 010 1.726l-2.834 1.64-2.532-2.533 2.532-2.473zM5.864 3.458L16.8 9.79l-2.302 2.302-8.634-8.634z"/></svg>
                <svg width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
