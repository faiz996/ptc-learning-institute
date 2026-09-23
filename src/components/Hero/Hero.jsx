import "./Hero.css";

import heroImage from "../../assets/images/hero.png";
import whatsappIcon from "../../assets/images/whatsapp.png";

function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-container">
        <div className="hero-content">

          {/* Badge */}
          <div className="hero-badge">
            NOW ENROLLING FOR SUMMER 2026
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            <span className="hero-title-white">
              Building Tomorrow’s
            </span>

            <span className="hero-title-orange">
              Leaders Today!
            </span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            A safe, nurturing preschool in Daly City where your child
            <br className="hero-desktop-break" />
            develops confidence, curiosity, and a lifelong love of learning.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href="/admissions"
              className="hero-button hero-button-primary"
            >
              <span>Book a Tour</span>
              <span className="hero-arrow">→</span>
            </a>

            <a
              href="/programs"
              className="hero-button hero-button-secondary"
            >
              Explore Programs
            </a>

          </div>

        </div>
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/1234567890"
        className="hero-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </section>
  );
}

export default Hero;