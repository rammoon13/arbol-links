import Header from './components/Header'
import LinkCard from './components/LinkCard'
import Footer from './components/Footer'
import './styles/App.css'

// import githubIcon from './assets/icono-github.svg'
// import instagramIcon from './assets/icono-instagram.svg'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="links">
        <LinkCard
          href="https://github.com/ramonhrrr"
          label="GitHub"
          /* icon={githubIcon} */
        />
        <LinkCard
          href="https://instagram.com/ramonhrrr"
          label="Instagram"
          /* icon={instagramIcon} */
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
