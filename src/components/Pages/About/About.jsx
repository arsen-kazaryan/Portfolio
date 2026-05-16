import './About.css'

const About = () => {
  return (
    <section className="about-section">
      <div className="about-section__content">
        <p className="about-section__label">About me</p>
        <h2><span>Kazaryan</span> Arsen</h2>
        <div className='about-section__wrapper'>
          <div className="about-section__img-wrapper">
            <img src="/icon/profile.png" alt="profile-img" className='about-section__img'/>
          </div>
          <div className='about-section__wrapper-desc'>
            <p>
              I am a Junior Frontend Developer focused on building clean, responsive and user-friendly web
              interfaces. I work with HTML, CSS, JavaScript and React, and I enjoy turning ideas into simple,
              useful applications.
            </p>
            <p>
              I am currently improving my frontend skills through practice and training. My goal is to get an
              internship where I can work on real projects, learn from experienced developers and grow as a
              professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
