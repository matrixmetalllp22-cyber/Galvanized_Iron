import React from "react";
import { Card } from "../ui";

export default function WeldedPipes() {
  const galleryImages = [
    "https://p2.piqsels.com/preview/320/80/937/steel-construction-materials.jpg",
    "https://mcipcorp.com/wp-content/uploads/2025/07/PowerCrete3.jpg",
    "https://p2.piqsels.com/preview/671/859/642/plumbing-industry-pipes-pipelines.jpg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Welded Pipes</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            High-quality welded steel pipes designed for structural and fluid conveyance applications. Manufactured using advanced welding techniques for strength and reliability.
          </p>
        </div>

        <div className="mb-12">
          <img 
            src={galleryImages[0]} 
            alt="Welded Pipes" 
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Product Features</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
              <li className="flex items-center">• Seamless welded joint for leak-proof</li>
              <li className="flex items-center">• High strength for pressure applications</li>
              <li className="flex items-center">• Consistent quality and dimensions</li>
              <li className="flex items-center">• Cost-effective compared to seamless</li>
              <li className="flex items-center">• Various wall thicknesses</li>
              <li className="flex items-center">• Corrosion resistant coatings available</li>
            </ul>
          </Card>

          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Applications</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
              <li className="flex items-center">• Structural framework in buildings</li>
              <li className="flex items-center">• Water and gas pipelines</li>
              <li className="flex items-center">• Mechanical components and tubing</li>
              <li className="flex items-center">• Industrial equipment piping</li>
              <li className="flex items-center">• Oil and gas distribution</li>
              <li className="flex items-center">• Fencing and handrails</li>
            </ul>
          </Card>

          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Specifications</h3>
            <table className="w-full text-gray-600 text-sm sm:text-base">
              <tbody>
                <tr className="border-b"><td className="py-1 sm:py-2">Diameter</td><td className="py-1 sm:py-2">15-600mm</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Thickness</td><td className="py-1 sm:py-2">1-20mm</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Length</td><td className="py-1 sm:py-2">Custom (up to 12m)</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Grade</td><td className="py-1 sm:py-2">A-B, API 5L</td></tr>
                <tr><td className="py-1 sm:py-2">Welding</td><td className="py-1 sm:py-2">ERW/SAW</td></tr>
              </tbody>
            </table>
          </Card>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Choose Our Welded Pipes?</h2>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Our welded pipes are manufactured to strict quality standards with precise dimensions and reliable performance for all your piping needs. They undergo rigorous testing for strength and integrity.
          </p>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            With options for coatings and linings, we can customize for specific environments.
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
              <img key={index} src={src} alt={`Welded Pipes ${index + 1}`} className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-md" />
            ))}
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base">
            <div>
              <h3 className="font-semibold mb-2">What welding methods do you use?</h3>
              <p className="text-gray-600">We use Electric Resistance Welding (ERW) and Submerged Arc Welding (SAW) depending on size and application.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Are they pressure tested?</h3>
              <p className="text-gray-600">Yes, all pipes undergo hydrostatic testing as per standards.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can you provide end preparations?</h3>
              <p className="text-gray-600">Yes, plain, beveled, or threaded ends available.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}