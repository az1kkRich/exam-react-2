// src/components/HeroSection.jsx
import React from 'react';
import { Button } from 'antd';
import iphoneImg from '../../assets/headerMain.png'; // o'zingiz rasmni joylang

const HeroSection = () => {
  return (
    <div className="bg-[#111015] mt-[63px] ">
        <div className="container text-white px-6 mx-auto pt-10 flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-xl">
                <p className="text-xl font-semibold text-gray-400 mb-2">Pro.Beyond.</p>
                <h1 className="text-5xl md:text-6xl font-light mb-4">
                IPhone 14 <span className="font-bold">Pro</span>
                </h1>
                <p className="text-gray-400 mb-8 text-lg">
                Created to change everything for the better. For everyone
                </p>
                <Button type="default" size="large" className="bg-white text-black hover:bg-gray-200">
                Shop Now
                </Button>
            </div>

            <img src={iphoneImg} alt="iPhone 14 Pro" className="w-[300px] md:w-[400px] mt-10 md:mt-0" />

        </div>
    </div>
  );
};

export default HeroSection;
