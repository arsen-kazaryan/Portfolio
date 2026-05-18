import Fireflies from '../../Fireflies/Fireflies'
import './Mail.css'

const Mail = () => {
  return (
    <section className="mail-section">
      <Fireflies/>
      <div className="mail-section__card">
        <p className="mail-section__label">Contact</p>
        <h2>Let's talk</h2>
        <p className="mail-section__desc">
          If you have an internship opportunity, a project idea, or just want to connect, feel free to contact me.
        </p>

        <div className="mail-section__links">
          <a href="mailto:arsenk001@mail.ru">arsenk001@mail.ru</a>
          <a href="tel:+37493139379">+374 93 139379</a>
          <span>Yerevan, Armenia</span>
        </div>

        <div className="mail-section__actions">
          <a href="mailto:arsenk001@mail.ru">Send Email</a>
          <a href="https://github.com/arsen-kazaryan" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  )
}

export default Mail
