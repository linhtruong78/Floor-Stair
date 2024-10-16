import { navigation } from "../constants";
import logo from "../assets/logo.jpg";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuSvg from "../components/MenuSvg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { FiPhone, FiMail } from "react-icons/fi";



const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const handleNavClick = () => {
    setOpenNavigation(false); 
    enablePageScroll(); 
  };
  
  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b bg-n-2 lg:backdrop-blur-sm backdrop-blur-sm`}>
      <div className="justify-between flex items-center px-5 lg:mx-20 lg:px-7.5 xl:px-10 max-lg:py-4">
        <div className="flex items-center">
          <a className="block w-[8rem] xl:mr-8">
            <img
              src={logo}
              alt="Logo"
            />
          </a>

          <div className={`flex flex-col items-start transition-opacity duration-300 text-white ml-3`}>
            <div className="flex items-center">
              <FiMail size={20} className="mr-2" />:luharry59@gmail.com
            </div>
            <div className="flex items-center">
              <FiPhone size={20} className="mr-2" />:+1 (437)-876-4552
            </div>
          </div>
        </div>
        <nav className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[8rem] left-0 right-0 bottom-0 lg:static lg:flex lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col w-full bg-n-2 items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                className={`block relative font-code text-sm uppercase text-n-1 transition-colors hover:text-n-3
                 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold   lg:leading-5 xl:px-12`}
                onClick={() => handleNavClick()}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
        <div
          className="ml-auto lg:hidden"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </div>
      </div>
    </div>
  );
};

export default Header;
