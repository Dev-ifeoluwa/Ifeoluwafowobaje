import React, { useEffect, useState } from 'react';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Component/Navbar/Navbar.jsx';
import About from './Component/About/about.jsx';
import About1 from './Component/About1/about1.jsx';
import Skills from './Component/Skills/skills.jsx';
import Service from './Component/Services/services.jsx';
import Project from './Component/Project/project.jsx';
import Contact from './Component/Contact/contact.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createContext } from 'react';
// import ReactSwitch from 'react-switch'
// import './App.css'


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
      <div>
        <a href="#"
          style={{
            position: "fixed",
            margin: '20px 15px',
            background: "linear-gradient(120deg, blueviolet, orange)",
            borderRadius: "100%",
            color: "white",
            width: "100%",
            maxWidth: "50px",
            textAlign: 'center',
            textDecoration: "none",
            fontSize: "30px",
            padding: "5px",
            right: "0",
            bottom: '0',
          }}
        > <FontAwesomeIcon icon={faArrowCircleUp} /> </a>
      </div>
    </div>
  );
}

export default App
export const ThemeContext = createContext(null);




// for dark mode
// const [theme, setTheme] = useState("light");

// const themeToggle = () => {
//   setTheme((curr) => (
//     curr === "light" ? "dark" : "light"
//   ))
// }





// <ThemeContext.Provider value={{ theme, themeToggle }}>
//   <div className='App' id={theme}>
//     {showNavbar && <Navbar />}
//     <div className='for-switch'>
//       <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
//       <ReactSwitch
//         width={30}
//         height={15}
//         onChange={themeToggle}
//         checked={theme === "dark"}/>
//     </div>
//   </ThemeContext.Provider>