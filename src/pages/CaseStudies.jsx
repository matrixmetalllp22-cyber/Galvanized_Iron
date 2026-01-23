import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  FaArrowRight,
  FaStethoscope,
  FaChartBar,
  FaHeartbeat,
  FaTools,
} from "react-icons/fa";
/* -------------------- DATA -------------------- */
const caseStudies = [
  {
    id: 1,
    title: "AI-Powered GI Endoscopy Diagnostic System",
    description:
      "An intelligent platform using machine learning to detect gastrointestinal abnormalities in real-time during endoscopic procedures.",
    problem:
      "Traditional endoscopy relies heavily on manual interpretation, leading to missed detections and diagnostic delays.",
    approach:
      "Conducted extensive data analysis on endoscopic images, trained ML models on labeled datasets, and integrated with live video feeds.",
    solution:
      "Developed a React-based dashboard with real-time AI overlays, anomaly detection, and automated reporting.",
    result:
      "Detection accuracy improved by 75%, procedure time reduced by 40%, and false negatives dropped by 85%.",
    impact:
      "Enhanced early diagnosis of GI conditions like polyps and cancers, improving patient outcomes and reducing healthcare costs.",
    tech: [
      "React",
      "TensorFlow.js",
      "Node.js",
      "MongoDB",
      "WebRTC",
      "TailwindCSS",
      "Chart.js",
    ],
    icon: <FaStethoscope className="w-12 h-12 sm:w-14 sm:h-14" />,
    color: "from-orange-300 to-blue-600",
  },
  {
    id: 2,
    title: "Patient Management Portal for GI Disorders",
    description:
      "A comprehensive portal for tracking symptoms, treatments, and analytics for patients with chronic GI conditions like IBS and Crohn's disease.",
    problem:
      "Fragmented patient records and lack of personalized tracking led to poor adherence and delayed interventions.",
    approach:
      "User-centric design with patient interviews, secure data modeling, and integration with wearable health devices.",
    solution:
      "Built a secure, role-based Next.js application with symptom trackers, medication reminders, and predictive health insights.",
    result:
      "Patient adherence increased by 68%, flare-up predictions accurate to 82%, and doctor visit efficiency up by 55%.",
    impact:
      "Empowered patients with self-management tools, reduced hospital readmissions, and enabled proactive care.",
    tech: [
      "Next.js",
      "Express.js",
      "JWT Auth",
      "PostgreSQL",
      "Framer Motion",
      "Redis",
      "Firebase",
    ],
    icon: <FaHeartbeat className="w-12 h-12 sm:w-14 sm:h-14" />,
    color: "from-orange-300 to-green-600",
  },
  {
    id: 3,
    title: "Predictive Analytics Engine for GI Cancer Screening",
    description:
      "A data-driven system analyzing genetic, lifestyle, and clinical data to predict GI cancer risks and recommend screenings.",
    problem:
      "Late-stage diagnoses due to insufficient risk assessment tools and manual data processing.",
    approach:
      "Aggregated multi-source data, applied advanced ML algorithms for risk modeling, and created intuitive visualization tools.",
    solution:
      "Implemented a full-stack app with interactive risk dashboards, automated alerts, and integration with EHR systems.",
    result:
      "Risk prediction accuracy reached 89%, early screenings increased by 60%, and overall survival rates improved by 35%.",
    impact:
      "Revolutionized preventive care in gastroenterology, saving lives through timely interventions and personalized medicine.",
    tech: [
      "Vue.js",
      "Python (Flask)",
      "Scikit-learn",
      "MySQL",
      "D3.js",
      "TailwindCSS",
      "AWS S3",
    ],
    icon: <FaChartBar className="w-12 h-12 sm:w-14 sm:h-14" />,
    color: "from-orange-300 to-purple-600",
  },
];
/* -------------------- MODAL -------------------- */
const Modal = ({ study, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 z-50 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-${study.id}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", stiffness: 220, damping: 26 }}
        className="bg-black rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className={`bg-gradient-to-br ${study.color} text-white p-4 sm:p-6 md:p-10`}
        >
          {study.icon}
          <h2 className="text-xl sm:text-2xl md:text-4xl font-black mt-3 sm:mt-4 md:mt-6 leading-tight">
            {study.title}
          </h2>
          <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg opacity-90">
            {study.description}
          </p>
        </div>
        {/* Content */}
        <div className="p-4 sm:p-5 md:p-10 space-y-6 sm:space-y-7 text-gray-300">
          {["Problem", "Approach", "Solution", "Result", "Impact"].map(
            (section, index) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.08, duration: 0.4 }}
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 border-b border-gray-600 pb-1">
                  {section}
                </h3>
                <p className="leading-relaxed text-xs sm:text-sm md:text-base">
                  {study[section.toLowerCase()]}
                </p>
              </motion.div>
            )
          )}
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 border-b border-gray-600 pb-1">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {study.tech.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.05 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm font-medium"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <div className="flex justify-end pt-4 sm:pt-5 border-t border-gray-700">
            <button
              onClick={onClose}
              className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
/* -------------------- MAIN -------------------- */
export default function GICaseStudies() {
  const [activeStudy, setActiveStudy] = useState(null);
  return (
    <LayoutGroup>
      <section className="py-10 sm:py-14 md:py-24 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Hero */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="flex justify-center items-center gap-3 text-orange-500 mb-2 sm:mb-3 md:mb-4">
              <FaTools />
              <span className="tracking-widest uppercase text-xs sm:text-sm font-semibold">
                Medical Innovation
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-6xl text-white font-black mb-2 sm:mb-3 md:mb-4">
              GI Case Studies
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-xs sm:text-sm md:text-lg">
              Transformative solutions in Gastroenterology powered by cutting-edge
              technology.
            </p>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                layoutId={`card-${study.id}`}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveStudy(study)}
                onKeyDown={(e) =>
                  e.key === "Enter" && setActiveStudy(study)
                }
                tabIndex={0}
                role="button"
                aria-label={`Open case study: ${study.title}`}
                className="bg-gray-900 rounded-3xl shadow-xl cursor-pointer overflow-hidden border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <div
                  className={`bg-gradient-to-br ${study.color} p-4 sm:p-6 md:p-8 text-white`}
                >
                  {study.icon}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-3 sm:mt-4 leading-tight">
                    {study.title}
                  </h3>
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <p className="text-gray-400 mb-4 sm:mb-5 md:mb-6 leading-relaxed text-xs sm:text-sm md:text-base">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 md:mb-6">
                    {study.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 sm:px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm md:text-base">
                    View Case Study <FaArrowRight />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <AnimatePresence>
          {activeStudy && (
            <Modal
              study={activeStudy}
              onClose={() => setActiveStudy(null)}
            />
          )}
        </AnimatePresence>
      </section>
    </LayoutGroup>
  );
}