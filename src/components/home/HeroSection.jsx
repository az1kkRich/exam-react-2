
import React from 'react';
import { Button } from 'antd';
import iphoneImg from '../../assets/headerMain.png'; // o'zingiz rasmni joylang
import { Link } from 'react-router-dom';
import MotionBox from '../../effects/MotionBox';

const HeroSection = () => {
  return (
    <div className="bg-[#111015] mt-[63px] overflow-hidden">
      <div className="container text-white px-6 mx-auto pt-10 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <MotionBox delay={0.1} direction='up'>
            <p className="text-xl font-semibold text-gray-400 mb-2">Pro.Beyond.</p>
          </MotionBox>
          <MotionBox delay={0.2} direction='up'>
            <h1 className="text-5xl md:text-6xl font-light mb-4">
              IPhone 13 <span className="font-bold">Pro</span>
            </h1>
          </MotionBox>
          <MotionBox delay={0.3} direction='up'>
            <p className="text-gray-400 mb-8 text-lg">
              Created to change everything for the better. For everyone
            </p>
          </MotionBox>

          <MotionBox delay={0.4} direction='up'>
            <Link to="/detail/123" className="inline-block mb-4">
              <Button type="default" size="large" className="bg-white text-black hover:bg-gray-200">
                Shop Now
              </Button>
            </Link>
          </MotionBox>
        </div>
        <MotionBox delay={0.5} direction='up' size={200}>
          <img src={iphoneImg} alt="iPhone 14 Pro" className="w-[300px] md:w-[400px] mt-10 md:mt-0" />
        </MotionBox>
      </div>
    </div>
  );
};

export default HeroSection;
