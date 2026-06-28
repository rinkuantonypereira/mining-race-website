"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Calculator, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DownloadModal } from "@/components/layout/DownloadModal";
import { cn } from "@/lib/utils";

const PRODUCTS_NAV = [
  { label: "Licenses", href: "/products#licenses" },
  { label: "Mining CORES", href: "/products/mining-cores" },
  { label: "Mining CARDS", href: "/products/mining-cards" },
  { label: "Mining DEVICES", href: "/products/mining-devices" },
  { label: "Power NODES", href: "/products/power-nodes" },
];

const NAV_BEFORE_PRODUCTS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Inside Mining RACE", href: "/inside-mining-race" },
];

const NAV_AFTER_NODES = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Events & Media", href: "/events" },
  { label: "Support", href: "/support" },
];

export function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [modalOpen, setModalOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <header className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-mr-black/90 backdrop-blur-md border-b border-mr-border"
          : "bg-transparent"
      )}>
        <nav style={{ maxWidth: "1500px", margin: "0 auto", padding: "0 2rem", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "64px", gap: "1.5rem" }}>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <span className="text-lg font-bold text-mr-white tracking-tight">
                mining<span className="text-brand-teal">RACE</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden xl:flex items-center gap-0 flex-1">

              {NAV_BEFORE_PRODUCTS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ padding: "0.375rem 0.875rem", fontSize: "0.8rem", color: "#94A3B8", textDecoration: "none", whiteSpace: "nowrap", borderRight: "1px solid rgba(255,255,255,0.06)", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#F0F4F8")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#94A3B8")}
                >
                  {link.label}
                </Link>
              ))}

              {/* Products dropdown */}
              <div className="relative" onMouseLeave={() => setProductsOpen(false)}>
                <button
                  onMouseEnter={() => setProductsOpen(true)}
                  style={{ display: "flex", alignItems: "center", gap: "0.25rem", padding: "0.375rem 0.875rem", fontSize: "0.8rem", color: "#94A3B8", background: "none", border: "none", borderRight: "1px solid rgba(255,255,255,0.06)", cursor: "pointer", whiteSpace: "nowrap", transition: "color 0.2s" }}
                  onMouseOver={e => (e.currentTarget.style.color = "#F0F4F8")}
                  onMouseOut={e => (e.currentTarget.style.color = "#94A3B8")}
                >
                  Mining Solutions <ChevronDown size={13} className={cn("transition-transform", productsOpen && "rotate-180")} />
                </button>
                {productsOpen && (
                  <div style={{
                    position: "absolute", top: "100%", left: 0, marginTop: "0.5rem", width: "13rem",
                    background: "rgba(14,20,30,0.9)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.75rem", padding: "0.5rem",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
                  }}>
                    {PRODUCTS_NAV.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        style={{ display: "block", padding: "0.5rem 0.875rem", fontSize: "0.82rem", color: "#94A3B8", textDecoration: "none", borderRadius: "0.5rem", transition: "all 0.15s" }}
                        onMouseEnter={e => { e.currentTarget.style.color = "#F0F4F8"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                        onMouseLeave={e => { e.currentTarget.style.color = "#94A3B8"; e.currentTarget.style.background = "transparent"; }}
                        onClick={() => setProductsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Power NODES standalone link */}
              <Link
                href="/products/power-nodes"
                style={{ padding: "0.375rem 0.875rem", fontSize: "0.8rem", color: "#94A3B8", textDecoration: "none", whiteSpace: "nowrap", borderRight: "1px solid rgba(255,255,255,0.06)", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#F0F4F8")}
                onMouseLeave={e => (e.currentTarget.style.color = "#94A3B8")}
              >
                Power NODES
              </Link>

              {NAV_AFTER_NODES.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ padding: "0.375rem 0.875rem", fontSize: "0.8rem", color: "#94A3B8", textDecoration: "none", whiteSpace: "nowrap", borderRight: i < NAV_AFTER_NODES.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#F0F4F8")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#94A3B8")}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div style={{ position: "absolute", right: "2rem", top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", gap: "0.625rem" }} className="hidden xl:flex">
              <Link
                href="/calculator"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", padding: "0.4rem 1rem", fontSize: "0.78rem", fontWeight: 500, color: "#00C896", border: "1px solid #00C896", borderRadius: "0.375rem", textDecoration: "none", whiteSpace: "nowrap", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,200,150,0.08)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <Calculator size={14} /> Calculator
              </Link>
              <Link
                href="#"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", padding: "0.4rem 1rem", fontSize: "0.78rem", fontWeight: 500, color: "#00C896", border: "1px solid #00C896", borderRadius: "0.375rem", textDecoration: "none", whiteSpace: "nowrap", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,200,150,0.08)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <LayoutDashboard size={14} /> Dashboard
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                style={{ padding: "0.4rem 1.25rem", fontSize: "0.78rem", fontWeight: 600, color: "#06060A", background: "#00C896", border: "none", borderRadius: "0.375rem", cursor: "pointer", whiteSpace: "nowrap", transition: "opacity 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Login
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="xl:hidden ml-auto text-mr-gray hover:text-mr-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="xl:hidden bg-mr-dark border-t border-mr-border py-4 px-2">
              {NAV_BEFORE_PRODUCTS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-sm text-mr-gray hover:text-mr-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Products accordion */}
              <button
                className="flex items-center justify-between w-full px-3 py-2 text-sm text-mr-gray hover:text-mr-white"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                Mining Solutions <ChevronDown size={14} className={cn("transition-transform", productsOpen && "rotate-180")} />
              </button>
              {productsOpen && (
                <div className="pl-4 flex flex-col gap-1 mt-1">
                  {PRODUCTS_NAV.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-3 py-2 text-sm text-mr-muted hover:text-mr-white transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/products/power-nodes"
                className="block px-3 py-2 text-sm text-mr-gray hover:text-mr-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Power NODES
              </Link>

              {NAV_AFTER_NODES.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-sm text-mr-gray hover:text-mr-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex gap-2 mt-4 px-3">
                <button
                  onClick={() => { setModalOpen(true); setMobileOpen(false); }}
                  className="flex-1 py-2.5 text-sm font-medium text-mr-black bg-brand-teal rounded-xl"
                >
                  Download App
                </button>
                <button
                  onClick={() => { setModalOpen(true); setMobileOpen(false); }}
                  className="flex-1 py-2.5 text-sm font-medium text-mr-white border border-mr-border rounded-xl hover:border-brand-teal"
                >
                  Login
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
