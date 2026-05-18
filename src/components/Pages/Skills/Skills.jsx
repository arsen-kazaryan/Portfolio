import { skills } from '../../../Data/skills'
import Fireflies from '../../Fireflies/Fireflies'
import './Skills.css'

export default function Skills() {
 

  return (
    <section className='skills-section'>
      <Fireflies/>
      <div className='skills-section__content'>
        <p className='skills-section__label'>What I use</p>
        <h2 className='skills-section__title'>Skills</h2>
        <p className='skills-section__desc'> Technologies and tools I practice</p>

<div className='skills-section__grid'>
  {skills.map((skill) => (  
    <div 
      className='skills-card' 
      key={skill.title} 
      style={{ animation: `${skill.animation}` }} 
    >
      <h3>{skill.title}</h3>
      <p>{skill.text}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  )
}
