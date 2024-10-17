import React from 'react'
import img from '../assets/img_fs/pic1.jpg'

const AboutUs = () => {
  return (
        <div id="body" className='w-screen min-h-screen'>
            {/*Section 1*/}
            <div id="section" className='w-[screen] min-h-screen  flex items-start justify-center'>
                {/*Container*/}
                <div id="container" className=' w-[90%]  flex justify-center'>
                    {/*Left*/}
                    <div id="left" className='w-[50%] p-20 flex-1 justify-center min-h-[80vh] overflow-y ml-10'>
                        <div id= "heading" className="font-bold  text-6xl text-left mb-4">
                            Flooring and Stairs Contractor for Toronto, ON
                        </div>
                        <div id="text" className="text-2xl text-left p-3">
                            We specialize in transforming homes with professional flooring, stairs, and tile renovation services. Proudly serving the Greater Toronto Area with quality craftsmanship and care.
                        </div>
                        <button id="button" className='font-bold text-white bg-gray-900 p-2 mt-5 flex justify-center '>BOOK YOUR FREE QUOTE</button>
                    </div>
                      
                </div>
                {/*Right*/}
                <div id= "right" className= 'w-[60%] h-screen flex-grow left-[200%] transform translate-x-[50%] bg-gray-900 '></div>
                {/*Image*/}
                <div id= "image" className='w-[50%] flex justify-center relative '> 
                    <img 
                        src={img}
                        alt="Flooring and Stairs"
                        className="w-[100%] min-h-[35px] flex justify-center absolute top-4 right-[125%] transform translate-x-[50%] overflow-y"
                        />
                    </div> 
            </div>
        </div>
  )
}

export default AboutUs
