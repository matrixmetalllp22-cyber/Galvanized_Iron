// // import React from "react";
// // import { useNavigate } from "react-router-dom";

// // const companyItems = [
// //   {
// //     title: "Leadership",
// //     subtitle: "Interdependently Safe",
// //     link: "/leadership",
// //   },
// //   {
// //     title: "Applications",
// //     subtitle: "Endlessly Creative",
// //     link: "/applications",
// //   },
// //   {
// //     title: "Marquee Projects",
// //     subtitle: "Consistently Excellent",
// //     link: "/projects",
// //   },
// //   {
// //     title: "Steel Making Process",
// //     subtitle: "Forever Dynamic",
// //     link: "/steel-process",
// //   },
// //   {
// //     title: "Locations",
// //     subtitle: "Always Collaborative",
// //     link: "/locations",
// //   },
// // ];

// // export default function CompanySection() {
// //   const navigate = useNavigate();

// //   return (
// //     <section className="relative min-h-[90vh] bg-[#111] overflow-hidden">

// //       {/* BACKGROUND SKETCH – SINGLE IMAGE */}
// //       <div
// //         className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-80"
// //         style={{
// //           backgroundImage:
// //             "url('/images/company/company-values-sketch.svg')",
// //         }}
// //       />

// //       {/* DARK OVERLAY */}
// //       <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

// //       {/* CONTENT */}
// //       <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

// //         {/* SECTION LABEL */}
// //         <p className="text-center text-xs tracking-[0.35em] uppercase text-gray-500 mb-16">
// //           Company
// //         </p>

// //         {/* CARDS */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
// //           {companyItems.map((item, index) => (
// //             <div
// //               key={index}
// //               onClick={() => navigate(item.link)}
// //               className="group relative h-[380px] cursor-pointer
// //                          border border-white/10
// //                          bg-white/5 backdrop-blur-sm
// //                          transition-all duration-500
// //                          hover:border-orange-400/40
// //                          hover:bg-orange-500/15
// //                          hover:-translate-y-2"
// //             >
// //               {/* ORANGE HOVER GLOW */}
// //               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-orange-500/10" />

// //               {/* TEXT CONTENT */}
// //               <div className="relative z-10 p-6 flex flex-col justify-between h-full">
// //                 <div>
// //                   <h3 className="text-white text-xl font-semibold mb-4">
// //                     {item.title}
// //                   </h3>

// //                   <p className="text-gray-300 text-lg leading-snug">
// //                     {item.subtitle.split(" ").map((word, i) => (
// //                       <span key={i} className="block">
// //                         {word}
// //                       </span>
// //                     ))}
// //                   </p>
// //                 </div>

// //                 <span className="text-sm uppercase tracking-widest text-gray-400 group-hover:text-orange-400 transition">
// //                   Explore →
// //                 </span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* NAV ARROWS (VISUAL) */}
// //         <div className="flex justify-center gap-10 mt-16 text-gray-500">
// //           <span className="text-2xl hover:text-white cursor-pointer">←</span>
// //           <span className="text-2xl hover:text-white cursor-pointer">→</span>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const slides = [
//   {
//     title: "Leadership",
//     value: "Interdependently Safe",
//     link: "/leadership",
//   },
//   {
//     title: "Applications",
//     value: "Endlessly Creative",
//     link: "/applications",
//   },
//   {
//     title: "Marquee Projects",
//     value: "Consistently Excellent",
//     link: "/projects",
//   },
//   {
//     title: "Steel Making Process",
//     value: "Forever Dynamic",
//     link: "/steel-process",
//   },
//   {
//     title: "Locations",
//     value: "Always Collaborative",
//     link: "/locations",
//   },
// ];

// export default function CompanySlider() {
//   const sliderRef = useRef(null);
//   const navigate = useNavigate();

//   const scroll = (dir) => {
//     sliderRef.current.scrollBy({
//       left: dir === "left" ? -400 : 400,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="relative min-h-[90vh] bg-[#111] overflow-hidden">

//       {/* BACKGROUND SKETCH (ONE IMAGE) */}
//       <div
//         className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-80"
//         style={{
//           backgroundImage:
//             "url('/images/company/company-values-sketch.svg')",
//         }}
//       />

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/90" />

//       {/* CONTENT */}
//       <div className="relative z-10 px-10 py-24">

//         {/* SECTION LABEL */}
//         <p className="text-center text-xs tracking-[0.35em] uppercase text-gray-500 mb-16">
//           Company
//         </p>

//         {/* SLIDER */}
//         <div className="relative">

//           {/* LEFT ARROW */}
//           <button
//             onClick={() => scroll("left")}
//             className="absolute -left-6 top-1/2 -translate-y-1/2 z-20
//                        text-gray-400 hover:text-orange-400 transition"
//           >
//             ←
//           </button>

//           {/* SLIDES */}
//           <motion.div
//             ref={sliderRef}
//             className="flex gap-8 overflow-x-auto scrollbar-hide cursor-grab"
//             drag="x"
//             dragConstraints={{ left: -1200, right: 0 }}
//             whileTap={{ cursor: "grabbing" }}
//           >
//             {slides.map((item, index) => (
//               <motion.div
//                 key={index}
//                 onClick={() => navigate(item.link)}
//                 className="min-w-[300px] h-[420px] relative
//                            bg-white/5 backdrop-blur-sm
//                            border border-white/10
//                            cursor-pointer
//                            transition-all duration-500
//                            hover:bg-orange-500/15
//                            hover:border-orange-400/40"
//                 whileHover={{ y: -8 }}
//               >
//                 {/* ORANGE OVERLAY */}
//                 <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-orange-500/10" />

//                 {/* TEXT */}
//                 <div className="relative z-10 p-6 h-full flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-white text-xl font-semibold mb-4">
//                       {item.title}
//                     </h3>

//                     <p className="text-gray-300 text-lg leading-snug">
//                       {item.value.split(" ").map((w, i) => (
//                         <span key={i} className="block">
//                           {w}
//                         </span>
//                       ))}
//                     </p>
//                   </div>

//                   <span className="uppercase tracking-widest text-sm text-gray-400 hover:text-orange-400 transition">
//                     Explore →
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* RIGHT ARROW */}
//           <button
//             onClick={() => scroll("right")}
//             className="absolute -right-6 top-1/2 -translate-y-1/2 z-20
//                        text-gray-400 hover:text-orange-400 transition"
//           >
//             →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  { title: "Leadership", value: "Interdependently Safe", link: "/about" },
  { title: "Applications", value: "Endlessly Creative", link: "/applications" },
  { title: "Projects", value: "Consistently Excellent", link: "/projects" },
  { title: "GI Making Process", value: "Forever Dynamic", link: "/products" },
];

export default function CompanySlider() {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (dir) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: dir === "left" ? -280 : 280,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-[#0f0f0f] py-16 md:py-24 overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-40"
        style={{
          backgroundImage: "url('/images/company/company-values-sketch.svg')",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* LABEL */}
        <p className="text-center text-xs tracking-[0.35em] uppercase text-gray-500 mb-10">
          Company
        </p>

        <div className="relative">

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="
              flex gap-4 md:gap-6
              overflow-x-auto scroll-smooth
              snap-x snap-mandatory
              scrollbar-hide
              pb-6
            "
          >
            {slides.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(item.link)}
                className="
                  snap-start
                  w-[220px] sm:w-60 md:w-[260px]
                  h-[300px] md:h-[360px]
                  bg-white/5
                  cursor-pointer
                  transition-all duration-300
                  hover:bg-orange-500/12
                "
              >
                <div className="h-full p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white text-base font-medium mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 leading-snug text-sm">
                      {item.value.split(" ").map((w, i) => (
                        <span key={i} className="block">
                          {w}
                        </span>
                      ))}
                    </p>
                  </div>

                  <span className="text-xs tracking-widest uppercase text-gray-500 hover:text-orange-400 transition">
                    Explore →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ARROWS – INSIDE CONTAINER */}
          <div className="hidden md:flex justify-between absolute inset-y-0 left-0 right-0 pointer-events-none">
            <button
              onClick={() => scroll("left")}
              className="pointer-events-auto text-gray-400 hover:text-orange-400 transition"
            >
              ←
            </button>

            <button
              onClick={() => scroll("right")}
              className="pointer-events-auto text-gray-400 hover:text-orange-400 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
