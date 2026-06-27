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
    <section style={{ padding: "5rem 0", background: "#08080A" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "0.75rem" }}>
            Mining Solutions
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#F0F4F8" }}>
            Direct Mining Products
          </h2>
        </div>

        {/* Product cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              style={{
                background: "#141418",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "1rem",
                overflow: "hidden",
                transition: "border-color 0.3s",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(0,200,150,0.3)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
            >
              {/* Image area */}
              <div style={{
                height: "13rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.5rem",
                background: "rgba(0,0,0,0.4)",
                overflow: "hidden",
              }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={220}
                  height={180}
                  style={{ objectFit: "contain", maxHeight: "10rem", width: "auto", transition: "transform 0.4s" }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#00C896", marginBottom: "0.5rem" }}>
                  {product.category}
                </p>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "0.75rem" }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#94A3B8", lineHeight: 1.65, marginBottom: "1.25rem", flex: 1 }}>
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontSize: "0.875rem", fontWeight: 500, color: "#00C896", textDecoration: "none" }}
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
