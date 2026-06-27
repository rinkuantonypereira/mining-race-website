"use client";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DownloadModal } from "@/components/layout/DownloadModal";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Navbar />
      <main style={{ background: "#06060A", minHeight: "100vh" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
