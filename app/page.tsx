import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="header">
        <div className="container nav">
          <div className="logo">
            <Image
              src="/logo.png"
              alt="Marc Floors"
              width={160}
              height={50}
              priority
            />
          </div>
          <nav>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
            <a href="tel:12797901575" className="btn-primary">
              Call Now
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="overlay">
          <div className="container hero-content">
            <h1>Professional Flooring Installation</h1>
            <p>
              Hardwood, Laminate, LVP & Vinyl — Precision work, clean finish,
              reliable service.
            </p>
            <div className="hero-buttons">
              <a href="tel:12797901575" className="btn-primary">
                Call (279) 790-1575
              </a>
              <a href="#contact" className="btn-secondary">
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="grid-3">
            <div className="card">
              <h3>Hardwood</h3>
              <p>Glue down and nail down installation with precision finish.</p>
            </div>
            <div className="card">
              <h3>Laminate</h3>
              <p>Clean click installation with perfect alignment.</p>
            </div>
            <div className="card">
              <h3>LVP / Vinyl</h3>
              <p>Durable, modern flooring installed the right way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section dark">
        <div className="container">
          <h2>Recent Work</h2>
          <div className="gallery">
            <Image src="/images/floor1.jpg" alt="" width={400} height={300} />
            <Image src="/images/floor2.jpg" alt="" width={400} height={300} />
            <Image src="/images/floor3.jpg" alt="" width={400} height={300} />
            <Image src="/images/floor4.jpg" alt="" width={400} height={300} />
            <Image src="/images/floor5.jpg" alt="" width={400} height={300} />
            <Image src="/images/floor6.jpg" alt="" width={400} height={300} />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container contact">
          <h2>Get a Quote</h2>
          <p>Call or text for fast response</p>

          <a href="tel:12797901575" className="btn-primary large">
            (279) 790-1575
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Marc Floors. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
