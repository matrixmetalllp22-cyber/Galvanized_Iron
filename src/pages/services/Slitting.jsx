import React from "react";
import { motion } from "framer-motion";
import {
  Layers, Gauge, Zap, Cog, Shield, Package,
  CheckCircle, ArrowRight, Factory, Ruler
} from "lucide-react";

export default function SlittingIndustrial() {

  const realSpecs = [
    { label: "Material Thickness", value: "0.4 - 4.0 mm" },
    { label: "Slitting Width", value: "20 - 1600 mm" },
    { label: "Coil Weight Capacity", value: "15 MT" },
    { label: "Precision Tolerance", value: "±0.1 mm" },
    { label: "Annual Capacity", value: "25,000 MT" },
    { label: "Coil OD Max", value: "1600 mm" },
  ];

  const keyFeatures = [
    { icon: <Layers className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Shimless Tooling", desc: "Fast changeover with spare slitter head & offline setup" },
    { icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />, title: "High-Speed Automation", desc: "Servo tension control & digital synchronization" },
    { icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Surface Protection", desc: "German Laser Polifilm OSL/BSL + Interleaving Paper" },
    { icon: <Package className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Export-Grade Packing", desc: "Eye-to-Wall & Eye-to-Sky vertical arm system" },
    { icon: <Ruler className="w-6 h-6 sm:w-8 sm:h-8" />, title: "±0.1 mm Precision", desc: "Micron-level accuracy across all widths" },
    { icon: <Cog className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Zero-Defect Quality", desc: "Real-time monitoring & full traceability" },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-neutral-950 to-black min-h-screen text-slate-200">

      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581092580490-4a38c11e7b9f?q=80&w=2850&auto=format&fit=crop"
            alt="Slitting Line"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-36 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 sm:mb-8"
          >
            4HI High-Speed <span className="text-orange-500">Shimless</span><br />
            Precision Slitting Line
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 sm:mb-10"
          >
            Engineered for stainless steel, aluminium, GI/GP & high-strength alloys<br />
            Delivering <strong className="text-orange-400">±0.1 mm</strong> precision — Zero Defect Guaranteed
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a href="/contact" className="bg-orange-600 hover:bg-orange-700 px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl transition flex items-center justify-center gap-3">
              Request Quote <ArrowRight />
            </a>
            <a href="#specs" className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500/10 px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition">
              View Specifications
            </a>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-16 sm:py-20 lg:py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Engineered for <span className="text-orange-500">Excellence</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mt-4">
              German tooling • Japanese automation • Industrial robustness
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {keyFeatures.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-900 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-orange-500 hover:shadow-2xl transition"
              >
                <div className="text-orange-500 mb-4 sm:mb-5">{feat.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{feat.title}</h3>
                <p className="text-sm sm:text-base text-slate-400">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH SPECS */}
      <section id="specs" className="py-20 sm:py-24 lg:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              Technical <span className="text-orange-500">Capabilities</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-orange-300 mt-4">4HI High-Speed Auto Shimless Line</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {realSpecs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                className="bg-neutral-900 border border-white/10 rounded-xl p-4 sm:p-6 text-center hover:border-orange-500 transition"
              >
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-orange-400">
                  {spec.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 sm:mt-3 uppercase tracking-wider">
                  {spec.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            {[
              {
                title: "Special Performance Advantages",
                icon: <Factory className="w-5 h-5 sm:w-6 sm:h-6" />,
                items: [
                  "Spare slitter head for zero downtime",
                  "German Laser Polifilm protection",
                  "Vertical scrap winders",
                  "Export-grade packing",
                  "Servo tension control",
                  "Real-time safety interlocks"
                ]
              },
              {
                title: "Zero-Defect Quality Assurance",
                icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
                items: [
                  "±0.1 mm width verification",
                  "Surface inspection",
                  "Burr height control",
                  "Camber & flatness checks",
                  "Digital traceability",
                  "100% inspection"
                ]
              }
            ].map((box, i) => (
              <div key={i} className="bg-neutral-900 border border-white/10 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-400 mb-4 sm:mb-6 flex items-center gap-3">
                  {box.icon} {box.title}
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {box.items.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <CheckCircle className="text-orange-500 w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-r from-orange-500 to-amber-600 text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold mb-5 sm:mb-6">
            Ready for World-Class Slitting?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-orange-100 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Trusted by leading manufacturers for export-ready precision coils
          </p>
          <a
            href="/contact"
            className="bg-white text-orange-600 px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-xl shadow-2xl hover:scale-105 transition inline-flex items-center gap-3"
          >
            Get Instant Quote <ArrowRight />
          </a>
        </div>
      </section>
    </div>
  );
}
