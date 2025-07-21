import React from 'react';
import './project.css';
import Project1 from '../../assets/church_website.png';
import Project2 from '../../assets/E_commerce.png';
import Project3 from '../../assets/investment_site.png';


const project = () => {
  return (
    <div className='project'>
        <h1>My Projects</h1>
      <div className="project-list">
        <img src={Project1} alt="" width={500}/>
        <div className="info-project">
          <h2>Church Website</h2>
          <p>Designed and developed a responsive church
             website featuring service schedules, event
              pages, sermon uploads, and contact forms.</p>
          <a href="https://church-website-example.com" target="_blank" rel="noopener noreferrer"><span>View Project</span></a> <hr />
          <p>React js . TailwindCss</p>
        </div>
        {/* project 2 */}
      </div>
      <div className="project-list">
        <div className="info-project">
          <h2>Invstor X - investment site</h2>
          <p>Built a modern, responsive investment 
            platform with features like plan listings,
             user dashboards, secure login, and
              real-time data display.</p>
          <a href="https://church-website-example.com" target="_blank" rel="noopener noreferrer"><span>View Project</span></a> <hr />
          <p>React js . TailwindCss</p>
        </div>
         <img src={Project3} alt="" width={500}/>
      </div>
      {/* project 3 */}
      <div className="project-list">
        <img src={Project2} alt="" width={500}/>
        <div className="info-project">
          <h2>Koudobuy-Ecommerce site</h2>
          <p>Developed a fully responsive e-commerce website
             with product listings, shopping cart,
             user authentication, and secure checkout Focused on clean UI, 
             smooth user experience, and mobile optimization.</p>
          <a href="https://church-website-example.com" target="_blank" rel="noopener noreferrer"><span>View Project</span></a> <hr />
          <p>React js . TailwindCss</p>
        </div>
      </div>
    </div>
  )
}

export default project
