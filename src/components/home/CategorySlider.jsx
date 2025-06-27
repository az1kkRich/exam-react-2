import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// icons
import {
  FaLaptop,
  FaTshirt,
  FaShoePrints,
  FaClock,
  FaMobileAlt,
  FaMotorcycle,
  FaLeaf,
  FaTabletAlt,
  FaHome,
  FaCouch,
  FaUtensils,
  FaGem,
  FaShoppingBag,
  FaRegHeart,
  FaSun,
  FaBasketballBall,
  FaGlasses,
  FaCar,
  FaSprayCan,
  FaPumpSoap,
  FaAppleAlt,
  FaTags,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';





import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import MotionBox from '../../effects/MotionBox';

export const categories = [
  { key: 'beauty', label: 'Beauty', icon: <FaRegHeart /> },
  { key: 'fragrances', label: 'Fragrances', icon: <FaSprayCan /> },
  { key: 'furniture', label: 'Furniture', icon: <FaCouch /> },
  { key: 'groceries', label: 'Groceries', icon: <FaAppleAlt /> },
  { key: 'home-decoration', label: 'Home Decoration', icon: <FaHome /> },
  { key: 'kitchen-accessories', label: 'Kitchen Accessories', icon: <FaUtensils /> },
  { key: 'laptops', label: 'Laptops', icon: <FaLaptop /> },
  { key: 'mens-shirts', label: 'Men\'s Shirts', icon: <FaTshirt /> },
  { key: 'mens-shoes', label: 'Men\'s Shoes', icon: <FaShoePrints /> },
  { key: 'mens-watches', label: 'Men\'s Watches', icon: <FaClock /> },
  { key: 'mobile-accessories', label: 'Mobile Accessories', icon: <FaMobileAlt /> },
  { key: 'motorcycle', label: 'Motorcycle', icon: <FaMotorcycle /> },
  { key: 'skin-care', label: 'Skin Care', icon: <FaPumpSoap /> },
  { key: 'smartphones', label: 'Smartphones', icon: <FaMobileAlt /> },
  { key: 'sports-accessories', label: 'Sports Accessories', icon: <FaBasketballBall /> },
  { key: 'sunglasses', label: 'Sunglasses', icon: <FaGlasses /> },
  { key: 'tablets', label: 'Tablets', icon: <FaTabletAlt /> },
  { key: 'tops', label: 'Tops', icon: <FaTshirt /> },
  { key: 'vehicle', label: 'Vehicle', icon: <FaCar /> },
  { key: 'womens-bags', label: 'Women\'s Bags', icon: <FaShoppingBag /> },
  { key: 'womens-dresses', label: 'Women\'s Dresses', icon: <FaTags /> },
  { key: 'womens-jewellery', label: 'Women\'s Jewellery', icon: <FaGem /> },
  { key: 'womens-shoes', label: 'Women\'s Shoes', icon: <FaShoePrints /> },
  { key: 'womens-watches', label: 'Women\'s Watches', icon: <FaClock /> },
];


const CategorySlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container mx-auto px-5 py-10 bg-white">
      {/* Title and Custom Navigation */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold w-7/10 md:w-9/10">Browse By Category</h2>
        <button ref={prevRef} className="text-xl p-2 bg-gray-200 rounded hover:bg-gray-300">
          <FaArrowLeft />
        </button>
        <button ref={nextRef} className="text-xl p-2 bg-gray-200 rounded hover:bg-gray-300">
          <FaArrowRight />
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        onInit={(swiper) => {
          // Swiper init bo‘lganda custom tugmalarni ulang
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
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
            <MotionBox delay={0.01 * index} direction='up'>
              <div className="bg-gray-100 p-4 h-25 rounded-xl text-center flex flex-col justify-center items-center shadow hover:bg-gray-200 transition">
                <div className="text-3xl text-amber-400">
                  {cat.icon}
                </div>
                <Link to={`/categories/${cat.key}`} className="mt-2  hover:underline">
                  <p className="font-medium">{cat.label}</p>
                </Link>
              </div>
            </MotionBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
