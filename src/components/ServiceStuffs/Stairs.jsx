import React from 'react';
import img from '../../assets/pic1.jpg';

const Stairs = ({showBanner}) => {
  return (
    <>
    <div>
      {showBanner && <Banner title="Frequent Asked Questions" />}
    </div>
    <div id="floorbody" className="relative w-screen min-h-screen lg:-mx-[200px]"
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
          width: '40%', // Adjust based on how you want it to fit
          height: '28%',
          objectFit: 'cover', // Adjust to fill the area without distortion
        }}
      />

      {/* Section 1 - Title and Introduction */}
      <div id="section" className="flex items-start">
        <div id="container" className="w-[50%] flex">
          <div id="left" className="w-full p-10 flex-1 justify-start min-h-[80vh] overflow-y">
            <div id="heading" className="font-bold text-6xl text-left mb-10 text-gray-500">
              <strong>Premium Stairs and Railings Renovation for Homeowners in Toronto</strong>
            </div>
            <div id="text" className="text-2xl text-left mb-10">
              <strong>4H Flooring and Stairs</strong> provides exceptional solutions for stairs and railings in Toronto, specializing in both renovations and new installations. Our skilled contractors are dedicated to ensuring that every project is completed to the highest standards of quality and design.
            </div>

            <button id="button" className="font-bold text-white bg-gray-900 p-3 mt-8 hover:text-yellow-300">
              <strong>BOOK A CONSULTATION</strong>
            </button>
          </div>
        </div>
      </div>

      {/* Section 2 - When to Consider Renovation */}
      <div id="section2" className="w-screen flex flex-col items-start bg-gray-100 py-16 pl-10">
        <h3 className="font-bold text-4xl mb-8"><strong>When to Consider Renovating Your Stairs and Railings</strong></h3>
        <ul className="list-disc list-inside w-[90%]">
          <li className="mb-2"><strong>Safety Issues:</strong> If you have loose or shaky railings, creaky steps, or uneven stair treads, it’s crucial to address these safety hazards immediately.</li>
          <li className="mb-2"><strong>Aesthetic Improvements:</strong> Old or damaged stairs can diminish the overall look and feel of your home.</li>
          <li className="mb-2"><strong>Enhanced Usability:</strong> Updating your staircase can improve usability, like incorporating storage beneath the stairs or widening steps for easier access.</li>
          <li className="mb-2"><strong>Increased Property Value:</strong> Modernized and well-maintained stairs can greatly enhance your property's market value.</li>
        </ul>
        <p className="mt-3 w-[90%]">At 4H Flooring and Stairs in Toronto, we offer tailored solutions that seamlessly blend safety, style, and practicality.</p>
      </div>

      {/* Section 3 - Detailed Services */}
      <div id="section3" className="w-screen flex flex-col items-start py-16 pl-10 w-[70%]">
        <h3 className="font-bold text-4xl mb-8 text-gray-500"><strong>Comprehensive Stairs and Railings Services</strong></h3>
        <ul className="list-disc list-inside w-[90%]">
          <li className="mb-2">
            <strong>Custom Design and Fabrication:</strong> Create your ideal stairs and railings with our bespoke design services, utilizing a range of materials including wood, metal, and glass.
          </li>
          <li className="mb-2">
            <strong>Expert Installation:</strong> Our certified professionals guarantee precise and careful installation of your stairs and railings, adhering to the latest safety regulations.
          </li>
          <li className="mb-2">
            <strong>Maintenance and Repair:</strong> We also provide ongoing maintenance and repair services to keep your stairs and railings in top condition, ensuring their longevity and safety.
          </li>
        </ul>
      </div>

      {/* Section 4 - Why Choose Us */}
      <div id="section4" className="w-screen flex flex-col items-start bg-gray-100 py-16 pl-10">
        <h3 className="font-bold text-4xl mb-8"><strong>Why Select 4H Flooring and Stairs?</strong></h3>
        <p className="w-[90%] text-left text-2xl mb-10">
          With our expertise as stair contractors in Toronto, we guarantee outstanding quality and customer satisfaction. We provide:
        </p>
        <ul className="list-disc list-inside w-[90%]">
          <li className="mb-2"><strong>Tailored design options</strong> that match your personal style and your home’s architecture.</li>
          <li className="mb-2"><strong>Top-quality materials</strong> and workmanship that ensure both durability and visual appeal.</li>
          <li className="mb-2"><strong>Competitive rates</strong> and clear quotes with no hidden costs.</li>
          <li className="mb-2"><strong>Efficient project management</strong> to minimize disruptions to your routine.</li>
        </ul>
        <p className="mt-3 w-[90%]"><strong>Whether you're looking to install new stairs or renovate existing ones,</strong> 4H Flooring and Stairs is your reliable partner in Toronto.</p>
      </div>

      {/* Section 5 - Call to Action */}
      <div id="section5" className="w-[70%] flex flex-col items-start py-16 pl-10">
        <h3 className="font-bold text-4xl mb-8"><strong>Contact Us</strong></h3>
        <p className="w-[90%] text-left text-2xl mb-10">
          <strong>Don’t hesitate to enhance the safety and appearance of your home.</strong> Reach out to us today to discover more about our stairs and railings services and begin your project.
        </p>
        <button id="button" className="font-bold text-white bg-gray-900 p-3 mt-5 hover:text-yellow-300">
          <strong>GET IN TOUCH WITH US TODAY</strong>
        </button>
      </div>
    </div></>
  );
};

export default Stairs;
