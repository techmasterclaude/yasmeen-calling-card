const offerings = ['Shops', 'Studios', 'Trades', 'Clinics', 'Kitchens']

export default function Page() {
  return (
    <main className="calling-card">
      <div className="card-frame">
        <header className="card-header">
          <a className="wordmark" href="#top" aria-label="Yasmeen Hasan, home">
            YH<span className="wordmark-period">.</span>
          </a>
          <p className="header-note">Websites for small businesses</p>
        </header>

        <section className="hero" id="top" aria-labelledby="name-heading">
          <div className="hero-copy">
            <p className="eyebrow">A personal calling card</p>
            <h1 id="name-heading">Yasmeen<br />Hasan<span className="heading-period">.</span></h1>
            <p className="intro">I design and build websites for small businesses.</p>
            <p className="github-note">Now on GitHub</p>
          </div>
          <div className="hero-mark" aria-hidden="true">
            <span className="mark-letter">Y</span>
            <span className="mark-rule" />
            <span className="mark-caption">Websites for people who built something worth showing</span>
          </div>
        </section>

        <section className="details" aria-label="How I work">
          <div className="audience-block">
            <p className="section-label">For the places we know</p>
            <ul className="offerings" aria-label="Business types">
              {offerings.map((offering) => <li key={offering}>{offering}</li>)}
            </ul>
          </div>
          <div className="approach-block">
            <p className="section-label">A practical approach</p>
            <p className="approach-copy">
              I start with what the place actually sells: menus, hours, address and how to order come first, and decoration comes after the useful part works. I build pages that load fast on a phone and hand over something the owner can run themselves.
            </p>
          </div>
        </section>

        <footer className="card-footer">
          <div>
            <p className="section-label">Get in touch</p>
            <a className="email-link" href="mailto:yas.logo3@gmail.com">
              yas.logo3@gmail.com
            </a>
          </div>
        </footer>
      </div>
    </main>
  )
}
