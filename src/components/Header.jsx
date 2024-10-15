import { navigation } from "../constants";
import logo from "C:/Users/death/Floor-Stair/src/assets/4H_transparent-.png";
import React, { useEffect, useState } from 'react';
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full border-b transition-all duration-300 ${isScrolled ? 'bg-primary h-24' : 'bg-primary h-40'}`}
      style={{ backgroundColor: 'var(--primary)' }} 
    >
      <div className="flex items-center justify-between px-0 lg:px-7.5 h-full">
        <a className="block w-[16rem] xl:mr-8">
          <img
            src={logo}
            alt="Logo"
            className={`object-contain transition-all duration-300 ${isScrolled ? 'h-40' : 'h-52'}`} // Adjust height based on scroll
            style={{ color: 'var(--primary)' }}
          />
        </a>

        <div
          className={`flex flex-col items-start transition-opacity duration-300 ${
          isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`
        }
        style={{ 
          color: 'var(--bodyTextColorWhite) ', 
        }}
        >
          <div className="flex items-center">
            <CiMail size={24} className="mr-2" /> {/* Icon for Email */}
            <div className = "text-2xl">: abcd@gmail.com</div>
            </div>
          <div className="flex items-center">
            <FaPhone size={24} className="mr-2" /> {/* Icon for Phone */}
            <div className = "text-2xl">: (416) 856-2614</div>
          </div>
        </div>
        
        <nav className="hidden lg:flex lg:mx-auto justify-end flex-grow"> 
          <div className="relative flex items-center m-auto lg:flex-row"> 
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative px-10 font-code text-sm uppercase 
                  transition-colors`}
                  style={{ 
                    color: 'var(--bodyTextColorWhite) ', 
                    fontSize: isScrolled ? '1.25rem' : '1rem', 
                    transition: 'font-size 0.3s, color 0.3s',
                  }}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
