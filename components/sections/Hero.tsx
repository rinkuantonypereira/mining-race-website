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

    const dots = Array.from({ length: 75 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2 + 0.8,
      a: Math.random() * 0.5 + 0.2,
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
          const dx = d.x - o.x;
          const dy = d.y - o.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(o.x, o.y);
            ctx.strokeStyle = `rgba(0,200,150,${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-mr-black">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, #08080A 35%, rgba(8,8,10,0.75) 65%, rgba(8,8,10,0.15) 100%)" }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center" style={{ minHeight: "calc(100vh - 64px)" }}>

          {/* Left */}
          <div className="py-20 lg:py-0">
            <h1 className="font-black uppercase leading-none tracking-tight mb-6">
              <span className="block text-white" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
                Start Mining
              </span>
              <span className="block text-brand-teal" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
                In Minutes
              </span>
            </h1>
            <p className="text-mr-gray text-base sm:text-lg leading-relaxed mb-8" style={{ maxWidth: "22rem" }}>
              No hardware. No technical setup.<br />
              Just powerful mining, made simple.<br />
              Join a global network built for speed,<br />
              transparency, and real rewards.
            </p>
            <button
              onClick={onDownload}
              className="inline-flex items-center gap-2 bg-brand-teal text-mr-black font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all mb-6"
              style={{ padding: "0.9rem 2rem", fontSize: "1rem" }}
            >
              ↓ Download App
            </button>
            <div className="flex items-center gap-3 text-mr-muted text-sm">
              <span>Available on</span>
              <span className="text-lg">🍎</span>
              <span className="text-lg">▶</span>
              <span className="text-lg">🖥</span>
            </div>
          </div>

          {/* Right — mascot */}
          <div className="hidden lg:flex items-end justify-center relative" style={{ minHeight: "80vh" }}>
            <p className="absolute bottom-16 right-0 text-mr-muted text-sm leading-relaxed text-right z-10">
              The Fastest<br />Driven Bitcoin<br />Movement
            </p>
            <Image
              src="/images/mascot.png"
              alt="Mining RACE racer in black suit with teal accents holding a pickaxe"
              width={460}
              height={650}
              className="object-contain w-auto"
              style={{ maxHeight: "82vh" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
