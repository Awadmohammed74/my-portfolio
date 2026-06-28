import { Code2, Briefcase } from "lucide-react";
import { soundManager } from "../utils/sound";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative">
          <div
            onMouseEnter={() => soundManager.playTick()}
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-sm text-accent-primary mb-4 border border-accent-primary/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
            About Me
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Passionate About{" "}
            <span className="gradient-text font-black">Engineering</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto" />
        </div>

        <div className="min-h-[400px]">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-scale-in">
            <div className="relative">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-full animate-morph blur-2xl pointer-events-none" />

                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent-primary/20 shadow-2xl group">
                  <img
                    src="/assets/me.png"
                    alt="Awad Mohammed"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 items-center justify-center hidden">
                    <div className="text-center">
                      <div className="text-6xl font-black gradient-text tracking-wide mb-2 font-['Outfit']">
                        AM
                      </div>
                      <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                        Awad Mohammed
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 rounded-full border border-accent-primary/20 pointer-events-none"
                    style={{ animation: "spinSlow 20s linear infinite" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent-primary rounded-full shadow-lg shadow-accent-primary/50" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent-secondary rounded-full shadow-lg shadow-accent-secondary/50" />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3 flex-wrap justify-center max-w-sm">
                {[
                  { name: "WordPress", icon: Code2 },
                  { name: "PHP OOP", icon: Code2 },
                  { name: "React Ecosystem", icon: Briefcase },
                ].map((item, i) => (
                  <div
                    key={item.name}
                    onMouseEnter={() => soundManager.playTick()}
                    className="glass rounded-full px-4.5 py-2 text-xs font-semibold text-gray-300 border border-white/5 shadow-md hover:border-accent-primary/40 transition-colors cursor-default"
                  >
                    <span
                      className={`inline-flex items-center justify-center mr-2 ${i === 0 ? "text-accent-primary" : i === 1 ? "text-accent-secondary" : "text-pink-500"}`}
                    >
                      <item.icon className="w-3 h-3" />
                    </span>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed font-medium">
                Hello! I'm{" "}
                <span className="text-white font-black font-['Outfit']">
                  Awad Mohammed AbdelAal
                </span>
                , a dedicated{" "}
                <span className="text-accent-primary font-bold">
                  WordPress Specialist
                </span>{" "}
                with 3+ years of professional history developing custom plugins,
                high-converting WooCommerce storefronts, REST API automations,
                and optimized servers.
              </p>

              <p className="text-gray-400 leading-relaxed text-sm">
                I construct clean code structures combining the robust MVC/OOP
                capabilities of PHP backend frameworks with the high-performance
                dynamic architectures of the React ecosystem. Currently
                completing computer engineering studies at Misr Higher
                Institute.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { label: "Engineering Lead", value: "Awad Mohammed" },
                  { label: "Location", value: "Egypt (GMT+3)" },
                  { label: "Email", value: "awadmhmd666@gmail.com" },
                  { label: "Current Status", value: "Open for Projects" },
                ].map((item) => (
                  <div
                    key={item.label}
                    onMouseEnter={() => soundManager.playTick()}
                    className="glass rounded-2xl p-4 border border-white/5 hover:border-accent-primary/20 transition-all duration-300 cursor-default"
                  >
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white break-all">
                      {item.value}
                    </div>
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
