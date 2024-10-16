import React, { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      <div id="home" className="pt-[3rem] overflow-hidden bg-n-6">
        <Header/>
        <div className="mt-20 p-4 lg:mx-[200px]">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Service />} />
            <Route path="/portfolio" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default App;
