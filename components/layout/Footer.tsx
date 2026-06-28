import Link from "next/link";

const FOOTER_LINKS = {
  "Mining Solutions": [
    { label: "Mining CORES", href: "/products/mining-cores" },
    { label: "Mining CARDS", href: "/products/mining-cards" },
    { label: "Mining DEVICES", href: "/products/mining-devices" },
    { label: "Power NODES", href: "/products/power-nodes" },
  ],
  Learn: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Inside Mining RACE", href: "/inside-mining-race" },
    { label: "Blog", href: "/blog" },
    { label: "Events & Media", href: "/events" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Support", href: "/support" },
    { label: "Partner with Us", href: "/partner" },
    { label: "Terminology", href: "/terminology" },
  ],
  General: [
    { label: "Merchandise", href: "/merchandise" },
    { label: "Blockchain Explorer", href: "/explorer" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer style={{ background: "#08080C", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 2.5rem 2rem" }}>

        {/* Top — Logo + links grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr", gap: "2.5rem", marginBottom: "3rem" }}>

          {/* Brand column */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "1rem" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#F0F4F8" }}>
                mining<span style={{ color: "#00C896" }}>RACE</span>
              </span>
            </Link>
            <p style={{ fontSize: "0.8rem", color: "#475569", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: "220px" }}>
              The fastest driven Bitcoin movement. Start mining in minutes, no hardware required.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a
                href="https://apps.apple.com/ae/app/id6451437219"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 0.75rem", background: "#101016", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.5rem", fontSize: "0.72rem", color: "#94A3B8", textDecoration: "none", transition: "border-color 0.2s", width: "fit-content" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#94A3B8"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.mrace.app.android"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 0.75rem", background: "#101016", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.5rem", fontSize: "0.72rem", color: "#94A3B8", textDecoration: "none", transition: "border-color 0.2s", width: "fit-content" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#94A3B8"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.834 1.64a1 1 0 010 1.726l-2.834 1.64-2.532-2.533 2.532-2.473zM5.864 3.458L16.8 9.79l-2.302 2.302-8.634-8.634z"/></svg>
                Google Play
              </a>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#00C896", marginBottom: "1.25rem" }}>
                {group}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{ fontSize: "0.82rem", color: "#6B7A8D", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#F0F4F8")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#6B7A8D")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Risk disclaimer */}
        <div style={{
          marginBottom: "2rem",
          padding: "1.25rem 1.5rem",
          background: "rgba(0,200,150,0.03)",
          border: "1px solid rgba(0,200,150,0.1)",
          borderRadius: "0.625rem",
          borderLeft: "3px solid rgba(0,200,150,0.3)",
        }}>
          <p style={{ fontSize: "0.72rem", color: "#475569", lineHeight: 1.7 }}>
            <strong style={{ color: "#6B7A8D", fontWeight: 600 }}>Risk Disclaimer:</strong>{" "}
            Mining RACE is a Bitcoin mining platform. It is not a financial product, and participation
            does not constitute an investment. Mining rewards are not guaranteed. They vary based on
            Bitcoin market price, network mining difficulty, your level of activity, and eligibility
            criteria at the time of participation. Past activity is not an indicator of future rewards.
            No part of the website constitutes financial advice.
          </p>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ fontSize: "0.72rem", color: "#475569" }}>
            © {new Date().getFullYear()} Mining RACE. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/privacy" style={{ fontSize: "0.72rem", color: "#475569", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "#F0F4F8")} onMouseLeave={e => (e.currentTarget.style.color = "#475569")}>Privacy Policy</Link>
            <Link href="/terms" style={{ fontSize: "0.72rem", color: "#475569", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "#F0F4F8")} onMouseLeave={e => (e.currentTarget.style.color = "#475569")}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
