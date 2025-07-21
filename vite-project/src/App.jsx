import React, { useEffect, useState } from 'react';
import Navbar from './Component/Navbar/Navbar.jsx';
import About from './Component/About/about.jsx';
import About1 from './Component/About1/about1.jsx';
import Skills from './Component/Skills/skills.jsx';
import Service from './Component/Services/services.jsx';
import Project from './Component/Project/project.jsx';
import Contact from './Component/Contact/contact.jsx';

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {showNavbar && <Navbar />}
      <About />
      <About1 />
      <Skills />
      <Service />
      <Project />
      <Contact />
    </div>
  );
}

export default App
