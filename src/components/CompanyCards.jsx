
// import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";

// const slides = [
//   { title: "Leadership", value: "Interdependently Safe", link: "/about" },
//   { title: "Applications", value: "Endlessly Creative", link: "/applications" },
//   { title: "Projects", value: "Consistently Excellent", link: "/projects" },
//   { title: "GI Making Process", value: "Forever Dynamic", link: "/products" },
// ];

// export default function CompanySlider() {
//   const sliderRef = useRef(null);
//   const navigate = useNavigate();

//   const scroll = (dir) => {
//     if (!sliderRef.current) return;

//     sliderRef.current.scrollBy({
//       left: dir === "left" ? -280 : 280,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="relative bg-[#0f0f0f] py-16 md:py-24 overflow-hidden">

//       {/* BACKGROUND */}
//       <div
//         className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-60"
//         style={{
//           backgroundImage: "url('/Images/giiMAGE.png')",
//         }}
//       />
//       <div className="absolute inset-0 bg-black/70" />

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

//         {/* LABEL */}
//         <p className="text-center text-xs tracking-[0.35em] uppercase text-gray-500 mb-10">
//           Company
//         </p>

//         <div className="relative">

//           {/* SLIDER */}
//           <div
//             ref={sliderRef}
//             className="
//               flex gap-4 md:gap-6
//               overflow-x-auto scroll-smooth
//               snap-x snap-mandatory
//               scrollbar-hide
//               pb-6
//             "
//           >
//             {slides.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => navigate(item.link)}
//                 className="
//                   snap-start
//                   w-[220px] sm:w-60 md:w-[260px]
//                   h-[300px] md:h-[360px]
//                   bg-white/5
//                   cursor-pointer
//                   transition-all duration-300
//                   hover:bg-orange-500/12
//                 "
//               >
//                 <div className="h-full p-5 flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-white text-base font-medium mb-3">
//                       {item.title}
//                     </h3>

//                     <p className="text-gray-400 leading-snug text-sm">
//                       {item.value.split(" ").map((w, i) => (
//                         <span key={i} className="block">
//                           {w}
//                         </span>
//                       ))}
//                     </p>
//                   </div>

//                   <span className="text-xs tracking-widest uppercase text-gray-500 hover:text-orange-400 transition">
//                     Explore →
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* ARROWS – INSIDE CONTAINER */}
//           <div className="hidden md:flex justify-between absolute inset-y-0 left-0 right-0 pointer-events-none">
//             <button
//               onClick={() => scroll("left")}
//               className="pointer-events-auto text-gray-400 hover:text-orange-400 transition"
//             >
//               ←
//             </button>

//             <button
//               onClick={() => scroll("right")}
//               className="pointer-events-auto text-gray-400 hover:text-orange-400 transition"
//             >
//               →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";

// const slides = [
//   {
//     title: "Leadership",
//     value: "Interdependently Safe",
//     link: "/about",
//     icon: "https://cdn.creazilla.com/icons/5299185/leadership-the-noun-project-icon-original.svg",
//   },
//   {
//     title: "Applications",
//     value: "Endlessly Creative",
//     link: "/applications",
//     icon: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/web-app-icon.svg",
//   },
//   {
//     title: "Projects",
//     value: "Consistently Excellent",
//     link: "/projects",
//     icon: "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/project-management-icon.svg",
//   },
//   {
//     title: "GI Making Process",
//     value: "Forever Dynamic",
//     link: "/products",
//     icon: "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/conveyor-icon.svg",
//   },
// ];

// export default function CompanySlider() {
//   const sliderRef = useRef(null);
//   const navigate = useNavigate();

//   const scroll = (dir) => {
//     if (!sliderRef.current) return;

//     sliderRef.current.scrollBy({
//       left: dir === "left" ? -280 : 280,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="relative bg-[#0f0f0f] py-20 md:py-28 overflow-hidden">

//       {/* GI LINE ART BACKGROUND */}
//       <div
//         className="absolute inset-0 bg-left bg-no-repeat bg-cover opacity-40"
//         style={{
//           backgroundImage: "url('/Images/giiMAGE.png')",
//           transform: "translateX(-8%)",
//         }}
//       />
//       <div className="absolute inset-0 bg-black/75" />

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

//         {/* LABEL */}
//         <p className="text-center text-xs tracking-[0.35em] uppercase text-gray-500 mb-4">
//           Company
//         </p>

//         {/* DESCRIPTION */}
//         <p className="text-center text-gray-400 max-w-xl mx-auto text-sm mb-14">
//           Discover how our leadership, applications, projects, and GI
//           manufacturing processes shape a resilient industrial ecosystem.
//         </p>

//         <div className="relative">

//           {/* SLIDER */}
//           <div
//             ref={sliderRef}
//             className="
//               flex gap-4 md:gap-6
//               overflow-x-auto scroll-smooth
//               snap-x snap-mandatory
//               scrollbar-hide
//               pb-8
//             "
//           >
//             {slides.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => navigate(item.link)}
//                 className="
//                   relative snap-start
//                   w-[220px] sm:w-60 md:w-[260px]
//                   h-[320px] md:h-[380px]
//                   bg-white/5 backdrop-blur-sm
//                   cursor-pointer
//                   transition-all duration-500
//                   hover:bg-orange-500/10
//                   hover:shadow-[0_0_40px_rgba(255,115,0,0.15)]
//                 "
//               >
//                 {/* GRID OVERLAY */}
//                 <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:24px_24px]" />

//                 <div className="relative h-full p-6 flex flex-col justify-between">

//                   {/* ICON */}
//                   <img
//                     src={item.icon}
//                     alt={item.title}
//                     className="w-10 h-10 mb-6 opacity-80"
//                   />

//                   {/* TEXT */}
//                   <div>
//                     <h3 className="text-white text-base font-medium mb-3">
//                       {item.title}
//                     </h3>

//                     <p className="text-gray-400 leading-snug text-sm">
//                       {item.value.split(" ").map((w, i) => (
//                         <span key={i} className="block">
//                           {w}
//                         </span>
//                       ))}
//                     </p>
//                   </div>

//                   {/* CTA */}
//                   <span className="text-xs tracking-widest uppercase text-gray-500 hover:text-orange-400 transition">
//                     Explore →
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* ARROWS */}
//           <div className="hidden md:flex justify-between absolute inset-y-0 left-0 right-0 pointer-events-none">
//             <button
//               onClick={() => scroll("left")}
//               className="pointer-events-auto text-gray-400 hover:text-orange-400 transition"
//             >
//               ←
//             </button>

//             <button
//               onClick={() => scroll("right")}
//               className="pointer-events-auto text-gray-400 hover:text-orange-400 transition"
//             >
//               →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Leadership",
    value: "Interdependently Safe",
    link: "/about",
    icon: "https://cdn.creazilla.com/icons/5299185/leadership-the-noun-project-icon-original.svg",
  },
  {
    title: "Applications",
    value: "Endlessly Creative",
    link: "/applications",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/web-app-icon.svg",
  },
  {
    title: "Projects",
    value: "Consistently Excellent",
    link: "/projects",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/project-management-icon.svg",
  },
  {
    title: "GI Making Process",
    value: "Forever Dynamic",
    link: "/products",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/conveyor-icon.svg",
  },
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
    <section className="relative bg-[#0f0f0f] py-20 md:py-28 overflow-hidden">

      {/* GI LINE ART BACKGROUND */}
      <div
        className="absolute inset-0 bg-left bg-no-repeat bg-cover opacity-40"
        style={{
          backgroundImage: "url('/Images/giiMAGE.png')",
          transform: "translateX(-8%)",
        }}
      />
      <div className="absolute inset-0 bg-black/75" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* LABEL */}
        <p className="text-center text-xs tracking-[0.35em] uppercase text-gray-500 mb-4">
          Company
        </p>

        {/* DESCRIPTION */}
        <p className="text-center text-gray-400 max-w-xl mx-auto text-sm mb-14">
          Discover how our leadership, applications, projects, and GI
          manufacturing processes shape a resilient industrial ecosystem.
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
              pb-8
            "
          >
            {slides.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(item.link)}
                className="
                  relative snap-start
                  w-[220px] sm:w-60 md:w-[260px]
                  h-[320px] md:h-[380px]
                  bg-white/5 backdrop-blur-sm
                  cursor-pointer
                  transition-all duration-500
                  hover:bg-orange-500/10
                  hover:shadow-[0_0_40px_rgba(255,115,0,0.15)]
                "
              >
                {/* GRID OVERLAY */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="relative h-full p-6 flex flex-col justify-between">

                  {/* ICON */}
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-10 h-10 mb-6 opacity-80"
                    style={{
                      filter: "invert(100%) sepia(75%) saturate(7500%) hue-rotate(180deg) brightness(100%) contrast(100%)"
                    }}
                  />

                  {/* TEXT */}
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

                  {/* CTA */}
                  <span className="text-xs tracking-widest uppercase text-gray-500 hover:text-orange-400 transition">
                    Explore →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ARROWS */}
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