import { useEffect, useState } from 'react'
import { projects } from '../../../Data/ProjectsStore'
import './projects.css'
import Fireflies from '../../Fireflies/Fireflies';

const Projects = () => {
const [hide, setHide] = useState(() => {
  const saved = localStorage.getItem('ShowAllProjects');
  return saved ? JSON.parse(saved) : false;
});

useEffect(() => {
  localStorage.setItem('ShowAllProjects', JSON.stringify(hide));
}, [hide]); // сохранение состояния LocalStorage (состояние кнопки)

const toggleHide =()=> {
  setHide((e)=> !e)
}

const projectChoose = hide ? projects : projects.slice(0,3)
  return (
    <section className='projects-section'>
      <Fireflies/>
      <div className='projects-section__content'>
        <p className='projects-section__label'>My work</p>
        <h2 className='projects-section__title'>Projects</h2>
        <p className='projects-section__desc'>
          A place for the projects I build while practicing frontend development.
        </p>

        <div className='projects-section__grid'>
          {projectChoose.map((project, index) => (
            <article
              className='project-card'
              key={project.id}
              style={{ animationDelay: `${index * 0.12}s` }} // чем больше иднекс тем больше времени будет повялятся карточка 
            >
              <div>
                <span className='project-card__number'>0{project.id}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </div>
              <div className='project-card__bottom'>
                <span>{project.stack}</span>
                <a href={project.href} target='_blank' aria-label='Project link'>View</a>
              </div>
            </article>
          ))}
        </div>
        <div className='project-card-btn-wrapper'>
          <button onClick={toggleHide} className='project-card__btn'>{hide ? 'Hide' : 'View All'}</button>
        </div>
      </div>
    </section>
  )
}

export default Projects
