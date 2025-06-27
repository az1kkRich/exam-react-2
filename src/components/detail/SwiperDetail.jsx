import React, { useState } from "react";



const SwiperDetail = ({images}) => {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-row gap-6 max-w-6xl mx-auto px-4">
      {/* Thumbnails on the left (column) */}
      <div className="flex flex-col gap-4">

        
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`thumb-${idx}`}
            onClick={() => setActiveIndex(idx)}
            className={`w-16 h-16 object-cover border-2 rounded-lg cursor-pointer ${
              activeIndex === idx ? "border-black" : "border-transparent"
            }`}
          />
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={images[activeIndex]}
          alt={`main-${activeIndex}`}
          className="w-full max-w-lg rounded-xl object-contain max-h-[500px]"
        />
      </div>
    </div>
  );
};

export default SwiperDetail;
