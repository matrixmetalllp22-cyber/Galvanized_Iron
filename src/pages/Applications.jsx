// // import React, { useState, useEffect } from "react";
// // import Masonry from "react-masonry-css";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { ZoomIn, X } from "lucide-react";

// // const images = [
// //   "/Images/prague.jpg",
// //   "/Images/bridge-5624104_1920.jpg",
// //   "/Images/button-4927935_1920.jpg",
// //   "/Images/firenze-9292729_1280.jpg",
// //   "/Images/prague.jpg",
// //   "/Images/prague.jpg",
// //   "/Images/bridge-5624104_1920.jpg",
// //   "/Images/button-4927935_1920.jpg",
// //   "/Images/firenze-9292729_1280.jpg",
// //   "/Images/prague.jpg",
// // ];

// // // PERFECT RESPONSIVE BREAKPOINTS 
// // const breakpointColumnsObj = {
// //   default: 3,     // Large screens: 3 beautiful columns
// //   1100: 3,
// //   900: 2,         // Tablets: 2 columns
// //   600: 1,         // Mobile: 1 column (full width, stunning)
// // };

// // export default function PhotoGalleryMasonry() {
// //   const [selected, setSelected] = useState(null);

// //   useEffect(() => {
// //     const handleEsc = (e) => e.key === "Escape" && setSelected(null);
// //     window.addEventListener("keydown", handleEsc);
// //     return () => window.removeEventListener("keydown", handleEsc);
// //   }, []);

// //   return (
// //     <>
// //       {/* PREMIUM SECTION */}
// //       <section className="bg-black py-20 px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto">

// //           {/* Elegant Heading */}
// //           <div className="text-center mb-16">
// //             <h2 className="text-5xl font-bold text-white mb-4">Photo Gallery</h2>
// //             <p className="text-xl text-white">Click any image to view in full size</p>
// //           </div>

// //           {/* THE PERFECT MASONRY GRID */}
// //           <Masonry
// //             breakpointCols={breakpointColumnsObj}
// //             className="flex -ml-8 w-auto"           // Negative margin for perfect gaps
// //             columnClassName="pl-8"                  // Gap between columns
// //           >
// //             {images.map((src, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 layoutId={`img-${idx}`}
// //                 initial={{ opacity: 0, y: 60 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.7, delay: idx * 0.1 }}
// //                 className="group relative mb-8 overflow-hidden rounded-2xl shadow-2xl cursor-pointer bg-white"
// //                 onClick={() => setSelected({ src, idx })}
// //               >
// //                 {/* Image with fixed aspect ratio */}
// //                 <div className="aspect-[4/3] md:aspect-[5/4] overflow-hidden">
// //                   <img
// //                     src={src}
// //                     alt={`Gallery ${idx + 1}`}
// //                     loading="lazy"
// //                     className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
// //                   />
// //                 </div>

// //                 {/* Premium hover overlay */}
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
// //                   <ZoomIn className="w-16 h-16 text-white drop-shadow-2xl" />
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </Masonry>
// //         </div>
// //       </section>

// //       {/* APPLE/UNSPLASH LEVEL LIGHTBOX */}
// //       <AnimatePresence>
// //         {selected && (
// //           <motion.div
// //             className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[9999] flex items-center justify-center p-6"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={() => setSelected(null)}
// //           >
// //             {/* Close Button */}
// //             <button
// //               onClick={() => setSelected(null)}
// //               className="absolute top-6 right-6 text-white hover:text-orange-400 transition z-50"
// //             >
// //               <X className="w-12 h-12 drop-shadow-2xl" />
// //             </button>

// //             {/* Magic zoom from thumbnail */}
// //             <motion.div
// //               layoutId={`img-${selected.idx}`}
// //               className="relative max-w-full max-h-full"
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <img
// //                 src={selected.src}
// //                 alt="Full view"
// //                 className="max-h-[92vh] max-w-[92vw] rounded-3xl shadow-2xl object-contain border-8 border-white/10"
// //               />
// //             </motion.div>

// //             {/* Mobile hint */}
// //             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-medium md:hidden">
// //               Pinch to zoom
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // }




// import React, { useState, useEffect } from "react";
// import Masonry from "react-masonry-css";
// import { motion, AnimatePresence } from "framer-motion";
// import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

// const images = [
//   "/Images/prague.jpg",
//   "/Images/bridge-5624104_1920.jpg",
//   "/Images/button-4927935_1920.jpg",
//   "/Images/firenze-9292729_1280.jpg",
//   "/Images/prague.jpg",
//   "/Images/prague.jpg",
//   "/Images/bridge-5624104_1920.jpg",
//   "/Images/button-4927935_1920.jpg",
//   "/Images/firenze-9292729_1280.jpg",
//   "/Images/prague.jpg",
// ];

// const breakpointColumnsObj = {
//   default: 3,
//   1100: 3,
//   900: 2,
//   600: 1,
// };

// export default function PhotoGalleryMasonry() {
//   const [currentIndex, setCurrentIndex] = useState(null);

//   // ESC + Arrow key support
//   useEffect(() => {
//     const handleKey = (e) => {
//       if (currentIndex === null) return;

//       if (e.key === "Escape") setCurrentIndex(null);
//       if (e.key === "ArrowRight") handleNext();
//       if (e.key === "ArrowLeft") handlePrev();
//     };

//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [currentIndex]);

//   // Prevent body scroll when modal is open
//   useEffect(() => {
//     document.body.style.overflow = currentIndex !== null ? "hidden" : "auto";
//   }, [currentIndex]);

//   const handleNext = () => {
//     setCurrentIndex((prev) =>
//       prev === images.length - 1 ? 0 : prev + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? images.length - 1 : prev - 1
//     );
//   };

//   return (
//     <>
//       {/* GALLERY */}
//       <section className="bg-black py-20 px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-white mb-4">
//               Photo Gallery
//             </h2>
//             <p className="text-xl text-white">
//               Click any image to view in full size
//             </p>
//           </div>

//           <Masonry
//             breakpointCols={breakpointColumnsObj}
//             className="flex -ml-8 w-auto"
//             columnClassName="pl-8"
//           >
//             {images.map((src, idx) => (
//               <motion.div
//                 key={`${src}-${idx}`}
//                 layoutId={`img-${idx}`}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7, delay: idx * 0.1 }}
//                 className="group relative mb-8 overflow-hidden rounded-2xl shadow-2xl cursor-pointer bg-white"
//                 onClick={() => setCurrentIndex(idx)}
//               >
//                 <div className="aspect-[4/3] md:aspect-[5/4] overflow-hidden">
//                   <img
//                     src={src}
//                     alt={`Gallery ${idx + 1}`}
//                     loading="lazy"
//                     className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
//                   />
//                 </div>

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
//                   <ZoomIn className="w-16 h-16 text-white drop-shadow-2xl" />
//                 </div>
//               </motion.div>
//             ))}
//           </Masonry>
//         </div>
//       </section>

//       {/* LIGHTBOX */}
//       <AnimatePresence>
//         {currentIndex !== null && (
//           <motion.div
//             className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[9999] flex items-center justify-center p-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setCurrentIndex(null)}
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setCurrentIndex(null)}
//               className="absolute top-6 right-6 text-white hover:text-orange-400 transition z-50"
//             >
//               <X className="w-12 h-12 drop-shadow-2xl" />
//             </button>

//             {/* Previous Button */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handlePrev();
//               }}
//               className="absolute left-6 md:left-10 text-white hover:text-orange-400 transition z-50 bg-black/40 backdrop-blur-xl rounded-full p-3"
//             >
//               <ChevronLeft className="w-10 h-10" />
//             </button>

//             {/* Next Button */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleNext();
//               }}
//               className="absolute right-6 md:right-10 text-white hover:text-orange-400 transition z-50 bg-black/40 backdrop-blur-xl rounded-full p-3"
//             >
//               <ChevronRight className="w-10 h-10" />
//             </button>

//             {/* Magic zoom image */}
//             <motion.div
//               key={currentIndex}
//               layoutId={`img-${currentIndex}`}
//               className="relative max-w-full max-h-full"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <img
//                 src={images[currentIndex]}
//                 alt="Full view"
//                 className="max-h-[92vh] max-w-[92vw] rounded-3xl shadow-2xl object-contain border-8 border-white/10"
//               />
//             </motion.div>

//             {/* Mobile hint */}
//             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-medium md:hidden">
//               Swipe or tap arrows
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }



import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/Images/prague.jpg",
  "/Images/bridge-5624104_1920.jpg",
  "/Images/button-4927935_1920.jpg",
  "/Images/firenze-9292729_1280.jpg",
  "/Images/prague.jpg",
  "/Images/prague.jpg",
  "/Images/bridge-5624104_1920.jpg",
  "/Images/button-4927935_1920.jpg",
  "/Images/firenze-9292729_1280.jpg",
  "/Images/prague.jpg",
];

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  900: 2,
  600: 1,
};

export default function PhotoGalleryMasonry() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  // ESC + Arrow key support
  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex === null) return;

      if (e.key === "Escape") setCurrentIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = currentIndex !== null ? "hidden" : "auto";
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Swipe handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext(); // swipe left → next
      else handlePrev();          // swipe right → prev
    }

    setTouchStartX(null);
  };

  return (
    <>
      {/* GALLERY */}
      <section className="bg-black py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Photo Gallery
            </h2>
            <p className="text-xl text-white">
              Click any image to view in full size
            </p>
          </div>

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex -ml-8 w-auto"
            columnClassName="pl-8"
          >
            {images.map((src, idx) => (
              <motion.div
                key={`${src}-${idx}`}
                layoutId={`img-${idx}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="group relative mb-8 overflow-hidden rounded-2xl shadow-2xl cursor-pointer bg-white"
                onClick={() => setCurrentIndex(idx)}
              >
                <div className="aspect-[4/3] md:aspect-[5/4] overflow-hidden">
                  <img
                    src={src}
                    alt={`Gallery ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <ZoomIn className="w-16 h-16 text-white drop-shadow-2xl" />
                </div>
              </motion.div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[9999] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCurrentIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setCurrentIndex(null)}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white hover:text-orange-400 transition z-50"
            >
              <X className="w-9 h-9 sm:w-12 sm:h-12 drop-shadow-2xl" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-xl text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-sm sm:text-base font-medium z-50">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="hidden sm:flex absolute left-3 sm:left-10 text-white hover:text-orange-400 transition z-50 bg-black/40 backdrop-blur-xl rounded-full p-2 sm:p-3"
            >
              <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="hidden sm:flex absolute right-3 sm:right-10 text-white hover:text-orange-400 transition z-50 bg-black/40 backdrop-blur-xl rounded-full p-2 sm:p-3"
            >
              <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            {/* Magic zoom image */}
            <motion.div
              key={currentIndex}
              layoutId={`img-${currentIndex}`}
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={images[currentIndex]}
                alt="Full view"
                className="max-h-[90vh] max-w-[95vw] sm:max-h-[92vh] sm:max-w-[92vw] rounded-2xl sm:rounded-3xl shadow-2xl object-contain border-4 sm:border-8 border-white/10"
              />
            </motion.div>

            {/* Mobile Hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl text-white px-5 py-2 rounded-full text-xs sm:text-sm font-medium sm:hidden">
              Swipe left or right
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
