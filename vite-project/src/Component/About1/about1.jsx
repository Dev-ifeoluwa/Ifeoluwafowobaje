import React from 'react';
import './about1.css';
import Exp00 from '/src/assets/exp_1.jpg';
import Exp000 from '/src/assets/exp_2.jpg';

const About1 = () => {
  return (
    <div className='about1'>
        {/* about1 left */}
        <div className='about1__container'>
            {/* for years */}
            <div className="years">
                <div className="year">
                    <h1>1</h1>
                    <p className='par-year'>year</p>
                </div>
                <p>
                    of working experience as a web designer & developer
                </p>
            </div>
            {/* for remaining about text */}
            <div className="about-remain">
                <p>I'm a developer with over a year of 
                    experience building efficient, user-focused 
                    applications. I enjoy learning new technologies 
                    and writing clean, maintainable code.
                </p>
                <ul>
                    <li>Affordable Prices</li>
                    <li>High Quality Product</li>
                    <li>On Time Project Delivery</li>
                </ul>
                <button>Read More</button>
            </div>
        </div>
        {/* about right */}
        <div className="about1_container2">
            <div className="for-img">
                <img src={Exp00} alt="Web development project example" width={250}/>
                <img src={Exp000} alt="Web design project example" width={250}/>
            </div>
            <div className="remain-text">
                <h1>Happy Clients  <span>10+</span></h1>
                <p>i have successfully delivered projects for 10+ clients. 
                    I focus on building clean, efficient,
                     and user-friendly applications tailored to real-world needs.
                </p>
                <h1>projects completed  <span>12+</span></h1>
                <p>I have successfully completed 15+ projects for 10+ clients.
                     I specialize in building clean, efficient, 
                    and user-focused applications that solve real-world problems.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About1
