// import React, { useRef, useState } from "react";
// import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";

// const newsData = [
//   {
//     year: 2025,
//     items: [
//       {
//         title:
//           "AM/NS India wins top innovation award at NECA 2025 for decarbonisation leadership",
//         location: "New Delhi / Hazira",
//         date: "17 December 2025",
//         description:
//           "AM/NS India received the top innovation award at NECA 2025 for its leadership in decarbonisation and sustainable steelmaking technologies.",
//       },
//       {
//         title: "AM/NS India accelerates circularity and low-carbon steelmaking",
//         location: "Mumbai / Delhi",
//         date: "10 November 2025",
//         description:
//           "The company announced new initiatives to boost circular economy practices and accelerate low-carbon steel production.",
//       },
//       {
//         title:
//           "India’s first all-steel-slag roads scaled up nationally with CSIR–CRRI technology license",
//         location: "Delhi / Mumbai",
//         date: "25 July 2025",
//         description:
//           "Steel slag road technology is being deployed nationally after successful pilots in multiple Indian cities.",
//       },
//     ],
//   },
//   {
//     year: 2024,
//     items: [
//       {
//         title:
//           "AM/NS India launches Magnelis® – powering India’s renewable energy transition",
//         location: "Mumbai",
//         date: "18 September 2024",
//         description:
//           "Magnelis® steel is launched to support renewable energy infrastructure with enhanced corrosion resistance.",
//       },
//       {
//         title:
//           "AM/NS India releases inaugural Climate Action Report – 20% emissions intensity reduction target by 2030",
//         location: "Mumbai",
//         date: "05 February 2024",
//         description:
//           "The Climate Action Report outlines AM/NS India's roadmap to reduce emissions intensity by 20% by 2030.",
//       },
//     ],
//   },
// ];

// export default function NewsroomTimeline() {
//   const containerRef = useRef(null);
//   const [activeItem, setActiveItem] = useState(null);

//   const { scrollYProgress } = useScroll({ target: containerRef });
//   const lineScale = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//   return (
//     <section
//       ref={containerRef}
//       className="relative bg-[#0b0b0d] text-white py-32 overflow-hidden"
//     >
//       {/* Ambient glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.12),transparent_60%)]" />

//       <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-24"
//         >
//           <p className="text-xs uppercase tracking-[0.45em] text-red-400/80 font-semibold">
//             Newsroom Timeline
//           </p>
//           <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
//             Our Journey Through the Years
//           </h2>
//           <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
//             Key milestones, innovations, and sustainability breakthroughs that
//             shaped AM/NS India.
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Static line */}
//           <div className="absolute left-4 lg:left-1/2 w-[2px] bg-red-600/20 h-full transform lg:-translate-x-1/2" />

//           {/* Animated glowing line */}
//           <motion.div
//             style={{ height: lineScale }}
//             className="absolute left-4 lg:left-1/2 w-[3px]
//               bg-gradient-to-b from-red-500 via-red-600 to-red-400
//               shadow-[0_0_25px_rgba(220,38,38,0.6)]
//               transform lg:-translate-x-1/2 origin-top"
//           />

//           {newsData.map(({ year, items }, yearIndex) => {
//             const ref = useRef(null);
//             const isInView = useInView(ref, {
//               once: true,
//               margin: "-120px",
//             });

//             return (
//               <motion.div
//                 key={year}
//                 ref={ref}
//                 initial={{ opacity: 0, y: 60 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.9, delay: yearIndex * 0.15 }}
//                 className={`relative mb-24 lg:mb-32 ${
//                   yearIndex % 2 === 0
//                     ? "lg:pr-[50%] lg:pl-8"
//                     : "lg:pl-[50%] lg:pr-8"
//                 }`}
//               >
//                 {/* Sticky Year badge */}
//                 <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 lg:translate-x-0 z-20">
//                   <div className="sticky top-28 flex items-center">
//                     <div className="w-5 h-5 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.8)]" />
//                     <span className="ml-4 text-3xl font-extrabold text-red-500 bg-[#0b0b0d]/90 backdrop-blur px-4 py-1 rounded-full border border-red-500/20 shadow-lg">
//                       {year}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Items */}
//                 <div className="pt-14 pl-12 lg:pt-0 lg:pl-0 space-y-8">
//                   {items.map((item, i) => (
//                     <motion.article
//                       key={item.title}
//                       initial={{
//                         opacity: 0,
//                         x: yearIndex % 2 === 0 ? -50 : 50,
//                       }}
//                       animate={isInView ? { opacity: 1, x: 0 } : {}}
//                       transition={{
//                         duration: 0.7,
//                         delay: i * 0.12 + 0.3,
//                       }}
//                       whileHover={{ y: -6, scale: 1.02 }}
//                       onClick={() => setActiveItem(item)}
//                       className="cursor-pointer group relative bg-gradient-to-br from-white/5 to-white/0
//                         backdrop-blur-xl border border-white/10
//                         p-7 rounded-2xl shadow-lg
//                         hover:shadow-red-500/30 transition-all"
//                     >
//                       <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.18),transparent_60%)]" />

//                       <h3 className="relative text-xl font-semibold leading-tight mb-3 group-hover:text-red-400 transition">
//                         {item.title}
//                       </h3>

//                       <div className="relative flex flex-wrap gap-x-6 text-sm text-gray-400">
//                         <span>📍 {item.location}</span>
//                         <time>🗓 {item.date}</time>
//                       </div>

//                       <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-500 rounded-full" />
//                     </motion.article>
//                   ))}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>

//       {/* ================= MODAL ================= */}
//       <AnimatePresence>
//         {activeItem && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setActiveItem(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 30 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 30 }}
//               transition={{ duration: 0.4 }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative bg-[#121216] border border-white/10 rounded-2xl shadow-2xl p-8 max-w-xl w-full mx-4"
//             >
//               <button
//                 onClick={() => setActiveItem(null)}
//                 className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
//               >
//                 ✕
//               </button>

//               <h3 className="text-2xl font-bold mb-4 text-red-400">
//                 {activeItem.title}
//               </h3>

//               <div className="flex flex-wrap gap-x-6 text-sm text-gray-400 mb-4">
//                 <span>📍 {activeItem.location}</span>
//                 <span>🗓 {activeItem.date}</span>
//               </div>

//               <p className="text-gray-300 leading-relaxed">
//                 {activeItem.description ||
//                   "This is a detailed preview of the selected newsroom update. You can expand this content with API-driven data or CMS content later."}
//               </p>

//               <div className="mt-6 flex justify-end">
//                 <button
//                   onClick={() => setActiveItem(null)}
//                   className="px-5 py-2 rounded-full bg-red-600 hover:bg-red-500 transition text-sm font-semibold"
//                 >
//                   Close
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }








import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const newsData = [
  {
    year: 2026,
    items: [
      {
        title:
          "AM/NS India announces pilot green hydrogen integration at Hazira plant",
        location: "Hazira",
        date: "12 February 2026",
        description:
          "AM/NS India unveiled its pilot green hydrogen integration project aimed at decarbonising steel production at the Hazira facility.",
      },
      {
        title:
          "First batch of low-carbon steel exported to Europe under XCarb™ initiative",
        location: "Mumbai / Rotterdam",
        date: "20 April 2026",
        description:
          "The company exported its first shipment of certified low-carbon steel to Europe under the XCarb™ sustainability brand.",
      },
      {
        title:
          "AM/NS India commits ₹15,000 crore for next-gen electric arc furnace",
        location: "Odisha",
        date: "30 August 2026",
        description:
          "A major investment was announced to set up a next-generation electric arc furnace facility in Odisha.",
      },
    ],
  },
  {
    year: 2025,
    items: [
      {
        title:
          "AM/NS India wins top innovation award at NECA 2025 for decarbonisation leadership",
        location: "New Delhi / Hazira",
        date: "17 December 2025",
        description:
          "AM/NS India received the top innovation award at NECA 2025 for its leadership in decarbonisation and sustainable steelmaking technologies.",
      },
      {
        title: "AM/NS India accelerates circularity and low-carbon steelmaking",
        location: "Mumbai / Delhi",
        date: "10 November 2025",
        description:
          "The company announced new initiatives to boost circular economy practices and accelerate low-carbon steel production.",
      },
      {
        title:
          "India’s first all-steel-slag roads scaled up nationally with CSIR–CRRI technology license",
        location: "Delhi / Mumbai",
        date: "25 July 2025",
        description:
          "Steel slag road technology is being deployed nationally after successful pilots in multiple Indian cities.",
      },
      {
        title:
          "AM/NS India commissions advanced Continuous Galvanising Line for automotive steel",
        location: "Mumbai",
        date: "16 July 2025",
        description:
          "A new Continuous Galvanising Line was commissioned to enhance automotive steel production quality.",
      },
      {
        title:
          "New sustainability initiative: Zero-waste steel production pilot launched",
        location: "Hazira",
        date: "15 June 2025",
        description:
          "A zero-waste steel production pilot was launched to minimise landfill disposal from steelmaking operations.",
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        title:
          "AM/NS India launches Magnelis® – powering India’s renewable energy transition",
        location: "Mumbai",
        date: "18 September 2024",
        description:
          "Magnelis® steel was launched to support renewable energy infrastructure with enhanced corrosion resistance.",
      },
      {
        title:
          "AM/NS India releases inaugural Climate Action Report – 20% emissions intensity reduction target by 2030",
        location: "Mumbai",
        date: "05 February 2024",
        description:
          "The Climate Action Report outlines AM/NS India's roadmap to reduce emissions intensity by 20% by 2030.",
      },
      {
        title: "Dr. Arvind Bodhankar appointed Chief Sustainability Officer",
        location: "Mumbai",
        date: "22 February 2024",
        description:
          "Dr. Arvind Bodhankar was appointed Chief Sustainability Officer to lead sustainability strategy.",
      },
      {
        title: "Partnership with Protean for 'Beti Padhao' scholarship renewed",
        location: "Mumbai",
        date: "08 March 2024",
        description:
          "The scholarship program supporting girl child education was renewed in partnership with Protean.",
      },
      {
        title: "Launch of Optigal® with industry-leading warranty",
        location: "Mumbai",
        date: "22 August 2024",
        description:
          "Optigal® steel was launched with one of the strongest warranties in the industry.",
      },
      {
        title:
          "Sustainability drive: Solar power integration in manufacturing facilities",
        location: "Hazira",
        date: "10 July 2024",
        description:
          "Solar power systems were integrated into manufacturing facilities to reduce carbon footprint.",
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        title:
          "XCarb™ Innovation Fund launched in India for climate-tech startups",
        location: "Chennai",
        date: "11 July 2023",
        description:
          "The XCarb™ Innovation Fund was launched to support Indian climate-tech startups.",
      },
      {
        title: "India’s first 100% steel slag road inaugurated in Hazira",
        location: "Hazira",
        date: "01 January 2023",
        description:
          "India’s first 100% steel slag road was inaugurated at the Hazira plant.",
      },
      {
        title: "Collaboration with Festo India for vocational education",
        location: "Ahmedabad / Bengaluru",
        date: "06 July 2023",
        description:
          "A partnership with Festo India was announced to enhance vocational education programs.",
      },
      {
        title: "MoU with Schneider for energy efficiency",
        location: "Ahmedabad",
        date: "08 June 2023",
        description:
          "An MoU was signed with Schneider to drive energy-efficient industrial operations.",
      },
      {
        title: "Digital skills training equips 800 youth with NSDC",
        location: "New Delhi",
        date: "04 August 2023",
        description:
          "Digital skills training programs equipped over 800 youth with job-ready capabilities.",
      },
      {
        title:
          "Biodiversity conservation project initiated around plants",
        location: "Odisha",
        date: "15 May 2023",
        description:
          "A biodiversity conservation project was initiated around manufacturing plants.",
      },
    ],
  },
  {
    year: 2022,
    items: [
      {
        title:
          "‘Reimagineering’ – AM/NS India’s first corporate brand campaign unveiled",
        location: "Mumbai",
        date: "16 November 2022",
        description:
          "The company unveiled its first corporate brand campaign, ‘Reimagineering’.",
      },
      {
        title: "₹60,000 crore Hazira expansion commenced",
        location: "Hazira",
        date: "28 October 2022",
        description:
          "A major ₹60,000 crore expansion project at Hazira was officially commenced.",
      },
      {
        title:
          "Acquisition of port and power assets from Essar Group completed",
        location: "Mumbai",
        date: "21 November 2022",
        description:
          "The acquisition of strategic port and power assets from Essar Group was completed.",
      },
      {
        title:
          "Digital training collaboration with NSDC renewed",
        location: "New Delhi",
        date: "14 December 2022",
        description:
          "The digital training collaboration with NSDC was renewed.",
      },
      {
        title:
          "Water conservation initiative saves millions of liters annually",
        location: "Gujarat",
        date: "20 September 2022",
        description:
          "Water conservation initiatives led to significant annual water savings.",
      },
    ],
  },
  {
    year: 2021,
    items: [
      {
        title:
          "Operations begin at Ghoraburhani-Sagasahi iron ore mine",
        location: "Odisha",
        date: "09 September 2021",
        description:
          "Operations began at the Ghoraburhani-Sagasahi iron ore mine in Odisha.",
      },
      {
        title:
          "Second 6MT pellet plant commissioned in Odisha",
        location: "Paradeep",
        date: "02 September 2021",
        description:
          "A second 6MT pellet plant was commissioned in Paradeep.",
      },
      {
        title:
          "Partnership with NSDC for digital training",
        location: "New Delhi",
        date: "12 August 2021",
        description:
          "A partnership with NSDC was formed for nationwide digital training.",
      },
      {
        title:
          "MSME revival initiative with NSIC",
        location: "New Delhi",
        date: "13 September 2021",
        description:
          "An MSME revival initiative was launched with NSIC.",
      },
      {
        title:
          "Green hydrogen feasibility study launched",
        location: "Mumbai",
        date: "15 June 2021",
        description:
          "A feasibility study on green hydrogen integration was launched.",
      },
    ],
  },
  {
    year: 2020,
    items: [
      {
        title:
          "ArcelorMittal announces 10 sustainable development outcomes aligned with UN SDGs",
        location: "Global",
        date: "26 May 2020",
        description:
          "Ten sustainable development outcomes aligned with UN SDGs were announced.",
      },
      {
        title: "Acquisition of Bhander Power plant",
        location: "Hazira",
        date: "03 March 2020",
        description:
          "The Bhander Power Plant acquisition strengthened captive power capacity.",
      },
      {
        title:
          "COVID-19 relief: Sustainable community support programs",
        location: "India-wide",
        date: "01 April 2020",
        description:
          "Community support programs were launched nationwide during COVID-19.",
      },
    ],
  },
];

export default function NewsroomTimeline() {
  const containerRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const lineScale = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0b0b0d] text-white py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.12),transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-xs uppercase tracking-[0.45em] text-red-400/80 font-semibold">
            Newsroom Timeline
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Our Journey Through the Years
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 lg:left-1/2 w-[2px] bg-red-600/20 h-full transform lg:-translate-x-1/2" />

          <motion.div
            style={{ height: lineScale }}
            className="absolute left-4 lg:left-1/2 w-[3px]
              bg-gradient-to-b from-red-500 via-red-600 to-red-400
              shadow-[0_0_25px_rgba(220,38,38,0.6)]
              transform lg:-translate-x-1/2 origin-top"
          />

          {newsData.map(({ year, items }, yearIndex) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-120px" });

            return (
              <motion.div
                key={year}
                ref={ref}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9 }}
                className={`relative mb-24 lg:mb-32 ${
                  yearIndex % 2 === 0
                    ? "lg:pr-[50%] lg:pl-8"
                    : "lg:pl-[50%] lg:pr-8"
                }`}
              >
                {/* Sticky Year */}
                <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 lg:translate-x-0 z-20">
                  <div className="sticky top-28 flex items-center">
                    <div className="w-5 h-5 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.8)]" />
                    <span className="ml-4 text-3xl font-extrabold text-red-500 bg-[#0b0b0d]/90 backdrop-blur px-4 py-1 rounded-full border border-red-500/20 shadow-lg">
                      {year}
                    </span>
                  </div>
                </div>

                {/* Items */}
                <div className="pt-14 pl-12 lg:pt-0 lg:pl-0 space-y-8">
                  {items.map((item, i) => (
                    <motion.article
                      key={item.title}
                      initial={{
                        opacity: 0,
                        x: yearIndex % 2 === 0 ? -50 : 50,
                      }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.7,
                        delay: i * 0.12 + 0.2,
                      }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      onClick={() => setActiveItem(item)}
                      className="cursor-pointer group relative bg-gradient-to-br from-white/5 to-white/0
                        backdrop-blur-xl border border-white/10
                        p-7 rounded-2xl shadow-lg
                        hover:shadow-red-500/30 transition-all"
                    >
                      <h3 className="relative text-xl font-semibold leading-tight mb-3 group-hover:text-red-400 transition">
                        {item.title}
                      </h3>

                      <div className="relative flex flex-wrap gap-x-6 text-sm text-gray-400">
                        <span>📍 {item.location}</span>
                        <time>🗓 {item.date}</time>
                      </div>

                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-500 rounded-full" />
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#121216] border border-white/10 rounded-2xl shadow-2xl p-8 max-w-xl w-full mx-4"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold mb-4 text-red-400">
                {activeItem.title}
              </h3>

              <div className="flex flex-wrap gap-x-6 text-sm text-gray-400 mb-4">
                <span>📍 {activeItem.location}</span>
                <span>🗓 {activeItem.date}</span>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {activeItem.description}
              </p>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-5 py-2 rounded-full bg-red-600 hover:bg-red-500 transition text-sm font-semibold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
