import React from "react";

export default function Footer() {
  return (
    <footer className="uj-footer">
      <div className="uj-footer-content">
        <div className="uj-footer-section uj-footer-logo">
          <div className="uj-footer-logo-row">
            <span className="uj-logo-icon">
              {/* Leaf Icon */}
              <svg width="32" height="32" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="15" fill="#ed6d4a"/>
                <path d="M11 20c0-6 5.5-10 10.5-10.5C22.2 17.2 17.3 21.3 11 20Z" stroke="#fff" strokeWidth="2" fill="none"/>
                <path d="M21 13c-2.5.5-6.68 2.7-8 7" stroke="#fff" strokeWidth="2" fill="none"/>
              </svg>
            </span>
            <span className="uj-logo-text">U-Juice</span>
          </div>
          <div className="uj-footer-desc">
            Fresh, natural, delicious smoothies and juices made from the finest ingredients in the heart of Zürich.
          </div>
        </div>
        <div className="uj-footer-section uj-footer-hours">
          <div className="uj-footer-title">Opening Hours</div>
          <div className="uj-footer-row">
            <span className="uj-dot green"></span>
            Mon-Sat: 10:00-19:00
          </div>
          <div className="uj-footer-row">
            <span className="uj-dot red"></span>
            Sun: Closed
          </div>
        </div>
        <div className="uj-footer-section uj-footer-contact">
          <div className="uj-footer-title">Contact</div>
          <div className="uj-footer-contact-row">
            <span className="uj-footer-contact-icon">
              {/* Location Pin */}
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path
                  d="M9 2a6 6 0 0 0-6 6c0 4.2 6 8 6 8s6-3.8 6-8a6 6 0 0 0-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  fill="#f89b37"
                />
              </svg>
            </span>
            Löwenstrasse 40<br />
            Zürich, Switzerland
          </div>
        </div>
      </div>
      <hr className="uj-footer-divider" />
      <div className="uj-footer-copyright">
        © 2024 U-Juice. All rights reserved.
      </div>
    </footer>
  );
}