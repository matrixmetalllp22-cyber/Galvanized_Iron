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
