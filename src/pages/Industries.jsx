// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Shield, Target, Leaf, Check } from "lucide-react";

// const commitments = [
//   { icon: Target, text: "Exceeding customer expectations with precision-engineered solutions", color: "from-blue-600 to-cyan-600" },
//   { icon: Shield, text: "Zero-defect manufacturing through relentless process discipline", color: "from-emerald-600 to-teal-600" },
//   { icon: Leaf, text: "Sustainability and safety as non-negotiable principles", color: "from-amber-500 to-orange-600" },
// ];

// const sections = [
//   { 
//     title: "Why Matrix Metals", 
//     subtitle: "Because good enough is never enough.", 
//     points: ["Technological superiority in metal processing", "Engineering depth born from decades of mastery", "Strategic global locations for JIT delivery", "Ownership culture – your success is personal to us"],
//     imageUrl: "https://media.istockphoto.com/id/1390249924/photo/industrial-plant-for-the-production-of-sheet-metal-in-a-steel-mill-storage-of-sheet-rolls.jpg?s=612x612&w=0&k=20&c=9g5S8FB15_JvdCzRFDhzamHSd7pjz_0lTBCl4L66TGM="
//   },
//   { 
//     title: "Health • Safety • Environment", 
//     subtitle: "Safety is a commandment, not a choice.", 
//     points: ["Zero-incident culture with military-grade protocols", "Behavioral safety training every quarter", "Carbon-neutral operations target by 2030", "Proactive risk elimination using AI & IoT"],
//     imageUrl: "https://media.istockphoto.com/id/1289261745/vector/workplace-safety-word-concepts-banner.jpg?s=612x612&w=0&k=20&c=EvwC4IYwwLvXmrtYIbZ4Kd2cniPH6zeJZPrzDaB0yZg="
//   },
//   { 
//     title: "Quality Policy", 
//     subtitle: "Precision is not optional — it is absolute.", 
//     points: ["100% inspection with automated vision systems", "Full material traceability via blockchain ledger", "In-house NABL-accredited metallurgical lab", "Real-time SPC and Six Sigma Black Belt oversight"],
//     imageUrl: "https://images.squarespace-cdn.com/content/v1/63c1c82661516f4176b212fa/4ca9c917-36bf-4462-a063-c45a5285bb6c/PRESS+BRAKE3+%282%29.jpg"
//     // imageUrl: "https://newmexico-metals.com/wp-content/uploads/2023/12/worker-metal-factory-is-taking-measurements-piece-rail.jpg"
//   },
// ];

// export default function QualitySection() {
//   const { scrollYProgress } = useScroll();
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
//   return (
//     <section className="relative bg-black text-white overflow-hidden">
//       {/* Enhanced Background Pattern with subtle animation */}
//       <motion.div
//         className="absolute inset-0 opacity-5 pointer-events-none"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 2 }}
//       >
//         <div className="absolute inset-0" style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v-2h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           backgroundSize: "60px 60px"
//         }} />
//       </motion.div>
//       {/* Hero Section with improved parallax effect */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           className="text-center"
//         >
//           <motion.h1
//             className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight bg-gradient-to-r from-white via-gray-100 to-amber-400 bg-clip-text text-transparent leading-tight"
//             style={{ y: useTransform(scrollYProgress, [0, 0.2], ["0%", "20%"]) }}
//           >
//             Uncompromising
//             <br className="block sm:hidden" />
//             <span className="text-orange-400"> Quality</span>
//           </motion.h1>
//           <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed px-4">
//             At <span className="font-bold text-white">Matrix Metals</span>, excellence isn’t a target.
//             <br className="hidden sm:block" />
//             It is the <span className="text-orange-400 font-semibold">only standard</span> we know.
//           </p>
//         </motion.div>
//         <motion.div
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.6, delay: 0.8, ease: "easeInOut" }}
//           className="h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-12 max-w-xs sm:max-w-md rounded-full"
//         />
//       </div>
//       {/* Core Commitments with enhanced hover effects and glow */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="text-4xl sm:text-5xl font-bold text-center text-white mb-12 sm:mb-20"
//         >
//           Built on Three Pillars
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
//           {commitments.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.3, duration: 0.8 }}
//               whileHover={{ y: -12, scale: 1.05 }}
//               className="group relative overflow-hidden"
//             >
//               <div className="relative bg-black/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl sm:rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
//                 <motion.div
//                   className={`absolute -top-16 -right-16 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br ${item.color} opacity-20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000`}
//                   whileHover={{ opacity: 40, blur: "4xl" }}
//                 />
//                 <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
//                   <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
//                 </div>
//                 <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
//                   {item.text}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//       {/* Why Choose Us + HSE + Quality Policy with improved gradients, animations, and UI enhancements */}
//       <div className="py-20 sm:py-32 bg-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-32">
//           {sections.map((section, idx) => (
//             <motion.article
//               key={idx}
//               initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center bg-black/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl border border-amber-900/50 overflow-hidden hover:shadow-amber-900/20 transition-shadow duration-500"
//             >
//               <div className={`p-8 sm:p-12 lg:p-16 ${idx % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
//                 <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">{section.title}</h3>
//                 <p className="text-xl sm:text-2xl text-orange-400 font-medium italic mb-8">{section.subtitle}</p>
//                 <ul className="space-y-4 sm:space-y-6">
//                   {section.points.map((point, i) => (
//                     <motion.li
//                       key={i}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ delay: i * 0.15, duration: 0.6 }}
//                       className="flex items-start gap-4 text-gray-300 text-base sm:text-lg"
//                     >
//                       <motion.div
//                         className="flex-shrink-0 mt-1"
//                         whileHover={{ scale: 1.2, rotate: 12 }}
//                       >
//                         <Check className="w-5 h-5 text-amber-400" strokeWidth={2.5} />
//                       </motion.div>
//                       <span className="font-medium leading-relaxed">{point}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//               <motion.div 
//                 className={`h-64 sm:h-80 lg:h-96 ${idx % 2 === 0 ? "md:order-2" : "md:order-1"} relative overflow-hidden rounded-xl`}
//                 initial={{ scale: 0.95 }}
//                 whileInView={{ scale: 1 }}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.5 }}
//                 style={{ backgroundImage: `url(${section.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-orange-800/30 mix-blend-multiply" />
//                 <div className="absolute inset-0 bg-grid-white/5" />
//               </motion.div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }








import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Shield, Target, Leaf, Check, ArrowUpRight, Zap } from "lucide-react";

const commitments = [
  { icon: Target, title: "Precision", text: "Exceeding expectations with engineered solutions", color: "from-blue-500/20 to-blue-600/5" },
  { icon: Shield, title: "Discipline", text: "Zero-defect manufacturing process discipline", color: "from-orange-500/20 to-orange-600/5" },
  { icon: Leaf, title: "Ethical", text: "Sustainability and safety as non-negotiables", color: "from-emerald-500/20 to-emerald-600/5" },
];

const sections = [
  { 
    title: "Why Matrix Metals", 
    tag: "Technological Edge",
    points: ["Technological superiority", "Engineering mastery", "Strategic global JIT", "Ownership culture"],
    imageUrl: "https://media.istockphoto.com/id/1390249924/photo/industrial-plant-for-the-production-of-sheet-metal-in-a-steel-mill-storage-of-sheet-rolls.jpg?s=612x612&w=0&k=20&c=9g5S8FB15_JvdCzRFDhzamHSd7pjz_0lTBCl4L66TGM="
  },
  { 
    title: "Safety & HSE", 
    tag: "Commandment",
    points: ["Zero-incident culture", "Behavioral training", "Carbon-neutral 2030", "AI & IoT monitoring"],
    imageUrl: "https://media.istockphoto.com/id/1289261745/vector/workplace-safety-word-concepts-banner.jpg?s=612x612&w=0&k=20&c=EvwC4IYwwLvXmrtYIbZ4Kd2cniPH6zeJZPrzDaB0yZg="
  },
  { 
    title: "Quality Policy", 
    tag: "Absolute Precision",
    points: ["100% vision inspection", "Blockchain traceability", "NABL-accredited lab", "Six Sigma oversight"],
    imageUrl: "https://images.squarespace-cdn.com/content/v1/63c1c82661516f4176b212fa/4ca9c917-36bf-4462-a063-c45a5285bb6c/PRESS+BRAKE3+%282%29.jpg"
  },
];

export default function QualitySection() {
  const { scrollYProgress } = useScroll();
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.8, 1]), { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section className="bg-[#050505] text-white overflow-hidden selection:bg-orange-500/30">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      {/* 1. HERO AREA - Cinematic */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-6">
        <motion.div style={{ scale, opacity }} className="text-center z-10">
          <div className="flex justify-center mb-6">
            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs tracking-[0.3em] uppercase text-orange-400 font-bold">
              Standard of Excellence
            </span>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black leading-none tracking-tighter mb-8 italic uppercase">
            Uncompro<span className="text-orange-500 leading-[0]">m</span>ising <br />
            <span className="bg-gradient-to-t from-zinc-500 to-white bg-clip-text text-transparent italic">Quality</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
            At <span className="text-white font-medium">Matrix Metals</span>, we don't just process materials. We engineer the bedrock of modern industry with absolute precision.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-zinc-500"
        >
          <span className="text-[10px] uppercase tracking-widest">Explore Pillars</span>
          <div className="w-px h-12 bg-gradient-to-b from-orange-500 to-transparent" />
        </motion.div>
      </div>

      {/* 2. PILLARS - Glass Cards */}
      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commitments.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`group relative p-8 rounded-[2rem] border border-white/5 bg-gradient-to-br ${item.color} backdrop-blur-2xl transition-all duration-500`}
            >
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-white w-6 h-6" />
              </div>
              <div className="mb-8 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                <item.icon className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm lg:text-base">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. SECTION BLOCKS - Editorial Layout */}
      <div className="pb-40 px-6">
        <div className="max-w-7xl mx-auto space-y-40">
          {sections.map((section, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 lg:gap-24 items-center`}>
              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-8"
              >
                <div>
                  <div className="flex items-center gap-3 text-orange-500 mb-4">
                    <Zap className="w-4 h-4 fill-orange-500" />
                    <span className="text-xs font-bold uppercase tracking-widest">{section.tag}</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight uppercase">
                    {section.title.split(' ')[0]} <br />
                    <span className="text-zinc-600">{section.title.split(' ').slice(1).join(' ')}</span>
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.points.map((point, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 group hover:border-orange-500/50 transition-colors"
                    >
                      <Check className="w-4 h-4 text-orange-500 group-hover:scale-125 transition-transform" />
                      <span className="text-sm text-zinc-300 font-medium">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Image with Industrial Mask */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 w-full"
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-orange-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900">
                    <motion.img 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 1 }}
                      src={section.imageUrl} 
                      alt={section.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};