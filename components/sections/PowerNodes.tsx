import Image from "next/image";
import Link from "next/link";

const NODES = [
  {
    name: "Power NODE 1kW",
    sub: "Computing Power",
    image: "/images/power-node.png",
    href: "/products/power-nodes#1kw",
  },
  {
    name: "Micro NODE 0.1kW",
    sub: "Computing Power",
    image: "/images/micro-node.png",
    href: "/products/power-nodes#micro",
  },
];

const STATUS_DOTS = ["STATUS", "GRID", "NETWORK"];

export function PowerNodes() {
  return (
    <section className="section" style={{ background: "#0F0F13" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border overflow-hidden"
          style={{ background: "#141418", borderColor: "rgba(0,200,150,0.15)" }}>
          <div className="grid lg:grid-cols-2 gap-0">

            {/* Left — description */}
            <div className="p-8 lg:p-10 border-r" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-4">
                Grid Infrastructure
              </p>
              <h2 className="text-3xl font-bold text-white mb-5">Power NODES</h2>
              <p className="text-mr-gray text-base leading-relaxed">
                Power NODES are not direct mining products. They provide computing
                power to the Mining RACE Grid, allowing the network to run at full
                speed. By deploying Power NODES, you contribute to the grid capacity
                that powers all Mining Solutions.
              </p>
            </div>

            {/* Right — node products */}
            <div className="grid grid-cols-2 divide-x" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
              {NODES.map((node) => (
                <div key={node.name} className="p-6 flex flex-col items-center text-center gap-4">
                  {/* Image */}
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <Image
                      src={node.image}
                      alt={node.name}
                      width={90}
                      height={90}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{node.name}</h3>
                    <p className="text-xs text-mr-muted mb-4">{node.sub}</p>

                    {/* Status indicators */}
                    <div className="flex flex-col gap-1.5 items-start text-left">
                      {STATUS_DOTS.map((label) => (
                        <div key={label} className="flex items-center gap-2">
                          <span className="text-xs text-mr-muted w-16">{label}</span>
                          <div className="w-2 h-2 rounded-full bg-green-400"
                            style={{ boxShadow: "0 0 6px rgba(74,222,128,0.8)" }} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={node.href}
                    className="inline-flex items-center gap-1 text-xs font-medium text-brand-teal hover:gap-2 transition-all mt-auto"
                  >
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
