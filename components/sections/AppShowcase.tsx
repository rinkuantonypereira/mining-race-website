import Image from "next/image";

const FEATURES = [
  { icon: "📊", title: "Real-Time Dashboard", desc: "Monitor power, earnings, and grid performance live." },
  { icon: "💸", title: "Smart Earnings",      desc: "Transparent payouts with real-time reward tracking." },
  { icon: "🎛",  title: "Easy Management",    desc: "Manage all your products in one simple interface." },
  { icon: "🔒", title: "Secure & Transparent", desc: "Enterprise-grade security with full transparency." },
];

const SCREENS = [
  { src: "/images/app-dashboard.png", alt: "Dashboard screen" },
  { src: "/images/app-mining.png",    alt: "Mining screen" },
  { src: "/images/app-rewards.png",   alt: "Rewards screen" },
];

export function AppShowcase() {
  return (
    <section style={{ padding: "5rem 0", background: "#0F0F13", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

          {/* Left — phones */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "1rem" }}>
            {SCREENS.map((s, i) => (
              <div key={s.src} style={{
                borderRadius: "1.5rem",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
                flexShrink: 0,
                width: i === 1 ? "160px" : "140px",
                transform: i === 1 ? "translateY(-2rem) scale(1.04)" : "none",
                zIndex: i === 1 ? 10 : 5,
                boxShadow: i === 1 ? "0 0 40px rgba(0,200,150,0.12)" : "0 8px 32px rgba(0,0,0,0.4)",
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
            <p style={{ fontSize: "0.95rem", color: "#94A3B8", lineHeight: 1.75, marginBottom: "2.5rem" }}>
              Track performance, manage products, and earn rewards all from the Mining RACE App.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2.5rem" }}>
              {FEATURES.map(f => (
                <div key={f.title} style={{ display: "flex", gap: "0.875rem" }}>
                  <span style={{ fontSize: "1.375rem", flexShrink: 0, marginTop: "0.125rem" }}>{f.icon}</span>
                  <div>
                    <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#F0F4F8", marginBottom: "0.25rem" }}>{f.title}</h4>
                    <p style={{ fontSize: "0.8rem", color: "#475569", lineHeight: 1.6 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#00C896",
                  color: "#06060A",
                  fontWeight: 700,
                  borderRadius: "0.625rem",
                  padding: "0.75rem 1.75rem",
                  fontSize: "0.9rem",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ↓ Download App
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#475569", fontSize: "0.8rem" }}>
                <span>Available on</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#94A3B8"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#94A3B8"><path d="M3 20.5v-17c0-.83.52-1.28 1-1.5l10 10-10 10c-.48-.22-1-.67-1-1.5zm14.5-5.5L5.7 21.7l9.8-9.7-9.8-9.7L17.5 9 21 12l-3.5 3z"/></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#94A3B8"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" stroke="#94A3B8" strokeWidth="2"/><line x1="12" y1="17" x2="12" y2="21" stroke="#94A3B8" strokeWidth="2"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
