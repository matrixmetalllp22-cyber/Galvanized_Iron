
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

const breakpointColumns = {
  default: 4,
  1200: 3,
  768: 2,
  480: 1,
};

export default function QualitySection() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="bg-gradient-to-b from-[#fafafa] via-[#f4f4f5] to-[#ededed] text-gray-900">

      {/* ===== QUALITY STATEMENT ===== */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-700"
        >
          Quality Statement
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center mt-5 text-[17px] text-gray-600 leading-relaxed max-w-3xl mx-auto"
        >
          JSW MI Steel Service Center Pvt. Ltd. shall strive to sustain business
          excellence by adopting the best practices to improve the Quality of
          its products and services.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-24 h-[3px] bg-gray-400/60 mx-auto my-10 rounded-full"
        />

        <h3 className="text-xl font-semibold text-center text-gray-700 mb-8 tracking-wide">
          We Are Committed To
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 text-gray-700 leading-relaxed text-[16px] max-w-4xl mx-auto">
          <ul className="space-y-3 list-disc list-inside">
            <li>Meeting mutually agreed customer & stakeholder requirements.</li>
            <li>Following best work ethics and industry practices globally.</li>
            <li>Mitigating risks with strong evaluation & corrective actions.</li>
          </ul>
          <ul className="space-y-3 list-disc list-inside">
            <li>Building quality mindset across the JSW MI value chain.</li>
            <li>Continuously improving the Quality Management System.</li>
            <li>Contributing positively to environment & society.</li>
          </ul>
        </div>
      </div>

      {/* ===== QUALITY CERTIFICATES WITH MASONRY GRID ===== */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-gray-700 mb-4 tracking-tight">
            Quality Certificates
          </h2>

          <p className="text-sm text-gray-600 mb-12 max-w-3xl leading-relaxed">
            JSW MI Management System complies with ISO 9001:2015, IATF 16949:2016,
            ISO 14001:2015 & ISO 45001:2018.
          </p>

          <Masonry
            breakpointCols={breakpointColumns}
            className="flex gap-4"
            columnClassName="masonry-col"
          >
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                className="cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 mb-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedCert(cert.image)}
              >
                <img src={cert.image} alt="certificate" className="w-full object-cover" />
              </motion.div>
            ))}
          </Masonry>
        </div>

        {/* ===== POPUP MODAL ===== */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] flex items-center justify-center p-6 cursor-pointer"
              onClick={() => setSelectedCert(null)}
            >
              <motion.img
                src={selectedCert}
                className="rounded-xl max-w-[90vw] max-h-[90vh] border shadow-2xl bg-white"
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
