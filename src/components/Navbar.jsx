// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Badge, Input, Drawer, Button } from 'antd';
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { FaWindowClose } from 'react-icons/fa';

const Navbar = () => {
  const { wishlist, cart } = useCartStore();
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div id="navbar" className="fixed w-full h-[63px] bg-white top-0 z-10 shadow-md">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-black hover:text-gray-700 transition-colors">
            cyber
          </Link>

          {/* Search Input (hidden on small screens) */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <Input placeholder="Search" className="rounded-md" />
          </div>

          {/* Desktop nav */}
          <ul className="hidden md:flex gap-6 items-center text-gray-500 font-medium">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-black' : '')}>
              <li className="hover:text-black cursor-pointer">Home</li>
            </NavLink>
            <NavLink to="/categories/smartphones" className={({ isActive }) => (isActive ? 'text-black' : '')}>
              <li className="hover:text-black cursor-pointer">Categories</li>
            </NavLink>
            <li className="hover:text-black cursor-pointer">Blog</li>

            <Badge count={wishlist.length}>
              <NavLink to="/wishlist" className={({ isActive }) => (isActive ? 'text-black' : '')}>
                <HeartOutlined className="text-xl hover:text-black" />
              </NavLink>
            </Badge>

            <Badge count={cart.length}>
              <NavLink to="/cart" className={({ isActive }) => (isActive ? 'text-black' : '')}>
                <ShoppingCartOutlined className="text-2xl hover:text-black" />
              </NavLink>
            </Badge>

            <UserOutlined className="text-xl hover:text-black cursor-pointer" />
          </ul>

          {/* Hamburger icon for mobile */}
          <Button className="flex md:hidden! border-none" icon={<MenuOutlined />} onClick={showDrawer} />
        </div>
      </div>

      {/* Drawer for mobile menu */}
      <div className="flex md:hidden! ">
        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          open={open}
          closeIcon={<FaWindowClose size={28} />}
        >
          <div className="mb-4">
            <Input placeholder="Search..." />
          </div>

          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <NavLink to="/" onClick={onClose} className={({ isActive }) => (isActive ? 'text-black!' : 'text-gray-500!')}>
              <p className="">Home</p>
            </NavLink>
            <NavLink to="/categories/smartphones" onClick={onClose} className={({ isActive }) => (isActive ? 'text-black' : 'text-gray-500!')}>
              <li className="">Categories</li>
            </NavLink>
            <li className=" cursor-pointer text-gray-500">Blog</li>

            <NavLink to="/wishlist" onClick={onClose} >
              <Badge count={wishlist.length}>
                <div className="flex items-center gap-2">
                  <HeartOutlined />
                  <span>Wishlist</span>
                </div>
              </Badge>
            </NavLink>

            <NavLink to="/cart" onClick={onClose}>
              <Badge count={cart.length}>
                <div className="flex items-center gap-2">
                  <ShoppingCartOutlined />
                  <span>Cart</span>
                </div>
              </Badge>
            </NavLink>

            <div className="flex items-center gap-2 cursor-pointer">
              <UserOutlined />
              <span>Account</span>
            </div>
          </ul>
        </Drawer>

      </div>
    </div>
  );
};

export default Navbar;
