import React from "react";
import { Card } from "../ui";

export default function ColourCoated() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Colour Coated Steel</h1>
          <p className="text-lg text-gray-600">
            Vibrant colour coated steel sheets combining aesthetics with durability and corrosion resistance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Product Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Multiple colour options</li>
              <li>• Weather resistant</li>
              <li>• Long-lasting coating</li>
              <li>• Excellent corrosion resistance</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Applications</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Roofing</li>
              <li>• Wall cladding</li>
              <li>• Architectural elements</li>
              <li>• Decorative panels</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Specifications</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Coating: Polyester/PVF</li>
              <li>• Thickness: 0.4-0.8mm</li>
              <li>• Width: Standard sizes</li>
              <li>• Colors: 40+ options</li>
            </ul>
          </Card>
        </div>

        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Why Choose Our Colour Coated Steel?</h2>
          <p className="text-gray-600 mb-4">
            Transform your projects with our vibrant colour coated steel, offering superior protection and aesthetic appeal for architectural and industrial applications.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded">
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
}
