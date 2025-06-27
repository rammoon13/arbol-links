import Header from './components/Header'
import LinkCard from './components/LinkCard'
import Footer from './components/Footer'
import Section from './components/Section'
import './styles/App.css'

import github from './assets/github.svg'
import instagram from './assets/instagram.svg'
// import linkedin from './assets/linkedin.svg'
// import twitter from './assets/twitter.svg'
// import cv from './assets/cv.svg'
// import download from './assets/download.svg'

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
            href="https://linkedin.com/in/ramonherrera"
            label="LinkedIn"
            icon={undefined}
          />
          <LinkCard
            href="https://twitter.com/rammoon13"
            label="Twitter"
            icon={undefined}
          />
        </Section>
        <Section title="Sobre Mí">
          <LinkCard
            href="#curriculum"
            label="Ver Currículum Online"
            icon={undefined}
          />
          <LinkCard
            href="#cv"
            label="Descargar CV"
            icon={undefined}
          />
        </Section>
      </main>
      <Footer />
    </div>
  )
}

export default App
