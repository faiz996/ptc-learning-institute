import React from "react";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";

import "./Footer.css";

// Import your logo images
import ptLogo from "../../assets/images/logo.png";
import wonderlandLogo from "../../assets/images/wonderland-logo.png";
import glassKidsLogo from "../../assets/images/glas-kids-logo.png";
import instituteLogo from "../../assets/images/ptc-institute-logo.png";

function Footer() {
  return (
    <footer className="pt-footer">

      {/* ================= MAIN FOOTER ================= */}

      <div className="footer-container">

        {/* ================= LOGOS ================= */}

        <div className="footer-brand">

          <div className="footer-logos">

            <img
              src={ptLogo}
              alt="PT Learning Institute"
              className="footer-logo footer-logo-main"
            />

            <img
              src={wonderlandLogo}
              alt="Wonderland Entertainment Games"
              className="footer-logo footer-logo-wonderland"
            />

            <img
              src={glassKidsLogo}
              alt="Glass Kids"
              className="footer-logo footer-logo-glass"
            />

            <img
              src={instituteLogo}
              alt="PT Learning Institute logo"
              className="footer-logo footer-logo-institute"
            />

          </div>

        </div>


        {/* ================= QUICK LINKS ================= */}

        <div className="footer-column footer-links-column">

          <h3 className="footer-heading">
            <span className="footer-heading-dot"></span>
            Quick Links
          </h3>

          <ul className="footer-links">

            <li>
              <a href="/">› Home</a>
            </li>

            <li>
              <a href="/about">› About Us</a>
            </li>

            <li>
              <a href="/programs">› Programs</a>
            </li>

            <li>
              <a href="/admission">› Admission</a>
            </li>

            <li>
              <a href="/gallery">› Gallery</a>
            </li>

            <li>
              <a href="/contact">› Contact</a>
            </li>

          </ul>

        </div>


        {/* ================= HOURS & LOCATION ================= */}

        <div className="footer-column footer-hours-column">

          <h3 className="footer-heading">
            <span className="footer-heading-dot"></span>
            Hours &amp; Location
          </h3>


          {/* Opening hours card */}

          <div className="footer-hours-card">

            <div className="footer-hours-label">

              <Clock size={16} />

              <span>Monday - Friday</span>

            </div>

            <p className="footer-hours-time">
              7:30 AM – 6:00 PM
            </p>

            <p className="footer-hours-note">
              Extended wrap-around care available upon request.
            </p>

          </div>


          {/* Address */}

          <div className="footer-address">

            <MapPin size={19} />

            <p>
              PT Learning Institute Campus, 124 Sunny
              Meadow Way, Educational District
            </p>

          </div>

        </div>


        {/* ================= GET IN TOUCH ================= */}

        <div className="footer-column footer-contact-column">

          <h3 className="footer-heading">
            <span className="footer-heading-dot"></span>
            Get In Touch
          </h3>


          {/* Phone */}

          <a
            href="tel:+1234567890"
            className="footer-contact-item"
          >

            <span className="footer-contact-icon">
              <Phone size={17} />
            </span>

            <span>(123) 456-7890</span>

          </a>


          {/* Email */}

          <a
            href="mailto:hello@ptclearning.edu"
            className="footer-contact-item"
          >

            <span className="footer-contact-icon">
              <Mail size={17} />
            </span>

            <span>hello@ptclearning.edu</span>

          </a>


          {/* WhatsApp */}

          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-item"
          >

            <span className="footer-contact-icon">
              <MessageSquare size={17} />
            </span>

            <span>WhatsApp Parent Hotline Active</span>

          </a>

        </div>

      </div>


      {/* ================= FOOTER BOTTOM ================= */}

      <div className="footer-bottom">

        <p className="footer-copyright">
          © 2026 PT Learning Institute • Child Skills and Development.
          All rights reserved.
        </p>

        <a
          href="/privacy-policy"
          className="footer-privacy-link"
        >
          Privacy Policy
        </a>

      </div>

    </footer>
  );
}

export default Footer;