import Header from './components/Header'
import LinkCard from './components/LinkCard'
import Footer from './components/Footer'
import './styles/App.css'

import github from './assets/github.svg'
import instagram from './assets/instagram.svg'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="links">
        <LinkCard
          href="https://instagram.com/rammoon13"
          label="Instagram"
          icon={instagram}
        />
        <LinkCard
          href="https://github.com/rammoon13"
          label="GitHub"
          icon={github}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
