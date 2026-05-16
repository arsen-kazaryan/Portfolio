import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'
import Skills from './components/Pages/Skills/Skills'
import Projects from './components/Pages/projects/projects'
import Mail from './components/Pages/Mail/Mail'

function App() {
  const location = useLocation()
  const navItems = [
    { to: '/', label: 'Home', icon: '/icon/home.svg', end: true },
    { to: '/about', label: 'About', icon: '/icon/profile.svg' },
    { to: '/skills', label: 'Skills', icon: '/icon/setting.svg' },
    { to: '/project', label: 'Projects', icon: '/icon/folder.svg' },
    { to: '/mail', label: 'Contact', icon: '/icon/mail.svg' },
  ]
  const activeIndex = navItems.findIndex((item) => {
    if (item.end) {
      return location.pathname === item.to
    }

    return location.pathname.startsWith(item.to)
  })

  return (
    <>
      <nav
        className="nav-menu"
        aria-label="Main navigation"
        style={{ '--active-index': activeIndex === -1 ? 0 : activeIndex }}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            aria-label={item.label}
            className={({ isActive }) =>
              isActive ? 'nav-menu__item nav-menu__item--active' : 'nav-menu__item'
            }
          >
            <span className="nav-menu__icon" style={{ '--icon': `url(${item.icon})` }} />
          </NavLink>
        ))}
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/project' element={<Projects/>} />
        <Route path='/mail' element={<Mail/>} />
      </Routes>
    </>
  )
}

export default App
