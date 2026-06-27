import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    category: "Full Power",
    name: "Mining DEVICES",
    description: "Tap into Full Power with high-performance hardware delivering 200+ TH/s for maximum mining output. Hosting is charged separately for flexible, large-scale operations.",
    image: "/images/mining-device.png",
    href: "/products/mining-devices",
    accent: "text-mr-gray",
  },
  {
    category: "Fixed Power",
    name: "Mining CARDS",
    description: "Access Fixed Power with 100 TH/s per Mining Card, active for 90 days, stackable and auto-renewable for uninterrupted mining. Ideal for those seeking simplicity without hardware management.",
    image: "/images/mining-card.png",
    href: "/products/mining-cards",
    accent: "text-mr-gray",
  },
  {
    category: "Racing Power",
    name: "Mining CORES",
    description: "Experience Racing Power with 1 TH/s units removable yearly and designed for unlimited dynamic bonus rewards. Each Core competes in Sprint and Block Races for added earning potential.",
    image: "/images/mining-core.png",
    href: "/products/mining-cores",
    accent: "text-brand-teal",
  },
];

export function MiningProducts() {
  return (
    <section className="section" style={{ background: "#08080A" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-3">
            Mining Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Direct Mining Products
          </h2>
        </div>

        {/* Product cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="group rounded-2xl border transition-all duration-300"
              style={{
                background: "#141418",
                borderColor: "rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,200,150,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              {/* Product image */}
              <div className="relative h-48 flex items-center justify-center p-6 overflow-hidden rounded-t-2xl"
                style={{ background: "rgba(0,0,0,0.3)" }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={180}
                  className="object-contain max-h-40 w-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-2">
                  {product.category}
                </p>
                <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
                <p className="text-mr-gray text-sm leading-relaxed mb-5">
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-teal hover:gap-3 transition-all"
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
