import "./WhyFamilies.css";

function WhyFamilies() {
  const features = [
    {
      icon: "🌱",
      iconClass: "green",
      title: "Learn Through Play",
      description:
        "Hands-on sensory inquiry, tactile materials, and organic child-led explorations that make concepts stick forever.",
    },
    {
      icon: "❤️",
      iconClass: "pink",
      title: "Caring Teachers",
      description:
        "Certified, patient educators dedicated to high emotional security, warm encouragement, and loving milestone celebrations.",
    },
    {
      icon: "🎨",
      iconClass: "yellow",
      title: "Creative Activities",
      description:
        "Daily artistic ateliers, watercolor expression, rhythm and movement, drama circles, and interactive storytelling.",
    },
    {
      icon: "🛡️",
      iconClass: "blue",
      title: "Safe & Happy Setting",
      description:
        "Child-proofed environments, air-purified learning nests, sanitized organic play areas, and secure parent check-in protocols.",
    },
  ];

  return (
    <section className="why-families-section">

      {/* ================= HEADER ================= */}
      <div className="why-families-header">

        <div className="why-families-badge">
          <span>❤️</span>
          THE PTC DIFFERENCE
        </div>

        <h2 className="why-families-title">
          Why Families Love PTC
          <br />
          Learning Institute
        </h2>

      </div>

      {/* ================= CARDS ================= */}
      <div className="why-families-grid">

        {features.map((feature, index) => (
          <article
            className="why-family-card"
            key={index}
          >
            <div
              className={`why-family-icon ${feature.iconClass}`}
            >
              <span>{feature.icon}</span>
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </article>
        ))}

      </div>

    </section>
  );
}

export default WhyFamilies;