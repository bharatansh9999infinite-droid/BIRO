
              import React from "react";

function Founder() {
  return (
    <section className="founder-page">
      {/* 3D Parallax & Dark Blue Glass CSS Injections */}
      <style>{`
        /* मुख्य पेज कंटेनर */
        .founder-page {
          min-height: 100vh;
          padding: 120px 8% 80px 8%;
          position: relative;
          overflow-y: auto;
          overflow-x: hidden;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          background-color: #0b132b; /* इमेज लोड न होने पर फॉलबैक डार्क ब्लू कलर */
          perspective: 1500px; /* कार्ड्स को बेहतरीन 3D पॉप देने के लिए */
        }

        /* 
           फ़िक्स बैकग्राउंड इंजन 
           यह आपकी 'founder.png' इमेज को पूरे स्क्रीन पर फैला देगा।
           जब आप स्क्रोल करेंगे, तो केवल टेक्स्ट और कार्ड्स ऊपर जाएंगे, इमेज वहीं लॉक रहेगी!
        */
        .founder-page::before {
          content: "";
          position: fixed; /* इमेज को स्क्रोलिंग के दौरान एक जगह लॉक रखता है */
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          
          /* 
             हल्का डार्क ओवरले: 
             यह आपकी बैकग्राउंड फोटो को साफ दिखाएगा और ऊपर के ब्लू कार्ड्स को उभरने में मदद करेगा।
          */
          background: 
            linear-gradient(
              rgba(11, 19, 43, 0.40), 
              rgba(28, 37, 65, 0.35)
            ),
            /* आपके एसेट्स फोल्डर से इमेज का सही पाथ */
            url("../assets/founder.png"),
            url("/assets/founder.png"),
            url("founder.png");
            
          background-size: cover;        /* इमेज को बिना काटे पूरी स्क्रीन पर फैलाता है */
          background-position: center;    /* ऑफिस बैकग्राउंड को बिल्कुल बीच में रखता है */
          background-repeat: no-repeat;
          z-index: 1;                    /* इसे टेक्स्ट और कार्ड्स के पीछे रखता है */
          pointer-events: none;          /* माउस क्लिक को डिस्टर्ब नहीं करता */
        }

        /* टेक्स्ट और कार्ड्स की लेयर जो बैकग्राउंड के ऊपर तैरती (Float) हुई दिखेगी */
        .founder-content-wrapper {
          position: relative;
          z-index: 2; 
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* मुख्य हेडर (Title Block) */
        .founder-header {
          margin-bottom: 60px;
          text-align: left;
        }

        .founder-header h1 {
          font-size: 3.8rem;
          font-weight: 800;
          color: #ffffff; /* चमकदार सफेद रंग का टाइटल */
          margin: 0 0 16px 0;
          letter-spacing: -1px;
          text-shadow: 0 10px 25px rgba(0, 0, 0, 0.5); /* 3D लिफ्ट देने के लिए शैडो */
        }

        .founder-header p {
          font-size: 1.3rem;
          color: #f1f5f9; /* साफ़ दिखने वाला ऑफ-व्हाइट सबटाइटल */
          max-width: 850px;
          line-height: 1.65;
          margin: 0;
          font-weight: 500;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        /* कार्ड्स को एक के नीचे एक वर्टिकल स्टैक में रखने के लिए */
        .founder-container {
          display: flex;
          flex-direction: column;
          gap: 45px;
          width: 100%;
        }

        /* 
           प्रीमियम डार्क ब्लू ग्लास कार्ड्स 
           ये ठीक वैसे ही डार्क ब्लू शेड में हैं जैसे पहले थे, जो बैकग्राउंड फोटो के ऊपर उठते हुए दिखेंगे!
        */
        .founder-card {
          display: flex;
          align-items: center;
          gap: 40px;
          width: 100%;
          padding: 40px;
          
          /* रॉयल डार्क ब्लू ट्रांसलूसेंट (Frosted Glass) बैकग्राउंड */
          background: rgba(28, 37, 65, 0.82); 
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12); /* पतला प्रीमियम बॉर्डर */
          border-radius: 24px;

          /* भारी 3D ड्रॉप शैडो जो कार्ड्स को बैकग्राउंड से पूरी तरह अलग (Stand out) करती है */
          box-shadow: 
            0 20px 40px -10px rgba(0, 0, 0, 0.5),
            0 40px 70px -20px rgba(0, 0, 0, 0.6),
            inset 0 1px 1px rgba(255, 255, 255, 0.15);

          /* 3D रोटेशन एंगल्स */
          transform-style: preserve-3d;
          transform: rotateX(3deg) rotateY(-2deg) translateZ(0px);
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease, background 0.3s ease;
        }

        /* माउस हवर करने पर कार्ड्स का और ऊपर हवा में उठना (3D Liftoff) */
        .founder-card:hover {
          transform: rotateX(0deg) rotateY(0deg) translateZ(60px) translateY(-10px);
          background: rgba(28, 37, 65, 0.92); /* हवर होने पर और गहरा ब्लू होगा */
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 
            0 30px 60px -10px rgba(0, 0, 0, 0.6),
            0 70px 100px -15px rgba(0, 0, 0, 0.7),
            inset 0 1px 1px rgba(255, 255, 255, 0.25);
        }

        /* प्रोफाइल फोटो फ्रेम - यह कार्ड से और भी बाहर 3D में निकलेगा */
        .founder-card img {
          width: 150px;
          height: 150px;
          border-radius: 16px;
          object-fit: cover;
          border: 3px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
          background-color: #1c2541;
          
          /* फोटो को Z-axis पर सबसे ऊपर लाने के लिए */
          transform: translateZ(50px);
        }

        /* टेक्स्ट कंटेंट ब्लॉक */
        .founder-info-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transform: translateZ(30px); /* टेक्स्ट को कार्ड के बेस से ऊपर हवा में उठाता है */
        }

        /* ऑफिशियल बैच (Status Tags) */
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
          background-color: #3a86ff; /* ब्राइट इलेक्ट्रिक ब्लू */
          color: #ffffff;
        }

        .badge.cofounder {
          background-color: #00b4d8; /* स्काई ब्लू टोन */
          color: #ffffff;
        }

        /* कार्ड के अंदर के टेक्स्ट कलर्स जो डार्क ब्लू कार्ड पर परफेक्ट चमकेंगे */
        .founder-card h2 {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff; /* मुख्य नाम बिल्कुल वाइट */
          margin: 0 0 4px 0;
          letter-spacing: -0.5px;
        }

        .founder-card h4 {
          font-size: 1.15rem;
          font-weight: 600;
          color: #90e0ef; /* हल्का सायन-ब्लू कलर जो पोस्ट को चमकाएगा */
          margin: 0 0 16px 0;
        }

        .founder-card p {
          font-size: 1.05rem;
          line-height: 1.65;
          color: #cbd5e1; /* पढ़ने में आसान सॉफ्ट ग्रे-वाइट बॉडी टेक्स्ट */
          margin: 0;
        }

        /* मोबाइल स्क्रीन्स के लिए रिस्पॉन्सिव सेटिंग्स */
        @media (max-width: 850px) {
          .founder-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 35px 25px;
            transform: none !important; /* मोबाइल टच पर टिल्ट बंद ताकि लेआउट न बिगड़े */
          }
          .founder-info-block {
            align-items: center;
          }
          .founder-header h1 {
            font-size: 2.8rem;
          }
        }
      `}</style>

      {/* मुख्य स्क्रॉलिंग लेयर */}
      <div className="founder-content-wrapper">
        <div className="founder-header">
          <h1>Founder & Co-Founders</h1>
          <p>
            Meet the visionary leadership behind BIRO (Bharat Innovation &
            Research Organization), committed to advancing scientific research,
            artificial intelligence, innovation, and global collaboration.
          </p>
        </div>

        {/* सारे ब्लू कार्ड्स इस कंटेनर में नीचे की तरफ बढ़ते जाएंगे */}
        <div className="founder-container">
          
          {/* कार्ड 1: Founder */}
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

          {/* कार्ड 2: Co-Founder 1 */}
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

          {/* कार्ड 3: Co-Founder 2 */}
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