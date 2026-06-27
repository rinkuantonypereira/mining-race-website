import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mining CARDS",
  description:
    "Mining CARDS provide Fixed Power mining — 100 TH/s per CARD, with no hardware to purchase or manage. Stackable and auto-renewable.",
};

const SPECS = [
  { label: "Hash power per CARD", value: "100 TH/s" },
  { label: "Active period", value: "Approximately 120 days" },
  { label: "Renewable?", value: "Yes. Auto-renewable for uninterrupted mining" },
  { label: "Stackable?", value: "Yes. May have multiple CARDS simultaneously, within your SPOT tier limit" },
  { label: "Hardware required?", value: "No. Fully hosted, no physical equipment involved" },
  { label: "Racing eligibility?", value: "No. Races are exclusive to Mining CORES" },
];

const HIGHLIGHTS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "100 TH/s Per CARD",
    text: "Each Mining CARD delivers substantial hash power without any hardware management on your part.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "Auto-Renewable",
    text: "Mining continues without interruption. CARDS auto-renew at the end of each active period.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: "Stackable",
    text: "Hold multiple CARDS simultaneously within your SPOT tier capacity to scale your mining power.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Zero Management",
    text: "No hardware purchases, no hosting logistics, no technical configuration required.",
  },
];

export default function MiningCardsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "8rem 0 4rem", background: "#06060A", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "80vw", height: "60vh", background: "radial-gradient(ellipse at center, rgba(0,200,150,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>

            <div>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#00C896", marginBottom: "1rem" }}>
                Fixed Power
              </p>
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 800, color: "#F0F4F8", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Mining CARDS
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#94A3B8", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Mining CARDS provide Fixed Power mining — 100 TH/s per CARD, with no hardware to purchase or manage.
              </p>
              <p style={{ fontSize: "1rem", color: "#94A3B8", lineHeight: 1.75 }}>
                Designed for users who want consistent, ongoing Bitcoin mining without complexity or multi-year hardware commitments.
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
                  src="/images/mining-card.png"
                  alt="Mining CARD"
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

      {/* Highlights */}
      <section style={{ padding: "4rem 0", background: "#06060A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.title}
                style={{
                  background: "#101016",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "0.875rem",
                  padding: "1.75rem 1.5rem",
                }}
              >
                <div style={{ marginBottom: "1rem" }}>{h.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "0.5rem" }}>{h.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#94A3B8", lineHeight: 1.65 }}>{h.text}</p>
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
              Mining CARDS are the most straightforward path into active Bitcoin mining on Mining RACE with consistent hash power, automatic renewal, and zero operational management.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
