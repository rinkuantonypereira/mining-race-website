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
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-6">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <span className="text-lg font-bold text-mr-white tracking-tight">
                mining<span className="text-brand-teal">RACE</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden xl:flex items-center gap-1 flex-1">

              {NAV_BEFORE_PRODUCTS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-mr-gray hover:text-mr-white transition-colors rounded-lg"
                >
                  {link.label}
                </Link>
              ))}

              {/* Products dropdown */}
              <div className="relative" onMouseLeave={() => setProductsOpen(false)}>
                <button
                  onMouseEnter={() => setProductsOpen(true)}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-mr-gray hover:text-mr-white transition-colors rounded-lg"
                >
                  Mining Solutions <ChevronDown size={14} className={cn("transition-transform", productsOpen && "rotate-180")} />
                </button>
                {productsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-mr-card border border-mr-border rounded-xl p-2 shadow-xl">
                    {PRODUCTS_NAV.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-mr-gray hover:text-mr-white hover:bg-mr-cardHover rounded-lg transition-colors"
                        onClick={() => setProductsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Power NODES standalone link */}
              <Link href="/products/power-nodes" className="px-3 py-2 text-sm text-mr-gray hover:text-mr-white transition-colors rounded-lg">
                Power NODES
              </Link>

              {NAV_AFTER_NODES.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-mr-gray hover:text-mr-white transition-colors rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div className="hidden xl:flex items-center gap-2 ml-auto">
              <Link href="/calculator" className="flex items-center gap-1.5 px-4 py-1.5 text-sm text-brand-teal border border-brand-teal rounded-full hover:bg-brand-tealDim transition-colors">
                <Calculator size={15} /> Calculator
              </Link>
              <Link href="#" className="flex items-center gap-1.5 px-4 py-1.5 text-sm text-brand-teal border border-brand-teal rounded-full hover:bg-brand-tealDim transition-colors">
                <LayoutDashboard size={15} /> Dashboard
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="ml-1 px-5 py-1.5 text-sm font-medium text-mr-black bg-brand-teal rounded-full hover:opacity-90 transition-opacity"
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
