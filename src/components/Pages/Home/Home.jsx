import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="hero-section">
      <p className="hero-section__desc">HELLO I'M</p>
      <h1>Kazaryan <span className="hero-section__name">Arsen</span></h1>
      <div className="hero-section__social-container">
        <a href='https://github.com/arsen-kazaryan'className="hero-section__social-link" target='_blank'><img src="/icon/github-white.svg" alt="git" /></a>
        <a href='https://www.linkedin.com/in/arsen-kazaryan' className="hero-section__social-link" target='_blank'><img src="/icon/linkedin-white.svg" alt="L" /></a>
        <a href='mailto:arsenk001@mail.ru ' className="hero-section__social-link"target='_blank'><img src="/icon/gmail-white.svg" alt="@" /></a>
      </div>
      <Link to='/about'className='hero-section__about'>About Me</Link>
    </div>
  )
}

export default Home