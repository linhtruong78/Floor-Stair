import React from 'react'
import pic3 from '../assets/pic3.jpg'
import Button from './utilities/Button'

const Quote = () => {
  return (
    <div className=' flex flex-col lg:flex-row justify-center pt-10 mt-20 mb-20 px-[10%]'>
        <div id="container" className='w-full text-center  px-5   py-5 items-center hidden lg:block'>
            <img src={pic3} />
        </div>
        <div id="right" className="relative w-full  overflow-hidden px-10 mx-auto pt-10">
            <h2 className="text-5xl font-bold mb-4">
                Ready To Get Started?
            </h2>
            <p className="text-n-2/70 mb-6 text-xl">
                Get in touch with us today to start your flooring, stairs, or tile renovation project. 
                We’re ready to bring your vision to life with our expert team.
            </p>
            <Button/>
        </div>
  </div>
  )
}

export default Quote
