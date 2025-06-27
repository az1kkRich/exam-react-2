import React from 'react';
import { Button, Radio, Spin } from 'antd';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  FaCamera,
  FaMicrochip,
  FaMemory,
  FaBatteryThreeQuarters,
  FaMobileAlt,
  FaMicrophone
} from 'react-icons/fa';
import SwiperDetail from '../components/detail/SwiperDetail';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/api';
import { useCartStore } from '../store/useCartStore';

const colors = ['#000', '#6e3fc3', '#ff0000', '#ffd700', '#d3d3d3'];
const storages = ['128GB', '256GB', '512GB', '1TB'];

const Detail = () => {
  const { wishlist, addWishlist, cart, addToCart } = useCartStore();


  const { id } = useParams()

  const { data, error, isLoading } = useQuery({
    queryKey: ['productDetail', id], // Assuming 123 is the product ID
    queryFn: () => fetchProductById(id),
  });



  // Check if the product is in the wishlist or cart  
  const isInWishlist = data
    ? wishlist.some((item) => item.id === data.id)
    : false;

  const isInCart = data
    ? cart.some((item) => item.id === data.id)
    : false;





  if (isLoading) return <div className='w-full flex justify-center mt-[96px]'><Spin size='large' className='flex justify-center items-center h-screen' /></div>;
  if (error) return <div className='text-red-500 mt-[66px]'>Error loading product details</div>;
  if (!data) return <div className='text-gray-500 mt-[66px]'>No product found</div>;
  return (
    <div className="flex flex-col md:flex-row gap-6 container mx-auto px-5 py-10 mt-[63px] ">
      {/* Left - Image Slider */}
      <div className="w-full md:w-1/2">
        <SwiperDetail images={data.images} />
      </div>

      {/* Right - Product Details */}
      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-3xl font-semibold">{data.title}</h1>
        <p className="text-gray-600 mb-0">{data.brand} - {data.category} - {data.availabilityStatus}</p>
        <div className="text-2xl font-bold text-black">${data.price}</div>

        <div>
          <p className="font-medium mb-2">Select color:</p>
          <div className="flex gap-2">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full border-2 border-gray-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="font-medium mb-2">Storage:</p>
          <Radio.Group defaultValue="1TB">
            {storages.map((s, i) => (
              <Radio.Button value={s} key={i}>{s}</Radio.Button>
            ))}
          </Radio.Group>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex items-center gap-2 text-gray-700"><FaMobileAlt /> Screen size {data.dimensions.height}"</div>
          <div className="flex items-center gap-2 text-gray-700"><FaMicrochip /> Apple A16 Bionic</div>
          <div className="flex items-center gap-2 text-gray-700"><FaMemory /> 6 Cores</div>
          <div className="flex items-center gap-2 text-gray-700"><FaCamera /> Main Camera 48-12-12 MP</div>
          <div className="flex items-center gap-2 text-gray-700"><FaMicrophone /> Front Camera 12 MP</div>
          <div className="flex items-center gap-2 text-gray-700"><FaBatteryThreeQuarters /> Battery 4323 mAh</div>
        </div>

        <p className="text-gray-600">
          {data.description}
        </p>

        <div className="flex gap-4 mt-6">
          {data && (
            <>
              <Button className="border-black w-1/2 hover:!text-white hover:!bg-black"
                onClick={() => addWishlist(data)}>
                {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </Button>
              <Button type="primary" className="bg-black! w-1/2 hover:!bg-gray-800"
                onClick={() => addToCart(data)}>
                {isInCart ? 'Already in Cart' : 'Add to Cart'}
              </Button>

            </>

          )}
        </div>

        <div className="flex gap-6 mt-6 text-gray-700">
          <div><strong>Free Delivery:</strong> 1-2 days</div>
          <div><strong>In Stock:</strong> Today</div>
          <div><strong>Guaranteed:</strong> 1 year</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
