"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function HomePage() {
  const galleryImages = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        src: `/images/floor${i + 1}.jpg`,
        alt: `Marc Floors project ${i + 1}`,
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
              <div className="brand-frame">
                <Image
                  src="/logo.png"
                  alt="Marc Floors"
                  width={260}
                  height={86}
                  priority
                  className="brand-logo"
                />
              </div>
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
          <div className="hero-bg" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Marc Floors</span>
              <h1>Flooring installation with a premium finish and a stronger visual standard.</h1>
              <p className="hero-text">
                Professional hardwood, laminate, LVP and vinyl installation
                designed to make the space feel cleaner, sharper and more
                valuable from the first impression.
              </p>

              <div className="hero-actions">
                <a className="call-button hero-btn" href="tel:+12797901575">
                  Call Now
                </a>
                <a className="ghost-button hero-btn" href="#gallery">
                  View Projects
                </a>
              </div>

              <div className="hero-tags">
                <span>Hardwood</span>
                <span>Laminate</span>
                <span>LVP</span>
                <span>Vinyl</span>
                <span>Professional Finish</span>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-panel-image">
                <Image
                  src="/images/hero-floor.jpg"
                  alt="Professional flooring installation by Marc Floors"
                  width={900}
                  height={1100}
                  priority
                  className="hero-panel-photo"
                />
              </div>

              <div className="hero-panel-card hero-panel-card-top">
                <span className="mini-kicker">Quality Focus</span>
                <strong>Clean layout. Strong finish. Better presentation.</strong>
              </div>

              <div className="hero-panel-card hero-panel-card-bottom">
                <div>
                  <span className="mini-kicker">Direct contact</span>
                  <strong>(279) 790-1575</strong>
                </div>
                <a href="#contact">Request a quote</a>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-strip-inner">
            <div>
              <span className="trust-label">Installation Types</span>
              <strong>Hardwood · Laminate · LVP · Vinyl</strong>
            </div>
            <div>
              <span className="trust-label">Approach</span>
              <strong>Clean execution and strong visual finish</strong>
            </div>
            <div>
              <span className="trust-label">Contact</span>
              <strong>(279) 790-1575</strong>
            </div>
          </div>
        </section>

        <section id="services" className="section section-light">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Services</span>
              <h2>Professional flooring work built around finish quality</h2>
              <p>
                Every project should feel clean, balanced and professionally
                completed, not merely installed.
              </p>
            </div>

            <div className="services-grid">
              <article className="service-card">
                <div className="service-number">01</div>
                <h3>Hardwood Installation</h3>
                <p>
                  Nail down and glue down hardwood with careful layout,
                  transitions and final presentation.
                </p>
              </article>

              <article className="service-card">
                <div className="service-number">02</div>
                <h3>Laminate Flooring</h3>
                <p>
                  Tight alignment, clean pattern flow and a finished look that
                  feels sharp and intentional.
                </p>
              </article>

              <article className="service-card">
                <div className="service-number">03</div>
                <h3>LVP / Vinyl Flooring</h3>
                <p>
                  Modern durable flooring installed with attention to detail,
                  finish consistency and overall aesthetics.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="section section-dark">
          <div className="container about-grid">
            <div className="about-copy">
              <span className="section-kicker">About Marc Floors</span>
              <h2>A flooring company centered on workmanship, cleanliness and trust.</h2>
              <p>
                Marc Floors is built around the idea that flooring changes the
                entire perception of a space. The work should feel precise,
                visually clean and professionally finished from edge to edge.
              </p>
              <p>
                From hardwood and laminate to LVP and vinyl, each project is
                approached with care for layout, transitions, alignment and the
                overall look of the final result.
              </p>
            </div>

            <div className="about-aside">
              <div className="about-stat">
                <span>What clients want</span>
                <strong>Work that looks high-end, not generic</strong>
              </div>
              <div className="about-stat">
                <span>What Marc Floors delivers</span>
                <strong>Clean execution and stronger visual presentation</strong>
              </div>
              <div className="about-stat">
                <span>Best contact</span>
                <strong>(279) 790-1575</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="container">
            <div className="section-heading gallery-heading">
              <span className="section-kicker dark-kicker">Gallery</span>
              <h2>Selected flooring projects</h2>
              <p>
                A cleaner, more editorial presentation. Click any image to open
                it full size.
              </p>
            </div>

            <div className="gallery-grid">
              {galleryImages.map((image, index) => {
                const layoutClass =
                  index === 0 || index === 7 || index === 14
                    ? "gallery-item wide"
                    : index === 3 || index === 11 || index === 18
                    ? "gallery-item tall"
                    : "gallery-item";

                return (
                  <button
                    key={image.src}
                    type="button"
                    className={layoutClass}
                    onClick={() => setSelectedIndex(index)}
                    aria-label={`Open project ${index + 1}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={900}
                      className="gallery-image"
                    />
                    <span className="gallery-overlay">
                      <span className="gallery-chip">View Project</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="reviews" className="section section-light reviews-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Reviews</span>
              <h2>The kind of experience clients expect</h2>
              <p>
                This section brings back the trust layer the site needed,
                without looking like a cheap template.
              </p>
            </div>

            <div className="reviews-grid">
              <article className="review-card">
                <div className="stars">★★★★★</div>
                <p>
                  Clean work, strong attention to detail and a finished result
                  that makes the entire space feel elevated.
                </p>
              </article>

              <article className="review-card">
                <div className="stars">★★★★★</div>
                <p>
                  Professional communication, dependable scheduling and a final
                  presentation that feels polished and client-ready.
                </p>
              </article>

              <article className="review-card">
                <div className="stars">★★★★★</div>
                <p>
                  The difference is visible in the layout, the finish and the
                  overall quality of the completed flooring work.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="section-kicker">Contact</span>
              <h2>Ready to discuss your project?</h2>
              <p>
                Marc Floors provides professional hardwood, laminate, LVP and
                vinyl installation with a clean process and a stronger finish.
              </p>
              <p>
                Call or text directly for quotes, scheduling and project
                questions.
              </p>
            </div>

            <div className="contact-card">
              <h3>Marc Floors</h3>
              <a className="contact-phone" href="tel:+12797901575">
                (279) 790-1575
              </a>
              <div className="contact-list">
                <div>
                  <strong>Specialty</strong>
                  <span>Hardwood, Laminate, LVP & Vinyl</span>
                </div>
                <div>
                  <strong>Focus</strong>
                  <span>Professional installation and finish quality</span>
                </div>
                <div>
                  <strong>Best way to reach</strong>
                  <span>Call or text directly</span>
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
            <div className="footer-brand">
              <Image
                src="/logo.png"
                alt="Marc Floors"
                width={190}
                height={64}
                className="footer-logo"
              />
            </div>
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
