import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mining CORES",
  description:
    "Mining CORES are yearly renewable Racing Power units. Each CORE delivers 1 TH/s and competes in Sprint and Block Races automatically.",
};

const SPECS = [
  { label: "Hash power per CORE", value: "1 TH/s" },
  { label: "License term", value: "1 year, renewable" },
  { label: "Block Race eligibility", value: "Automatic — all active CORES entered at all times" },
  { label: "Sprint Race eligibility", value: "Newly activated CORES only. One Sprint chance per CORE at launch" },
  { label: "No limit on quantity", value: "Activate as many CORES as you like. More CORES = more Race entries" },
  { label: "Free CORE on sign-up?", value: "Yes. One CORE included with every SPOT activation" },
];

const RACE_MODES = [
  {
    name: "Sprint Race",
    who: "Newly activated CORES only",
    when: "Once per week",
    starts: "Starts when the first BTC block is mined after 18:00 GMT every Wednesday",
    reward: "1 CORE for every 20 competing CORES. Example: If 1,000 CORES compete, the winner receives 50 CORES",
  },
  {
    name: "Block Race",
    who: "All activated CORES",
    when: "With every mined Bitcoin block; approximately 144 times per day",
    starts: "Starts with each mined BTC block",
    reward: "1 CORE only",
  },
];

export default function MiningCoresPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "8rem 0 4rem", background: "#06060A", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "80vw", height: "60vh", background: "radial-gradient(ellipse at center, rgba(0,200,150,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>

            {/* Left */}
            <div>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#00C896", marginBottom: "1rem" }}>
                Racing Power
              </p>
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 800, color: "#F0F4F8", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Mining CORES
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#94A3B8", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Mining CORES are yearly renewable Racing Power units. Each CORE delivers 1 TH/s of mining hash power and mines BTC automatically while active.
              </p>
              <p style={{ fontSize: "1rem", color: "#94A3B8", lineHeight: 1.75 }}>
                What separates CORES from other mining products is the Racing layer. Every active CORE is automatically enrolled in the Power Racing Module, competing in Sprint and Block Races without any manual action required.
              </p>
            </div>

            {/* Right — product image */}
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
                  src="/images/mining-core.png"
                  alt="Mining CORE"
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

      {/* Specifications */}
      <section style={{ padding: "4rem 0", background: "#06060A" }}>
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
              CORES won through Races are active Mining CORES. They mine BTC and are automatically eligible for future Races. Winning compounds your Racing Power over time.
            </p>
          </div>
        </div>
      </section>

      {/* Power Racing Module */}
      <section style={{ padding: "4rem 0", background: "#0A0A0F" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#00C896", marginBottom: "0.75rem" }}>
            Power Racing Module
          </p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#F0F4F8", marginBottom: "1rem" }}>
            Two Racing Modes
          </h2>
          <p style={{ fontSize: "1rem", color: "#94A3B8", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "700px" }}>
            Standard Bitcoin mining rewards are based entirely on the hash power you contribute. The Power Racing Module adds a second layer: competition. Mining CORE holders are automatically entered into Races, time-based competitions where winners receive additional CORES.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
            {RACE_MODES.map((mode) => (
              <div
                key={mode.name}
                style={{
                  background: "#101016",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "0.875rem",
                  padding: "2rem",
                }}
              >
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "1.5rem" }}>
                  {mode.name}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <p style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#475569", marginBottom: "0.25rem" }}>Who can enter?</p>
                    <p style={{ fontSize: "0.88rem", color: "#94A3B8", lineHeight: 1.6 }}>{mode.who}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#475569", marginBottom: "0.25rem" }}>When does it run?</p>
                    <p style={{ fontSize: "0.88rem", color: "#94A3B8", lineHeight: 1.6 }}>{mode.when}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#475569", marginBottom: "0.25rem" }}>Starts</p>
                    <p style={{ fontSize: "0.88rem", color: "#94A3B8", lineHeight: 1.6 }}>{mode.starts}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#475569", marginBottom: "0.25rem" }}>What does the winner receive?</p>
                    <p style={{ fontSize: "0.88rem", color: "#00C896", lineHeight: 1.6, fontWeight: 500 }}>{mode.reward}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
