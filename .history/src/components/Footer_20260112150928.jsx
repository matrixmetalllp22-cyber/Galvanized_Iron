import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-24">

        {/* TOP */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >

          {/* Social */}
          <div className="flex gap-6 sm:gap-8 text-2xl sm:text-3xl opacity-60">
            {['f', '◎', 'in', 'X', '▶', '💬'].map((icon, i) => (
              <motion.a
                key={i}
                href="#"
                className="hover:opacity-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.2, color: "#ffffff" }}
              >
                {icon}
              </motion.a>
            ))}
          </div>

          {/* Newsletter */}
          <motion.div 
            className="w-full sm:max-w-[420px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-xs tracking-widest mb-3 text-gray-500">
              NEWSLETTER
            </p>
            <div className="flex items-center border-b border-gray-600 pb-2">
              <input
                placeholder="EMAIL"
                className="bg-transparent outline-none text-white placeholder-gray-500 w-full text-base sm:text-lg transition-all duration-300 focus:placeholder-gray-300"
              />
              <motion.span 
                className="text-xl sm:text-2xl text-white cursor-pointer"
                whileHover={{ x: 5, color: "#f59e0b" }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* LINKS */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 md:gap-16 mt-20 md:mt-28 text-sm sm:text-base"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >

          {/* COMPANY */}
          <div>
            <p className="mb-4 text-gray-500 tracking-widest text-xs">COMPANY</p>
            <Link to="/about" className="block mb-2 hover:text-white transition-colors duration-300">About Us</Link>
            {/* <Link to="/careers" className="block mb-2 hover:text-white">Careers</Link> */}
            <Link to="/contact" className="block mb-2 hover:text-white transition-colors duration-300">Contact</Link>
          </div>

          {/* PORTFOLIO */}
          <div>
            <p className="mb-4 text-gray-500 tracking-widest text-xs">PORTFOLIO</p>
            <Link to="/applications" className="block mb-2 hover:text-white transition-colors duration-300">Applications</Link>
            <Link to="/products" className="block mb-2 hover:text-white transition-colors duration-300">Products</Link>
            <Link to="/case-studies" className="block mb-2 hover:text-white transition-colors duration-300">Case Studies</Link>
          </div>

          {/* INDUSTRY */}
          <div>
            {/* <p className="mb-4 text-gray-500 tracking-widest text-xs">INDUSTRY</p> */}
            <Link to="/industries" className="block mb-2 hover:text-white transition-colors duration-300">Industries</Link>
            {/* <Link to="/services" className="block mb-2 hover:text-white">Services</Link> */}
          </div>

          {/* CLIENTS */}
          <div>
            <p className="mb-4 text-gray-500 tracking-widest text-xs">CLIENTS</p>
            <Link to="/clientsSection" className="block mb-2 hover:text-white transition-colors duration-300">Clients</Link>
          </div>

          {/* NEWS */}
          {/* <div>
            <p className="mb-4 text-gray-500 tracking-widest text-xs">NEWSROOM</p>
            <Link to="/news" className="block mb-2 hover:text-white">News</Link>
          </div> */}

          {/* MISC */}
          <div>
            <p className="mb-4 text-gray-500 tracking-widest text-xs">MISC</p>
            <Link to="/Certificaton" className="block mb-2 hover:text-white transition-colors duration-300">Certification</Link>
            <Link to="/" className="block mb-2 hover:text-white transition-colors duration-300">Home</Link>
          </div>

        </motion.div>

        {/* BOTTOM */}
        <motion.div 
          className="mt-16 md:mt-24 text-center md:text-right text-xs sm:text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          2026 © Matrix Metals LLP
        </motion.div>

      </div>
    </footer>
  );
}