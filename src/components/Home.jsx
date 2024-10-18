import React from 'react';
// import AboutUs from "./AboutUs";
// import Contact from "./Contact";
// import Service from "./Service";
import Floor from './ServiceStuffs/Floor';
import Stairs from './ServiceStuffs/Stairs';
import Tiles from './ServiceStuffs/Tiles';

const Home = () => {
  return (
    <div>
      <Tiles/>
        <Floor/>
        <Stairs/>
        <AboutUs />
        <Service />
        <Contact />
    </div>
    
  );
};

export default Home;
