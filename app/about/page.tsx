import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Mining RACE was built to close the gap between the complexity of Bitcoin mining and the people who want to participate in it.",
};

const TIMELINE = [
  { year: "2016", text: "Founding team begins building in the blockchain space with over 120,000+ combined days of experience." },
  { year: "2023", text: "Mining RACE platform launches in December, opening Bitcoin mining access to individuals worldwide." },
  { year: "2024", text: "Rapid growth across 140+ countries. Mining Grid Showroom opens in Dubai." },
  { year: "2025", text: "Over 50,000 app users with consistent month-over-month growth in downloads." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#06060A", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ padding: "8rem 0 4rem", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "80vw", height: "60vh", background: "radial-gradient(ellipse at center, rgba(0,200,150,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem", position: "relative" }}>
            <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#00C896", marginBottom: "1rem" }}>About Us</p>
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 800, color: "#F0F4F8", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                The Mining RACE Story
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#94A3B8", lineHeight: 1.75 }}>
                We saw an opportunity to unite miners worldwide, optimize mining power, and redistribute rewards in new efficient ways — aligning with Satoshi{"'"}s vision for decentralization.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section style={{ padding: "3rem 0 4rem" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div style={{ background: "linear-gradient(145deg, rgba(0,200,150,0.05) 0%, rgba(14,18,24,0.95) 25%)", border: "1px solid rgba(0,200,150,0.18)", borderRadius: "1rem", padding: "2.5rem", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}>
                <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "0.75rem" }}>Mission</p>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "1rem" }}>Our Mission</h2>
                <p style={{ fontSize: "0.95rem", color: "#94A3B8", lineHeight: 1.75 }}>
                  To make Bitcoin mining genuinely accessible to individuals. Mining RACE was built to close the gap between the complexity of Bitcoin mining and the people who want to participate in it.
                </p>
              </div>
              <div style={{ background: "linear-gradient(145deg, rgba(0,200,150,0.05) 0%, rgba(14,18,24,0.95) 25%)", border: "1px solid rgba(0,200,150,0.18)", borderRadius: "1rem", padding: "2.5rem", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}>
                <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "0.75rem" }}>Vision</p>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "1rem" }}>Our Vision</h2>
                <p style={{ fontSize: "0.95rem", color: "#94A3B8", lineHeight: 1.75 }}>
                  A global Bitcoin mining network where participation is open to everyone, rewards are distributed fairly, and the original principles of Bitcoin — decentralization, transparency, and individual ownership — are actively preserved, not just claimed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section style={{ padding: "4rem 0", background: "#0A0A0F" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
            <div style={{ maxWidth: "800px" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "0.75rem" }}>Story & History</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, color: "#F0F4F8", marginBottom: "1.5rem" }}>How It All Started</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p style={{ fontSize: "0.95rem", color: "#94A3B8", lineHeight: 1.75 }}>
                  Bitcoin mining was not always dominated by industrial-scale operators. In its early years, individuals could mine meaningfully from home with modest hardware. That changed as the network grew, difficulty increased, and the economics of mining shifted heavily in favor of those with access to capital, cheap power, and specialized infrastructure.
                </p>
                <p style={{ fontSize: "0.95rem", color: "#94A3B8", lineHeight: 1.75 }}>
                  The founders of Mining Grid saw that gap and set out to close it. The question they were trying to answer was simple: <strong style={{ color: "#F0F4F8" }}>what would Bitcoin mining look like if it were designed for real people, and not industrial players?</strong>
                </p>
                <p style={{ fontSize: "0.95rem", color: "#94A3B8", lineHeight: 1.75 }}>
                  That answer became Mining RACE — a platform that handles the infrastructure, removes the technical barriers, and critically, takes the management fee that traditional mining facilities retain as profit and routes it back into the community it serves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: "4rem 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, color: "#F0F4F8", marginBottom: "2.5rem", textAlign: "center" }}>Our Journey</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
              {TIMELINE.map((t) => (
                <div key={t.year} style={{ background: "#101016", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.875rem", padding: "1.75rem 1.5rem", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #00C896, transparent)" }} />
                  <p style={{ fontSize: "2rem", fontWeight: 900, color: "rgba(0,200,150,0.15)", marginBottom: "0.75rem" }}>{t.year}</p>
                  <p style={{ fontSize: "0.85rem", color: "#94A3B8", lineHeight: 1.65 }}>{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Showroom */}
        <section style={{ padding: "4rem 0", background: "#0A0A0F" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
            <div style={{ background: "linear-gradient(135deg, rgba(0,200,150,0.06) 0%, rgba(14,18,24,0.95) 30%)", border: "1px solid rgba(0,200,150,0.2)", borderRadius: "1rem", padding: "3rem", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "0.75rem" }}>Physical Presence</p>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "1.25rem" }}>The Mining Grid Showroom, Dubai</h2>
              <p style={{ fontSize: "0.95rem", color: "#94A3B8", lineHeight: 1.75, marginBottom: "1rem" }}>
                Mining RACE is not just a digital platform. Mining Grid operates a physical showroom in Dubai. It is a space where anyone can walk in, see real mining hardware in operation, attend Bitcoin and blockchain education sessions, and speak directly with the team.
              </p>
              <p style={{ fontSize: "0.95rem", color: "#94A3B8", lineHeight: 1.75 }}>
                The showroom includes an auditorium that runs regular classes covering Bitcoin fundamentals, how mining works, and how to get started on the platform. It is open to the public and designed to make Bitcoin accessible at a human level.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: "4rem 0 6rem" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
              {[
                { value: "140+", label: "Countries" },
                { value: "50,000+", label: "App Users" },
                { value: "120,000+", label: "Combined Days of Blockchain Experience" },
                { value: "8+", label: "Years Building in the Space" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center", padding: "2rem 1rem" }}>
                  <p style={{ fontSize: "2rem", fontWeight: 800, color: "#00C896", marginBottom: "0.5rem" }}>{s.value}</p>
                  <p style={{ fontSize: "0.78rem", color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
