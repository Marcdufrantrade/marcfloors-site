import Image from 'next/image'

const services = [
  {
    title: 'Hardwood Installation',
    text: 'Professional hardwood installation with clean finishing, proper preparation, and detail-focused workmanship.',
  },
  {
    title: 'Laminate & LVP',
    text: 'Durable laminate and luxury vinyl plank installation for a clean, modern, and practical flooring upgrade.',
  },
  {
    title: 'Floor Prep & Leveling',
    text: 'Subfloor preparation and leveling to support a better final appearance and a longer-lasting installation.',
  },
]

const benefits = [
  'Marc Floors presentation',
  'Free estimates',
  'Sacramento and surrounding areas',
  'Clean, detail-focused installation',
]

const testimonials = [
  'Professional communication, clean finish, and excellent attention to detail from start to finish.',
  'The work looked sharp, the schedule was clear, and the entire installation felt well managed.',
  'Very solid craftsmanship. The final result looked premium and the process was straightforward.',
]

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand" aria-label="Marc Floors home">
            <Image src="/images/logo.jpg" alt="Marc Floors" width={260} height={110} className="brand-logo" priority />
          </a>

          <nav className="desktop-nav">
            <a href="#services">Services</a>
            <a href="#why-us">Why Us</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <a className="phone-link" href="tel:+12797901575">(279) 790-1575</a>
            <a className="button primary" href="#contact">Get Free Estimate</a>
          </div>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">Sacramento flooring contractor</div>
            <h1>Premium flooring installation in Sacramento.</h1>
            <p>
              Marc Floors installs hardwood, laminate, and luxury vinyl with clean finishing,
              strong workmanship, and a professional presentation from estimate to completion.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Get Free Estimate</a>
              <a className="button secondary" href="tel:+12797901575">Call Now</a>
            </div>
            <div className="benefits-grid">
              {benefits.map((item) => (
                <div key={item} className="benefit-card">{item}</div>
              ))}
            </div>
          </div>

          <div className="hero-card">
            <div className="card-label">Fast contact</div>
            <h2>Request an estimate</h2>
            <p>
              Call or send your project details, flooring type, approximate square footage,
              and location for a faster response.
            </p>
            <a className="contact-row" href="tel:+12797901575">(279) 790-1575</a>
            <div className="contact-row">Sacramento, CA and surrounding areas</div>
            <a className="button primary full" href="#contact">Get Free Estimate</a>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow orange">Services</div>
            <h2>Flooring services presented in a clean, professional way.</h2>
            <p>Simple, clear, and strong positioning focused on the work clients actually hire you for.</p>
          </div>
          <div className="cards three">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="section alt">
        <div className="container cards three">
          <article className="info-card">
            <h3>Professional Presentation</h3>
            <p>A cleaner, more trustworthy brand image that helps clients feel confident contacting you.</p>
          </article>
          <article className="info-card">
            <h3>Detail-Focused Work</h3>
            <p>Workmanship, prep, and finishing details positioned as the reason clients should choose Marc Floors.</p>
          </article>
          <article className="info-card">
            <h3>Lead-Focused Design</h3>
            <p>A simpler homepage built to push visitors toward calling, texting, or requesting an estimate.</p>
          </article>
        </div>
      </section>

      <section id="reviews" className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow orange">Reviews</div>
            <h2>A stronger trust section helps turn visitors into leads.</h2>
          </div>
          <div className="cards three">
            {testimonials.map((text, index) => (
              <article key={index} className="review-card">
                <div className="stars">★★★★★</div>
                <p>“{text}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-grid">
          <div>
            <div className="eyebrow orange-light">Contact Marc Floors</div>
            <h2>Ready to request your estimate?</h2>
            <p>
              Use the button below or call directly to discuss your flooring project in Sacramento and nearby areas.
            </p>
          </div>
          <div className="contact-box">
            <a className="contact-row dark" href="tel:+12797901575">(279) 790-1575</a>
            <div className="contact-row dark">Sacramento, California</div>
            <a className="button primary full" href="tel:+12797901575">Call Now</a>
          </div>
        </div>
      </section>
    </main>
  )
}
