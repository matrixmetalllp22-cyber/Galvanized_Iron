// import { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, ChevronRight, Phone, Mail, MapPin } from "lucide-react";

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const location = useLocation();
//   const menuRef = useRef(null);

//   const closeMenu = () => setOpen(false);

//   /* SCROLL EFFECT */
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   /* ESC TO CLOSE */
//   useEffect(() => {
//     const onEsc = (e) => e.key === "Escape" && closeMenu();
//     window.addEventListener("keydown", onEsc);
//     return () => window.removeEventListener("keydown", onEsc);
//   }, []);

//   /* LOCK BODY SCROLL */
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";
//     return () => (document.body.style.overflow = "auto");
//   }, [open]);

//   const navItems = [
//     { label: "Home", path: "/" },
//     { label: "About", path: "/about" },
//     { label: "Products", path: "/products" },
//     { label: "Services", path: "/services" },
//     { label: "Applications", path: "/applications" },
//     { label: "Case Studies", path: "/case-studies" },
//     { label: "Clients", path: "/clients" },
//     { label: "Certifications", path: "/certifications" },
//     { label: "Contact", path: "/contact" },
//   ];

//   return (
//     <>
//       {/* HEADER */}
//       <motion.header
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.4, ease: "easeOut" }}
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
//           ${
//             scrolled || isHovered
//               ? "bg-red/30 backdrop-blur-md border-b border-white/10"
//               : "bg-transparent"
//           }`}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 lg:h-20">
//             {/* LOGO */}
//             <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
//               <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
//                 <span className="text-white font-bold">MM</span>
//               </div>
//               <div className="leading-tight">
//                 <p className="text-white font-bold text-lg">MATRIX</p>
//                 <p className="text-orange-400 font-extrabold text-sm tracking-widest">
//                   METALS
//                 </p>
//               </div>
//             </Link>

//             {/* DESKTOP NAV */}
//             <nav className="hidden lg:flex items-center space-x-1">
//               {navItems.slice(0, 6).map((item) => (
//                 <Link
//                   key={item.label}
//                   to={item.path}
//                   className={`px-4 py-2 text-sm transition relative group
//                     ${
//                       location.pathname === item.path
//                         ? "text-orange-400"
//                         : "text-white/80 hover:text-orange-400"
//                     }`}
//                 >
//                   {item.label}
//                   <span
//                     className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-orange-400 transition-all duration-300
//                       ${
//                         location.pathname === item.path
//                           ? "w-4/5"
//                           : "w-0 group-hover:w-4/5"
//                       }`}
//                   />
//                 </Link>
//               ))}
//               <button
//                 onClick={() => setOpen(true)}
//                 className="ml-4 px-6 py-2 bg-linear-to-r from-orange-500 to-orange-600 rounded-full text-sm text-white hover:scale-105 transition"
//               >
//                 More +
//               </button>
//             </nav>

//             {/* MOBILE BUTTON */}
//             <button
//               onClick={() => setOpen(true)}
//               className="lg:hidden w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center"
//             >
//               <Menu size={20} />
//             </button>
//           </div>
//         </div>
//       </motion.header>

//       {/* FULLSCREEN MENU */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.25 }}
//             className="fixed inset-0 z-[999] bg-red-600 text-white overflow-y-auto"
//             ref={menuRef}
//           >
//             <div className="flex justify-between items-center px-6 py-6">
//               <p className="font-bold text-xl">MATRIX METALS</p>
//               <button onClick={closeMenu} className="text-orange-400">
//                 <X />
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }






import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const closeMenu = () => setOpen(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <>
      {/* TOP BAR - Transparent with scroll effect */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/30 backdrop-blur-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-white font-extrabold text-xl sm:text-2xl leading-tight tracking-tight hover:opacity-80 transition-opacity"
          >
            MATRIX <br /> <span className="text-orange-400">METALS</span>
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="text-white uppercase tracking-widest text-xs sm:text-sm hover:text-orange-400 transition-colors"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </motion.header>

      {/* FULLSCREEN MENU - Same structure, enhanced design */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-md text-white overflow-y-auto"
          >
            {/* TOP */}
            <div className="flex justify-between items-start px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8">
              <div className="font-extrabold text-xl sm:text-2xl md:text-3xl leading-tight">
                MATRIX <br /> <span className="text-orange-400">METALS</span>
              </div>

              <button
                onClick={closeMenu}
                className="uppercase tracking-widest text-xs sm:text-sm text-orange-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            {/* CONTENT - Same grid structure */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-16 md:pb-20 lg:pb-24">
              
              {/* LEFT MENU - Original numbering and items */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
                {[
                  { label: "Home", path: "/" },
                  { label: "Company", path: "/about" },
                  { label: "Quality", path: "/industries" },
                  { label: "Services", path: "/products" },
                  { label: "Applications", path: "/applications" },
                  { label: "Case Studies", path: "/case-studies" },
                  { label: "Clients", path: "/clientsSection" },
                  { label: "Certification", path: "/Certificaton" },
                  { label: "Contact", path: "/contact" },
                ].map((item, i) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={closeMenu}
                    className="flex items-center gap-3 sm:gap-4 hover:text-orange-500 transition-colors duration-300 group"
                  >
                    <span className="text-xs sm:text-sm opacity-40 group-hover:opacity-100 group-hover:text-orange-400 transition-all duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="relative overflow-hidden">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-orange-500 group-hover:w-full transition-all duration-500"></span>
                    </span>
                  </Link>
                ))}
              </div>

              {/* RIGHT MENU - Original structure with enhancements */}
              <div className="space-y-6 sm:space-y-8 md:space-y-10 text-base sm:text-lg md:text-xl lg:text-2xl">
                <p className="font-medium text-orange-400">Matrix Metals Limited</p>

                <div className="space-y-4">
                  <Link 
                    to="/news" 
                    onClick={closeMenu} 
                    className="hover:text-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2">→</span>
                    Matrix Metals Stories /
                  </Link>

                  <Link 
                    to="/industries" 
                    onClick={closeMenu} 
                    className="hover:text-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2">→</span>
                    Locations /
                  </Link>

                  <Link 
                    to="/contact" 
                    onClick={closeMenu} 
                    className="hover:text-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2">→</span>
                    Contact Us
                  </Link>
                </div>

                {/* CONTACT - Original contact info */}
                <div className="pt-4 md:pt-6 space-y-2 sm:space-y-3 text-sm sm:text-base opacity-80">
                  <p className="flex items-center">
                    <span className="text-orange-400 mr-2">✉</span>
                    contact@matrixmetals.in
                  </p>
                  <p className="flex items-center">
                    <span className="text-orange-400 mr-2">📞</span>
                    1800 309 8905
                  </p>
                  <p className="flex items-center">
                    <span className="text-orange-400 mr-2">📱</span>
                    +91 72084 14333
                  </p>
                </div>

                {/* SOCIALS - Original social icons */}
                <div className="flex gap-4 sm:gap-5 md:gap-6 pt-6 md:pt-8 text-xl sm:text-2xl">
                  <span className="hover:text-orange-400 cursor-pointer transition-colors duration-300">f</span>
                  <span className="hover:text-orange-400 cursor-pointer transition-colors duration-300">in</span>
                  <span className="hover:text-orange-400 cursor-pointer transition-colors duration-300">X</span>
                  <span className="hover:text-orange-400 cursor-pointer transition-colors duration-300">▶</span>
                  <span className="hover:text-orange-400 cursor-pointer transition-colors duration-300">💬</span>
                </div>
              </div>
            </div>

            {/* FOOTER OF MENU - Added for better UX */}
            <div className="border-t border-white/10 mt-8 md:mt-12 pt-6 md:pt-8 px-4 sm:px-6 md:px-8 lg:px-10">
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm opacity-60">
                <p>© {new Date().getFullYear()} Matrix Metals. All rights reserved.</p>
                <div className="flex gap-4 sm:gap-6 mt-2 sm:mt-0">
                  <Link to="/privacy" onClick={closeMenu} className="hover:text-orange-400 transition-colors">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" onClick={closeMenu} className="hover:text-orange-400 transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}