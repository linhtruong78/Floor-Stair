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
            className=' w-full h-full object-cover p-2'/>

        <div className='absolute inset-0 flex items-center justify-center 
        bg-black bg-opacity-40 text-white p-4 opacity-0 hover:opacity-100 
        transition-opacity duration-300 m-2'>
          <h2 className='text-3xl font-bold'>Floor</h2>
        </div>

          <button id="button" 
          className='absolute hover:text-n-3 hover:scale-105 transition-all duration-300 text-2xl left-1/2 
          transform -translate-x-1/2 font-bold text-white bg-gray-900 p-2 w-40 h-12 '>
            Floor
          </button>

        </div>
        
        
        <div className='relative w-1/3 h-[100%]'>
          <img
          src={pic2} 
          alt="Service" 
          className='w-full h-full object-cover p-2'/>

        <div className='absolute inset-0 flex items-center justify-center 
        bg-black bg-opacity-40 text-white p-4 opacity-0 hover:opacity-100 
        transition-opacity duration-300 m-2'>
          <h2 className='text-3xl font-bold'>Stairs and railings</h2>
        </div>

          <button id="button" 
          className='absolute hover:text-n-3 hover:scale-105 transition-all duration-300 text-2xl left-1/2 
          transform -translate-x-1/2 font-bold text-white bg-gray-900 p-2 w-40 h-12'>
            Stairs
          </button>
        </div>

        <div className='relative w-1/3 h-[100%]'>
          <img
          src={pic3} 
          alt="Service" 
          className='w-full h-full object-cover p-2'/>

        <div className='absolute inset-0 flex items-center justify-center 
        bg-black bg-opacity-40 text-white p-4 opacity-0 hover:opacity-100 
        transition-opacity duration-300 m-2'>
          <h2 className='text-3xl font-bold'>Tiles</h2>
        </div>  


          <button id="button" 
          className='absolute hover:text-n-3 hover:scale-105 transition-all duration-300 text-2xl left-1/2 
          transform -translate-x-1/2 font-bold text-white bg-gray-900 p-2 w-40 h-12'>
            Tiles
          </button>
        </div>
      </div>


    </div>
  );
};

export default Service
