"use client";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { MiningProducts } from "@/components/sections/MiningProducts";
import { PowerNodes } from "@/components/sections/PowerNodes";
import { GridDiagram } from "@/components/sections/GridDiagram";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { DownloadCTA } from "@/components/sections/DownloadCTA";
import { DownloadModal } from "@/components/layout/DownloadModal";
import { FloatingParticles } from "@/components/sections/Particles";
import { WorldMapCanvas } from "@/components/sections/WorldMap";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Navbar />
      <main style={{ position: "relative", background: "#06060A" }}>
        {/* Floating teal particles — visible through liquid glass cards */}
        <FloatingParticles />

        {/* TEAL NEBULA — subtle cloudy texture, centered, professional */}
        <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none", opacity: 0.4 }} preserveAspectRatio="none">
          <defs>
            <filter id="nebula" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.004 0.003" numOctaves="5" seed="8" result="noise" />
              <feColorMatrix type="matrix" in="noise" result="tealNoise" values="0 0 0 0 0  0 0.5 0 0 0.06  0 0 0.4 0 0.04  0 0 0 0.6 0" />
              <feGaussianBlur in="tealNoise" stdDeviation="50" result="blurred" />
              <feComponentTransfer in="blurred" result="final">
                <feFuncA type="linear" slope="1.5" intercept="-0.35" />
              </feComponentTransfer>
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#nebula)" />
        </svg>
        {/* Soft edges fade to black */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40vh", zIndex: 0, pointerEvents: "none", background: "linear-gradient(to top, #06060A 50%, transparent)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "20%", zIndex: 0, pointerEvents: "none", background: "linear-gradient(to right, #06060A, transparent)" }} />
        <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "10%", zIndex: 0, pointerEvents: "none", background: "linear-gradient(to left, #06060A, transparent)" }} />
        {/* World map — zIndex 0, below mascot and cards */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100vh", zIndex: 0, pointerEvents: "none" }}>
          <WorldMapCanvas />
        </div>

        {/* Mascot — zIndex 1 (above world map, below card sections at zIndex 2) */}
        <div style={{
          position: "absolute", right: 0, top: 0,
          width: "45%", height: "250vh",
          zIndex: 1, pointerEvents: "none",
          display: "flex", justifyContent: "flex-end", alignItems: "flex-start",
          paddingTop: "8vh",
        }}>
          <img
            src="/images/mascot.png"
            alt="Mining RACE racer mascot"
            style={{
              height: "220vh",
              width: "auto",
              objectFit: "contain",
              objectPosition: "top right",
              marginRight: "-2rem",
              maskImage: "linear-gradient(to bottom, black 60%, transparent 95%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 95%)",
            }}
          />
        </div>
        {/* "Fastest" text — left of mascot for readability */}
        <div style={{ position: "absolute", right: "42%", top: "82vh", zIndex: 3, pointerEvents: "none" }}>
          <p style={{ color: "#00C896", fontSize: "0.9rem", fontWeight: 500, lineHeight: 1.8, textAlign: "right", opacity: 0.6, textShadow: "0 0 30px rgba(0,200,150,0.3)" }}>
            The Fastest<br />Driven Bitcoin<br />Movement
          </p>
        </div>

        <div style={{ position: "relative", zIndex: 2 }}>
          <Hero onDownload={() => setModalOpen(true)} />
          <StatsBar />
          <MiningProducts />
          <PowerNodes />
          <GridDiagram />
          <AppShowcase onDownload={() => setModalOpen(true)} />
          <DownloadCTA onDownload={() => setModalOpen(true)} />
        </div>
      </main>
      <Footer />
    </>
  );
}
