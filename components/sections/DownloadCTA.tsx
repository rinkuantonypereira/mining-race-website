interface DownloadCTAProps { onDownload: () => void; }

export function DownloadCTA({ onDownload }: DownloadCTAProps) {
  return (
    <section className="section" style={{ background: "#08080A" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-2xl p-10 lg:p-16 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #141418 0%, rgba(0,200,150,0.05) 100%)",
            border: "1px solid rgba(0,200,150,0.2)",
          }}
        >
          {/* Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(0,200,150,0.1) 0%, transparent 70%)" }}
          />

          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-4">
              Get started today
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Race?
            </h2>
            <p className="text-mr-gray text-lg mb-8 max-w-md mx-auto">
              Get your free CORE, activate your SPOT, and start earning.
            </p>
            <button
              onClick={onDownload}
              className="inline-flex items-center gap-2 bg-brand-teal text-mr-black font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all"
              style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}
            >
              Get Started Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
