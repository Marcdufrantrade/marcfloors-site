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

      <a className="contact-main-phone" href="tel:+12797901575" onClick={trackContactClick}>
        (279) 790-1575
      </a>

      <a className="contact-email" href="mailto:info@marcfloors.com" onClick={trackContactClick}>
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
        <a className="call-button contact-action-button" href="tel:+12797901575" onClick={trackContactClick}>
          Call Now
        </a>
        <a className="contact-secondary-button" href="mailto:info@marcfloors.com" onClick={trackContactClick}>
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
