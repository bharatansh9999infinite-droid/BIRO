import React from "react";

function Founder() {
  return (
    <section className="founder-page">
      {/* 3D Parallax & Path-Safe CSS Injection Layer */}
      <style>{`
        /* Core Section Canvas */
        .founder-page {
          min-height: 100vh;
          padding: 100px 8% 80px 8%;
          position: relative;
          overflow-y: auto;
          overflow-x: hidden;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          background-color: #0b132b; /* Fallback safe dark tone */
          perspective: 1500px; /* High perspective depth for 3D layout pop */
        }

        /* 
           Official Fixed Background Engine 
           Locks founder.png completely across the whole screen frame.
           Only the cards and headers will scroll over it smoothly!
        */
        .founder-page::before {
          content: "";
          position: fixed; /* Locks the background layer solid during scroll */
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          
          /* 
             Soft, elegant tint matrix overlay:
             Allows your custom founder.png image to be clearly visible while 
             adding enough contrast so your cards look like they stand out on top.
          */
          background: 
            linear-gradient(
              rgba(15, 23, 42, 0.45), 
              rgba(15, 23, 42, 0.40)
            ),
            /* Dual path resolution check for bundlers & Vercel production servers */
            url("../assets/founder.png"),
            url("/assets/founder.png"),
            url("founder.png");
            
          background-size: cover;        /* Stretches the image completely to match all screen borders */
          background-position: center;    /* Keeps the office coordinates perfectly balanced */
          background-repeat: no-repeat;
          z-index: 1;                    /* Safely stacks behind your content blocks */
          pointer-events: none;          /* Prevents interaction interference */
        }

        /* Content frame layer floating directly over the fixed office backdrop */
        .founder-content-wrapper {
          position: relative;
          z-index: 2; 
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Premium Executive Header Block */
        .founder-header {
          margin-bottom: 60px;
          text-align: left;
        }

        .founder-header h1 {
          font-size: 3.8rem;
          font-weight: 800;
          color: #ffffff; /* Brilliant white title */
          margin: 0 0 16px 0;
          letter-spacing: -1px;
          /* Strong text drop shadow to visually lift it off the background */
          text-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }

        .founder-header p {
          font-size: 1.3rem;
          color: #f1f5f9; /* Clean high contrast off-white text */
          max-width: 850px;
          line-height: 1.65;
          margin: 0;
          font-weight: 500;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        /* Sequential Vertical Stack growing downwards toward page bottom */
        .founder-container {
          display: flex;
          flex-direction: column;
          gap: 45px;
          width: 100%;
        }

        /* 
           Premium 3D Executive Cards 
           Designed to look exactly like they are standing out/floating over the BG image!
        */
        .founder-card {
          display: flex;
          align-items: center;
          gap: 40px;
          width: 100%;
          padding: 40px;
          
          /* Semi-translucent glassmorphism so the background image subtly shows through */
          background: rgba(255, 255, 255, 0.92); 
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 24px;

          /* Ultra-premium dynamic shadow levels giving a realistic 3D standing look */
          box-shadow: 
            0 15px 35px -5px rgba(0, 0, 0, 0.25),
            0 30px 60px -15px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 1);

          /* Preps internal details layers for layered Z-axis space elevation */
          transform-style: preserve-3d;
          transform: rotateX(3deg) rotateY(-2deg) translateZ(0px);
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease, background 0.3s ease;
        }

        /* Interactive 3D Lift Action on Card Hover */
        .founder-card:hover {
          /* Noticeable push forward off the background image plane */
          transform: rotateX(0deg) rotateY(0deg) translateZ(50px) translateY(-10px);
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 
            0 30px 50px -10px rgba(0, 0, 0, 0.35),
            0 60px 90px -20px rgba(0, 0, 0, 0.45),
            inset 0 1px 0 rgba(255, 255, 255, 1);
        }

        /* 3D Photo Border Framing Box */
        .founder-card img {
          width: 150px;
          height: 150px;
          border-radius: 16px;
          object-fit: cover;
          border: 4px solid #ffffff;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
          background-color: #f8fafc;
          
          /* Pushes the portrait layer furthest forward in the 3D space matrix */
          transform: translateZ(40px);
        }

        /* Core Meta Content Layer holding clear dark typography strings */
        .founder-info-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transform: translateZ(25px); /* Separates text arrays from card backing floor */
        }

        /* Official Corporate Status Badges */
        .badge {
          display: inline-block;
          padding: 6px 16px;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          border-radius: 8px;
          margin-bottom: 16px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .badge.founder {
          background-color: #1e3a8a; /* Deep Institutional Blue */
          color: #ffffff;
        }

        .badge.cofounder {
          background-color: #0f172a; /* Executive Dark Slate */
          color: #ffffff;
        }

        /* Crisp Dark Blue / Midnight Typography standing over the glass card layer */
        .founder-card h2 {
          font-size: 2rem;
          font-weight: 800;
          color: #0f172a; /* Solid rich midnight charcoal black */
          margin: 0 0 6px 0;
          letter-spacing: -0.5px;
        }

        .founder-card h4 {
          font-size: 1.15rem;
          font-weight: 600;
          color: #2563eb; /* High contrast sharp official blue label */
          margin: 0 0 16px 0;
        }

        .founder-card p {
          font-size: 1.1rem;
          line-height: 1.65;
          color: #334155; /* highly legible dark reading gray description */
          margin: 0;
        }

        /* Fluid Mobile Optimization Grid Override Rules */
        @media (max-width: 850px) {
          .founder-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 35px 25px;
            transform: none !important; /* Safety flatten for mobile viewports */
          }
          .founder-info-block {
            align-items: center;
          }
          .founder-header h1 {
            font-size: 2.8rem;
          }
        }
      `}</style>

      {/* Primary Floating Layer */}
      <div className="founder-content-wrapper">
        <div className="founder-header">
          <h1>Founder & Co-Founders</h1>
          <p>
            Meet the visionary leadership behind BIRO (Bharat Innovation &
            Research Organization), committed to advancing scientific research,
            artificial intelligence, innovation, and global collaboration.
          </p>
        </div>

        {/* Content list stacks downwards while the background image remains frozen */}
        <div className="founder-container">
          
          {/* Card Component 1: Founder */}
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

          {/* Card Component 2: Co-Founder 1 */}
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

          {/* Card Component 3: Co-Founder 2 */}
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
                Focused on technology, digital transformation, and platform
                development to build a modern ecosystem for researchers and
                innovators around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;