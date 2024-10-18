import React from 'react';
import img from '/src/assets/pic1.jpg';

const Floor = () => {
  return (
    <div id="floorbody" className="relative w-screen min-h-screen "
    style={{ 
        background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 70%, black 30%)' 
      }}>
        <img
        className='hidden lg:block lg:scale-[100%] border-[10px] border-n-6'
        src={img}
        alt='img'   
        style={{
            position: 'absolute',
            top: '2%',
            right: '10%',
            width: '39%', // Adjust based on how you want it to fit
            height: '39%',
            objectFit: 'cover', // Adjust to fill the area without distortion
          }}
        />
      {/* Section 1 */}
      <div id="section" className="flex items-start">
        {/* Container */}
        <div id="container" className="w-[50%] flex">
          {/* Left */}
          <div id="left" className="w-full p-10 flex-1 justify-start min-h-[80vh] overflow-y">
            <div id="heading" className="font-bold text-6xl text-left mb-10 text-gray-500">
              <strong>Professional Flooring Installation Services in Toronto</strong>
            </div>
            <div id="text" className="text-2xl text-left mb-10">
              At <strong>4H Flooring and Stairs</strong>, we specialize in premium flooring solutions. We provide Luxury Vinyl Plank (LVP), solid hardwood, and laminate options for homeowners across Toronto and the GTA. Our experienced installation team ensures that your new flooring exceeds your expectations while maintaining high standards of quality.
            </div>

            <div id="why-change" className="">
              <h3 className="font-bold text-3xl text-gray-500">Reasons to Consider Upgrading Your Floors</h3>
              <ul className="list-disc list-inside mt-2">
                <li className="mb-2"><strong>Wear and Tear:</strong> Over time, floors can become worn, scratched, or damaged.</li>
                <li className="mb-2"><strong>Boosting Home Value:</strong> Quality flooring can enhance the market value of your home.</li>
                <li className="mb-2"><strong>Energy Efficiency:</strong> Properly installed hardwood can improve insulation and lower energy costs.</li>
              </ul>
              <p className="mt-3">Our team at <strong>4H Flooring and Stairs</strong> in Toronto is dedicated to helping you choose the right flooring solution that balances functionality and style, tailored to your lifestyle and budget.</p>
            </div>

            <button id="button" className="font-bold text-white bg-gray-900 p-3 mt-8 hover:text-n-3">
              <strong>SCHEDULE YOUR FREE QUOTE</strong>
            </button>
          </div>
        </div>
      </div>

      {/* Section 2 - Various Flooring Options */}
      <div id="section2" className="w-screen flex flex-col items-start bg-gray-100 py-16 pl-10">
        <h3 className="font-bold text-4xl mb-8"><strong>Types of Flooring Available</strong></h3>
        <div className="w-[90%] flex justify-between">
          <div className="w-[30%] p-4">
            <h4 className="font-bold text-2xl mb-4">Luxury Vinyl Plank (LVP)</h4>
            <p>
              Luxury Vinyl Plank (LVP) is known for its resilience and ability to mimic the look of natural wood or stone, making it an ideal option for high-traffic and moisture-prone areas.
            </p>
          </div>
          <div className="w-[30%] p-4">
            <h4 className="font-bold text-2xl mb-4">Hardwood Flooring</h4>
            <p>
              Solid hardwood flooring brings timeless elegance and warmth to your home. Its durability and value-adding characteristics make it a smart investment.
            </p>
          </div>
          <div className="w-[30%] p-4">
            <h4 className="font-bold text-2xl mb-4">Laminate Flooring</h4>
            <p>
              For homeowners on a budget, laminate flooring provides a chic and durable alternative that replicates the appearance of genuine wood or stone at a more affordable price.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 - Why Opt for 4H Flooring and Stairs */}
      <div id="section3" className="w-screen flex flex-col items-start py-16 pl-10 w-[70%]">
        <h3 className="font-bold text-4xl mb-8 text-gray-500"><strong>Why Choose 4H Flooring and Stairs?</strong></h3>
        <p className="w-[90%] text-left text-2xl mb-10">
          At <strong>4H Flooring and Stairs</strong>, we are dedicated to delivering superior installation services coupled with outstanding customer support. From the initial consultation to the final installation, we ensure that each project adheres to the highest standards of excellence.
        </p>
        <button id="button" className="font-bold text-white bg-gray-900 p-3 mt-5 hover:text-n-3">
          <strong>GET IN TOUCH WITH US TODAY</strong>
        </button>
      </div>

      {/* Section 4 - The Flooring Installation Journey */}
      <div id="section4" className="w-screen flex flex-col items-start bg-gray-100 py-16 pl-10">
        <h3 className="font-bold text-4xl mb-8"><strong>Flooring Installation Journey</strong></h3>
        <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 gap-8">
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
    </div>
  );
};

export default Floor;
