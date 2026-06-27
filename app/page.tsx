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
      <main>
        <Hero onDownload={() => setModalOpen(true)} />
        <StatsBar />
        <MiningProducts />
        <PowerNodes />
        <GridDiagram />
        <AppShowcase />
        <DownloadCTA onDownload={() => setModalOpen(true)} />
      </main>
      <Footer />
    </>
  );
}
