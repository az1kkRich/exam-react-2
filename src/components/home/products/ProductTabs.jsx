
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../../api/api';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('New Arrival');

  const {data, error, isLoading} = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(8, 0),
  })
  

  if (isLoading) return <div className='w-full flex justify-center mt-10'>
    <Spin size='large' className='flex justify-center items-center h-screen' />
  </div>;
  if (error) return <div className='text-red-500'>Error loading products</div>;


  return (
    <div className="container mx-auto px-5 py-10">
      <div className="flex gap-6 mb-6 text-lg font-medium">
        {['New Arrival', 'Bestseller', 'Featured Products'].map(tab => (
          <Link to={'/categories/smartphones'} className='text-black' key={tab}>
          <button
            key={tab}
            className={`pb-2 border-b-2 ${
              activeTab === tab ? 'border-black' : 'border-transparent text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
          </Link>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data.products.map((product, index) => (
          <ProductCard key={index} product={product}  />
        ))}
      </div>
    </div>
  );
};

export default ProductTabs;
