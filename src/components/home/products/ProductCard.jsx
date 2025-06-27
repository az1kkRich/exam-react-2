
import { Button } from 'antd';
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useCartStore } from '../../../store/useCartStore';
import { IoHeartDislikeCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

  const { wishlist, addWishlist } = useCartStore();

  
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg relative">
      <div
        className="absolute top-3 right-3 cursor-pointer"
        onClick={() => addWishlist(product)}
      >
        {isInWishlist ? (
          <IoHeartDislikeCircle className='text-xl text-gray-500' /> 
        ) : <FaHeart className='text-xl text-red-500' />
        }


      </div>
      <div className="flex flex-col justify-between h-120">
        <img src={product.thumbnail} alt={product.title} className="w-full  object-contain mx-auto mb-4" />
        <div>
          <h3 className="text-xl font-medium text-center">{product.title}</h3>
          <p className="text-center text-lg font-semibold my-2">${product.price}</p>
          <Link to={`/detail/${product.id}`} className="text-center text-blue-500 hover:underline">
          <Button color="default" variant="solid" className='w-full'>
            Read More
          </Button>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;
