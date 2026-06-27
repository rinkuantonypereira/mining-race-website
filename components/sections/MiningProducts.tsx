import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    category: "Full Power",
    name: "Mining DEVICES",
    description: "Tap into Full Power with high-performance hardware delivering 200+ TH/s for maximum mining output. Hosting is charged separately for flexible, large-scale operations.",
    image: "/images/mining-device.png",
    href: "/products/mining-devices",
  },
  {
    category: "Fixed Power",
    name: "Mining CARDS",
    description: "Access Fixed Power with 100 TH/s per Mining Card, active for 90 days, stackable and auto-renewable for uninterrupted mining. Ideal for those seeking simplicity without hardware management.",
    image: "/images/mining-card.png",
    href: "/products/mining-cards",
  },
  {
    category: "Racing Power",
    name: "Mining CORES",
    description: "Experience Racing Power with 1 TH/s units removable yearly and designed for unlimited dynamic bonus rewards. Each Core competes in Sprint and Block Races for added earning potential.",
    image: "/images/mining-core.png",
    href: "/products/mining-cores",
  },
];

export function MiningProducts() {
  return (
    <section style={{ padding: "5rem 0", background: "#06060A" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "#00C896", marginBottom: "0.75rem" }}>
            Mining Solutions
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem" }}>
            <div style={{ flex: 1, maxWidth: "200px", height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.15))" }} />
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#F0F4F8", whiteSpace: "nowrap" }}>
              Direct Mining Products
            </h2>
            <div style={{ flex: 1, maxWidth: "200px", height: "1px", background: "linear-gradient(to left, transparent, rgba(255,255,255,0.15))" }} />
          </div>
        </div>

        {/* Product cards — horizontal layout matching reference */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }}>
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              style={{
                background: "#101016",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "0.875rem",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.25s",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(0,200,150,0.3)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
            >
              {/* Product image — horizontal layout, image on left inside card */}
              <div style={{ display: "flex", alignItems: "stretch" }}>

                {/* Image column */}
                <div style={{
                  width: "38%",
                  flexShrink: 0,
                  background: "rgba(0,0,0,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1.25rem 0.875rem",
                  minHeight: "180px",
                }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={160}
                    height={160}
                    style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "140px" }}
                  />
                </div>

                {/* Content column */}
                <div style={{ flex: 1, padding: "1.25rem 1.125rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <p style={{ fontSize: "0.62rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#00C896", marginBottom: "0.375rem" }}>
                      {product.category}
                    </p>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "0.625rem", lineHeight: 1.3 }}>
                      {product.name}
                    </h3>
                    <p style={{ fontSize: "0.78rem", color: "#6B7A8D", lineHeight: 1.65, marginBottom: "1rem" }}>
                      {product.description}
                    </p>
                  </div>
                  <Link
                    href={product.href}
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.8rem", fontWeight: 500, color: "#00C896", textDecoration: "none" }}
                  >
                    Learn more →
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
