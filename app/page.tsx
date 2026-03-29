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
              <h2>The kind of result clients want to see</h2>
              <p>
                Professional presentation, clean execution and a finished space
                that feels elevated.
              </p>
            </div>

            <div className="reviews-grid">
              <article className="review-card">
                <div className="stars">★★★★★</div>
                <p>
                  Clean work and strong attention to detail. The final look made
                  the entire space feel more finished and more valuable.
                </p>
              </article>

              <article className="review-card">
                <div className="stars">★★★★★</div>
                <p>
                  Professional communication, dependable process and a result
                  that looked sharp from the first impression.
                </p>
              </article>

              <article className="review-card">
                <div className="stars">★★★★★</div>
                <p>
                  The difference is visible in the alignment, finish quality and
                  overall appearance of the flooring work.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="section-kicker">Contact</span>
              <h2>Ready to talk about your flooring project?</h2>
              <p>
                Marc Floors provides professional hardwood, laminate, LVP and
                vinyl installation with a clean process and a strong finished
                result.
              </p>
              <p>
                Call or text directly for quotes, project questions and
                scheduling.
              </p>
            </div>

            <div className="contact-card">
              <h3>Marc Floors</h3>
              <a className="contact-phone" href="tel:+12797901575">
                (279) 790-1575
              </a>

              <div className="contact-list">
                <div>
                  <strong>Services</strong>
                  <span>Hardwood, Laminate, LVP & Vinyl</span>
                </div>
                <div>
                  <strong>Focus</strong>
                  <span>Installation quality and clean visual finish</span>
                </div>
                <div>
                  <strong>Availability</strong>
                  <span>Call or text directly for quotes</span>
                </div>
              </div>

              <a className="call-button contact-button" href="tel:+12797901575">
                Call Now
              </a>
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
