import '../styles/Header.css'
// import avatar from '../assets/avatar.jpg' // Activate when the image is available

function Header() {
  return (
    <header className="header">
      {/* <img src={avatar} alt="Foto de perfil" className="avatar" /> */}
      <h1>Ramón Herrera Robles</h1>
      <p className="subtitle">Desarrollador Web</p>
    </header>
  )
}

export default Header
