// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-lg fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex-shrink-0 flex items-center">
//             <Link to="/" className="text-xl font-bold text-gray-800">
//               matrix metals llp
//             </Link>
//           </div>

//           {/* Desktop menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="text-gray-600 hover:text-gray-900">
//               Home
//             </Link>
//             <Link to="/about" className="text-gray-600 hover:text-gray-900">
//               About
//             </Link>
//             <Link to="/services" className="text-gray-600 hover:text-gray-900">
//               Services
//             </Link>
//             <Link to="/contact" className="text-gray-600 hover:text-gray-900">
//               Contact
//             </Link>
//             <Link to="/applications" className="text-gray-600 hover:text-gray-900">
//               Applications
//             </Link>
//             <Link to="/case-studies" className="text-gray-600 hover:text-gray-900">
//               Case Studies
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link
//               to="/"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//               onClick={() => setIsOpen(false)}
//             >
//               About
//             </Link>
//             <Link
//               to="/services"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//               onClick={() => setIsOpen(false)}
//             >
//               Services
//             </Link>
//             <Link
//               to="/contact"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//               onClick={() => setIsOpen(false)}
//             >
//               Contact
//             </Link>
//             <Link
//               to="/case-studies"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//               onClick={() => setIsOpen(false)}
//             >
//               Case Studies
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }













// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// export default function ModernStaggeredNavbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Updated menu items based on your screenshot
//   const menuItems = [
//     "Home", "About Us", "Products & Solutions", "Quality", 
//     "News & Media", "Contact", "Applications", "Case Studies"
//   ];

//   // --- Framer Motion Animation Variants ---
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.08, // Time delay between each item's animation
//         delayChildren: 0.2,
//       }
//     },
//     exit: { opacity: 0, transition: { duration: 0.3 } }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }, // Custom ease for smooth slide
//   };

//   return (
//     <nav className="bg-white shadow-lg fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Top Bar (Visible in Nav) */}
//         <div className="flex justify-between items-center h-8 bg-white border-b border-gray-100">
//             <a href="mailto:info@matrixmetals.com" className="text-sm text-gray-500 hover:text-blue-600 transition">
//                 <i className="fas fa-envelope mr-1"></i> info@matrixmetals.com
//             </a>
//             <a href="tel:+911234567890" className="text-sm text-gray-500 hover:text-blue-600 transition">
//                 <i className="fas fa-phone mr-1"></i> +91 12345 67890
//             </a>
//         </div>
        
//         {/* Main Navigation Row */}
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link to="/" className="text-2xl font-extrabold text-[#F57C00]"> {/* Using an orange color code */}
//                 Matrix <span className="text-blue-800">Metals</span>
//             </Link>
//           </div>

//           {/* Desktop Menu (Keep the original for desktop) */}
//           <div className="hidden md:flex items-center space-x-8">
//             {/* ... desktop links here ... */}
//           </div>

//           {/* Mobile Menu Button (Toggle) */}
//           <div className="md:hidden flex items-center relative z-[60]">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-full border-2 border-gray-200 text-gray-800 hover:bg-gray-100 transition focus:outline-none"
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               ) : (
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* --- Full-Screen Mobile Menu Overlay --- */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-gray-900 bg-opacity-95 z-[55] backdrop-blur-sm flex flex-col pt-16 md:hidden"
//           >
//             {/* Close Button (Already handled by button in main nav) */}
            
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               className="flex flex-col items-center justify-center space-y-4 flex-grow px-8"
//             >
//               {menuItems.map((item) => (
//                 <motion.div key={item} variants={itemVariants}>
//                   <Link
//                     to={`/${item.toLowerCase().replace(/[\s&]/g, "-")}`} // Handle spaces and '&'
//                     onClick={() => setIsOpen(false)}
//                     className="
//                       text-4xl font-extrabold tracking-tight 
//                       text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200 
//                       hover:from-blue-400 hover:to-[#F57C00] transition duration-300
//                     "
//                   >
//                     {item}
//                   </Link>
//                 </motion.div>
//               ))}
//             </motion.div>
            
//             {/* Footer Contact Info for Mobile */}
//             <div className="p-6 border-t border-gray-700 w-full text-center">
//                 <p className="text-gray-400 text-sm mb-2">Matrix Metals LLP</p>
//                 <div className="flex justify-center space-x-6">
//                     <a href="mailto:info@matrixmetals.com" className="text-gray-300 hover:text-[#F57C00] transition">
//                         <i className="fas fa-envelope"></i>
//                     </a>
//                     <a href="tel:+911234567890" className="text-gray-300 hover:text-blue-400 transition">
//                         <i className="fas fa-phone"></i>
//                     </a>
//                 </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }


































import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, ShoppingBag, Award, Rss, Mail, Grid, Briefcase, X, Menu } from 'lucide-react'; // Using lucide-react for icons

export default function SidebarNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Updated menu items based on your screenshot, now including an icon
  const menuItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about-us", icon: Info },
    { name: "Products & Solutions", href: "/products-solutions", icon: ShoppingBag },
    { name: "Quality", href: "/quality", icon: Award },
    { name: "News & Media", href: "/news-media", icon: Rss },
    { name: "Contact", href: "/contact", icon: Mail },
    { name: "Applications", href: "/applications", icon: Grid },
    { name: "Case Studies", href: "/case-studies", icon: Briefcase },
  ];

  // --- Framer Motion Animation Variants ---
  const sidebarVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
  };

  return (
    <>
      {/* -------------------- 1. DESKTOP SIDEBAR (md:block) -------------------- */}
      <div className="hidden md:flex flex-col w-64 fixed h-full bg-gray-900 shadow-xl z-50">
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-700">
          <Link to="/" className="text-2xl font-extrabold text-[#F57C00]">
            Matrix <span className="text-blue-400">Metals</span>
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition duration-150"
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Contact Footer */}
        <div className="p-4 border-t border-gray-700 text-xs text-gray-500">
            <p>info@matrixmetals.com</p>
            <p>+91 12345 67890</p>
        </div>
      </div>
      
      {/* -------------------- 2. MOBILE TOP BAR (sm/xs) -------------------- */}
      {/* This top bar remains visible and has the hamburger button */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-lg z-[60] md:hidden">
        <div className="flex justify-between items-center h-full px-4">
            <Link to="/" className="text-xl font-bold text-gray-800">
                Matrix Metals
            </Link>
            <button
                onClick={() => setIsOpen(true)} // Open full screen menu
                className="p-2 rounded-full text-gray-800 hover:bg-gray-100 transition focus:outline-none"
            >
                <Menu className="w-6 h-6" />
            </button>
        </div>
      </header>

      {/* -------------------- 3. MOBILE FULL-SCREEN OVERLAY -------------------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
            className="fixed inset-0 bg-gray-900 z-[70] flex flex-col p-6"
          >
            {/* Header/Close Button */}
            <div className="flex justify-between items-center mb-10">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-extrabold text-[#F57C00]">
                Matrix <span className="text-blue-400">Metals</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full text-gray-300 hover:bg-gray-700 transition"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex-grow space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-4 p-4 text-3xl font-semibold rounded-lg text-gray-200 hover:bg-gray-700 hover:text-white transition duration-200"
                >
                  <item.icon className="w-7 h-7 text-[#F57C00]" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
            
            {/* Contact Info */}
            <div className="pt-8 text-center border-t border-gray-700 mt-auto">
                <a href="mailto:info@matrixmetals.com" className="text-lg text-gray-400 block hover:text-white transition">
                    info@matrixmetals.com
                </a>
                <a href="tel:+911234567890" className="text-lg text-gray-400 block mt-1 hover:text-white transition">
                    +91 12345 67890
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* NOTE: Content should be wrapped in a main container and given 'ml-64'
        to shift it over on desktop, but 'mt-16' for mobile.
      */}
      {/* <main className="md:ml-64 pt-16 md:pt-0">
          Your main page content goes here...
      </main> */}
    </>
  );
}