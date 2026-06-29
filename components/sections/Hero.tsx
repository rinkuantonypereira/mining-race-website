"use client";

interface HeroProps { onDownload: () => void; }

export function Hero({ onDownload }: HeroProps) {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "transparent" }}>
      {/* World map moved to page level */}

      {/* Dark gradient overlays for text readability */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(6,6,10,0.88) 15%, rgba(6,6,10,0.35) 40%, rgba(6,6,10,0.05) 70%)", zIndex: 2 }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "10%", background: "linear-gradient(to bottom, rgba(6,6,10,0.5), transparent)", zIndex: 2 }} />

      {/* Teal ambient glow behind mascot */}
      <div style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)", width: "45vw", height: "90vh", background: "radial-gradient(ellipse at center, rgba(0,200,150,0.08) 0%, transparent 65%)", pointerEvents: "none", zIndex: 1 }} />

      {/* Teal top accent line */}
      <div style={{ position: "absolute", top: "64px", left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #00C896, rgba(0,200,150,0.3) 30%, transparent 60%)", zIndex: 20 }} />

      {/* Mascot moved to page level for extended height */}

      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "5rem 2.5rem 3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center", minHeight: "calc(100vh - 8rem)" }}>

          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h1 style={{ fontWeight: 900, textTransform: "uppercase", lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
              <span style={{ display: "block", fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", color: "#FFFFFF" }}>Start Mining</span>
              <span style={{ display: "block", fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", color: "#00C896" }}>In Minutes</span>
            </h1>
            <p style={{ color: "#8B9AAD", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "24rem" }}>
              No hardware. No technical setup.<br />
              Just powerful mining, made simple.<br />
              Join a global network built for speed,<br />
              transparency, and real rewards.
            </p>
            <div style={{ marginBottom: "1.5rem" }}>
              <button
                onClick={onDownload}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "#00C896", color: "#06060A", fontWeight: 700,
                  borderRadius: "0.625rem", padding: "0.9rem 2.25rem", fontSize: "0.95rem",
                  border: "none", cursor: "pointer",
                  boxShadow: "0 0 20px rgba(0,200,150,0.3), 0 0 60px rgba(0,200,150,0.1)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download App
              </button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", color: "#475569", fontSize: "0.8rem" }}>
              <span>Available on</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#94A3B8"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#94A3B8"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.834 1.64a1 1 0 010 1.726l-2.834 1.64-2.532-2.533 2.532-2.473zM5.864 3.458L16.8 9.79l-2.302 2.302-8.634-8.634z"/></svg>
              <svg width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
            </div>
          </div>

          {/* Right — empty spacer for mascot (absolute positioned above) */}
          <div style={{ minHeight: "75vh" }} />
        </div>
      </div>
    </section>
  );
}
