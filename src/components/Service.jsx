import React from 'react'
import pic1 from 'C:/Users/death/Floor-Stair/src/assets/pic1.jpg'
import pic2 from 'C:/Users/death/Floor-Stair/src/assets/pic2.jpg'
import pic3 from 'C:/Users/death/Floor-Stair/src/assets/pic3.jpg'

const Service = () => {
  return (
<<<<<<< HEAD
    <div className='flex flex-col justify-center items-center h-screen mt-40'>
      <h2 className='flex font-bold uppercase text-2xl'>
        Our Services
      </h2>

      <div className='flex justify-center items-center h-screen '> 
      {/* container */}
        <div className='relative mt-4 w-1/3 h-1/2 '>
            <img
            src={pic1} 
            alt="Service" 
            className=' w-full h-full object-cover p-2 '/>
           
        <div className="absolute inset-0 flex items-center justify-center ">
          <span className="text-5xl font-bold text-black bg-white bg-opacity-50 p-2">
            Floors
          </span>
        </div>

          <button id="button" 
          className='absolute text-2xl left-1/2 transform -translate-x-1/2 font-bold text-white bg-gray-900 p-2'>
            Learn about
          </button>

        </div>
        
        
        <div className='relative mt-4 w-1/3 h-1/2'>
          <img
          src={pic2} 
          alt="Service" 
          className='w-full h-full object-cover p-2'/>

          <div className="absolute inset-1 flex items-center justify-center ">
            <span className="text-5xl font-bold text-black bg-white text-center bg-opacity-50 p-2">
              Stairs and railings
            </span>
          </div>

          <button id="button" 
          className='absolute text-2xl left-1/2 transform -translate-x-1/2 font-bold text-white bg-gray-900 p-2'>
            Learn about
          </button>
        </div>

        <div className='relative mt-4 w-1/3 h-1/2'>
          <img
          src={pic3} 
          alt="Service" 
          className='w-full h-full object-cover p-2'/>

          <div className="absolute inset-1 flex items-center justify-center ">
            <span className="text-5xl font-bold text-black bg-white bg-opacity-50 p-2">
              Tiles
            </span>
          </div>

          <button id="button" 
          className='absolute text-2xl left-1/2 transform -translate-x-1/2 font-bold text-white bg-gray-900 p-2'>
            Learn about
          </button>
        </div>
      </div>


    </div>
  );
};
=======
    <div>service</div>
  )
}
>>>>>>> main

export default Service
