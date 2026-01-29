// import React from "react";
// import { Link } from "react-router-dom";

// const products = [
//   { title: "Hot Rolled Steel", slug: "hot-rolled", icon: "/icons/hr.svg" },
//   { title: "Cold Rolled Steel", slug: "cold-rolled", icon: "/icons/cr.svg" },
//   { title: "Colour Coated Steel", slug: "colour-coated", icon: "/icons/colour-coated.svg" },
//   { title: "Galvanized Steel", slug: "galvanized", icon: "/icons/galvanized.svg" },
//   { title: "Chequered Steel", slug: "chequered", icon: "/icons/chequered.svg" },
//   { title: "HRPO", slug: "hrpo", icon: "/icons/hrpo.svg" },
//   { title: "Welded Pipes", slug: "welded-pipes", icon: "/icons/pipes.svg" },
//   { title: "Steel Plates", slug: "steel-plates", icon: "/icons/plates.svg" },
// ];

// export default function KeyProducts() {
//   return (
//     <section className="py-12 sm:py-16 md:py-24 bg-[#2b2c2f] text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <p className="text-center text-gray-400 tracking-widest uppercase mb-4">
//           Portfolio
//         </p>

//         <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12 md:mb-16">
//           What product do you wish to enquire / purchase ?
//         </h2>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
//           {products.map((product) => (
//             <Link
//               key={product.slug}
//               to={`/products/${product.slug}`}
//               className="
//                 group
//                 relative
//                 bg-transparent
//                 border border-gray-700
//                 p-6 sm:p-8 md:p-10
//                 flex flex-col items-center justify-center
//                 transition-all duration-300
//                 hover:bg-orange-600
//                 hover:border-orange-600
//               "
//             >
//               {/* Icon */}
//               <img
//                 src={product.icon}
//                 alt={product.title}
//                 className="
//                   w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6
//                   opacity-80
//                   transition-all duration-300
//                   group-hover:opacity-100
//                   group-hover:invert
//                 "
//               />

//               {/* Title */}
//               <p
//                 className="
//                   text-xs sm:text-sm tracking-wide text-gray-300
//                   transition-colors duration-300
//                   group-hover:text-white
//                 "
//               >
//                 {product.title}
//               </p>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import React from "react";
import { Link } from "react-router-dom";

const products = [
  { title: "Hot Rolled Steel", slug: "hot-rolled", icon: "/icons/hr.svg" },
  { title: "Cold Rolled Steel", slug: "cold-rolled", icon: "/icons/cr.svg" },
  { title: "Colour Coated Steel", slug: "colour-coated", icon: "/icons/colour-coated.svg" },
  { title: "Galvanized Steel", slug: "galvanized", icon: "/icons/galvanized.svg" },
  { title: "Chequered Steel", slug: "chequered", icon: "/icons/chequered.svg" },
  { title: "HRPO", slug: "hrpo", icon: "/icons/hrpo.svg" },
  { title: "Welded Pipes", slug: "welded-pipes", icon: "/icons/pipes.svg" },
  { title: "Steel Plates", slug: "steel-plates", icon: "/icons/plates.svg" },
];

export default function KeyProducts() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#2b2c2f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-center text-gray-400 tracking-widest uppercase mb-4">
          Portfolio
        </p>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12 md:mb-16">
          What product do you wish to enquire / purchase ?
        </h2>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {products.map((product) => (
            <Link
              key={product.slug}
              to={`/products/${product.slug}`}
              className="
                group
                relative
                bg-transparent
                border border-gray-700
                p-6 sm:p-8 md:p-10
                flex flex-col items-center justify-center
                transition-all duration-300
                hover:bg-orange-600
                hover:border-orange-600
              "
            >
              {/* Icon */}
              <img
                src={product.icon}
                alt={product.title}
                className="
                  w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6
                  opacity-80
                  transition-all duration-300
                  group-hover:opacity-100
                  group-hover:invert
                "
              />
              {/* Title */}
              <p
                className="
                  text-xs sm:text-sm tracking-wide text-gray-300
                  transition-colors duration-300
                  group-hover:text-white
                "
              >
                {product.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}