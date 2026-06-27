export function GridDiagram() {
  const demandItems = ["Mining DEVICES", "Mining CARDS", "Mining CORES"];
  const supplyItems = ["Power NODE", "Micro NODE"];

  return (
    <section className="section" style={{ background: "#08080A" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border p-8 lg:p-12"
          style={{ background: "#0F0F13", borderColor: "rgba(255,255,255,0.07)" }}>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

            {/* Demand Side */}
            <div className="text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-4">
                Demand Side
              </p>
              <h3 className="text-xl font-bold text-white mb-6">Mining Solutions</h3>
              <div className="flex flex-col gap-3">
                {demandItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium text-mr-gray"
                    style={{ background: "#1A1A20", borderColor: "rgba(255,255,255,0.07)" }}
                  >
                    <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: "#00C896" }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Center — GRID */}
            <div className="flex flex-col items-center gap-4">
              {/* Arrows */}
              <div className="hidden lg:flex items-center justify-between w-full mb-2">
                <span className="text-brand-teal text-lg">→</span>
                <span className="text-brand-teal text-lg">←</span>
              </div>

              {/* Central circle */}
              <div
                className="w-36 h-36 rounded-full flex items-center justify-center border-2 text-center"
                style={{
                  background: "radial-gradient(circle, rgba(0,200,150,0.12) 0%, rgba(0,200,150,0.02) 70%)",
                  borderColor: "#00C896",
                  boxShadow: "0 0 40px rgba(0,200,150,0.2)",
                }}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-teal mb-1">
                    Mining RACE
                  </p>
                  <p className="text-lg font-black text-white">GRID</p>
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-between w-full mt-2">
                <span className="text-mr-muted text-xs">← Mining Solutions</span>
                <span className="text-mr-muted text-xs">Power NODES →</span>
              </div>
            </div>

            {/* Supply Side */}
            <div className="text-center lg:text-right">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-4">
                Supply Side
              </p>
              <h3 className="text-xl font-bold text-white mb-6">Power NODES</h3>
              <div className="flex flex-col gap-3">
                {supplyItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-end gap-3 px-4 py-3 rounded-xl border text-sm font-medium text-mr-gray"
                    style={{ background: "#1A1A20", borderColor: "rgba(255,255,255,0.07)" }}
                  >
                    {item}
                    <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: "#00C896" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
