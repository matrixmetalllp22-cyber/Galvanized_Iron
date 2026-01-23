
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const IndustriesSection = () => {
//   const navigate = useNavigate();

  
// const industries = [
//   {
//     id: "slitting",
//     name: "Slitting",
//     image: "/Images/Metal-Slitter-Machine-Line-2-700x394.webp",
//     description:
//       "High-precision steel slitting engineered for consistency and industrial performance.",
//   },
//   {
//     id: "cut-to-length",
//     name: "Cut-to-Length",
//     image: "/Images/Coil-Cut-to-Lengt.jpg",
//     description:
//       "Accurate CTL operations with optimized flatness for manufacturing and heavy fabrication.",
//   },
//   {
//     id: "packing",
//     name: "Packing",
//     image: "/Images/aluminium-sector.jpg",
//     description:
//       "Industrial-grade packing ensuring safe, stable, and protected coil transport.",
//   },
//   {
//     id: "blanking",
//     name: "Blanking",
//     image: "/Images/maxresdefault.jpg",
//     description:
//       "Highly accurate blanking operation ideal for automotive and precision engineering.",
//   },
// ];











  
//   const handleServiceClick = (serviceId) => {
//     navigate(`/services/${serviceId}`);
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
//       <div className="max-w-[1700px] mx-auto px-6">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center mb-16"
//         >
//           Our Services
//         </motion.h2>

//         {/* 2×2 GRID – WIDE, NOT CENTERED */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

//           {industries.map((industry, index) => (
//             <motion.div
//               key={industry.id}
//               initial={{ opacity: 0, y: 40, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
//               className="rounded-3xl overflow-hidden
//                          bg-gradient-to-br from-white via-gray-100 to-gray-200
//                          border border-gray-300
//                          shadow-[0_8px_20px_rgba(0,0,0,0.15)]
//                          hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]
//                          hover:-translate-y-2
//                          transition-all duration-500 cursor-pointer"
//             >
//               {/* Image */}
//               <motion.div
//                 className="h-56 md:h-64 overflow-hidden"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <img
//                   src={industry.image}
//                   alt={industry.name}
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>

//               {/* Content */}
//               <div className="p-8">
//                 <h3 className="text-2xl font-semibold text-gray-900">
//                   {industry.name}
//                 </h3>

//                 <p className="text-gray-600 text-sm mt-3 leading-relaxed mb-6">
//                   {industry.description}
//                 </p>

//                 {/* CTA Button */}
//                 <motion.button
//                   onClick={() => handleServiceClick(industry.id)}
//                   whileHover={{ scale: 1.08 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-gradient-to-r from-orange-600 to-orange-800 
//                              text-white px-6 py-3 rounded-xl text-sm font-medium
//                              shadow-lg hover:shadow-2xl transition-all duration-300"
//                 >
//                   Read More →
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default IndustriesSection;



// import React from "react";
// import { Link } from "react-router-dom";

// const values = [
//   {
//     title: "Interdependently Safe",
//     slug: "safety",
//     illustration: "/illustrations/safe.svg",
//     highlight: true,
//   },
//   {
//     title: "Endlessly Creative",
//     slug: "creativity",
//     illustration: "/illustrations/creative.svg",
//   },
//   {
//     title: "Consistently Excellent",
//     slug: "excellence",
//     illustration: "/illustrations/excellent.svg",
//   },
//   {
//     title: "Forever Dynamic",
//     slug: "dynamic",
//     illustration: "/illustrations/dynamic.svg",
//   },
//   {
//     title: "Always Collaborative",
//     slug: "collaboration",
//     illustration: "/illustrations/collaborative.svg",
//   },
// ];

// export default function IndustriesSection() {
//   return (
//     <section className="py-28 bg-[#1f2023] text-white">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section label */}
//         <p className="text-center text-gray-400 tracking-widest uppercase mb-6">
//           Company
//         </p>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
//           {values.map((item) => (
//             <Link
//               key={item.slug}
//               to={`/company/${item.slug}`}
//               aria-label={item.title}
//               className={`group relative block p-6 bg-[#2a2b2f] border transition-all duration-300
//                 ${
//                   item.highlight
//                     ? "border-orange-500"
//                     : "border-gray-700"
//                 }
//                 hover:border-orange-500 hover:bg-[#303136]
//                 focus:outline-none focus:ring-2 focus:ring-orange-500`}
//             >
//               {/* Illustration */}
//               <div className="mb-6 flex justify-center">
//                 <img
//                   src={item.illustration}
//                   alt={item.title}
//                   className="w-28 h-28 opacity-90 group-hover:opacity-100 transition"
//                 />
//               </div>

//               {/* Title */}
//               <h3
//                 className={`text-lg font-medium tracking-wide transition-colors duration-300
//                   ${
//                     item.highlight
//                       ? "text-orange-400"
//                       : "text-gray-200 group-hover:text-orange-400"
//                   }`}
//               >
//                 {item.title}
//               </h3>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// import React from "react";
// import { Link } from "react-router-dom";

// const values = [
//   {
//     title: "Interdependently Safe",
//     slug: "safety",
//     illustration: "/illustrations/safe.svg",
//     highlight: true,
//   },
//   {
//     title: "Endlessly Creative",
//     slug: "creativity",
//     illustration: "/illustrations/creative.svg",
//   },
//   {
//     title: "Consistently Excellent",
//     slug: "excellence",
//     illustration: "/illustrations/excellent.svg",
//   },
//   {
//     title: "Forever Dynamic",
//     slug: "dynamic",
//     illustration: "/illustrations/dynamic.svg",
//   },
//   {
//     title: "Always Collaborative",
//     slug: "collaboration",
//     illustration: "/illustrations/collaborative.svg",
//   },
// ];

// export default function IndustriesSection() {
//   return (
//     <section className="py-28 bg-[#1f2023] text-white">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section label */}
//         <p className="text-center text-gray-400 tracking-widest uppercase mb-6">
//           Company
//         </p>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
//           {values.map((item) => (
//             <Link
//               key={item.slug}
//               to={`/company/${item.slug}`}
//               aria-label={item.title}
//               className={`group relative block p-6 bg-[#2a2b2f] border transition-all duration-300
//                 ${
//                   item.highlight
//                     ? "border-orange-500"
//                     : "border-gray-700"
//                 }
//                 hover:border-orange-500 hover:bg-[#303136]
//                 focus:outline-none focus:ring-2 focus:ring-orange-500`}
//             >
//               {/* Illustration */}
//               <div className="mb-6 flex justify-center">
//                 <img
//                   src={item.illustration}
//                   alt={item.title}
//                   className="w-28 h-28 opacity-90 group-hover:opacity-100 transition"
//                 />
//               </div>

//               {/* Title */}
//               <h3
//                 className={`text-lg font-medium tracking-wide transition-colors duration-300
//                   ${
//                     item.highlight
//                       ? "text-orange-400"
//                       : "text-gray-200 group-hover:text-orange-400"
//                   }`}
//               >
//                 {item.title}
//               </h3>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const IndustriesSection = () => {
//   const navigate = useNavigate();

  
// const industries = [
//   {
//     id: "slitting",
//     name: "Slitting",
//     image: "/Images/Metal-Slitter-Machine-Line-2-700x394.webp",
//     description:
//       "High-precision steel slitting engineered for consistency and industrial performance.",
//   },
//   {
//     id: "cut-to-length",
//     name: "Cut-to-Length",
//     image: "/Images/Coil-Cut-to-Lengt.jpg",
//     description:
//       "Accurate CTL operations with optimized flatness for manufacturing and heavy fabrication.",
//   },
//   {
//     id: "packing",
//     name: "Packing",
//     image: "/Images/aluminium-sector.jpg",
//     description:
//       "Industrial-grade packing ensuring safe, stable, and protected coil transport.",
//   },
//   {
//     id: "blanking",
//     name: "Blanking",
//     image: "/Images/maxresdefault.jpg",
//     description:
//       "Highly accurate blanking operation ideal for automotive and precision engineering.",
//   },
// ];









// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

  
//   const handleServiceClick = (serviceId) => {
//     navigate(`/services/${serviceId}`);
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
//       <div className="max-w-[1700px] mx-auto px-6">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center mb-16"
//         >
//           Our Services
//         </motion.h2>

//         {/* 2×2 GRID – WIDE, NOT CENTERED */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

//           {industries.map((industry, index) => (
//             <motion.div
//               key={industry.id}
//               initial={{ opacity: 0, y: 40, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
//               className="rounded-3xl overflow-hidden
//                          bg-gradient-to-br from-white via-gray-100 to-gray-200
//                          border border-gray-300
//                          shadow-[0_8px_20px_rgba(0,0,0,0.15)]
//                          hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]
//                          hover:-translate-y-2
//                          transition-all duration-500 cursor-pointer"
//             >
//               {/* Image */}
//               <motion.div
//                 className="h-56 md:h-64 overflow-hidden"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <img
//                   src={industry.image}
//                   alt={industry.name}
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>

//               {/* Content */}
//               <div className="p-8">
//                 <h3 className="text-2xl font-semibold text-gray-900">
//                   {industry.name}
//                 </h3>

//                 <p className="text-gray-600 text-sm mt-3 leading-relaxed mb-6">
//                   {industry.description}
//                 </p>

//                 {/* CTA Button */}
//                 <motion.button
//                   onClick={() => handleServiceClick(industry.id)}
//                   whileHover={{ scale: 1.08 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-gradient-to-r from-orange-600 to-orange-800 
//                              text-white px-6 py-3 rounded-xl text-sm font-medium
//                              shadow-lg hover:shadow-2xl transition-all duration-300"
//                 >
//                   Read More →
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );

// export default IndustriesSection;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// // Example data (make sure this exists or import it)
// const industries = [
//   {
//     id: "slitting",
//     name: "Slitting Services",
//     description: "High-precision metal slitting solutions.",
//     image: "/Images/slitting.jpg",
//   },
//   {
//     id: "cut-to-length",
//     name: "Cut To Length",
//     description: "Accurate cut-to-length processing.",
//     image: "/Images/cut.jpg",
//   },
//   {
//     id: "packing",
//     name: "Packing",
//     description: "Secure and customized packing services.",
//     image: "/Images/packing.jpg",
//   },
//   {
//     id: "blanking",
//     name: "Blanking",
//     description: "Advanced blanking solutions for industries.",
//     image: "/Images/blanking.jpg",
//   },
// ];

// export default function IndustriesSection() {
//   const navigate = useNavigate();

//   const handleServiceClick = (serviceId) => {
//     navigate(`/services/${serviceId}`);
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-black  to-gray-500">
//       <div className="max-w-[1700px] mx-auto px-6">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl md:text-6xl font-extrabold text-white text-center mb-16"
//         >
//           Our Services
//         </motion.h2>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
//           {industries.map((industry, index) => (
//             <motion.div
//               key={industry.id}
//               initial={{ opacity: 0, y: 40, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.15 }}
//               className="rounded-3xl overflow-hidden
//                          bg-gradient-to-br from-black via-gray-50 to-gray-100
//                          border border-gray-300
//                          shadow-[0_8px_20px_rgba(0,0,0,0.15)]
//                          hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]
//                          hover:-translate-y-2
//                          transition-all duration-500 cursor-pointer"
//             >
//               {/* Image */}
//               <div className="h-56 md:h-64 overflow-hidden">
//                 <img
//                   src={industry.image}
//                   alt={industry.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-8">
//                 <h3 className="text-2xl font-semibold text-gray-900">
//                   {industry.name}
//                 </h3>

//                 <p className="text-gray-600 text-sm mt-3 leading-relaxed mb-6">
//                   {industry.description}
//                 </p>

//                 <motion.button
//                   onClick={() => handleServiceClick(industry.id)}
//                   whileHover={{ scale: 1.08 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-gradient-to-r from-orange-600 to-orange-800 
//                              text-white px-6 py-3 rounded-xl text-sm font-medium
//                              shadow-lg hover:shadow-2xl transition-all duration-300"
//                 >
//                   Read More →
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Same data – unchanged
const industries = [
  {
    id: "slitting",
    name: "Slitting Services",
    description: "High-precision metal slitting solutions.",
    image: "/Images/slitting.jpg",
  },
  {
    id: "cut-to-length",
    name: "Cut To Length",
    description: "Accurate cut-to-length processing.",
    image: "/Images/Coil-Cut-to-Lengt.jpg",
  },
  {
    id: "packing",
    name: "Packing",
    description: "Secure and customized packing services.",
    image: "/Images/Horizontal-Flow-Packing-Machine.webp",
  },
  {
    id: "blanking",
    name: "Blanking",
    description: "Advanced blanking solutions for industries.",
    image: "/Images/blanking.jpg",
  },
];

export default function IndustriesSection() {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-black">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center mb-12 sm:mb-16 md:mb-20"
        >
          Our Services
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 md:gap-14">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[420px] rounded-2xl sm:rounded-[32px] overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={industry.image}
                alt={industry.name}
                className="absolute inset-0 w-full h-full object-cover 
                           scale-105 group-hover:scale-110 transition-transform duration-700"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t 
                              from-black via-black/70 to-transparent" />

              {/* Glass Card Content */}
              <div className="absolute bottom-0 p-6 sm:p-8 md:p-10 w-full
                              backdrop-blur-xl bg-white/10 border-t border-white/20
                              translate-y-16 sm:translate-y-20 md:translate-y-28 group-hover:translate-y-0
                              transition-transform duration-700">

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
                  {industry.name}
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  {industry.description}
                </p>

                <motion.button
                  onClick={() => handleServiceClick(industry.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2
                             bg-orange-600 hover:bg-orange-700
                             text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full
                             text-xs sm:text-sm font-semibold tracking-wide
                             shadow-lg transition-all duration-300"
                >
                  Explore Service →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}