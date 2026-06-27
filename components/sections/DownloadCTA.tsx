interface DownloadCTAProps { onDownload: () => void; }

export function DownloadCTA({ onDownload }: DownloadCTAProps) {
  return (
    <section style={{ padding: "5rem 0", background: "#08080A" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{
          borderRadius: "1.25rem",
          padding: "5rem 2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #141418 0%, rgba(0,200,150,0.04) 100%)",
          border: "1px solid rgba(0,200,150,0.2)",
        }}>
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "24rem", height: "12rem", background: "radial-gradient(ellipse, rgba(0,200,150,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "1rem" }}>
              Get started today
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#F0F4F8", marginBottom: "1rem" }}>
              Ready to Race?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#94A3B8", marginBottom: "2rem", maxWidth: "28rem", margin: "0 auto 2rem" }}>
              Get your free CORE, activate your SPOT, and start earning.
            </p>
            <button
              onClick={onDownload}
              style={{
                background: "#00C896", color: "#08080A", fontWeight: 700,
                borderRadius: "0.75rem", padding: "1rem 2.5rem",
                fontSize: "1rem", border: "none", cursor: "pointer",
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
