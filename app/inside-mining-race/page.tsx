"use client";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const VARIABLES = [
  { label: "Your Hash Power", desc: "The total TH/s contributed by your active mining solutions. More hash power means more mining capacity which allows you to generate more rewards." },
  { label: "Network Difficulty", desc: "Bitcoin's mining difficulty adjusts approximately every two weeks based on the total global hash rate. When more miners join the network globally, difficulty increases and the reward per TH/s decreases, and vice versa." },
  { label: "Bitcoin Price", desc: "All mining rewards are earned in BTC. The USD value of those rewards moves with the Bitcoin market price." },
];

const COMPARISON = [
  { standard: "You pay a management fee", race: "The fee becomes a community reward fund" },
  { standard: "Rewards are earned only from your own hash power", race: "Rewards are earned from mining + network participation" },
  { standard: "No community layer", race: "Active Mining Grid connects all Race SPOTS" },
  { standard: "Passive (Set it up and wait)", race: "Active (Races, competitions, and engagement)" },
  { standard: "One revenue stream", race: "Miner Earnings + eligible Grid Bonus activity" },
  { standard: "Retail users compete with institutional scale", race: "Redistribution designed to work at every scale" },
];

const VERIFY_STEPS = [
  "Open your Mining RACE wallet in the app",
  "Find the transaction you want to verify and copy the transaction hash",
  "Paste it into any public blockchain explorer",
  "The transaction, its value, and its timestamp are publicly visible and immutable",
];

const FAQS = [
  { q: "Are mining rewards taxable?", a: "Tax obligations on cryptocurrency mining rewards vary significantly by country and individual circumstances. Mining RACE does not provide tax advice. We recommend consulting a qualified tax professional in your jurisdiction before participating." },
  { q: "What happens if I want to stop using the platform?", a: "You can choose not to renew your Race SPOT at the end of your annual subscription period. If you hold Mining DEVICES, please refer to the Terms and Conditions for the process relating to hosted hardware arrangements." },
  { q: "Who controls my BTC?", a: "You do. Mining RACE uses a non-custodial wallet. The platform does not have access to your private keys or your Bitcoin holdings. Your wallet is yours alone." },
  { q: "What happens if a mining facility goes offline?", a: "Mining RACE partner facilities operate with redundancy and 24/7 monitoring. In the event of downtime, you will see the impact reflected in your dashboard." },
];

export default function InsideMiningRacePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main style={{ background: "#06060A", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ padding: "8rem 0 4rem", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "80vw", height: "60vh", background: "radial-gradient(ellipse at center, rgba(0,200,150,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem", position: "relative" }}>
            <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#00C896", marginBottom: "1rem" }}>Inside Mining RACE</p>
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 800, color: "#F0F4F8", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Transparency & Trust
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#94A3B8", lineHeight: 1.75 }}>
                Trust is not built through promises. It is built through clarity. This page exists to answer the questions that matter most — how the infrastructure works, where the rewards come from, how they are calculated, and how you can verify everything.
              </p>
            </div>
          </div>
        </section>

        {/* Mining Infrastructure */}
        <section style={{ padding: "3rem 0 4rem" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
            <div style={{ background: "linear-gradient(145deg, rgba(0,200,150,0.05) 0%, rgba(14,18,24,0.95) 25%)", border: "1px solid rgba(0,200,150,0.18)", borderRadius: "1rem", padding: "2.5rem 3rem", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "0.75rem" }}>The Mining Infrastructure</p>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "1.25rem" }}>How the Platform Operates</h2>
              <p style={{ fontSize: "0.95rem", color: "#94A3B8", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                The platform operates as a process manager and aggregator and connects users to established third-party mining facilities and the world{"'"}s largest Bitcoin mining pools. This model allows the platform to:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Scale capacity without the capital constraints of owning hardware outright",
                  "Work with best-in-class facilities rather than being limited to a single operation",
                  "Negotiate pool access and hash power at a level individual users could not achieve independently",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00C896", flexShrink: 0, marginTop: "0.5rem" }} />
                    <p style={{ fontSize: "0.88rem", color: "#94A3B8", lineHeight: 1.65 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How Rewards are Calculated */}
        <section style={{ padding: "4rem 0", background: "#0A0A0F" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, color: "#F0F4F8", marginBottom: "1rem", textAlign: "center" }}>How Rewards Are Calculated</h2>
            <p style={{ fontSize: "0.95rem", color: "#94A3B8", lineHeight: 1.75, textAlign: "center", maxWidth: "700px", margin: "0 auto 2.5rem" }}>
              Your mining rewards are a function of three variables. Understanding these helps set accurate expectations.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
              {VARIABLES.map((v) => (
                <div key={v.label} style={{ background: "linear-gradient(145deg, rgba(0,200,150,0.05) 0%, rgba(14,18,24,0.95) 25%)", border: "1px solid rgba(0,200,150,0.18)", borderRadius: "1rem", padding: "2rem", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#00C896", marginBottom: "0.75rem" }}>{v.label}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#94A3B8", lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "2rem", background: "rgba(0,200,150,0.04)", border: "1px solid rgba(0,200,150,0.15)", borderRadius: "0.875rem", padding: "1.25rem 1.75rem", borderLeft: "3px solid #00C896" }}>
              <p style={{ fontSize: "0.88rem", color: "#94A3B8", lineHeight: 1.7, fontStyle: "italic" }}>
                There are no guaranteed returns on Mining RACE. Rewards vary and can go up or down based on the variables above. The platform does not offer fixed-rate or guaranteed income products.
              </p>
            </div>
          </div>
        </section>

        {/* Redistribution Model */}
        <section style={{ padding: "4rem 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, color: "#F0F4F8", marginBottom: "1rem", textAlign: "center" }}>The Redistribution Model</h2>
            <p style={{ fontSize: "0.95rem", color: "#94A3B8", lineHeight: 1.75, textAlign: "center", maxWidth: "700px", margin: "0 auto 2.5rem" }}>
              Instead of retaining the management fee as platform revenue, the value is redistributed back into the network as the community reward fund — this is the Grid Bonus.
            </p>

            {/* Comparison table */}
            <div style={{ background: "#101016", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.875rem", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ padding: "1rem 1.5rem", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#475569" }}>Standard Mining Platform</div>
                <div style={{ padding: "1rem 1.5rem", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#00C896" }}>Mining RACE</div>
              </div>
              {COMPARISON.map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: i < COMPARISON.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                  <div style={{ padding: "1rem 1.5rem", fontSize: "0.85rem", color: "#6B7A8D", lineHeight: 1.6 }}>{row.standard}</div>
                  <div style={{ padding: "1rem 1.5rem", fontSize: "0.85rem", color: "#94A3B8", lineHeight: 1.6 }}>{row.race}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verify On-Chain */}
        <section style={{ padding: "4rem 0", background: "#0A0A0F" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
              <div>
                <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "0.75rem" }}>On-Chain Verification</p>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "1rem" }}>Verifying Your Rewards</h2>
                <p style={{ fontSize: "0.92rem", color: "#94A3B8", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                  Bitcoin transactions are public. Every reward paid to your Mining RACE wallet can be independently verified on the Bitcoin blockchain using any public blockchain explorer.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {VERIFY_STEPS.map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                      <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(0,200,150,0.1)", border: "1px solid rgba(0,200,150,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 700, color: "#00C896", flexShrink: 0 }}>{i + 1}</span>
                      <p style={{ fontSize: "0.88rem", color: "#94A3B8", lineHeight: 1.6 }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "0.75rem" }}>Your Wallet</p>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "1rem" }}>Wallet & Asset Control</h2>
                <p style={{ fontSize: "0.92rem", color: "#94A3B8", lineHeight: 1.75, marginBottom: "1rem" }}>
                  Mining RACE uses a non-custodial wallet structure. This means the platform does not hold your Bitcoin on your behalf. Your wallet, and the private keys that control access to it, belong to you.
                </p>
                <p style={{ fontSize: "0.92rem", color: "#94A3B8", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                  Rewards are paid directly into your Mining RACE wallet. You can withdraw them to any external Bitcoin wallet address at any time, subject to the minimum withdrawal threshold.
                </p>
                <div style={{ background: "rgba(0,200,150,0.04)", border: "1px solid rgba(0,200,150,0.15)", borderRadius: "0.875rem", padding: "1.25rem 1.5rem", borderLeft: "3px solid #00C896" }}>
                  <p style={{ fontSize: "0.82rem", color: "#94A3B8", lineHeight: 1.7, fontStyle: "italic" }}>
                    Non-custodial means you are responsible for the security of your wallet credentials. Mining RACE cannot recover your access if you lose your login details or seed phrase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "4rem 0 6rem" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, color: "#F0F4F8", marginBottom: "2rem", textAlign: "center" }}>Common Questions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {FAQS.map((faq, i) => (
                <div key={i} style={{ background: "#101016", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.75rem", overflow: "hidden" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: "100%", padding: "1.125rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#F0F4F8" }}>{faq.q}</span>
                    <span style={{ color: "#00C896", fontSize: "1.25rem", flexShrink: 0, marginLeft: "1rem", transition: "transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                  </button>
                  <div style={{ maxHeight: openFaq === i ? "200px" : "0", overflow: "hidden", transition: "max-height 0.3s ease" }}>
                    <p style={{ padding: "0 1.5rem 1.125rem", fontSize: "0.85rem", color: "#94A3B8", lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
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
