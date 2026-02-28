// import React, { useMemo, useState } from "react";
// import { motion } from "framer-motion";

// const logoFiles = [
//   "Anjanadri Weld and Fabrications.png",
//   "Anupam Aroma Stainless kitchenware.png",
//   "BCH Enclosures – Industrial grade stainless enclosures.png",
//   "BMM Ispat Ltd.png",
//   "Bosch Chassis Systems India.png",
//   "Bosch Rexroth company.png",
//   "Creators Fab and Interiors – Stainless fabrication.png",
//   "EC Box India – Electrical & instrument coating boxes (metal fabrication).png",
//   "Electronic & Industrial Equipment Manufacturer.png",
//   "Fine Punch Fab Pvt Ltd Precision sheet.png",
//   "Hampson Industries Pvt Ltd – engineered goods manufacturing.png",
//   "Hi Coat Wires – Stainless product manufacturing.png",
//   "Hi-Tec Fabs – Stainless steel fabrication.png",
//   "Hitech Laser – laser-cut stainless components.png",
//   "Horizon Stainless Steel premium utensil range.png",
//   "KIOCL Ltd headquartered mineral.png",
//   "Legrand India Pvt Ltd.png",
//   "Load Controls India Pvt Ltd.png",
//   "Mahesh Distributors (SS products).png",
//   "Meddent (stainless surgical products supplier).png",
//   "Metline Industries – stainless sheets supplier & processing.png",
//   "Ns Automats – precision components.png",
//   "Om Sakthi Industries – industrial component parts.png",
//   "Pal Engineering Co. – fabricators using SS.png",
//   "Pentair  Modutec Ready Panels Pvt Ltd.png",
//   "Pentair Technical Products India Pvt Ltd.png",
//   "PRK Fabricators Pvt Ltd – Sheet metal & stainless products.png",
//   "Rittal India Pvt Ltd.png",
//   "RJ Engineering Enterprises – Fabrication & finishing.png",
//   "S B Fab Tech – sheet metal & enclosures.png",
//   "S. L. V. Engineering – Fabrication & SS product maker.png",
//   "Siva Rollers – Stainless steel industrial roller manufacturer.png",
//   "SLN Fabricators – Stainless steel tank & CNC precision components.png",
//   "Sunvik Steels Pvt Ltd.png",
//   "Unilink Enterprises – Stainless fabrication services.png",
//   "Veltech Equipments – Industrial metal products.png",
//   "Yaskawa India Pvt Ltd.png",
//   "Siemens.png",
//   "Hitachi.png",
// ];

// const baseClients = logoFiles.map((fileName) => ({
//   name: fileName.replace(/\.[^/.]+$/, "").split(/[–\-/(]/)[0].trim(),
//   logo: encodeURI(`/Images/${fileName}`),
// }));

// const repeatThreeTimes = (items) => [...items, ...items, ...items];

// export default function ClientsSection() {
//   const [paused, setPaused] = useState(false);

//   const row1 = useMemo(() => repeatThreeTimes(baseClients), []);
//   const row2 = useMemo(() => repeatThreeTimes([...baseClients].reverse()), []);
//   const row3 = useMemo(() => {
//     const shuffled = [...baseClients].sort(() => 0.5 - Math.random());
//     return repeatThreeTimes(shuffled);
//   }, []);

//   return (
//     <section className="py-12 md:py-24 bg-gray-900 relative overflow-hidden">
//       <div className="max-w-[1600px] mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
//             Our <span className="text-orange-500">Global</span> Partners
//           </h2>
//           <div className="h-1 w-20 bg-orange-600 mx-auto rounded-full" />
//         </div>

//         <div
//           className="flex flex-col gap-4 md:gap-8 cursor-grab active:cursor-grabbing"
//           onMouseEnter={() => setPaused(true)}
//           onMouseLeave={() => setPaused(false)}
//           onTouchStart={() => setPaused(true)}
//           onTouchEnd={() => setPaused(false)}
//         >
//           <MarqueeRow items={row1} direction="left" speed={50} paused={paused} />
//           <MarqueeRow items={row2} direction="right" speed={65} paused={paused} />
//           <MarqueeRow items={row3} direction="left" speed={80} paused={paused} />
//         </div>

//         <div className="absolute left-0 top-0 h-full w-20 md:w-60 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent pointer-events-none z-10" />
//         <div className="absolute right-0 top-0 h-full w-20 md:w-60 bg-gradient-to-l from-gray-900 via-gray-900/40 to-transparent pointer-events-none z-10" />
//       </div>
//     </section>
//   );
// }

// function MarqueeRow({ items, direction, speed, paused }) {
//   const isLeft = direction === "left";

//   return (
//     <div className="flex overflow-hidden group">
//       <motion.div
//         className="flex items-center gap-4 md:gap-8 pr-4 md:pr-8"
//         animate={{
//           x: paused ? "0%" : isLeft ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
//         }}
//         transition={{
//           repeat: Infinity,
//           duration: speed,
//           ease: "linear",
//         }}
//         style={{ width: "max-content" }}
//       >
//         {items.map((item, i) => (
//           <div key={`${direction}-${i}`} className="flex-shrink-0">
//             <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl w-32 h-24 md:w-56 md:h-36 flex flex-col items-center justify-center p-4 hover:border-orange-500/50 hover:bg-gray-800 transition-all duration-300">
//               <div className="h-full w-full flex items-center justify-center overflow-hidden">
//                 <img
//                   src={item.logo}
//                   alt={item.name}
//                   className="max-w-[85%] max-h-[70%] object-contain opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale hover:grayscale-0"
//                   loading="lazy"
//                 />
//               </div>
//               <p className="mt-2 text-[9px] md:text-xs font-semibold text-gray-500 uppercase tracking-widest truncate w-full text-center">
//                 {item.name}
//               </p>
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }










import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

const logoFiles = [
  "Anjanadri Weld and Fabrications.png", "Anupam Aroma Stainless kitchenware.png",
  "BCH Enclosures – Industrial grade stainless enclosures.png", "BMM Ispat Ltd.png",
  "Bosch Chassis Systems India.png", "Bosch Rexroth company.png",
  "Creators Fab and Interiors – Stainless fabrication.png", "EC Box India – Electrical & instrument coating boxes (metal fabrication).png",
  "Electronic & Industrial Equipment Manufacturer.png", "Fine Punch Fab Pvt Ltd Precision sheet.png",
  "Hampson Industries Pvt Ltd – engineered goods manufacturing.png", "Hi Coat Wires – Stainless product manufacturing.png",
  "Hi-Tec Fabs – Stainless steel fabrication.png", "Hitech Laser – laser-cut stainless components.png",
  "Horizon Stainless Steel premium utensil range.png", "KIOCL Ltd headquartered mineral.png",
  "Legrand India Pvt Ltd.png", "Load Controls India Pvt Ltd.png",
  "Mahesh Distributors (SS products).png", "Meddent (stainless surgical products supplier).png",
  "Metline Industries – stainless sheets supplier & processing.png", "Ns Automats – precision components.png",
  "Om Sakthi Industries – industrial component parts.png", "Pal Engineering Co. – fabricators using SS.png",
  "Pentair  Modutec Ready Panels Pvt Ltd.png", "Pentair Technical Products India Pvt Ltd.png",
  "PRK Fabricators Pvt Ltd – Sheet metal & stainless products.png", "Rittal India Pvt Ltd.png",
  "RJ Engineering Enterprises – Fabrication & finishing.png", "S B Fab Tech – sheet metal & enclosures.png",
  "S. L. V. Engineering – Fabrication & SS product maker.png", "Siva Rollers – Stainless steel industrial roller manufacturer.png",
  "SLN Fabricators – Stainless steel tank & CNC precision components.png", "Sunvik Steels Pvt Ltd.png",
  "Unilink Enterprises – Stainless fabrication services.png", "Veltech Equipments – Industrial metal products.png",
  "Yaskawa India Pvt Ltd.png", "Siemens.png", "Hitachi.png",
];

const baseClients = logoFiles.map((fileName) => ({
  name: fileName.replace(/\.[^/.]+$/, "").split(/[–\-/(]/)[0].trim(),
  logo: encodeURI(`/Images/${fileName}`),
}));

export default function ClientsSection() {
  const [paused, setPaused] = useState(false);

  // Split data into 3 distinct sets
  const row1 = useMemo(() => [...baseClients, ...baseClients], []);
  const row2 = useMemo(() => [...baseClients].reverse().concat([...baseClients].reverse()), []);
  const row3 = useMemo(() => {
    // Offset the start for the 3rd row
    const offset = Math.floor(baseClients.length / 2);
    const splitData = [...baseClients.slice(offset), ...baseClients.slice(0, offset)];
    return [...splitData, ...splitData];
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#1a222e] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4">
        
        {/* Header - Matching Image 1 Style */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#b45309] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            We proudly serve world-class automotive and manufacturing companies.
          </p>
        </div>

        <div 
          className="flex flex-col gap-6 md:gap-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <MarqueeRow items={row1} direction="left" speed={60} paused={paused} />
          <MarqueeRow items={row2} direction="right" speed={70} paused={paused} />
          <div className="hidden sm:block">
             <MarqueeRow items={row3} direction="left" speed={80} paused={paused} />
          </div>
        </div>

        {/* Side Fades - Adjusted for the dark background */}
        <div className="absolute left-0 top-0 h-full w-20 md:w-48 bg-gradient-to-r from-[#1a222e] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 h-full w-20 md:w-48 bg-gradient-to-l from-[#1a222e] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}

function MarqueeRow({ items, direction, speed, paused }) {
  const isLeft = direction === "left";
  
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex items-center gap-6 md:gap-10"
        animate={{ x: paused ? "0" : isLeft ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
        style={{ width: "max-content" }}
      >
        {items.map((item, i) => (
          <div key={`${direction}-${i}`} className="flex-shrink-0">
            {/* Card Styling - Bright White with Subtle Shadow */}
            <div className="bg-white rounded-2xl w-36 h-28 md:w-56 md:h-44 flex flex-col items-center justify-center p-4 shadow-lg">
              <div className="h-2/3 w-full flex items-center justify-center overflow-hidden">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-[10px] md:text-xs font-semibold text-gray-500 text-center truncate w-full px-2">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}