import React from "react";
import { Card } from "../ui";

export default function HotRolled() {
  const galleryImages = [
    "https://www.redriver.team/wp-content/uploads/elementor/thumbs/pv181-1-22-qt8shfirb2h9tb2mo8v0rt895gt0hpmervsk8scvhs.webp",
    // Only one found, add placeholders or repeat
    "https://www.redriver.team/wp-content/uploads/elementor/thumbs/pv181-1-22-qt8shfirb2h9tb2mo8v0rt895gt0hpmervsk8scvhs.webp",
    "https://www.redriver.team/wp-content/uploads/elementor/thumbs/pv181-1-22-qt8shfirb2h9tb2mo8v0rt895gt0hpmervsk8scvhs.webp"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Hot Rolled Steel</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of hot rolled steel products designed for various industrial applications. Hot rolling allows for larger sizes and better formability.
          </p>
        </div>

        <div className="mb-12">
          <img 
            src={galleryImages[0]} 
            alt="Hot Rolled Steel" 
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Product Features</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
              <li className="flex items-center">• High strength and durability</li>
              <li className="flex items-center">• Excellent malleability at high temperatures</li>
              <li className="flex items-center">• Cost-effective solution for large volumes</li>
              <li className="flex items-center">• Wide range of sizes and shapes</li>
              <li className="flex items-center">• Good weldability</li>
              <li className="flex items-center">• Suitable for normalization</li>
            </ul>
          </Card>

          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Applications</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
              <li className="flex items-center">• Construction beams and columns</li>
              <li className="flex items-center">• Automotive frames</li>
              <li className="flex items-center">• Manufacturing equipment</li>
              <li className="flex items-center">• Structural applications in buildings</li>
              <li className="flex items-center">• Railroad tracks</li>
              <li className="flex items-center">• Shipbuilding</li>
            </ul>
          </Card>

          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Specifications</h3>
            <table className="w-full text-gray-600 text-sm sm:text-base">
              <tbody>
                <tr className="border-b"><td className="py-1 sm:py-2">Grade</td><td className="py-1 sm:py-2">A-B</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Thickness</td><td className="py-1 sm:py-2">3-50mm</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Width</td><td className="py-1 sm:py-2">Variable (up to 3000mm)</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Surface</td><td className="py-1 sm:py-2">As rolled with scale</td></tr>
                <tr><td className="py-1 sm:py-2">Standards</td><td className="py-1 sm:py-2">ASTM A36, EN 10025</td></tr>
              </tbody>
            </table>
          </Card>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Choose Our Hot Rolled Steel?</h2>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Our hot rolled steel products are manufactured to the highest international standards, ensuring quality and reliability for all your industrial needs. They offer excellent value for money.
          </p>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            With quick production times and large inventory, we can meet your project deadlines efficiently.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold transition-colors duration-300">
            Request Quote
          </button>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-900">Product Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <img key={index} src={src} alt={`Hot Rolled Steel ${index + 1}`} className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-md" />
            ))}
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base">
            <div>
              <h3 className="font-semibold mb-2">What is the surface finish like?</h3>
              <p className="text-gray-600">Hot rolled steel has a scaled surface, which can be removed if needed through pickling.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Is it suitable for welding?</h3>
              <p className="text-gray-600">Yes, hot rolled steel has excellent weldability for most grades.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What are the typical tolerances?</h3>
              <p className="text-gray-600">Tolerances are wider compared to cold rolled, suitable for structural applications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}