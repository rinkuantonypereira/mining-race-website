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

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Navbar />
      <main style={{ position: "relative", background: "#06060A" }}>
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
        <div style={{ position: "relative", zIndex: 1 }}>
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
