import React, { useState } from "react";

export default function LazyImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      className={`
        transition-all duration-700 ease-out
        ${loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-105"}
        ${className}
      `}
    />
  );
}
