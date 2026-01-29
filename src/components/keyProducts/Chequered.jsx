import React from "react";
import { Card } from "../ui";

export default function Chequered() {
  const galleryImages = [
    "https://cdn.stocksnap.io/img-thumbs/960w/diamond-plate_ZRHJGSLPMZ.jpg",
    "https://freerangestock.com/sample/119479/close-up-of-a-grey-diamond-steel-metal-sheet.jpg",
    "https://images.pexels.com/photos/18144770/pexels-photo-18144770.jpeg?cs=srgb&dl=pexels-hngstrm-18144770.jpg&fm=jpg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Chequered Steel</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Non-slip chequered steel plates offering enhanced safety and durability for high-traffic areas. The raised pattern provides excellent grip even in wet conditions.
          </p>
        </div>

        <div className="mb-12">
          <img 
            src={galleryImages[0]} 
            alt="Chequered Steel" 
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Product Features</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
              <li className="flex items-center">• Non-slip surface with raised pattern</li>
              <li className="flex items-center">• Enhanced safety in slippery conditions</li>
              <li className="flex items-center">• Attractive appearance for architectural use</li>
              <li className="flex items-center">• Durable construction for long-term use</li>
              <li className="flex items-center">• Corrosion resistant when treated</li>
              <li className="flex items-center">• Easy to clean and maintain</li>
            </ul>
          </Card>

          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Applications</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
              <li className="flex items-center">• Stair treads and landings</li>
              <li className="flex items-center">• Walkways and platforms</li>
              <li className="flex items-center">• Industrial flooring systems</li>
              <li className="flex items-center">• Vehicle decking and ramps</li>
              <li className="flex items-center">• Trailer floors</li>
              <li className="flex items-center">• Decorative panels</li>
            </ul>
          </Card>

          <Card className="p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Specifications</h3>
            <table className="w-full text-gray-600 text-sm sm:text-base">
              <tbody>
                <tr className="border-b"><td className="py-1 sm:py-2">Pattern</td><td className="py-1 sm:py-2">Diamond/Bar</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Thickness</td><td className="py-1 sm:py-2">2-10mm</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Width</td><td className="py-1 sm:py-2">1000-1500mm</td></tr>
                <tr className="border-b"><td className="py-1 sm:py-2">Surface</td><td className="py-1 sm:py-2">High grip</td></tr>
                <tr><td className="py-1 sm:py-2">Material</td><td className="py-1 sm:py-2">Carbon steel, stainless options</td></tr>
              </tbody>
            </table>
          </Card>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Choose Our Chequered Steel?</h2>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Our chequered steel plates provide reliable anti-slip properties while maintaining an attractive appearance, perfect for safety-critical applications. They are manufactured to withstand heavy loads and harsh environments.
          </p>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            With customizable patterns and sizes, our products ensure optimal performance in various industrial and commercial settings.
          </p>
          {/* <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold transition-colors duration-300">
            Request Quote
          </button> */}
          <a
  href="/contact"
  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold transition-colors duration-300 inline-block"
>
  Request Quote
</a>

        </div>

        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-900">Product Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <img key={index} src={src} alt={`Chequered Steel ${index + 1}`} className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-md" />
            ))}
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base">
            <div>
              <h3 className="font-semibold mb-2">What patterns are available?</h3>
              <p className="text-gray-600">We offer diamond, lentil, and custom patterns based on requirements.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Is it available in stainless steel?</h3>
              <p className="text-gray-600">Yes, we provide chequered plates in various materials including stainless steel for corrosive environments.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What is the load-bearing capacity?</h3>
              <p className="text-gray-600">It depends on thickness and span, but our plates are designed for heavy-duty applications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}