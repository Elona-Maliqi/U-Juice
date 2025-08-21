import React from "react";

export default function Offers() {
  return (
    <div className="offers-bg">
      {/* Decorative top wave */}
      <div className="offers-top-wave">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffe0c6" d="M0,40 C480,120 960,0 1440,60 L1440,0 L0,0Z" />
        </svg>
      </div>
      <section className="offers-hero">
        <h1 className="offers-title">
          <span className="offers-title-main">Special Offers</span>
          <span className="offers-title-highlight">Fresh Deals. Bold Savings.</span>
        </h1>
      </section>
      <div className="offers-main-card">
        <div className="offers-hot">HOT!</div>
        <div className="offers-star">
          {/* Star Icon */}
          <svg width="48" height="48" viewBox="0 0 48 48">
            <polygon points="24,6 29.09,18.26 42,18.27 31,26.14 35.18,38.02 24,31 12.82,38.02 17,26.14 6,18.27 18.91,18.26" fill="none" stroke="#ffd600" strokeWidth="2.5" />
          </svg>
        </div>
        <div className="offers-main">
          <h2 className="offers-discount">60%–100% Off for Service Staff</h2>
          <p className="offers-desc">
            We appreciate our service industry workers! Show your service staff ID for exclusive discounts.
          </p>
          <div className="offers-hours">
            <div className="offers-hours-title">Opening Hours</div>
            <div className="offers-hours-row">
              <span className="offers-dot green"></span> Mon-Sat: 10:00–19:00
            </div>
            <div className="offers-hours-row">
              <span className="offers-dot red"></span> Sun: Closed
            </div>
          </div>
          <button className="offers-btn">Show Your Service Staff ID!</button>
        </div>
      </div>
      {/* Decorative bottom wave */}
      <div className="offers-bottom-wave">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#b2f7ef" d="M0,30 C400,120 1040,0 1440,70 L1440,100 L0,100Z" />
        </svg>
      </div>
    </div>
  );
}