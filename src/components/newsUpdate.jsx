import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const newsData = [
  {
    title: "Global Aluminium Prices Strengthen Amid Rising Aerospace Demand",
    text: "Growing consumption from the aerospace and EV sectors has pushed aluminium prices upward this quarter. Analysts expect continued stability due to strong downstream demand and limited supply disruptions.",
    images: [
      "/Images/Auto & EV Manufacturers Shift Toward Lightweight Aluminium Sheets.jpeg",
      "/Images/Aluminium Alloy 3xxx & 5xxx Series Gain Popularity in Food Packaging.jpeg",
      
    ],
  },
  {
    title: "India’s Aluminium Consumption Expected to Cross 9 Million Tons by 2030",
    text: "India is projected to become one of the fastest-growing aluminium markets driven by infrastructure, renewables, and mobility projects.",
    images: [
      "/Images/India’s Aluminium Consumption Expected to Cross 9 Million Tons by 2030.jpeg",
      "/Images/New BIS Standards Released for Aluminium Flat Products.jpeg",
      
    ],
  },
  {
    title: "EV Manufacturers Shift Toward Lightweight Aluminium Sheets",
    text: "Major automakers are increasing procurement of lightweight alloys to meet fuel efficiency and emission regulations.",
    images: [
      "/Images/Import Policies Tighten on Low-Value Aluminium Items.jpeg",
      "/Images/Aluminium Recycling Capacity Expands Across South India.jpeg",
      
      "/Images/Automobile Aluminium.jpeg",
    ],
  },
  { 
    title: "Aluminium Recycling Capacity Expands Across South India",
    text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
    images: [
      "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
      "/Images/Surge in Demand for Anodized Aluminium in Architecture & Interiors.jpeg",
      "/Images/Lightweight Aluminium.jpeg",
      "/Images/Automobile Aluminium.jpeg",
    ],  
  },
  { 
    title: "Aluminium Recycling Capacity Expands Across South India",
    text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
    images: [
      "/Images/Global Aluminium Prices Strengthen Amid Rising Aerospace Demand.jpeg",
      "/Images/EV Car Aluminium.jpeg",
      "/Images/Lightweight Aluminium.jpeg",
      "/Images/Automobile Aluminium.jpeg",
    ],  
  },
  { 
    title: "Aluminium Recycling Capacity Expands Across South India",
    text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
    images: [
      "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
      "/Images/EV Car Aluminium.jpeg",
      "/Images/Lightweight Aluminium.jpeg",
      "/Images/Automobile Aluminium.jpeg",
    ],  
  },
  { 
    title: "Aluminium Recycling Capacity Expands Across South India",
    text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
    images: [
      "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
      "/Images/EV Car Aluminium.jpeg",
      "/Images/Lightweight Aluminium.jpeg",
      "/Images/Automobile Aluminium.jpeg",
    ],  
  },
  { 
    title: "Aluminium Recycling Capacity Expands Across South India",
    text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
    images: [
      "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
      "/Images/EV Car Aluminium.jpeg",
      "/Images/Lightweight Aluminium.jpeg",
      "/Images/Automobile Aluminium.jpeg",
    ],  
  },
  { 
    title: "Aluminium Recycling Capacity Expands Across South India",
    text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
    images: [
      "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
      "/Images/EV Car Aluminium.jpeg",
      "/Images/Lightweight Aluminium.jpeg",
      "/Images/Automobile Aluminium.jpeg",
    ],  
  },
  { 
    title: "Aluminium Recycling Capacity Expands Across South India",
    text: "Southern clusters are investing heavily in scrap recycling and remelting units. Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
    images: [
      "/Images/Solar Sector Drives Demand for High-Reflective Aluminium Sheets.jpeg",
      "/Images/EV Car Aluminium.jpeg",
      
    ],  
  },
];

const chunkArray = (arr, chunkSize) => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};

export default function NewsUpdate() {
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState("text");
  const [isHovering, setIsHovering] = useState(false);

  const textSlides = chunkArray(newsData, 2); // 2 items per text slide
  const totalTextSlides = textSlides.length;
  const totalImageSlides = newsData.length;

  useEffect(() => {
    if (isHovering) return;

    // Auto-advance every 15 seconds
    const timer = setInterval(() => {
      if (phase === "text") {
        if (current === totalTextSlides - 1) {
          setPhase("image");
          setCurrent(0);
        } else {
          setCurrent((c) => c + 1);
        }
      } else {
        if (current === totalImageSlides - 1) {
          setPhase("text");
          setCurrent(0);
        } else {
          setCurrent((c) => c + 1);
        }
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [current, phase, isHovering, totalTextSlides, totalImageSlides]);

  const nextSlide = () => {
    if (phase === "text") {
      if (current === totalTextSlides - 1) {
        setPhase("image");
        setCurrent(0);
      } else setCurrent(current + 1);
    } else {
      if (current === totalImageSlides - 1) {
        setPhase("text");
        setCurrent(0);
      } else setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (phase === "text") {
      if (current === 0) {
        setPhase("image");
        setCurrent(totalImageSlides - 1);
      } else setCurrent(current - 1);
    } else {
      if (current === 0) {
        setPhase("text");
        setCurrent(totalTextSlides - 1);
      } else setCurrent(current - 1);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-8 -translate-y-1/2 z-20 bg-white/60 backdrop-blur-md rounded-full p-3 hover:bg-orange-500 hover:text-white transition shadow-lg"
      >
        <FiChevronLeft size={26} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-8 -translate-y-1/2 z-20 bg-white/60 backdrop-blur-md rounded-full p-3 hover:bg-orange-400 hover:text-white transition shadow-lg"
      >
        <FiChevronRight size={26} />
      </button>

      <AnimatePresence mode="wait">
        {phase === "text" ? (
          <motion.div
            key={`text-${current}`}
            initial={{ x: 180, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -180, opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 14 }}
            className="w-full h-[520px] flex flex-col md:flex-row justify-center items-center px-10 md:px-20 gap-8 bg-linear-to-br from-black/80 via-black/60 to-black/40 text-white"
          >
            {textSlides[current].map((item, index) => (
              <div key={index} className="md:w-1/2 flex flex-col justify-center gap-4">
                <h2 className="text-2xl md:text-3xl font-bold">{item.title}</h2>
                <p className="text-sm md:text-lg text-gray-300">{item.text}</p>
              </div>
            ))}
          </motion.div>
        ) : (
//           <motion.div
//   key={`img-${current}`}
//   initial={{ x: 180, opacity: 0 }}
//   animate={{ x: 0, opacity: 1 }}
//   exit={{ x: -180, opacity: 0 }}
//   transition={{ type: "spring", stiffness: 80, damping: 14 }}
//   className="w-full h-[520px] flex gap-4 px-6 py-4"
// >
//   {newsData[current].images.slice(0, 3).map((img, i) => (
//     <div key={i} className="flex-1 rounded-lg overflow-hidden bg-black/10 shadow-lg">
//       <img
//   src={newsData[current].image}
//   alt="news"
//   className="w-full h-full object-cover md:object-contain rounded-xl"
// /> 

//     </div>
//   ))}
// </motion.div>


      <motion.div
  key={`img-${current}`}
  initial={{ x: 180, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: -180, opacity: 0 }}
  transition={{ type: "spring", stiffness: 80, damping: 14 }}
      className="w-full h-[520px] flex gap-3 px-4 py-4 bg-linear-to-br from-black/80 via-black/60 to-black/40 text-white"
>
      {newsData[current].images.slice(0, 2).map((img, i) => (
        <div
          key={i}
          className="flex-1 h-full rounded-xl overflow-hidden shadow-lg bg-black/20"
        >
          <img
            src={img}
            alt={`news-${i}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}






</motion.div>




        )}
      </AnimatePresence>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 py-4 bg-white/30 backdrop-blur-lg">
        {Array.from({
          length: phase === "text" ? totalTextSlides : totalImageSlides,
        }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-orange-500 scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}



// import React, { useState, useEffect } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";

// const newsData = [
//   {
//     title: "ALUMINIUM ALLOY 3XXX & 5XXX FOOD PACKAGING",
//     text: "Demand for aluminium food-grade alloys continues to rise due to recyclability, hygiene, and sustainability benefits.",
//     image: "/Images/Aluminium Alloy 3xxx & 5xxx Series Gain Popularity in Food Packaging.jpeg",
//   },
//   {
//     title: "AUTO & EV MANUFACTURERS SHIFT TOWARD LIGHTWEIGHT ALUMINIUM SHEETS",
//     text: "Major automotive companies have increased their procurement of lightweight aluminium alloys to improve fuel efficiency and meet BS6 emission norms.",
//     image: "/Images/Aluminium Recycling Capacity Expands Across South India.jpeg",
//   },
// ];

// export default function NewsUpdate() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((c) => (c + 1) % newsData.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full bg-[#1f2d3d] z-10 mt-20">
//       <div className="relative max-w-[1400px] mx-auto overflow-hidden">
//         {/* Arrows */}
//         <button
//           onClick={() =>
//             setCurrent((c) => (c - 1 + newsData.length) % newsData.length)
//           }
//           className="absolute left-4 top-1/2 -translate-y-1/2 z-20
//                      bg-white/70 p-2 rounded-full hover:bg-orange-500"
//         >
//           <FiChevronLeft />
//         </button>

//         <button
//           onClick={() =>
//             setCurrent((c) => (c + 1) % newsData.length)
//           }
//           className="absolute right-4 top-1/2 -translate-y-1/2 z-20
//                      bg-white/70 p-2 rounded-full hover:bg-orange-500"
//         >
//           <FiChevronRight />
//         </button>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={current}
//             initial={{ opacity: 0, x: 60 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -60 }}
//             transition={{ duration: 0.4 }}
//             className="grid grid-cols-1 md:grid-cols-2
//                        h-[380px]"
//           >
//             {/* TEXT */}
//             <div className="flex flex-col justify-center px-10 text-white
//                             bg-gradient-to-br from-black/80 to-black/50">
//               <p className="uppercase text-sm tracking-wider text-gray-300 mb-2">
//                 Latest News
//               </p>
//               <h2 className="text-2xl font-bold leading-snug mb-4">
//                 {newsData[current].title}
//               </h2>
//               <p className="text-gray-300 text-sm leading-relaxed max-w-md">
//                 {newsData[current].text}
//               </p>
//             </div>

//             {/* IMAGE */}
//             {/* <div className="w-full h-full overflow-hidden">
//               <img
//                 src={newsData[current].image}
//                 alt="news"
//                 className="w-full h-full object-cover"
//               />
//             </div> */}
// <div className="w-full h-full flex items-center justify-center bg-white">
//   <img
//     src={newsData[current].image}
//     alt="news"
//     className="max-w-full max-h-full object-contain"
//   />
// </div>


//           </motion.div>
//         </AnimatePresence>

//         {/* Pagination */}
//         <div className="flex justify-center gap-2 py-3 bg-white/20">
//           {newsData.map((_, i) => (
//             <span
//               key={i}
//               onClick={() => setCurrent(i)}
//               className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
//                 i === current ? "bg-orange-500" : "bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
