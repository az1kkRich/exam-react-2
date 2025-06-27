
import React from 'react';
import { Button } from 'antd';
import ps5Img from '../../assets/PlayStation.png';
import macbookImg from '../../assets/macbook.png';
import airpodsImg from '../../assets/airpods.png';
import visionProImg from '../../assets/visionpro.png';
import laptopBody from '../../assets/laptop-body.png'
import { Link } from 'react-router-dom';
import MotionBox from '../../effects/MotionBox';

const ProductGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch pb-12 max-w-[1700px] mx-auto bg-gray-50">
            {/* items-stretch - bu hieght larni birxil qiladi */}
            <div>
                {/* PlayStation */}
                <MotionBox delay={0.1} direction='up'>
                    <div className="bg-white py-6 flex flex-col md:flex-row justify-center ">
                        <img src={ps5Img} alt="Playstation 5" className=" self-start" />
                        <div>
                            <h2 className="text-3xl font-semibold mb-2">Playstation 5</h2>
                            <p className="text-gray-500 mb-4">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O...</p>
                            <Link to={'/detail/78'}>
                                <Button type="default" className="border-black">Shop Now</Button>
                            </Link>

                        </div>
                    </div>
                </MotionBox>
                <MotionBox delay={0.2} direction='up' >
                    <div className="flex flex-col md:flex-row">
                        {/* AirPods */}
                        <div className="md:bg-white bg-gray-100 p-6 flex  items-center justify-between">
                            <div>
                                <h2 className="text-2xl">Apple <br /><span className="font-bold">AirPods Max</span></h2>
                                <p className="text-gray-500 mt-1">Computational audio. Listen, it’s powerful</p>
                                <Link to={'/detail/100'}>
                                    <Button type="default" className="border-black">Shop Now</Button>
                                </Link>
                            </div>
                            <img src={airpodsImg} alt="AirPods Max" className="w-28" />
                        </div>

                        {/* Vision Pro */}
                        <div className="bg-black text-white p-6 flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl">Apple <br /><span className="font-bold">Vision Pro</span></h2>
                                <p className="text-gray-400 mt-1">An immersive way to experience entertainment</p>
                                <Link to={'/detail/112'}>
                                    <Button type="default" className="border-black">Shop Now</Button>
                                </Link>
                            </div>
                            <img src={visionProImg} alt="Vision Pro" className="w-28" />
                        </div>

                    </div>
                </MotionBox>

            </div>

            <div>
                {/* Macbook */}
                <div className="bg-gray-100 py-1 pl-5 flex flex-row justify-between  items-center h-full">
                    <MotionBox delay={0.2} direction='up' >
                        <div>
                            <h2 className="text-3xl font-light">Macbook <span className="font-bold">Air</span></h2>
                            <p className="text-gray-500 mt-2 mb-4 max-w-sm">
                                The new 15-inch MacBook Air makes room for more of what you love...
                            </p>
                            <Link to={'/detail/78'}>
                                <Button type="default" className="border-black">Shop Now</Button>
                            </Link>
                        </div>
                    </MotionBox>
                    <div className='flex flex-col'>
                        <img src={macbookImg} alt="Macbook" className='h-[70%]' />
                        <img src={laptopBody} alt="Macbook" className='h-[20%]' />

                    </div>
                </div>
            </div>



        </div>
    );
};

export default ProductGrid;
