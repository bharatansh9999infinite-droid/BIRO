import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/BIRO.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/" onClick={closeMenu} aria-label="BIRO Home">
            <img
              src={logo}
              alt="BIRO Logo"
              className="logo-image"
            />
            <span>BIRO</span>
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`navbar-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="biro-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation and account links */}
        <div
          id="biro-navigation"
          className={`navbar-content ${menuOpen ? "menu-open" : ""}`}
        >
          <div className="nav-links">
            <NavLink to="/" className={navClass} onClick={closeMenu} end>
              Home
            </NavLink>

            <NavLink to="/research" className={navClass} onClick={closeMenu}>
              Research
            </NavLink>

            <NavLink
              to="/create-research"
              className={navClass}
              onClick={closeMenu}
            >
              Create Research
            </NavLink>

            <NavLink to="/community" className={navClass} onClick={closeMenu}>
              Community
            </NavLink>

            <NavLink to="/meetings" className={navClass} onClick={closeMenu}>
              Meetings
            </NavLink>

            <NavLink to="/founder" className={navClass} onClick={closeMenu}>
              Founder
            </NavLink>

            <NavLink to="/calls" className={navClass} onClick={closeMenu}>
              <span aria-hidden="true">📞 </span>Calls
            </NavLink>

            <NavLink to="/batches" className={navClass} onClick={closeMenu}>
              Batches
            </NavLink>

            <NavLink
              to="/notes-vault"
              className={navClass}
              onClick={closeMenu}
            >
              BIRO-NOTES
            </NavLink>

            <NavLink to="/videos" className={navClass} onClick={closeMenu}>
              Videos
            </NavLink>

            <NavLink to="/contact" className={navClass} onClick={closeMenu}>
              Contact
            </NavLink>
          </div>

          <div className="auth-links">
            <NavLink
              to="/login"
              className={navClass}
              onClick={closeMenu}
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className="signup-btn"
              onClick={closeMenu}
            >
              Sign Up
            </NavLink>

            <NavLink
              to="/profile"
              className="profile-btn"
              onClick={closeMenu}
            >
              Profile
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;