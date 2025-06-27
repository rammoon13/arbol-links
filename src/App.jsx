import Header from './components/Header'
import LinkCard from './components/LinkCard'
import Footer from './components/Footer'
import Section from './components/Section'
import './styles/App.css'

import github from './assets/github.svg'
import instagram from './assets/instagram.svg'
import linkedin from './assets/linkedin.png'
import twitter from './assets/x.svg'
import pdf from './assets/pdf.png'
import web from './assets/web.png'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Section title="Redes Sociales">
          <LinkCard
            href="https://instagram.com/rammoon13"
            label="Instagram Personal"
            icon={instagram}
          />
          <LinkCard
            href="https://github.com/rammoon13"
            label="GitHub"
            icon={github}
          />
          <LinkCard
            href="https://www.linkedin.com/in/ramon-herrera-robles/"
            label="LinkedIn"
            icon={linkedin}
          />
          <LinkCard
            href="https://twitter.com/rammoon13"
            label="X (Twitter)"
            icon={twitter}
          />
        </Section>
        <Section title="Sobre Mí">
          <LinkCard
            href="#curriculum"
            label="Ver Currículum Online"
            icon={web}
          />
          <LinkCard
            href="/ramon-herrera-cv.pdf"
            label="Mi Curriculum"
            icon={pdf}
          />
        </Section>
      </main>
      <Footer />
    </div>
  )
}

export default App
