import "../../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <span className="logo-accent">to</span>do.play
        </div>

        <ul className="navbar-links">
          <li>How it works</li>
          <li>Why this app</li>
          <li>Contact</li>
        </ul>

        <div className="navbar-actions">
          <button className="navbar-btn">Get Started</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
