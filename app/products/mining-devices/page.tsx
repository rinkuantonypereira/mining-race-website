import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mining DEVICES",
  description:
    "Mining DEVICES are hosted high-performance ASIC miners delivering 200+ TH/s for up to 4 years. Fully hosted with zero management required.",
};

const SPECS = [
  { label: "Hash power", value: "~200+ TH/s per DEVICE" },
  { label: "Contract term", value: "Up to 4 years" },
  { label: "Hardware management", value: "Fully hosted. Power, cooling, maintenance, and monitoring handled by the platform" },
  { label: "Hosting costs", value: "Automatically deducted from earnings. Separate billing available for large-scale operations." },
  { label: "Racing eligibility?", value: "No. Races are exclusive to Mining CORES" },
  { label: "Capacity", value: "The number of DEVICES you can connect is determined by your Race SPOT tier" },
];

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M15 2v2M15 20v2M2 15h2M20 15h2M9 2v2M9 20v2M2 9h2M20 9h2" />
      </svg>
    ),
    title: "High-Performance ASIC Hardware",
    text: "Physical mining rigs operating in professional partner facilities, delivering maximum hash power.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Fully Hosted & Managed",
    text: "Power, cooling, maintenance, and 24/7 monitoring — all handled by the platform and partner facilities.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Maximum Mining Output",
    text: "200+ TH/s per DEVICE for up to 4 years of continuous Bitcoin mining with no manual intervention.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "Transparent Hosting Costs",
    text: "Hosting fees are automatically deducted from earnings. Separate billing is available for large-scale setups.",
  },
];

export default function MiningDevicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "8rem 0 4rem", background: "#06060A", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "80vw", height: "60vh", background: "radial-gradient(ellipse at center, rgba(0,200,150,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>

            <div>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#00C896", marginBottom: "1rem" }}>
                Full Power
              </p>
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 800, color: "#F0F4F8", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Mining DEVICES
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#94A3B8", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Mining DEVICES are hosted high-performance hardware units. They are physical ASIC miners operating in Mining RACE partner facilities, delivering 200+ TH/s for up to 4 years.
              </p>
              <p style={{ fontSize: "1rem", color: "#94A3B8", lineHeight: 1.75 }}>
                For users looking to build a serious mining setup with maximum output, Mining DEVICES are the platform{"'"}s highest-capacity product.
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
                  src="/images/mining-device.png"
                  alt="Mining DEVICE"
                  width={320}
                  height={320}
                  unoptimized
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "4rem 0", background: "#06060A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {FEATURES.map((f) => (
              <div
                key={f.title}
                style={{
                  background: "#101016",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "0.875rem",
                  padding: "1.75rem 1.5rem",
                }}
              >
                <div style={{ marginBottom: "1rem" }}>{f.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "0.5rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#94A3B8", lineHeight: 1.65 }}>{f.text}</p>
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
                  <th style={{ padding: "1rem 1.5rem", textAlign: "left", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#475569" }}>Detail</th>
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
        </div>
      </section>

      {/* Best for callout */}
      <section style={{ padding: "4rem 0 6rem", background: "#0A0A0F" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(0,200,150,0.06) 0%, rgba(0,200,150,0.02) 100%)",
            border: "1px solid rgba(0,200,150,0.15)",
            borderRadius: "1rem",
            padding: "2.5rem 3rem",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}>
            <div style={{
              width: "52px",
              height: "52px",
              borderRadius: "0.75rem",
              background: "rgba(0,200,150,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "0.5rem" }}>
                Best for: Users building a larger-scale mining setup
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#94A3B8", lineHeight: 1.7 }}>
                Mining DEVICES deliver the highest capacity on the platform. Ideal for committed miners who want maximum mining output with fully managed infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
