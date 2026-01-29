import React from "react";
import { Card } from "../ui";

export default function HRPO() {
  const galleryImages = [
    "https://via.placeholder.com/1200x600?text=HRPO+Steel+1",
    "https://via.placeholder.com/1200x600?text=HRPO+Steel+2",
    "https://via.placeholder.com/1200x600?text=HRPO+Steel+3"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">HRPO Steel</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            High strength hot rolled pickled and oiled steel for superior formability and surface quality. The pickling process removes scale for a clean surface.
          </p>
        </div>

        <div className="mb-12">
          <img 
            src={galleryImages[0]} 
            alt="HRPO Steel" 
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Product Features</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
              <li className="flex items-center">• Pickled and oiled surface for rust prevention</li>
              <li className="flex items-center">• Excellent formability for bending and stamping</li>
              <li className="flex items-center">• Superior weldability</li>
              <li className="flex items-center">• Clean surface finish without scale</li>
              <li className="flex items-center">• High strength retention</li>
              <li className="flex items-center">• Improved paint adhesion</li>
            </ul>
          </Card>

          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Applications</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
              <li className="flex items-center">• Automotive components and frames</li>
              <li className="flex items-center">• Metal fabrication and stamping</li>
              <li className="flex items-center">• Machinery parts and enclosures</li>
              <li className="flex items-center">• Cold forming operations</li>
              <li className="flex items-center">• Furniture manufacturing</li>
              <li className="flex items-center">• Appliance parts</li>
            </ul>
          </Card>

          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Specifications</h3>
            <table className="w-full text-gray-600 text-sm sm:text-base">
              <tbody>
                <tr className="border-b"><td className="py-1 sm:py-2">Grade</td><td className="py-1 sm:py-2">A-B</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Thickness</td><td className="py-1 sm:py-2">0.8-3mm</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Width</td><td className="py-1 sm:py-2">Variable</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Surface</td><td className="py-1 sm:py-2">Pickled & oiled</td></tr>
                <tr><td className="py-1 sm:py-2">Oil Type</td><td className="py-1 sm:py-2">Rust preventive</td></tr>
              </tbody>
            </table>
          </Card>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Choose Our HRPO Steel?</h2>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Our HRPO steel combines the strength of hot rolled steel with the superior surface quality of pickled and oiled finishing, ideal for precision applications and further processing.
          </p>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            The oil coating provides temporary rust protection during storage and transportation.
          </p>

          <a
  href="/contact"
  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold transition-colors duration-300 inline-block"
>
  Request Quote
</a>

          {/* <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold transition-colors duration-300">
            Request Quote
          </button> */}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-900">Product Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <img key={index} src={src} alt={`HRPO Steel ${index + 1}`} className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-md" />
            ))}
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base">
            <div>
              <h3 className="font-semibold mb-2">What does HRPO stand for?</h3>
              <p className="text-gray-600">Hot Rolled Pickled and Oiled.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Why is pickling important?</h3>
              <p className="text-gray-600">It removes the oxide scale from hot rolling, providing a clean surface for further processing.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How long does the oil protection last?</h3>
              <p className="text-gray-600">Typically 3-6 months in controlled storage conditions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}