import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    category: "Full Power",
    name: "Mining DEVICES",
    description: "Tap into Full Power with high-performance hardware delivering 200+ TH/s for maximum mining output.\n\nHosting is charged separately for flexible, large-scale operations.",
    image: "/images/mining-device.png",
    href: "/products/mining-devices",
  },
  {
    category: "Fixed Power",
    name: "Mining CARDS",
    description: "Access Fixed Power with 100 TH/s per Mining Card, active for 90 days, stackable and auto-renewable for uninterrupted mining.\n\nIdeal for those seeking simplicity without hardware management.",
    image: "/images/mining-card.png",
    href: "/products/mining-cards",
  },
  {
    category: "Racing Power",
    name: "Mining CORES",
    description: "Experience Racing Power with 1 TH/s units removable yearly and designed for unlimited dynamic bonus rewards.\n\nEach Core competes in Sprint and Block Races for added earning potential.",
    image: "/images/mining-core.png",
    href: "/products/mining-cores",
  },
];

export function MiningProducts() {
  return (
    <section style={{ padding: "4rem 0 5rem", background: "transparent" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#00C896", marginBottom: "0.75rem" }}>
            Mining Solutions
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem" }}>
            <div style={{
              flex: 1, maxWidth: "220px", height: "1px", position: "relative",
              background: "linear-gradient(to right, transparent, #00C896)",
              boxShadow: "0 0 12px rgba(0,200,150,0.4)",
            }} />
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#F0F4F8", whiteSpace: "nowrap" }}>
              Direct Mining Products
            </h2>
            <div style={{
              flex: 1, maxWidth: "220px", height: "1px", position: "relative",
              background: "linear-gradient(to left, transparent, #00C896)",
              boxShadow: "0 0 12px rgba(0,200,150,0.4)",
            }} />
          </div>
        </div>

        {/* Product cards — glassmorphic */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }}>
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              style={{
                background: "rgba(14,20,30,0.3)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "1rem",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.3s, box-shadow 0.3s",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(255,255,255,0.04)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(255,255,255,0.06)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(255,255,255,0.04)";
              }}
            >
              <div style={{ display: "flex", alignItems: "stretch" }}>

                {/* Image column */}
                <div style={{
                  width: "38%",
                  flexShrink: 0,
                  background: "rgba(0,0,0,0.35)",
                  borderRight: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1.5rem 1rem",
                  minHeight: "200px",
                  position: "relative",
                }}>
                  {/* Subtle teal glow behind product */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "radial-gradient(ellipse at center, rgba(0,200,150,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }} />
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={160}
                    height={160}
                    unoptimized
                    style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "150px", position: "relative", zIndex: 1 }}
                  />
                </div>

                {/* Content column */}
                <div style={{ flex: 1, padding: "1.5rem 1.25rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <p style={{ fontSize: "0.65rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#00C896", marginBottom: "0.375rem", fontStyle: "italic" }}>
                      {product.category}
                    </p>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "0.75rem", lineHeight: 1.3 }}>
                      {product.name}
                    </h3>
                    {product.description.split("\n\n").map((para, i) => (
                      <p key={i} style={{ fontSize: "0.78rem", color: "#6B7A8D", lineHeight: 1.65, marginBottom: "0.5rem" }}>
                        {para}
                      </p>
                    ))}
                  </div>
                  <Link
                    href={product.href}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "0.4rem",
                      fontSize: "0.82rem", fontWeight: 600, color: "#00C896",
                      textDecoration: "none", marginTop: "0.75rem",
                    }}
                  >
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
