import Image from "next/image";
import Link from "next/link";

const NODES = [
  { name: "Power NODE 1kW",   sub: "Computing Power", image: "/images/power-node.png",  href: "/products/power-nodes#1kw" },
  { name: "Micro NODE 0.1kW", sub: "Computing Power", image: "/images/micro-node.png",  href: "/products/power-nodes#micro" },
];
const INDICATORS = ["STATUS", "GRID", "NETWORK"];

export function PowerNodes() {
  return (
    <section style={{ padding: "5rem 0", background: "#0F0F13" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ border: "1px solid rgba(0,200,150,0.15)", borderRadius: "1rem", overflow: "hidden", background: "#141418" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>

            {/* Left */}
            <div style={{ padding: "3rem", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "1rem" }}>
                Grid Infrastructure
              </p>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#F0F4F8", marginBottom: "1.25rem" }}>
                Power NODES
              </h2>
              <p style={{ fontSize: "0.95rem", color: "#94A3B8", lineHeight: 1.75 }}>
                Power NODES are not direct mining products. They provide computing
                power to the Mining RACE Grid, allowing the network to run at full
                speed. By deploying Power NODES, you contribute to the grid capacity
                that powers all Mining Solutions.
              </p>
            </div>

            {/* Right — two nodes */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {NODES.map((node, i) => (
                <div key={node.name} style={{
                  padding: "2rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "1rem",
                  borderRight: i === 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}>
                  <Image src={node.image} alt={node.name} width={90} height={90} style={{ objectFit: "contain" }} />
                  <div>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "0.25rem" }}>{node.name}</h3>
                    <p style={{ fontSize: "0.75rem", color: "#475569", marginBottom: "1rem" }}>{node.sub}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-start" }}>
                      {INDICATORS.map(ind => (
                        <div key={ind} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <span style={{ fontSize: "0.7rem", color: "#475569", width: "4rem" }}>{ind}</span>
                          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px rgba(74,222,128,0.8)" }} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link href={node.href} style={{ fontSize: "0.8rem", fontWeight: 500, color: "#00C896", textDecoration: "none" }}>
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
