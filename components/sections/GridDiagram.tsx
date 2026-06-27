import Image from "next/image";

const DEMAND = [
  { name: "Mining DEVICES", icon: "/images/mining-device.png" },
  { name: "Mining CARDS",   icon: "/images/mining-card.png" },
  { name: "Mining CORES",   icon: "/images/mining-core.png" },
];

const SUPPLY = [
  { name: "Power NODE", icon: "/images/power-node.png" },
  { name: "Micro NODE", icon: "/images/micro-node.png" },
];

export function GridDiagram() {
  return (
    <section style={{ padding: "3rem 0 5rem", background: "#06060A" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
        <div style={{
          border: "1px solid rgba(0,200,150,0.2)",
          borderRadius: "1rem",
          padding: "3rem 2.5rem",
          background: "linear-gradient(135deg, rgba(0,200,150,0.05) 0%, rgba(14,18,24,0.95) 25%, rgba(14,18,24,0.9) 75%, rgba(0,200,150,0.04) 100%)",
          boxShadow: "0 0 40px rgba(0,200,150,0.05), inset 0 1px 0 rgba(255,255,255,0.06), inset 0 0 25px rgba(0,200,150,0.02)",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Top glow */}
          <div style={{
            position: "absolute", top: 0, left: "10%", right: "10%", height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(0,200,150,0.3), transparent)",
          }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "2rem", alignItems: "center" }}>

            {/* Demand */}
            <div>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "0.75rem" }}>Demand Side</p>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "1.25rem" }}>Mining Solutions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {DEMAND.map(item => (
                  <div key={item.name} style={{
                    display: "flex", alignItems: "center", gap: "0.75rem",
                    padding: "0.625rem 1rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "0.625rem",
                    backdropFilter: "blur(8px)",
                  }}>
                    <Image src={item.icon} alt={item.name} width={28} height={28} style={{ objectFit: "contain" }} />
                    <span style={{ fontSize: "0.875rem", color: "#94A3B8", fontWeight: 500 }}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center — arrows + GRID circle */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
              {/* Arrows pointing right */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>

              <div style={{
                width: "10rem", height: "10rem", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                textAlign: "center",
                border: "2px solid rgba(0,200,150,0.5)",
                background: "radial-gradient(circle, rgba(0,200,150,0.08) 0%, rgba(0,200,150,0.02) 70%)",
                boxShadow: "0 0 50px rgba(0,200,150,0.12), 0 0 100px rgba(0,200,150,0.05), inset 0 0 30px rgba(0,200,150,0.05)",
                position: "relative",
              }}>
                {/* Animated ring glow */}
                <div style={{
                  position: "absolute", inset: "-4px", borderRadius: "50%",
                  border: "1px solid rgba(0,200,150,0.15)",
                }} />
                <div>
                  <p style={{ fontSize: "0.65rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#00C896", marginBottom: "0.125rem" }}>Mining RACE</p>
                  <p style={{ fontSize: "1.25rem", fontWeight: 900, color: "#F0F4F8" }}>GRID</p>
                </div>
              </div>

              {/* Arrows pointing left */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
            </div>

            {/* Supply */}
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "0.75rem" }}>Supply Side</p>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "1.25rem" }}>Power NODES</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {SUPPLY.map(item => (
                  <div key={item.name} style={{
                    display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.75rem",
                    padding: "0.625rem 1rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "0.625rem",
                    backdropFilter: "blur(8px)",
                  }}>
                    <span style={{ fontSize: "0.875rem", color: "#94A3B8", fontWeight: 500 }}>{item.name}</span>
                    <Image src={item.icon} alt={item.name} width={28} height={28} style={{ objectFit: "contain" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
