/* eslint-disable react/jsx-key */
import React from 'react'
import home1 from '../assets/home1.jpg'
import home2 from '../assets/home2.jpg'
import home3 from '../assets/home3.jpg'
import home4 from '../assets/home4.jpg'
import home5 from '../assets/home5.jpg'
import ImageSlider from "./ImageSlider";
import Button from './utilities/Button';

const AboutUs = () => {
  const slides = [home1, home2, home4, home5, home3];
  
  

  return (
  <div className='relative flex flex-col lg:flex-row'>
    <div className='absolute top-0 left-0 right-0 z-10 flex flex-col lg:flex-row justify-center pt-10 mt-20'>
      <div id="container" className='w-full text-center lg:text-left px-5 lg:pl-[15%] lg:mr-[5%] py-5 items-center'>
        <h2 className="text-5xl font-bold mb-4">
          Flooring and Stairs Contractor for Toronto, ON
        </h2>
        <p className="text-n-2/70 mb-6 text-xl">
          We specialize in transforming homes with professional flooring, stairs, and tile renovation services.
          Proudly serving the Greater Toronto Area with quality craftsmanship and care.
        </p>
        <Button/>
      </div>
      <div id="right" className="relative w-full h-screen overflow-hidden px-5 md:pr-[10%] ">
        <ImageSlider autoSlide={true} autoSlideInterval={5000}>
          {slides.map((s, index) => (
            <img 
              key={index} 
              src={s}
              className="w-full h-[500px] lg:h-[700px] object-cover" 
              alt={`Slide ${index}`} 
            />
          ))}
        </ImageSlider>
      </div>
    </div>
    <div className='w-full pl-[40%]'></div>
    <div className='w-full h-screen bg-n-6 lg:mr-[5%] mb-10'></div>
  </div>
  )
}

export default AboutUs
