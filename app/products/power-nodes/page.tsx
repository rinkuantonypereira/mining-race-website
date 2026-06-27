import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Power NODES",
  description:
    "Power NODES sit on the supply side of the Mining RACE Grid. A unit of compute capacity deployed within the Grid for up to 4 years.",
};

const SPECS = [
  { label: "What is it?", value: "A unit of compute capacity deployed within the Mining RACE Grid" },
  { label: "Service Period", value: "Up to 4 years from activation" },
  { label: "Deployment", value: "Automatic — system-managed, no user configuration required" },
  { label: "Workload Allocation", value: "Managed entirely by the system. Users do not control or select workloads" },
  { label: "Performance", value: "Variable. Reflects real-time Grid activity and system conditions" },
  { label: "Monitoring", value: "Live performance data accessible via your Mining RACE app" },
];

const KEY_POINTS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: "Supply Side of the Grid",
    text: "CORES, CARDS, and DEVICES consume compute capacity. Power NODES contribute to it — a fundamentally different kind of participation.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Zero Configuration",
    text: "You activate your NODE and it is immediately deployed within the Grid. No manual setup, no workload selection needed.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "Live Monitoring",
    text: "Activity and performance are visible at any time through your Mining RACE dashboard.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Up to 4 Years",
    text: "Each NODE operates across Grid workloads for a service period of up to 4 years from activation.",
  },
];

export default function PowerNodesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "8rem 0 4rem", background: "#06060A", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "80vw", height: "60vh", background: "radial-gradient(ellipse at center, rgba(0,200,150,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>

            <div>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#00C896", marginBottom: "1rem" }}>
                Grid Infrastructure
              </p>
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 800, color: "#F0F4F8", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Power NODES
              </h1>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#6B7A8D", marginBottom: "1.5rem" }}>
                The Supply Side of the Mining RACE Ecosystem
              </h2>
              <p style={{ fontSize: "1.05rem", color: "#94A3B8", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                CORES, CARDS, and DEVICES operate on the demand side of the Grid. They consume compute capacity to mine Bitcoin. Power NODES sit on the opposite side of that equation.
              </p>
              <p style={{ fontSize: "1rem", color: "#94A3B8", lineHeight: 1.75 }}>
                A NODE is a unit of compute capacity that you activate within the Grid, where it is automatically deployed across infrastructure workloads. Instead of using the Grid{"'"}s resources, a NODE contributes to them, making it a fundamentally different kind of participation within the same ecosystem you already know.
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{
                background: "radial-gradient(ellipse at center, rgba(0,200,150,0.08) 0%, transparent 70%)",
                borderRadius: "1.5rem",
                padding: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Image
                  src="/images/power-node.png"
                  alt="Power NODE"
                  width={320}
                  height={320}
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section style={{ padding: "4rem 0", background: "#06060A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#F0F4F8", marginBottom: "1rem" }}>
            How it Works
          </h2>
          <p style={{ fontSize: "1rem", color: "#94A3B8", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "750px" }}>
            You activate your NODE, and it is immediately deployed within the Grid. No manual setup, no configuration, and no workload selection is needed on your part. The system manages all allocation decisions. From there, your NODE operates across Grid workloads for a service period of up to 4 years, with its activity and performance visible to you at any time through your Mining RACE dashboard.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {KEY_POINTS.map((kp) => (
              <div
                key={kp.title}
                style={{
                  background: "#101016",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "0.875rem",
                  padding: "1.75rem 1.5rem",
                }}
              >
                <div style={{ marginBottom: "1rem" }}>{kp.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "0.5rem" }}>{kp.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#94A3B8", lineHeight: 1.65 }}>{kp.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section style={{ padding: "4rem 0", background: "#0A0A0F" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#F0F4F8", marginBottom: "2rem" }}>
            Specifications
          </h2>
          <div style={{ background: "#101016", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.875rem", overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <th style={{ padding: "1rem 1.5rem", textAlign: "left", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#475569", width: "40%" }}>Specification</th>
                  <th style={{ padding: "1rem 1.5rem", textAlign: "left", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#475569" }}>Details</th>
                </tr>
              </thead>
              <tbody>
                {SPECS.map((spec, i) => (
                  <tr key={spec.label} style={{ borderBottom: i < SPECS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <td style={{ padding: "1rem 1.5rem", fontSize: "0.9rem", fontWeight: 600, color: "#F0F4F8" }}>{spec.label}</td>
                    <td style={{ padding: "1rem 1.5rem", fontSize: "0.88rem", color: "#94A3B8", lineHeight: 1.6 }}>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Callout */}
          <div style={{
            marginTop: "2rem",
            background: "rgba(0,200,150,0.04)",
            border: "1px solid rgba(0,200,150,0.15)",
            borderRadius: "0.875rem",
            padding: "1.5rem 1.75rem",
            borderLeft: "3px solid #00C896",
          }}>
            <p style={{ fontSize: "0.92rem", color: "#94A3B8", lineHeight: 1.7, fontStyle: "italic" }}>
              Power NODE is a compute capacity service, not a mining product. Performance is variable and reflects live system conditions. There are no fixed or predictable outcomes. The service period of up to 4 years reflects the infrastructure lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Demand vs Supply visual */}
      <section style={{ padding: "4rem 0 6rem", background: "#0A0A0F" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{
            background: "#101016",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "1rem",
            overflow: "hidden",
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {/* Demand side */}
              <div style={{ padding: "2.5rem", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#475569", marginBottom: "1rem" }}>
                  Demand Side
                </p>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "1rem" }}>
                  Mining Products
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {["Mining CORES — 1 TH/s Racing Power", "Mining CARDS — 100 TH/s Fixed Power", "Mining DEVICES — 200+ TH/s Full Power"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#94A3B8", flexShrink: 0 }} />
                      <p style={{ fontSize: "0.88rem", color: "#94A3B8" }}>{item}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: "0.82rem", color: "#475569", lineHeight: 1.6, marginTop: "1.25rem" }}>
                  These products consume compute capacity from the Grid to mine Bitcoin.
                </p>
              </div>

              {/* Supply side */}
              <div style={{ padding: "2.5rem", background: "rgba(0,200,150,0.03)" }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "1rem" }}>
                  Supply Side
                </p>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "1rem" }}>
                  Power NODES
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {["Contribute compute capacity to the Grid", "Automatically deployed across workloads", "Up to 4-year service period"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00C896", flexShrink: 0 }} />
                      <p style={{ fontSize: "0.88rem", color: "#94A3B8" }}>{item}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: "0.82rem", color: "#475569", lineHeight: 1.6, marginTop: "1.25rem" }}>
                  Power NODES sit on the supply side, powering the infrastructure that the entire ecosystem depends on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
