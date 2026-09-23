import React from "react";
import "./ParentTestimonials.css";

const testimonials = [
  {
    id: 1,
    initials: "EM",
    name: "Elena & Marc Vance",
    details: "Parents to Leo (Toddlers)",
    review:
      "On Saturday mornings, our 3-year-old puts his coat on and asks if he can go see his friends and the mud kitchen! PTC gave him so much confidence and joy.",
    color: "yellow",
  },
  {
    id: 2,
    initials: "SJ",
    name: "Sarah Jenkins",
    details: "Mum to Poppy (14 Mos)",
    review:
      "The educators are so gentle, patient, and warm. The daily photo updates with real milestone progress gave us 100% peace of mind when returning from maternity leave.",
    color: "blue",
  },
  {
    id: 3,
    initials: "DP",
    name: "David & Anita Patel",
    details: "Parents to Maya (Junior Explorers)",
    review:
      "The junior phonics and science play made preschool graduation effortless. Maya entered primary school reading ahead and making friends on day one!",
    color: "green",
  },
];

function ParentTestimonials() {
  return (
    <section className="parent-testimonials">

      {/* ================= HEADER ================= */}

      <div className="testimonials-header">

        <div className="testimonials-badge">
          <span>❤️</span>
          <span>COMMUNITY LOVE</span>
        </div>

        <h2 className="testimonials-heading">
          Parents Say It Best <span>❤️</span>
        </h2>

        <p className="testimonials-subtitle">
          Hear from the wonderful families whose children take their
          joyful first educational steps with us.
        </p>

      </div>

      {/* ================= TESTIMONIAL CARDS ================= */}

      <div className="testimonials-grid">

        {testimonials.map((testimonial) => (

          <article
            className="testimonial-card"
            key={testimonial.id}
          >

            {/* Star rating */}

            <div className="testimonial-stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>

            {/* Review */}

            <blockquote className="testimonial-review">
              “{testimonial.review}”
            </blockquote>

            {/* Divider */}

            <div className="testimonial-divider"></div>

            {/* Parent information */}

            <div className="testimonial-author">

              <div
                className={`testimonial-avatar ${testimonial.color}`}
              >
                {testimonial.initials}
              </div>

              <div className="testimonial-author-info">

                <h3 className="testimonial-name">
                  {testimonial.name}
                </h3>

                <p className="testimonial-details">
                  {testimonial.details}
                </p>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default ParentTestimonials;