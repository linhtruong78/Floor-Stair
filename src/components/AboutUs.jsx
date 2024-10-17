/* eslint-disable react/jsx-key */
import React from 'react'
import img1 from '../assets/pic1.jpg'
import img2 from '../assets/pic2.jpg'
import img3 from '../assets/pic3.jpg'
import ImageSlider from "./ImageSlider";

const AboutUs = () => {
  const slides = [img1, img2, img3];
  
  

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
        <button id="button" className='font-bold text-white bg-gray-900 p-2 mt-5 flex justify-center mx-auto lg:mx-0 '>
          BOOK YOUR FREE QUOTE
        </button>
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
