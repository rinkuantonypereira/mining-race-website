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

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2 + 0.8,
      a: Math.random() * 0.6 + 0.25,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,200,150,${d.a})`;
        ctx.fill();

        for (let j = i + 1; j < dots.length; j++) {
          const o = dots[j];
          const dx = d.x - o.x, dy = d.y - o.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(o.x, o.y);
            ctx.strokeStyle = `rgba(0,200,150,${0.15 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.5;
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
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#08080A" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true" />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #08080A 35%, rgba(8,8,10,0.8) 60%, rgba(8,8,10,0.15) 100%)" }} />

      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem 3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center", minHeight: "calc(100vh - 8rem)" }}>

          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h1 style={{ fontWeight: 900, textTransform: "uppercase", lineHeight: 1, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
              <span style={{ display: "block", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#F0F4F8" }}>Start Mining</span>
              <span style={{ display: "block", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#00C896" }}>In Minutes</span>
            </h1>
            <p style={{ color: "#94A3B8", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "22rem" }}>
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
                  background: "#00C896", color: "#08080A", fontWeight: 700,
                  borderRadius: "0.75rem", padding: "0.9rem 2rem", fontSize: "1rem",
                  border: "none", cursor: "pointer", transition: "opacity 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                ↓ Download App
              </button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#475569", fontSize: "0.875rem" }}>
              <span>Available on</span>
              <span style={{ fontSize: "1.25rem" }}>🍎</span>
              <span style={{ fontSize: "1.25rem" }}>▶</span>
              <span style={{ fontSize: "1.25rem" }}>🖥</span>
            </div>
          </div>

          {/* Right — mascot */}
          <div style={{ position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center", minHeight: "75vh" }}>
            <p style={{ position: "absolute", bottom: "3rem", right: 0, color: "#475569", fontSize: "0.875rem", lineHeight: 1.6, textAlign: "right", zIndex: 10 }}>
              The Fastest<br />Driven Bitcoin<br />Movement
            </p>
            <Image
              src="/images/mascot.png"
              alt="Mining RACE racer in black suit holding pickaxe"
              width={460}
              height={650}
              style={{ objectFit: "contain", maxHeight: "80vh", width: "auto" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
