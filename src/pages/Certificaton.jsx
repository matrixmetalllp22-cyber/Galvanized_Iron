

import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, Award } from "lucide-react";

const certificates = [
  { id: 1, image: "/Images/prague.jpg", title: "ISO 9001:2015" },
  { id: 2, image: "/Images/bridge-5624104_1920.jpg", title: "IATF 16949:2016" },
  { id: 3, image: "/Images/button-4927935_1920.jpg", title: "ISO 14001:2015" },
  { id: 4, image: "/Images/firenze-9292729_1280.jpg", title: "ISO 45001:2018" },
  { id: 5, image: "/Images/prague.jpg", title: "Quality Excellence Award 2024" },
  { id: 6, image: "/Images/prague.jpg", title: "Environmental Leadership" },
  { id: 7, image: "/Images/bridge-5624104_1920.jpg", title: "Zero Incident Safety Award" },
  { id: 8, image: "/Images/button-4927935_1920.jpg", title: "Supplier of the Year" },
  { id: 9, image: "/Images/firenze-9292729_1280.jpg", title: "Sustainability Pioneer" },
  { id: 10, image: "/Images/prague.jpg", title: "Industry Innovation Award" },
];

// Responsive Masonry breakpoints
const breakpointColumns = {
  default: 4,
  1400: 4,
  1100: 3,
  800: 2,
  500: 1,
};

export default function CertificationSection() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [zoom, setZoom] = useState(1);

  // Enhanced wheel + touch zoom for lightbox
  useEffect(() => {
    if (!selectedCert) return;
    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.2 : 0.2;
      setZoom((prev) => Math.max(0.5, Math.min(5, prev + delta)));
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [selectedCert]);

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            Certified <span className="text-orange-400">Excellence</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Internationally accredited • Audited annually • Proudly displayed
          </p>
        </motion.div>
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4 sm:-ml-6 w-auto"
          columnClassName="pl-4 sm:pl-6"
        >
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
              whileHover={{ y: -12 }}
              onClick={() => {
                setSelectedCert(cert.image);
                setZoom(1);
              }}
              className="group relative mb-6 sm:mb-10 cursor-zoom-in overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-800/50 bg-black/70 backdrop-blur-sm"
            >
              <div className="absolute top-3 left-3 z-10 bg-gradient-to-br from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 text-nowrap">
                <Award size={14} />
                CERTIFIED
              </div>
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 sm:p-8">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">{cert.title}</h4>
                  <p className="text-amber-300 text-sm font-medium">Tap to view full certificate</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
      {/* Mobile-First Lightbox with Touch Support */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[9999] flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, rotateY: 10 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 30 }}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 sm:-top-16 right-0 text-white/80 hover:text-white flex items-center gap-2 text-base sm:text-lg font-medium z-10"
              >
                <X size={28} />
                <span className="hidden sm:inline">Close</span>
              </button>
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-4xl border-4 sm:border-8 border-amber-500/40 bg-black/50">
                <motion.img
                  src={selectedCert}
                  alt="Certificate"
                  className="w-full max-h-[80vh] sm:max-h-[85vh] object-contain block mx-auto touch-pan-y"
                  style={{ transform: `scale(${zoom})` }}
                  drag
                  dragMomentum={false}
                  dragElastic={0.1}
                  dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
              {/* Zoom Controls - Mobile Friendly */}
              <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-6 bg-black/70 backdrop-blur-xl px-6 sm:px-8 py-4 sm:py-5 rounded-full border border-white/30 text-white">
                <button onClick={() => setZoom(z => Math.max(0.5, z - 0.3))} className="hover:scale-110 transition">
                  <ZoomOut size={24} />
                </button>
                <span className="font-bold text-lg sm:text-xl min-w-[70px] text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <button onClick={() => setZoom(z => Math.min(5, z + 0.3))} className="hover:scale-110 transition">
                  <ZoomIn size={24} />
                </button>
                <div className="w-px h-8 bg-white/40 mx-2 hidden sm:block" />
                <p className="text-white/70 text-xs sm:text-sm hidden sm:block">Pinch or scroll to zoom</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}