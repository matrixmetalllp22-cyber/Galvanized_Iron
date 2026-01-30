import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Droplets, 
  HardHat,
  Thermometer,
  Wrench,
  CheckCircle,
  ExternalLink
} from "lucide-react";

const materialsData = [
  {
    id: 1,
    name: "Structural Steel",
    category: "Building & Construction",
    grade: "ASTM A572, IS 2062",
    description: "High-strength low-alloy steel used in building frameworks, bridges, and industrial structures.",
    applications: ["Building Frames", "Bridge Construction", "Industrial Plants", "Transmission Towers"],
    properties: [
      { label: "Tensile Strength", value: "415-585 MPa" },
      { label: "Yield Strength", value: "345 MPa min" },
      { label: "Elongation", value: "21% min" },
    ],
    icon: <Shield className="w-5 h-5" />,
    color: "bg-gray-700",
    projects: [
      { name: "Metro Rail Project", location: "Delhi", year: "2023" },
      { name: "Industrial Complex", location: "Gujarat", year: "2022" },
    ]
  },
  {
    id: 2,
    name: "Reinforcement Steel",
    category: "Concrete Reinforcement",
    grade: "Fe 415, Fe 500, Fe 550",
    description: "High tensile steel bars used to reinforce concrete structures, providing strength and durability.",
    applications: ["Foundation Work", "Columns & Beams", "Slabs", "Retaining Walls"],
    properties: [
      { label: "Diameter Range", value: "6mm - 50mm" },
      { label: "Yield Strength", value: "415-550 MPa" },
      { label: "Bend Test", value: "180° without crack" },
    ],
    icon: <Zap className="w-5 h-5" />,
    color: "bg-gray-700",
    projects: [
      { name: "High-Rise Tower", location: "Mumbai", year: "2024" },
      { name: "Bridge Construction", location: "Chennai", year: "2023" },
    ]
  },
  {
    id: 3,
    name: "Stainless Steel",
    category: "Corrosion Resistant",
    grade: "304, 316, 430",
    description: "Corrosion-resistant alloy steel ideal for applications requiring hygiene, aesthetics, and durability.",
    applications: ["Food Processing", "Chemical Plants", "Medical Equipment", "Architectural"],
    properties: [
      { label: "Corrosion Resistance", value: "Excellent" },
      { label: "Chromium Content", value: "16-24%" },
      { label: "Finish Types", value: "2B, BA, No.4" },
    ],
    icon: <Droplets className="w-5 h-5" />,
    color: "bg-gray-700",
    projects: [
      { name: "Hospital Equipment", location: "Bangalore", year: "2024" },
      { name: "Food Processing Unit", location: "Pune", year: "2023" },
    ]
  },
  {
    id: 4,
    name: "Alloy Steel",
    category: "High Strength",
    grade: "EN 19, EN 24, EN 31",
    description: "Steel alloyed with other elements to enhance mechanical properties for demanding applications.",
    applications: ["Automotive Parts", "Machine Components", "Oil & Gas", "Aerospace"],
    properties: [
      { label: "Hardness", value: "20-45 HRC" },
      { label: "Tensile Strength", value: "650-850 MPa" },
      { label: "Impact Strength", value: "40 J min" },
    ],
    icon: <HardHat className="w-5 h-5" />,
    color: "bg-gray-700",
    projects: [
      { name: "Automotive Plant", location: "Chennai", year: "2024" },
      { name: "Heavy Machinery", location: "Coimbatore", year: "2023" },
    ]
  },
  {
    id: 5,
    name: "Tool Steel",
    category: "Cutting & Forming",
    grade: "D2, H13, M2",
    description: "High-carbon steel used for cutting, drilling, and shaping other materials with precision.",
    applications: ["Molds & Dies", "Cutting Tools", "Punches", "Shear Blades"],
    properties: [
      { label: "Hardness", value: "58-65 HRC" },
      { label: "Wear Resistance", value: "Excellent" },
      { label: "Red Hardness", value: "Good" },
    ],
    icon: <Wrench className="w-5 h-5" />,
    color: "bg-gray-700",
    projects: [
      { name: "Tool Manufacturing", location: "Ludhiana", year: "2024" },
      { name: "Die Casting Unit", location: "Ahmedabad", year: "2023" },
    ]
  },
  {
    id: 6,
    name: "Heat Resistant Steel",
    category: "High Temperature",
    grade: "310, 446, 253MA",
    description: "Special alloy steel designed to maintain strength and resist oxidation at elevated temperatures.",
    applications: ["Boiler Tubes", "Heat Exchangers", "Furnace Parts", "Exhaust Systems"],
    properties: [
      { label: "Max Temp", value: "1150°C" },
      { label: "Oxidation Resistance", value: "Excellent" },
      { label: "Creep Strength", value: "High" },
    ],
    icon: <Thermometer className="w-5 h-5" />,
    color: "bg-gray-700",
    projects: [
      { name: "Power Plant", location: "Noida", year: "2024" },
      { name: "Industrial Furnace", location: "Jamshedpur", year: "2023" },
    ]
  },
];

export default function MaterialsProjectSection() {
  const [selectedMaterial, setSelectedMaterial] = useState(materialsData[0]);

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            Materials We Transform
          </h2>
          <p className="text-gray-400 mt-2">
            Specializing in precision processing and fabrication of industrial materials.
          </p>
        </div>

        {/* Materials Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Material List */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {materialsData.map((material) => (
              <div
                key={material.id}
                onClick={() => setSelectedMaterial(material)}
                className={`cursor-pointer rounded bg-gray-800 p-4 ${selectedMaterial.id === material.id ? "border border-white" : ""}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded ${material.color} flex items-center justify-center`}>
                    {material.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">
                      {material.name}
                    </h3>
                    <p className="text-xs text-gray-400">{material.category}</p>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      {material.description}
                    </p>
                  </div>
                  {selectedMaterial.id === material.id && (
                    <CheckCircle className="w-4 h-4 text-white ml-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Selected Material Detail */}
          <div className="md:col-span-1 bg-gray-800 rounded p-4">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-8 h-8 rounded ${selectedMaterial.color} flex items-center justify-center`}>
                {selectedMaterial.icon}
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-400">Grade</span>
                <p className="text-sm font-bold">{selectedMaterial.grade}</p>
              </div>
            </div>

            <h3 className="text-lg font-bold mb-2">{selectedMaterial.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{selectedMaterial.description}</p>

            <div className="mb-4">
              <h4 className="text-xs text-gray-400 mb-2">Properties</h4>
              <div className="space-y-1">
                {selectedMaterial.properties.map((prop, idx) => (
                  <div key={idx} className="flex justify-between text-xs">
                    <span className="text-gray-400">{prop.label}</span>
                    <span>{prop.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-xs text-gray-400 mb-2">Applications</h4>
              <div className="flex flex-wrap gap-2">
                {selectedMaterial.applications.map((app, idx) => (
                  <span key={idx} className="px-2 py-1 text-xs rounded bg-gray-700">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs text-gray-400 mb-2">Projects</h4>
              <div className="space-y-2">
                {selectedMaterial.projects.map((project, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs bg-gray-700 p-2 rounded">
                    <div>
                      <p>{project.name}</p>
                      <p className="text-gray-400">{project.location} • {project.year}</p>
                    </div>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="mt-8 text-center">
          <div className="bg-gray-800 rounded p-4 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <h3 className="text-lg font-bold">Need Custom Solutions?</h3>
                <p className="text-gray-400 text-sm">
                  Contact us for customized material processing.
                </p>
              </div>
              <div className="flex gap-3">
               
               <a
  href="/contact"
  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold transition-colors duration-300 inline-block"
>
  Request Quote
</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}