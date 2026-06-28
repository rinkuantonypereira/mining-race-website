"use client";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

const FAQ_CATEGORIES = {
  "Getting Started": [
    { q: "How do I create an account?", a: "Download the Mining RACE app from the App Store, Google Play, or Web. Registration takes under two minutes. You will need an invite code from an existing Mining RACE member." },
    { q: "What is a Race SPOT?", a: "A Race SPOT is your annual software subscription that assigns your position within the Mining Grid. It connects you with mining services and is required to access the platform." },
    { q: "Do I need technical knowledge?", a: "No. The app is designed for users at every level. The Education Center and onboarding flow guide you through everything from basics to active mining." },
    { q: "What do I get with my SPOT?", a: "Every SPOT includes: 1 free Mining CORE, a multi-chain non-custodial wallet, access to the Education Center, invitations to community events, dedicated customer support, and real-time dashboard tracking." },
  ],
  "Rewards & Withdrawals": [
    { q: "How are rewards paid?", a: "Directly to your non-custodial Mining RACE wallet in BTC. You can withdraw to any external Bitcoin address at any time, subject to the minimum withdrawal threshold." },
    { q: "Are rewards guaranteed?", a: "No. Mining rewards are variable. They depend on Bitcoin price, network difficulty, your hash power, and your level of activity. There are no fixed or guaranteed returns." },
    { q: "What is the Grid Bonus?", a: "The Grid Bonus is a participation-based reward from eligible network activity. It is not a referral commission — it is calculated and distributed automatically through a pre-programmed structure." },
    { q: "Can I verify my rewards on-chain?", a: "Yes. Every reward paid to your wallet can be independently verified on the Bitcoin blockchain using any public blockchain explorer." },
  ],
  "Technical": [
    { q: "Who controls my Bitcoin?", a: "You do. Mining RACE uses a non-custodial wallet. The platform does not have access to your private keys or Bitcoin holdings." },
    { q: "What happens if a mining facility goes offline?", a: "Mining RACE partner facilities operate with redundancy and 24/7 monitoring. In the event of downtime, the impact will be reflected in your dashboard." },
    { q: "Do I need to manage Mining DEVICES?", a: "No. DEVICES are fully hosted. Power, cooling, maintenance, and monitoring are managed by the platform." },
    { q: "Can I have multiple Mining CARDS?", a: "Yes. CARDS are stackable within your SPOT tier capacity. They auto-renew for uninterrupted mining." },
  ],
};

export default function SupportPage() {
  const [activeCategory, setActiveCategory] = useState("Getting Started");
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
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#00C896", marginBottom: "1rem" }}>Support</p>
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 800, color: "#F0F4F8", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                How Can We Help?
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#94A3B8", lineHeight: 1.75 }}>
                Find answers to common questions in the FAQ below, explore the Education Center, or reach our support team directly. We are here throughout your entire Mining RACE journey.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ padding: "3rem 0 4rem" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 2.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 700, color: "#F0F4F8", marginBottom: "2rem" }}>Frequently Asked Questions</h2>

            {/* Category tabs */}
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
              {Object.keys(FAQ_CATEGORIES).map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setOpenFaq(null); }}
                  style={{
                    padding: "0.5rem 1.25rem",
                    borderRadius: "2rem",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    border: "1px solid",
                    borderColor: activeCategory === cat ? "#00C896" : "rgba(255,255,255,0.1)",
                    background: activeCategory === cat ? "rgba(0,200,150,0.1)" : "transparent",
                    color: activeCategory === cat ? "#00C896" : "#94A3B8",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* FAQ items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {FAQ_CATEGORIES[activeCategory as keyof typeof FAQ_CATEGORIES].map((faq, i) => (
                <div key={i} style={{ background: "#101016", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.75rem", overflow: "hidden" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: "100%", padding: "1.125rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#F0F4F8" }}>{faq.q}</span>
                    <span style={{ color: "#00C896", fontSize: "1.25rem", flexShrink: 0, marginLeft: "1rem", transition: "transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                  </button>
                  <div style={{ maxHeight: openFaq === i ? "300px" : "0", overflow: "hidden", transition: "max-height 0.3s ease" }}>
                    <p style={{ padding: "0 1.5rem 1.125rem", fontSize: "0.85rem", color: "#94A3B8", lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Center */}
        <section style={{ padding: "4rem 0", background: "#0A0A0F" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#00C896", marginBottom: "0.75rem" }}>Education Center</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 700, color: "#F0F4F8", marginBottom: "0.75rem" }}>Learn at Your Own Pace</h2>
              <p style={{ fontSize: "0.95rem", color: "#94A3B8", maxWidth: "600px", margin: "0 auto" }}>
                New to Bitcoin mining? The Education Center is built for users at every level.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
              {[
                { icon: "📚", title: "Books & Guides", desc: "Written resources covering Bitcoin fundamentals, mining mechanics, and platform features." },
                { icon: "🎥", title: "Video Tutorials", desc: "Step-by-step video guides from getting started to advanced strategies." },
                { icon: "🎙", title: "Podcasts", desc: "Conversations with industry experts about Bitcoin, mining, and the future of decentralized finance." },
              ].map((item) => (
                <div key={item.title} style={{ background: "linear-gradient(145deg, rgba(0,200,150,0.05) 0%, rgba(14,18,24,0.95) 25%)", border: "1px solid rgba(0,200,150,0.18)", borderRadius: "1rem", padding: "2rem", textAlign: "center", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}>
                  <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "1rem" }}>{item.icon}</span>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "#94A3B8", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section style={{ padding: "4rem 0 6rem" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 2.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#00C896", marginBottom: "0.75rem" }}>Contact Us</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 700, color: "#F0F4F8", marginBottom: "0.75rem" }}>Get in Touch</h2>
              <p style={{ fontSize: "0.92rem", color: "#94A3B8" }}>
                Cannot find what you are looking for? Our support team is available to help.
              </p>
            </div>
            <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }} onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <input type="text" placeholder="Full Name" required style={{ padding: "0.875rem 1rem", borderRadius: "0.625rem", border: "1px solid rgba(255,255,255,0.1)", background: "#101016", color: "#F0F4F8", fontSize: "0.88rem", outline: "none" }} />
                <input type="email" placeholder="Email Address" required style={{ padding: "0.875rem 1rem", borderRadius: "0.625rem", border: "1px solid rgba(255,255,255,0.1)", background: "#101016", color: "#F0F4F8", fontSize: "0.88rem", outline: "none" }} />
              </div>
              <input type="text" placeholder="Subject" required style={{ padding: "0.875rem 1rem", borderRadius: "0.625rem", border: "1px solid rgba(255,255,255,0.1)", background: "#101016", color: "#F0F4F8", fontSize: "0.88rem", outline: "none" }} />
              <textarea placeholder="Message" rows={5} required style={{ padding: "0.875rem 1rem", borderRadius: "0.625rem", border: "1px solid rgba(255,255,255,0.1)", background: "#101016", color: "#F0F4F8", fontSize: "0.88rem", outline: "none", resize: "vertical", fontFamily: "inherit" }} />
              <button type="submit" style={{ padding: "0.875rem 2rem", borderRadius: "0.625rem", background: "#00C896", color: "#06060A", fontWeight: 700, fontSize: "0.9rem", border: "none", cursor: "pointer", boxShadow: "0 0 20px rgba(0,200,150,0.25)", alignSelf: "flex-start" }}>
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
