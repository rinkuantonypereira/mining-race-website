"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

interface HeroProps { onDownload: () => void; }

export function Hero({ onDownload }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    // Fewer, larger, more dramatic nodes like the reference
    const dots = Array.from({ length: 28 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 3 + 2,
      a: Math.random() * 0.5 + 0.4,
      pulse: Math.random() * Math.PI * 2,
    }));

    let raf: number;
    let t = 0;
    const draw = () => {
      t += 0.012;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;

        // Pulsing glow
        const glow = d.r + Math.sin(t + d.pulse) * 1.5;

        // Outer glow
        const gradient = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, glow * 6);
        gradient.addColorStop(0, `rgba(0,200,150,${d.a * 0.6})`);
        gradient.addColorStop(1, "rgba(0,200,150,0)");
        ctx.beginPath();
        ctx.arc(d.x, d.y, glow * 6, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(d.x, d.y, glow, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,220,165,${d.a})`;
        ctx.fill();

        // Connections
        for (let j = i + 1; j < dots.length; j++) {
          const o = dots[j];
          const dx = d.x - o.x, dy = d.y - o.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(o.x, o.y);
            ctx.strokeStyle = `rgba(0,200,150,${0.18 * (1 - dist / 200)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#06060A" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true" />

      {/* Left dark gradient so text is readable */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(6,6,10,0.97) 30%, rgba(6,6,10,0.7) 55%, rgba(6,6,10,0.05) 100%)" }} />

      {/* Mascot teal glow */}
      <div style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)", width: "45vw", height: "90vh", background: "radial-gradient(ellipse at center, rgba(0,200,150,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "5rem 2.5rem 3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center", minHeight: "calc(100vh - 8rem)" }}>

          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h1 style={{ fontWeight: 900, textTransform: "uppercase", lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
              <span style={{ display: "block", fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", color: "#FFFFFF" }}>Start Mining</span>
              <span style={{ display: "block", fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", color: "#00C896" }}>In Minutes</span>
            </h1>
            <p style={{ color: "#8B9AAD", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "22rem" }}>
              No hardware. No technical setup.<br />
              Just powerful mining, made simple.<br />
              Join a global network built for speed,<br />
              transparency, and real rewards.
            </p>
            <div style={{ marginBottom: "1.5rem" }}>
              <button
                onClick={onDownload}
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#00C896", color: "#06060A", fontWeight: 700, borderRadius: "0.5rem", padding: "0.875rem 2rem", fontSize: "0.95rem", border: "none", cursor: "pointer" }}
              >
                ↓ Download App
              </button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#475569", fontSize: "0.8rem" }}>
              <span>Available on</span>
              <span style={{ fontSize: "1.1rem" }}>🍎</span>
              <span style={{ fontSize: "1.1rem" }}>▶</span>
              <span style={{ fontSize: "1.1rem" }}>🖥</span>
            </div>
          </div>

          {/* Right — mascot */}
          <div style={{ position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center", minHeight: "75vh" }}>
            <p style={{ position: "absolute", bottom: "4rem", right: 0, color: "#3D4F63", fontSize: "0.8rem", lineHeight: 1.7, textAlign: "right", zIndex: 10 }}>
              The Fastest<br />Driven Bitcoin<br />Movement
            </p>
            <Image
              src="/images/mascot.png"
              alt="Mining RACE racer mascot"
              width={480}
              height={680}
              style={{ objectFit: "contain", maxHeight: "82vh", width: "auto" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
