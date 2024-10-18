import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link to="/contact" onClick={handleClick}>
      <button id="button" className='font-bold text-white bg-gray-900 p-3 mt-10 flex justify-center mx-auto lg:mx-0'>
        BOOK YOUR FREE QUOTE
      </button>
    </Link>
  );
};

export default Button;