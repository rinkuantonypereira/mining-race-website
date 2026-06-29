"use client";
import { type CSSProperties } from "react";

export const liquidGlassStyle: CSSProperties = {
  background: "linear-gradient(180deg, rgba(18,24,36,0.75) 0%, rgba(10,14,22,0.88) 100%)",
  backdropFilter: "blur(12px) saturate(1.2)",
  WebkitBackdropFilter: "blur(12px) saturate(1.2)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "1rem",
  position: "relative",
  overflow: "hidden",
};

export const liquidGlassHoverBorder = "rgba(255,255,255,0.22)";
export const liquidGlassDefaultBorder = "rgba(255,255,255,0.1)";

export function LiquidGlassHighlight() {
  return (
    <>
      {/* Top specular — bright thick shine like light hitting glass edge */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: "linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.35) 20%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.35) 80%, rgba(255,255,255,0.05) 100%)",
        zIndex: 2,
      }} />
      {/* Top glow — soft light below the specular */}
      <div style={{
        position: "absolute", top: 0, left: "5%", right: "5%", height: "60px",
        background: "radial-gradient(ellipse at top, rgba(255,255,255,0.05) 0%, transparent 100%)",
        zIndex: 1, pointerEvents: "none",
      }} />
      {/* Left edge shine */}
      <div style={{
        position: "absolute", top: 0, left: 0, bottom: 0, width: "1px",
        background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.02) 100%)",
        zIndex: 2,
      }} />
      {/* Right edge shine */}
      <div style={{
        position: "absolute", top: 0, right: 0, bottom: 0, width: "1px",
        background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.02) 100%)",
        zIndex: 2,
      }} />
      {/* Bottom edge — very subtle */}
      <div style={{
        position: "absolute", bottom: 0, left: "10%", right: "10%", height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        zIndex: 2,
      }} />
    </>
  );
}
