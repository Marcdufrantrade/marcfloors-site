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
              <Image
                src="/logo.png"
                alt="Marc Floors"
                width={220}
                height={72}
                priority
                className="brand-logo"
              />
            </Link>

            <nav className="main-nav">
              <a href="#services">Services</a>
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
            <div className="eyebrow">Licensed flooring installation</div>
            <h1>Premium flooring work with a clean, professional finish.</h1>
            <p className="hero-text">
              Marc Floors delivers hardwood, laminate, LVP and vinyl
              installation with the level of detail clients expect when the job
              needs to look right from day one.
            </p>

            <div className="hero-actions">
              <a className="call-button hero-btn" href="tel:+12797901575">
                Call Now
              </a>
              <a className="ghost-button hero-btn" href="#gallery">
                View Recent Work
              </a>
            </div>

            <div className="hero-points">
              <span>Hardwood</span>
              <span>Laminate</span>
              <span>LVP</span>
              <span>Vinyl</span>
              <span>Clean finish</span>
            </div>
          </div>
        </section>

        <section id="services" className="section section-light">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Services</span>
              <h2>Professional installation built for real homes and real clients</h2>
              <p>
                Strong workmanship, clean execution and a reliable process from
                start to finish.
              </p>
            </div>

            <div className="services-grid">
              <article className="service-card">
                <h3>Hardwood Installation</h3>
                <p>
                  Nail down and glue down hardwood installation with careful
                  layout, clean transitions and a high-end finished look.
                </p>
              </article>

              <article className="service-card">
                <h3>Laminate Flooring</h3>
                <p>
                  Precise laminate installation with tight alignment, proper
                  spacing and a clean professional result.
                </p>
              </article>

              <article className="service-card">
                <h3>LVP / Vinyl Flooring</h3>
                <p>
                  Durable modern flooring installed with attention to detail,
                  finish quality and jobsite cleanliness.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="gallery" className="section section-dark">
          <div className="container">
            <div className="section-heading section-heading-dark">
              <span className="section-kicker">Gallery</span>
              <h2>Recent Marc Floors projects</h2>
              <p>Click any image to open it full size.</p>
            </div>

            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  className="gallery-card"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`Open image ${index + 1}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={900}
                    height={700}
                    className="gallery-image"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section section-light">
          <div className="container">
            <div className="contact-box">
              <span className="section-kicker">Contact</span>
              <h2>Ready for a quote?</h2>
              <p>
                Call or text directly for flooring installation and project
                inquiries.
              </p>
              <a className="call-button contact-button" href="tel:+12797901575">
                (279) 790-1575
              </a>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container footer-inner">
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

          <div
            className="lightbox-frame"
            onClick={(e) => e.stopPropagation()}
          >
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
