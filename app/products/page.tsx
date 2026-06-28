import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Four product categories. One connected platform. Start at any level and build your mining setup as your goals grow.",
};

const SPOT_TIERS = [
  { tier: "Starter", cards: "Up to 1", devices: "Up to 1" },
  { tier: "Premium", cards: "Up to 9", devices: "Up to 9" },
  { tier: "Platinum", cards: "Up to 30", devices: "Up to 30" },
  { tier: "Prime", cards: "Up to 50", devices: "Up to 50" },
  { tier: "Diamond", cards: "Up to 150", devices: "Up to 150" },
];

const SPOT_INCLUDES = [
  { icon: "⛏", text: "1 free Mining CORE (immediately active on sign-up)" },
  { icon: "🔐", text: "Multi-chain, non-custodial wallet" },
  { icon: "📚", text: "Full access to the Education Center" },
  { icon: "🎟", text: "Invitations to Mining RACE community events" },
  { icon: "🎧", text: "Dedicated customer support" },
  { icon: "📊", text: "Real-time performance tracking via your mining dashboard" },
];

const PRODUCTS = [
  {
    category: "Racing Power",
    name: "Mining CORES",
    tagline: "1 TH/s yearly renewable Racing Power units",
    description:
      "Experience Racing Power with 1 TH/s units designed for unlimited rewards. Each CORE competes in Sprint and Block Races for added earning potential.",
    image: "/images/mining-core.png",
    href: "/products/mining-cores",
    color: "#00C896",
  },
  {
    category: "Fixed Power",
    name: "Mining CARDS",
    tagline: "100 TH/s per CARD, ~120 days active",
    description:
      "Access Fixed Power with 100 TH/s Mining CARDS, active for ~120 days, stackable and auto-renewable for uninterrupted mining.",
    image: "/images/mining-card.png",
    href: "/products/mining-cards",
    color: "#00C896",
  },
  {
    category: "Full Power",
    name: "Mining DEVICES",
    tagline: "200+ TH/s high-performance hosted hardware",
    description:
      "Tap into Full Power with high-performance DEVICES delivering 200+ TH/s for maximum mining output for a period of 4 years.",
    image: "/images/mining-device.png",
    href: "/products/mining-devices",
    color: "#00C896",
  },
  {
    category: "Grid Infrastructure",
    name: "Power NODES",
    tagline: "Compute capacity on the supply side of the Grid",
    description:
      "A unit of compute capacity deployed within the Mining RACE Grid. Instead of using the Grid's resources, a NODE contributes to them.",
    image: "/images/power-node.png",
    href: "/products/power-nodes",
    color: "#00C896",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "8rem 0 4rem", background: "#06060A", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "80vw", height: "60vh", background: "radial-gradient(ellipse at center, rgba(0,200,150,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#00C896", marginBottom: "1rem" }}>
              Products
            </p>
            <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 800, color: "#F0F4F8", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              Everything Available on Mining RACE
            </h1>
            <p style={{ fontSize: "1.05rem", color: "#94A3B8", lineHeight: 1.75 }}>
              Four product categories. One connected platform. Start at any level and build your mining setup as your goals grow. Your SPOT tier determines how many mining solutions you can hold simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* Race SPOT Subscriptions */}
      <section id="licenses" style={{ padding: "4rem 0", background: "#06060A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#00C896", marginBottom: "0.75rem" }}>
              Race SPOT Subscriptions
            </p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, color: "#F0F4F8", marginBottom: "1rem" }}>
              What Every SPOT Includes
            </h2>
          </div>

          {/* Includes grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "3rem" }}>
            {SPOT_INCLUDES.map((item) => (
              <div
                key={item.text}
                style={{
                  background: "#101016",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "0.875rem",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.875rem",
                }}
              >
                <span style={{ fontSize: "1.25rem", flexShrink: 0, marginTop: "0.125rem" }}>{item.icon}</span>
                <p style={{ fontSize: "0.88rem", color: "#94A3B8", lineHeight: 1.6 }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* SPOT tiers table */}
          <div style={{ background: "#101016", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.875rem", overflow: "hidden" }}>
            <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#F0F4F8" }}>SPOT Tiers & Capacity</h3>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <th style={{ padding: "0.875rem 1.5rem", textAlign: "left", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#475569" }}>SPOT Tier</th>
                  <th style={{ padding: "0.875rem 1.5rem", textAlign: "left", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#475569" }}>Mining CARDS</th>
                  <th style={{ padding: "0.875rem 1.5rem", textAlign: "left", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#475569" }}>Mining DEVICES</th>
                </tr>
              </thead>
              <tbody>
                {SPOT_TIERS.map((row, i) => (
                  <tr key={row.tier} style={{ borderBottom: i < SPOT_TIERS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <td style={{ padding: "0.875rem 1.5rem", fontSize: "0.9rem", fontWeight: 600, color: "#F0F4F8" }}>{row.tier}</td>
                    <td style={{ padding: "0.875rem 1.5rem", fontSize: "0.88rem", color: "#94A3B8" }}>{row.cards} Mining CARDS</td>
                    <td style={{ padding: "0.875rem 1.5rem", fontSize: "0.88rem", color: "#94A3B8" }}>{row.devices} Mining DEVICES</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section style={{ padding: "4rem 0 6rem", background: "#06060A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#00C896", marginBottom: "0.75rem" }}>
              Mining Solutions
            </p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, color: "#F0F4F8" }}>
              Choose Your Mining Power
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}>
            {PRODUCTS.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "#101016",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "0.875rem",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "stretch",
                    transition: "border-color 0.25s",
                    height: "100%",
                  }}
                >
                  <div style={{
                    width: "38%",
                    flexShrink: 0,
                    background: "rgba(0,0,0,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem 1.5rem",
                  }}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={180}
                      height={180}
                      unoptimized
                      style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "160px" }}
                    />
                  </div>
                  <div style={{ flex: 1, padding: "1.75rem 1.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <p style={{ fontSize: "0.65rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#00C896", marginBottom: "0.375rem" }}>
                      {product.category}
                    </p>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "0.375rem", lineHeight: 1.3 }}>
                      {product.name}
                    </h3>
                    <p style={{ fontSize: "0.82rem", color: "#6B7A8D", marginBottom: "0.75rem" }}>
                      {product.tagline}
                    </p>
                    <p style={{ fontSize: "0.82rem", color: "#94A3B8", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                      {product.description}
                    </p>
                    <span style={{ fontSize: "0.82rem", fontWeight: 500, color: "#00C896" }}>
                      Learn more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
