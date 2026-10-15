import React from "react";
// 1. बैकग्राउंड इमेज का इम्पोर्ट
import founderBg from "../assets/founder.png"; 

// 2. फाउंडर्स की असली तस्वीरों का इम्पोर्ट (आपके बताए नामों के अनुसार)
import anshPhoto from "../assets/Ansh.png";
import pranjalPhoto from "../assets/Pranjal.png";
import singhPhoto from "../assets/Singh.png";

function Founder() {
  return (
    <section className="founder-page">
      {/* 3D पैरालैक्स और ऑफिशियल डार्क ब्लू थीम CSS */}
      <style>{`
        /* मुख्य कंटेनर */
        .founder-page {
          min-height: 100vh;
          padding: 120px 8% 80px 8%;
          position: relative;
          overflow-y: auto;
          overflow-x: hidden;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          background-color: #0b132b; 
          perspective: 1500px; /* 3D गहराई का इफ़ेक्ट देने के लिए */
        }

        /* 
           फ़िक्स बैकग्राउंड इंजन 
           यह आपकी 'founder.png' इमेज को पूरे स्क्रीन पर फैला देगा और लॉक रखेगा।
        */
        .founder-page::before {
          content: "";
          position: fixed; 
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: 
            linear-gradient(
              rgba(11, 19, 43, 0.40), 
              rgba(28, 37, 65, 0.35)
            ),
            url(${founderBg});
          background-size: cover;        
          background-position: center;    
          background-repeat: no-repeat;
          z-index: 1;                    
          pointer-events: none;          
        }

        /* कंटेंट रैपर जो बैकग्राउंड के ऊपर तैरता हुआ स्क्रोल करेगा */
        .founder-content-wrapper {
          position: relative;
          z-index: 2; 
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* हेडर सेक्शन */
        .founder-header {
          margin-bottom: 60px;
          text-align: left;
        }

        .founder-header h1 {
          font-size: 3.8rem;
          font-weight: 800;
          color: #ffffff; 
          margin: 0 0 16px 0;
          letter-spacing: -1px;
          text-shadow: 0 10px 25px rgba(0, 0, 0, 0.5); 
        }

        .founder-header p {
          font-size: 1.3rem;
          color: #f1f5f9; 
          max-width: 850px;
          line-height: 1.65;
          margin: 0;
          font-weight: 500;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .founder-container {
          display: flex;
          flex-direction: column;
          gap: 45px;
          width: 100%;
        }

        /* डार्क ब्लू ग्लास 3D कार्ड्स */
        .founder-card {
          display: flex;
          align-items: center;
          gap: 40px;
          width: 100%;
          padding: 40px;
          background: rgba(28, 37, 65, 0.85); 
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12); 
          border-radius: 24px;
          box-shadow: 
            0 20px 40px -10px rgba(0, 0, 0, 0.5),
            0 40px 70px -20px rgba(0, 0, 0, 0.6),
            inset 0 1px 1px rgba(255, 255, 255, 0.15);
          transform-style: preserve-3d;
          transform: rotateX(3deg) rotateY(-2deg) translateZ(0px);
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease, background 0.3s ease;
        }

        /* 3D माउस होवर इफ़ेक्ट */
        .founder-card:hover {
          transform: rotateX(0deg) rotateY(0deg) translateZ(60px) translateY(-10px);
          background: rgba(28, 37, 65, 0.92); 
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 
            0 30px 60px -10px rgba(0, 0, 0, 0.6),
            0 70px 100px -15px rgba(0, 0, 0, 0.7),
            inset 0 1px 1px rgba(255, 255, 255, 0.25);
        }

        /* प्रोफाइल फोटो बॉक्स जो कार्ड से बाहर निकलता हुआ (Z-axis) दिखाई देगा */
        .founder-card img {
          width: 150px;
          height: 150px;
          border-radius: 16px;
          object-fit: cover;
          border: 3px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
          background-color: #1c2541;
          transform: translateZ(50px);
        }

        /* टेक्स्ट इनफार्मेशन ब्लॉक */
        .founder-info-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transform: translateZ(30px); 
        }

        /* बैज स्टाइल्स */
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
          background-color: #3a86ff; 
          color: #ffffff;
        }

        .badge.cofounder {
          background-color: #00b4d8; 
          color: #ffffff;
        }

        /* टेक्स्ट कलर्स */
        .founder-card h2 {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff; 
          margin: 0 0 4px 0;
          letter-spacing: -0.5px;
        }

        .founder-card h4 {
          font-size: 1.15rem;
          font-weight: 600;
          color: #90e0ef; 
          margin: 0 0 16px 0;
        }

        .founder-card p {
          font-size: 1.05rem;
          line-height: 1.65;
          color: #cbd5e1; 
          margin: 0;
        }

        /* मोबाइल के लिए सेटिंग */
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

      <div className="founder-content-wrapper">
        <div className="founder-header">
          <h1>Founder & Co-Founders</h1>
          <p>
            Meet the visionary leadership behind BIRO (Bharat Innovation &
            Research Organization), committed to advancing scientific research,
            artificial intelligence, innovation, and global collaboration.
          </p>
        </div>

        <div className="founder-container">
          
          {/* कार्ड 1: Dr. Ansh Upadhyay (Ansh.png) */}
          <div className="founder-card">
            <img
              src={anshPhoto}
              alt="Dr. Ansh Upadhyay"
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

{/* कार्ड 2: Dr. Ansh Singh Rajput (Singh.png) */}
          <div className="founder-card">
            <img
              src={singhPhoto}
              alt="Dr. Ansh Singh Rajput"
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

          {/* कार्ड 3: Dr. Pranjal Tiwari (Pranjal.png) */}
          <div className="founder-card">
            <img
              src={pranjalPhoto}
              alt="Dr. Pranjal Tiwari"
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

          
        </div>
      </div>
    </section>
  );
}

export default Founder;
