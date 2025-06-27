import '../styles/LinkCard.css'

function LinkCard({ href, icon, label }) {
  return (
    <a className="link-card" href={href} target="_blank" rel="noopener noreferrer">
      {<img src={icon} alt="" className="icon" />}
      <span>{label}</span>
    </a>
  )
}

export default LinkCard
