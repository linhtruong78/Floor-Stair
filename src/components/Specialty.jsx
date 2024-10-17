import React from 'react'
import img1 from '../assets/pic1.jpg'
import img2 from '../assets/pic2.jpg'
const Specialty = () => {
  return (
    <div className='flex flex-col lg:flex-row py-20 '>
        <div id='left' className='flex flex-col justify-center px-5 mt-20 w-full lg:w-1/2'> 
            <div className='text-center lg:text-left lg:pl-[20%] lg:ml-[30%]  '>
                <h2 className="text-5xl font-bold mb-4">Our Speciality</h2>
                <p className="text-n-2/70 mb-6">
                    At <b>4H Flooring and Stairs</b>, our expertise lies in renovating and creating custom stairs tailored 
                    to the design and function of each home. We are dedicated to providing high-quality craftsmanship 
                    that exceeds your expectations. We know every home and homeowner is different, which is why we offer customization 
                    options that ensure you get the stairs you want. Each stair and railing renovation is done with your safety and 
                    satisfaction top of mind. While our stairs pair perfectly with our expert flooring services, they can also be integrated 
                    seamlessly with existing flooring, enhancing the design, safety, and value of your home.
                </p>
                <button id="button" className='font-bold text-white bg-gray-900 p-2 my-5 flex justify-center mx-auto lg:mx-0'>
                    BOOK YOUR FREE QUOTE
                </button>
            </div>
        </div>
        <div id='right' className='relative w-full lg:w-1/2 px-10 lg:mr-[15%] mx-5 lg:ml-[10%] h-[600px]'> 
            {/* Top Right Image */}
            <img 
                src={img1} // Replace with your image path
                alt="Top Right"
                className='absolute top-0 right-10 w-2/3 h-3/4 border-n-6 border-8' // Adjust size as needed
            />
            {/* Bottom Left Image */}
            <img 
                src={img2} // Replace with your image path
                alt="Bottom Left"
                className='absolute bottom-0 left-0 w-1/2 h-2/3 border-n-6 border-8' // Adjust size as needed
            />
        </div>
    </div>
   
  )
}

export default Specialty