import "./TopBar.css";

function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-content">
        <span className="announcement-stars">✦</span>

        <span className="announcement-text">
          Welcome to PTC Learning Institute — Admissions for 2026-2027 are now open!
        </span>

        <span className="announcement-call">
          Call{" "}
          <a href="tel:1234567890">
            (123) 456-7890
          </a>
        </span>
      </div>
    </div>
  );
}

export default AnnouncementBar;