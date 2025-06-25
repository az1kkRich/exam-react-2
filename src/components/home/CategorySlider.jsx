import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categories = [
  { name: 'Phones', icon: '📱' },
  { name: 'Smart Watches', icon: '⌚' },
  { name: 'Cameras', icon: '📷' },
  { name: 'Headphones', icon: '🎧' },
  { name: 'Computers', icon: '💻' },
  { name: 'Gaming', icon: '🎮' },
  { name: 'Accessories', icon: '🔌' },
];

const CategorySlider = () => {
  // Swiper tugmalari DOM'ga chiqqanini kutish uchun
  useEffect(() => {}, []);

  return (
    <div className="container mx-auto px-5 py-10 bg-white">
      {/* Title and Custom Navigation */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Browse By Category</h2>
        
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        modules={[Navigation]}
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100 p-4 rounded-xl text-center shadow hover:bg-gray-200 transition">
              <div className="text-3xl mb-2">{cat.icon}</div>
              <p className="font-medium">{cat.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
 