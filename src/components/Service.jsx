import React from 'react'
import pic1 from 'C:/Users/death/Floor-Stair/src/assets/pic1.jpg'
import pic2 from 'C:/Users/death/Floor-Stair/src/assets/pic2.jpg'
import pic3 from 'C:/Users/death/Floor-Stair/src/assets/pic3.jpg'

const Service = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      
      <h2 className='flex font-bold uppercase text-2xl'>
        Our Services
      </h2>

      <div className=' relative flex flex-col justify-center items-center w-screen sm:flex-row'> 
      {/* container */}
        <div className='relative w-1/3 h-[100%]'>
            <img
            src={pic1} 
            alt="Service" 
            className=' w-full h-full object-cover p-2 '/>

          <button id="button" 
          className='absolute hover:text-n-3 text-2xl left-1/2 transform -translate-x-1/2 font-bold text-white bg-gray-900 p-2 w-40 h-12'>
            Floor
          </button>

        </div>
        
        
        <div className='relative w-1/3 h-[100%]'>
          <img
          src={pic2} 
          alt="Service" 
          className='w-full h-full object-cover p-2'/>

          <button id="button" 
          className='absolute hover:text-n-3 text-2xl left-1/2 transform -translate-x-1/2 font-bold text-white bg-gray-900 p-2 w-40 h-12'>
            Stairs
          </button>
        </div>

        <div className='relative w-1/3 h-[100%]'>
          <img
          src={pic3} 
          alt="Service" 
          className='w-full h-full object-cover p-2'/>


          <button id="button" 
          className='absolute hover:text-n-3 text-2xl left-1/2 transform -translate-x-1/2 font-bold text-white bg-gray-900 p-2 w-40 h-12'>
            Tiles
          </button>
        </div>
      </div>


    </div>
  );
};

export default Service
