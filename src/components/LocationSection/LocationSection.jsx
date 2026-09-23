import React from "react";
import { MapPin, Phone, Map, Sparkles } from "lucide-react";
import "./LocationSection.css";

// Replace this path with your actual map image.
import locationMap from "../../assets/images/map-1.jpeg";

function LocationSection() {
  return (
    <section className="location-section">

      {/* ================= SECTION TITLE ================= */}

      <div className="location-heading">
        <h2>
          Our Location <span>✨</span>
        </h2>
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="location-container">

        {/* LEFT SIDE - MAP */}

        <div className="location-map-wrapper">

          <img
            src={locationMap}
            alt="Map showing our preschool location"
            className="location-map-image"
          />

          {/* Map location marker */}

          <div className="location-map-marker">
            <MapPin size={30} fill="white" />
          </div>

          {/* Map label */}

          <div className="location-map-label">
            Map View Placeholder
          </div>

        </div>

        {/* RIGHT SIDE - CONTACT DETAILS */}

        <div className="location-details">

          {/* Physical Address */}

          <div className="location-info-item">

            <div className="location-icon-box">
              <MapPin size={25} />
            </div>

            <div className="location-info-content">

              <h3>Physical Address</h3>

              <p>
                123 Learning Lane, Playtown, PT 56789
              </p>

            </div>

          </div>

          {/* Phone Number */}

          <div className="location-info-item">

            <div className="location-icon-box">
              <Phone size={24} />
            </div>

            <div className="location-info-content">

              <h3>Phone Number</h3>

              <p>
                (555) 123-4567
              </p>

            </div>

          </div>

          {/* Google Maps Button */}

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="location-maps-button"
          >

            <Map size={23} />

            <span>Open in Google Maps</span>

          </a>

        </div>

      </div>

    </section>
  );
}

export default LocationSection;