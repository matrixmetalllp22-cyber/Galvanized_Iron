
// import React from "react";
// import { motion } from "framer-motion";
// import { Ruler, Package, Zap, Shield, Factory, CheckCircle } from "lucide-react";

// export default function CutToLengthIndustrial() {
//   const features = [
//     { icon: <Ruler className="w-8 h-8" />, title: "Ultra-Precise Length", desc: "±0.5 mm accuracy even at 12-meter sheets" },
//     { icon: <Factory className="w-8 h-8" />, title: "2000 mm Width Capacity", desc: "One of the widest CTL lines in India" },
//     { icon: <Zap className="w-8 h-8" />, title: "High-Speed Processing", desc: "Flying shear & servo precision for maximum output" },
//     { icon: <Package className="w-8 h-8" />, title: "Auto Stacking & Packing", desc: "Clean stacks with edge protection and export wrapping" }
//   ];

//   const specs = [
//     { label: "Max Width", value: "2000 mm" },
//     { label: "Max Length", value: "12,000 mm" },
//     { label: "Thickness Range", value: "0.4 – 16 mm" },
//     { label: "Length Tolerance", value: "±0.5 mm" },
//     { label: "Flatness", value: "< 1.0 mm/m" },
//     { label: "Annual Capacity", value: "1,75,000+ MT" }
//   ];

//   return (
//     <div className="bg-gradient-to-b from-black via-neutral-950 to-black min-h-screen font-sans text-slate-200">

//       {/* HERO */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="/images/ctl-industrial.jpg"
//             alt="Cut to Length"
//             className="w-full h-full object-cover opacity-25"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70" />
//         </div>

//         <div className="relative container mx-auto px-6 py-32 md:py-44 text-white text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
//           >
//             CUT TO LENGTH LINES
//             <br />
//             <span className="text-orange-400">
//               Precision Sheets • Export Ready
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto"
//           >
//             From coil to perfectly flat, accurately cut sheets — ready for PEB,
//             construction, automotive, and fabrication.
//           </motion.p>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="py-20 bg-neutral-950">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-16 text-white">
//             Why Choose Our <span className="text-orange-500">CTL Lines</span>?
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((f, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="bg-neutral-900 rounded-2xl p-8 border border-white/10 hover:border-orange-500 hover:shadow-2xl transition-all group"
//               >
//                 <div className="text-orange-500 mb-4 group-hover:scale-110 transition">
//                   {f.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 text-white">
//                   {f.title}
//                 </h3>
//                 <p className="text-slate-400 text-sm">
//                   {f.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SPECS */}
//       <section className="py-24 bg-black text-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-16">
//             Technical <span className="text-orange-400">Specifications</span>
//           </h2>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
//             {specs.map((s, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="bg-neutral-900 border border-white/10 p-6 rounded-xl text-center hover:border-orange-500 transition"
//               >
//                 <p className="text-3xl font-bold text-orange-400">
//                   {s.value}
//                 </p>
//                 <p className="text-slate-400 text-xs mt-2 uppercase tracking-wider">
//                   {s.label}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white text-center">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold mb-6">
//             Need Perfect Sheets On Time?
//           </h2>

//           <p className="text-xl text-orange-100 mb-10 max-w-3xl mx-auto">
//             Contact us for cut-to-length sheets in HR, CR, GP, high-strength steel
//             — delivered with precision and speed.
//           </p>

//           <a
//             href="/contact"
//             className="inline-block bg-white text-orange-700 px-10 py-4 rounded-lg text-lg font-bold hover:scale-105 transition"
//           >
//             Request Quote Now
//           </a>
//         </div>
//       </section>

//     </div>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import { Ruler, Package, Zap, Shield, Factory, CheckCircle } from "lucide-react";

export default function CutToLengthIndustrial() {
  const features = [
    { icon: <Ruler className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Ultra-Precise Length", desc: "±0.5 mm accuracy even at 12-meter sheets" },
    { icon: <Factory className="w-6 h-6 sm:w-8 sm:h-8" />, title: "2000 mm Width Capacity", desc: "One of the widest CTL lines in India" },
    { icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />, title: "High-Speed Processing", desc: "Flying shear & servo precision for maximum output" },
    { icon: <Package className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Auto Stacking & Packing", desc: "Clean stacks with edge protection and export wrapping" }
  ];

  const specs = [
    { label: "Max Width", value: "2000 mm" },
    { label: "Max Length", value: "12,000 mm" },
    { label: "Thickness Range", value: "0.4 – 16 mm" },
    { label: "Length Tolerance", value: "±0.5 mm" },
    { label: "Flatness", value: "< 1.0 mm/m" },
    { label: "Annual Capacity", value: "1,75,000+ MT" }
  ];

  return (
    <div className="bg-gradient-to-b from-black via-neutral-950 to-black min-h-screen font-sans text-slate-200">

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[50vh] md:min-h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="/images/ctl-industrial.jpg"
            alt="Cut to Length"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 py-20 sm:py-32 md:py-44 text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            CUT TO LENGTH LINES
            <br />
            <span className="text-orange-400">
              Precision Sheets • Export Ready
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto"
          >
            From coil to perfectly flat, accurately cut sheets — ready for PEB,
            construction, automotive, and fabrication.
          </motion.p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 sm:py-20 bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-white">
            Why Choose Our <span className="text-orange-500">CTL Lines</span>?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-900 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-orange-500 hover:shadow-2xl transition-all group"
              >
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition">
                  {f.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">
                  {f.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="py-20 sm:py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
            Technical <span className="text-orange-400">Specifications</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {specs.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-900 border border-white/10 p-4 sm:p-6 rounded-xl text-center hover:border-orange-500 transition"
              >
                <p className="text-2xl sm:text-3xl font-bold text-orange-400">
                  {s.value}
                </p>
                <p className="text-slate-400 text-xs mt-2 uppercase tracking-wider">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need Perfect Sheets On Time?
          </h2>

          <p className="text-lg sm:text-xl text-orange-100 mb-8 sm:mb-10 max-w-3xl mx-auto">
            Contact us for cut-to-length sheets in HR, CR, GP, high-strength steel
            — delivered with precision and speed.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-orange-700 px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:scale-105 transition"
          >
            Request Quote Now
          </a>
        </div>
      </section>

    </div>
  );
}