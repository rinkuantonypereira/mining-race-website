"use client";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DOWNLOAD_LINKS = [
  {
    label: "iOS App Store",
    href: "https://apps.apple.com/ae/app/id6451437219",
    icon: "🍎",
    sub: "Download on the App Store",
  },
  {
    label: "Google Play",
    href: "https://play.google.com/store/apps/details?id=com.mrace.app.android",
    icon: "▶",
    sub: "Get it on Google Play",
  },
  {
    label: "Web Wallet",
    href: "#",
    icon: "🌐",
    sub: "Access via browser",
  },
];

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === overlayRef.current && onClose()}
      aria-modal="true"
      role="dialog"
      aria-label="Download Mining RACE"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-mr-card border border-mr-border rounded-2xl p-8 w-full max-w-md shadow-2xl animate-fade-up">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-mr-muted hover:text-mr-white transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-2">
            Get started
          </p>
          <h2 className="text-2xl font-semibold text-mr-white mb-2">
            Download Mining RACE
          </h2>
          <p className="text-sm text-mr-gray">
            Choose how you want to access the platform.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          {DOWNLOAD_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-4 p-4 rounded-xl border border-mr-border",
                "hover:border-brand-teal hover:bg-brand-tealDim transition-all duration-200",
                "group"
              )}
            >
              <span className="text-2xl">{link.icon}</span>
              <div>
                <p className="text-sm font-medium text-mr-white group-hover:text-brand-teal transition-colors">
                  {link.label}
                </p>
                <p className="text-xs text-mr-muted">{link.sub}</p>
              </div>
              <span className="ml-auto text-mr-muted group-hover:text-brand-teal transition-colors">→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
