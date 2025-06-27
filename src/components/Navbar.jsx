// src/components/Navbar.jsx
import React from 'react';
import { Badge, Input } from 'antd';
import { HeartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

const Navbar = () => {
  const {wishlist, cart} = useCartStore()
  return (
    <div id='navbar' className='fixed w-[100%] h-[63px] bg-white top-0 z-10 shadow-md'>

      <div className="container mx-auto px-5 h-[63px] bg-white">
        <div className="flex justify-between items-center py-4  ">
          <Link to="/" className="text-2xl font-bold text-black hover:text-gray-700 transition-colors">
            <div className="text-2xl font-bold">cyber</div>
          </Link>

          <div className="flex-1 max-w-md mx-6">
            <Input placeholder="Search" className="rounded-md" />
          </div>

          <ul className="flex gap-8 items-center text-gray-500 font-medium">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-black' : '')}>
              <li className="hover:text-black cursor-pointer">Home</li>
            </NavLink>
            <NavLink to="/categories/smartphones" className={({ isActive }) => (isActive ? 'text-black' : '')}>
              <li className="hover:text-black cursor-pointer">Categories</li>
            </NavLink>
            <li className="hover:text-black cursor-pointer">Blog</li>
            <Badge count={wishlist.length} className="cursor-pointer">
              <NavLink to="/wishlist" className={({ isActive }) => (isActive ? 'text-black' : '')}>
                <HeartOutlined className="text-xl hover:text-black!" />
              </NavLink>
            </Badge>
            <Badge count={cart.length} className="cursor-pointer">
              <NavLink to="/cart" className={({ isActive }) => (isActive ? 'text-black' : '')}>
                <ShoppingCartOutlined  className=" text-2xl! hover:text-black!" />
              </NavLink>
            </Badge>
            
            <UserOutlined className="text-xl hover:text-black!" />
          </ul>
        </div>

      </div>
    </div>

  );
};

export default Navbar;
