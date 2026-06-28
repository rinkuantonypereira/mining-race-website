"use client";
import { useEffect, useRef } from "react";
import { WORLD_MAP_PATH } from "@/lib/world-path";

const HUBS = [
  { x: 294, y: 137 },  // New York
  { x: 172, y: 156 },  // Los Angeles
  { x: 500, y: 107 },  // London
  { x: 524, y: 111 },  // Frankfurt
  { x: 654, y: 180 },  // Dubai
  { x: 823, y: 139 },  // Beijing
  { x: 888, y: 151 },  // Tokyo
  { x: 788, y: 246 },  // Singapore
  { x: 920, y: 344 },  // Sydney
  { x: 509, y: 232 },  // Lagos
  { x: 371, y: 315 },  // São Paulo
  { x: 703, y: 197 },  // Mumbai
  { x: 604, y: 95 },   // Moscow
];

const CONNECTIONS: [number, number][] = [
  [0, 2], [0, 1], [2, 3], [3, 12], [2, 9], [3, 4], [4, 11],
  [11, 7], [7, 5], [5, 6], [7, 8], [0, 10], [4, 5], [12, 5], [9, 10],
];

export function WorldMapCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let cw = 0, ch = 0;
    const resize = () => {
      cw = canvas.offsetWidth;
      ch = canvas.offsetHeight;
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let raf: number;
    let t = 0;

    const draw = () => {
      t += 0.006;
      ctx.clearRect(0, 0, cw, ch);
      const sx = cw / 1000;
      const sy = ch / 500;

      // Connection arcs
      for (const [ai, bi] of CONNECTIONS) {
        const a = HUBS[ai], b = HUBS[bi];
        const ax = a.x * sx, ay = a.y * sy, bx = b.x * sx, by = b.y * sy;
        const dist = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2);
        const cpx = (ax + bx) / 2, cpy = (ay + by) / 2 - dist * 0.18;

        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.quadraticCurveTo(cpx, cpy, bx, by);
        ctx.strokeStyle = "rgba(0,200,150,0.22)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Second faint glow pass for thickness
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.quadraticCurveTo(cpx, cpy, bx, by);
        ctx.strokeStyle = "rgba(0,200,150,0.06)";
        ctx.lineWidth = 3;
        ctx.stroke();

        // Traveling pulse
        const pt = ((Math.sin(t * 1.5 + ai * 0.7) + 1) / 2);
        const px = (1 - pt) ** 2 * ax + 2 * (1 - pt) * pt * cpx + pt ** 2 * bx;
        const py = (1 - pt) ** 2 * ay + 2 * (1 - pt) * pt * cpy + pt ** 2 * by;
        const pg = ctx.createRadialGradient(px, py, 0, px, py, 3);
        pg.addColorStop(0, "rgba(0,200,150,0.6)");
        pg.addColorStop(1, "rgba(0,200,150,0)");
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = pg;
        ctx.fill();
      }

      // Hub bullseyes
      for (let i = 0; i < HUBS.length; i++) {
        const hub = HUBS[i];
        const hx = hub.x * sx, hy = hub.y * sy;
        const pulse = 1 + Math.sin(t * 2 + i * 0.9) * 0.3;

        const g1 = ctx.createRadialGradient(hx, hy, 0, hx, hy, 22 * pulse);
        g1.addColorStop(0, "rgba(0,200,150,0.18)");
        g1.addColorStop(0.5, "rgba(0,200,150,0.04)");
        g1.addColorStop(1, "rgba(0,200,150,0)");
        ctx.beginPath();
        ctx.arc(hx, hy, 22 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = g1;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(hx, hy, 11 * pulse, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0,200,150,0.25)";
        ctx.lineWidth = 0.7;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(hx, hy, 5.5 * pulse, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0,200,150,0.45)";
        ctx.lineWidth = 0.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(hx, hy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,220,170,0.9)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(hx, hy, 1, 0, Math.PI * 2);
        ctx.fillStyle = "#FFF";
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      {/* SVG world map — real geographic outlines with dot pattern fill + glow stroke */}
      <svg
        viewBox="0 0 1000 500"
        style={{ position: "absolute", left: 0, right: 0, top: "5%", width: "100%", height: "95%" }}
        preserveAspectRatio="xMidYMin meet"
        aria-hidden="true"
      >
        <defs>
          <pattern id="mapDots" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
            <circle cx="2.5" cy="2.5" r="0.8" fill="#00C896" opacity="0.6" />
          </pattern>
          <filter id="mapGlow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Clip bottom to hide Antarctica */}
          <clipPath id="mapClip">
            <rect x="0" y="0" width="1000" height="420" />
          </clipPath>
        </defs>
        <g clipPath="url(#mapClip)">
          {/* Glow outline layer */}
          <path
            d={WORLD_MAP_PATH}
            fill="none"
            stroke="rgba(0,200,150,0.15)"
            strokeWidth="0.8"
            filter="url(#mapGlow)"
          />
          {/* Dot-pattern fill layer */}
          <path
            d={WORLD_MAP_PATH}
            fill="url(#mapDots)"
            stroke="rgba(0,200,150,0.25)"
            strokeWidth="0.3"
          />
        </g>
      </svg>

      {/* Canvas for animated hubs and connections */}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        aria-hidden="true"
      />
    </div>
  );
}
