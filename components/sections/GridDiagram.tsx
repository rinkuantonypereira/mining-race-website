export function GridDiagram() {
  const demand = ["Mining DEVICES", "Mining CARDS", "Mining CORES"];
  const supply = ["Power NODE", "Micro NODE"];

  return (
    <section style={{ padding: "5rem 0", background: "#08080A" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1rem", padding: "3rem", background: "#0F0F13" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "2rem", alignItems: "center" }}>

            {/* Demand */}
            <div>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "1rem" }}>Demand Side</p>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "1.5rem" }}>Mining Solutions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {demand.map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", background: "#1A1A20", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.625rem" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "2px", background: "#00C896", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.875rem", color: "#94A3B8" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
              <span style={{ color: "#00C896", fontSize: "1.5rem" }}>⇄</span>
              <div style={{
                width: "9rem", height: "9rem", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                textAlign: "center",
                border: "2px solid #00C896",
                background: "radial-gradient(circle, rgba(0,200,150,0.1) 0%, rgba(0,200,150,0.02) 70%)",
                boxShadow: "0 0 40px rgba(0,200,150,0.18)",
              }}>
                <div>
                  <p style={{ fontSize: "0.65rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#00C896", marginBottom: "0.25rem" }}>Mining RACE</p>
                  <p style={{ fontSize: "1.1rem", fontWeight: 900, color: "#F0F4F8" }}>GRID</p>
                </div>
              </div>
            </div>

            {/* Supply */}
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "1rem" }}>Supply Side</p>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "1.5rem" }}>Power NODES</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {supply.map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.75rem", padding: "0.75rem 1rem", background: "#1A1A20", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.625rem" }}>
                    <span style={{ fontSize: "0.875rem", color: "#94A3B8" }}>{item}</span>
                    <div style={{ width: "8px", height: "8px", borderRadius: "2px", background: "#00C896", flexShrink: 0 }} />
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
