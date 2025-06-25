// src/components/ProductTabs.jsx
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import cartImage from '../../../assets/Iphone-14-pro-1.png'

// 🔧 Sample data (istalgancha kengaytirishingiz mumkin)
const products = [
  { name: 'Apple iPhone 14 Pro Max 128GB Deep Purple', price: 900, image: cartImage },
  { name: 'Blackmagic Pocket Cinema Camera 6k', price: 2535, image: cartImage },
  { name: 'Apple Watch Series 9 GPS 41mm', price: 399, image: cartImage },
  { name: 'AirPods Max Silver', price: 549, image: cartImage },
  { name: 'Samsung Galaxy Watch6 Classic 47mm', price: 299, image: cartImage },
  { name: 'Galaxy Z Fold5 Unlocked | 256GB', price: 1600, image: cartImage },
  { name: 'Galaxy Buds FE Graphite', price: 100, image: cartImage },
  { name: 'Apple iPad 10.2" 64GB Wi-Fi Silver', price: 329, image: cartImage },
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('New Arrival');

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="flex gap-6 mb-6 text-lg font-medium">
        {['New Arrival', 'Bestseller', 'Featured Products'].map(tab => (
          <button
            key={tab}
            className={`pb-2 border-b-2 ${
              activeTab === tab ? 'border-black' : 'border-transparent text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductTabs;
