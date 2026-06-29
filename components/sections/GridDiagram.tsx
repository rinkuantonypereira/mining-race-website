"use client";
import Image from "next/image";
import { liquidGlassStyle, LiquidGlassHighlight } from "@/components/ui/LiquidGlass";

const DEMAND = [
  { name: "Mining DEVICES", icon: "/images/mining-device.png" },
  { name: "Mining CARDS",   icon: "/images/mining-card.png" },
  { name: "Mining CORES",   icon: "/images/mining-core.png" },
];

const SUPPLY = [
  { name: "Power NODE", icon: "/images/power-node.png" },
  { name: "Micro NODE", icon: "/images/micro-node.png" },
];

export function GridDiagram() {
  return (
    <section style={{ padding: "3rem 0 5rem", background: "transparent" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2.5rem" }}>
        <div style={{
          ...liquidGlassStyle,
          padding: "3rem 2.5rem",
          position: "relative",
          overflow: "hidden",
        }}>
          <LiquidGlassHighlight />
          <div style={{
            position: "absolute", top: 0, left: "10%", right: "10%", height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(0,200,150,0.3), transparent)",
          }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "2rem", alignItems: "center" }}>

            {/* Demand */}
            <div>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "0.75rem" }}>Demand Side</p>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "1.25rem" }}>Mining Solutions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {DEMAND.map(item => (
                  <div key={item.name} style={{
                    display: "flex", alignItems: "center", gap: "0.75rem",
                    padding: "0.625rem 1rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "0.625rem",
                    backdropFilter: "blur(8px)",
                  }}>
                    <Image src={item.icon} alt={item.name} width={40} height={40} unoptimized style={{ objectFit: "contain" }} />
                    <span style={{ fontSize: "0.875rem", color: "#94A3B8", fontWeight: 500 }}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center — arrows + GRID circle */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
              {/* Arrows pointing right */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>

              <div style={{
                width: "10rem", height: "10rem", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                textAlign: "center",
                border: "2px solid rgba(0,200,150,0.5)",
                background: "radial-gradient(circle, rgba(0,200,150,0.08) 0%, rgba(0,200,150,0.02) 70%)",
                boxShadow: "0 0 50px rgba(0,200,150,0.12), 0 0 100px rgba(0,200,150,0.05), inset 0 0 30px rgba(0,200,150,0.05)",
                position: "relative",
                animation: "breathe 3s ease-in-out infinite",
              }}>
                <style>{`@keyframes breathe { 0%,100% { box-shadow: 0 0 30px rgba(0,200,150,0.1), 0 0 60px rgba(0,200,150,0.05), inset 0 0 20px rgba(0,200,150,0.04); transform: scale(1); } 50% { box-shadow: 0 0 50px rgba(0,200,150,0.2), 0 0 100px rgba(0,200,150,0.1), inset 0 0 35px rgba(0,200,150,0.08); transform: scale(1.04); } }`}</style>
                {/* Outer ring */}
                <div style={{
                  position: "absolute", inset: "-6px", borderRadius: "50%",
                  border: "1px solid rgba(0,200,150,0.15)",
                }} />
                <div>
                  <p style={{ fontSize: "0.65rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#00C896", marginBottom: "0.125rem" }}>Mining RACE</p>
                  <p style={{ fontSize: "1.25rem", fontWeight: 900, color: "#F0F4F8" }}>GRID</p>
                </div>
              </div>

              {/* Arrows pointing left */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
            </div>

            {/* Supply */}
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#00C896", marginBottom: "0.75rem" }}>Supply Side</p>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#F0F4F8", marginBottom: "1.25rem" }}>Power NODES</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {SUPPLY.map(item => (
                  <div key={item.name} style={{
                    display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.75rem",
                    padding: "0.625rem 1rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "0.625rem",
                    backdropFilter: "blur(8px)",
                  }}>
                    <span style={{ fontSize: "0.875rem", color: "#94A3B8", fontWeight: 500 }}>{item.name}</span>
                    <Image src={item.icon} alt={item.name} width={40} height={40} unoptimized style={{ objectFit: "contain" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
