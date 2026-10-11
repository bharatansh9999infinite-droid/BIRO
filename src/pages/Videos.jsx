
import React, { useState } from "react";
import logo from "../assets/BIRO.png";

// Complete subjects database
const SUBJECTS_DATABASE = [
  {
    id: "science",
    title: "Science Core",
    stats: "PDFs: 0, Videos: 2, Tests: 0",
    icon: "🔬",
    videosList: [
      {
        id: "v1",
        title: "Science - Chapter 1: Foundation Lecture",
        desc: "Review of core physical science concepts.",
        src: "",
      },
      {
        id: "v2",
        title: "Science - Chapter 2: Chemical Reactions",
        desc: "Understanding chemical equations and reactions.",
        src: "",
      },
    ],
  },
  {
    id: "sst",
    title: "SST Core",
    stats: "PDFs: 0, Videos: 0, Tests: 0",
    icon: "🗺️",
    videosList: [],
  },
  {
    id: "maths",
    title: "Mathematics",
    stats: "PDFs: 0, Videos: 0, Tests: 0",
    icon: "📐",
    videosList: [],
  },
  {
    id: "ai",
    title: "Artificial Intelligence (AI)",
    stats: "PDFs: 0, Videos: 0, Tests: 0",
    icon: "🤖",
    videosList: [],
  },
  {
    id: "it",
    title: "Information Technology (IT)",
    stats: "PDFs: 0, Videos: 0, Tests: 0",
    icon: "💻",
    videosList: [],
  },
  {
    id: "cs",
    title: "Computer Science",
    stats: "PDFs: 0, Videos: 0, Tests: 0",
    icon: "🖥️",
    videosList: [],
  },
  {
    id: "hindi",
    title: "Hindi",
    stats: "PDFs: 0, Videos: 0, Tests: 0",
    icon: "📝",
    videosList: [],
  },
  {
    id: "english",
    title: "English",
    stats: "PDFs: 0, Videos: 0, Tests: 0",
    icon: "📖",
    videosList: [],
  },
  {
    id: "sanskrit",
    title: "Sanskrit",
    stats: "PDFs: 0, Videos: 0, Tests: 0",
    icon: "📜",
    videosList: [],
  },
  {
    id: "vyakaran",
    title: "Vyakaran (Hindi Grammar)",
    stats: "PDFs: 0, Videos: 0, Tests: 0",
    icon: "✍️",
    videosList: [],
  },
  {
    id: "eng_grammar",
    title: "English Grammar",
    stats: "PDFs: 0, Videos: 0, Tests: 0",
    icon: "🔤",
    videosList: [],
  },
  {
    id: "spec_biology",
    title: "Special Biology",
    stats: "PDFs: 0, Videos: 0, Tests: 0",
    icon: "🧬",
    videosList: [],
  },
  {
    id: "spec_microbio",
    title: "Special Microbiology",
    stats: "PDFs: 0, Videos: 0, Tests: 0",
    icon: "🧫",
    videosList: [],
  },
  {
    id: "upsc",
    title: "UPSC Classes",
    stats: "PDFs: 0, Videos: 0, Tests: 0",
    icon: "🏛️",
    videosList: [],
  },
  {
    id: "jee",
    title: "JEE Classes",
    stats: "PDFs: 0, Videos: 0, Tests: 0",
    icon: "🚀",
    videosList: [],
  },
  {
    id: "spec_maths",
    title: "Special Mathematics",
    stats: "PDFs: 0, Videos: 0, Tests: 0",
    icon: "📊",
    videosList: [],
  },
];

function Videos() {
  const [currentView, setCurrentView] = useState("subjects");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubjectClick = (subject) => {
    if (subject.videosList.length > 0) {
      setSelectedSubject(subject);
      setCurrentView("lectures");
    } else {
      window.alert(
        `${subject.title} का ट्रैक अभी खाली है। जल्द ही लेक्चर जोड़े जाएंगे।`
      );
    }
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setCurrentView("player");
  };

  const goBackToSubjects = () => {
    setCurrentView("subjects");
    setSelectedSubject(null);
    setSelectedVideo(null);
  };

  const goBackToLectures = () => {
    setCurrentView("lectures");
    setSelectedVideo(null);
  };

  return (
    <section className="free-videos-page-container">
      <style>{`
        .free-videos-page-container {
          box-sizing: border-box;
          min-height: 100vh;
          padding: 100px 8% 80px;
          position: relative;
          overflow-x: hidden;
          font-family: Inter, system-ui, -apple-system, sans-serif;
          background: radial-gradient(
            circle at top,
            #064e3b 0%,
            #022c22 100%
          );
          perspective: 1500px;
        }

        .free-videos-page-container *,
        .free-videos-page-container *::before,
        .free-videos-page-container *::after {
          box-sizing: border-box;
        }

        .videos-header-banner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 25px 40px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          margin-bottom: 50px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }

        .videos-brand {
          display: flex;
          align-items: center;
          gap: 20px;
          min-width: 0;
        }

        .biro-videos-logo {
          height: 60px;
          max-width: 140px;
          object-fit: contain;
        }

        .videos-header-banner h1 {
          font-size: clamp(1.3rem, 3vw, 2.2rem);
          font-weight: 900;
          color: #fff;
          margin: 0;
          letter-spacing: 1px;
          overflow-wrap: anywhere;
        }

        .videos-header-banner p {
          font-size: 0.8rem;
          color: #ef4444;
          font-weight: 800;
          letter-spacing: 2px;
          margin: 8px 0 0;
        }

        .section-title-text {
          font-size: 1.2rem;
          font-weight: 800;
          color: #e2e8f0;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0 0 25px;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .subjects-rows-wrapper,
        .lectures-list-wrapper {
          display: flex;
          flex-direction: column;
          gap: 35px;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        .pw-premium-curved-row-strip {
          display: flex;
          align-items: stretch;
          width: 100%;
          min-width: 0;
          padding: 0;
          text-align: left;
          color: inherit;
          font: inherit;
          background: rgba(15, 23, 42, 0.78);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-top: 4px solid #f59e0b;
          border-bottom: 4px solid #d97706;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          box-shadow:
            0 15px 35px -10px rgba(0, 0, 0, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.15);
          transform: rotateX(2deg);
          transform-style: preserve-3d;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
          overflow: hidden;
          cursor: pointer;
        }

        .pw-premium-curved-row-strip:hover {
          transform: rotateX(0deg) translateY(-5px);
          background: rgba(15, 23, 42, 0.92);
          box-shadow:
            0 25px 50px -10px rgba(0, 0, 0, 0.6),
            inset 0 1px 1px rgba(255, 255, 255, 0.25);
        }

        .pw-premium-curved-row-strip:focus-visible,
        .back-workspace-btn:focus-visible {
          outline: 3px solid #fbbf24;
          outline-offset: 4px;
        }

        .yellow-accent-brand-block {
          flex: 0 0 80px;
          min-height: 100px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.2rem;
          box-shadow: 5px 0 15px rgba(0, 0, 0, 0.2);
        }

        .subject-row-details-main {
          flex: 1;
          min-width: 0;
          padding: 25px 35px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .content-foreground-text-lock {
          min-width: 0;
        }

        .content-foreground-text-lock h3 {
          font-size: 1.35rem;
          font-weight: 900;
          color: #fff;
          margin: 0;
          letter-spacing: 0.3px;
          overflow-wrap: anywhere;
        }

        .content-foreground-text-lock p {
          font-size: 0.8rem;
          color: #0f172a;
          margin: 8px 0 0;
          font-weight: 800;
          letter-spacing: 0.3px;
          background: rgba(255, 255, 255, 0.88);
          padding: 5px 10px;
          border-radius: 6px;
          width: fit-content;
          max-width: 100%;
        }

        .lecture-description {
          font-size: 0.9rem;
          color: #cbd5e1;
          margin: 10px 0 0;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .pw-row-arrow-icon {
          flex-shrink: 0;
          font-size: 1.5rem;
          color: #f59e0b;
          transition: transform 0.3s ease;
        }

        .pw-premium-curved-row-strip:hover .pw-row-arrow-icon {
          transform: translateX(6px) scale(1.1);
        }

        .back-workspace-btn {
          background: rgba(239, 68, 68, 0.15);
          color: #fecaca;
          border: 1px solid rgba(239, 68, 68, 0.4);
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 800;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 30px;
        }

        .back-workspace-btn:hover {
          background: #ef4444;
          color: #fff;
        }

        .video-player-workspace {
          width: 100%;
          max-width: 950px;
          margin: 0 auto;
        }

        .main-video-player-frame {
          background: #000;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
          margin-bottom: 30px;
          aspect-ratio: 16 / 9;
        }

        .main-video-player-frame video {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #000;
        }

        .video-placeholder {
          min-height: 220px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 24px;
          color: #cbd5e1;
          text-align: center;
        }

        .video-placeholder strong {
          color: #fff;
          font-size: 1.15rem;
        }

        .active-video-details-box {
          padding: 30px;
          background: rgba(15, 23, 42, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
        }

        .stream-on-badge {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.4);
          color: #86efac;
          font-size: 0.7rem;
          font-weight: 900;
          padding: 6px 12px;
          border-radius: 6px;
          letter-spacing: 1px;
          display: inline-block;
        }

        .active-video-details-box h2 {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          font-weight: 800;
          color: #fff;
          margin: 15px 0 10px;
          overflow-wrap: anywhere;
        }

        .active-video-details-box p {
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 768px) {
          .free-videos-page-container {
            padding: 90px 5% 50px;
          }

          .videos-header-banner {
            flex-direction: column;
            text-align: center;
            padding: 22px;
            margin-bottom: 35px;
          }

          .videos-brand {
            flex-direction: column;
            gap: 12px;
          }

          .subjects-rows-wrapper,
          .lectures-list-wrapper {
            gap: 22px;
          }

          .pw-premium-curved-row-strip {
            transform: none;
          }

          .subject-row-details-main {
            padding: 18px 16px;
            gap: 12px;
          }

          .yellow-accent-brand-block {
            flex-basis: 60px;
            min-height: 90px;
            font-size: 1.7rem;
          }

          .content-foreground-text-lock h3 {
            font-size: 1.05rem;
          }

          .content-foreground-text-lock p {
            font-size: 0.7rem;
            white-space: normal;
          }

          .active-video-details-box {
            padding: 22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pw-premium-curved-row-strip,
          .pw-row-arrow-icon,
          .back-workspace-btn {
            transition: none;
          }
        }
      `}</style>

      {/* Brand header */}
      <header className="videos-header-banner">
        <div className="videos-brand">
          <img
            src={logo}
            alt="BIRO Central logo"
            className="biro-videos-logo"
          />

          <div>
            <h1>BIRO CENTRAL VIDEOS</h1>
            <p>⚡ FREE LECTURE PORTAL</p>
          </div>
        </div>
      </header>

      {/* View 1: Subjects */}
      {currentView === "subjects" && (
        <section>
          <h2 className="section-title-text">
            Available Classes Module
          </h2>

          <div className="subjects-rows-wrapper">
            {SUBJECTS_DATABASE.map((subject) => (
              <button
                key={subject.id}
                type="button"
                onClick={() => handleSubjectClick(subject)}
                className="pw-premium-curved-row-strip"
                aria-label={`Open ${subject.title}`}
              >
                <span className="yellow-accent-brand-block">
                  {subject.icon}
                </span>

                <span className="subject-row-details-main">
                  <span className="content-foreground-text-lock">
                    <h3>{subject.title}</h3>
                    <p>{subject.stats}</p>
                  </span>

                  <span className="pw-row-arrow-icon" aria-hidden="true">
                    ➔
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* View 2: Lectures */}
      {currentView === "lectures" && selectedSubject && (
        <section>
          <button
            type="button"
            onClick={goBackToSubjects}
            className="back-workspace-btn"
          >
            ⬅ Back To Subjects
          </button>

          <h2 className="section-title-text">
            {selectedSubject.title} - Available Lectures
          </h2>

          <div className="lectures-list-wrapper">
            {selectedSubject.videosList.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => handleVideoClick(video)}
                className="pw-premium-curved-row-strip"
                aria-label={`Play ${video.title}`}
              >
                <span className="yellow-accent-brand-block">
                  ▶
                </span>

                <span className="subject-row-details-main">
                  <span className="content-foreground-text-lock">
                    <h3>{video.title}</h3>
                    <span className="lecture-description">
                      {video.desc}
                    </span>
                  </span>

                  <span className="pw-row-arrow-icon" aria-hidden="true">
                    ➔
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* View 3: Video player */}
      {currentView === "player" && selectedVideo && (
        <section className="video-player-workspace">
          <button
            type="button"
            onClick={goBackToLectures}
            className="back-workspace-btn"
          >
            ⬅ Back To Lectures List
          </button>

          <div className="main-video-player-frame">
            {selectedVideo.src ? (
              <video
                key={selectedVideo.src}
                controls
                playsInline
                preload="metadata"
              >
                <source src={selectedVideo.src} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            ) : (
              <div className="video-placeholder">
                <span style={{ fontSize: "2.5rem" }}>▶</span>
                <strong>Lecture video is not uploaded yet</strong>
                <span>
                  Add a valid video URL to this lecture's src field
                  in SUBJECTS_DATABASE.
                </span>
              </div>
            )}
          </div>

          <div className="active-video-details-box">
            <span className="stream-on-badge">
              ● LECTURE PLAYER
            </span>

            <h2>{selectedVideo.title}</h2>
            <p>{selectedVideo.desc}</p>
          </div>
        </section>
      )}
    </section>
  );
}

export default Videos;
