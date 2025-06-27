import React from 'react';
import { Button } from 'antd';

// iimages
import airpods from '../../assets/airpodShowCase.png'
import ipadpro from '../../assets/ipadPro.png'
import s21 from '../../assets/s21.png'
import macbook from '../../assets/Macbook_1.png';
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'Popular Products',
    description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
    image: airpods, // o'zingizdagi rasm manzili
    bg: 'bg-white',
    link: 100,
  },
  {
    title: 'Ipad Pro',
    description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
    image: ipadpro,
    bg: 'bg-gray-100',
    link: 159,
  },
  {
    title: 'Samsung Galaxy',
    description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
    image: s21,
    bg: 'bg-gray-200',
    link: 132,
  },
  {
    title: 'Macbook Pro',
    description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
    image: macbook,
    bg: 'bg-neutral-700 text-white',
    link: 78,
  },
];

const ProductShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1700px] mx-auto mt-5">
      {products.map((item, index) => (
        <div key={index} className={`p-6 ${item.bg} flex flex-col items-center text-center`}>
          <img src={item.image} alt={item.title} className="mb-4 w-full  object-contain" />
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-sm mb-4 max-w-xs">{item.description}</p>
          <Link to={`/detail/${item.link}`}>
            <Button type="default" size="middle">
              Shop Now
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductShowcase;
