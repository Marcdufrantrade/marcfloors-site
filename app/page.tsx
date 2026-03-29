import Image from "next/image"

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <img src="/images/logo.png" className="brand-logo" />

          <nav className="desktop-nav">
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <span className="phone-link">(916) 555-1234</span>
            <a className="button primary">Get Free Estimate</a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Sacramento's Trusted Flooring Experts</span>

            <h1>Transform Your Space with Beautiful Floors</h1>

            <p>
              From hardwood to luxury vinyl, we deliver clean,
              professional flooring installations.
            </p>

            <div className="hero-actions">
              <a className="button primary">Get Your Free Estimate</a>
              <a className="button secondary">View Our Work</a>
            </div>
          </div>

          <div className="hero-card">
            <span className="card-label">Free Quote</span>
            <h2>Request an Estimate</h2>
            <p>Fast response. Professional service.</p>

            <div className="contact-row">(916) 555-1234</div>
            <div className="contact-row">Sacramento, CA</div>

            <a className="button primary full">Request Now</a>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-head">
            <h2>Our Services</h2>
            <p>Professional flooring installation done right.</p>
          </div>

          <div className="cards three">
            <div className="service-card">
              <h3>Hardwood</h3>
              <p>Premium hardwood installation.</p>
            </div>

            <div className="service-card">
              <h3>Vinyl</h3>
              <p>Durable and modern solutions.</p>
            </div>

            <div className="service-card">
              <h3>Laminate</h3>
              <p>Affordable and beautiful floors.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-grid">
          <div>
            <h2>Get Your Free Estimate</h2>
            <p>Call us or request a quote now.</p>
          </div>

          <div className="contact-box">
            <div className="contact-row dark">(916) 555-1234</div>
            <div className="contact-row dark">Sacramento, CA</div>

            <a className="button primary full">Request Estimate</a>
          </div>
        </div>
      </section>
    </>
  )
}
