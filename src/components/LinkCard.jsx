import '../styles/LinkCard.css'

function LinkCard({ href, icon, label, target = '_blank', download }) {
  return (
    <a
      className="link-card"
      href={href}
      {...(target ? { target, rel: target === '_blank' ? 'noopener noreferrer' : undefined } : {})}
      {...(download ? { download } : {})}
    >
      {icon && <img src={icon} alt="" className="icon" />}
      <span>{label}</span>
    </a>
  )
}

export default LinkCard
