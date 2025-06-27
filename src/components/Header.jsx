import '../styles/Header.css'
import avatar from '../assets/avatar.png' 

function Header() {
  return (
    <header className="header">
      {<img src={avatar} alt="Foto de perfil" className="avatar" /> }
      <h1>Ramón Herrera Robles</h1>
      <p className="subtitle">Desarrollador de Software Full Stack · Creativo · Resolutivo</p>
    </header>
  )
}

export default Header
