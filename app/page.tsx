import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* HERO — placeholder, Layer 3 builds this fully */}
        <section className="relative min-h-screen flex items-center justify-center bg-hero-glow overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-teal mb-6 px-4 py-1.5 bg-brand-tealDim border border-brand-tealBorder rounded-full">
              The Fastest Driven Bitcoin Movement
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-mr-white leading-tight tracking-tight mb-6">
              Start Mining<br />
              <span className="gradient-text">in Minutes</span>
            </h1>
            <p className="text-lg text-mr-gray max-w-xl mx-auto mb-10 leading-relaxed">
              No hardware. No technical setup. Just download the app, activate your license,
              and plug into a global mining network across 140+ countries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-brand-teal text-mr-black font-semibold rounded-xl hover:opacity-90 transition-opacity text-base">
                Download App
              </button>
              <a href="/how-it-works" className="px-8 py-4 border border-mr-border text-mr-white font-medium rounded-xl hover:border-brand-teal transition-colors text-base">
                See How it Works
              </a>
            </div>
          </div>
        </section>

        {/* Stats bar placeholder */}
        <div className="border-y border-mr-border bg-mr-dark">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-mr-border">
              {[
                { label: "Active Miners", value: "56,981" },
                { label: "Rewards Paid (USD)", value: "$24.3M+" },
                { label: "Total Grid Power", value: "18.45 EH/s" },
                { label: "Countries", value: "140+" },
              ].map((stat) => (
                <div key={stat.label} className="py-6 px-6 text-center">
                  <p className="text-2xl font-bold text-mr-white mb-1">{stat.value}</p>
                  <p className="text-xs text-mr-muted uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* More sections added in Layer 3 */}
        <section className="section">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-mr-muted text-sm">— More sections coming in Layer 3 —</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
