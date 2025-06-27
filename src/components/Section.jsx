import '../styles/Section.css'

function Section({ title, children }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="links">
        {children}
      </div>
    </section>
  )
}

export default Section
