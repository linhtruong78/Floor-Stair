import { navigation } from "../constants";
import logo from "../assets/logo.jpg";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuSvg from "../components/MenuSvg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { FiPhone, FiMail, FiChevronDown } from "react-icons/fi";



const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

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
    toggleSubmenu();
  };
  const toggleSubmenu = (id) => {
    if (openSubmenu === id) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(id);
    }
  };
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenSubmenu(null);
        setOpenNavigation(false);
        enablePageScroll();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b bg-n-2 lg:backdrop-blur-sm backdrop-blur-sm`}>
      <div className="justify-between flex items-center px-5 lg:mx-20 lg:px-7.5 xl:px-10 max-lg:py-4">
        <div className="flex items-center">
          <Link
          to={"/"}
          onClick={handleClick}
           className="block w-[8rem] xl:mr-8">
            <img
              src={logo}
              alt="Logo"
            />
          </Link>

          <div className={`flex flex-col items-start transition-opacity duration-300 text-white ml-3`}>
            <div className="flex items-center">
              <FiMail size={20} className="mr-2" />: luharry59@gmail.com
            </div>
            <div className="flex items-center">
              <FiPhone size={20} className="mr-2" />: +1 (437)-876-4552
            </div>
          </div>
        </div>
        <nav className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[8rem] left-0 right-0 bottom-0 lg:static lg:flex lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col w-full bg-n-2 items-center justify-center m-auto lg:flex-row">
          {navigation.map((item) => (
              <div key={item.id} className="relative">
                <Link
                  to={item.hasSubmenu ? "#" : item.url}
                  className={`relative font-code text-sm uppercase text-n-1 transition-colors hover:text-n-3 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 xl:px-12 flex items-center`}
                  onClick={() => {
                    if (item.hasSubmenu) {
                      toggleSubmenu(item.id);
                    } else {
                      handleNavClick();
                    }
                  }}
                >
                  {item.title}
                  {!openNavigation && item.hasSubmenu && (
                    <FiChevronDown
                    className={`ml-2 transform transition-transform ${
                      openSubmenu === item.id ? "rotate-180" : ""
                    }`}
                    size={16}
                  />
                  )}
                </Link>

                {!openNavigation ? (item.hasSubmenu && openSubmenu === item.id && (
                  <div className="absolute left-0 w-full mt-2 bg-n-2  rounded-lg shadow-lg">
                    {item.submenu.map((submenuItem) => (
                      <Link
                        key={submenuItem.id}
                        to={submenuItem.url}
                        className="block px-8 py-2 text-sm text-white hover:bg-gray-700"
                        onClick={handleNavClick}
                      >
                        {submenuItem.title}
                      </Link>
                    ))}
                  </div>
                )) : (item.hasSubmenu && (
                  <div className="">
                    {item.submenu.map((submenuItem) => (
                      <Link
                        key={submenuItem.id}
                        to={submenuItem.url}
                        className="block py-2 text-sm text-white hover:text-n-6"
                        onClick={handleNavClick}
                      >
                        {submenuItem.title}
                      </Link>
                    ))}
                  </div>
                )) }
              </div>
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
