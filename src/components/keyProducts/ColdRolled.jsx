import React from "react";
import { Card } from "../ui";

export default function ColdRolled() {
  const galleryImages = [
    "https://www.redriver.team/wp-content/uploads/elementor/thumbs/pv181-1-30-qtaih3w5ilh6o5fr8wfgonm6n15jnd849npqz3fek0.webp",
    "https://www.specialtysteel.com/wp-content/uploads/2024/09/316-stainless-steel-properties.jpg",
    // Only two found, so repeat or add placeholder if needed
    "https://www.redriver.team/wp-content/uploads/elementor/thumbs/pv181-1-30-qtaih3w5ilh6o5fr8wfgonm6n15jnd849npqz3fek0.webp"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Cold Rolled Steel</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Premium cold rolled steel products offering superior surface finish and dimensional precision. Our cold rolled steel is processed at room temperature to achieve tighter tolerances and smoother finishes compared to hot rolled steel.
          </p>
        </div>

        <div className="mb-12">
          <img 
            src={galleryImages[0]} 
            alt="Cold Rolled Steel" 
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Product Features</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
              <li className="flex items-center">• Superior surface finish for aesthetic applications</li>
              <li className="flex items-center">• Precise dimensions with tight tolerances</li>
              <li className="flex items-center">• Enhanced strength through work hardening</li>
              <li className="flex items-center">• Improved formability for complex shapes</li>
              <li className="flex items-center">• Better paintability and coatability</li>
              <li className="flex items-center">• Reduced yield point phenomenon</li>
            </ul>
          </Card>

          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Applications</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
              <li className="flex items-center">• Automotive body panels and components</li>
              <li className="flex items-center">• Home appliances and white goods</li>
              <li className="flex items-center">• Precision engineering parts</li>
              <li className="flex items-center">• Metal furniture and fixtures</li>
              <li className="flex items-center">• Electrical enclosures</li>
              <li className="flex items-center">• Construction hardware</li>
            </ul>
          </Card>

          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Specifications</h3>
            <table className="w-full text-gray-600 text-sm sm:text-base">
              <tbody>
                <tr className="border-b"><td className="py-1 sm:py-2">Grade</td><td className="py-1 sm:py-2">A-C</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Thickness</td><td className="py-1 sm:py-2">0.5-3mm</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Width</td><td className="py-1 sm:py-2">Variable (up to 2000mm)</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Surface</td><td className="py-1 sm:py-2">Polished finish</td></tr>
                <tr><td className="py-1 sm:py-2">Standards</td><td className="py-1 sm:py-2">ASTM, JIS, EN</td></tr>
              </tbody>
            </table>
          </Card>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Choose Our Cold Rolled Steel?</h2>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Our cold rolled steel offers exceptional quality with consistent dimensional accuracy and smooth surface finish, perfect for demanding applications. Manufactured using state-of-the-art technology, it provides superior mechanical properties and excellent corrosion resistance when coated.
          </p>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            With our commitment to quality control and sustainable practices, you can trust our products to meet your exact requirements while minimizing environmental impact.
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
              <img key={index} src={src} alt={`Cold Rolled Steel ${index + 1}`} className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-md" />
            ))}
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base">
            <div>
              <h3 className="font-semibold mb-2">What is the difference between cold rolled and hot rolled steel?</h3>
              <p className="text-gray-600">Cold rolled steel is processed at room temperature, resulting in better surface finish and tighter tolerances, while hot rolled is processed at high temperatures for easier forming.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can you provide custom sizes?</h3>
              <p className="text-gray-600">Yes, we offer custom cutting and sizing services to meet your specific requirements.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What certifications do your products have?</h3>
              <p className="text-gray-600">Our cold rolled steel meets international standards including ISO 9001 and various industry-specific certifications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}