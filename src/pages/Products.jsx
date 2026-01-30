
// import React from "react";
// import IndustriesSection from "../components/IndustriesSection";

// export default function Products() {
//   return (
//     <div className="bg-black min-h-screen">
//       <IndustriesSection />
//     </div>
//   );
// }


import React from "react";
import IndustriesSection from "../components/IndustriesSection";

export default function Products() {
  return (
    <div className="bg-black min-h-screen">
      <IndustriesSection />
      
      {/* Optional: Add other sections if needed */}
      <div className="py-8 xs:py-12 sm:py-16 px-4 xs:px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* You can add additional content here if needed */}
        </div>
      </div>
    </div>
  );
}