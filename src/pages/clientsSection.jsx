// import React from "react";
// import { motion } from "framer-motion";

// const clients = [
//   { name: "Tata Motors", logo: "/Logos/TVS-Motor-Company.png" },
//   { name: "Bosch", logo: "/Logos/Ola-Cabs-Logo.png" },
//   { name: "Bajaj", logo: "/Logos/Wave_mec.png" },
//   { name: "Maruti Suzuki", logo: "/Logos/Taal.png" },
//   { name: "Mahindra", logo: "/Logos/Boeing.png" },
//   { name: "Hyundai", logo: "/Logos/BEML.png" },
//   { name: "Hero MotoCorp", logo: "/Logos/DRDO.png" },
//   { name: "TVS", logo: "/Logos/mg.png" },
//   { name: "Ashok Leyland", logo: "/Logos/indian_railways.png" },
//   { name: "Volvo Eicher", logo: "/Logos/General_Electric.png" },
//   { name: "TVS", logo: "/Logos/Siemens.png" },
//   { name: "Ashok Leyland", logo: "/Logos/Hitachi.png" },
//   { name: "Volvo Eicher", logo: "/Logos/AEQUS.png" },
//   { name: "Ashok Leyland", logo: "/Logos/garuda.png" },
//   { name: "Volvo Eicher", logo: "/Logos/AEQUS.png" },
// ];

// export default function ClientsSlider() {
//   return (
//     <div className="py-16 bg-black text-center relative overflow-hidden">
//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12">
//         Our Esteemed Customers
//       </h2>

//       <div className="overflow-hidden w-full">
//         <motion.div
//           className="flex items-center gap-12 sm:gap-16 whitespace-nowrap"
//           animate={{ x: ["0%", "-100%"] }}
//           transition={{
//             repeat: Infinity,
//             duration: 40,
//             ease: "linear",
//           }}
//         >
//           {[...clients, ...clients, ...clients].map((client, i) => (
//             <div
//               key={i}
//               className="shrink-0 p-4 sm:p-6 rounded-xl bg-gray-900 border border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300"
//             >
//               <img
//                 src={client.logo}
//                 alt={client.name}
//                 className="w-32 h-20 sm:w-40 sm:h-24 md:w-48 md:h-28 object-contain mx-auto transition-all duration-500 hover:scale-110"
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Left & Right Fade Gradient */}
//       <div className="absolute left-0 top-0 w-16 sm:w-24 h-full bg-linear-to-r from-black to-transparent pointer-events-none" />
//       <div className="absolute right-0 top-0 w-16 sm:w-24 h-full bg-linear-to-l from-black to-transparent pointer-events-none" />
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";

const clients = [
  { name: "Tata Motors", logo: "/Logos/TVS-Motor-Company.png" },
  { name: "Bosch", logo: "/Logos/Ola-Cabs-Logo.png" },
  { name: "Bajaj", logo: "/Logos/Wave_mec.png" },
  { name: "Maruti Suzuki", logo: "/Logos/Taal.png" },
  { name: "Mahindra", logo: "/Logos/Boeing.png" },
  { name: "Hyundai", logo: "/Logos/BEML.png" },
  { name: "Hero MotoCorp", logo: "/Logos/DRDO.png" },
  { name: "TVS", logo: "/Logos/mg.png" },
  { name: "Ashok Leyland", logo: "/Logos/indian_railways.png" },
  { name: "Volvo Eicher", logo: "/Logos/General_Electric.png" },
  { name: "Siemens", logo: "/Logos/Siemens.png" },
  { name: "Hitachi", logo: "/Logos/Hitachi.png" },
  { name: "AEQUS", logo: "/Logos/AEQUS.png" },
  { name: "Garuda", logo: "/Logos/garuda.png" },
];

export default function ClientsSlider() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-16 px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Our Esteemed Customers
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
          Trusted by industry leaders across automotive, aerospace, defense and
          manufacturing sectors.
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 45,
            ease: "linear",
          }}
        >
          {[...clients, ...clients].map((client, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="group relative shrink-0"
            >
              {/* Card */}
              <div className="w-56 h-36 sm:w-64 sm:h-40 md:w-72 md:h-44 
                rounded-2xl border border-white/10 
                bg-white/5 backdrop-blur-xl
                flex items-center justify-center
                shadow-[0_0_30px_rgba(255,255,255,0.05)]
                transition-all duration-500
                group-hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]
              ">
                <motion.img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-[75%] max-h-[65%] object-contain 
                    opacity-80 group-hover:opacity-100 transition-all duration-500"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 
                group-hover:opacity-100 transition duration-500
                bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Edge Fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent" />
    </section>
  );
}
