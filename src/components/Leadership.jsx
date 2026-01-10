
// // // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // // import { motion } from "framer-motion";

// // // // // // const LeadershipAndClients = () => {
// // // // // //   const leaders = [
// // // // // //     {
// // // // // //       name: "Dinesh Chopra",
// // // // // //       role: " Managing Director",
// // // // // //       image: "/Images/profile01.jpeg",
// // // // // //       quote: `"Dinesh Chopra brings strong industrial leadership and decades of market knowledge to Matrix Metals LLP, serving as a pillar of strategic direction and business growth."`,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Jeeteen Jain",
// // // // // //       role: "  Managing Director",
// // // // // //       image: "/Images/profile02.jpeg",
// // // // // //       quote: `"Jeeteen Jain is a dynamic and visionary Managing Director whose leadership has been instrumental in shaping Matrix Metals LLP into a high-performance industrial powerhous."`,
// // // // // //     },
// // // // // //   ];

// // // // // //   const clients = [
// // // // // //     { name: "Tata Motors", logo: "/Logos/TVS-Motor-Company.png" },
// // // // // //     { name: "Bosch", logo: "/Logos/Ola-Cabs-Logo.png" },
// // // // // //     { name: "Bajaj", logo: "/Logos/Wave_mec.png" },
// // // // // //     { name: "Maruti Suzuki", logo: "/Logos/Taal.png" },
// // // // // //     { name: "Mahindra", logo: "/Logos/Boeing.png" },
// // // // // //     { name: "Hyundai", logo: "/Logos/BEML.png" },
// // // // // //     { name: "Hero MotoCorp", logo: "/Logos/DRDO.png" },
// // // // // //     { name: "TVS", logo: "/Logos/mg.png" },
// // // // // //     { name: "Ashok Leyland", logo: "/Logos/indian_railways.png" },
// // // // // //     { name: "Volvo Eicher", logo: "/Logos/General_Electric.png" },
// // // // // //     { name: "TVS", logo: "/Logos/Siemens.png" },
// // // // // //     { name: "Ashok Leyland", logo: "/Logos/Hitachi.png" },
// // // // // //     { name: "Volvo Eicher", logo: "/Logos/AEQUS.png" },
// // // // // //     { name: "Ashok Leyland", logo: "/Logos/garuda.png" },
// // // // // //   ];

// // // // // //   const containerRef = useRef(null);
// // // // // //   const sliderRef = useRef(null);

// // // // // //   const [duration, setDuration] = useState(30);

// // // // // //   useEffect(() => {
// // // // // //     const updateDuration = () => {
// // // // // //       if (containerRef.current && sliderRef.current) {
// // // // // //         const contentWidth = sliderRef.current.scrollWidth / 2;

// // // // // //         // SPEED LOGIC BASED ON SCREEN SIZE
// // // // // //         const screenWidth = window.innerWidth;

// // // // // //         const speed = screenWidth < 768 ? 110 : 60; // Faster on mobile
// // // // // //         setDuration(contentWidth / speed);
// // // // // //       }
// // // // // //     };

// // // // // //     updateDuration();
// // // // // //     window.addEventListener("resize", updateDuration);
// // // // // //     return () => window.removeEventListener("resize", updateDuration);
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <section className="bg-gray-50 py-20">
// // // // // //       {/* --- Leaders Section --- */}
// // // // // //       <div className="max-w-7xl mx-auto px-4 lg:px-10 flex flex-col gap-24">
// // // // // //         {leaders.map((leader, i) => (
// // // // // //           <motion.div
// // // // // //             key={i}
// // // // // //             initial={{ opacity: 0, y: 40 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.8 }}
// // // // // //             className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20 bg-white rounded-3xl shadow-xl border border-gray-200 p-6 lg:p-10"
// // // // // //           >
// // // // // //             <img
// // // // // //               src={leader.image}
// // // // // //               alt={leader.name}
// // // // // //               className="w-full h-80 sm:h-96 lg:h-[480px] object-cover rounded-2xl shadow-md"
// // // // // //             />

// // // // // //             <div className="space-y-5">
// // // // // //               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
// // // // // //                 {leader.name}
// // // // // //               </h2>
// // // // // //               <p className="text-xl sm:text-2xl text-gray-600">{leader.role}</p>
// // // // // //               <p className="text-gray-700 text-base sm:text-lg leading-relaxed border-l-4 pl-4 border-orange-500">
// // // // // //                 {leader.quote}
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       {/* --- Clients Slider Section --- */}
// // // // // //       <div className="py-20 bg-white text-center relative overflow-hidden" ref={containerRef}>
// // // // // //         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-14">
// // // // // //           Our Esteemed Customers
// // // // // //         </h2>

// // // // // //         <motion.div
// // // // // //           ref={sliderRef}
// // // // // //           className="flex items-center gap-16 sm:gap-20 whitespace-nowrap px-6"
// // // // // //           animate={{ x: ["0%", "-100%"] }}
// // // // // //           transition={{
// // // // // //             repeat: Infinity,
// // // // // //             duration: duration,
// // // // // //             ease: "linear",
// // // // // //           }}
// // // // // //         >
// // // // // //           {[...clients, ...clients].map((client, i) => (
// // // // // //             <div
// // // // // //               key={i}
// // // // // //               className="flex-shrink-0 p-6 sm:p-8 bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-110"
// // // // // //             >
// // // // // //               <img
// // // // // //                 src={client.logo}
// // // // // //                 alt={client.name}
// // // // // //                 className="w-32 h-18 sm:w-48 sm:h-24 lg:w-56 lg:h-32 object-contain"
// // // // // //               />
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </motion.div>

// // // // // //         {/* Gradient Borders */}
// // // // // //         <div className="absolute left-0 top-0 w-24 sm:w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
// // // // // //         <div className="absolute right-0 top-0 w-24 sm:w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default LeadershipAndClients;



// // // // // // import React from "react";

// // // // // // export default function ManagementTeam() {
// // // // // //   return (
// // // // // //     <section className="relative w-full min-h-[85vh] overflow-hidden bg-white">
// // // // // //       {/* Diagonal red background */}
// // // // // //       <div className="absolute inset-0">
// // // // // //         <div className="absolute right-0 top-0 h-full w-[70%] bg-[#E1251B] clip-diagonal"></div>
// // // // // //       </div>

// // // // // //       <div className="relative z-10 max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2 items-center px-10 py-24">
        
// // // // // //         {/* LEFT CONTENT */}
// // // // // //         <div className="max-w-xl">
// // // // // //           <h4 className="text-red-600 text-4xl font-handwriting mb-4">
// // // // // //             # Safety First
// // // // // //           </h4>

// // // // // //           <p className="text-gray-800 text-lg leading-relaxed mb-10">
// // // // // //             Health and Safety supersede everything else – a belief that we stand
// // // // // //             by and an ecosystem we foster at AM/NS India.
// // // // // //           </p>

// // // // // //           {/* Arrow CTA */}
// // // // // //           <div className="flex items-center gap-4 cursor-pointer group">
// // // // // //             <span className="text-red-600 text-xl">→</span>
// // // // // //             <span className="uppercase tracking-widest text-sm text-gray-700 group-hover:text-black transition">
// // // // // //               Know More
// // // // // //             </span>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* RIGHT ILLUSTRATION */}
// // // // // //         <div className="relative hidden lg:flex justify-end">
// // // // // //           <img
// // // // // //             src="/Images/safety-people.svg"
// // // // // //             alt="Safety First People"
// // // // // //             className="max-h-[520px] object-contain"
// // // // // //           />
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }



// // // // // import React from "react";

// // // // // export default function ManagementTeam() {
// // // // //   return (
// // // // //     <section className="relative w-full min-h-[85vh] overflow-hidden bg-white">
// // // // //       {/* Red diagonal background */}
// // // // //       <div className="absolute inset-0">
// // // // //         <div className="absolute right-0 top-0 h-full w-[70%] bg-[#E1251B] clip-diagonal" />
// // // // //       </div>

// // // // //       <div className="relative z-10 max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2 items-center px-10 py-24">

// // // // //         {/* LEFT CONTENT */}
// // // // //         <div className="max-w-xl">
// // // // //           <h4 className="text-[#E1251B] text-5xl font-light italic mb-6">
// // // // //             # Safety First
// // // // //           </h4>

// // // // //           <p className="text-gray-900 text-lg leading-relaxed mb-12">
// // // // //             Health and Safety supersede everything else – a belief that we stand
// // // // //             by and an ecosystem we foster at AM/NS India.
// // // // //           </p>

// // // // //           {/* Arrow CTA */}
// // // // //           <div className="flex items-center gap-6 cursor-pointer group">
// // // // //             <span className="text-[#E1251B] text-2xl transition-transform group-hover:translate-x-2">
// // // // //               →
// // // // //             </span>
// // // // //             <span className="uppercase tracking-widest text-sm text-gray-700 group-hover:text-black transition">
// // // // //               Know More
// // // // //             </span>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* RIGHT SKETCH (INLINE SVG – AM/NS STYLE) */}
// // // // //         <div className="relative hidden lg:flex justify-end">
// // // // //           <svg
// // // // //             viewBox="0 0 600 600"
// // // // //             className="w-full max-w-[520px]"
// // // // //             fill="none"
// // // // //             stroke="white"
// // // // //             strokeWidth="2"
// // // // //             strokeLinecap="round"
// // // // //             strokeLinejoin="round"
// // // // //           >
// // // // //             {/* Person 1 */}
// // // // //             <path d="M180 120 q20 -40 60 0" />
// // // // //             <circle cx="210" cy="150" r="28" />
// // // // //             <path d="M180 190 q30 20 60 0" />
// // // // //             <path d="M210 220 v140" />
// // // // //             <path d="M210 260 q-40 40 -70 80" />
// // // // //             <path d="M210 260 q40 40 70 80" />

// // // // //             {/* Helmet */}
// // // // //             <path d="M175 145 q35 -35 70 0" />

// // // // //             {/* Person 2 */}
// // // // //             <circle cx="380" cy="170" r="30" />
// // // // //             <path d="M350 210 q30 20 60 0" />
// // // // //             <path d="M380 240 v150" />
// // // // //             <path d="M380 280 q-50 40 -80 90" />
// // // // //             <path d="M380 280 q50 40 80 90" />

// // // // //             {/* Safety Board */}
// // // // //             <rect x="420" y="260" width="90" height="120" rx="6" />
// // // // //             <line x1="430" y1="290" x2="500" y2="290" />
// // // // //             <line x1="430" y1="320" x2="500" y2="320" />

// // // // //             {/* Tool */}
// // // // //             <path d="M120 320 l40 -40" />
// // // // //             <path d="M160 280 l20 20" />
// // // // //           </svg>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }


// // // // import React, { useRef } from "react";
// // // // import { ChevronLeft, ChevronRight } from "lucide-react";

// // // // export default function Leadership({ title }) {
// // // //   const sliderRef = useRef(null);

// // // //   const leaders = [
// // // //     { name: "Leader Name", role: "Designation", image: "/images/leader1.jpg" },
// // // //     { name: "Leader Name", role: "Designation", image: "/images/leader2.jpg" },
// // // //     { name: "Leader Name", role: "Designation", image: "/images/leader3.jpg" },
// // // //     { name: "Leader Name", role: "Designation", image: "/images/leader4.jpg" },
// // // //     { name: "Leader Name", role: "Designation", image: "/images/leader5.jpg" },
// // // //   ];

// // // //   const scroll = (dir) => {
// // // //     if (!sliderRef.current) return;

// // // //     sliderRef.current.scrollBy({
// // // //       left: dir === "left" ? -320 : 320,
// // // //       behavior: "smooth",
// // // //     });
// // // //   };

// // // //   return (
// // // //     <section className="bg-black py-16 px-6">
// // // //       {/* HEADER */}
// // // //       <div className="text-center mb-10">
// // // //         <h2 className="text-white text-2xl font-semibold tracking-wide">
// // // //           {title}
// // // //         </h2>
// // // //       </div>

// // // //       {/* SLIDER */}
// // // //       <div className="relative">
// // // //         {/* LEFT */}
// // // //         <button
// // // //           onClick={() => scroll("left")}
// // // //           className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-2 rounded-full"
// // // //         >
// // // //           <ChevronLeft size={22} className="text-white" />
// // // //         </button>

// // // //         {/* CARDS */}
// // // //         <div
// // // //           ref={sliderRef}
// // // //           className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2"
// // // //         >
// // // //           {leaders.map((leader, index) => (
// // // //             <div
// // // //               key={index}
// // // //               className="min-w-[260px] bg-zinc-900 rounded-md overflow-hidden"
// // // //             >
// // // //               <div className="aspect-[3/4]">
// // // //                 <img
// // // //                   src={leader.image}
// // // //                   alt={leader.name}
// // // //                   className="w-full h-full object-cover"
// // // //                 />
// // // //               </div>

// // // //               <div className="p-4 text-center">
// // // //                 <h3 className="text-white text-sm font-medium">
// // // //                   {leader.name}
// // // //                 </h3>
// // // //                 <p className="text-gray-400 text-xs mt-1">
// // // //                   {leader.role}
// // // //                 </p>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* RIGHT */}
// // // //         <button
// // // //           onClick={() => scroll("right")}
// // // //           className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-2 rounded-full"
// // // //         >
// // // //           <ChevronRight size={22} className="text-white" />
// // // //         </button>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }







// // // import React, { useRef, useState } from "react";
// // // import { ChevronLeft, ChevronRight } from "lucide-react";
// // // import ProfileModal from "./ProfileModal";

// // // export default function Leadership({ title, data }) {
// // //   const sliderRef = useRef(null);
// // //   const [activePerson, setActivePerson] = useState(null);

// // //   const scroll = (dir) => {
// // //     sliderRef.current.scrollBy({
// // //       left: dir === "left" ? -320 : 320,
// // //       behavior: "smooth",
// // //     });
// // //   };

// // //   return (
// // //     <section className="bg-black py-16 px-6">
// // //       <div className="text-center mb-10">
// // //         <h2 className="text-white text-2xl font-semibold">
// // //           {title}
// // //         </h2>
// // //       </div>

// // //       <div className="relative">
// // //         {/* DESKTOP ARROWS */}
// // //         <button
// // //           onClick={() => scroll("left")}
// // //           className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-2 rounded-full"
// // //         >
// // //           <ChevronLeft className="text-white" size={22} />
// // //         </button>

// // //         {/* SLIDER */}
// // //         <div
// // //           ref={sliderRef}
// // //           className="
// // //             flex gap-6 overflow-x-auto px-2
// // //             scroll-smooth snap-x snap-mandatory
// // //             scrollbar-hide touch-pan-x
// // //           "
// // //         >
// // //           {data.map((person, index) => (
// // //             <div
// // //               key={index}
// // //               onClick={() => setActivePerson(person)}
// // //               className="
// // //                 min-w-[260px] snap-start
// // //                 bg-zinc-900 rounded-md overflow-hidden
// // //                 cursor-pointer hover:scale-[1.03]
// // //                 transition-transform
// // //               "
// // //             >
// // //               <div className="aspect-[3/4]">
// // //                 <img
// // //                   src={person.image}
// // //                   alt={person.name}
// // //                   className="w-full h-full object-cover"
// // //                 />
// // //               </div>

// // //               <div className="p-4 text-center">
// // //                 <h3 className="text-white text-sm font-medium">
// // //                   {person.name}
// // //                 </h3>
// // //                 <p className="text-gray-400 text-xs mt-1">
// // //                   {person.role}
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         <button
// // //           onClick={() => scroll("right")}
// // //           className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-2 rounded-full"
// // //         >
// // //           <ChevronRight className="text-white" size={22} />
// // //         </button>
// // //       </div>

// // //       {/* PROFILE MODAL */}
// // //       <ProfileModal
// // //         person={activePerson}
// // //         onClose={() => setActivePerson(null)}
// // //       />
// // //     </section>
// // //   );
// // // }


// // import React, { useRef, useState } from "react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";
// // import { motion } from "framer-motion";
// // import ProfileModal from "./ProfileModal";
// // import LazyImage from "./LazyImage";

// // export default function Leadership({ title, data }) {
// //   const sliderRef = useRef(null);
// //   const [activePerson, setActivePerson] = useState(null);

// //   const scroll = (dir) => {
// //     sliderRef.current.scrollBy({
// //       left: dir === "left" ? -320 : 320,
// //       behavior: "smooth",
// //     });
// //   };

// //   return (
// //     <section className="bg-black py-20 px-6">
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //         className="text-center mb-14"
// //       >
// //         <h2 className="text-white text-2xl font-semibold">
// //           {title}
// //         </h2>
// //       </motion.div>

// //       <div className="relative">
// //         <button
// //           onClick={() => scroll("left")}
// //           className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-2 rounded-full"
// //         >
// //           <ChevronLeft className="text-white" size={22} />
// //         </button>

// //         <div
// //           ref={sliderRef}
// //           className="flex gap-8 overflow-x-auto px-2 scroll-smooth snap-x snap-mandatory scrollbar-hide"
// //         >
// //           {data.map((person, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: index * 0.08 }}
// //               whileHover={{ y: -8 }}
// //               onClick={() => setActivePerson(person)}
// //               className="min-w-[260px] snap-start bg-zinc-900 rounded-xl overflow-hidden cursor-pointer"
// //             >
// //               <div className="aspect-[3/4]">
// //                 <LazyImage
// //                   src={person.image}
// //                   alt={person.name}
// //                   className="w-full h-full object-cover"
// //                 />
// //               </div>

// //               <div className="p-5 text-center">
// //                 <h3 className="text-white text-sm font-medium">
// //                   {person.name}
// //                 </h3>
// //                 <p className="text-gray-400 text-xs mt-1">
// //                   {person.role}
// //                 </p>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>

// //         <button
// //           onClick={() => scroll("right")}
// //           className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-2 rounded-full"
// //         >
// //           <ChevronRight className="text-white" size={22} />
// //         </button>
// //       </div>

// //       <ProfileModal
// //         person={activePerson}
// //         onClose={() => setActivePerson(null)}
// //       />
// //     </section>
// //   );
// // }



// import React, { useRef, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion } from "framer-motion";
// import ProfileModal from "./ProfileModal";
// import LazyImage from "./LazyImage";

// export default function Leadership({ title, data = [] }) {
//   const sliderRef = useRef(null);
//   const [activePerson, setActivePerson] = useState(null);

//   // 🛡 SAFETY CHECK
//   if (!Array.isArray(data)) {
//     console.error("Leadership component expected array data but got:", data);
//     return null;
//   }

//   const scroll = (dir) => {
//     if (!sliderRef.current) return;

//     sliderRef.current.scrollBy({
//       left: dir === "left" ? -320 : 320,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="bg-black py-20 px-6">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center mb-14"
//       >
//         <h2 className="text-white text-2xl font-semibold">
//           {title}
//         </h2>
//       </motion.div>

//       {data.length === 0 ? (
//         <p className="text-center text-gray-400">
//           No members available
//         </p>
//       ) : (
//         <div className="relative">
//           <button
//             onClick={() => scroll("left")}
//             className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-2 rounded-full"
//           >
//             <ChevronLeft className="text-white" size={22} />
//           </button>

//           <div
//             ref={sliderRef}
//             className="flex gap-8 overflow-x-auto px-2 scroll-smooth snap-x snap-mandatory scrollbar-hide"
//           >
//             {data.map((person, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -8 }}
//                 onClick={() => setActivePerson(person)}
//                 className="min-w-[260px] snap-start bg-zinc-900 rounded-xl overflow-hidden cursor-pointer"
//               >
//                 <div className="aspect-[3/4]">
//                   <LazyImage
//                     src={person.image}
//                     alt={person.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <div className="p-5 text-center">
//                   <h3 className="text-white text-sm font-medium">
//                     {person.name}
//                   </h3>
//                   <p className="text-gray-400 text-xs mt-1">
//                     {person.role}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <button
//             onClick={() => scroll("right")}
//             className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-2 rounded-full"
//           >
//             <ChevronRight className="text-white" size={22} />
//           </button>
//         </div>
//       )}

//       <ProfileModal
//         person={activePerson}
//         onClose={() => setActivePerson(null)}
//       />
//     </section>
//   );
// }


















import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ProfileModal from "./ProfileModal";
import LazyImage from "./LazyImage";

export default function Leadership({ title, data = [] }) {
  const sliderRef = useRef(null);
  const [activePerson, setActivePerson] = useState(null);

  if (!Array.isArray(data)) return null;

  const scroll = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black py-24 px-6">
      <div className="text-center mb-16">
        <h2 className="text-white text-2xl font-semibold tracking-wide">
          {title}
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10
                     bg-zinc-900/80 backdrop-blur p-3 rounded-full"
        >
          <ChevronLeft className="text-white" size={20} />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {data.map((person, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              onClick={() => setActivePerson(person)}
              className="min-w-[280px] snap-start rounded-2xl
                         bg-gradient-to-b from-zinc-900 to-black
                         border border-white/10 overflow-hidden
                         cursor-pointer transition"
            >
              <div className="aspect-[3/4]">
                <LazyImage
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-white text-sm font-medium">
                  {person.name}
                </h3>
                <p className="text-gray-400 text-xs mt-1">
                  {person.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10
                     bg-zinc-900/80 backdrop-blur p-3 rounded-full"
        >
          <ChevronRight className="text-white" size={20} />
        </button>
      </div>

      <ProfileModal
        person={activePerson}
        onClose={() => setActivePerson(null)}
      />
    </section>
  );
}
