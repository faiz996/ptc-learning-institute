import React from "react";
import "./LearningPrograms.css";

const programs = [
  {
    id: 1,
    label: "INFANTS & TODDLERS",
    icon: "🍼",
    title: "Daycare",
    description:
      "Safe, loving care, sensory discovery & early routines designed to give working families full peace of mind.",
    features: [
      "Flexible full & half-day care",
      "Sensory play & milestone tracking",
      "Warm, nurturing certified staff",
    ],
    button: "Explore Daycare",
    className: "daycare",
    link: "#daycare",
  },

  {
    id: 2,
    label: "KINDERGARTEN – GRADE 12",
    icon: "🏫",
    title: "K-12 Program",
    description:
      "Comprehensive holistic schooling with strong academic foundations, leadership development, arts & STEM.",
    features: [
      "Inquiry-based STEM & Arts",
      "Character & leadership growth",
      "Holistic college readiness",
    ],
    button: "Explore K-12",
    className: "k12",
    link: "#k12",
  },

  {
    id: 3,
    label: "SEASONAL HOLIDAYS",
    icon: "⛺",
    title: "Camps",
    description:
      "Seasonal holiday adventures, hands-on exploration, creative theater & coding workshops, and outdoor fun.",
    features: [
      "Summer & Winter break sessions",
      "Hands-on arts & outdoor sports",
      "Friendship & discovery focus",
    ],
    button: "Explore Camps",
    className: "camps",
    link: "#camps",
  },

  {
    id: 4,
    label: "ALL GRADES & LEVELS",
    icon: "📚",
    title: "Academic Tutorials",
    description:
      "1-on-1 & small group tutoring, homework support, subject mastery, reading confidence, and test preparation.",
    features: [
      "Tailored individualized pacing",
      "Math, Phonics & Science focus",
      "Homework mastery & test prep",
    ],
    button: "Explore Tutorials",
    className: "tutorials",
    link: "#tutorials",
  },
];

function ProgramsSection() {
  return (
    <section className="programs-section">

      {/* ================= HEADER ================= */}

      <div className="programs-header">

        <div className="programs-badge">
          <span className="badge-icon">🌟</span>
          <span>COMPLETE EDUCATIONAL PATHWAY</span>
        </div>

        <h1 className="programs-heading">
          Comprehensive Learning & Care
          <br />
          Programs
        </h1>

        <p className="programs-subtitle">
          From infant daycare to advanced academic tutoring, supporting
          every step of your child's journey.
        </p>

      </div>

      {/* ================= PROGRAM CARDS ================= */}

      <div className="programs-grid">

        {programs.map((program) => (

          <article
            className={`program-card ${program.className}`}
            key={program.id}
          >

            {/* Card label and icon */}

            <div className="program-card-top">

              <div className="program-label">
                {program.label}
              </div>

              <div className="program-icon">
                {program.icon}
              </div>

            </div>

            {/* Card title */}

            <h2 className="program-title">
              {program.title}
            </h2>

            {/* Card description */}

            <p className="program-description">
              {program.description}
            </p>

            {/* Feature list */}

            <ul className="program-features">

              {program.features.map((feature, index) => (

                <li key={index}>

                  <span className="feature-check">
                    ✓
                  </span>

                  <span className="feature-text">
                    {feature}
                  </span>

                </li>

              ))}

            </ul>

            {/* Button */}

            <a
              href={program.link}
              className="program-button"
            >
              <span>{program.button}</span>
              <span className="button-arrow">→</span>
            </a>

          </article>

        ))}

      </div>

    </section>
  );
}

export default ProgramsSection;