import React, { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Home from "./components/Home";
import Floor from "./components/ServiceStuffs/Floor";
import Stairs from "./components/ServiceStuffs/Stairs";
import Tiles from "./components/ServiceStuffs/Tiles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      <div id="home" className="pt-[3rem] overflow-hidden bg-n-1">
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Service showBanner={true}/>} />
            <Route path="/portfolio" element={<Gallery showBanner={true}/>} />
            <Route path="/faq" element={<FAQ showBanner={true}/>} />
            <Route path="/contact" element={<Contact showBanner={true}/>} />
            <Route path="/floors" element={<Floor showBanner={true}/>} />
            <Route path="/stairs" element={<Stairs showBanner={true}/>} />
            <Route path="/tiles" element={<Tiles showBanner={true}/>} />
          </Routes>
      
           
        <Footer/>
      </div>
    </>
  );
};

export default App;
