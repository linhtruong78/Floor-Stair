import React from 'react';
import img from '../../assets/pic2.jpg';
import Banner from '../Banner.JSX';
import Button from '../utilities/Button';
const Stairs = ({showBanner}) => {
  return (
    <>
    <div>
      {showBanner && <Banner title="Stairs" />}
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
            height: '30%',
            objectFit: 'cover', 
          }}
      />

      {/* Section 1 - Title and Introduction */}
      <div id="section" className="flex items-start lg:h-screen">
        <div id="container" className="lg:w-[50%] flex px-[7%]">
          <div id="left" className="w-full flex-1  py-10 justify-start overflow-y">
            <div id="heading" className="font-bold text-5xl text-left mb-10 text-n-2">
              <strong>Premium Stairs and Railings Renovation for Homeowners in Toronto</strong>
            </div>
            <div id="text" className="text-2xl text-left mb-10 text-n-2/80">
              <strong>4H Flooring and Stairs</strong> provides exceptional solutions for stairs and railings in Toronto, specializing in both 
              renovations and new installations. Our skilled contractors are dedicated to ensuring that every project is completed to the highest 
              standards of quality and design.
            </div>

            <Button/>
          </div>
        </div>
      </div>

      {/* Section 2 - When to Consider Renovation */}
      <div id="section2" className="flex flex-col items-start bg-gray-100 py-20 px-[7%]">
        <h3 className="font-bold text-4xl mb-8"><strong>When to Consider Renovating Your Stairs and Railings</strong></h3>
        <ul className="list-disc list-inside text-n-2/80 pl-5">
          <li className="mb-3"><strong>Safety Issues:</strong> If you have loose or shaky railings, creaky steps, or uneven stair treads, it’s crucial to address these safety hazards immediately.</li>
          <li className="mb-3"><strong>Aesthetic Improvements:</strong> Old or damaged stairs can diminish the overall look and feel of your home.</li>
          <li className="mb-3"><strong>Enhanced Usability:</strong> Updating your staircase can improve usability, like incorporating storage beneath the stairs or widening steps for easier access.</li>
          <li className="mb-3"><strong>Increased Property Value:</strong> Modernized and well-maintained stairs can greatly enhance your property's market value.</li>
        </ul>
        <p className="mt-3">At <b>4H Flooring and Stairs</b> in Toronto, we offer tailored solutions that seamlessly blend safety, style, and practicality.</p>
      </div>

      {/* Section 3 - Detailed Services */}
      <div id="section3" className="flex flex-col items-start bg-n-1 py-20 px-[7%]">
        <h3 className="font-bold text-4xl mb-8 text-n-2"><strong>Comprehensive Stairs and Railings Services</strong></h3>
        <ul className="list-disc list-inside text-n-2/80 pl-5">
          <li className="mb-3">
            <strong>Custom Design and Fabrication:</strong> Create your ideal stairs and railings with our bespoke design services, utilizing a range of materials including wood, metal, and glass.
          </li>
          <li className="mb-3">
            <strong>Expert Installation:</strong> Our certified professionals guarantee precise and careful installation of your stairs and railings, adhering to the latest safety regulations.
          </li>
          <li className="mb-3">
            <strong>Maintenance and Repair:</strong> We also provide ongoing maintenance and repair services to keep your stairs and railings in top condition, ensuring their longevity and safety.
          </li>
        </ul>
      </div>

      {/* Section 4 - Why Choose Us */}
      <div id="section4" className="flex flex-col items-start py-20 px-[7%] bg-gray-100">
        <h3 className="font-bold text-4xl mb-8"><strong>Why Select 4H Flooring and Stairs?</strong></h3>
        <p className="text-left text-2xl mb-10 text-n-2/80">
          With our expertise as stair contractors in Toronto, we guarantee outstanding quality and customer satisfaction. We provide:
        </p>
        <ul className="list-disc list-inside text-n-2/80 pl-5">
          <li className="mb-3"><strong>Tailored design options</strong> that match your personal style and your home’s architecture.</li>
          <li className="mb-3"><strong>Top-quality materials</strong> and workmanship that ensure both durability and visual appeal.</li>
          <li className="mb-3"><strong>Competitive rates</strong> and clear quotes with no hidden costs.</li>
          <li className="mb-3"><strong>Efficient project management</strong> to minimize disruptions to your routine.</li>
        </ul>
        <p className="mt-3 w-[90%]">Whether you're looking to install new stairs or renovate existing ones,<strong> 4H Flooring and Stairs</strong> is your reliable partner in Toronto.</p>
      </div>

      {/* Section 5 - Call to Action */}
      <div id="section3" className="lg:w-[60%] px-[7%] py-20">
        <h3 className="font-bold text-4xl mb-8 text-n-2"><strong>Contact Us</strong></h3>
        <p className="text-left text-2xl mb-10 text-n-2/80">
        <strong>Don’t hesitate to enhance the safety and appearance of your home.</strong> Reach out to us today to discover more about our stairs and railings services and begin your project.
        </p>
        <Button/>
      </div>
    </div></>
  );
};

export default Stairs;
