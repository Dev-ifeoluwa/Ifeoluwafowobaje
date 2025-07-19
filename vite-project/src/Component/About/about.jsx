import { useTypewriter, Cursor } from 'react-simple-typewriter';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './about.css'
import VideoPlay from '../../assets/video1.png'
import Profile from '../../assets/profile photo.png'

const about = () => {

  const [typeEffect] = useTypewriter({
    words: ['Web Developer.', ' Web Designer.', 'Frontend Developer.', 'App Developer.', 'App Designer.', 'Enterprenuer.'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,

  })

  return (
    <div className='about'>
      <div className="About-left">
        <p>I'm</p>
        <h1>Ifeoluwa Fowbaje</h1>
        <span>'{typeEffect}'</span>
        <div className="about-call-to-action">
          <a href="#"><p>Download CV</p></a>
          <div className="play-video-btn">
            <img src={VideoPlay} alt="play video" width={100} />
            <span>Watch my Into</span>
          </div>
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
        </div>
      </div>
      {/* about-right */}
      <div className="about-right">
        <img src={Profile} alt="profile" width={500} />
      </div>
    </div>
  )
}

export default about

















