import React from 'react';
import AboutUs from "./AboutUs";
import Quote from "./Quote";
import Service from "./Service";
import Gallery from "./Gallery";
import Customer from './Customer';
import Specialty from './Specialty';
import Floor from './ServiceStuffs/Floor';


const Home = () => {
  return (
    <div>
        <AboutUs />
        <Service showBanner={false}/>
        <Specialty />
        <Customer />
        <Gallery />
        <Quote />
    </div>
    
  );
};

export default Home;
