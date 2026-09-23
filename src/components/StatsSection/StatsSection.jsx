import React from "react";
import "./StatsSection.css";

const stats = [
  {
    id: 1,
    icon: "👶",
    number: "500+",
    label: "HAPPY LITTLE LEARNERS",
    className: "learners-stat",
  },
  {
    id: 2,
    icon: "🎨",
    number: "40+",
    label: "WEEKLY CREATIVE ACTIVITIES",
    className: "activities-stat",
  },
  {
    id: 3,
    icon: "📕",
    number: "25+",
    label: "CARING CERTIFIED TEACHERS",
    className: "teachers-stat",
  },
  {
    id: 4,
    icon: "🏆",
    number: "15+",
    label: "YEARS OF JOYFUL LEARNING",
    className: "experience-stat",
  },
];

function StatsSection() {
  return (
    <section className="stats-section">

      {/* Decorative stars */}

      <span className="stats-decoration stats-star-one">☆</span>
      <span className="stats-decoration stats-star-two">☆</span>
      <span className="stats-decoration stats-star-three">✧</span>

      {/* Statistics cards */}

      <div className="stats-container">

        {stats.map((stat) => (
          <div
            className={`stat-card ${stat.className}`}
            key={stat.id}
          >

            <div className="stat-icon">
              {stat.icon}
            </div>

            <h2 className="stat-number">
              {stat.number}
            </h2>

            <p className="stat-label">
              {stat.label}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default StatsSection;