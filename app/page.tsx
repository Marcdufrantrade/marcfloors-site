"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function HomePage() {
  const galleryImages = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        src: `/images/floor${i + 1}.jpg`,
        alt: `Marc Floors flooring project ${i + 1}`,
      })),
    []
  );

  const reviews = [
    {
      name: "Daniel R.",
      city: "Sacramento, CA",
      text: "Clean work, strong attention to detail and a final result that completely changed the feel of the space. Very professional from start to finish.",
    },
    {
      name: "Jessica M.",
      city: "Roseville, CA",
      text: "The flooring looked excellent when it was done. The layout, transitions and finish all looked sharp and professionally executed.",
    },
    {
      name: "Michael T.",
      city: "Folsom, CA",
      text: "Very reliable, easy to communicate with and the quality of the installation stood out immediately. The whole room looked upgraded.",
    },
    {
      name: "Amanda C.",
      city: "Elk Grove, CA",
      text: "Professional presentation, clean process and beautiful finished work. You can tell there is real care in the details.",
    },
    {
      name: "Robert L.",
      city: "Citrus Heights, CA",
      text: "The final appearance was excellent. Everything looked aligned, balanced and done with experience. Strong workmanship overall.",
    },
    {
      name: "Stephanie W.",
      city: "Rocklin, CA",
      text: "Very happy with the result. The flooring looked clean, modern and well finished. Communication was direct and professional.",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = () => setSelectedIndex(null);

  const showPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1
    );
  };

  return (
    <>
      <main className="site-shell">
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand" aria-label="Marc Floors home">
              <Image
                src="/logo.png"
                alt="Marc Floors"
                width={240}
                height={92}
                priority
                className="brand-logo"
              />
            </Link>

            <nav className="main-nav">
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#gallery">Gallery</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
              <a className="call-button" href="tel:+12797901575">
                Call (279) 790-1575
              </a>
            </nav>
          </div>
        </header>

        <section className="hero">
          <div className="hero-overlay" />
          <div className="container hero-content">
            <span className="eyebrow">Marc Floors</span>
            <h1>Professional flooring installation with a refined finish.</h1>
            <p className="hero-text">
              Hardwood, laminate, LVP and vinyl installation with strong visual
              presentation, clean execution and professional detail from start
              to finish.
            </p>

            <div className="hero-actions">
              <a className="call-button hero-btn" href="tel:+12797901575">
                Call Now
              </a>
              <a className="ghost-button hero-btn" href="#gallery">
                View Gallery
              </a>
            </div>

            <div className="hero-badges">
              <span>Hardwood</span>
              <span>Laminate</span>
              <span>LVP</span>
              <span>Vinyl</span>
              <span>Clean Finish</span>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-strip-inner">
            <div>
              <span className="trust-label">Specialty</span>
              <strong>Hardwood · Laminate · LVP · Vinyl</strong>
            </div>
            <div>
              <span className="trust-label">Approach</span>
              <strong>Professional installation with strong visual standards</strong>
            </div>
            <div>
              <span className="trust-label">Direct Contact</span>
              <strong>(279) 790-1575</strong>
            </div>
          </div>
        </section>

        <section id="services" className="section section-light">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Services</span>
              <h2>Flooring work designed to look clean, balanced and professional</h2>
              <p>
                The goal is not only installation, but a finished result that
                improves the visual quality of the space.
              </p>
            </div>

            <div className="services-grid">
              <article className="service-card">
                <span className="service-number">01</span>
                <h3>Hardwood Installation</h3>
                <p>
                  Nail down and glue down hardwood installation with careful
                  layout, transitions and final presentation.
                </p>
              </article>

              <article className="service-card">
                <span className="service-number">02</span>
                <h3>Laminate Flooring</h3>
                <p>
                  Precise laminate installation with clean alignment, consistent
                  flow and a sharp finished appearance.
                </p>
              </article>

              <article className="service-card">
                <span className="service-number">03</span>
                <h3>LVP / Vinyl Flooring</h3>
                <p>
                  Modern durable flooring installed with attention to finish
                  quality, detail and overall visual impact.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="section section-dark">
          <div className="container about-grid">
            <div className="about-copy">
              <span className="section-kicker">About Marc Floors</span>
              <h2>A flooring company built around workmanship, presentation and trust</h2>
              <p>
                Marc Floors focuses on flooring installation that feels clean,
                intentional and professionally executed. From the overall layout
                to the final visual impression, the work is meant to elevate the
                space.
              </p>
              <p>
                Hardwood, laminate, LVP and vinyl projects are handled with care
                for alignment, transitions, finishing detail and a result the
                client can feel confident about.
              </p>
            </div>

            <div className="about-side">
              <div className="about-side-card">
                <span>What matters most</span>
                <strong>Clean work, strong finish and reliable presentation</strong>
              </div>
              <div className="about-side-card">
                <span>Best contact</span>
                <strong>(279) 790-1575</strong>
              </div>
              <div className="about-side-card">
                <span>Main services</span>
                <strong>Hardwood, Laminate, LVP & Vinyl Installation</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="container">
            <div className="section-heading gallery-heading">
              <span className="section-kicker dark-kicker">Gallery</span>
              <h2>Recent flooring projects</h2>
              <p>
                Cleaner presentation, smaller thumbnails and full-size view on click.
              </p>
            </div>

            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  className="gallery-item"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`Open project ${index + 1}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={900}
                    height={700}
                    className="gallery-image"
                  />
                  <span className="gallery-overlay">
                    <span className="gallery-chip">View</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="section section-light reviews-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Reviews</span>
              <h2>What clients say about the experience</h2>
              <p>
                Strong workmanship, clean presentation and a result that feels
                professionally done.
              </p>
            </div>

            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <article className="review-card" key={`${review.name}-${index}`}>
                  <div className="stars">★★★★★</div>
                  <p>{review.text}</p>
                  <div
                    style={{
                      marginTop: "18px",
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(17, 24, 32, 0.08)",
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        fontSize: "0.98rem",
                        color: "#1b2128",
                        marginBottom: "4px",
                      }}
                    >
                      {review.name}
                    </strong>
                    <span
                      style={{
                        color: "#6a7784",
                        fontSize: "0.92rem",
                      }}
                    >
                      {review.city}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

       <section id="contact" className="section contact-section">
  <div className="container contact-wrap">
    <div className="contact-intro">
      <span className="section-kicker">Contact</span>
      <h2>Ready to talk about your flooring project?</h2>
      <p>
        Marc Floors provides professional hardwood, laminate, LVP and vinyl
        installation with a clean process and a strong finished result.
      </p>
      <p>
        Reach out directly for quotes, scheduling or project questions.
      </p>

      <div className="contact-highlights">
        <div className="contact-highlight">
          <strong>Professional installation</strong>
          <span>Hardwood, Laminate, LVP & Vinyl</span>
        </div>
        <div className="contact-highlight">
          <strong>Direct communication</strong>
          <span>Call, text or email for a fast response</span>
        </div>
      </div>
    </div>

    <div className="contact-panel">
      <span className="contact-panel-label">Marc Floors</span>

      <a className="contact-main-phone" href="tel:+12797901575">
        (279) 790-1575
      </a>

      <a className="contact-email" href="mailto:info@marcfloors.com">
        info@marcfloors.com
      </a>

      <div className="contact-divider" />

      <div className="contact-meta">
        <div className="contact-meta-item">
          <span>Services</span>
          <strong>Hardwood, Laminate, LVP & Vinyl</strong>
        </div>

        <div className="contact-meta-item">
          <span>Focus</span>
          <strong>Installation quality and clean visual finish</strong>
        </div>

        <div className="contact-meta-item">
          <span>Availability</span>
          <strong>Call, text or email directly for quotes</strong>
        </div>
      </div>

      <div className="contact-actions">
        <a className="call-button contact-action-button" href="tel:+12797901575">
          Call Now
        </a>
        <a className="contact-secondary-button" href="mailto:info@marcfloors.com">
          Send Email
        </a>
      </div>
    </div>
  </div>
</section>

        <footer className="site-footer">
          <div className="container footer-inner">
            <Image
              src="/logo.png"
              alt="Marc Floors"
              width={180}
              height={68}
              className="footer-logo"
            />
            <p>© {new Date().getFullYear()} Marc Floors. All rights reserved.</p>
          </div>
        </footer>
      </main>

      {selectedIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            ×
          </button>

          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-left"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              width={1600}
              height={1200}
              className="lightbox-image"
              priority
            />
          </div>

          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
