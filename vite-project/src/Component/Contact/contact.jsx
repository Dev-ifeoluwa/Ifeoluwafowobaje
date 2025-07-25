import React from 'react';
import './contact.css';

const contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="total-t">
        <div className="intro">
          <h1>Let's Work Together</h1>
        </div>
        <div className="contact-top">
          <div className="info">
            <p>My office: </p>
            <h2>Festac, lagos state Nigeria.</h2>
            <hr />
            <p>Call me: </p>
            <h2>+0123456789</h2>
            <hr />
            <p>mail me: </p>
            <h2>Lawrenceifeoluwa100@gmail.com</h2>
            <hr />
          </div>
        </div>
      </div>
      {/* contact-bottom */}
      <div className="contact-bottom">
        <a href="mailto:lawrenceifeoluwa100@gmail.com"><p>Say hello</p></a>
        <div className="div">
          <input type="text" name="" id=""
            placeholder='Your Name'
            required />
          <input type="email" name="" id=""
            placeholder='Your Email'
            required />
        </div>
        <input type="text" name="" id=""
          placeholder='Subject'
          required />
        <input type="text" name="" id=""
          placeholder='Your Message' required />
        <button type="submit">Send Message</button>
      </div>
    </div>
  )
}

export default contact
