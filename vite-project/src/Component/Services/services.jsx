import React from 'react';
import './services.css';
import imgIcon from '/src/assets/color_splash_1.jpg';

const services = () => {
  return (
    <div className='service'>
      <div className="service-top">
        <h1>My Services</h1>
        <button>Hire Me</button>
      </div>
      {/* service-bottom */}
      <div className="service-bot">
        <div className="creative-design">
                <div className="for-img-icon">
                  <img src={imgIcon} alt="" width={30}/>
                </div>
                <h2>Creative Design</h2>
                <p>Start from $200</p>
                <p>I have a strong foundation in creative design, 
                  combining aesthetics with functionality to create visually 
                  engaging and intuitive user interfaces.
                </p>
        </div>
        <div className="creative-design">
                <div className="for-img-icon">
                  <img src={imgIcon} alt="" width={30}/>
                </div>
                <h2>UI Design</h2>
                <p>Start from $200</p>
                <p>I'm Skilled in UI design with a focus on creating clean, 
                  intuitive, and responsive interfaces 
                  that enhance user experience and align with modern design standards.
                </p>
        </div>
        <div className="creative-design">
                <div className="for-img-icon">
                  <img src={imgIcon} alt="" width={30}/>
                </div>
                <h2>web Design</h2>
                <p>Start from $250</p>
                <p>I'm have experience in web design, creating responsive, user-friendly
                   layouts that combine visual appeal with 
                   functionality across all devices.
                </p>
        </div>
        <div className="creative-design">
                <div className="for-img-icon">
                  <img src={imgIcon} alt="" width={30}/>
                </div>
                <h2>Graphic Design</h2>
                <p>Start from $80</p>
                <p>I'm also skilled in graphic design, creating visually engaging 
                  designs for digital and print media, 
                  including logos, banners, and social media content.
                </p>
        </div>
      </div>
    </div>
  )
}

export default services
