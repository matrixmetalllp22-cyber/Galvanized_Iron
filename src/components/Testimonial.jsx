import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
     text: `Matrix Metals represents a rare blend of engineering intelligence, operational discipline, and real-world manufacturing experience. Their mastery in coil processing technology and precision line integration elevated our plant’s performance to standards we did not think were possible. A partner with true technical depth.`,
     author: "Director",
     role: "Stainless Steel Processing Division"
   },
   {
     text: `What makes Matrix Metals exceptional is their unwavering reliability. Every commitment—technical, commercial, or operational—was executed with absolute clarity and precision. Their team understands the urgency of industrial production, and they consistently deliver above expectation.`,
     author: "Head of Operations",
     role: "Metal Solutions Group"
   },
   {
     text: `Matrix Metals brought a level of process understanding that transformed our efficiency. Their insights into slitting, CTL systems, polishing lines, and automation allowed us to streamline multiple stages of manufacturing. Their knowledge mirrors that of top-tier international engineering houses.`,
     author: "Plant Manager",
     role: "Industrial Metals Corporation"
   },
   {
     text: `Whenever we encountered technical roadblocks, Matrix Metals was the only partner capable of delivering fast, intelligent, and actionable solutions. Their approach is analytical, structured, and deeply grounded in industrial science. They operate with the mindset of global engineering consultants.`,
     author: "General Manager",
     role: "Precision Facility"
   },
   {
     text: `Matrix Metals executed our project with remarkable professionalism — from line specification to vendor coordination to commissioning. Their documentation, quality protocols, and technical detailing exceeded international benchmarks. They are redefining project execution standards in India.`,
     author: "Vice President – Projects",
     role: "Alloy & Coil Division"
   },
   {
     text: `Working with Matrix Metals gives us a sense of long-term stability. Their transparency, accuracy in communication, and commitment to safeguarding client interests make them more than a supplier — they are a strategic partner driving our growth curve.`,
     author: "CEO",
     role: "Metal Infrastructure Group"
   },
   {
     text: `Matrix Metals has a strong command over automation, industrial controls, and process safety. Their ability to modernize existing lines and embed Industry 4.0 features helped us achieve traceability, energy optimization, and consistent product quality across batches.`,
     author: "Technical Director",
     role: "Advanced Manufacturing Unit"
   },
   {
     text: `Matrix Metals is one of the few companies in the Indian market with global-standard engineering documentation. Their specifications, RFQs, and process manuals are comprehensive, precise, and highly professional — a reflection of their deep industry credibility.`,
     author: "Senior Consultant",
     role: "International Engineering Firm"
   },
   {
     text: `Matrix Metals delivers engineering competence at a genuinely global level. Their ability to decode complex technical environments and provide solutions that are both innovative and production-ready is truly impressive.`,
     author: "Global Sourcing Head",
     role: "Multinational Steel Processor"
   },
   {
     text: `Every interaction with Matrix Metals reflects meticulous accuracy — from dimensional tolerances to process parameters, nothing is left to assumption. Their precision-driven culture has significantly improved our line performance.`,
     author: "Quality Assurance Director",
     role: "Coil Processing Unit"
   },
   {
     text: `Matrix Metals operates with a standard of excellence that is rare in the industry. Their professionalism, responsiveness, and attention to detail consistently exceeded our internal benchmarks.`,
     author: "Senior Executive",
     role: "Industrial Engineering Services"
   },
   {
     text: `The technical leadership at Matrix Metals is outstanding. They understand machinery at a depth that allows them to foresee challenges long before they occur. Their guidance saved us both time and significant cost.`,
     author: "Project Leader",
     role: "Metals Automation Division"
   },
   {
     text: `Matrix Metals earned our trust from day one. Their advice is unbiased, technically sound, and always aligned with long-term value — not short-term gains. A true engineering partner in every sense.`,
     author: "COO",
     role: "Heavy Industries Group"
   },
   {
     text: `From concept to commissioning, Matrix Metals executed our turnkey solution with unmatched clarity. Their structured approach, strong vendor network, and deep technical capability resulted in a world-class installation.`,
     author: "Head of Projects",
     role: "Sheet Metal Technology Firm"
   },
   {
     text: `Matrix Metals produces the most detailed and accurate technical documentation we have ever received from an Indian engineering company. Their RFQs, line layouts, and process manuals are global-quality deliverables.`,
     author: "Engineering Consultant",
     role: "International Procurement Firm"
   },
   {
     text: `Our plant’s efficiency, yield, and process reliability improved significantly after implementing Matrix Metals' recommendations. Their technical diagnostics are incredibly sharp and backed by data-driven reasoning.`,
     author: "Operations Manager",
     role: "Stainless Steel Mill"
   },
   {
     text: `Matrix Metals is one of the few teams that genuinely listens to customer pain points and crafts solutions that work in real industrial environments. Their support system is proactive, fast, and highly competent.`,
     author: "Plant Director",
     role: "Precision Fabrication Industry"
   },
   {
     text: `Matrix Metals’ knowledge of coil-to-coil systems, polishing lines, slitting, CTL, and automation rivals international manufacturers. Their expertise is not theoretical—it is field-tested and reliable.`,
     author: "Technical Head",
     role: "Modern Metal Processing Facility"
   }
  ];
export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center bg-white relative overflow-hidden px-4 sm:px-6 lg:px-10 py-10">

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 sm:left-6 text-gray-400 hover:text-black text-3xl sm:text-4xl transition-all z-20"
      >
        <FiChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-3 sm:right-6 text-gray-400 hover:text-black text-3xl sm:text-4xl transition-all z-20"
      >
        <FiChevronRight />
      </button>

      {/* Content Wrapper */}
      <div className="max-w-4xl md:max-w-5xl text-center px-2 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-5 sm:space-y-6"
          >
            <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-relaxed md:leading-snug px-1">
              “{testimonials[index].text}”
            </p>

            <h4 className="text-base sm:text-lg md:text-xl font-medium text-gray-900">
              — {testimonials[index].author}
            </h4>

            <h4 className="text-sm sm:text-lg md:text-xl font-medium text-gray-700">
              {testimonials[index].role}
            </h4>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
