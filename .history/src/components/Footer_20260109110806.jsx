// // // import React from 'react';
// // // import { Link } from 'react-router-dom';

// // // export default function Footer() {
// // //   return (
// // //     <footer className="bg-slate-900 dark:bg-gray-950 text-white transition-colors duration-300">
// // //       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //           {/* Company Info */}
// // //           <div>
// // //             <h3 className="text-xl font-bold mb-4 text-orange-300 dark:text-orange-400">Matrix Metals LLP</h3>
// // //             <p className="text-slate-300 dark:text-gray-400">
// // //               Creating value through innovative steel processing and sustainable practices.
// // //             </p>
// // //           </div>

// // //           {/* Quick Links */}
// // //           <div>
// // //             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
// // //             <ul className="space-y-2">
// // //               <li>
// // //                 <Link to="/" className="text-slate-300 dark:text-gray-400 hover:text-white dark:hover:text-orange-400 transition-colors">
// // //                   Home
// // //                 </Link>
// // //               </li>
// // //               <li>
// // //                 <Link to="/about" className="text-slate-300 dark:text-gray-400 hover:text-white dark:hover:text-orange-400 transition-colors">
// // //                   About Us
// // //                 </Link>
// // //               </li>
// // //               <li>
// // //                 <Link to="/industries" className="text-slate-300 dark:text-gray-400 hover:text-white dark:hover:text-orange-400 transition-colors">
// // //                   Industries
// // //                 </Link>
// // //               </li>
// // //               <li>
// // //                 <Link to="/contact" className="text-slate-300 dark:text-gray-400 hover:text-white dark:hover:text-orange-400 transition-colors">
// // //                   Contact
// // //                 </Link>
// // //               </li>
// // //             </ul>
// // //           </div>

// // //           {/* Contact Info */}
// // //           <div>
// // //             <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
// // //             <ul className="space-y-2 text-slate-300 dark:text-gray-400">
// // //               <li className="flex items-start">
// // //                 <svg
// // //                   className="h-6 w-6 mr-2 text-gray-400"
// // //                   fill="none"
// // //                   viewBox="0 0 24 24"
// // //                   stroke="currentColor"
// // //                 >
// // //                   <path
// // //                     strokeLinecap="round"
// // //                     strokeLinejoin="round"
// // //                     strokeWidth={2}
// // //                     d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
// // //                   />
// // //                   <path
// // //                     strokeLinecap="round"
// // //                     strokeLinejoin="round"
// // //                     strokeWidth={2}
// // //                     d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
// // //                   />
// // //                 </svg>
// // //                 <span>123 Business Street, Karnataka, India</span>
// // //               </li>
// // //               <li className="flex items-start">
// // //                 <svg
// // //                   className="h-6 w-6 mr-2 text-gray-400"
// // //                   fill="none"
// // //                   viewBox="0 0 24 24"
// // //                   stroke="currentColor"
// // //                 >
// // //                   <path
// // //                     strokeLinecap="round"
// // //                     strokeLinejoin="round"
// // //                     strokeWidth={2}
// // //                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
// // //                   />
// // //                 </svg>
// // //                 <span>contact@matrixmetals.example</span>
// // //               </li>
// // //               <li className="flex items-start">
// // //                 <svg
// // //                   className="h-6 w-6 mr-2 text-gray-400"
// // //                   fill="none"
// // //                   viewBox="0 0 24 24"
// // //                   stroke="currentColor"
// // //                 >
// // //                   <path
// // //                     strokeLinecap="round"
// // //                     strokeLinejoin="round"
// // //                     strokeWidth={2}
// // //                     d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
// // //                   />
// // //                 </svg>
// // //                 <span>+91 234 567 890</span>
// // //               </li>
// // //             </ul>
// // //           </div>
// // //         </div>

// // //         <div className="mt-8 pt-8 border-t border-gray-800">
// // //           <p className="text-center text-gray-400">
// // //             © {new Date().getFullYear()} matrix metals llp. All rights reserved.
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </footer>
// // //   );
// // // }




// // import React from "react";
// // import { Link } from "react-router-dom";

// // export default function Footer() {
// //   return (
// //     <footer className="bg-[#1f2023] text-gray-300">
// //       <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

// //         {/* Brand */}
// //         <div>
// //           <h3 className="text-xl font-bold text-white mb-4">
// //             MATRIX<span className="text-orange-500">.</span>
// //           </h3>
// //           <p className="text-sm leading-relaxed max-w-sm">
// //             Engineering-driven metal solutions built on precision,
// //             safety, and long-term industrial value.
// //           </p>
// //         </div>

// //         {/* Links */}
// //         <div>
// //           <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-6">
// //             Company
// //           </h4>
// //           <ul className="space-y-3 text-sm">
// //             <li><Link to="/about" className="hover:text-orange-500">About</Link></li>
// //             <li><Link to="/products" className="hover:text-orange-500">Products</Link></li>
// //             <li><Link to="/industries" className="hover:text-orange-500">Industries</Link></li>
// //             <li><Link to="/careers" className="hover:text-orange-500">Careers</Link></li>
// //             <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
// //           </ul>
// //         </div>

// //         {/* Contact */}
// //         <div>
// //           <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-6">
// //             Contact
// //           </h4>
// //           <p className="text-sm">Bengaluru, Karnataka, India</p>
// //           <p className="text-sm mt-2">info@matrixmetals.com</p>
// //           <p className="text-sm mt-2">+91 12345 67890</p>
// //         </div>
// //       </div>

// //       <div className="border-t border-gray-700 py-6 text-center text-xs text-gray-500">
// //         © {new Date().getFullYear()} Matrix Metals LLP. All rights reserved.
// //       </div>
// //     </footer>
// //   );
// // }





// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-b from-[#1b1b1b] to-black text-gray-400">
//       <div className="max-w-7xl mx-auto px-8 py-20">

//         {/* Top */}
//         <div className="flex flex-col md:flex-row justify-between items-start gap-10">
//           {/* Social */}
//           <div className="flex gap-6 text-2xl opacity-60">
//             <span>f</span>
//             <span>◎</span>
//             <span>in</span>
//             <span>X</span>
//             <span>▶</span>
//             <span>💬</span>
//           </div>

//           {/* Newsletter */}
//           <div className="flex items-center gap-4 border-b border-gray-600 pb-2">
//             <span className="text-sm tracking-widest">NEWSLETTER</span>
//             <input
//               type="email"
//               placeholder="EMAIL"
//               className="bg-transparent outline-none text-white placeholder-gray-500"
//             />
//             <span className="text-xl">→</span>
//           </div>
//         </div>

//         {/* Links */}
//         <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mt-20 text-sm">
//           <div>
//             <p className="text-gray-500 mb-4">COMPANY</p>
//             <p>About Us</p>
//             <p>Leadership</p>
//             <p>Locations</p>
//           </div>

//           <div>
//             <p className="text-gray-500 mb-4">PORTFOLIO</p>
//             <p>Applications</p>
//             <p>Marquee Projects</p>
//             <p>Steel Making Process</p>
//           </div>

//           <div>
//             <p className="text-gray-500 mb-4">PEOPLE</p>
//             <p>She Makes Steel Smarter</p>
//             <p>Careers</p>
//           </div>

//           <div>
//             <p className="text-gray-500 mb-4">SOCIETY</p>
//             <p>Brighter Futures</p>
//           </div>

//           <div>
//             <p className="text-gray-500 mb-4">NEWSROOM</p>
//             <p>Press Releases</p>
//           </div>

//           <div>
//             <p className="text-gray-500 mb-4">MISC</p>
//             <p>Contact Us</p>
//             <p>Disclaimer</p>
//             <p>Policies</p>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="mt-20 text-xs text-right opacity-50">
//           2025 © AM/NS INDIA
//         </div>
//       </div>
//     </footer>
//   );
// }


// export default function Footer() {
//   return (
//     <footer className="bg-[#111] text-gray-400">
//       <div className="max-w-7xl mx-auto px-8 py-24">

//         {/* TOP ROW */}
//         <div className="flex flex-col md:flex-row justify-between gap-16">
//           {/* Social */}
//           <div className="flex gap-8 text-2xl opacity-50">
//             <span>f</span>
//             <span>◎</span>
//             <span>in</span>
//             <span>X</span>
//             <span>▶</span>
//             <span>💬</span>
//           </div>

//           {/* Newsletter */}
//           <div className="flex items-center gap-6 border-b border-gray-600 pb-2 w-full md:w-auto">
//             <span className="text-xs tracking-widest text-gray-500">
//               NEWSLETTER
//             </span>
//             <input
//               placeholder="EMAIL"
//               className="bg-transparent outline-none text-white placeholder-gray-500 w-64"
//             />
//             <span className="text-xl text-white">→</span>
//           </div>
//         </div>

//         {/* LINKS */}
//         <div className="grid grid-cols-2 md:grid-cols-6 gap-14 mt-24 text-sm">
//           {[
//             {
//               title: "COMPANY",
//               links: ["About Us", "Leadership", "Locations"],
//             },
//             {
//               title: "PORTFOLIO",
//               links: ["Applications", "Marquee Projects", "Steel Making Process"],
//             },
//             {
//               title: "PEOPLE",
//               links: ["She Makes Steel Smarter", "Careers"],
//             },
//             {
//               title: "SOCIETY",
//               links: ["Brighter Futures"],
//             },
//             {
//               title: "NEWSROOM",
//               links: ["Press Releases", "AM/NS Stories"],
//             },
//             {
//               title: "MISC",
//               links: [
//                 "AM/NS Middle East",
//                 "Contact Us",
//                 "Disclaimer",
//                 "Policies",
//               ],
//             },
//           ].map((col) => (
//             <div key={col.title}>
//               <p className="text-gray-500 mb-4">{col.title}</p>
//               {col.links.map((l) => (
//                 <p
//                   key={l}
//                   className="hover:text-white cursor-pointer mb-2"
//                 >
//                   {l}
//                 </p>
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* BOTTOM */}
//         <div className="mt-24 text-xs text-gray-500 text-right">
//           2025 © AM/NS INDIA
//         </div>
//       </div>
//     </footer>
//   );
// }





// export default function Footer() {
//   return (
//     <footer className="bg-[#111] text-gray-400 min-h-[85vh] flex items-center">
//       <div className="w-full max-w-7xl mx-auto px-10">

//         {/* TOP */}
//         <div className="flex flex-col md:flex-row justify-between items-start gap-20">
//           {/* Social */}
//           <div className="flex gap-10 text-3xl opacity-50">
//             <span>f</span>
//             <span>◎</span>
//             <span>in</span>
//             <span>X</span>
//             <span>▶</span>
//             <span>💬</span>
//           </div>

//           {/* Newsletter */}
//           <div className="w-full md:w-[420px]">
//             <p className="text-xs tracking-widest mb-4 text-gray-500">
//               NEWSLETTER
//             </p>
//             <div className="flex items-center border-b border-gray-600 pb-3">
//               <input
//                 placeholder="EMAIL"
//                 className="bg-transparent outline-none text-white placeholder-gray-500 w-full text-lg"
//               />
//               <span className="text-2xl text-white">→</span>
//             </div>
//           </div>
//         </div>

//         {/* LINKS */}
//         <div className="grid grid-cols-2 md:grid-cols-6 gap-16 mt-28 text-lg">
//           {[
//             { title: "COMPANY", links: ["About Us", "Leadership", "Locations"] },
//             {
//               title: "PORTFOLIO",
//               links: ["Applications", "Marquee Projects", "Steel Making Process"],
//             },
//             { title: "PEOPLE", links: ["She Makes Steel Smarter", "Careers"] },
//             { title: "SOCIETY", links: ["Brighter Futures"] },
//             { title: "NEWSROOM", links: ["Press Releases", "AM/NS Stories"] },
//             {
//               title: "MISC",
//               links: [
//                 "AM/NS Middle East",
//                 "Contact Us",
//                 "Disclaimer",
//                 "Policies",
//               ],
//             },
//           ].map((col) => (
//             <div key={col.title}>
//               <p className="mb-6 text-gray-500 tracking-widest text-sm">
//                 {col.title}
//               </p>
//               {col.links.map((item) => (
//                 <p
//                   key={item}
//                   className="mb-3 hover:text-white transition cursor-pointer"
//                 >
//                   {item}
//                 </p>
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* BOTTOM */}
//         <div className="mt-28 text-right text-sm text-gray-500">
//           2025 © AM/NS INDIA
//         </div>
//       </div>
//     </footer>
//   );
// }










export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-24">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20">
          
          {/* Social */}
          <div className="flex gap-6 sm:gap-8 text-2xl sm:text-3xl opacity-60">
            <span className="cursor-pointer hover:opacity-100">f</span>
            <span className="cursor-pointer hover:opacity-100">◎</span>
            <span className="cursor-pointer hover:opacity-100">in</span>
            <span className="cursor-pointer hover:opacity-100">X</span>
            <span className="cursor-pointer hover:opacity-100">▶</span>
            <span className="cursor-pointer hover:opacity-100">💬</span>
          </div>

          {/* Newsletter */}
          <div className="w-full sm:max-w-[420px]">
            <p className="text-xs tracking-widest mb-3 text-gray-500">
              NEWSLETTER
            </p>
            <div className="flex items-center border-b border-gray-600 pb-2">
              <input
                placeholder="EMAIL"
                className="bg-transparent outline-none text-white placeholder-gray-500 w-full text-base sm:text-lg"
              />
              <span className="text-xl sm:text-2xl text-white cursor-pointer">
                →
              </span>
            </div>
          </div>
        </div>

        {/* LINKS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 md:gap-16 mt-20 md:mt-28 text-sm sm:text-base">
          {[
            { title: "COMPANY", links: ["About Us", "Leadership", "Locations"] },
            {
              title: "PORTFOLIO",
              links: ["Applications", "Marquee Projects", "Steel Making Process"],
            },
            { title: "PEOPLE", links: ["She Makes Steel Smarter", "Careers"] },
            { title: "SOCIETY", links: ["Brighter Futures"] },
            { title: "NEWSROOM", links: ["Press Releases", "AM/NS Stories"] },
            {
              title: "MISC",
              links: [
                "AM/NS Middle East",
                "Contact Us",
                "Disclaimer",
                "Policies",
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-gray-500 tracking-widest text-xs">
                {col.title}
              </p>
              {col.links.map((item) => (
                <p
                  key={item}
                  className="mb-2 hover:text-white transition cursor-pointer"
                >
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mt-16 md:mt-24 text-center md:text-right text-xs sm:text-sm text-gray-500">
          2025 © AM/NS INDIA
        </div>
      </div>
    </footer>
  );
}
