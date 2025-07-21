import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './about.css';
import VideoPlay from '/src/assets/video_1.png';
import Profile from '/src/assets/profile_photo.png';

const About = () => {

  const [typeEffect] = useTypewriter({
    words: ['Web Developer.', ' Web Designer.', 'Frontend Developer.', 'App Developer.', 'App Designer.', 'Entrepreneur.'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,

  })

  return (
    <div className='about'>
      <div className="About-left">
        <p>I'm</p>
        <h1>Ifeoluwa Fowbaje</h1>
        <span>
          {typeEffect}
          <Cursor cursorStyle='|' />
        </span>
        <div className="about-call-to-action">
          <a href="#">Download CV</a>
          <div className="play-video-btn">
            <img src={VideoPlay} alt="play video" />
            <span>Watch my Into</span>
          </div>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
      {/* about-right */}
      <div className="about-right">
        <img src={Profile} alt="profile" />
      </div>
    </div>
  )
}

export default About
