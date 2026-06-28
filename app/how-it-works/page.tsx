"use client";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

const STEPS = [
  {
    step: "01",
    title: "Download the App",
    description: "Available on iOS, Android, and Web. Takes under two minutes to register and set up your account.",
    image: "/images/app-dashboard.png",
  },
  {
    step: "02",
    title: "Activate Your Race SPOT",
    description: "Enter your invite code from an existing Mining RACE member. Your SPOT in the Mining Grid is automatically assigned. Then choose your subscription tier.",
    image: "/images/app-mining.png",
  },
  {
    step: "03",
    title: "Choose Your Mining Power",
    description: "Select the mining product that fits your goals: Mining CORES (Racing Power), Mining CARDS (Fixed Power), or Mining DEVICES (Full Power). Your SPOT tier determines your capacity.",
    image: "/images/app-rewards.png",
  },
];

const EARNINGS = [
  {
    title: "Earnings from Mining",
    items: [
      "BTC rewards generated directly by the mining power connected to your Race SPOT.",
      "Determined by: your active hash power (from CORES/CARDS/DEVICES), current Bitcoin price, and global network difficulty.",
      "Tracked in real time in your Mining RACE dashboard.",
    ],
  },
  {
    title: "Grid Bonus",
    items: [
      "Additional rewards from eligible network activity within your connected community.",
      "Participation-based. Flows from eligible activity within the Grid, not from a fixed formula.",
      "Paid directly to your non-custodial wallet in BTC.",
    ],
  },
];

const WHY_CHOOSE = [
  { title: "Private & Secure by Design", desc: "Blockchain-powered protocols to keep your mining transparent, while maintaining industry-best security practices." },
  { title: "Easy to Start, Easy to Scale", desc: "Ease-of-entry to start in the mining industry with a small setup and expand as your goals grow." },
  { title: "Built for Better Results", desc: "Carefully engineered and enhanced to deliver stronger performance than traditional mining approaches." },
  { title: "Community-Driven Rewards", desc: "Redistribution systems planned in a way that users of all sizes can benefit and not just the biggest ones." },
  { title: "Dynamic Engagement", desc: "Races, collaborations, and events turn mining into an active experience, not just something running in the background." },
  { title: "Mining Without the Hassle", desc: "Setup, infrastructure, and operations are managed for you from day one, so no technical know-how required." },
];

const FAQS = [
  { q: "Do I need to know anything about Bitcoin to get started?", a: "No. The app is designed for users at every level. The Education Center and onboarding flow guide you through everything from basics to active mining." },
  { q: "What happens if I do not renew my Race SPOT?", a: "Your SPOT becomes inactive. Mining products connected to it stop earning, and you lose access to the Mining Grid until you renew." },
  { q: "Can I monitor my mining performance?", a: "Yes. Your dashboard shows real-time hash power, rewards, Race results, and active product status." },
  { q: "How are rewards paid?", a: "Directly to your non-custodial Mining RACE wallet in BTC. You can withdraw to any external Bitcoin address at any time, subject to the minimum withdrawal threshold." },
  { q: "How many Mining CORES can I hold?", a: "No limit. The more CORES you hold, the higher your chances of winning in Sprint and Block Races." },
  { q: "Do I need to manage my Mining DEVICES?", a: "No. DEVICES are fully hosted. Power, cooling, maintenance, and monitoring are managed by the platform." },
];

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main style={{ background: "#06060A", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ padding: "8rem 0 4rem", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "80vw", height: "60vh", background: "radial-gradient(ellipse at center, rgba(0,200,150,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem", position: "relative" }}>
            <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#00C896", marginBottom: "1rem" }}>How It Works</p>
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 800, color: "#F0F4F8", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Bitcoin Mining, Simplified
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#94A3B8", lineHeight: 1.75 }}>
                Bitcoin mining is how new Bitcoin is created and how transactions on the blockchain are verified. Mining RACE removes all of the complexity. You access mining solutions through the app, and the platform manages everything on your behalf.
              </p>
            </div>
          </div>
        </section>

        {/* What is a Race SPOT */}
        <section style={{ padding: "3rem 0 4rem" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
              <div style={{ background: "linear-gradient(145deg, rgba(0,200,150,0.05) 0%, rgba(14,18,24,0.95) 25%)", border: "1px solid rgba(0,200,150,0.18)", borderRadius: "1rem", padding: "2.5rem", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}>
                <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "0.75rem" }}>Race SPOT</p>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "1rem" }}>What is a Race SPOT?</h2>
                <p style={{ fontSize: "0.92rem", color: "#94A3B8", lineHeight: 1.75 }}>
                  A Race SPOT is your active account license on Mining RACE. It is your position in the Mining Grid — the network layer that connects all Racers and coordinates mining activity and reward distribution across the community.
                </p>
                <p style={{ fontSize: "0.92rem", color: "#94A3B8", lineHeight: 1.75, marginTop: "1rem" }}>
                  Without a SPOT, you cannot access the platform. The subscription must be purchased and renewed annually. Your SPOT tier determines your capacity.
                </p>
              </div>
              <div style={{ background: "linear-gradient(145deg, rgba(0,200,150,0.05) 0%, rgba(14,18,24,0.95) 25%)", border: "1px solid rgba(0,200,150,0.18)", borderRadius: "1rem", padding: "2.5rem", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}>
                <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "0.75rem" }}>Mining Grid</p>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "1rem" }}>What is the Mining Grid?</h2>
                <p style={{ fontSize: "0.92rem", color: "#94A3B8", lineHeight: 1.75 }}>
                  The Mining Grid is the network that connects every SPOT on the Mining RACE platform. It is the operational layer: a pre-programmed, transparent structure that coordinates how mining activity is pooled and how rewards are distributed across the community.
                </p>
                <p style={{ fontSize: "0.92rem", color: "#94A3B8", lineHeight: 1.75, marginTop: "1rem" }}>
                  When you activate a SPOT license, you join the Mining Grid. Your mining solutions contribute hash power to the collective network.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section style={{ padding: "4rem 0", background: "#0A0A0F" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#00C896", marginBottom: "0.75rem" }}>Getting Started</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, color: "#F0F4F8" }}>3 Simple Steps</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
              {STEPS.map((s) => (
                <div key={s.step} style={{ background: "linear-gradient(145deg, rgba(0,200,150,0.05) 0%, rgba(14,18,24,0.95) 25%)", border: "1px solid rgba(0,200,150,0.18)", borderRadius: "1rem", padding: "2rem", textAlign: "center", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}>
                  <p style={{ fontSize: "2.5rem", fontWeight: 900, color: "rgba(0,200,150,0.15)", marginBottom: "1rem" }}>{s.step}</p>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "0.75rem" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#94A3B8", lineHeight: 1.65 }}>{s.description}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "2rem", background: "rgba(0,200,150,0.04)", border: "1px solid rgba(0,200,150,0.15)", borderRadius: "0.875rem", padding: "1.25rem 1.75rem", borderLeft: "3px solid #00C896" }}>
              <p style={{ fontSize: "0.88rem", color: "#94A3B8", lineHeight: 1.7, fontStyle: "italic" }}>
                Every SPOT includes a free Mining CORE to get you started, so your first mining activity begins as soon as you activate.
              </p>
            </div>
          </div>
        </section>

        {/* How Your SPOT Earns */}
        <section style={{ padding: "4rem 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, color: "#F0F4F8", marginBottom: "2rem", textAlign: "center" }}>How Your SPOT Earns</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {EARNINGS.map((e) => (
                <div key={e.title} style={{ background: "linear-gradient(145deg, rgba(0,200,150,0.05) 0%, rgba(14,18,24,0.95) 25%)", border: "1px solid rgba(0,200,150,0.18)", borderRadius: "1rem", padding: "2rem", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#00C896", marginBottom: "1.25rem" }}>{e.title}</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {e.items.map((item, i) => (
                      <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00C896", flexShrink: 0, marginTop: "0.5rem" }} />
                        <p style={{ fontSize: "0.88rem", color: "#94A3B8", lineHeight: 1.65 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "2rem", background: "rgba(0,200,150,0.04)", border: "1px solid rgba(0,200,150,0.15)", borderRadius: "0.875rem", padding: "1.25rem 1.75rem", borderLeft: "3px solid #00C896" }}>
              <p style={{ fontSize: "0.88rem", color: "#94A3B8", lineHeight: 1.7, fontStyle: "italic" }}>
                Mining rewards are variable. They are affected by BTC price movements, changes in global network mining difficulty, your level of activity, and eligibility criteria at the time of participation. There are no fixed or guaranteed returns.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Mining RACE */}
        <section style={{ padding: "4rem 0", background: "#0A0A0F" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, color: "#F0F4F8", marginBottom: "2.5rem", textAlign: "center" }}>Why Choose Mining RACE</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
              {WHY_CHOOSE.map((item) => (
                <div key={item.title} style={{ background: "#101016", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.875rem", padding: "1.75rem 1.5rem" }}>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "#94A3B8", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "4rem 0 6rem" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, color: "#F0F4F8", marginBottom: "2rem", textAlign: "center" }}>Frequently Asked Questions</h2>
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
