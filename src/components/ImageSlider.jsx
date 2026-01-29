import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "/Images/architecture-2182003_1920.jpg",
    "/Images/prague.jpg",
    "/Images/firenze-9292729_1280.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* SLIDES */}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
            ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ORANGE DIAGONAL (AM/NS STYLE) */}
      <div className="absolute top-0 right-[15%] w-[120px] h-full bg-orange-500/90 skew-x-[-18deg]"></div>

      {/* HERO CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-end px-8 md:px-16">
        <div className="max-w-xl text-right text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            BANAUNGA MAIN,<br />BANEGA BHARAT.
          </h1>

          <p className="mt-4 text-gray-200 text-lg leading-relaxed">
            Where bridges defy gravity, and spirit rises beyond fear.
            India stands unstoppable.
          </p>

          {/* <button className="mt-8 inline-block border border-white px-8 py-3 text-sm tracking-widest
            hover:bg-white hover:text-black transition">
            KNOW MORE
          </button> */}
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition
              ${i === currentIndex ? "bg-white scale-125" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
