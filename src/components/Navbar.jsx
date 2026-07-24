import { NavLink } from "react-router-dom";
import logo from "../assets/BIRO.png";
import "./Navbar.css";


function Navbar() {


  return (

    <nav className="navbar">


      <div className="navbar-container">



        {/* LOGO */}

        <div className="logo">


          <NavLink to="/">

            <img

              src={logo}

              alt="BIRO Logo"

              className="logo-image"

            />


            <span>
              BIRO
            </span>


          </NavLink>


        </div>





        {/* NAVIGATION */}


        <div className="nav-links">



          <NavLink to="/">

            Home

          </NavLink>





          <NavLink to="/research">

            Research

          </NavLink>





          <NavLink to="/create-research">

            Create Research

          </NavLink>





          <NavLink to="/community">

            Community

          </NavLink>





          <NavLink to="/meetings">

            Meetings

          </NavLink>





          <NavLink to="/calls">

            📞 Calls

          </NavLink>





          <NavLink to="/contact">

            Contact

          </NavLink>



        </div>







        {/* ACCOUNT LINKS */}


        <div className="auth-links">





          <NavLink to="/login">

            Login

          </NavLink>





          <NavLink

            to="/signup"

            className="signup-btn"

          >

            Sign Up

          </NavLink>







          <NavLink

            to="/profile"

            className="profile-btn"

          >

            Profile

          </NavLink>





        </div>





      </div>


    </nav>


  );


}


export default Navbar;