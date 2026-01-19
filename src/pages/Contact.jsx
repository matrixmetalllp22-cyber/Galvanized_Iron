// import React from "react";
// import ContactForm from "../components/ContactForm";

// export default function Contact() {
//   return (
//     <div className="min-h-screen bg-black text-white relative overflow-hidden">
//       {/* Subtle background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

//       <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
//         {/* Top Grid */}
//         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
//           {/* Left Content */}
//           <div>
//             {/* Eyebrow */}
//             <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
//               Contact
//             </p>

//             {/* Heading */}
//             <h1 className="mt-6 text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
//               Let’s build <br />
//               something <span className="text-orange-400">great</span> together
//             </h1>

//             {/* Subtext */}
//             <p className="mt-8 text-gray-400 text-base max-w-md leading-relaxed">
//               Have a project in mind or need industrial metal solutions?  
//               Reach out and our team will get back to you within 24 hours.
//             </p>

//             {/* Contact Info Card */}
//             <div className="mt-12 space-y-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
//               <div>
//                 <p className="text-xs tracking-widest uppercase text-gray-500">
//                   Email
//                 </p>
//                 <p className="mt-2 text-lg text-gray-200">
//                    matrixmetals.in
//                 </p>
//               </div>

//               <div>
//                 <p className="text-xs tracking-widest uppercase text-gray-500">
//                   Phone
//                 </p>
//                 <p className="mt-2 text-lg text-gray-200">
//                    1800 309 8905
//                 </p>
//                 <p className="text-lg text-gray-200">
//                    +91 7208414333
//                 </p>
//               </div>

//               <div>
//                 <p className="text-xs tracking-widest uppercase text-gray-500">
//                   Registered Office
//                 </p>
//                 <p className="mt-2 text-gray-300 leading-relaxed">
//                   3RD PHASE, 139 & 140, 9TH MAIN ROAD, 100 Feet Road, <br />
//                   Peenya, Bengaluru, <br />
//                   India
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right – Form */}
//           <div>
//             {/* Section Label */}
//             <div className="mb-8 flex items-center gap-4">
//               <div className="h-px w-16 bg-gray-700" />
//               <span className="text-gray-400 text-xs tracking-widest uppercase">
//                 Get in touch
//               </span>
//             </div>

//             <ContactForm />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
        {/* Top Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Content */}
          <div>
            {/* Eyebrow */}
            <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
              Contact
            </p>

            {/* Heading */}
            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Let’s build <br />
              something <span className="text-orange-400">great</span> together
            </h1>

            {/* Subtext */}
            <p className="mt-8 text-gray-400 text-base max-w-md leading-relaxed">
              Have a project in mind or need industrial metal solutions?  
              Reach out and our team will get back to you within 24 hours.
            </p>

            {/* Contact Info Card */}
            <div className="mt-12 space-y-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8">
              <div>
                <p className="text-xs tracking-widest uppercase text-gray-500">
                  Email
                </p>
                <a
                  href="mailto:info@matrixmetals.in"
                  className="mt-2 text-lg text-gray-200 hover:text-orange-400 transition"
                >
                  info@matrixmetals.in
                </a>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase text-gray-500">
                  Phone
                </p>
                <a
                  href="tel:18003098905"
                  className="mt-2 text-lg text-gray-200 hover:text-orange-400 transition block"
                >
                  1800 309 8905
                </a>
                <a
                  href="tel:+917208414333"
                  className="text-lg text-gray-200 hover:text-orange-400 transition block"
                >
                  +91 7208414333
                </a>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase text-gray-500">
                  Registered Office
                </p>
                <p className="mt-2 text-gray-300 leading-relaxed">
                  3RD PHASE, 139 & 140, 9TH MAIN ROAD, 100 Feet Road, <br />
                  Peenya, Bengaluru, <br />
                  India
                </p>
              </div>
            </div>
          </div>

          {/* Right – Form */}
          <div>
            {/* Section Label */}
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-16 bg-gray-700" />
              <span className="text-gray-400 text-xs tracking-widest uppercase">
                Get in touch
              </span>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
