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
              <div className="brand-mark">
                <Image
                  src="/logo.png"
                  alt="Marc Floors"
                  width={260}
                  height={96}
                  priority
                  className="brand-logo"
                />
              </div>
            </Link>

            <nav className="main-nav">
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#gallery">Gallery</a>
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
            <span className="section-kicker">Marc Floors</span>
            <h1>Premium flooring installation with a strong, clean finish.</h1>
            <p className="hero-text">
              Professional hardwood, laminate, LVP and vinyl installation with
              detail-oriented execution, clean presentation and work built to
              inspire confidence from the first impression.
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
              <span>Professional Finish</span>
            </div>
          </div>
        </section>

        <section id="services" className="section section-light">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker dark-kicker">Services</span>
              <h2>Flooring work done with precision, presentation and reliability</h2>
              <p>
                Every project is approached with attention to finish quality,
                alignment, transitions and overall visual impact.
              </p>
            </div>

            <div className="services-grid">
              <article className="service-card">
                <h3>Hardwood Installation</h3>
                <p>
                  Nail down and glue down hardwood installation with proper
                  layout, clean transitions and a high-end finished result.
                </p>
              </article>

              <article className="service-card">
                <h3>Laminate Flooring</h3>
                <p>
                  Clean laminate installation with tight pattern flow, proper
                  spacing and sharp final presentation.
                </p>
              </article>

              <article className="service-card">
                <h3>LVP / Vinyl Flooring</h3>
                <p>
                  Modern durable flooring installed with careful execution,
                  strong aesthetics and attention to detail.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="section section-dark about-section">
          <div className="container about-grid">
            <div className="about-content">
              <span className="section-kicker">About Marc Floors</span>
              <h2>A flooring company focused on workmanship, trust and a professional result</h2>
              <p>
                Marc Floors is built around quality installation and strong job
                presentation. The goal is simple: deliver flooring work that
                looks clean, feels solid and gives the client confidence in the
                result.
              </p>
              <p>
                From hardwood and laminate to LVP and vinyl, each project is
                handled with care for layout, finish details and overall visual
                impact, because flooring changes the entire impression of a
                space.
              </p>

              <div className="about-points">
                <div className="about-point">
                  <strong>Clean execution</strong>
                  <span>Strong attention to finish and detail.</span>
                </div>
                <div className="about-point">
                  <strong>Reliable communication</strong>
                  <span>Direct contact and clear project coordination.</span>
                </div>
                <div className="about-point">
                  <strong>Client-ready presentation</strong>
                  <span>Work that looks professional from first glance.</span>
                </div>
              </div>
            </div>

            <div className="about-side-card">
              <span className="mini-label">Why clients choose Marc Floors</span>
              <ul>
                <li>Professional hardwood, laminate, LVP and vinyl installation</li>
                <li>Careful layout and clean final finish</li>
                <li>Direct phone contact for quotes and scheduling</li>
                <li>Strong visual standards for every completed project</li>
              </ul>
              <a className="call-button about-call" href="tel:+12797901575">
                Call (279) 790-1575
              </a>
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="container">
            <div className="section-heading gallery-heading">
              <span className="section-kicker dark-kicker">Gallery</span>
              <h2>An elegant presentation of recent flooring work</h2>
              <p>
                Click any project to open the full image. The first row is
                featured larger to give the section a stronger presentation.
              </p>
            </div>

            <div className="gallery-masonry">
              {galleryImages.map((image, index) => {
                const featured =
                  index === 0 || index === 5 || index === 10 || index === 15;

                return (
                  <button
                    key={image.src}
                    type="button"
                    className={`gallery-card ${featured ? "featured" : ""}`}
                    onClick={() => setSelectedIndex(index)}
                    aria-label={`Open image ${index + 1}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={900}
                      className="gallery-image"
                    />
                    <span className="gallery-card-overlay">
                      <span className="gallery-card-label">View Project</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="section section-light">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-copy">
                <span className="section-kicker dark-kicker">Contact</span>
                <h2>Ready to talk about your flooring project?</h2>
                <p>
                  Marc Floors provides professional flooring installation with a
                  clean and dependable approach. Call directly to discuss your
                  project, ask questions or request a quote.
                </p>
                <p>
                  Whether the job is hardwood, laminate, LVP or vinyl, the focus
                  stays the same: quality workmanship, clean presentation and a
                  result that feels professionally done.
                </p>
              </div>

              <div className="contact-card">
                <h3>Get in touch</h3>
                <p>Call or text directly for quotes and scheduling.</p>
                <a className="call-button contact-button" href="tel:+12797901575">
                  (279) 790-1575
                </a>

                <div className="contact-lines">
                  <div>
                    <strong>Company</strong>
                    <span>Marc Floors</span>
                  </div>
                  <div>
                    <strong>Specialty</strong>
                    <span>Hardwood, Laminate, LVP & Vinyl</span>
                  </div>
                  <div>
                    <strong>Service</strong>
                    <span>Professional installation and finish work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container footer-inner">
            <div className="footer-brand">
              <div className="footer-logo-wrap">
                <Image
                  src="/logo.png"
                  alt="Marc Floors"
                  width={180}
                  height={64}
                  className="footer-logo"
                />
              </div>
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
