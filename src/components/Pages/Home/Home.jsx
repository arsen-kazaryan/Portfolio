import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="hero-section">
      <p className="hero-section__desc">HELLO I'M</p>
      <h1>Kazaryan <span className="hero-section__name">Arsen</span></h1>
      <div className="hero-section__social-container">
        <a href='https://github.com/arsen-kazaryan' className="hero-section__social-link" target='_blank' rel='noreferrer'><img src="/icon/github-white.svg" alt="GitHub" /></a>
        <a href='https://www.linkedin.com/in/arsen-kazaryan' className="hero-section__social-link" target='_blank' rel='noreferrer'><img src="/icon/linkedin-white.svg" alt="LinkedIn" /></a>
        <a href='mailto:arsenk001@mail.ru' className="hero-section__social-link"><img src="/icon/gmail-white.svg" alt="Email" /></a>
      </div>
      <Link to='/about' className='hero-section__about'>About Me</Link>
    </div>
  )
}

export default Home
