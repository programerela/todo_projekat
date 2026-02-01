import "../../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <img
        className="navbar-logo"
        src="/src/assets/webpage.png"
        alt="Todo Logo"
      />
      <p className="navbar-item">Tasks</p>
      <p className="navbar-item">Profile</p>
      <p className="navbar-item">Settings</p>
    </div>
  );
}
export default Navbar;
