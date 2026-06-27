"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

interface HeroProps { onDownload: () => void; }

// Simplified world map coordinates (lon/lat pairs → normalized 0-1)
const MAP_DOTS: [number, number][] = [];
const RAW: [number, number][] = [
  // North America
  [-130,50],[-125,48],[-120,48],[-115,50],[-110,50],[-105,48],[-100,48],[-95,45],[-90,45],[-85,42],[-80,42],[-75,40],[-70,42],[-65,45],
  [-125,45],[-120,45],[-115,45],[-110,45],[-105,45],[-100,43],[-95,42],[-90,40],[-85,38],[-80,38],[-75,38],
  [-120,40],[-115,38],[-110,38],[-105,40],[-100,38],[-95,35],[-90,35],[-85,35],[-80,35],
  [-115,35],[-110,35],[-105,35],[-100,33],[-95,30],[-90,30],[-85,30],[-80,30],
  [-100,28],[-95,28],[-90,28],[-100,25],[-95,25],[-90,22],[-85,20],
  // Central America
  [-100,20],[-95,18],[-90,15],[-85,12],[-80,10],
  // South America
  [-80,8],[-75,5],[-70,5],[-65,0],[-60,0],[-55,-5],[-50,-5],[-45,-8],[-40,-10],[-35,-8],
  [-75,-5],[-70,-10],[-65,-15],[-60,-15],[-55,-15],[-50,-15],[-45,-15],[-40,-15],
  [-75,-15],[-70,-20],[-65,-25],[-60,-25],[-55,-25],[-50,-22],[-45,-20],
  [-70,-30],[-65,-35],[-60,-35],[-55,-30],
  [-70,-40],[-65,-45],[-70,-50],
  // Europe
  [-10,58],[-5,55],[0,52],[5,52],[10,55],[15,55],[20,55],[25,55],[30,58],[35,58],
  [-5,50],[0,48],[5,48],[10,48],[15,50],[20,50],[25,50],[30,50],
  [0,45],[5,45],[10,45],[15,45],[20,45],[25,45],[30,45],
  [0,42],[5,42],[10,42],[15,42],[20,42],[25,42],[-5,42],[-8,38],
  [10,38],[15,38],[20,38],[25,38],[30,40],[35,42],
  // Africa
  [-15,30],[-10,32],[-5,35],[0,35],[5,35],[10,35],[15,32],[20,30],[25,30],[30,30],[35,30],
  [-15,25],[-10,20],[-5,15],[0,10],[5,8],[10,8],[15,10],[20,10],[25,8],[30,5],[35,8],[40,10],
  [10,5],[15,2],[20,0],[25,-2],[30,-5],[35,-5],[40,-8],
  [15,-10],[20,-12],[25,-15],[30,-18],[35,-20],
  [20,-25],[25,-28],[30,-30],[28,-33],
  // Asia
  [40,55],[45,55],[50,55],[55,55],[60,55],[65,55],[70,55],[80,55],[90,55],[100,55],[110,50],[120,50],[130,50],[140,45],
  [40,50],[50,50],[60,50],[70,50],[80,48],[90,45],[100,45],[110,45],[120,42],[130,42],
  [40,45],[50,42],[60,40],[70,38],[80,35],[90,35],[100,35],[110,35],[120,35],
  [45,35],[50,30],[55,28],[60,25],[65,25],[70,22],[75,20],[80,18],[85,22],[90,22],[95,18],[100,15],[105,15],[110,22],[115,25],[120,30],
  [100,10],[105,5],[110,0],[115,-2],[120,-5],[125,-5],[130,-8],
  // Australia
  [115,-15],[120,-18],[125,-18],[130,-15],[135,-18],[140,-20],[145,-22],[150,-25],[152,-28],[150,-32],[148,-35],[145,-38],
  [120,-25],[125,-28],[130,-28],[135,-30],[140,-32],
  // Japan/Korea
  [128,35],[130,33],[132,35],[135,35],[138,38],[140,40],[142,42],[145,45],
];
for (const [lon, lat] of RAW) {
  const x = (lon + 180) / 360;
  const y = (90 - lat) / 180;
  MAP_DOTS.push([x, y]);
}

export function Hero({ onDownload }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Glowing hub nodes that pulse
    const hubs = [
      { mx: 0.22, my: 0.35 }, // USA East
      { mx: 0.15, my: 0.40 }, // USA West
      { mx: 0.52, my: 0.30 }, // Europe
      { mx: 0.60, my: 0.35 }, // Middle East
      { mx: 0.75, my: 0.32 }, // East Asia
      { mx: 0.80, my: 0.65 }, // Australia
      { mx: 0.40, my: 0.55 }, // Africa
      { mx: 0.25, my: 0.60 }, // South America
    ].map(h => ({ ...h, pulse: Math.random() * Math.PI * 2 }));

    let raf: number;
    let t = 0;

    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, w, h);

      // Draw map dots — visible bright dots with glow
      for (const [mx, my] of MAP_DOTS) {
        const x = mx * w;
        const y = my * h;
        // Glow
        const dGrad = ctx.createRadialGradient(x, y, 0, x, y, 6);
        dGrad.addColorStop(0, "rgba(0,200,150,0.25)");
        dGrad.addColorStop(1, "rgba(0,200,150,0)");
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = dGrad;
        ctx.fill();
        // Core dot
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,200,150,0.5)";
        ctx.fill();
      }

      // Draw connection lines between hubs
      for (let i = 0; i < hubs.length; i++) {
        for (let j = i + 1; j < hubs.length; j++) {
          const a = hubs[i], b = hubs[j];
          const dx = (a.mx - b.mx) * w;
          const dy = (a.my - b.my) * h;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < w * 0.5) {
            const alpha = 0.15 * (1 - dist / (w * 0.5));
            ctx.beginPath();
            ctx.moveTo(a.mx * w, a.my * h);
            // Curved line
            const cpx = ((a.mx + b.mx) / 2) * w;
            const cpy = ((a.my + b.my) / 2) * h - dist * 0.15;
            ctx.quadraticCurveTo(cpx, cpy, b.mx * w, b.my * h);
            ctx.strokeStyle = `rgba(0,200,150,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw glowing hubs
      for (const hub of hubs) {
        const x = hub.mx * w;
        const y = hub.my * h;
        const pulse = 1 + Math.sin(t * 2 + hub.pulse) * 0.4;
        const r = 4 * pulse;

        // Outer glow
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 8);
        grad.addColorStop(0, "rgba(0,200,150,0.35)");
        grad.addColorStop(0.5, "rgba(0,200,150,0.08)");
        grad.addColorStop(1, "rgba(0,200,150,0)");
        ctx.beginPath();
        ctx.arc(x, y, r * 8, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,220,165,0.9)`;
        ctx.fill();

        // Bright center
        ctx.beginPath();
        ctx.arc(x, y, r * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#06060A" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true" />

      {/* Dark gradient overlays for readability */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(6,6,10,0.95) 25%, rgba(6,6,10,0.65) 50%, rgba(6,6,10,0.15) 80%)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(to top, #06060A, transparent)" }} />

      {/* Teal ambient glow behind mascot */}
      <div style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)", width: "45vw", height: "90vh", background: "radial-gradient(ellipse at center, rgba(0,200,150,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />

      {/* Teal top accent line */}
      <div style={{ position: "absolute", top: "64px", left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #00C896, rgba(0,200,150,0.3) 30%, transparent 60%)", zIndex: 20 }} />

      {/* Mascot — absolute positioned flush to extreme right */}
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0,
        zIndex: 8, display: "flex", alignItems: "center", justifyContent: "flex-end",
        width: "50%",
      }}>
        <Image
          src="/images/mascot.png"
          alt="Mining RACE racer mascot"
          width={600}
          height={850}
          style={{
            objectFit: "contain",
            height: "92vh",
            width: "auto",
            marginRight: "-2rem",
            maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 90%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
          priority
        />
        <p style={{ position: "absolute", bottom: "15%", right: "8%", color: "#3D4F63", fontSize: "0.85rem", lineHeight: 1.7, textAlign: "right" }}>
          The Fastest<br />Driven Bitcoin<br />Movement
        </p>
      </div>

      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "5rem 2.5rem 3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center", minHeight: "calc(100vh - 8rem)" }}>

          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h1 style={{ fontWeight: 900, textTransform: "uppercase", lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
              <span style={{ display: "block", fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", color: "#FFFFFF" }}>Start Mining</span>
              <span style={{ display: "block", fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", color: "#00C896" }}>In Minutes</span>
            </h1>
            <p style={{ color: "#8B9AAD", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "24rem" }}>
              No hardware. No technical setup.<br />
              Just powerful mining, made simple.<br />
              Join a global network built for speed,<br />
              transparency, and real rewards.
            </p>
            <div style={{ marginBottom: "1.5rem" }}>
              <button
                onClick={onDownload}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "#00C896", color: "#06060A", fontWeight: 700,
                  borderRadius: "0.625rem", padding: "0.9rem 2.25rem", fontSize: "0.95rem",
                  border: "none", cursor: "pointer",
                  boxShadow: "0 0 20px rgba(0,200,150,0.3), 0 0 60px rgba(0,200,150,0.1)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download App
              </button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", color: "#475569", fontSize: "0.8rem" }}>
              <span>Available on</span>
              {/* Apple */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#94A3B8"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              {/* Play Store */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#94A3B8"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.834 1.64a1 1 0 010 1.726l-2.834 1.64-2.532-2.533 2.532-2.473zM5.864 3.458L16.8 9.79l-2.302 2.302-8.634-8.634z"/></svg>
              {/* Desktop */}
              <svg width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
            </div>
          </div>

          {/* Right — empty spacer for mascot (absolute positioned above) */}
          <div style={{ minHeight: "75vh" }}>
          </div>
        </div>
      </div>
    </section>
  );
}
