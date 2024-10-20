import React from 'react';
import img from '../../assets/pic3.jpg';
import Banner from '../Banner.JSX';
import Button from '../utilities/Button';
const Tile = ({showBanner}) => {
  return (
    <>
    <div>
      {showBanner && <Banner title="Tiles" />}
    </div>
    <div id="tilebody" className="relative lg:bg-wb-gradient">
    <img
        className='hidden lg:block lg:scale-[100%] border-[10px] border-n-6'
        src={img}
        alt='img'   
        style={{
            position: 'absolute',
            top: '2%',
            right: '10%',
            width: '35%', 
            height: '30%',
            objectFit: 'cover', 
          }}
      />
      {/* Section 1 */}
      <div id="section" className="flex items-start">
        {/* Container */}
        <div id="container" className="lg:w-[50%] flex px-[7%]">
          {/* Left */}
          <div id="left" className="w-full py-10 flex-1 justify-start min-h-[80vh] overflow-y">
            <div id="heading" className="font-bold text-5xl text-left mb-10 text-n-2">
              <strong>Professional Tile Installation Services in Toronto</strong>
            </div>
          <div id="text" className="text-2xl text-left mb-10 text-n-2/80">
              At <strong>4H Flooring and Stairs</strong>, we offer premier tile installation services throughout Toronto, specializing in bathroom and kitchen 
              tiling that enhances any home aesthetic. Rely on our expert tile contractors for the precision and care your project deserves.
            </div>

            <div id="why-update" className="">
              <h3 className="font-bold text-3xl text-n-2">Why Update Your Tile Work?</h3>
              <ul className="list-disc list-inside mt-2 text-n-2/80">
                <li className="mb-2"><strong>Modernize Your Space:</strong> New tiles can significantly enhance the appearance and atmosphere of any room, 
                particularly kitchens and bathrooms.</li>
                <li className="mb-2"><strong>Increase Property Value:</strong> Thoughtfully selected and expertly installed tiles can elevate your home's market value.</li>
                <li className="mb-2"><strong>Enhanced Durability:</strong> Today's tiles are more resilient and simpler to maintain compared to older styles.</li>
                <li className="mb-2"><strong>Eco-friendly Options:</strong> Many modern tiles are crafted from sustainable materials, helping to lessen your 
                home's environmental impact.</li>
              </ul>
              <p className="mt-3">Whether refreshing a bathroom or designing a new kitchen, our tile installation services in Toronto are customized to meet your specific needs.</p>
            </div>
            <Button/>
          </div>
        </div>
      </div>

      {/* Section 2 - Comprehensive Bathroom Tile Installation */}
      <div id="section2" className=" flex flex-col items-start bg-gray-100 py-16 px-[7%]">
        <h3 className="font-bold text-4xl mb-8"><strong>Complete Bathroom Tile Installation in Toronto</strong></h3>
        <div className=" flex flex-col text-n-2/80">
          <p>
            At <strong>4H Flooring and Stairs</strong>, we provide extensive bathroom tile installation services that encompass every 
            aspect of your bathroom. From floor and wall tiles to custom shower tiling, we manage it all, ensuring that every detail aligns perfectly with your vision.
          </p>
          <p className="mt-4">
            Whether you prefer sleek porcelain tiles, elegant natural stone, or something uniquely yours, our team collaborates with you to 
            design the ideal space. We bring your ideas to life, crafting a bathroom that is functional and a true reflection of your personal style.
          </p>
          <p className="mt-4">
            Our experienced installers handle everything, from selecting the right materials to expert installation, so you can enjoy a bathroom 
            that feels entirely yours. With our attention to detail and expertise, we ensure your new bathroom tiles are both stunning and resilient, 
            creating a space you'll cherish for years.
          </p>
        </div>
      </div>

      {/* Section 3 - Our Tile Installation Process */}
      <div id="section3" className="flex flex-col items-start py-16 px-[7%] bg-n-1">
        <h3 className="font-bold text-4xl mb-8"><strong>Our Tile Installation Process</strong></h3>
        <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4">
            <h4 className="font-bold text-2xl mb-4">Consultation and Design</h4>
            <p>
              We begin with an in-depth discussion to grasp your vision and requirements.
            </p>
          </div>
          <div className="p-4">
            <h4 className="font-bold text-2xl mb-4">Material Selection</h4>
            <p>
              Choose from a broad range of tile materials, including ceramic, porcelain, marble, and more.
            </p>
          </div>
          <div className="p-4">
            <h4 className="font-bold text-2xl mb-4">Preparation</h4>
            <p>
              We prepare the installation area, ensuring the surface is clean, level, and ready for tiles.
            </p>
          </div>
          <div className="p-4">
            <h4 className="font-bold text-2xl mb-4">Installation</h4>
            <p>
              Our skilled contractors meticulously install your tiles, ensuring perfect alignment and secure placement.
            </p>
          </div>
          <div className="p-4">
            <h4 className="font-bold text-2xl mb-4">Grouting and Finishing</h4>
            <p>
              Once the tiles are set, we apply grout to complete the appearance and seal your tiles against moisture and dirt.
            </p>
          </div>
          <div className="p-4">
            <h4 className="font-bold text-2xl mb-4">Final Inspection</h4>
            <p>
              We conduct a thorough walkthrough to ensure the installation meets our high standards and your expectations.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 - Choose for Your Tiling Needs */}
      <div id="section4" className="w-screen flex flex-col items-start bg-gray-100 py-16 px-[7%]">
        <h3 className="font-bold text-4xl mb-8"><strong>Choose 4H for All Your Tiling Needs</strong></h3>
        <p className="w-[90%] text-left text-2xl mb-5">
          Why select <strong>4H Flooring and Stairs</strong> for your tile installation in Toronto? We are dedicated to quality, customer satisfaction, and delivering beautiful, lasting results. Our expertise covers various applications, ensuring that whether it’s a small bathroom update or a significant kitchen renovation, we possess the skills and experience to execute it with excellence.
        </p>
        <Button/>
      </div>
    </div></>
  );
};

export default Tile;
