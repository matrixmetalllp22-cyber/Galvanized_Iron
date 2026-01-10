
// // import React, { useState } from "react";
// // import { ArrowLeft, ArrowRight } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";

// // const KeyProducts = () => {
// //   const products = [

// //         {
// //   title: "Aluminium Grades Available",
// //   description: `We supply a comprehensive selection of aluminium grades tailored for diverse industrial applications. This includes 1050/1100 commercial pure alloys, 3003 general engineering alloys, 5052/5083 high-strength marine and industrial alloys, and the advanced 3xxx & 5xxx series specialized alloys used in packaging and heat-transfer solutions.`,


// //   image: "/Images/Aluminium-Sheets-Coils-1024x580.png",
// // },

// //     {
// //       title: "Supply Range Specifications",
// //       description: "Our aluminium products are available in a broad supply range to meet precise manufacturing needs. Thickness options span from 0.15 mm to 6 mm, and widths are available up to 1600 mm, ensuring compatibility with a wide variety of production standards and project requirements.",
// //       image: "/Images/aluminium-sheet-2024-250x250.webp",
// //     },
    
// //   ];

// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const handlePrev = () => {
// //     setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
// //   };

// //   const handleNext = () => {
// //     setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
// //   };

// //   const currentProduct = products[currentIndex];

// //   return (
// //     <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
// //       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16">

// //         {/* LEFT SIDE TEXT */}
// //         <motion.div
// //           key={currentProduct.title + "-text"}
// //           initial={{ opacity: 0, x: -40 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.7 }}
// //         >
// //           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
// //             Key Products
// //           </h2>

// //           <p className="text-gray-700 mb-8 text-lg leading-relaxed max-w-lg">
// //             Matrix plants are equipped with advanced lines to process flat-rolled steel,
// //             delivering precision, durability, and consistency for industries worldwide.
// //           </p>

// //           <AnimatePresence mode="wait">
// //             <motion.div
// //               key={currentProduct.title}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -20 }}
// //               transition={{ duration: 0.6 }}
// //               className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-300"
// //             >
// //               <h3 className="text-2xl font-bold text-gray-800 mb-2">
// //                 {currentProduct.title}
// //               </h3>
// //               <p className="text-gray-600 leading-relaxed">
// //                 {currentProduct.description}
// //               </p>
// //             </motion.div>
// //           </AnimatePresence>
// //         </motion.div>

// //         {/* RIGHT SIDE IMAGE */}
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={currentProduct.title + "-img"}
// //             initial={{ opacity: 0, scale: 0.9, x: 40 }}
// //             animate={{ opacity: 1, scale: 1, x: 0 }}
// //             exit={{ opacity: 0, scale: 0.9, x: -40 }}
// //             transition={{ duration: 0.7 }}
// //             className="flex justify-center md:justify-end"
// //           >
// //             <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-300">
// //               <img
// //                 src={currentProduct.image}
// //                 alt={currentProduct.title}
// //                 className="w-[380px] md:w-[420px] lg:w-[480px] h-[350px] md:h-[420px] object-cover 
// //                            hover:scale-105 transition-transform duration-700"
// //               />
// //             </div>
// //           </motion.div>
// //         </AnimatePresence>
// //       </div>

// //       {/* NAV BUTTONS */}
// //       <div className="flex justify-center gap-6 mt-16">
// //         <button
// //           onClick={handlePrev}
// //           className="bg-gray-400 hover:bg-orange-500 text-white p-4 rounded-xl shadow-lg 
// //                      transition-all duration-300 hover:scale-110 active:scale-95"
// //         >
// //           <ArrowLeft className="w-6 h-6" />
// //         </button>
// //         <button
// //           onClick={handleNext}
// //           className="bg-gray-400 hover:bg-orange-500 text-white p-4 rounded-xl shadow-lg 
// //                      transition-all duration-300 hover:scale-110 active:scale-95"
// //         >
// //           <ArrowRight className="w-6 h-6" />
// //         </button>
// //       </div>
// //     </section>
// //   );
// // };

// // export default KeyProducts;





// import React from "react";
// import { Link } from "react-router-dom";

// const products = [
//   {
//     title: "Hot Rolled Steel",
//     slug: "hot-rolled",
//     icon: "/icons/hr.svg",
//   },
//   {
//     title: "Cold Rolled Steel",
//     slug: "cold-rolled",
//     icon: "/icons/cr.svg",
//   },
//   {
//     title: "Colour Coated Steel",
//     slug: "colour-coated",
//     icon: "/icons/colour-coated.svg",
//     highlight: true, // AM/NS red highlight
//   },
//   {
//     title: "Galvanized Steel",
//     slug: "galvanized",
//     icon: "/icons/galvanized.svg",
//   },
//   {
//     title: "Chequered Steel",
//     slug: "chequered",
//     icon: "/icons/chequered.svg",
//   },
//   {
//     title: "HRPO",
//     slug: "hrpo",
//     icon: "/icons/hrpo.svg",
//   },
//   {
//     title: "Welded Pipes",
//     slug: "welded-pipes",
//     icon: "/icons/pipes.svg",
//   },
//   {
//     title: "Steel Plates",
//     slug: "steel-plates",
//     icon: "/icons/plates.svg",
//   },
// ];

// export default function KeyProducts() {
//   return (
//     <section className="py-24 bg-[#2b2c2f] text-white">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <p className="text-center text-gray-400 tracking-widest uppercase mb-4">
//           Portfolio
//         </p>
//         <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16">
//           What product do you wish to enquire / purchase ?
//         </h2>

//         {/* Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-10">
//           {products.map((product) => (
//             <Link
//               key={product.slug}
//               to={`/products/${product.slug}`}
//               aria-label={`View ${product.title}`}
//               className="group text-center cursor-pointer focus:outline-none"
//             >
//               {/* Icon */}
//               <div className="flex justify-center mb-6">
//                 <div
//                   className={`w-20 h-20 flex items-center justify-center rounded-full transition-all duration-300
//                     ${
//                       product.highlight
//                         ? "border-2 border-red-600"
//                         : "border border-gray-500"
//                     }
//                     group-hover:scale-110`}
//                 >
//                   <img
//                     src={product.icon}
//                     alt={product.title}
//                     className="w-12 h-12 opacity-90 group-hover:opacity-100 transition"
//                   />
//                 </div>
//               </div>

//               {/* Title */}
//               <p
//                 className={`text-sm tracking-wide transition-colors duration-300
//                   ${
//                     product.highlight
//                       ? "text-red-500"
//                       : "text-gray-300 group-hover:text-white"
//                   }`}
//               >
//                 {product.title}
//               </p>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





// import React from "react";
// import { Link } from "react-router-dom";

// const products = [
//   {
//     title: "Hot Rolled Steel",
//     slug: "hot-rolled",
//     icon: "/icons/hr.svg",
//   },
//   {
//     title: "Cold Rolled Steel",
//     slug: "cold-rolled",
//     icon: "/icons/cr.svg",
//   },
//   {
//     title: "Colour Coated Steel",
//     slug: "colour-coated",
//     icon: "/icons/colour-coated.svg",
//     // highlight: true,
//   },
//   {
//     title: "Galvanized Steel",
//     slug: "galvanized",
//     icon: "/icons/galvanized.svg",
//   },
//   {
//     title: "Chequered Steel",
//     slug: "chequered",
//     icon: "/icons/chequered.svg",
//   },
//   {
//     title: "HRPO",
//     slug: "hrpo",
//     icon: "/icons/hrpo.svg",
//   },
//   {
//     title: "Welded Pipes",
//     slug: "welded-pipes",
//     icon: "/icons/pipes.svg",
//   },
//   {
//     title: "Steel Plates",
//     slug: "steel-plates",
//     icon: "/icons/plates.svg",
//   },
// ];

// export default function KeyProducts() {
//   return (
//     <section className="py-24 bg-[#2b2c2f] text-white">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <p className="text-center text-gray-400 tracking-widest uppercase mb-4">
//           Portfolio
//         </p>

//         <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16">
//           What product do you wish to enquire / purchase ?
//         </h2>

//         {/* Products Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-10">
//           {products.map((product) => (
//             <Link
//               key={product.slug}
//               to={`/products/${product.slug}`}
//               aria-label={`View ${product.title}`}
//               className="group text-center cursor-pointer focus:outline-none"
//             >
//               {/* Icon Wrapper */}
//               <div className="flex justify-center mb-6">
//                 <div
//                   className={`
//                     w-20 h-20 flex items-center justify-center rounded-full
//                     transition-all duration-300 ease-out
//                     ${
//                       product.highlight
//                         ? "border-2 border-red-600"
//                         : "border border-gray-500"
//                     }
//                     group-hover:border-orange-500
//                     group-hover:scale-110
//                   `}
//                 >
//                   <img
//                     src={product.icon}
//                     alt={product.title}
//                     className="
//                       w-12 h-12
//                       opacity-80
//                       transition-all duration-300
//                       group-hover:opacity-100
//                     "
//                   />
//                 </div>
//               </div>

//               {/* Title */}
//               <p
//                 className={`
//                   text-sm tracking-wide transition-colors duration-300
//                   ${
//                     product.highlight
//                       ? "text-red-500"
//                       : "text-gray-300"
//                   }
//                   group-hover:text-orange-500
//                 `}
//               >
//                 {product.title}
//               </p>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





import React from "react";
import { Link } from "react-router-dom";

const products = [
  { title: "Hot Rolled Steel", slug: "hot-rolled", icon: "/icons/hr.svg" },
  { title: "Cold Rolled Steel", slug: "cold-rolled", icon: "/icons/cr.svg" },
  { title: "Colour Coated Steel", slug: "colour-coated", icon: "/icons/colour-coated.svg" },
  { title: "Galvanized Steel", slug: "galvanized", icon: "/icons/galvanized.svg" },
  { title: "Chequered Steel", slug: "chequered", icon: "/icons/chequered.svg" },
  { title: "HRPO", slug: "hrpo", icon: "/icons/hrpo.svg" },
  { title: "Welded Pipes", slug: "welded-pipes", icon: "/icons/pipes.svg" },
  { title: "Steel Plates", slug: "steel-plates", icon: "/icons/plates.svg" },
];

export default function KeyProducts() {
  return (
    <section className="py-24 bg-[#2b2c2f] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <p className="text-center text-gray-400 tracking-widest uppercase mb-4">
          Portfolio
        </p>

        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16">
          What product do you wish to enquire / purchase ?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {products.map((product) => (
            <Link
              key={product.slug}
              to={`/products/${product.slug}`}
              className="
                group
                relative
                bg-transparent
                border border-gray-700
                p-10
                flex flex-col items-center justify-center
                transition-all duration-300
                hover:bg-orange-600
                hover:border-orange-600
              "
            >
              {/* Icon */}
              <img
                src={product.icon}
                alt={product.title}
                className="
                  w-14 h-14 mb-6
                  opacity-80
                  transition-all duration-300
                  group-hover:opacity-100
                  group-hover:invert
                "
              />

              {/* Title */}
              <p
                className="
                  text-sm tracking-wide text-gray-300
                  transition-colors duration-300
                  group-hover:text-white
                "
              >
                {product.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
