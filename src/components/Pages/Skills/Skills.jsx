import './Skills.css'

export default function Skills() {
  const skills = [
    { title: 'HTML5', text: 'Semantic structure and clean page markup.',animation: 'movedBlocks 3s ease infinite alternate-reverse' },
    { title: 'CSS3', text: 'Responsive layouts, Flexbox, Grid and animations.', animation: 'movedBlocks 2s  infinite alternate-reverse'},
    { title: 'JavaScript', text: 'ES6+, DOM logic, arrays, objects and async basics.', animation: 'movedBlocks 4s ease infinite alternate-reverse' },
    { title: 'React', text: 'Components, props, state, hooks and JSX.', animation: 'movedBlocks 1s ease infinite alternate-reverse' },
    { title: 'React Router', text: 'Page routing and active navigation states.', animation: 'movedBlocks 2s ease infinite alternate-reverse' },
    { title: 'REST API', text: 'Fetch API, JSON data, loading and error handling.', animation: 'movedBlocks 44s ease infinite alternate-reverse' },
    { title: 'Git', text: 'Basic version control and GitHub workflow.', animation: 'movedBlocks 1s ease infinite alternate-reverse' },
    { title: 'Responsive Design', text: 'Layouts that work on desktop and mobile screens.', animation: 'movedBlocks 3s ease infinite alternate-reverse' },
  ]

  return (
    <section className='skills-section'>
      <div className='skills-section__content'>
        <p className='skills-section__label'>What I use</p>
        <h2 className='skills-section__title'>Skills</h2>
        <p className='skills-section__desc'> Technologies and tools I practice</p>

        <div className='skills-section__grid'>
          {skills.map((skill) => (  
            <div className='skills-card' key={skill.title} style={skill.animation ? { animation: skill.animation } : {}}>
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
