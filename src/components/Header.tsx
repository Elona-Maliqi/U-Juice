import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/menu", label: "Menu" },
  { to: "/offers", label: "Offers" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const languages = [
  { code: "en", short: "EN", label: "English" },
  { code: "de", short: "DE", label: "Deutsch" },
  { code: "fr", short: "FR", label: "Français" },
];

export default function Header() {
  const location = useLocation();
  const { lang, setLang } = useLanguage();

  return (
    <header className="uj-header">
      <div className="uj-header-logo">
        <span className="uj-logo-icon">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="15" fill="#ed6d4a"/>
            <path d="M11 20c0-6 5.5-10 10.5-10.5C22.2 17.2 17.3 21.3 11 20Z" stroke="#fff" strokeWidth="2" fill="none"/>
            <path d="M21 13c-2.5.5-6.68 2.7-8 7" stroke="#fff" strokeWidth="2" fill="none"/>
          </svg>
        </span>
        <span className="uj-logo-text">U-Juice</span>
      </div>
        <nav className="uj-header-nav">
            {navLinks.map(link => (
            <Link
                key={link.to}
                to={link.to}
                className={`uj-header-link${location.pathname === link.to ? " active" : ""}`}
            >
                {link.label}
            </Link>
            ))}
        </nav>
      
    </header>
  );
}