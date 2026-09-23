
import { useState } from "react";
import "./Navbar.css";

import { Phone, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/images/logo.png";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="main-navbar">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-logo-link"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="PTC Learning Institute"
            className="navbar-logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-menu">

          <Link
            to="/"
            className={`navbar-link ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`navbar-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            About Us
          </Link>

          <Link
            to="/programs"
            className={`navbar-link ${
              location.pathname === "/programs" ? "active" : ""
            }`}
          >
            Programs
          </Link>

          <Link
            to="/admissions"
            className={`navbar-link ${
              location.pathname === "/admissions" ? "active" : ""
            }`}
          >
            Admissions
          </Link>

          <Link
            to="/gallery"
            className={`navbar-link ${
              location.pathname === "/gallery" ? "active" : ""
            }`}
          >
            Gallery
          </Link>
        </div>

        {/* Desktop Right Side */}
        <div className="navbar-right">

          <a
            href="tel:+16509934185"
            className="navbar-phone"
          >
            <span className="navbar-contact-icon">
              <Phone size={14} />
            </span>

            (650) 993-4185
          </a>

          <Link
            to="/admissions"
            className="book-tour-button"
          >
            Book a Tour
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`mobile-navigation ${
          menuOpen ? "open" : ""
        }`}
      >

        <div className="mobile-navigation-links">

          <Link
            to="/"
            onClick={closeMenu}
            className={`mobile-nav-link ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className={`mobile-nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            About Us
          </Link>

          <Link
            to="/programs"
            onClick={closeMenu}
            className={`mobile-nav-link ${
              location.pathname === "/programs" ? "active" : ""
            }`}
          >
            Programs
          </Link>

          <Link
            to="/admissions"
            onClick={closeMenu}
            className={`mobile-nav-link ${
              location.pathname === "/admissions"
                ? "active"
                : ""
            }`}
          >
            Admissions
          </Link>

          <Link
            to="/gallery"
            onClick={closeMenu}
            className={`mobile-nav-link ${
              location.pathname === "/gallery"
                ? "active"
                : ""
            }`}
          >
            Gallery
          </Link>

        </div>

        {/* Mobile Contact */}
        <div className="mobile-navigation-bottom">

          <a
            href="tel:+16509934185"
            className="mobile-phone"
            onClick={closeMenu}
          >
            <span className="mobile-phone-icon">
              <Phone size={15} />
            </span>

            <span>(650) 993-4185</span>
          </a>

          <Link
            to="/admissions"
            className="mobile-book-tour"
            onClick={closeMenu}
          >
            Book a Tour
          </Link>

        </div>
      </div>
    </header>
  );
}

export default Navbar;