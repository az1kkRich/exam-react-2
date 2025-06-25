// src/components/Navbar.jsx
import React from 'react';
import { Input } from 'antd';
import { HeartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <div id='navbar' className='fixed w-[100vw] h-[63px] bg-white top-0 z-10 shadow-md'>

      <div className="container mx-auto px-5 h-[63px] bg-white">
        <div className="flex justify-between items-center py-4  ">
          <div className="text-2xl font-bold">cyber</div>

          <div className="flex-1 max-w-md mx-6">
            <Input placeholder="Search" className="rounded-md" />
          </div>

          <ul className="flex gap-8 items-center text-gray-600 font-medium">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Contact Us</li>
            <li className="hover:text-black cursor-pointer">Blog</li>
            <HeartOutlined className="text-xl hover:text-black" />
            <ShoppingCartOutlined className="text-xl hover:text-black" />
            <UserOutlined className="text-xl hover:text-black" />
          </ul>
        </div>

      </div>
    </div>

  );
};

export default Navbar;
