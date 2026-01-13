// import React, { useState, useRef, useEffect } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";

// const newsData = [
//   {
//     year: 2025,
//     items: [
//       {
//         title: "AM/NS India wins top innovation award at NECA 2025 for decarbonisation leadership",
//         location: "New Delhi / Hazira",
//         date: "17 December 2025",
//       },
//       {
//         title: "AM/NS India accelerates circularity and low-carbon steelmaking",
//         location: "Mumbai / Delhi",
//         date: "10 November 2025",
//       },
//       {
//         title: "India’s first all-steel-slag roads scaled up nationally with CSIR–CRRI technology license",
//         location: "Delhi / Mumbai",
//         date: "25 July 2025",
//       },
//     ],
//   },
//   {
//     year: 2024,
//     items: [
//       {
//         title: "AM/NS India launches Magnelis® – powering India’s renewable energy transition",
//         location: "Mumbai",
//         date: "18 September 2024",
//       },
//       {
//         title: "AM/NS India releases inaugural Climate Action Report – 20% emissions intensity reduction target by 2030",
//         location: "Mumbai",
//         date: "05 February 2024",
//       },
//       {
//         title: "Dr. Arvind Bodhankar appointed Chief Sustainability Officer",
//         location: "Mumbai",
//         date: "22 February 2024",
//       },
//     ],
//   },
//   {
//     year: 2023,
//     items: [
//       {
//         title: "XCarb™ Innovation Fund launched in India for climate-tech startups",
//         location: "Chennai",
//         date: "11 July 2023",
//       },
//       {
//         title: "India’s first 100% steel slag road inaugurated in Hazira",
//         location: "Hazira",
//         date: "01 January 2023",
//       },
//     ],
//   },
//   {
//     year: 2022,
//     items: [
//       {
//         title: "‘Reimagineering’ – AM/NS India’s first corporate brand campaign unveiled",
//         location: "Mumbai",
//         date: "16 November 2022",
//       },
//       {
//         title: "₹60,000 crore Hazira expansion commenced",
//         location: "Hazira",
//         date: "28 October 2022",
//       },
//     ],
//   },
//   {
//     year: 2021,
//     items: [
//       {
//         title: "Operations begin at Ghoraburhani-Sagasahi iron ore mine",
//         location: "Odisha",
//         date: "09 September 2021",
//       },
//     ],
//   },
//   {
//     year: 2020,
//     items: [
//       {
//         title: "ArcelorMittal announces 10 sustainable development outcomes aligned with UN SDGs",
//         location: "Global",
//         date: "26 May 2020",
//       },
//     ],
//   },
//   {
//     year: 2019,
//     items: [
//       {
//         title: "ArcelorMittal Nippon Steel completes acquisition of Essar Steel",
//         location: "Mumbai",
//         date: "16 December 2019",
//       },
//     ],
//   },
// ];

// export default function NewsroomTimeline() {
//   const [activeYear, setActiveYear] = useState(2025);

//   return (
//     <section className="relative bg-[#0f0f0f] text-white py-32 overflow-hidden">
//       {/* Optional subtle background texture */}
//       <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-red-900 via-transparent to-transparent" />

//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
//           {/* LEFT – STICKY YEAR (Desktop only) */}
//           <div className="hidden lg:flex items-center justify-center h-screen sticky top-0">
//             <div className="relative">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeYear}
//                   initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
//                   animate={{ opacity: 1, scale: 1, rotate: 0 }}
//                   exit={{ opacity: 0, scale: 1.06, rotate: 4 }}
//                   transition={{ duration: 0.7, ease: "easeOut" }}
//                   className="relative"
//                 >
//                   {/* Faint background year */}
//                   <div className="absolute inset-0 flex items-center justify-center text-[360px] font-black text-white/4 select-none -top-20 -left-32">
//                     {activeYear}
//                   </div>

//                   {/* Red slanted block */}
//                   <div 
//                     className="relative bg-red-600 px-32 py-24 shadow-2xl"
//                     style={{
//                       clipPath: "polygon(0% 0%, 94% 0%, 100% 100%, 6% 100%)",
//                     }}
//                   >
//                     <span className="block text-[180px] lg:text-[220px] font-black text-white drop-shadow-2xl">
//                       {activeYear}
//                     </span>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* RIGHT – NEWS CONTENT */}
//           <div className="relative">
//             <div className="text-center lg:text-left mb-20">
//               <p className="text-xs uppercase tracking-[0.4em] text-gray-500 font-medium">Newsroom</p>
//             </div>

//             <div className="space-y-48 lg:space-y-64">
//               {newsData.map(({ year, items }) => {
//                 const ref = useRef(null);
//                 const isInView = useInView(ref, { 
//                   rootMargin: "-35% 0% -55% 0%", 
//                   once: false 
//                 });

//                 useEffect(() => {
//                   if (isInView) {
//                     setActiveYear(year);
//                   }
//                 }, [isInView, year]);

//                 return (
//                   <div key={year} ref={ref} className="scroll-mt-32">
//                     {/* Mobile Year Header */}
//                     <div className="lg:hidden relative mb-20 text-center">
//                       <div className="text-[180px] font-black text-white/5 absolute inset-0 flex items-center justify-center -top-16">
//                         {year}
//                       </div>
//                       <div 
//                         className="inline-block bg-red-600 px-20 py-12 shadow-2xl"
//                         style={{ clipPath: "polygon(0% 0%, 94% 0%, 100% 100%, 6% 100%)" }}
//                       >
//                         <span className="text-[120px] font-black text-white">
//                           {year}
//                         </span>
//                       </div>
//                     </div>

//                     {/* News Items */}
//                     <div className="space-y-20">
//                       {items.map((item, i) => (
//                         <motion.div
//                           key={i}
//                           initial={{ opacity: 0, y: 40 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           viewport={{ once: true, margin: "-100px" }}
//                           transition={{ duration: 0.7, delay: i * 0.15 }}
//                           className="group relative pl-8 border-l border-white/10 last:pb-0"
//                         >
//                           {/* Optional dot on the line */}
//                           <div className="absolute left-0 top-2 w-3 h-3 bg-red-600 rounded-full -translate-x-1/2 scale-0 group-hover:scale-100 transition" />

//                           <h3 className="text-xl lg:text-2xl font-medium leading-tight mb-5 group-hover:text-red-500 transition duration-300 pr-8">
//                             {item.title}
//                           </h3>

//                           <div className="flex flex-wrap gap-x-10 gap-y-2 text-sm text-red-500 mb-6">
//                             <span>{item.location}</span>
//                             <span>{item.date}</span>
//                           </div>

//                           <motion.div
//                             className="h-px bg-red-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
//                           />
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <motion.button
//               className="mt-24 text-sm tracking-widest uppercase text-gray-400 hover:text-red-500 transition duration-300 flex items-center gap-4 group"
//               whileHover={{ x: 10 }}
//             >
//               View Full Archive
//               <span className="text-red-500 text-xl group-hover:translate-x-2 transition">→</span>
//             </motion.button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const newsData = [
  {
    year: 2025,
    items: [
      {
        title: "AM/NS India wins top innovation award at NECA 2025 for decarbonisation leadership",
        location: "New Delhi / Hazira",
        date: "17 December 2025",
      },
      {
        title: "AM/NS India accelerates circularity and low-carbon steelmaking",
        location: "Mumbai / Delhi",
        date: "10 November 2025",
      },
      {
        title: "India’s first all-steel-slag roads scaled up nationally with CSIR–CRRI technology license",
        location: "Delhi / Mumbai",
        date: "25 July 2025",
      },
      {
        title: "AM/NS India commissions advanced Continuous Galvanising Line for automotive steel",
        location: "Mumbai",
        date: "16 July 2025",
      },
      {
        title: "New sustainability initiative: Zero-waste steel production pilot launched",
        location: "Hazira",
        date: "15 June 2025",
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        title: "AM/NS India launches Magnelis® – powering India’s renewable energy transition",
        location: "Mumbai",
        date: "18 September 2024",
      },
      {
        title: "AM/NS India releases inaugural Climate Action Report – 20% emissions intensity reduction target by 2030",
        location: "Mumbai",
        date: "05 February 2024",
      },
      {
        title: "Dr. Arvind Bodhankar appointed Chief Sustainability Officer",
        location: "Mumbai",
        date: "22 February 2024",
      },
      {
        title: "Partnership with Protean for 'Beti Padhao' scholarship renewed",
        location: "Mumbai",
        date: "08 March 2024",
      },
      {
        title: "Launch of Optigal® with industry-leading warranty",
        location: "Mumbai",
        date: "22 August 2024",
      },
      {
        title: "Sustainability drive: Solar power integration in manufacturing facilities",
        location: "Hazira",
        date: "10 July 2024",
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        title: "XCarb™ Innovation Fund launched in India for climate-tech startups",
        location: "Chennai",
        date: "11 July 2023",
      },
      {
        title: "India’s first 100% steel slag road inaugurated in Hazira",
        location: "Hazira",
        date: "01 January 2023",
      },
      {
        title: "Collaboration with Festo India for vocational education",
        location: "Ahmedabad / Bengaluru",
        date: "06 July 2023",
      },
      {
        title: "MoU with Schneider for energy efficiency",
        location: "Ahmedabad",
        date: "08 June 2023",
      },
      {
        title: "Digital skills training equips 800 youth with NSDC",
        location: "New Delhi",
        date: "04 August 2023",
      },
      {
        title: "Biodiversity conservation project initiated around plants",
        location: "Odisha",
        date: "15 May 2023",
      },
    ],
  },
  {
    year: 2022,
    items: [
      {
        title: "‘Reimagineering’ – AM/NS India’s first corporate brand campaign unveiled",
        location: "Mumbai",
        date: "16 November 2022",
      },
      {
        title: "₹60,000 crore Hazira expansion commenced",
        location: "Hazira",
        date: "28 October 2022",
      },
      {
        title: "Acquisition of port and power assets from Essar Group completed",
        location: "Mumbai",
        date: "21 November 2022",
      },
      {
        title: "Digital training collaboration with NSDC renewed",
        location: "New Delhi",
        date: "14 December 2022",
      },
      {
        title: "Water conservation initiative saves millions of liters annually",
        location: "Gujarat",
        date: "20 September 2022",
      },
    ],
  },
  {
    year: 2021,
    items: [
      {
        title: "Operations begin at Ghoraburhani-Sagasahi iron ore mine",
        location: "Odisha",
        date: "09 September 2021",
      },
      {
        title: "Second 6MT pellet plant commissioned in Odisha",
        location: "Paradeep",
        date: "02 September 2021",
      },
      {
        title: "Partnership with NSDC for digital training",
        location: "New Delhi",
        date: "12 August 2021",
      },
      {
        title: "MSME revival initiative with NSIC",
        location: "New Delhi",
        date: "13 September 2021",
      },
      {
        title: "Green hydrogen feasibility study launched",
        location: "Mumbai",
        date: "15 June 2021",
      },
    ],
  },
  {
    year: 2020,
    items: [
      {
        title: "ArcelorMittal announces 10 sustainable development outcomes aligned with UN SDGs",
        location: "Global",
        date: "26 May 2020",
      },
      {
        title: "Acquisition of Bhander Power plant",
        location: "Hazira",
        date: "03 March 2020",
      },
      {
        title: "Hypermart retail chain expansion to 50 outlets",
        location: "Mumbai",
        date: "13 October 2020",
      },
      {
        title: "Launch of new high-grade steels",
        location: "Mumbai",
        date: "16 October 2020",
      },
      {
        title: "COVID-19 relief: Sustainable community support programs",
        location: "India-wide",
        date: "01 April 2020",
      },
    ],
  },
  {
    year: 2019,
    items: [
      {
        title: "ArcelorMittal Nippon Steel completes acquisition of Essar Steel",
        location: "Mumbai",
        date: "16 December 2019",
      },
      {
        title: "Supreme Court approves acquisition of Essar Steel",
        location: "Mumbai",
        date: "18 November 2019",
      },
      {
        title: "Commitment to net-zero emissions by 2050 announced",
        location: "Global",
        date: "10 September 2019",
      },
    ],
  },
  {
    year: 2018,
    items: [
      {
        title: "Joint venture formed with Nippon Steel for Essar Steel acquisition",
        location: "Global / India",
        date: "02 February 2018",
      },
      {
        title: "India becomes second-largest steel producer",
        location: "India",
        date: "01 January 2018",
      },
      {
        title: "Early sustainability audits in supply chain implemented",
        location: "India",
        date: "15 November 2018",
      },
    ],
  },
  {
    year: 2017,
    items: [
      {
        title: "Bid submitted for Essar Steel under insolvency process",
        location: "India",
        date: "01 December 2017",
      },
      {
        title: "Nippon Steel's eco-friendly steel products advance",
        location: "Japan",
        date: "15 June 2017",
      },
      {
        title: "Global sustainability reporting standards adopted",
        location: "Global",
        date: "20 March 2017",
      },
    ],
  },
  {
    year: 2016,
    items: [
      {
        title: "New sustainability strategy for steel industry launched",
        location: "Global",
        date: "20 October 2016",
      },
      {
        title: "India's steel consumption grows with infrastructure push",
        location: "India",
        date: "05 April 2016",
      },
      {
        title: "Early carbon capture technology trials begin",
        location: "Europe / Asia",
        date: "10 August 2016",
      },
    ],
  },
];

export default function NewsroomTimeline() {
  const [activeYear, setActiveYear] = useState(2025);

  return (
    <section className="relative bg-[#0f0f0f] text-white py-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-red-900 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* LEFT – STICKY YEAR (Desktop only) */}
          <div className="hidden lg:flex items-center justify-center h-screen sticky top-0">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeYear}
                  initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.06, rotate: 4 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative"
                >
                  {/* Faint background year */}
                  <div className="absolute inset-0 flex items-center justify-center text-[360px] font-black text-white/4 select-none -top-20 -left-32">
                    {activeYear}
                  </div>

                  {/* Red slanted block */}
                  <div 
                    className="relative bg-red-600 px-32 py-24 shadow-2xl"
                    style={{
                      clipPath: "polygon(0% 0%, 94% 0%, 100% 100%, 6% 100%)",
                    }}
                  >
                    <span className="block text-[180px] lg:text-[220px] font-black text-white drop-shadow-2xl">
                      {activeYear}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT – NEWS CONTENT */}
          <div className="relative">
            <div className="text-center lg:text-left mb-20">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-500 font-medium">Newsroom</p>
            </div>

            <div className="space-y-64 lg:space-y-96">
              {newsData.map(({ year, items }) => {
                const ref = useRef(null);
                const isInView = useInView(ref, { 
                  rootMargin: "-200px 0px -200px 0px", 
                  once: false 
                });

                useEffect(() => {
                  if (isInView) {
                    setActiveYear(year);
                  }
                }, [isInView, year]);

                return (
                  <div key={year} ref={ref} className="scroll-mt-32 pb-32 lg:pb-48">
                    {/* Mobile Year Header */}
                    <div className="lg:hidden relative mb-20 text-center">
                      <div className="text-[180px] font-black text-white/5 absolute inset-0 flex items-center justify-center -top-16">
                        {year}
                      </div>
                      <div 
                        className="inline-block bg-red-600 px-20 py-12 shadow-2xl"
                        style={{ clipPath: "polygon(0% 0%, 94% 0%, 100% 100%, 6% 100%)" }}
                      >
                        <span className="text-[120px] font-black text-white">
                          {year}
                        </span>
                      </div>
                    </div>

                    {/* News Items */}
                    <div className="space-y-24">
                      {items.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.7, delay: i * 0.15 }}
                          className="group relative pl-8 border-l border-white/10 last:pb-0"
                        >
                          {/* Dot on the line */}
                          <div className="absolute left-0 top-2 w-3 h-3 bg-red-600 rounded-full -translate-x-1/2 scale-0 group-hover:scale-100 transition" />

                          <h3 className="text-xl lg:text-2xl font-medium leading-tight mb-5 group-hover:text-red-500 transition duration-300 pr-8">
                            {item.title}
                          </h3>

                          <div className="flex flex-wrap gap-x-10 gap-y-2 text-sm text-red-500 mb-6">
                            <span>{item.location}</span>
                            <span>{item.date}</span>
                          </div>

                          <motion.div
                            className="h-px bg-red-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <motion.button
              className="mt-24 text-sm tracking-widest uppercase text-gray-400 hover:text-red-500 transition duration-300 flex items-center gap-4 group"
              whileHover={{ x: 10 }}
            >
              View Full Archive
              <span className="text-red-500 text-xl group-hover:translate-x-2 transition">→</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}