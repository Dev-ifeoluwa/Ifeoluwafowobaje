import React from 'react';
import './services.css';
import imgIcon from '/src/assets/color_splash_1.jpg';

const services = () => {
  return (
    <div className='service' id='service'>
      <div className="service-top">
        <h1>My Services</h1>
        <button>Hire Me</button>
      </div>
      {/* service-bottom */}
      <div className="service-bot">
        <div className="creative-design">
              <div className="for-header">
                {/* <div className="for-img-icon"> */}
                  {/* <img src={imgIcon} alt="" width={30}/> */}
                {/* </div> */}
                <h2>Full Stack Web development</h2>
              </div>
                {/* <p>Start from $200</p> */}
                <p>I build scalable web applications using modern frameworks like <strong>Next.js, React</strong> for 
                  frontend and <strong>NestJs, Express</strong> for backend, ensuring speed, performance, and reliabilty.
                </p>
        </div>
        <div className="creative-design">
              <div className="for-header">
                {/* <div className="for-img-icon">
                  <img src={imgIcon} alt="" width={30}/>
                </div> */}
                <h2>API Development</h2>
              </div>
                {/* <p>Start from $200</p> */}
                <p>I'm Skilled at creating a well secured and well structured <strong>REST APIs</strong>
                and integrate third-party services seamlessly, including payment, auth system and more.
                </p>
        </div>
        <div className="creative-design">
             <div className="for-header">
                {/* <div className="for-img-icon">
                  <img src={imgIcon} alt="" width={30}/>
                </div> */}
                <h2>Database & Management Design</h2>
             </div>
                {/* <p>Start from $250</p> */}
                <p>From <strong>SQL to NoSQL</strong>, I design Optimized database and
                ensure smooth data flow between your project and its storage layer.
                </p>
        </div>
        <div className="creative-design">
                <div className="for-header">
                  {/* <div className='for-img-icon'>
                    <img src={imgIcon} alt="" width={30}/>
                  </div> */}
                  <h2>E-commerce & Multivendor platform</h2>
                </div>
                {/* <p>Start from $80</p> */}
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
