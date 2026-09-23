import "./WelcomeSection.css";

function WelcomeSection() {
  return (
    <section className="welcome-section">

      {/* ================= HEADING ================= */}
      <div className="welcome-header">

        <div className="welcome-badge">
          <span className="welcome-badge-icon">🌱</span>
          NURTURING CURIOSITY DAILY
        </div>

        <h2 className="welcome-title">
          Welcome to a Place Where Little
          <br className="desktop-break" />
          Minds Shine! <span>✨</span>
        </h2>

        <p className="welcome-description">
          At PTC Learning Institute, education is not about sitting quietly; it
          is about questioning,
          <br className="desktop-break" />
          giggling, painting outside the lines, and discovering the world
          hands-first. Our Reggio &
          <br className="desktop-break" />
          Montessori inspired early learning framework lets each unique child
          flourish at their own happy
          <br className="desktop-break" />
          pace.
        </p>

      </div>

      {/* ================= CARDS ================= */}
      <div className="welcome-cards">

        {/* CARD 1 */}
        <article className="welcome-card welcome-card-learn">

          <div className="welcome-icon-box">
            <span className="welcome-icon">💡</span>
          </div>

          <div className="welcome-pill welcome-pill-blue">
            LEARN
          </div>

          <h3>Foundational Curiosity</h3>

          <p>
            Hands-on discovery through sensory counting, phonics games,
            science explorations, and questions that turn into joyful group
            projects.
          </p>

        </article>

        {/* CARD 2 */}
        <article className="welcome-card welcome-card-play">

          <div className="welcome-icon-box">
            <span className="welcome-icon">🧩</span>
          </div>

          <div className="welcome-pill welcome-pill-yellow">
            PLAY
          </div>

          <h3>Imaginative Discovery</h3>

          <p>
            Building blocks, pretend kitchens, costume theater, and open
            sandboxes where laughter builds problem-solving skills naturally.
          </p>

        </article>

        {/* CARD 3 */}
        <article className="welcome-card welcome-card-grow">

          <div className="welcome-icon-box">
            <span className="welcome-icon">🌱</span>
          </div>

          <div className="welcome-pill welcome-pill-green">
            GROW
          </div>

          <h3>Confidence &amp; Empathy</h3>

          <p>
            Developing strong social connections, emotional awareness,
            self-help routines, and the resilience to try again with a smile.
          </p>

        </article>

      </div>

    </section>
  );
}

export default WelcomeSection;