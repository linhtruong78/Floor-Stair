import React from 'react'
import pic from '../assets/house.jpg'
const Banner = ({ title }) => {
  return (
    <div className="relative w-full h-60 mt-20">
            <img
                src={pic}
                alt={title}
                className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-left bg-black bg-opacity-70 pl-[15%] uppercase">
                <h1 className="text-white text-4xl font-bold text-left">{title}</h1>
            </div>
        </div>
  )
}

export default Banner