import React, { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Service from "./components/Service";
<<<<<<< HEAD
import Body from "./components/Body";
=======
import Home from "./components/Home";
>>>>>>> main


const App = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const handleNavClick = (event, section) => {
    event.preventDefault(); // Prevent default link behavior (page reload)
    setActiveSection(section); // Set the active section based on the clicked link
  };
  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return <Home/>;
      case 'About Us':
        return <AboutUs/>;
      case 'Service':
        return <Service />;
      case 'Gallery':
        return <Gallery />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home/>;
    }
  };
  return (
    <>
      <div id="home" className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
<<<<<<< HEAD
        <Header />
        <Body />
        <Banner />
        <AboutUs />
        <Service />
        <Contact />
=======
        <Header onNavClick={handleNavClick}/>
        <div className="mt-20 p-4">
          {renderSection()}
        </div>
        
        
        
        
>>>>>>> main
        <Footer/>
      </div>
    </>
  );
};

export default App;
