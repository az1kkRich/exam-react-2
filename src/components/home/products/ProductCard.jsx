// src/components/ProductCard.jsx
import { Button } from 'antd';
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg relative">
      <div
        className="absolute top-3 right-3 cursor-pointer"
        onClick={() => setLiked(!liked)}
      >
        <FaHeart className={`text-xl transition ${liked ? 'text-red-500' : 'text-gray-400'}`} />
      </div>
      <div className="flex flex-col justify-between h-80">
        <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mx-auto mb-4" />
        <div>
            <h3 className="text-xl font-medium text-center">{product.name}</h3>
            <p className="text-center text-lg font-semibold my-2">${product.price}</p>
            <Button color="default" variant="solid" className='w-full'>
                Buy Now
            </Button>

        </div>
        
      </div>
    </div>
  );
};

export default ProductCard;
