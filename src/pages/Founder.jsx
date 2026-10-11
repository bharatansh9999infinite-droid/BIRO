import React from "react";

function Founder() {
  return (
    <section className="founder-page">
      {/* Complete Official Full-Scale Layout Styles */}
      <style>{`
        /* Core Container Wrapper */
        .founder-page {
          min-height: 100vh;
          padding: 120px 8% 80px 8%;
          position: relative;
          overflow-y: auto;
          overflow-x: hidden;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          background-color: #0b132b; /* Deep luxury dark blue foundation fallback */
        }

        /* 
           Official Fixed Canvas Engine 
           Expands completely over the page, removes all square container limits,
           and keeps the image locked solid while ONLY the text elements scroll over it!
        */
        .founder-page::before {
          content: "";
          position: fixed; /* Locks the background layer during scrolling */
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          
          /* 
             Professional Dark Blue & Midnight Overlay:
             Blends your office background image seamlessly into a high-end corporate color palette.
          */
          background: 
            linear-gradient(
              rgba(11, 19, 43, 0.85), 
              rgba(28, 37, 65, 0.80)
            ),
            /* Fallback safe relative path. Ensure founder.png is inside your project's public directory or asset folder */
            url("/assets/founder.png"), 
            url("founder.png"); /* Alternative directory backup resolver */
            
          background-size: cover;        /* Stretches the asset completely across the browser window */
          background-position: center;    /* Anchors office coordinates beautifully */
          background-repeat: no-repeat;
          z-index: 1;                    /* Keeps background securely below text layers */
          pointer-events: none;          /* Ignores user touch/click interference */
        }

        /* Interactive Text Layer positioning above the static background canvas */
        .founder-content-wrapper {
          position: relative;
          z-index: 2; /* Forces contents to sit over fixed canvas */
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Authoritative Enterprise Header Formatting */
        .founder-header {
          margin-bottom: 60px;
          text-align: left;
        }

        .founder-header h1 {
          font-size: 3.6rem;
          font-weight: 800;
          /* Intense, sharp white-blue neon tint to cut through deep blue backdrops */
          color: #ffffff; 
          margin: 0 0 16px 0;
          letter-spacing: -1px;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .founder-header p {
          font-size: 1.25rem;
          color: #e2e8f0; /* Ultra-clear high contrast off-white reading row */
          max-width: 800px;
          line-height: 1.65;
          margin: 0;
          font-weight: 400;
        }

        /* Sequential Vertical Stack growing downwards toward page bottom */
        .founder-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
          width: 100%;
        }

        /* Premium Executive 3D Panels */
        .founder-card {
          display: flex;
          align-items: center;
          gap: 40px;
          width: 100%;
          padding: 40px;
          
          /* Semi-translucent deep slate blue velvet card background */
          background: rgba(28, 37, 65, 0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;

          /* Layered premium shadow system presenting authentic structural elevation */
          box-shadow: 
            0 10px 30px -10px rgba(0, 0, 0, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.1);

          /* Activates internal coordinate systems for real 3D perspective shifts */
          transform-style: preserve-3d;
          transform: rotateX(2.5deg) rotateY(-1.5deg) translateZ(0px);
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease;
        }

        /* Smooth 3D Glissade Hover Action */
        .founder-card:hover {
          transform: rotateX(0deg) rotateY(0deg) translateZ(25px) translateY(-6px);
          background: rgba(28, 37, 65, 0.85);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 
            0 20px 40px -5px rgba(0, 0, 0, 0.6),
            inset 0 1px 1px rgba(255, 255, 255, 0.2);
        }

        /* Modernized Profile Photo Frame */
        .founder-card img {
          width: 150px;
          height: 150px;
          border-radius: 16px;
          object-fit: cover;
          border: 3px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
          background-color: #1c2541;
          
          /* Elevates portraits into the frontal 3D layout channel */
          transform: translateZ(40px);
        }

        /* Inner Text Container Layer */
        .founder-info-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transform: translateZ(20px); /* Keeps content strings floats crisp */
        }

        /* Luxury Corporate Status Tags */
        .badge {
          display: inline-block;
          padding: 6px 14px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          border-radius: 6px;
          margin-bottom: 14px;
        }

        .badge.founder {
          background-color: #3a86ff; /* Rich Electric Blue Accent Badge */
          color: #ffffff;
        }

        .badge.cofounder {
          background-color: #48cae4; /* Ice Cyan Contrast Badge */
          color: #0b132b;
        }

        /* High-Contrast Crisp Dark Blue / Midnight Typography */
        .founder-card h2 {
          font-size: 1.9rem;
          font-weight: 800;
          color: #ffffff; /* Radiant Header White */
          margin: 0 0 4px 0;
          letter-spacing: -0.5px;
        }

        .founder-card h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #00b4d8; /* Deep vivid dark blue/cyan contrast text */
          margin: 0 0 14px 0;
        }

        .founder-card p {
          font-size: 1.05rem;
          line-height: 1.6;
          color: #cbd5e1; /* Smooth corporate reading gray layer */
          margin: 0;
        }

        /* Smart Screen Responsive Collapse Formatting */
        @media (max-width: 850px) {
          .founder-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 30px 20px;
            transform: none !important;
          }
          .founder-info-block {
            align-items: center;
          }
          .founder-header h1 {
            font-size: 2.6rem;
          }
        }
      `}</style>

      {/* Main Structural Wrapper */}
      <div className="founder-content-wrapper">
        <div className="founder-header">
          <h1>Founder & Co-Founders</h1>
          <p>
            Meet the visionary leadership behind BIRO (Bharat Innovation &
            Research Organization), committed to advancing scientific research,
            artificial intelligence, innovation, and global collaboration.
          </p>
        </div>

        {/* Content list tracks downward smoothly while background is locked */}
        <div className="founder-container">
          
          {/* Card 1: Founder */}
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

          {/* Card 2: Co-Founder 1 */}
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

          {/* Card 3: Co-Founder 2 */}
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
