import React from "react";
import "./DailyAdventure.css";

// Add your own activity image here
import artImage from "../../assets/images/art-craft.png";

const activities = [
  {
    id: 1,
    title: "Art & Craft Atelier",
    icon: "🖌️",
    description:
      "Watercolors, finger paint, tactile clay, recycled collage crafting, and boundless freedom where every child is a master artist with no wrong strokes!",
    label: "DAILY HANDS-ON CREATION",
    className: "art-activity",
  },
  {
    id: 2,
    title: "Story Time & Library Nook",
    icon: "📚",
    description:
      "Cozy cushions, picture pop-up books, puppet dialogues, and listening circles that build a lifelong love of literature.",
    label: "IMAGINATION NOOK",
    className: "story-activity",
  },
  {
    id: 3,
    title: "Music & Dance Grooves",
    icon: "🎵",
    description:
      "Mini percussion bands, rhythm clapping, lively nursery rhymes, and free-spirited creative movement for joyful energy.",
    label: "RHYTHM & MELODY",
    className: "music-activity",
  },
  {
    id: 4,
    title: "Creative Play & Blocks",
    icon: "🧩",
    description:
      "Wooden city architecture, magnetic puzzle walls, and miniature community setups that teach spatial thinking.",
    label: "SPATIAL LOGIC",
    className: "blocks-activity",
  },
  {
    id: 5,
    title: "Nature & Sensory Garden",
    icon: "🌱",
    description:
      "Planting sunflower seeds, watering vegetable patches, mud kitchen bakeries, and observing friendly garden pollinators.",
    label: "ECO-EXPLORATION",
    className: "nature-activity",
  },
];

function ActivitiesSection() {
  return (
    <section className="activities-section">

      {/* ================= HEADER ================= */}

      <div className="activities-header">

        <div className="activities-badge">
          <span className="badge-emoji">🎈</span>
          <span>SPARKING JOY EVERY HOUR</span>
        </div>

        <h1 className="activities-heading">
          Every Day Is an Adventure!
        </h1>

        <p className="activities-subtitle">
          From splash water labs to sensory gardening, every activity is
          an open invitation for children to express themselves freely.
        </p>

      </div>

      {/* ================= ACTIVITIES GRID ================= */}

      <div className="activities-grid">

        {/* FEATURED ART CARD */}

        <article className="activity-card activity-featured">

          <div className="featured-image-wrapper">

            <img
              src={artImage}
              alt="Children enjoying art and craft activities"
              className="featured-image"
            />

            <div className="featured-badge">
              🎨 Most Loved
            </div>

          </div>

          <div className="featured-content">

            <div className="activity-icon">
              🖌️
            </div>

            <h2 className="activity-title">
              Art & Craft Atelier
            </h2>

            <p className="activity-description">
              Watercolors, finger paint, tactile clay, recycled collage
              crafting, and boundless freedom where every child is a
              master artist with no wrong strokes!
            </p>

            <div className="activity-label">
              DAILY HANDS-ON CREATION
              <span className="label-symbol">✿</span>
            </div>

          </div>

        </article>

        {/* STORY TIME CARD */}

        <ActivityCard activity={activities[1]} />

        {/* MUSIC CARD */}

        <ActivityCard activity={activities[2]} />

        {/* CREATIVE PLAY CARD */}

        <ActivityCard activity={activities[3]} />

        {/* NATURE CARD */}

        <ActivityCard activity={activities[4]} />

      </div>

    </section>
  );
}


/* ================= REUSABLE ACTIVITY CARD ================= */

function ActivityCard({ activity }) {
  return (
    <article className={`activity-card ${activity.className}`}>

      <div className="activity-icon">
        {activity.icon}
      </div>

      <h2 className="activity-title">
        {activity.title}
      </h2>

      <p className="activity-description">
        {activity.description}
      </p>

      <div className="activity-label">
        {activity.label}
      </div>

    </article>
  );
}

export default ActivitiesSection;