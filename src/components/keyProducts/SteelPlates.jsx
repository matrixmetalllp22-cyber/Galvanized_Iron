import React from "react";
import { Card } from "../ui";

export default function SteelPlates() {
  const galleryImages = [
    "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2ZsNTIyMDk0NDQwOTgtaW1hZ2UuanBn.jpg",
    "https://xqvnmkjynbkcujcrtubi.supabase.co/storage/v1/object/public/article-images/33ef1ac4-8aaa-444b-9b67-dbb3b99c07b2/article-33ef1ac4-8aaa-444b-9b6-low-poly-style-geometric-shapes-simple-polygons-fa-1-lblsal.jpg",
    // Only two, add one
    "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2ZsNTIyMDk0NDQwOTgtaW1hZ2UuanBn.jpg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Steel Plates</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Premium quality steel plates engineered for heavy-duty structural and industrial applications. Available in various grades for different strength requirements.
          </p>
        </div>

        <div className="mb-12">
          <img 
            src={galleryImages[0]} 
            alt="Steel Plates" 
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Product Features</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
              <li className="flex items-center">• High tensile strength for load-bearing</li>
              <li className="flex items-center">• Excellent toughness and impact resistance</li>
              <li className="flex items-center">• Superior flatness and straightness</li>
              <li className="flex items-center">• Precise thickness control</li>
              <li className="flex items-center">• Good machinability</li>
              <li className="flex items-center">• Weldable with proper procedures</li>
            </ul>
          </Card>

          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Applications</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
              <li className="flex items-center">• Structural construction elements</li>
              <li className="flex items-center">• Boiler and pressure vessel making</li>
              <li className="flex items-center">• Heavy machinery bases</li>
              <li className="flex items-center">• Bridge building components</li>
              <li className="flex items-center">• Ship hulls</li>
              <li className="flex items-center">• Storage tanks</li>
            </ul>
          </Card>

          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Specifications</h3>
            <table className="w-full text-gray-600 text-sm sm:text-base">
              <tbody>
                <tr className="border-b"><td className="py-1 sm:py-2">Thickness</td><td className="py-1 sm:py-2">6-100mm</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Width</td><td className="py-1 sm:py-2">Up to 3000mm</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Length</td><td className="py-1 sm:py-2">Custom (up to 12000mm)</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Grade</td><td className="py-1 sm:py-2">A-B-C, High strength options</td></tr>
                <tr><td className="py-1 sm:py-2">Surface</td><td className="py-1 sm:py-2">Shot blasted/primed optional</td></tr>
              </tbody>
            </table>
          </Card>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Choose Our Steel Plates?</h2>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Our steel plates deliver exceptional quality and reliability for the most demanding structural and industrial applications with consistent performance and traceability.
          </p>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            We offer value-added services like cutting, bending, and drilling to reduce your fabrication time.
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
              <img key={index} src={src} alt={`Steel Plates ${index + 1}`} className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-md" />
            ))}
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base">
            <div>
              <h3 className="font-semibold mb-2">What grades are available?</h3>
              <p className="text-gray-600">We stock mild steel, high strength low alloy, and abrasion resistant grades.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can you provide test certificates?</h3>
              <p className="text-gray-600">Yes, all plates come with mill test certificates.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What is the maximum size?</h3>
              <p className="text-gray-600">Up to 100mm thick, 3000mm wide, 12000mm long, depending on grade.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}