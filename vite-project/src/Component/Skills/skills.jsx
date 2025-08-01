import React from 'react';
import ToggleTabs from './ToggleTab'; 
import './skills.css';

const skills = () => {
  return (
    <div className='Skills' id='skills'>
      <div className="skills-experience">
        <h1>Skills & Experience</h1>
        <p> I currently focus on frontend development using   Next.js, Tailwind CSS,
            TypeScript, GSAP. I’ve completed 11 projects for 8+ clients,
           delivering clean, responsive, and user-friendly interfaces.
        </p>
        <div className="skills">
          <h2>My Skills</h2>
          <div className="rating">
            <div className="first-skill">
              <p className='pec'>Next Js <span>95%</span></p> <hr width={250}/> 
              <p className='pec'>Typescript <span> 80%</span></p> <hr width={250}/>
              <p className='pec'>Javascript <span> 85%</span></p> <hr width={220}/>
            </div>
            <div className="second-skill">
              <p className='pec'>TailwindCss <span>85%</span></p> <hr width={230}/> 
              <p className='pec'>React Js <span>75%</span></p> <hr width={210}/> 
              <p className='pec'>GSAP <span> 80%</span></p> <hr width={250}/>
            </div>
          </div>
        </div>
      </div>
      {/* experence */}
      <div className="education">
        <ToggleTabs />
      </div>
    </div>
  )
}

export default skills
