import React from 'react'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import Banner from './Banner'
import {Link} from 'react-router-dom';

const Service = ({ showBanner }) => {
  const list = [
    {img:pic1,title:"Floors", link:"floors"},
    {img:pic2,title:"Stairs and Railings", link:"stairs"},
    {img:pic3,title:"Tiles", link:"tiles"}
  ];
  return (
    <>
    <div>
      {showBanner && <Banner title="Our Services" />}
    </div>
    <div className=' bg-n-2/5'>
      <div className='w-full mx-auto text-center pt-8 px-[25%]'>
        <h2 className="text-5xl font-bold mb-4">
          Services
        </h2>
        <p className="text-n-2/70 mb-6 text-xl">
          At 4H Flooring & Stairs, we focus on making your home look great. We offer a wide range of flooring options
          like LVP, laminate, and hardwood, as well as expert stair installations that elevate your space. We also
          provide bathroom tiling and backsplashes services.
        </p>          
      </div>
      

      <div className='flex flex-col justify-center items-center lg:flex-row px-[15%] pb-20'>
        {list.map((pic, index) => (
          <div key={index} className='relative w-full bg-n-6 m-2 overflow-hidden group text-center'>
            <div className='relative h-[400px] overflow-hidden'>
              <img
                src={pic.img}
                alt={`${pic.title}`}
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            <div className='bg-n-6 p-4 shadow-md'>
              <h3 className='font-bold text-2xl pb-4 uppercase'>{pic.title}</h3>
              <Link to="/floors">
              <button className='bg-gradient-to-r from-n-2/50 to-n-2/80 text-white px-4 py-2 rounded 
              transition-all duration-500 hover:bg-gradient-to-l hover:from-n-2/50 hover:to-n-2/80 shadow-lg'>
                Learn More
              </button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Service
