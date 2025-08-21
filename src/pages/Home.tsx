import React from "react";
import { Link } from "react-router-dom";
const smoothieImg = "https://kjwxzycofsjiqsepgfxx.supabase.co/storage/v1/object/public/Images/home-image-2.jpg";
const fruitBg = "https://www.transparenttextures.com/patterns/fruit.png";
const heroImg = "https://kjwxzycofsjiqsepgfxx.supabase.co/storage/v1/object/public/Images/hero-img-1-2.jpg";

export default function Home() {
  return (
    <div className="home-bg">
      <div className="home-hero-img-section">
        <img src={heroImg} alt="U-Juice Hero" className="home-hero-img-bg" />
        <div className="home-hero-img-title">
          <h1>Welcome To U-Juice!</h1>
          <span className="hero-arrow">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <g>
                <circle cx="20" cy="20" r="19" fill="#fff6e3" />
                <path d="M20 13v13M15 23l5 5 5-5" stroke="#f89b37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </g>
            </svg>
          </span>
        </div>
      </div>
      <div className="home-decor-bg">
        <img src={fruitBg} alt="" className="home-fruit-bg" />
      </div>
      <section className="home-hero">
        <div className="home-hero-text">
          <h1 className="home-title">
            <span className="home-title-main">Taste the Summer</span>
            <span className="home-title-sparkle">with U-Juice!</span>
          </h1>
          <p className="home-desc">
            Fresh, juicy, and bursting with flavor.<br />
            Dive into our world of <span className="highlight">natural smoothies</span> and <span className="highlight">ice-cold juices</span> made from the best seasonal fruits. <br />
            <span role="img" aria-label="sun"></span> Chill, sip, and feel the summer vibes in every glass.
          </p>
          <div className="home-btn-row">
            <Link to="/menu" className="home-btn home-btn-main">View Menu</Link>
            <Link to="/offers" className="home-btn home-btn-alt">Summer Offers</Link>
          </div>
        </div>
        <div className="home-hero-img">
          <img src={smoothieImg} alt="Colorful Summer Smoothie" className="home-smoothie-img" />
        </div>
      </section>
      <section className="home-featured">
        <div className="home-feature-card">
          <div className="home-feature-icon sun">
            <svg width="34" height="34" viewBox="0 0 34 34">
              <circle cx="17" cy="17" r="9" fill="#ffe066" />
              <g stroke="#f8b400" strokeWidth="2">
                <line x1="17" y1="2" x2="17" y2="9" />
                <line x1="17" y1="25" x2="17" y2="32" />
                <line x1="2" y1="17" x2="9" y2="17" />
                <line x1="25" y1="17" x2="32" y2="17" />
                <line x1="7" y1="7" x2="12" y2="12" />
                <line x1="22" y1="22" x2="27" y2="27" />
                <line x1="7" y1="27" x2="12" y2="22" />
                <line x1="27" y1="7" x2="22" y2="12" />
              </g>
            </svg>
          </div>
          <div className="home-feature-title">100% Natural</div>
          <div className="home-feature-desc">No syrups, no concentrates. Just pure fruit and fun.</div>
        </div>
        <div className="home-feature-card">
          <div className="home-feature-icon ice">
            <svg width="34" height="34" viewBox="0 0 34 34">
              <ellipse cx="17" cy="17" rx="8" ry="10" fill="#b2f7ef" />
              <rect x="13" y="8" width="8" height="18" rx="4" fill="#21d4c9" opacity="0.55"/>
            </svg>
          </div>
          <div className="home-feature-title">Ice Cold</div>
          <div className="home-feature-desc">Perfectly chilled for hot summer days.</div>
        </div>
        <div className="home-feature-card">
          <div className="home-feature-icon fruit">
            <svg width="34" height="34" viewBox="0 0 34 34">
              <circle cx="17" cy="17" r="9" fill="#ffb3c6" />
              <ellipse cx="17" cy="12" rx="4" ry="2.5" fill="#f559a7" />
              <ellipse cx="17" cy="22" rx="4" ry="2.5" fill="#f89b37" />
            </svg>
          </div>
          <div className="home-feature-title">Seasonal & Local</div>
          <div className="home-feature-desc">Always using the freshest fruits from local farms.</div>
        </div>
      </section>
      <section className="home-social">
        <span className="home-social-title">Share the Summer!</span>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="home-social-btn"
        >
          <svg width="22" height="22" viewBox="0 0 22 22">
            <circle cx="11" cy="11" r="10" fill="#2563eb" />
            <path
              d="M14 11h-1v4h-2v-4h-1v-2h1V8c0-.9.7-1.7 1.7-1.7H14v2h-1c-.3 0-.3.2-.3.3V9h1l-.2 2z"
              fill="#fff"
            />
          </svg>
          U-Juice Zürich
        </a>
      </section>
    </div>
  );
}