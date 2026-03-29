export default function Home() {
  const gallery = [
    "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
  ]

  return (
    <>
      <header className="site-header">
        <div className="topbar">
          <div className="container topbar-inner">
            <div className="topbar-left">
              <span>Licensed Presentation</span>
              <span>Free Estimates</span>
              <span>Sacramento Area</span>
            </div>
            <div className="topbar-right">
              <a href="tel:+12797901575">(279) 790-1575</a>
            </div>
          </div>
        </div>

        <div className="container header-inner">
          <a href="#top" className="brand-wrap">
            <img src="/images/logo.png" alt="Marc Floors" className="brand-logo" />
          </a>

          <nav className="desktop-nav">
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#why-us">Why Us</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <a href="tel:+12797901575" className="phone-link">
              Call: (279) 790-1575
            </a>
            <a href="#contact" className="button primary">
              Get Free Estimate
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-overlay"></div>

          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="eyebrow">Sacramento's trusted flooring contractor</span>

              <h1>Premium flooring installation with a cleaner, sharper finish.</h1>

              <p>
                Marc Floors delivers hardwood, laminate, LVP, vinyl, floor prep, and leveling
                with a professional presentation, clean workmanship, and detail-focused execution.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="button primary">
                  Get Free Estimate
                </a>
                <a href="tel:+12797901575" className="button secondary-dark">
                  Call Now
                </a>
              </div>

              <div className="benefits-grid">
                <div className="benefit-card">Clean, professional installation</div>
                <div className="benefit-card">Strong communication and presentation</div>
                <div className="benefit-card">Sacramento and surrounding areas</div>
                <div className="benefit-card">Free estimate and fast response</div>
              </div>
            </div>

            <div className="hero-card">
              <span className="card-label">Fast contact</span>
              <h2>Request an estimate</h2>
              <p>
                Call or text your project details, flooring type, and approximate square footage
                for a faster response.
              </p>

              <a href="tel:+12797901575" className="contact-row">
                (279) 790-1575
              </a>

              <a href="sms:+12797901575" className="contact-row">
                Text project details
              </a>

              <div className="contact-row">Sacramento, CA and nearby cities</div>

              <a href="#contact" className="button primary full">
                Request Now
              </a>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <div className="container stats-grid">
            <div className="stat-box">
              <strong>Hardwood</strong>
              <span>Clean installation and finishing</span>
            </div>
            <div className="stat-box">
              <strong>LVP / Laminate</strong>
              <span>Modern and durable flooring solutions</span>
            </div>
            <div className="stat-box">
              <strong>Prep / Leveling</strong>
              <span>Better base for a better final result</span>
            </div>
            <div className="stat-box">
              <strong>Free Estimates</strong>
              <span>Fast contact and simple quoting process</span>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow orange">Services</span>
              <h2>Flooring services presented in a stronger, more premium way.</h2>
              <p>
                The focus here is simple: position Marc Floors like a company people trust before
                they even call.
              </p>
            </div>

            <div className="cards three">
              <div className="service-card">
                <div className="service-icon">01</div>
                <h3>Hardwood Installation</h3>
                <p>
                  Professional hardwood installation with better prep, cleaner finishing, and
                  stronger overall presentation.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">02</div>
                <h3>LVP, Vinyl & Laminate</h3>
                <p>
                  Durable, practical, and modern flooring solutions installed with attention to
                  layout, transitions, and finish.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">03</div>
                <h3>Floor Prep & Leveling</h3>
                <p>
                  Floor preparation and leveling work that supports a longer-lasting installation
                  and a cleaner final result.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section alt">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow orange">Gallery</span>
              <h2>Visual presentation that feels closer to real flooring work.</h2>
              <p>
                This section is built to feel more premium and more believable. Later you can swap
                these for your real project photos.
              </p>
            </div>

            <div className="gallery-grid">
              {gallery.map((src, index) => (
                <div key={index} className="gallery-card">
                  <img src={src} alt={`Marc Floors project ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow orange">Why Marc Floors</span>
              <h2>Not just another template contractor page.</h2>
              <p>
                This version is meant to feel more solid, more premium, and more like a company
                that clients trust with larger projects.
              </p>
            </div>

            <div className="cards three">
              <div className="info-card">
                <h3>Professional presentation</h3>
                <p>
                  Cleaner branding and stronger structure help the company look more trustworthy
                  before the first conversation even starts.
                </p>
              </div>

              <div className="info-card">
                <h3>Detail-focused work</h3>
                <p>
                  Floor prep, installation, transitions, and finish are positioned as part of the
                  value — not an afterthought.
                </p>
              </div>

              <div className="info-card">
                <h3>Lead-focused design</h3>
                <p>
                  The layout is built to push visitors toward calling, texting, and requesting an
                  estimate instead of just browsing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="section alt">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow orange">Reviews</span>
              <h2>A stronger trust section helps turn visits into calls.</h2>
              <p>
                Even before real client reviews are added, the structure already feels stronger and
                more credible.
              </p>
            </div>

            <div className="cards three">
              <div className="review-card">
                <div className="stars">★★★★★</div>
                <p>
                  Professional communication, clean finish, and excellent attention to detail from
                  start to finish.
                </p>
                <strong>Homeowner</strong>
              </div>

              <div className="review-card">
                <div className="stars">★★★★★</div>
                <p>
                  The work looked sharp, the schedule was clear, and the entire installation felt
                  organized and professional.
                </p>
                <strong>Residential Client</strong>
              </div>

              <div className="review-card">
                <div className="stars">★★★★★</div>
                <p>
                  Very solid craftsmanship. The final result looked premium and the process felt
                  well managed.
                </p>
                <strong>Client</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div>
              <span className="eyebrow orange-light">Contact Marc Floors</span>
              <h2>Ready to request your estimate?</h2>
              <p>
                Use the buttons below to call or text now. This final section is designed to push
                the visitor into action.
              </p>
            </div>

            <div className="contact-box">
              <a href="tel:+12797901575" className="contact-row dark">
                (279) 790-1575
              </a>

              <a href="sms:+12797901575" className="contact-row dark">
                Send a text message
              </a>

              <div className="contact-row dark">Sacramento, California</div>

              <a href="tel:+12797901575" className="button primary full">
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
