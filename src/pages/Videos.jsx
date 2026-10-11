import React, { useState } from "react";

function Videos() {
  // वीडियो प्लेयर मॉडल को ओपन/क्लोज और वीडियो ID ट्रैक करने के लिए स्टेट्स
  const [activeVideo, setActiveVideo] = useState(null);

  // पट्टियों पर क्लिक करने पर जो वीडियो चलानी है, उनके डेटा का ऑब्जेक्ट
  const subjectsData = [
    {
      id: "science",
      title: "Science Core",
      meta: "PDFs: 0, Videos: 1, Tests: 0",
      // ⚠️ यहाँ अपनी YouTube वीडियो की ID डालें (जैसे: https://youtube.com की ID 'dQw4w9WgXcQ' है)
      youtubeId: "dQw4w9WgXcQ", 
    },
    {
      id: "sst",
      title: "SST Core",
      meta: "PDFs: 0, Videos: 0, Tests: 0",
      youtubeId: "", 
    },
    {
      id: "maths",
      title: "Mathematics",
      meta: "PDFs: 0, Videos: 0, Tests: 0",
      youtubeId: "",
    },
    {
      id: "ai",
      title: "Artificial Intelligence (AI)",
      meta: "PDFs: 0, Videos: 0, Tests: 0",
      youtubeId: "",
    },
    {
      id: "it",
      title: "Information Technology (IT)",
      meta: "PDFs: 0, Videos: 0, Tests: 0",
      youtubeId: "",
    }
  ];

  const handleCardClick = (subject) => {
    if (subject.youtubeId) {
      setActiveVideo(subject.youtubeId);
    } else {
      alert("भाई, इस सब्जेक्ट के अंदर अभी कोई वीडियो उपलब्ध नहीं है!");
    }
  };

  return (
    <section className="videos-page">
      {/* 3D स्टाइल, पट्टियों के बीच गैप और वीडियो प्लेयर मॉडल के लिए CSS */}
      <style>{`
        .videos-page {
          min-height: 100vh;
          padding: 120px 8% 80px 8%;
          position: relative;
          overflow-y: auto;
          overflow-x: hidden;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          perspective: 1500px; 
        }

        .videos-header {
          margin-bottom: 50px;
          text-align: left;
        }

        .videos-header h1 {
          font-size: 3.5rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 10px 0;
          letter-spacing: -1px;
          text-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }

        .videos-header p {
          font-size: 1.2rem;
          color: #a7f3d0; 
          margin: 0;
          font-weight: 500;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .videos-container {
          display: flex;
          flex-direction: column;
          gap: 35px; /* दो पट्टियों के बीच का गैप */
          width: 100%;
        }

        /* 3D प्रीमियम डार्क ब्लू ग्लास पट्टियाँ */
        .subject-strip-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 25px 40px;
          background: rgba(15, 23, 42, 0.75); 
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          
          border-top: 4px solid #f59e0b; 
          border-bottom: 4px solid #d97706;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          box-shadow: 
            0 15px 30px -10px rgba(0, 0, 0, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.15);

          transform-style: preserve-3d;
          transform: rotateX(2deg) translateZ(0px);
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease;
          cursor: pointer;
        }

        .subject-strip-card:hover {
          transform: rotateX(0deg) translateZ(40px) translateY(-5px);
          background: rgba(15, 23, 42, 0.85); 
          box-shadow: 
            0 25px 45px -10px rgba(0, 0, 0, 0.6),
            inset 0 1px 1px rgba(255, 255, 255, 0.25);
        }

        .subject-info {
          display: flex;
          flex-direction: column;
          gap: 6px;
          transform: translateZ(20px);
        }

        .subject-info h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .subject-meta {
          font-size: 1rem;
          color: #94a3b8;
          margin: 0;
        }

        .action-arrow {
          font-size: 1.5rem;
          color: #f59e0b;
          transform: translateZ(25px);
          transition: transform 0.3s ease;
        }

        .subject-strip-card:hover .action-arrow {
          transform: translateZ(25px) translateX(5px);
        }

        /* 🎬 प्रीमियम 3D वीडियो प्लेयर मॉडल (Popup Overlay) */
        .video-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.3s ease;
        }

        /* 3D ग्लास प्लेयर बॉक्स */
        .video-modal-box {
          width: 90%;
          max-width: 850px;
          background: rgba(30, 41, 59, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          padding: 20px;
          position: relative;
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.8);
          transform: translateZ(50px);
          animation: scaleUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* क्लोज बटन */
        .modal-close-btn {
          position: absolute;
          top: -15px;
          right: -15px;
          width: 40px;
          height: 40px;
          background: #f59e0b;
          color: #0f172a;
          border: none;
          border-radius: 50%;
          font-size: 1.2rem;
          font-weight: 800;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s ease;
        }

        .modal-close-btn:hover {
          transform: scale(1.1) rotate(90deg);
        }

        /* रिस्पॉन्सिव वीडियो रैपर */
        .iframe-wrapper {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
          height: 0;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.4);
        }

        .iframe-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from { transform: scale(0.9) translateY(20px); }
          to { transform: scale(1) translateY(0); }
        }

        @media (max-width: 768px) {
          .subject-strip-card {
            padding: 20px;
            transform: none !important;
          }
          .videos-header h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <div className="founder-content-wrapper">
        <div className="videos-header">
          <h1>BIRO Central Videos</h1>
          <p>सब्जेक्ट पट्टी पर टैप करके प्रीमियम 3D प्लेयर में फुल स्क्रीन वीडियो का आनंद लें।</p>
        </div>

        {/* पट्टियों की लिस्ट */}
        <div className="videos-container">
          {subjectsData.map((subject) => (
            <div 
              key={subject.id}
              className="subject-strip-card"
              onClick={() => handleCardClick(subject)}
            >
              <div className="subject-info">
                <h2>{subject.title}</h2>
                <p className="subject-meta">{subject.meta}</p>
              </div>
              <div className="action-arrow">➔</div>
            </div>
          ))}
        </div>
      </div>

      {/* 🎬 सक्रिय वीडियो होने पर पॉपअप 3D प्लेयर लोड होगा */}
      {activeVideo && (
        <div className="video-modal-overlay" onClick={() => setActiveVideo(null)}>
          <div className="video-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveVideo(null)}>✕</button>
            <div className="iframe-wrapper">
              <iframe
                // youtube/embed/ URL पॉलिसी के नियमों का पूरी तरह पालन करता है जिससे वीडियो कभी ब्लॉक नहीं होगी
                src={`https://youtube.com{activeVideo}?autoplay=1&rel=0`}
                title="BIRO Lecture Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen /* 👈 इससे यूजर वीडियो पर क्लिक करके फुल स्क्रीन मोड एक्टिव कर सकेगा */
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Videos;
