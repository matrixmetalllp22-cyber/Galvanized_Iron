import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const focuses = [
  {
    title: "Customer Protection",
    description:
      "We safeguard our customers against life's uncertainties by providing reliable and comprehensive insurance coverage across health, motor, and property.",
    moreDescription:
      "Our customer protection strategies include advanced risk assessment tools, personalized policy recommendations, and proactive alerts for potential vulnerabilities. We partner with leading security firms to ensure data privacy and fraud prevention, while our dedicated team monitors emerging threats to keep your coverage up-to-date.",
    image:
      "https://cdn-icons-png.flaticon.com/512/4341/4341139.png",
  },
  {
    title: "Fast Claim Settlement",
    description:
      "Our streamlined and transparent claim process ensures quick settlements, minimizing stress and maximizing trust during critical moments.",
    moreDescription:
      "Experience claim settlements in as little as 24 hours for eligible cases. Our AI-powered verification system cross-checks documents instantly, while blockchain technology ensures tamper-proof records. With a 98% approval rate and dedicated claim concierges, we turn stressful situations into seamless resolutions.",
    image:
      "https://cdn-icons-png.flaticon.com/512/3107/3107941.png",
  },
  {
    title: "Digital Innovation",
    description:
      "Leveraging cutting-edge digital platforms and AI-driven tools to simplify policy purchase, renewals, and claims for a seamless customer experience.",
    moreDescription:
      "Our digital ecosystem includes a voice-activated policy builder, AR-based property assessments, and predictive analytics for premium optimization. Integrated with smart home devices, our platform offers real-time risk monitoring and automated adjustments, putting innovation at your fingertips.",
    image:
      "https://cdn-icons-png.flaticon.com/512/2103/2103655.png",
  },
  {
    title: "Risk Management",
    description:
      "We help individuals and businesses identify, assess, and mitigate risks through customized insurance solutions and expert advisory services.",
    moreDescription:
      "From enterprise-wide risk audits to personal financial health checks, our experts use data-driven insights and scenario modeling to craft bespoke strategies. We offer workshops, simulation tools, and ongoing consultations to empower you in navigating uncertainties with confidence.",
    image:
      "https://cdn-icons-png.flaticon.com/512/3050/3050525.png",
  },
  {
    title: "Trust & Transparency",
    description:
      "Built on integrity and ethical practices, we ensure clear communication, fair pricing, and complete transparency in every policy we offer.",
    moreDescription:
      "Every policy includes a transparency dashboard showing premium breakdowns, claim histories, and performance metrics. We publish annual ethics reports, maintain open-source pricing algorithms, and offer third-party audits upon request, fostering unbreakable trust.",
    image:
      "https://cdn-icons-png.flaticon.com/512/1570/1570109.png",
  },
  {
    title: "24/7 Assistance",
    description:
      "Our round-the-clock support ensures help is always available, whether it's roadside assistance, emergency claims, or policy-related queries.",
    moreDescription:
      "Global network of support agents, AI chatbots with human escalation, and mobile app with video consultations. From midnight emergencies to weekend queries, we provide multilingual support, real-time tracking for roadside help, and proactive check-ins during crises.",
    image:
      "https://cdn-icons-png.flaticon.com/512/3048/3048361.png",
  },
];

export default function ManagementTeam() {
  const sliderRef = useRef(null);
  const [selectedFocus, setSelectedFocus] = useState(null);

  const scroll = (dir) => {
    if (!sliderRef.current) return;
    
    const isMobile = window.innerWidth < 768;
    const cardWidth = isMobile ? 250 : 320;
    const gap = isMobile ? 16 : 24;
    const scrollAmount = cardWidth + gap;
    
    sliderRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const openModal = (item) => {
    setSelectedFocus(item);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedFocus(null);
    // Restore body scroll
    document.body.style.overflow = 'auto';
  };

  // Handle ESC key to close modal
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section className="bg-gradient-to-b from-black to-zinc-900 py-8 sm:py-12 md:py-16 lg:py-20 px-4 xs:px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* SECTION TITLE */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4 px-2"
          >
            Our Core Focuses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-gray-400 text-sm xs:text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-6"
          >
            Discover the pillars that drive our commitment to excellence in insurance services.
          </motion.p>
        </div>

        <div className="relative">
          {/* GRADIENT OVERLAYS FOR SCROLL INDICATION - Visible on mobile only */}
          <div className="absolute inset-y-0 left-0 w-12 xs:w-16 sm:w-20 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none md:hidden" />
          <div className="absolute inset-y-0 right-0 w-12 xs:w-16 sm:w-20 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none md:hidden" />

          {/* LEFT ARROW - Desktop */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 md:-left-10 lg:-left-12 top-1/2 -translate-y-1/2 z-20
                       bg-zinc-900/70 backdrop-blur-md p-3 sm:p-4 rounded-full shadow-xl
                       hover:bg-zinc-800 active:scale-95 transition-all duration-300
                       focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            aria-label="Scroll left"
          >
            <ChevronLeft className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* MOBILE NAVIGATION DOTS */}
          <div className="md:hidden flex justify-center gap-2 mt-6 mb-2">
            {focuses.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (sliderRef.current) {
                    const cardWidth = 250 + 16; // card width + gap
                    sliderRef.current.scrollTo({
                      left: cardWidth * index,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="w-2 h-2 rounded-full bg-gray-700 hover:bg-gray-500 transition-colors"
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* SLIDER CONTAINER */}
          <div className="relative">
            <div
              ref={sliderRef}
              className="flex gap-4 xs:gap-5 sm:gap-6 overflow-x-auto scroll-smooth
                         scrollbar-hide touch-pan-x snap-x snap-mandatory
                         pb-6 sm:pb-8 px-1 xs:px-2"
              style={{
                scrollPadding: '0 16px',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {focuses.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: Math.min(index * 0.1, 0.4),
                    ease: "easeOut" 
                  }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="
                    flex-shrink-0
                    w-[240px] xs:w-[250px] sm:w-[280px] md:w-[300px] lg:w-[320px] xl:w-[340px]
                    snap-start
                    rounded-2xl xs:rounded-3xl
                    bg-gradient-to-br from-zinc-800/50 to-black/50
                    border border-white/10 backdrop-blur-sm
                    overflow-hidden shadow-lg sm:shadow-xl
                    cursor-pointer transition-all duration-300
                    hover:shadow-2xl hover:border-orange-500/30
                    active:scale-[0.98]
                  "
                >
                  {/* IMAGE CONTAINER */}
                  <div className="
                    h-[180px] xs:h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px]
                    flex items-center justify-center 
                    bg-gradient-to-b from-zinc-900/90 to-black/90 
                    relative overflow-hidden group
                  ">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="
                        w-24 h-24 xs:w-28 xs:h-28 
                        sm:w-32 sm:h-32 md:w-36 md:h-36 
                        opacity-80 transition-all duration-500 
                        group-hover:scale-110 group-hover:opacity-100
                      "
                      style={{
                        filter: "invert(93%) sepia(50%) saturate(300%) hue-rotate(10deg) brightness(110%) contrast(100%)",
                      }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:via-orange-500/5 group-hover:to-orange-500/10 transition-all duration-500" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8">
                    <h4 className="
                      text-orange-400 
                      text-base xs:text-lg sm:text-xl md:text-2xl 
                      font-semibold mb-2 xs:mb-3 sm:mb-4 
                      tracking-tight
                    ">
                      {item.title}
                    </h4>

                    <p className="
                      text-gray-300 
                      text-xs xs:text-sm sm:text-base 
                      leading-relaxed xs:leading-relaxed sm:leading-relaxed
                      mb-4 xs:mb-5 sm:mb-6
                      line-clamp-3
                    ">
                      {item.description}
                    </p>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openModal(item)}
                      className="inline-flex items-center gap-2 xs:gap-3 group cursor-pointer"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          openModal(item);
                        }
                      }}
                    >
                      <span className="
                        text-orange-400 
                        text-xl xs:text-2xl 
                        group-hover:translate-x-1 xs:group-hover:translate-x-2 
                        transition-transform duration-300
                      ">
                        →
                      </span>
                      <span className="
                        uppercase tracking-wider xs:tracking-widest 
                        text-xs xs:text-sm 
                        text-gray-300 group-hover:text-white 
                        transition-colors duration-300
                      ">
                        Know More
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW - Desktop */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 md:-right-10 lg:-right-12 top-1/2 -translate-y-1/2 z-20
                       bg-zinc-900/70 backdrop-blur-md p-3 sm:p-4 rounded-full shadow-xl
                       hover:bg-zinc-800 active:scale-95 transition-all duration-300
                       focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            aria-label="Scroll right"
          >
            <ChevronRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* MOBILE SCROLL HINT */}
        <div className="md:hidden text-center mt-6">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <span className="animate-bounce">←</span>
            Scroll for more
            <span className="animate-bounce">→</span>
          </p>
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.4, 
                type: "spring", 
                damping: 25,
                stiffness: 300 
              }}
              className="
                bg-gradient-to-br from-zinc-900 to-black 
                rounded-2xl xs:rounded-3xl 
                border border-orange-500/20 
                shadow-2xl 
                max-w-md sm:max-w-lg md:max-w-2xl 
                w-full max-h-[90vh] sm:max-h-[85vh]
                overflow-y-auto
                relative
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={closeModal}
                className="
                  absolute top-3 xs:top-4 right-3 xs:right-4 
                  text-gray-400 hover:text-white 
                  bg-black/50 rounded-full p-1 xs:p-2
                  transition-all duration-300
                  hover:bg-black/80
                  focus:outline-none focus:ring-2 focus:ring-orange-500/50
                  z-10
                "
                aria-label="Close modal"
              >
                <X className="w-4 h-4 xs:w-5 xs:h-5" />
              </button>

              {/* IMAGE */}
              <div className="
                h-32 xs:h-36 sm:h-40 md:h-44 
                flex items-center justify-center 
                bg-gradient-to-b from-black to-zinc-900 
                relative
              ">
                <img
                  src={selectedFocus.image}
                  alt={selectedFocus.title}
                  className="
                    w-20 h-20 xs:w-24 xs:h-24 
                    sm:w-28 sm:h-28 md:w-32 md:h-32 
                    opacity-80
                  "
                  style={{
                    filter: "invert(93%) sepia(50%) saturate(300%) hue-rotate(10deg) brightness(110%) contrast(100%)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-5 xs:p-6 sm:p-8">
                <h3 
                  id="modal-title"
                  className="
                    text-orange-400 
                    text-xl xs:text-2xl sm:text-3xl 
                    font-bold mb-3 xs:mb-4 sm:mb-5
                  "
                >
                  {selectedFocus.title}
                </h3>
                <p className="
                  text-gray-300 
                  text-sm xs:text-base 
                  mb-4 xs:mb-5 sm:mb-6
                  leading-relaxed
                ">
                  {selectedFocus.description}
                </p>
                <p className="
                  text-gray-200 
                  text-sm xs:text-base 
                  leading-relaxed xs:leading-relaxed
                  font-medium
                ">
                  {selectedFocus.moreDescription}
                </p>
              </div>

              {/* CLOSE BUTTON BOTTOM - Mobile friendly */}
              <div className="
                sticky bottom-0 
                bg-gradient-to-t from-zinc-900 to-transparent 
                p-4 xs:p-5 
                border-t border-white/10
                flex justify-center
                md:hidden
              ">
                <button
                  onClick={closeModal}
                  className="
                    w-full py-3 
                    bg-orange-500/20 hover:bg-orange-500/30
                    text-orange-400 
                    rounded-xl
                    text-sm font-medium
                    transition-all duration-300
                    active:scale-95
                  "
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 