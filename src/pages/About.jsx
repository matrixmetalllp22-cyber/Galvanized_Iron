// // import React, { useRef } from "react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// // const leaders = [
// //   {
// //     name: "Leader Name",
// //     role: "Designation",
// //     image: "/images/leader1.jpg",
// //   },
// //   {
// //     name: "Leader Name",
// //     role: "Designation",
// //     image: "/images/leader2.jpg",
// //   },
// //   {
// //     name: "Leader Name",
// //     role: "Designation",
// //     image: "/images/leader3.jpg",
// //   },
// //   {
// //     name: "Leader Name",
// //     role: "Designation",
// //     image: "/images/leader4.jpg",
// //   },
// //   {
// //     name: "Leader Name",
// //     role: "Designation",
// //     image: "/images/leader5.jpg",
// //   },
// // ];

// // const LeadershipTeam = () => {
// //   const sliderRef = useRef(null);

// //   const scroll = (direction) => {
// //     const { current } = sliderRef;
// //     if (!current) return;

// //     current.scrollBy({
// //       left: direction === "left" ? -320 : 320,
// //       behavior: "smooth",
// //     });
// //   };

// //   return (
// //     <section className="bg-black py-16 px-6">
// //       {/* Header */}
// //       <div className="text-center mb-10">
// //         <h2 className="text-white text-2xl font-semibold tracking-wide">
// //           Leadership Team
// //         </h2>
// //         <p className="text-gray-400 mt-2">
// //           Board of Directors | Management Committee | Leadership Team
// //         </p>
// //       </div>

// //       {/* Slider */}
// //       <div className="relative">
// //         {/* Left Arrow */}
// //         <button
// //           onClick={() => scroll("left")}
// //           className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 text-white p-2 rounded-full hover:bg-black"
// //         >
// //           <ChevronLeft size={22} />
// //         </button>

// //         {/* Cards */}
// //         <div
// //           ref={sliderRef}
// //           className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2"
// //         >
// //           {leaders.map((leader, index) => (
// //             <div
// //               key={index}
// //               className="min-w-[260px] bg-zinc-900 rounded-md overflow-hidden shadow-lg"
// //             >
// //               <div className="aspect-3/4 overflow-hidden">
// //                 <img
// //                   src={leader.image}
// //                   alt={leader.name}
// //                   className="w-full h-full object-cover"
// //                 />
// //               </div>

// //               <div className="p-4 text-center">
// //                 <h3 className="text-white font-medium text-sm">
// //                   {leader.name}
// //                 </h3>
// //                 <p className="text-gray-400 text-xs mt-1">
// //                   {leader.role}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Right Arrow */}
// //         <button
// //           onClick={() => scroll("right")}
// //           className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 text-white p-2 rounded-full hover:bg-black"
// //         >
// //           <ChevronRight size={22} />
// //         </button>
// //       </div>
// //     </section>
// //   );
// // };

// // export default LeadershipTeam;





// import React, { useState } from "react";
// import Leadership from "../components/Leadership";
// import ManagementTeam from "../components/ManagementTeam";

// export default function About() {
//   const [activeTab, setActiveTab] = useState("leadership");

//   return (
//     <>
//       {/* TABS HEADER */}
//       <section className="bg-black pt-20 pb-10">
//         <div className="text-center">
//           <h2 className="text-white text-2xl font-semibold mb-4">
//             Leadership Team
//           </h2>

//           <div className="flex justify-center gap-6 text-sm text-gray-400">
//             {[
//               ["board", "Board of Directors"],
//               ["management", "Management Committee"],
//               ["leadership", "Leadership Team"],
//             ].map(([key, label]) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveTab(key)}
//                 className={`relative transition ${
//                   activeTab === key
//                     ? "text-white"
//                     : "hover:text-white"
//                 }`}
//               >
//                 {label}
//                 {activeTab === key && (
//                   <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white" />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CONTENT */}
//       {activeTab === "management" && <ManagementTeam />}

//       {activeTab === "leadership" && (
//         <Leadership title="Leadership Team" />
//       )}

//       {activeTab === "board" && (
//         <Leadership title="Board of Directors" />
//       )}
//     </>
//   );
// }



// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// import Leadership from "../components/Leadership";
// import ManagementTeam from "../components/ManagementTeam";

// import leadershipData from "../data/leadershipData";
// import boardData from "../data/boardData";

// export default function About() {
//   const [activeTab, setActiveTab] = useState("leadership");

//   return (
//     <>
//       {/* TABS */}
//       <section className="bg-black pt-20 pb-10">
//         <div className="text-center">
//           <h2 className="text-white text-2xl font-semibold mb-4">
//             Leadership Team
//           </h2>

//           <div className="flex justify-center gap-6 text-sm text-gray-400">
//             {[
//               ["board", "Board of Directors"],
//               ["management", "Management Committee"],
//               ["leadership", "Leadership Team"],
//             ].map(([key, label]) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveTab(key)}
//                 className={`relative ${
//                   activeTab === key ? "text-white" : "hover:text-white"
//                 }`}
//               >
//                 {label}
//                 {activeTab === key && (
//                   <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white" />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CONTENT */}
//       <AnimatePresence mode="wait">
//         {activeTab === "management" && (
//           <motion.div
//             key="management"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -40 }}
//             transition={{ duration: 0.4 }}
//           >
//             <ManagementTeam />
//           </motion.div>
//         )}

//         {activeTab === "leadership" && (
//           <motion.div
//             key="leadership"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -40 }}
//             transition={{ duration: 0.4 }}
//           >
//             <Leadership
//               title="Leadership Team"
//               data={leadershipData}
//             />
//           </motion.div>
//         )}

//         {activeTab === "board" && (
//           <motion.div
//             key="board"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -40 }}
//             transition={{ duration: 0.4 }}
//           >
//             <Leadership
//               title="Board of Directors"
//               data={boardData}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }











import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Leadership from "../components/Leadership";
import ManagementTeam from "../components/ManagementTeam";

import leadershipData from "../data/leadershipData";
import boardData from "../data/boardData";

export default function About() {
  const [activeTab, setActiveTab] = useState("leadership");

  return (
    <>
      {/* TABS */}
      <section className="relative bg-black pt-24 pb-14">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-3xl font-semibold mb-8"
          >
            Leadership
          </motion.h2>

          <div className="flex justify-center gap-10 text-sm text-gray-400">
            {[
              ["board", "Board of Directors"],
              ["management", "Management Committee"],
              ["leadership", "Leadership Team"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative pb-2 tracking-wide transition ${
                  activeTab === key
                    ? "text-orange-500"
                    : "hover:text-white"
                }`}
              >
                {label}

                {activeTab === key && (
                  <motion.span
                    layoutId="active-tab"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-black">
        <AnimatePresence mode="wait">
          {activeTab === "management" && (
            <motion.div
              key="management"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45 }}
            >
              <ManagementTeam />
            </motion.div>
          )}

          {activeTab === "leadership" && (
            <motion.div
              key="leadership"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45 }}
            >
              <Leadership title="Leadership Team" data={leadershipData} />
            </motion.div>
          )}

          {activeTab === "board" && (
            <motion.div
              key="board"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45 }}
            >
              <Leadership title="Board of Directors" data={boardData} />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
