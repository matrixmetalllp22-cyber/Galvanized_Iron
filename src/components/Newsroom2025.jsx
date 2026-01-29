import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

// Helper function to parse date to ISO format
const parseDateToISO = (dateStr) => {
  try {
    const parts = dateStr.split(" ");
    const day = parts[0];
    const month = parts[1];
    const year = parts[2] || new Date().getFullYear();
    const date = new Date(`${month} ${day}, ${year}`);
    return date.toISOString().split("T")[0]; // YYYY-MM-DD
  } catch (e) {
    return ""; // Fallback if parsing fails
  }
};

// Sample news data - Replace with your actual data
const newsData = [
  {
    year: 2020,
    items: [
      {
        title: "Company Founded",
        location: "New York, USA",
        date: "15 January 2020",
        description: "Matrix Metals was established with a vision to revolutionize the metals industry through innovative solutions.",
        imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop",
      },
      {
        title: "First Product Launch",
        location: "Chicago, USA",
        date: "20 June 2020",
        description: "Launched our flagship alloy product, receiving positive feedback from initial clients.",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    year: 2021,
    items: [
      {
        title: "Expansion to Europe",
        location: "London, UK",
        date: "10 March 2021",
        description: "Opened our first international office in London to serve the European market.",
        imageUrl: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&auto=format&fit=crop",
      },
      {
        title: "Sustainability Initiative",
        location: "Global",
        date: "22 April 2021",
        description: "Launched a company-wide sustainability program focusing on eco-friendly manufacturing.",
        imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    year: 2022,
    items: [
      {
        title: "Major Partnership Announced",
        location: "Tokyo, Japan",
        date: "5 July 2022",
        description: "Formed a strategic partnership with a leading Japanese tech firm for advanced materials research.",
        imageUrl: "https://images.unsplash.com/photo-1551135049-8a33b2fb2f61?w=800&auto=format&fit=crop",
      },
      {
        title: "Award for Innovation",
        location: "San Francisco, USA",
        date: "12 November 2022",
        description: "Received the Innovation Award at the Global Metals Conference.",
        imageUrl: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        title: "New Factory Opening",
        location: "Mumbai, India",
        date: "18 February 2023",
        description: "Inaugurated a state-of-the-art factory in Mumbai to boost production capacity.",
        imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop",
      },
      {
        title: "Record Sales Quarter",
        location: "Global",
        date: "30 June 2023",
        description: "Achieved record-breaking sales in Q2, surpassing all previous benchmarks.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        title: "R&D Breakthrough",
        location: "Berlin, Germany",
        date: "9 May 2024",
        description: "Announced a breakthrough in lightweight alloy technology for aerospace applications.",
        imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop",
      },
      {
        title: "CSR Program Launch",
        location: "Various Locations",
        date: "15 October 2024",
        description: "Launched comprehensive CSR programs focusing on community development and education.",
        imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop",
      },
    ],
  },
];

// YearBlock Component
const YearBlock = React.memo(({ year, items, index, isLast, setActiveItem }) => {
  const yearRef = useRef(null);
  const isInView = useInView(yearRef, { once: true, margin: "-100px" });
  
  return (
    <div className="relative" ref={yearRef}>
      {/* Year Label Container - Fixed position */}
      <div className="relative mb-8 md:mb-12 z-30">
        <div className="flex items-center justify-center md:justify-start md:absolute md:left-1/2 md:-translate-x-1/2">
          {/* Timeline Dot */}
          <div className="relative">
            <motion.div
              className="w-6 h-6 bg-red-600 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.8)]"
              animate={{ scale: isInView ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>
          
          {/* Year Text - Positioned to the right of dot on mobile, centered on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="ml-4 md:ml-8"
          >
            <span className="text-2xl md:text-3xl font-bold text-red-500 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-red-500/30">
              {year}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Items Container */}
      <div className="space-y-6 md:space-y-0">
        {items.map((item, itemIndex) => {
          const isoDate = parseDateToISO(item.date);
          const itemRef = useRef(null);
          const itemInView = useInView(itemRef, { once: true, margin: "-50px" });
          
          const isEvenItem = itemIndex % 2 === 0;
          const isDesktopLeft = index % 2 === 0 ? isEvenItem : !isEvenItem;
          
          return (
            <motion.div
              key={item.title}
              ref={itemRef}
              initial={{ opacity: 0, x: isDesktopLeft ? -30 : 30 }}
              animate={itemInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: itemIndex * 0.15 }}
              className={`relative ${itemIndex < items.length - 1 ? 'mb-6 md:mb-10' : ''}`}
            >
              {/* Desktop: Connecting line from timeline to card */}
              <div className="hidden md:block absolute top-6 w-8 h-[2px] bg-red-500/40 left-1/2 transform -translate-x-1/2 z-10" />
              
              {/* Mobile: Dot for item */}
              <div className="md:hidden absolute left-0 top-6 w-4 h-4 bg-red-400 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
              
              {/* Item Card */}
              <div className={`ml-8 md:ml-0 ${isDesktopLeft ? 'md:pr-[calc(50%+3rem)]' : 'md:pl-[calc(50%+3rem)]'}`}>
                <motion.article
                  whileHover={{ y: -4 }}
                  onClick={() => setActiveItem(item)}
                  className="cursor-pointer group relative bg-gradient-to-br from-white/8 to-white/2 backdrop-blur-xl border border-white/15 p-6 rounded-xl shadow-lg hover:shadow-red-500/20 transition-all duration-300"
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${item.title}`}
                >
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-300 mb-3">
                    <span className="flex items-center">
                      <span className="mr-2 text-red-400">📍</span> {item.location}
                    </span>
                    <time dateTime={isoDate} className="flex items-center">
                      <span className="mr-2 text-red-400">🗓</span> {item.date}
                    </time>
                  </div>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {item.description.substring(0, 100)}...
                  </p>
                  <div className="mt-4 flex items-center text-red-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View details
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </motion.article>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
});

YearBlock.displayName = 'YearBlock';

export default function NewsroomTimeline() {
  const containerRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const lineScale = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setActiveItem(null);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeItem]);

  return (
    <section className="relative bg-[#0b0b0d] text-white py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-red-500/5 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-red-400/90 font-medium mb-3">
            Our Journey
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Timeline of Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow our journey through the years as we grow and innovate in the metals industry.
          </p>
        </motion.div>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Central vertical timeline line - Desktop */}
          <div className="hidden md:block absolute left-1/2 w-[2px] bg-gradient-to-b from-transparent via-red-500/20 to-transparent h-full transform -translate-x-1/2" />
          <motion.div
            style={{ height: lineScale }}
            className="hidden md:block absolute left-1/2 w-[3px] bg-gradient-to-b from-red-500 via-red-600 to-red-400 shadow-[0_0_25px_rgba(220,38,38,0.6)] transform -translate-x-1/2 origin-top"
          />

          {/* Mobile vertical timeline line */}
          <div className="md:hidden absolute left-4 w-[2px] bg-gradient-to-b from-transparent via-red-500/20 to-transparent h-full" />
          <motion.div
            style={{ height: lineScale }}
            className="md:hidden absolute left-4 w-[3px] bg-gradient-to-b from-red-500 via-red-600 to-red-400 shadow-[0_0_15px_rgba(220,38,38,0.6)] origin-top"
          />

          {/* Year Blocks */}
          <div className="space-y-16 md:space-y-24">
            {newsData.map((yearData, index) => (
              <YearBlock
                key={yearData.year}
                year={yearData.year}
                items={yearData.items}
                index={index}
                isLast={index === newsData.length - 1}
                setActiveItem={setActiveItem}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* MODAL */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gradient-to-br from-gray-900/90 to-black/90 border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 max-w-2xl w-full mx-auto overflow-y-auto max-h-[90vh] backdrop-blur-xl"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-400 text-xl transition-colors bg-black/50 rounded-full p-2 z-10"
                aria-label="Close modal"
              >
                ✕
              </button>
              
              {activeItem.imageUrl && (
                <div className="mb-6 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8">
                  <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl">
                    <img
                      src={activeItem.imageUrl}
                      alt={activeItem.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                </div>
              )}
              
              <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold mb-4 text-red-400">
                {activeItem.title}
              </h3>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-gray-300 mb-6">
                <span className="flex items-center">
                  <span className="mr-2 text-red-400">📍</span> 
                  <span className="font-medium">{activeItem.location}</span>
                </span>
                <span className="flex items-center">
                  <span className="mr-2 text-red-400">🗓</span> 
                  <span className="font-medium">{activeItem.date}</span>
                </span>
              </div>
              
              <p className="text-gray-200 leading-relaxed mb-6 whitespace-pre-line">
                {activeItem.description}
              </p>
              
              <div className="flex justify-end pt-4 border-t border-white/10">
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-red-500/30"
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