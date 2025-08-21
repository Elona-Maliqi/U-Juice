import React from "react";

export default function Contact() {
  return (
    <div className="contact-bg">
      {/* Decorative top wave */}
      <div className="contact-top-wave">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffe0c6" d="M0,40 C480,120 960,0 1440,60 L1440,0 L0,0Z" />
        </svg>
      </div>
      <div className="contact-content">
        <h1 className="contact-title">
          <span className="contact-title-main">Contact Us</span>
          <span className="contact-title-highlight">Get in touch, we're here for you!</span>
        </h1>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon contact-icon-green">
              {/* Sun Icon */}
              <svg width="40" height="40" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="14" fill="#fff" />
                <circle cx="20" cy="20" r="10" fill="#21c995" />
                <g stroke="#21c995" strokeWidth="2">
                  <line x1="20" y1="5" x2="20" y2="12" />
                  <line x1="20" y1="28" x2="20" y2="35" />
                  <line x1="5" y1="20" x2="12" y2="20" />
                  <line x1="28" y1="20" x2="35" y2="20" />
                  <line x1="10" y1="10" x2="15" y2="15" />
                  <line x1="25" y1="25" x2="30" y2="30" />
                  <line x1="10" y1="30" x2="15" y2="25" />
                  <line x1="30" y1="10" x2="25" y2="15" />
                </g>
              </svg>
            </div>
            <div className="contact-card-title">Opening Hours</div>
            <div className="contact-hours-row">
              <span className="contact-dot green"></span>
              Mon-Sat: 10:00-19:00
            </div>
            <div className="contact-hours-row">
              <span className="contact-dot red"></span>
              Sun: Closed
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon contact-icon-teal">
              {/* Location Icon */}
              <svg width="40" height="40" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="14" fill="#fff" />
                <path
                  d="M20 10c-5 0-9 4-9 9 0 6.4 7.2 12.8 8.3 13.6a1.5 1.5 0 0 0 1.4 0C21 31.8 28 25.4 28 19c0-5-4-9-8-9zm0 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                  fill="none"
                  stroke="#21d4c9"
                  strokeWidth="2"
                />
                <circle cx="20" cy="17" r="3" fill="#21d4c9" />
              </svg>
            </div>
            <div className="contact-card-title">Address</div>
            <div className="contact-address">
              Löwenstrasse 40<br />
              Zürich, Switzerland
            </div>
          </div>
          <div className="contact-card contact-card-wide">
            <div className="contact-icon contact-icon-facebook">
              {/* Facebook Icon */}
              <svg width="38" height="38" viewBox="0 0 38 38">
                <circle cx="19" cy="19" r="18" fill="#2563eb" />
                <path
                  d="M23 19h-2v7h-3v-7h-1v-3h1v-2c0-1.1.9-2 2-2h2v3h-2v1h2l-1 3z"
                  fill="#fff"
                />
              </svg>
            </div>
            <div className="contact-card-title">Follow Us</div>
            <a
              className="contact-fb-btn"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" style={{ marginRight: 8 }}>
                <path
                  d="M10 1.8c-4.5 0-8.2 3.7-8.2 8.2 0 4.1 3.1 7.5 7.1 8.1v-5.7h-2.1v-2.4h2.1v-1.8c0-2.1 1.2-3.2 3.1-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.3l-.4 2.4h-1.9v5.7c4-0.6 7.1-4 7.1-8.1 0-4.5-3.7-8.2-8.2-8.2z"
                  fill="#fff"
                />
              </svg>
              U-Juice Zürich
            </a>
          </div>
        </div>
        <div className="contact-map-container">
          {/* Google Maps Embed */}
          <iframe
            title="U-Juice Zürich Location"
            src="https://www.google.com/maps?q=Löwenstrasse+40,+Zürich,+Switzerland&output=embed"
            width="100%"
            height="310"
            style={{ border: 0, borderRadius: "1.2em", boxShadow: "0 4px 26px #21c99529" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* Decorative bottom wave */}
      <div className="contact-bottom-wave">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#b2f7ef" d="M0,30 C400,120 1040,0 1440,70 L1440,100 L0,100Z" />
        </svg>
      </div>
    </div>
  );
}