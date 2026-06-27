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
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 1rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.625rem", fontSize: "0.875rem", color: "#94A3B8", textDecoration: "none" }}>🍎 App Store</a>
              <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 1rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.625rem", fontSize: "0.875rem", color: "#94A3B8", textDecoration: "none" }}>▶ Google Play</a>
              <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 1rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.625rem", fontSize: "0.875rem", color: "#94A3B8", textDecoration: "none" }}>🌐 Web</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
