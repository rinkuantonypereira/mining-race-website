"use client";
import Image from "next/image";
import Link from "next/link";
import { liquidGlassStyle, LiquidGlassHighlight } from "@/components/ui/LiquidGlass";

const NODES = [
  { name: "Power NODE",   spec: "1kW",   sub: "Computing Power", image: "/images/power-node.png",  href: "/products/power-nodes#1kw" },
  { name: "Micro NODE",   spec: "0.1kW", sub: "Computing Power", image: "/images/micro-node.png",  href: "/products/power-nodes#micro" },
];
const INDICATORS = ["STATUS", "GRID", "NETWORK"];

export function PowerNodes() {
  return (
    <section style={{ padding: "3rem 0 5rem", background: "transparent" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
        <div style={{
          ...liquidGlassStyle,
          position: "relative",
        }}>
          <LiquidGlassHighlight />
          {/* Teal top glow line */}
          <div style={{
            position: "absolute", top: 0, left: "5%", right: "5%", height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(0,200,150,0.4), transparent)",
          }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>

            {/* Left */}
            <div style={{ padding: "2.5rem 3rem", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "0.875rem" }}>
                Grid Infrastructure
              </p>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#F0F4F8", marginBottom: "1.25rem" }}>
                Power NODES
              </h2>
              <p style={{ fontSize: "0.88rem", color: "#94A3B8", lineHeight: 1.75 }}>
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
                  gap: "0.875rem",
                  borderRight: i === 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}>
                  <div style={{
                    position: "relative",
                    width: "100px",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "radial-gradient(circle, rgba(0,200,150,0.08) 0%, transparent 70%)",
                      borderRadius: "50%",
                    }} />
                    <Image src={node.image} alt={node.name} width={90} height={90} unoptimized style={{ objectFit: "contain", position: "relative", zIndex: 1 }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#F0F4F8", lineHeight: 1.2 }}>
                      {node.name}
                    </h3>
                    <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#F0F4F8" }}>{node.spec}</p>
                    <p style={{ fontSize: "0.72rem", color: "#475569", marginTop: "0.25rem", marginBottom: "0.875rem" }}>{node.sub}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem", alignItems: "flex-start", margin: "0 auto", width: "fit-content" }}>
                      {INDICATORS.map(ind => (
                        <div key={ind} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <span style={{ fontSize: "0.68rem", color: "#475569", width: "4.5rem", textAlign: "right" }}>{ind}</span>
                          <div style={{
                            width: "8px", height: "8px", borderRadius: "50%",
                            background: "#4ade80",
                            boxShadow: "0 0 6px rgba(74,222,128,0.8), 0 0 12px rgba(74,222,128,0.4)",
                          }} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link href={node.href} style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    fontSize: "0.82rem", fontWeight: 600, color: "#00C896", textDecoration: "none",
                  }}>
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
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
