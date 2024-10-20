import React from 'react';
import img from '../../assets/pic1.jpg';
import Banner from '../Banner.JSX';
import Button from '../utilities/Button';

const Floor = ({showBanner}) => {
  return (
    <>
    <div>
      {showBanner && <Banner title="Floors" />}
    </div>
    <div id="floorbody" className="relative lg:bg-wb-gradient">
        <img
        className='hidden lg:block lg:scale-[100%] border-[10px] border-n-6'
        src={img}
        alt='img'   
        style={{
            position: 'absolute',
            top: '2%',
            right: '10%',
            width: '35%', 
            height: '35%',
            objectFit: 'cover', 
          }}
        />
      {/* Section 1 - floor service info */}
      <div id="section" className=" flex items-start ">
        {/* Container */}
        <div id="container" className="lg:w-[50%] flex px-[7%]">
          {/* Left */}
          <div id="left" className="w-full flex-1  py-10 justify-start overflow-y">
            <div id="heading" className="font-bold text-5xl text-left mb-10 ">
              <strong>Professional Flooring Installation Services in Toronto</strong>
            </div>
            <div id="text" className="text-2xl text-left mb-5 text-n-2/80">
              At <strong>4H Flooring and Stairs</strong>, we specialize in premium flooring solutions. We provide Luxury Vinyl Plank (LVP), 
              solid hardwood, and laminate options for homeowners across Toronto and the GTA. Our experienced installation team ensures that 
              your new flooring exceeds your expectations while maintaining high standards of quality.
            </div>

            <div id="why-change" className="">
              <h3 className="font-bold text-3xl text-n-2">Reasons to Consider Upgrading Your Floors</h3>
              <ul className="list-disc list-inside mt-2 text-n-2/80">
                <li className="mb-2"><strong>Wear and Tear:</strong> Over time, floors can become worn, scratched, or damaged.</li>
                <li className="mb-2"><strong>Boosting Home Value:</strong> Quality flooring can enhance the market value of your home.</li>
                <li className="mb-2"><strong>Energy Efficiency:</strong> Properly installed hardwood can improve insulation and lower energy costs.</li>
              </ul>
              <p className="mt-3 text-n-2/80">Our team at <strong>4H Flooring and Stairs</strong> in Toronto is dedicated to helping you choose the 
              right flooring solution that balances functionality and style, tailored to your lifestyle and budget.</p>
            </div>

            <Button/>
          </div>
        </div>
      </div>

      {/* Section 2 - Various Flooring Options */}
      <div id="section2" className=" flex flex-col items-start bg-gray-100 py-20 px-[7%]">
        <h3 className="font-bold text-4xl mb-8"><strong>Types of Flooring Available</strong></h3>
        <div className=" flex flex-col lg:flex-row justify-between">
          <div className="p-4">
            <h4 className="font-bold text-2xl mb-4">Luxury Vinyl Plank (LVP)</h4>
            <p className='text-n-2/80'>
              Luxury Vinyl Plank (LVP) is known for its resilience and ability to mimic the look of natural wood or stone, making it an 
              ideal option for high-traffic and moisture-prone areas.
            </p>
          </div>
          <div className="p-4">
            <h4 className="font-bold text-2xl mb-4">Hardwood Flooring</h4>
            <p className='text-n-2/80'>
              Solid hardwood flooring brings timeless elegance and warmth to your home. Its durability and value-adding characteristics make it a smart investment.
            </p>
          </div>
          <div className="p-4">
            <h4 className="font-bold text-2xl mb-4">Laminate Flooring</h4>
            <p className='text-n-2/80'>
              For homeowners on a budget, laminate flooring provides a chic and durable alternative that replicates the appearance of genuine wood 
              or stone at a more affordable price.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 - Why Opt for 4H Flooring and Stairs */}
      <div id="section3" className="lg:w-[60%] px-[7%] py-20">
        <h3 className="font-bold text-4xl mb-8 text-n-2"><strong>Why Choose 4H Flooring and Stairs?</strong></h3>
        <p className="text-left text-2xl mb-10 text-n-2/80">
          At <strong>4H Flooring and Stairs</strong>, we are dedicated to delivering superior installation services coupled with outstanding customer 
          support. From the initial consultation to the final installation, we ensure that each project adheres to the highest standards of excellence.
        </p>
        <Button/>
      </div>

      {/* Section 4 - The Flooring Installation Journey */}
      <div id="section4" className="w-screen flex flex-col items-start bg-gray-100 py-16 px-[7%]">
        <h3 className="font-bold text-4xl mb-8"><strong>Flooring Installation Journey</strong></h3>
        <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4">
            <h4 className="font-bold text-2xl mb-4">Initial Consultation & Free Estimate</h4>
            <p>
              We will meet with you to discuss your flooring needs and provide a clear, no-hidden-fees estimate.
            </p>
          </div>
          <div className="p-4">
            <h4 className="font-bold text-2xl mb-4">Flooring Selection & Design</h4>
            <p>
              Choose from our extensive range of flooring options, and we’ll assist you in creating your ideal space.
            </p>
          </div>
          <div className="p-4">
            <h4 className="font-bold text-2xl mb-4">Subfloor Preparation</h4>
            <p>
              Our team will prepare your subfloor to prevent any issues before installing the new flooring.
            </p>
          </div>
          <div className="p-4">
            <h4 className="font-bold text-2xl mb-4">Expert Installation & Finishing Touches</h4>
            <p>
              Our installers employ industry-leading techniques and tools to ensure a flawless finish.
            </p>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default Floor;
