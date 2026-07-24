import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home">

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-content">

          <div className="brand-tag">
            🚀 BIRO AI RESEARCH PLATFORM
          </div>

          <h1>
            IDEA'S TO SHARE 
            <br />
            COMMON RESEARCH
          </h1>

          <p>
            BIRO is a next-generation research ecosystem where
            students, scientists and innovators collaborate,
            discover and build the future of knowledge with AI.
          </p>

          <div className="hero-buttons">

            <Link to="/research" className="primary-btn">
              Explore Research
            </Link>

            <Link to="/signup" className="secondary-btn">
              Join BIRO
            </Link>

          </div>

        </div>


        {/* AI 3D LOGO */}

        <div className="hero-image">

          <div className="ai-orb">

            <div className="logo-circle">
              BIRO
              <span>
                  GLOBAL 
              </span>
            </div>

            <div className="orbit one"></div>
            <div className="orbit two"></div>
            <div className="orbit three"></div>

          </div>

        </div>


      </section>



      {/* STATS */}

      <section className="stats">

        <div className="stat-card">
          <h2>6+</h2>
          <p>Research Groups</p>
        </div>


        <div className="stat-card">
          <h2>100+</h2>
          <p>Researchers</p>
        </div>


        <div className="stat-card">
          <h2>25+</h2>
          <p>Innovation Projects</p>
        </div>

      </section>



      {/* FEATURES */}

      <section className="features">

        <h2>
          Why Choose BIRO?
        </h2>


        <div className="feature-grid">


          <div className="feature-card">

            <h3>
              🧠 AI Research
            </h3>

            <p>
              Discover and collaborate on advanced
              scientific research projects.
            </p>

          </div>



          <div className="feature-card">

            <h3>
              🌎 Global Community
            </h3>

            <p>
              Connect with researchers, students
              and innovators worldwide.
            </p>

          </div>



          <div className="feature-card">

            <h3>
              🚀 Innovation Hub
            </h3>

            <p>
              Transform ideas into impactful
              research solutions.
            </p>

          </div>


        </div>


      </section>



      {/* CTA */}

      <section className="cta">

        <h2>
          Start Your Research Journey
        </h2>

        <p>
          Join BIRO and become part of the future
          of scientific collaboration.
        </p>


        <Link to="/research" className="primary-btn">
          Explore Now
        </Link>


      </section>


    </main>
  );
}


export default Home;