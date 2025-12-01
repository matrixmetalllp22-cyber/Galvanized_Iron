
import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  { id: 1, image: "/Images/prague.jpg" },
  { id: 2, image: "/Images/bridge-5624104_1920.jpg" },
  { id: 3, image: "/Images/button-4927935_1920.jpg" },
  { id: 4, image: "/Images/firenze-9292729_1280.jpg" },
  { id: 5, image: "/Images/prague.jpg" },
  { id: 6, image: "/Images/prague.jpg" },
  { id: 7, image: "/Images/bridge-5624104_1920.jpg" },
  { id: 8, image: "/Images/button-4927935_1920.jpg" },
  { id: 9, image: "/Images/firenze-9292729_1280.jpg" },
  { id: 10, image: "/Images/prague.jpg" },
];

// Masonry Breakpoints
const breakpointColumnsObj = {
  default: 4,
  1200: 3,
  768: 2,
  480: 1,
};

export default function PhotoGalleryMasonry() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-gradient-to-b from-[#fafafa] via-[#f4f4f5] to-[#ededed] py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Masonry Layout */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(cert.image)}
              className="cursor-pointer mb-4 rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all"
            >
              <img src={cert.image} alt="gallery" className="w-full object-cover" />
            </motion.div>
          ))}
        </Masonry>
      </div>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              className="max-h-[90vh] max-w-[90vw] rounded-xl border shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
