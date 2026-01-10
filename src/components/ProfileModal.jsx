// import React from "react";
// import { X } from "lucide-react";

// export default function ProfileModal({ person, onClose }) {
//   if (!person) return null;

//   return (
//     <div className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center px-6">
//       <div className="bg-zinc-900 max-w-md w-full rounded-lg overflow-hidden relative">
        
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-white"
//         >
//           <X />
//         </button>

//         <img
//           src={person.image}
//           alt={person.name}
//           className="w-full h-72 object-cover"
//         />

//         <div className="p-6 text-center">
//           <h3 className="text-white text-lg font-semibold">
//             {person.name}
//           </h3>
//           <p className="text-gray-400 text-sm mb-4">
//             {person.role}
//           </p>
//           <p className="text-gray-300 text-sm leading-relaxed">
//             {person.bio}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import LazyImage from "./LazyImage";

export default function ProfileModal({ person, onClose }) {
  if (!person) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        transition={{ duration: 0.35 }}
        className="bg-zinc-900 max-w-md w-full rounded-xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white"
        >
          <X />
        </button>

        <LazyImage
          src={person.image}
          alt={person.name}
          className="w-full h-72 object-cover"
        />

        <div className="p-6 text-center">
          <h3 className="text-white text-lg font-semibold">
            {person.name}
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            {person.role}
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            {person.bio}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
