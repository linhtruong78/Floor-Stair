import React from 'react';
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Service from "./Service";
import Gallery from "./Gallery";
import Customer from './Customer';
import Specialty from './Specialty';



const Home = () => {
  return (
    <div>
        <AboutUs />
        <Service showBanner={false}/>
        <Specialty />
        <Customer />
        
        <Gallery />
        <Contact />
    </div>
    
  );
};

export default Home;
