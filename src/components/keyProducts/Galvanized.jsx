import React from "react";
import { Card } from "../ui";

export default function Galvanized() {
  const galleryImages = [
    "https://storage.needpix.com/rsynced_images/galvanized-1147664_1280.jpg",
    "https://cdn.prod.website-files.com/67166bf86959dd3e06e7d3ad/681b1c62dcfafe2ddfd8c921_which-metal-roofing-material-is-right-for-your-home.webp",
    "https://cdn.shopify.com/s/files/1/0135/0162/8475/files/Steel_treatment2.png?v=1737500689"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Galvanized Steel</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            High-quality galvanized steel with superior corrosion resistance for outdoor and harsh environments. The zinc coating provides sacrificial protection against rust.
          </p>
        </div>

        <div className="mb-12">
          <img 
            src={galleryImages[0]} 
            alt="Galvanized Steel" 
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Product Features</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
              <li className="flex items-center">• Exceptional corrosion resistance</li>
              <li className="flex items-center">• Zinc coated protection layer</li>
              <li className="flex items-center">• Long service life in harsh conditions</li>
              <li className="flex items-center">• Low maintenance requirements</li>
              <li className="flex items-center">• Good formability</li>
              <li className="flex items-center">• Paintable surface</li>
            </ul>
          </Card>

          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Applications</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
              <li className="flex items-center">• Outdoor structures and buildings</li>
              <li className="flex items-center">• Marine and coastal applications</li>
              <li className="flex items-center">• Infrastructure projects</li>
              <li className="flex items-center">• Agricultural equipment and storage</li>
              <li className="flex items-center">• HVAC ductwork</li>
              <li className="flex items-center">• Automotive underbody parts</li>
            </ul>
          </Card>

          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Specifications</h3>
            <table className="w-full text-gray-600 text-sm sm:text-base">
              <tbody>
                <tr className="border-b"><td className="py-1 sm:py-2">Coating</td><td className="py-1 sm:py-2">Hot-dip zinc</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Thickness</td><td className="py-1 sm:py-2">1-6mm</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Width</td><td className="py-1 sm:py-2">Variable (up to 2000mm)</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Zinc weight</td><td className="py-1 sm:py-2">100-300g/m²</td></tr>
                <tr><td className="py-1 sm:py-2">Spangle</td><td className="py-1 sm:py-2">Regular/Minimized/Zero</td></tr>
              </tbody>
            </table>
          </Card>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Choose Our Galvanized Steel?</h2>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Our galvanized steel products provide unmatched durability and protection, making them ideal for environments where corrosion resistance is critical. The high-quality zinc coating ensures long-lasting performance.
          </p>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            We use advanced galvanizing processes to ensure uniform coating and superior adhesion, extending the life of your structures.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold transition-colors duration-300">
            Request Quote
          </button>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-900">Product Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <img key={index} src={src} alt={`Galvanized Steel ${index + 1}`} className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-md" />
            ))}
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base">
            <div>
              <h3 className="font-semibold mb-2">How long does the galvanized coating last?</h3>
              <p className="text-gray-600">Depending on the environment, it can last 50-100 years with proper maintenance.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can it be painted?</h3>
              <p className="text-gray-600">Yes, after proper surface preparation, galvanized steel can be painted for additional protection or aesthetics.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What is the difference between hot-dip and electro-galvanized?</h3>
              <p className="text-gray-600">Hot-dip provides a thicker coating for better protection, while electro is thinner for indoor use.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}