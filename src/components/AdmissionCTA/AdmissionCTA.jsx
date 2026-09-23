import React, { useState } from "react";
import "./AdmissionCTA.css";
import {
  Phone,
} from "lucide-react";

function AdmissionSection() {
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!parentName.trim() || !phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }

    // Connect your booking API here.
    alert("Thank you! Your discovery visit request has been received.");
  };

  return (
    <section className="admission-section">

      <div className="admission-container">

        {/* Decorative elements */}

        <span className="admission-decoration admission-balloon">
          🎈
        </span>

        <span className="admission-decoration admission-star">
          ☆
        </span>

        {/* Content */}

        <div className="admission-content">

          {/* Badge */}

          <div className="admission-badge">
            <span className="admission-badge-icon">📐</span>

            <span>
              ADMISSIONS NOW OPEN 2026–2027
            </span>
          </div>

          {/* Heading */}

          <h2 className="admission-heading">
            Ready to Make Learning
            <br />
            Fun?
          </h2>

          {/* Description */}

          <p className="admission-description">
            Come smell the fresh flowers, tour the sensory classrooms,
            and meet our cheerful educators! Book a no-pressure discovery
            visit today and your child gets a free mud kitchen explorer kit.
          </p>

          {/* Booking form */}

          <form
            className="admission-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              placeholder="Parent Name"
              aria-label="Parent Name"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Phone / WhatsApp"
              aria-label="Phone or WhatsApp"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <button
              type="submit"
              className="admission-submit"
            >
              <span>Book a Tour</span>
              <span className="admission-calendar">▦</span>
            </button>

          </form>

          {/* Contact information */}

          <div className="admission-contact">

            <div className="admission-contact-item">

              {/* <span className="contact-phone-icon">
                ☎
              </span> */}
              <span className="contact-phone-icon">
                <Phone size={17} />
              </span>

              <span>
                Direct Phone: (123) 456-7890
              </span>

            </div>

            <div className="admission-contact-item">

              <span className="contact-parking-icon">
                P
              </span>

              <span>
                Complimentary On-Campus Parking
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AdmissionSection;