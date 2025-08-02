import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './about.css';
import VideoPlay from '/src/assets/video_1.png';
import Profile from '/src/assets/Profile_photo.png';

const About = () => {

  const [typeEffect] = useTypewriter({
    words: ['Web Developer.', ' Web Designer.', 'Frontend Developer.', 'Graphics Designer.', 'Entrepreneur.'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,

  })

  return (
    <div className='about' id='about'>
      <div className="About-left">
        <p>I'm</p>
        <h1>Ifeoluwa Fowobaje</h1>
        <span>
          {typeEffect}
          <Cursor cursorStyle='|' />
        </span>
        <div className="about-call-to-action">
          <div className="about-call-to-action1">
            <a href="my_resume"
            download="IfeoluwaResume.pdf"
            >Download CV</a>
            <div className="play-video-btn">
              <img src={VideoPlay} alt="play video" />
              <span>Watch my Info</span>
            </div>
          </div>
          <div className="sociai-media">
            <a href="mailto:lawrenceifeoluwa100@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="https://www.linkedin.com/in/ifeoluwa-fowobaje-ba943a348/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/Dev-ifeoluwa/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.facebook.com/profile.php?id=61573162777101"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://x.com/devbyifeoluwa?t=MMCbH4X0owjD74_beBP-vw&s=09"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
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
