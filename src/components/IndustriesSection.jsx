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
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-black">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
        >
          Our Services
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative h-[250px] xs:h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[440px] rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer"
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
              <div className="absolute bottom-0 p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 w-full
                              backdrop-blur-xl bg-white/10 border-t border-white/20
                              translate-y-12 xs:translate-y-14 sm:translate-y-16 md:translate-y-20 lg:translate-y-24 xl:translate-y-28 group-hover:translate-y-0
                              transition-transform duration-700">

                <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-1 xs:mb-2 sm:mb-3">
                  {industry.name}
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-3 xs:mb-4 sm:mb-6">
                  {industry.description}
                </p>

                <motion.button
                  onClick={() => handleServiceClick(industry.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-1 xs:gap-2
                             bg-orange-600 hover:bg-orange-700
                             text-white px-3 py-1 xs:px-4 xs:py-2 sm:px-6 sm:py-3 rounded-full
                             text-xs sm:text-sm md:text-base font-semibold tracking-wide
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

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// // Same data – unchanged
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
//     image: "/Images/Coil-Cut-to-Lengt.jpg",
//   },
//   {
//     id: "packing",
//     name: "Packing",
//     description: "Secure and customized packing services.",
//     image: "/Images/Horizontal-Flow-Packing-Machine.webp",
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
//     <section className="relative py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 bg-black overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
//       <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-orange-500/10 to-transparent" />
      
//       <div className="relative max-w-[1800px] mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true, margin: "-50px" }}
//           className="text-center mb-10 xs:mb-12 sm:mb-14 md:mb-16 lg:mb-18"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 xs:mb-5 sm:mb-6">
//             <span className="text-xs xs:text-sm uppercase tracking-widest text-orange-400 font-medium">
//               Our Expertise
//             </span>
//           </div>
          
//           <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 xs:mb-4">
//             Our <span className="text-orange-400">Services</span>
//           </h2>
          
//           <p className="text-gray-300 text-sm xs:text-base sm:text-lg max-w-2xl mx-auto px-4">
//             Precision metal processing solutions for industries worldwide
//           </p>
//         </motion.div>

//         {/* Grid Container */}
//         <div className="relative">
//           {/* Grid */}
//           <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10">
//             {industries.map((industry, index) => (
//               <motion.div
//                 key={industry.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ 
//                   duration: 0.6, 
//                   delay: index * 0.15,
//                   ease: "easeOut" 
//                 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 className="group relative aspect-[4/3] xs:aspect-[3/4] sm:aspect-square md:aspect-[4/3] lg:aspect-[5/4] 
//                            rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer
//                            bg-gradient-to-br from-gray-900/50 to-black/50
//                            border border-white/10 backdrop-blur-sm"
//               >
//                 {/* Background Image */}
//                 <div className="absolute inset-0 overflow-hidden">
//                   <img
//                     src={industry.image}
//                     alt={industry.name}
//                     className="w-full h-full object-cover 
//                                scale-105 group-hover:scale-110 transition-transform duration-700"
//                     loading="lazy"
//                   />
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t 
//                                   from-black via-black/70 to-transparent" />
                  
//                   {/* Hover Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-orange-500/0 via-orange-500/0 to-orange-500/0 
//                                   group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-transparent 
//                                   transition-all duration-500" />
//                 </div>

//                 {/* Glass Card Content */}
//                 <div className="absolute inset-0 p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col justify-end
//                                 bg-gradient-to-t from-black/90 via-black/50 to-transparent
//                                 transform translate-y-0 group-hover:translate-y-0
//                                 transition-transform duration-500">
                  
//                   {/* Content Container */}
//                   <div className="transform translate-y-4 xs:translate-y-6 sm:translate-y-8 md:translate-y-10 
//                                   group-hover:translate-y-0 transition-transform duration-500">
//                     <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 xs:mb-2">
//                       {industry.name}
//                     </h3>

//                     <p className="text-gray-300 text-xs xs:text-sm leading-relaxed mb-3 xs:mb-4 sm:mb-5 
//                                   line-clamp-2 xs:line-clamp-3">
//                       {industry.description}
//                     </p>

//                     <motion.button
//                       onClick={() => handleServiceClick(industry.id)}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="inline-flex items-center gap-1 xs:gap-2
//                                  bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700
//                                  text-white px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 sm:py-2.5 rounded-full
//                                  text-xs xs:text-sm font-medium tracking-wide
//                                  shadow-lg hover:shadow-orange-500/30 transition-all duration-300
//                                  border border-orange-500/30"
//                     >
//                       <span>Explore</span>
//                       <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
//                     </motion.button>
//                   </div>
//                 </div>

//                 {/* Hover Indicator */}
//                 <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 
//                                 group-hover:w-full transition-all duration-500" />
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           viewport={{ once: true, margin: "-50px" }}
//           className="mt-10 xs:mt-12 sm:mt-14 md:mt-16 lg:mt-20 text-center"
//         >
//           <p className="text-gray-300 text-sm xs:text-base sm:text-lg mb-4 xs:mb-6">
//             Need a custom solution? Contact our team for specialized requirements.
//           </p>
//           <button 
//             onClick={() => navigate('/contact')}
//             className="inline-flex items-center gap-2
//                        px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-3.5
//                        bg-white/10 hover:bg-white/20 border border-white/20
//                        text-white text-sm xs:text-base font-medium rounded-full
//                        transition-all duration-300 hover:scale-105"
//           >
//             <span>Get in Touch</span>
//             <span className="text-orange-400">→</span>
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }