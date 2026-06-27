import Link from "next/link";

const FOOTER_LINKS = {
  "Mining Solutions": [
    { label: "Mining CORES", href: "/products/mining-cores" },
    { label: "Mining CARDS", href: "/products/mining-cards" },
    { label: "Mining DEVICES", href: "/products/mining-devices" },
    { label: "Power NODES", href: "/products/power-nodes" },
  ],
  Learn: [
    { label: "How it Works", href: "/how-it-works" },
    { label: "Inside Mining RACE", href: "/inside-mining-race" },
    { label: "Blog", href: "/blog" },
    { label: "Events & Media", href: "/events" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Support", href: "/support" },
    { label: "Partner with Us", href: "/partner" },
    { label: "Terminology", href: "#" },
  ],
  Miscellaneous: [
    { label: "Merchandise", href: "#" },
    { label: "Blockchain Explorer", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-mr-border bg-mr-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Top — Logo + links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-mr-white">
                mining<span className="text-brand-teal">RACE</span>
              </span>
            </Link>
            <p className="text-sm text-mr-muted leading-relaxed mb-4">
              The fastest driven Bitcoin movement. Start mining in minutes, no hardware required.
            </p>
            {/* App store badges */}
            <div className="flex flex-col gap-2">
              <a
                href="https://apps.apple.com/ae/app/id6451437219"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-mr-card border border-mr-border rounded-lg text-xs text-mr-gray hover:border-brand-teal hover:text-brand-teal transition-colors"
              >
                🍎 App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.mrace.app.android"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-mr-card border border-mr-border rounded-lg text-xs text-mr-gray hover:border-brand-teal hover:text-brand-teal transition-colors"
              >
                ▶ Google Play
              </a>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-mr-muted mb-4">
                {group}
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-mr-gray hover:text-mr-white transition-colors"
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
        <div className="callout-quote mb-8 text-xs">
          <strong className="text-mr-gray font-medium">Risk Disclaimer:</strong>{" "}
          Mining RACE is a Bitcoin mining platform. It is not a financial product, and participation
          does not constitute an investment. Mining rewards are not guaranteed. They vary based on
          Bitcoin market price, network mining difficulty, your level of activity, and eligibility
          criteria at the time of participation. Past activity is not an indicator of future rewards.
          No part of the website constitutes financial advice.
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-mr-border">
          <p className="text-xs text-mr-muted">
            © {new Date().getFullYear()} Mining RACE. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-mr-muted hover:text-mr-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-mr-muted hover:text-mr-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
