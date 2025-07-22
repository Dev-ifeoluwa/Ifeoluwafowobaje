import React from 'react';
import './Navbar.css';


const navbar = () => {

  return (
    <div className= 'hidden navbar'>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">skills</a></li>
      <li><a href="#project">Projects</a></li>
      <li><a href="#service">Service</a></li>
      <li><a href="#contact">Contact</a></li>
    </div>
  )
}

export default navbar



