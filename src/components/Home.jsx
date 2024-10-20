import React from 'react';
import AboutUs from "./AboutUs";
import Quote from "./Quote";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Customer from './Customer';
import Specialty from './Specialty';



const Home = () => {
  return (
    <div>
        <AboutUs />
        <Service showBanner={false}/>
        <Specialty />
        <Customer />
        <Portfolio />
        <Quote />
    </div>
    
  );
};

export default Home;
