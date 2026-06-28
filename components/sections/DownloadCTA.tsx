interface DownloadCTAProps { onDownload: () => void; }

export function DownloadCTA({ onDownload }: DownloadCTAProps) {
  return (
    <section style={{ padding: "4rem 0 5rem", background: "transparent" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
        <div style={{
          borderRadius: "1.25rem",
          padding: "5rem 2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          background: "rgba(14,20,30,0.3)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(255,255,255,0.04)",
        }}>
          {/* Top glow line */}
          <div style={{
            position: "absolute", top: 0, left: "20%", right: "20%", height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(0,200,150,0.5), transparent)",
          }} />
          <div style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
            width: "24rem", height: "12rem",
            background: "radial-gradient(ellipse, rgba(0,200,150,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "1rem" }}>
              Get started today
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#F0F4F8", marginBottom: "1rem" }}>
              Ready to Race?
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#94A3B8", marginBottom: "2rem", maxWidth: "28rem", margin: "0 auto 2rem" }}>
              Get your free CORE, activate your SPOT, and start earning.
            </p>
            <button
              onClick={onDownload}
              style={{
                background: "#00C896", color: "#06060A", fontWeight: 700,
                borderRadius: "0.625rem", padding: "1rem 2.5rem",
                fontSize: "1rem", border: "none", cursor: "pointer",
                boxShadow: "0 0 25px rgba(0,200,150,0.3), 0 0 60px rgba(0,200,150,0.1)",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Get Started Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
