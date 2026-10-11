import React from "react";

function Founder() {
  return (
    <section className="founder-page">
      {/* Official Parallax & Premium CSS Injection Layer */}
      <style>{`
        /* Core Section Wrapper */
        .founder-page {
          min-height: 100vh;
          padding: 100px 10%;
          position: relative;
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background-color: #0f172a; /* Sophisticated deep slate backdrop fallback */
        }

        /* 
           Official Fixed Background Engine 
           Expands completely, removes the square frame look, and stays frozen while text scrolls!
        */
        .founder-page::before {
          content: "";
          position: fixed; /* Locks the image in place during scrolling */
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          
          /* Premium corporate image blend tint */
          background: 
            linear-gradient(
              rgba(255, 255, 255, 0.45),
              rgba(241, 245, 249, 0.35)
            ),
            url("../assets/founder.png");
            
          background-size: cover;       /* Forces complete full-screen coverage */
          background-position: center;   /* Keeps office elements beautifully centered */
          background-repeat: no-repeat;
          z-index: 1;                   /* Keeps it safely behind the text layers */
          pointer-events: none;         /* Prevents interaction interference */
        }

        /* Content Container layer sitting on top of the fixed background */
        .founder-content-wrapper {
          position: relative;
          z-index: 2; /* Elevates above the fixed background layer */
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Official Corporate Header Styling */
        .founder-header {
          margin-bottom: 70px;
          text-align: left;
        }

        .founder-header h1 {
          font-size: 3.8rem;
          font-weight: 800;
          color: #0f172a; /* Executive Midnight Blue/Black */
          margin: 0 0 20px 0;
          letter-spacing: -1px;
          text-shadow: 1px 1px 0px #e2e8f0, 2px 2px 0px #cbd5e1, 3px 3px 8px rgba(15, 23, 42, 0.15);
        }

        .founder-header p {
          font-size: 1.3rem;
          color: #1e293b; /* Dark, authoritative reading gray */
          max-width: 850px;
          line-height: 1.65;
          margin: 0;
          font-weight: 500;
        }

        /* Vertical Row Stack expanding smoothly towards the bottom */
        .founder-container {
          display: flex;
          flex-direction: column;
          gap: 45px;
          width: 100%;
        }

        /* Official Executive 3D Profile Cards */
        .founder-card {
          display: flex;
          align-items: center;
          gap: 40px;
          width: 100%;
          padding: 40px;
          
          /* Frosted corporate crystal card backing */
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 24px;

          /* Subtle, deep professional shadow layers representing realistic 3D elevation */
          box-shadow: 
            0 4px 6px -1px rgba(15, 23, 42, 0.03),
            0 10px 15px -3px rgba(15, 23, 42, 0.05),
            0 20px 40px -4px rgba(15, 23, 42, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);

          /* Preps internal modules for structural 3D perspective shifts */
          transform-style: preserve-3d;
          transform: rotateX(3deg) rotateY(-2deg) translateZ(0px);
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease;
        }

        /* 3D Soft Lift Interaction on Hover */
        .founder-card:hover {
          transform: rotateX(0deg) rotateY(0deg) translateZ(30px) translateY(-8px);
          box-shadow: 
            0 20px 25px -5px rgba(15, 23, 42, 0.08),
            0 40px 60px -15px rgba(15, 23, 42, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 1);
        }

        /* Official Circular/Rounded Executive Avatar Frame */
        .founder-card img {
          width: 160px;
          height: 160px;
          border-radius: 20px; /* Sharp, modern look instead of raw square */
          object-fit: cover;
          border: 4px solid #ffffff;
          box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.15);
          background-color: #f8fafc;
          
          /* Pulls the portrait further forward in the 3D grid layout */
          transform: translateZ(50px);
        }

        /* Info Segment Block holding typography chains */
        .founder-info-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transform: translateZ(25px); /* Keeps text layered above card floor */
        }

        /* Official Corporate Status Badges */
        .badge {
          display: inline-block;
          padding: 6px 16px;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          border-radius: 8px; /* Clean rectangular corporate cuts */
          margin-bottom: 16px;
          box-shadow: 0 2px 4px rgba(15, 23, 42, 0.04);
        }

        .badge.founder {
          background-color: #1e3a8a; /* Deep Institutional Blue */
          color: #ffffff;
        }

        .badge.cofounder {
          background-color: #0f172a; /* Executive Slate Dark */
          color: #ffffff;
        }

        /* High-Contrast Clear Dark Typography */
        .founder-card h2 {
          font-size: 2rem;
          font-weight: 800;
          color: #0f172a; /* Pitch black slate */
          margin: 0 0 6px 0;
          letter-spacing: -0.5px;
        }

        .founder-card h4 {
          font-size: 1.15rem;
          font-weight: 600;
          color: #2563eb; /* Sharp official accent blue */
          margin: 0 0 16px 0;
        }

        .founder-card p {
          font-size: 1.1rem;
          line-height: 1.65;
          color: #334155; /* highly readable corporate body text */
          margin: 0;
        }

        /* Clean Mobile Refinement Grid overrides */
        @media (max-width: 850px) {
          .founder-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 35px 25px;
            transform: none !important;
          }
          .founder-info-block {
            align-items: center;
          }
          .founder-header h1 {
            font-size: 2.8rem;
          }
        }
      `}</style>

      {/* Main Container Wrapper */}
      <div className="founder-content-wrapper">
        <div className="founder-header">
          <h1>Founder & Co-Founders</h1>
          <p>
            Meet the visionary leadership behind BIRO (Bharat Innovation &
            Research Organization), committed to advancing scientific research,
            artificial intelligence, innovation, and global collaboration.
          </p>
        </div>

        {/* Content list stretches down while the background image remains frozen */}
        <div className="founder-container">
          
          {/* Profile Card 1: Founder */}
          <div className="founder-card">
            <img
              src="https://placeholder.com"
              alt="Founder"
            />
            <div className="founder-info-block">
              <span className="badge founder">Founder & CEO</span>
              <h2>Dr. Ansh Upadhyay</h2>
              <h4>Founder of BIRO</h4>
              <p>
                Visionary founder of BIRO with the mission of creating a global
                AI-powered research ecosystem that connects researchers,
                innovators, students, and scientists worldwide.
              </p>
            </div>
          </div>

          {/* Profile Card 2: Co-Founder 1 */}
          <div className="founder-card">
            <img
              src="https://placeholder.com"
              alt="Co-Founder"
            />
            <div className="founder-info-block">
              <span className="badge cofounder">Co-Founder</span>
              <h2>Dr. Pranjal Tiwari</h2>
              <h4>Research & Innovation</h4>
              <p>
                Dedicated to strengthening scientific collaboration,
                research development, and innovation initiatives within BIRO,
                helping shape the future of global research.
              </p>
            </div>
          </div>

          {/* Profile Card 3: Co-Founder 2 */}
          <div className="founder-card">
            <img
              src="https://placeholder.com"
              alt="Co-Founder"
            />
            <div className="founder-info-block">
              <span className="badge cofounder">Co-Founder</span>
              <h2>Dr. Ansh Singh Rajput</h2>
              <h4>Technology & Platform Development</h4>
              <p>
                Focused on technology, digital transformation,
                and platform development to build a modern ecosystem
                for researchers and innovators around the world.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Founder;
