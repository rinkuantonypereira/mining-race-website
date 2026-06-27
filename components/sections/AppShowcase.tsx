import Image from "next/image";

const FEATURES = [
  {
    icon: "📊",
    title: "Real-Time Dashboard",
    desc: "Monitor power, earnings, and grid performance live.",
  },
  {
    icon: "💸",
    title: "Smart Earnings",
    desc: "Transparent payouts with real-time reward tracking.",
  },
  {
    icon: "🎛",
    title: "Easy Management",
    desc: "Manage all your products in one simple interface.",
  },
  {
    icon: "🔒",
    title: "Secure & Transparent",
    desc: "Enterprise-grade security with full transparency.",
  },
];

const APP_SCREENS = [
  { src: "/images/app-dashboard.png", alt: "Mining RACE app dashboard screen" },
  { src: "/images/app-mining.png",    alt: "Mining RACE app mining screen" },
  { src: "/images/app-rewards.png",   alt: "Mining RACE app rewards screen" },
];

export function AppShowcase() {
  return (
    <section className="section overflow-hidden" style={{ background: "#0F0F13" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — app screenshots */}
          <div className="flex items-end justify-center gap-4">
            {APP_SCREENS.map((screen, i) => (
              <div
                key={screen.src}
                className="relative flex-shrink-0 rounded-3xl overflow-hidden border shadow-2xl"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  transform: i === 1 ? "translateY(-2rem) scale(1.05)" : "translateY(0)",
                  zIndex: i === 1 ? 10 : 5,
                  width: i === 1 ? "150px" : "130px",
                  boxShadow: i === 1 ? "0 0 40px rgba(0,200,150,0.15)" : undefined,
                }}
              >
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={200}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right — content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-4">
              All-in-one experience
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
              Your Mining.<br />In Your Hands.
            </h2>
            <p className="text-mr-gray text-base leading-relaxed mb-10">
              Track performance, manage products, and earn rewards all from the Mining RACE App.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {FEATURES.map((feat) => (
                <div key={feat.title} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{feat.icon}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{feat.title}</h4>
                    <p className="text-mr-muted text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-mr-muted text-sm">Download App</span>
                <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm text-mr-gray hover:text-brand-teal hover:border-brand-teal transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  🍎 App Store
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm text-mr-gray hover:text-brand-teal hover:border-brand-teal transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  ▶ Google Play
                </a>
              </div>
              <p className="text-xs text-mr-muted mt-2">Available on iOS, Android, and Web</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
