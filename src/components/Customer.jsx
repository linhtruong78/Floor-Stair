import React from 'react'
import { GiStarsStack } from "react-icons/gi";
import { BiSolidContact } from "react-icons/bi";
import { IoStorefrontSharp } from "react-icons/io5";
import pic from "../assets/house.jpg"
const Customer = () => {
  return (
    <div className='min-h-[1200px] sm:min-h-[1100px] lg:min-h-screen w-full flex items-center justify-center relative  '
        style={{
        backgroundImage: `url(${pic})`, // Use the imported image here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}>
        <div className="absolute inset-0 bg-n-2 opacity-80 mx-auto p-4 ">
            <div className='flex flex-col justify-center pt-[5%] mt-5 relative z-10 text-n-1'>
                <div id="left" className='w-full text-center px-5  pb-10 items-center'>
                    <h2 className="text-5xl font-bold mb-4 pb-5">
                        Customer Satisfaction 
                    </h2>
                    <p className=" text-xl lg:px-[15%]">
                    Choose <b>4H Flooring & Stairs</b> for your project and experience the advantages of partnering with a dedicated, 
                    locally owned business that places your satisfaction as its top priority. Our commitment to exceptional customer service 
                    ensures you receive expert support throughout the entire process, from the initial consultation to the final unveiling of 
                    your beautifully transformed space.
                    </p>          
                </div>
                <div className='flex flex-col lg:flex-row justify-center space-x-4 lg:mx-[20%]  text-center'>
                    <div className='relative justify-center'>
                        <div className='w-[100px] h-[100px] bg-n-1 mx-auto flex items-center justify-center my-5'>
                            <GiStarsStack size={40} color='black' />
                        </div>
                        <h2 className='text-2xl font-bold mb-4'>Customer Experience</h2>
                        <p >Exceptional customer service is our priority, ensuring your project is seamless and exceeds expectations.</p>
                    </div>
                    <div className='relative justify-center'>
                        <div className='w-[100px] h-[100px] bg-n-1 mx-auto flex items-center justify-center my-5'>
                            <BiSolidContact size={40} color='black' />
                        </div>
                        <h2 className='text-2xl font-bold mb-4'>Directly Contact</h2>
                        <p >Connect with our team directly for personalized attention and expert guidance throughout your tiling journey.</p>
                    </div>
                    <div className='relative justify-center'>
                        <div className='w-[100px] h-[100px] bg-n-1 mx-auto flex items-center justify-center my-5'>
                            <IoStorefrontSharp size={40} color='black' />
                        </div>
                        <h2 className='text-2xl font-bold mb-4'>Locally Owned</h2>
                        <p >As a locally owned business, we deeply understand and cater to the unique needs of our community.</p>
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Customer