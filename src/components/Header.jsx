// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   const closeMenu = () => setOpen(false);

//   return (
//     <>
//       {/* Top Bar */}
//       <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           {/* Logo */}
//           <Link
//             to="/"
//             onClick={closeMenu}
//             className="text-white font-extrabold text-2xl leading-none"
//           >
//             MATRIX <br /> METALS
//           </Link>

//           {/* Menu Button */}
//           <button
//             onClick={() => setOpen(true)}
//             className="text-white uppercase tracking-widest text-sm"
//           >
//             Menu
//           </button>
//         </div>
//       </header>

//       {/* Fullscreen Menu */}
//       {open && (
//         <div className="fixed inset-0 z-[999] bg-black text-white">
//           {/* Top */}
//           <div className="flex justify-between items-start px-10 py-8">
//             <div className="font-extrabold text-2xl leading-none">
//               MATRIX <br /> METALS
//             </div>

//             <button
//               onClick={closeMenu}
//               className="uppercase tracking-widest text-sm opacity-70 hover:opacity-100 text-orange-400"
//             >
//               Close
//             </button>
//           </div>

//           {/* Content */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-10 md:px-20 mt-10">
//             {/* LEFT MENU */}
//             <div className="space-y-6 text-4xl font-light">
//               {[
//                 { label: "Home", path: "/" },
//                 { label: "Company", path: "/about" },
//                 // { label: "Products", path: "/products" },
//                 { label: "Quality", path: "/industries" },
//                 { label: "Services", path: "/products" },
//                 { label: "Applications", path: "/applications" },
//                 { label: "Case Studies", path: "/case-studies" },
//                 { label: "Clients", path: "/clientsSection" },
//                 { label: "Certification", path: "/Certificaton" },
//                 // { label: "Newsroom", path: "/news" },
//                 // { label: "Careers", path: "/careers" },
//                 { label: "Contact", path: "/contact" },
//               ].map((item, i) => (
//                 <Link
//                   key={item.label}
//                   to={item.path}
//                   onClick={closeMenu}
//                   className="flex gap-4 hover:text-orange-500 transition"
//                 >
//                   <span className="text-sm opacity-50 mt-2">
//                     {String(i + 1).padStart(2, "0")}
//                   </span>
//                   {item.label}
//                 </Link>
//               ))}
//             </div>

//             {/* RIGHT MENU */}
//             <div className="space-y-6 text-2xl opacity-100">
//               <p className="hover:text-white cursor-pointer">
//                Matrix Metals Limited
//               </p>

//               {/* <Link to="/news" onClick={closeMenu} className="hover:text-white">
//                 Press Releases
//               </Link> <br /> */}

//               <Link to="/news" onClick={closeMenu} className="hover:text-white">
//                 Matrix metals Stories /
//               </Link>

//               <Link to="/industries" onClick={closeMenu} className="hover:text-white">
//                 Locations  /
//               </Link>

//               {/* <Link to="/careers" onClick={closeMenu} className="hover:text-white">
//                 Careers
//               </Link> */}

//               <Link to="/contact" onClick={closeMenu} className="hover:text-white">
//                 Contact Us
//               </Link>

//               <div className="pt-6 space-y-2 text-sm">
//                 <p>contact@matrixmetals.in</p>
//                 <p>1800 309 8905</p>
//                 <p>+91 72084 14333</p>
//               </div>

//               {/* Socials */}
//               <div className="flex gap-6 pt-6 text-xl opacity-70">
//                 <span>f</span>
//                 <span>in</span>
//                 <span>X</span>
//                 <span>▶</span>
//                 <span>💬</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* TOP BAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-white font-extrabold text-xl sm:text-2xl leading-tight"
          >
            MATRIX <br /> METALS
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="text-white uppercase tracking-widest text-xs sm:text-sm"
          >
            Menu
          </button>
        </div>
      </header>

      {/* FULLSCREEN MENU */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black text-white overflow-y-auto">
          {/* TOP */}
          <div className="flex justify-between items-start px-4 sm:px-10 py-6 sm:py-8">
            <div className="font-extrabold text-xl sm:text-2xl leading-tight">
              MATRIX <br /> METALS
            </div>

            <button
              onClick={closeMenu}
              className="uppercase tracking-widest text-xs sm:text-sm text-orange-400 hover:opacity-80"
            >
              Close
            </button>
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-10 md:px-20 pb-20">
            
            {/* LEFT MENU */}
            <div className="space-y-5 sm:space-y-6 text-2xl sm:text-3xl md:text-4xl font-light">
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
                  className="flex gap-4 hover:text-orange-500 transition"
                >
                  <span className="text-xs sm:text-sm opacity-50 mt-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              ))}
            </div>

            {/* RIGHT MENU */}
            <div className="space-y-5 sm:space-y-6 text-lg sm:text-xl md:text-2xl">
              <p className="font-medium">Matrix Metals Limited</p>

              <Link to="/news" onClick={closeMenu} className="hover:text-orange-400 transition">
                Matrix Metals Stories /
              </Link>

              <Link to="/industries" onClick={closeMenu} className="hover:text-orange-400 transition">
                Locations /
              </Link>

              <Link to="/contact" onClick={closeMenu} className="hover:text-orange-400 transition">
                Contact Us
              </Link>

              {/* CONTACT */}
              <div className="pt-4 space-y-1 text-sm sm:text-base opacity-80">
                <p>contact@matrixmetals.in</p>
                <p>1800 309 8905</p>
                <p>+91 72084 14333</p>
              </div>

              {/* SOCIALS */}
              <div className="flex gap-5 pt-6 text-xl opacity-70">
                <span className="hover:opacity-100 cursor-pointer">f</span>
                <span className="hover:opacity-100 cursor-pointer">in</span>
                <span className="hover:opacity-100 cursor-pointer">X</span>
                <span className="hover:opacity-100 cursor-pointer">▶</span>
                <span className="hover:opacity-100 cursor-pointer">💬</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
