// import React, { useRef, useState } from "react";
// import { ChevronLeft, ChevronRight, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const focuses = [
//   {
//     title: "Customer Protection",
//     description:
//       "We safeguard our customers against life’s uncertainties by providing reliable and comprehensive insurance coverage across health, motor, and property.",
//     moreDescription:
//       "Our customer protection strategies include advanced risk assessment tools, personalized policy recommendations, and proactive alerts for potential vulnerabilities. We partner with leading security firms to ensure data privacy and fraud prevention, while our dedicated team monitors emerging threats to keep your coverage up-to-date.",
//     image:
//       "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/customer-support-icon.svg",
//   },
//   {
//     title: "Fast Claim Settlement",
//     description:
//       "Our streamlined and transparent claim process ensures quick settlements, minimizing stress and maximizing trust during critical moments.",
//     moreDescription:
//       "Experience claim settlements in as little as 24 hours for eligible cases. Our AI-powered verification system cross-checks documents instantly, while blockchain technology ensures tamper-proof records. With a 98% approval rate and dedicated claim concierges, we turn stressful situations into seamless resolutions.",
//     image:
//       "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/claim-icon.svg",
//   },
//   {
//     title: "Digital Innovation",
//     description:
//       "Leveraging cutting-edge digital platforms and AI-driven tools to simplify policy purchase, renewals, and claims for a seamless customer experience.",
//     moreDescription:
//       "Our digital ecosystem includes a voice-activated policy builder, AR-based property assessments, and predictive analytics for premium optimization. Integrated with smart home devices, our platform offers real-time risk monitoring and automated adjustments, putting innovation at your fingertips.",
//     image:
//       "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/artificial-intelligence-icon.svg",
//   },
//   {
//     title: "Risk Management",
//     description:
//       "We help individuals and businesses identify, assess, and mitigate risks through customized insurance solutions and expert advisory services.",
//     moreDescription:
//       "From enterprise-wide risk audits to personal financial health checks, our experts use data-driven insights and scenario modeling to craft bespoke strategies. We offer workshops, simulation tools, and ongoing consultations to empower you in navigating uncertainties with confidence.",
//     image:
//       "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/risk-management-icon.svg",
//   },
//   {
//     title: "Trust & Transparency",
//     description:
//       "Built on integrity and ethical practices, we ensure clear communication, fair pricing, and complete transparency in every policy we offer.",
//     moreDescription:
//       "Every policy includes a transparency dashboard showing premium breakdowns, claim histories, and performance metrics. We publish annual ethics reports, maintain open-source pricing algorithms, and offer third-party audits upon request, fostering unbreakable trust.",
//     image:
//       "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/trust-icon.svg",
//   },
//   {
//     title: "24/7 Assistance",
//     description:
//       "Our round-the-clock support ensures help is always available, whether it’s roadside assistance, emergency claims, or policy-related queries.",
//     moreDescription:
//       "Global network of support agents, AI chatbots with human escalation, and mobile app with video consultations. From midnight emergencies to weekend queries, we provide multilingual support, real-time tracking for roadside help, and proactive check-ins during crises.",
//     image:
//       "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/help-desk-icon.svg",
//   },
// ];

// export default function ManagementTeam() {
//   const sliderRef = useRef(null);
//   const [selectedFocus, setSelectedFocus] = useState(null);

//   const scroll = (dir) => {
//     const scrollAmount = sliderRef.current?.clientWidth * 0.8;
//     sliderRef.current?.scrollBy({
//       left: dir === "left" ? -scrollAmount : scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   const openModal = (item) => {
//     setSelectedFocus(item);
//   };

//   const closeModal = () => {
//     setSelectedFocus(null);
//   };

//   return (
//     <section className="bg-gradient-to-b from-black to-zinc-900 py-24 px-6 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* SECTION TITLE */}
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4"
//           >
//             Our Core Focuses
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-gray-400 text-lg max-w-2xl mx-auto"
//           >
//             Discover the pillars that drive our commitment to excellence in insurance services.
//           </motion.p>
//         </div>

//         <div className="relative">
//           {/* GRADIENT OVERLAYS FOR SCROLL INDICATION */}
//           <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none md:hidden" />
//           <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none md:hidden" />

//           {/* LEFT ARROW */}
//           <button
//             onClick={() => scroll("left")}
//             className="flex absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-20
//                        bg-zinc-900/50 backdrop-blur-md p-4 rounded-full shadow-lg
//                        hover:bg-zinc-800 transition-all duration-300"
//           >
//             <ChevronLeft className="text-white" size={24} />
//           </button>

//           {/* SLIDER */}
//           <div
//             ref={sliderRef}
//             className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4
//                        scrollbar-hide touch-pan-x"
//             style={{ scrollSnapStop: "always" }}
//           >
//             {focuses.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05, y: -10 }}
//                 className="
//                   min-w-[280px] md:min-w-[320px] snap-start
//                   rounded-3xl
//                   bg-gradient-to-br from-zinc-800/50 to-black/50
//                   border border-white/10 backdrop-blur-sm
//                   overflow-hidden shadow-xl
//                   cursor-pointer transition-all duration-300
//                   hover:shadow-2xl hover:border-orange-500/30
//                 "
//               >
//                 {/* IMAGE */}
//                 <div className="h-[240px] md:h-[280px] flex items-center justify-center bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden group">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="max-h-[180px] md:max-h-[220px] opacity-80 transition-transform duration-500 group-hover:scale-110"
//                     style={{
//                       filter: "invert(100%) sepia(75%) saturate(7500%) hue-rotate(180deg) brightness(100%) contrast(100%)",
//                     }}
//                   />
//                   {/* Subtle overlay on hover */}
//                   <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-all duration-300" />
//                 </div>

//                 {/* CONTENT */}
//                 <div className="p-6 md:p-8">
//                   <h4 className="text-orange-400 text-xl md:text-2xl font-semibold mb-4 tracking-wide">
//                     {item.title}
//                   </h4>

//                   <p className="text-gray-300 text-base leading-relaxed mb-6">
//                     {item.description}
//                   </p>

//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => openModal(item)}
//                     className="inline-flex items-center gap-3 group cursor-pointer"
//                   >
//                     <span className="text-orange-400 text-2xl group-hover:translate-x-2 transition-transform duration-300">
//                       →
//                     </span>
//                     <span className="uppercase tracking-widest text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
//                       Know More
//                     </span>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* RIGHT ARROW */}
//           <button
//             onClick={() => scroll("right")}
//             className="flex absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-20
//                        bg-zinc-900/50 backdrop-blur-md p-4 rounded-full shadow-lg
//                        hover:bg-zinc-800 transition-all duration-300"
//           >
//             <ChevronRight className="text-white" size={24} />
//           </button>
//         </div>
//       </div>

//       {/* MODAL */}
//       <AnimatePresence>
//         {selectedFocus && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
//               animate={{ scale: 1, opacity: 1, rotateY: 0 }}
//               exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
//               transition={{ duration: 0.5, type: "spring", damping: 15 }}
//               className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-orange-500/20 shadow-2xl max-w-lg w-full overflow-hidden relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* CLOSE BUTTON */}
//               <button
//                 onClick={closeModal}
//                 className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
//               >
//                 <X size={24} />
//               </button>

//               {/* IMAGE */}
//               <div className="h-48 flex items-center justify-center bg-gradient-to-b from-black to-zinc-900 relative">
//                 <img
//                   src={selectedFocus.image}
//                   alt={selectedFocus.title}
//                   className="max-h-36 opacity-80"
//                   style={{
//                     filter: "invert(100%) sepia(75%) saturate(7500%) hue-rotate(180deg) brightness(100%) contrast(100%)",
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-orange-500/5" />
//               </div>

//               {/* CONTENT */}
//               <div className="p-8">
//                 <h3 className="text-orange-400 text-3xl font-bold mb-4">
//                   {selectedFocus.title}
//                 </h3>
//                 <p className="text-gray-300 mb-6">
//                   {selectedFocus.description}
//                 </p>
//                 <p className="text-gray-200 font-medium">
//                   {selectedFocus.moreDescription}
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }



import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const focuses = [
  {
    title: "Customer Protection",
    description:
      "We safeguard our customers against life’s uncertainties by providing reliable and comprehensive insurance coverage across health, motor, and property.",
    moreDescription:
      "Our customer protection strategies include advanced risk assessment tools, personalized policy recommendations, and proactive alerts for potential vulnerabilities. We partner with leading security firms to ensure data privacy and fraud prevention, while our dedicated team monitors emerging threats to keep your coverage up-to-date.",
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/customer-support-icon.svg",
  },
  {
    title: "Fast Claim Settlement",
    description:
      "Our streamlined and transparent claim process ensures quick settlements, minimizing stress and maximizing trust during critical moments.",
    moreDescription:
      "Experience claim settlements in as little as 24 hours for eligible cases. Our AI-powered verification system cross-checks documents instantly, while blockchain technology ensures tamper-proof records. With a 98% approval rate and dedicated claim concierges, we turn stressful situations into seamless resolutions.",
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/claim-icon.svg",
  },
  {
    title: "Digital Innovation",
    description:
      "Leveraging cutting-edge digital platforms and AI-driven tools to simplify policy purchase, renewals, and claims for a seamless customer experience.",
    moreDescription:
      "Our digital ecosystem includes a voice-activated policy builder, AR-based property assessments, and predictive analytics for premium optimization. Integrated with smart home devices, our platform offers real-time risk monitoring and automated adjustments, putting innovation at your fingertips.",
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/artificial-intelligence-icon.svg",
  },
  {
    title: "Risk Management",
    description:
      "We help individuals and businesses identify, assess, and mitigate risks through customized insurance solutions and expert advisory services.",
    moreDescription:
      "From enterprise-wide risk audits to personal financial health checks, our experts use data-driven insights and scenario modeling to craft bespoke strategies. We offer workshops, simulation tools, and ongoing consultations to empower you in navigating uncertainties with confidence.",
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/risk-management-icon.svg",
  },
  {
    title: "Trust & Transparency",
    description:
      "Built on integrity and ethical practices, we ensure clear communication, fair pricing, and complete transparency in every policy we offer.",
    moreDescription:
      "Every policy includes a transparency dashboard showing premium breakdowns, claim histories, and performance metrics. We publish annual ethics reports, maintain open-source pricing algorithms, and offer third-party audits upon request, fostering unbreakable trust.",
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/trust-icon.svg",
  },
  {
    title: "24/7 Assistance",
    description:
      "Our round-the-clock support ensures help is always available, whether it’s roadside assistance, emergency claims, or policy-related queries.",
    moreDescription:
      "Global network of support agents, AI chatbots with human escalation, and mobile app with video consultations. From midnight emergencies to weekend queries, we provide multilingual support, real-time tracking for roadside help, and proactive check-ins during crises.",
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/help-desk-icon.svg",
  },
];

export default function ManagementTeam() {
  const sliderRef = useRef(null);
  const [selectedFocus, setSelectedFocus] = useState(null);

  const scroll = (dir) => {
    const scrollAmount = sliderRef.current?.clientWidth * 0.8;
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const openModal = (item) => {
    setSelectedFocus(item);
  };

  const closeModal = () => {
    setSelectedFocus(null);
  };

  return (
    <section className="bg-gradient-to-b from-black to-zinc-900 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* SECTION TITLE */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Our Core Focuses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Discover the pillars that drive our commitment to excellence in insurance services.
          </motion.p>
        </div>

        <div className="relative">
          {/* GRADIENT OVERLAYS FOR SCROLL INDICATION */}
          <div className="absolute inset-y-0 left-0 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none md:hidden" />
          <div className="absolute inset-y-0 right-0 w-8 sm:w-12 md:w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none md:hidden" />

          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-20
                       bg-zinc-900/50 backdrop-blur-md p-3 sm:p-4 rounded-full shadow-lg
                       hover:bg-zinc-800 transition-all duration-300"
          >
            <ChevronLeft className="text-white" size={20} sm:size={24} />
          </button>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4
                       scrollbar-hide touch-pan-x"
            style={{ scrollSnapStop: "always" }}
          >
            {focuses.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="
                  min-w-[250px] sm:min-w-[280px] md:min-w-[320px] snap-start
                  rounded-3xl
                  bg-gradient-to-br from-zinc-800/50 to-black/50
                  border border-white/10 backdrop-blur-sm
                  overflow-hidden shadow-xl
                  cursor-pointer transition-all duration-300
                  hover:shadow-2xl hover:border-orange-500/30
                "
              >
                {/* IMAGE */}
                <div className="h-[200px] sm:h-[240px] md:h-[280px] flex items-center justify-center bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-[150px] sm:max-h-[180px] md:max-h-[220px] opacity-80 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      filter: "invert(100%) sepia(75%) saturate(7500%) hue-rotate(180deg) brightness(100%) contrast(100%)",
                    }}
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-all duration-300" />
                </div>

                {/* CONTENT */}
                <div className="p-4 sm:p-6 md:p-8">
                  <h4 className="text-orange-400 text-lg sm:text-xl md:text-2xl font-semibold mb-4 tracking-wide">
                    {item.title}
                  </h4>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openModal(item)}
                    className="inline-flex items-center gap-3 group cursor-pointer"
                  >
                    <span className="text-orange-400 text-xl sm:text-2xl group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                    <span className="uppercase tracking-widest text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                      Know More
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-20
                       bg-zinc-900/50 backdrop-blur-md p-3 sm:p-4 rounded-full shadow-lg
                       hover:bg-zinc-800 transition-all duration-300"
          >
            <ChevronRight className="text-white" size={20} sm:size={24} />
          </button>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedFocus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.5, type: "spring", damping: 15 }}
              className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-orange-500/20 shadow-2xl max-w-lg w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} sm:size={24} />
              </button>

              {/* IMAGE */}
              <div className="h-40 sm:h-48 flex items-center justify-center bg-gradient-to-b from-black to-zinc-900 relative">
                <img
                  src={selectedFocus.image}
                  alt={selectedFocus.title}
                  className="max-h-28 sm:max-h-36 opacity-80"
                  style={{
                    filter: "invert(100%) sepia(75%) saturate(7500%) hue-rotate(180deg) brightness(100%) contrast(100%)",
                  }}
                />
                <div className="absolute inset-0 bg-orange-500/5" />
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-8">
                <h3 className="text-orange-400 text-2xl sm:text-3xl font-bold mb-4">
                  {selectedFocus.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-6">
                  {selectedFocus.description}
                </p>
                <p className="text-gray-200 text-sm sm:text-base font-medium">
                  {selectedFocus.moreDescription}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}