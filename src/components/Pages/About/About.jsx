import { useState } from 'react'
import './About.css'
import Fireflies from '../../Fireflies/Fireflies'

const About = () => {
  return (
    <section className="about-section">
      <Fireflies />
      <div className="about-section__content">
        <p className="about-section__label">About me</p>
        <h2><span>Kazaryan</span> Arsen</h2>
        <div className='about-section__wrapper'>
          <div className="about-section__img-wrapper">
            <img src='/icon/profile.png' alt="profile-img" className='about-section__img' loading='lazy' />
          </div>

          <div className='about-section__wrapper-desc'>
            <p>
              I am a Frontend Developer dedicated to creating clean, responsive, and highly performant web applications.
              With a strong foundation in JavaScript, React, and ecosystem tools like Zustand and React Router,
              I focus on writing well-structured, maintainable code and turning design concepts into pixel-perfect interfaces.
            </p>
            <p>
              I have hands-on experience independently developing and successfully deploying complete web applications,
              adhering to modern development workflows like Git Flow. I am eager to bring my technical skills and proactive
              mindset to a development team where I can contribute to real-world projects and add value from day one.
            </p>
            <div className='about-section__btn-wrapper'>
              <a href='/Files/Resume.pdf' download='My Resume.pdf'>
                <button className='about-section__btn'>Dowland Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
