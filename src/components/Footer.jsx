import { Link } from "react-router-dom";
import logo from "../assets/BIRO.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-box">

          <div className="footer-logo">

            <img src={logo} alt="BIRO Logo" />

            <h2>BIRO</h2>

          </div>

          <p>
            BHARATANSH INTERNATIONAL RESEARCH ORGANISATION is building
            a global platform for researchers, students and innovators
            to collaborate and create the future.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/research">Research</Link>

          <Link to="/community">Community</Link>

          <Link to="/meetings">Meetings</Link>

          <Link to="/contact">Contact</Link>

        </div>

        {/* Account */}

        <div className="footer-box">

          <h3>Account</h3>

          <Link to="/login">Login</Link>

          <Link to="/signup">Sign Up</Link>

          <Link to="/profile">Profile</Link>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact</h3>

          <p>Email</p>

          <span>bharatansh9999infinite@gmail.com</span>

          <p>Location</p>

          <span>India</span>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © 2026 BIRO - BHARATANSH INTERNATIONAL RESEARCH ORGANISATION.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;