import React, { useState } from 'react';
import { projects2 } from "../constants";
import Banner from './Banner';
import Quote from './Quote';

const categories = ['All', 'Stairs', 'Floors', 'Tiles'];
const Portfolio = ({showBanner}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects2
      : projects2.filter((project) => project.category === selectedCategory);
  return (
    <>
    <div>
      {showBanner && <Banner title="Showcase our works" />}
    </div>
    <div className=" mx-auto px-[15%] py-10 bg-n-2/5">
      <div className='flex flex-col lg:flex-row justify-center pt-5 mt-5'>
        <div id="left" className='w-full text-center lg:text-left px-5 lg:pl-[10%] py-5 items-center'>
          <h2 className="text-5xl font-bold mb-4 ">
            Portfolio
          </h2>
          <p className="text-n-2/70 mb-6 text-xl">
            Let's our work to the talking
          </p>          
        </div>
        <div className="flex justify-center space-x-4 mb-5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`flex flex-col justify-end items-center h-[80%] w-32 px-4 p-2 border-b-1 text-n-2 ${
              selectedCategory === category
                ? 'border-b-2 border-b-n-2'
                : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="relative group overflow-hidden shadow-xl">
            <img
              src={project.image}
              alt={project.category}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default Portfolio;
