// // // import React from "react";

// // // const newsData = [
// // //   {
// // //     title:
// // //       "AM/NS India wins top innovation award at NECA 2025, showcasing commitment to decarbonisation and energy leadership",
// // //     location: "New Delhi / Hazira",
// // //     date: "December 2025",
// // //   },
// // //   {
// // //     title:
// // //       "AM/NS India accelerates circularity and low-carbon emissions steelmaking",
// // //     location: "Mumbai / Delhi",
// // //     date: "November 2025",
// // //   },
// // //   {
// // //     title:
// // //       "AM/NS India first to secure CSIR–CRRI’s breakthrough steel slag aggregates technology license to unlock ‘Waste-to-Wealth’ potential in road infrastructure development",
// // //     location: "Delhi / Mumbai",
// // //     date: "July 2025",
// // //   },
// // // ];

// // // const Newsroom2025 = () => {
// // //   return (
// // //     <section className="relative bg-[#1f1f1f] text-white overflow-hidden">
// // //       <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
// // //         {/* LEFT – YEAR DESIGN */}
// // //         <div className="relative h-[300px] lg:h-[420px] flex items-center">
// // //           <div className="absolute text-[180px] lg:text-[260px] font-bold text-white/5 -top-10 left-0">
// // //             2025
// // //           </div>

// // //           <div className="relative bg-red-600 skew-x-[-12deg] px-20 py-16">
// // //             <span className="block text-[100px] lg:text-[140px] font-bold text-white skew-x-[12deg]">
// // //               2025
// // //             </span>
// // //           </div>
// // //         </div>

// // //         {/* RIGHT – NEWS LIST */}
// // //         <div>
// // //           <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">
// // //             Newsroom
// // //           </p>

// // //           <div className="space-y-10">
// // //             {newsData.map((item, index) => (
// // //               <div
// // //                 key={index}
// // //                 className="border-b border-white/10 pb-8"
// // //               >
// // //                 <h3 className="text-lg lg:text-xl font-medium leading-relaxed mb-3">
// // //                   {item.title}
// // //                 </h3>

// // //                 <div className="flex gap-8 text-sm text-red-500">
// // //                   <span>{item.location}</span>
// // //                   <span>{item.date}</span>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           <button className="mt-10 text-sm tracking-widest uppercase text-white hover:text-red-500 transition">
// // //             View All
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Newsroom2025;


// // import React from "react";
// // import { motion } from "framer-motion";

// // const newsData = [
// //   {
// //     title:
// //       "AM/NS India wins top innovation award at NECA 2025, showcasing commitment to decarbonisation and energy leadership",
// //     location: "New Delhi / Hazira",
// //     date: "December 2025",
// //   },
// //   {
// //     title:
// //       "AM/NS India accelerates circularity and low-carbon emissions steelmaking",
// //     location: "Mumbai / Delhi",
// //     date: "November 2025",
// //   },
// //   {
// //     title:
// //       "AM/NS India first to secure CSIR–CRRI’s breakthrough steel slag aggregates technology license to unlock ‘Waste-to-Wealth’ potential in road infrastructure development",
// //     location: "Delhi / Mumbai",
// //     date: "July 2025",
// //   },
// // ];

// // /* Animations */
// // const container = {
// //   hidden: { opacity: 0 },
// //   show: {
// //     opacity: 1,
// //     transition: { staggerChildren: 0.2 },
// //   },
// // };

// // const item = {
// //   hidden: { opacity: 0, y: 20 },
// //   show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// // };

// // const Newsroom2025 = () => {
// //   return (
// //     <section className="relative bg-[#1f1f1f] text-white overflow-hidden">
// //       <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

// //         {/* LEFT – YEAR */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -40 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="relative h-[300px] lg:h-[420px] flex items-center"
// //         >
// //           <div className="absolute text-[180px] lg:text-[260px] font-bold text-white/5 -top-10 left-0">
// //             2025
// //           </div>

// //           <div className="relative bg-red-600 skew-x-[-12deg] px-20 py-16">
// //             <span className="block text-[100px] lg:text-[140px] font-bold text-white skew-x-[12deg]">
// //               2025
// //             </span>
// //           </div>
// //         </motion.div>

// //         {/* RIGHT – NEWS */}
// //         <div>
// //           <motion.p
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.3 }}
// //             className="text-sm uppercase tracking-widest text-gray-400 mb-6"
// //           >
// //             Newsroom
// //           </motion.p>

// //           <motion.div
// //             variants={container}
// //             initial="hidden"
// //             animate="show"
// //             className="space-y-10"
// //           >
// //             {newsData.map((itemData, index) => (
// //               <motion.div
// //                 key={index}
// //                 variants={item}
// //                 whileHover={{
// //                   y: -6,
// //                   transition: { duration: 0.3 },
// //                 }}
// //                 className="group border-b border-white/10 pb-8 cursor-pointer"
// //               >
// //                 <h3 className="text-lg lg:text-xl font-medium leading-relaxed mb-3 group-hover:text-red-500 transition-colors duration-300">
// //                   {itemData.title}
// //                 </h3>

// //                 <div className="flex gap-8 text-sm text-red-500">
// //                   <span>{itemData.location}</span>
// //                   <span>{itemData.date}</span>
// //                 </div>

// //                 {/* Hover underline */}
// //                 <motion.div
// //                   initial={{ width: 0 }}
// //                   whileHover={{ width: "100%" }}
// //                   transition={{ duration: 0.4 }}
// //                   className="h-[2px] bg-red-600 mt-4"
// //                 />
// //               </motion.div>
// //             ))}
// //           </motion.div>

// //           {/* VIEW ALL */}
// //           <motion.button
// //             whileHover={{ x: 6 }}
// //             transition={{ duration: 0.3 }}
// //             className="mt-10 text-sm tracking-widest uppercase text-white hover:text-red-500 transition"
// //           >
// //             View All →
// //           </motion.button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Newsroom2025;




// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const newsData = [
//   {
//     title:
//       "AM/NS India wins top innovation award at NECA 2025, showcasing commitment to decarbonisation and energy leadership",
//     location: "New Delhi / Hazira",
//     date: "December 2025",
//   },
//   {
//     title:
//       "AM/NS India accelerates circularity and low-carbon emissions steelmaking",
//     location: "Mumbai / Delhi",
//     date: "November 2025",
//   },
//   {
//     title:
//       "AM/NS India first to secure CSIR–CRRI’s breakthrough steel slag aggregates technology license to unlock ‘Waste-to-Wealth’ potential in road infrastructure development",
//     location: "Delhi / Mumbai",
//     date: "July 2025",
//   },
// ];

// const Newsroom2025 = () => {
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start center", "end center"],
//   });

//   /* SUBTLE, PREMIUM TRANSFORMS */
//   const fadeOut = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
//   const fadeIn = useTransform(scrollYProgress, [0.45, 1], [0, 1]);

//   const scaleDown = useTransform(scrollYProgress, [0, 0.45], [1, 0.96]);
//   const scaleUp = useTransform(scrollYProgress, [0.45, 1], [0.96, 1]);

//   const yMove = useTransform(scrollYProgress, [0, 1], [0, -20]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-[#1f1f1f] text-white overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT – YEAR */}
//         <div className="relative h-[320px] lg:h-[420px] flex items-center">

//           {/* 2025 */}
//           <motion.div
//             style={{
//               opacity: fadeOut,
//               scale: scaleDown,
//               y: yMove,
//             }}
//             className="absolute inset-0 flex items-center"
//           >
//             <div className="absolute text-[180px] lg:text-[260px] font-bold text-white/5 -top-10 left-0">
//               2025
//             </div>

//             <div className="relative bg-red-600 skew-x-[-12deg] px-20 py-16">
//               <span className="block text-[100px] lg:text-[140px] font-bold text-white skew-x-[12deg]">
//                 2025
//               </span>
//             </div>
//           </motion.div>

//           {/* 2020 */}
//           <motion.div
//             style={{
//               opacity: fadeIn,
//               scale: scaleUp,
//               y: yMove,
//             }}
//             className="absolute inset-0 flex items-center"
//           >
//             <div className="absolute text-[180px] lg:text-[260px] font-bold text-white/5 -top-10 left-0">
//               2020
//             </div>

//             <div className="relative bg-red-600 skew-x-[-12deg] px-20 py-16">
//               <span className="block text-[100px] lg:text-[140px] font-bold text-white skew-x-[12deg]">
//                 2020
//               </span>
//             </div>
//           </motion.div>
//         </div>

//         {/* RIGHT – NEWS */}
//         <div>
//           <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">
//             Newsroom
//           </p>

//           <div className="space-y-10">
//             {newsData.map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -4 }}
//                 transition={{ duration: 0.25 }}
//                 className="group border-b border-white/10 pb-8 cursor-pointer"
//               >
//                 <h3 className="text-lg lg:text-xl font-medium leading-relaxed mb-3 group-hover:text-red-500 transition-colors duration-300">
//                   {item.title}
//                 </h3>

//                 <div className="flex gap-8 text-sm text-red-500">
//                   <span>{item.location}</span>
//                   <span>{item.date}</span>
//                 </div>

//                 <div className="h-[2px] w-0 group-hover:w-full bg-red-600 mt-4 transition-all duration-300" />
//               </motion.div>
//             ))}
//           </div>

//           <button className="mt-10 text-sm tracking-widest uppercase text-white hover:text-red-500 transition">
//             View All →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Newsroom2025;





// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const newsData = [
//   {
//     title:
//       "AM/NS India wins top innovation award at NECA 2025, showcasing commitment to decarbonisation and energy leadership",
//     location: "New Delhi / Hazira",
//     date: "December 2025",
//   },
//   {
//     title:
//       "AM/NS India accelerates circularity and low-carbon emissions steelmaking",
//     location: "Mumbai / Delhi",
//     date: "November 2025",
//   },
//   {
//     title:
//       "AM/NS India first to secure CSIR–CRRI’s breakthrough steel slag aggregates technology license to unlock ‘Waste-to-Wealth’ potential in road infrastructure development",
//     location: "Delhi / Mumbai",
//     date: "July 2025",
//   },
// ];

// const Newsroom2025 = () => {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start center", "end center"],
//   });

//   /* FIXED: Removed invalid { ease: "easeInOut" } from useTransform—easing handled via motion.div transitions for smooth interpolation */
//   const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
//   const fadeIn = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
//   const scaleDown = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);
//   const scaleUp = useTransform(scrollYProgress, [0.5, 1], [0.98, 1]);
//   const yMove = useTransform(scrollYProgress, [0, 1], [0, -15]);

//   // Subtle rotation for extra premium depth (tiny skew correction on scroll)
//   const rotateOut = useTransform(scrollYProgress, [0, 0.5], [0, -1]);
//   const rotateIn = useTransform(scrollYProgress, [0.5, 1], [-1, 0]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-[#1f1f1f] text-white overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         {/* LEFT – YEAR */}
//         <div className="relative h-[320px] lg:h-[420px] flex items-center">
//           {/* 2025 */}
//           <motion.div
//             style={{
//               opacity: fadeOut,
//               scale: scaleDown,
//               y: yMove,
//               rotate: rotateOut,
//             }}
//             className="absolute inset-0 flex items-center origin-center"
//             transition={{ duration: 1.2, ease: "easeInOut" }} // Easing applied here for smooth scroll response
//           >
//             <div className="absolute text-[180px] lg:text-[260px] font-bold text-white/5 -top-10 left-0">
//               2025
//             </div>
//             <div className="relative bg-orange-500 skew-x-[-12deg] px-20 py-16">
//               <span className="block text-[100px] lg:text-[140px] font-bold text-white skew-x-[12deg]">
//                 2025
//               </span>
//             </div>
//           </motion.div>
//           {/* 2020 */}
//           <motion.div
//             style={{
//               opacity: fadeIn,
//               scale: scaleUp,
//               y: yMove,
//               rotate: rotateIn,
//             }}
//             className="absolute inset-0 flex items-center origin-center"
//             transition={{ duration: 1.2, ease: "easeInOut" }}
//           >
//             <div className="absolute text-[180px] lg:text-[260px] font-bold text-white/5 -top-10 left-0">
//               2020
//             </div>
//             <div className="relative bg-orange-500 skew-x-[-12deg] px-20 py-16">
//               <span className="block text-[100px] lg:text-[140px] font-bold text-white skew-x-[12deg]">
//                 2020
//               </span>
//             </div>
//           </motion.div>
//         </div>
//         {/* RIGHT – NEWS */}
//         <div>
//           <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">
//             Newsroom
//           </p>
//           <div className="space-y-10">
//             {newsData.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 whileHover={{ y: -4 }}
//                 transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }} // Staggered entrance
//                 className="group border-b border-white/10 pb-8 cursor-pointer"
//               >
//                 <h3 className="text-lg lg:text-xl font-medium leading-relaxed mb-3 group-hover:text-orange-400 transition-colors duration-300">
//                   {item.title}
//                 </h3>
//                 <div className="flex gap-8 text-sm text-orange-400">
//                   <span>{item.location}</span>
//                   <span>{item.date}</span>
//                 </div>
//                 <motion.div 
//                   className="h-[2px] w-full bg-orange-500 mt-4 origin-left"
//                   initial={{ scaleX: 0 }}
//                   whileHover={{ scaleX: 1 }}
//                   transition={{ duration: 0.4, ease: "easeOut" }}
//                 />
//               </motion.div>
//             ))}
//           </div>
//           <motion.button 
//             className="mt-10 text-sm tracking-widest uppercase text-white hover:text-orange-400 transition"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.2 }}
//           >
//             View All →
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Newsroom2025;








import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const newsData = [
  {
    title:
      "AM/NS India wins top innovation award at NECA 2025, showcasing commitment to decarbonisation and energy leadership",
    location: "New Delhi / Hazira",
    date: "December 2025",
  },
  {
    title:
      "AM/NS India accelerates circularity and low-carbon emissions steelmaking",
    location: "Mumbai / Delhi",
    date: "November 2025",
  },
  {
    title:
      "AM/NS India first to secure CSIR–CRRI’s breakthrough steel slag aggregates technology license to unlock ‘Waste-to-Wealth’ potential in road infrastructure development",
    location: "Delhi / Mumbai",
    date: "July 2025",
  },
];

export default function Newsroom2025() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Calm, editorial transitions
  const year2025Opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const year2020Opacity = useTransform(scrollYProgress, [0.35, 0.7], [0, 1]);

  const yearY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1f1f1f] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT – YEAR BLOCK */}
        <div className="relative h-[320px] lg:h-[420px] flex items-center">

          {/* 2025 */}
          <motion.div
            style={{ opacity: year2025Opacity, y: yearY }}
            className="absolute inset-0 flex items-center"
          >
            <div className="absolute text-[200px] lg:text-[280px] font-bold text-white/5 -top-16 left-0">
              2025
            </div>
            <div className="relative bg-orange-500 px-20 py-16">
              <span className="block text-[100px] lg:text-[140px] font-bold">
                2025
              </span>
            </div>
          </motion.div>

          {/* 2020 */}
          <motion.div
            style={{ opacity: year2020Opacity, y: yearY }}
            className="absolute inset-0 flex items-center"
          >
            <div className="absolute text-[200px] lg:text-[280px] font-bold text-white/8 -top-16 left-0">
              2020
            </div>
            <div className="relative bg-orange-500 px-20 py-16">
              <span className="block text-[100px] lg:text-[140px] font-bold">
                2020
              </span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT – NEWS LIST */}
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-10">
            Newsroom
          </p>

          <div className="space-y-12">
            {newsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                className="group border-b border-white/10 pb-10"
              >
                <h3 className="text-lg lg:text-xl font-medium leading-relaxed mb-4 group-hover:text-orange-400 transition">
                  {item.title}
                </h3>

                <div className="flex gap-8 text-sm text-gray-400">
                  <span>{item.location}</span>
                  <span>{item.date}</span>
                </div>

                {/* Underline reveal */}
                <motion.div
                  className="h-[1px] w-full bg-orange-500 mt-6 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </motion.div>
            ))}
          </div>

          <motion.button
            className="mt-12 text-sm tracking-widest uppercase text-white hover:text-orange-400 transition"
            whileHover={{ x: 6 }}
            transition={{ duration: 0.2 }}
          >
            View All →
          </motion.button>
        </div>
      </div>
    </section>
  );
}
