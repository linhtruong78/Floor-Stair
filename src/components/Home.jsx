import React from 'react';
import img from '../assets/img_fs/art.jpg';
import img2 from '../assets/img_fs/art2.jpg';



const Home= () =>{
    return (
        <>

        {/*First*/}
        <div className='w-full h-full flex items-center justify-center  mx-auto border-2 m-50'>
            <div className='flex justify-center  m-50'>
                <div className='flex-1'>
                    <div className="font-bold  text-6xl  text-left">
                        Flooring and Stairs Contractor for Toronto, ON
                    </div>
                    <div className="text-left">
                        We specialize in transforming homes with professional flooring, stairs, and tile renovation services. Proudly serving the Greater Toronto Area with quality craftsmanship and care.
                    </div>
                </div>

                <div className='flex-1 w-6xl m-auto'>
                    <img 
                        src={img}
                        alt="Flooring and Stairs"
                        className="w-75% h-auto mt-4 m-10"
                    />
                </div>
            </div>
        </div>



        {/*Second*/}
        <div className='w-full h-full flex items-center justify-center  mx-auto border-2 m-50'>
            <div className='flex justify-center  m-50'>
                <div className='flex-1'>
                    <div className='font-bold text-blue-800'>
                        Our Services
                    </div>
                    <div className="font-bold  text-6xl  text-center">
                    Home Renovation Experts in Toronto
                    </div>
                    <div className="text-center">
                    At ACN Flooring & Stairs, we focus on making your home look great. We offer a wide range of flooring options like LVP, laminate, and hardwood, as well as expert stair installations that elevate your space. We also provide bathroom tiling and backsplashes services.
                    </div>
            </div>
                <div className='flex-1 w-6xl m-auto'>
                    <img 
                        src={img}
                        alt="Flooring and Stairs"
                        className="w-75% h-auto mt-4 m-10"
                    />
                </div>
            </div>
        </div>


        </>
    );

};


export default Home;