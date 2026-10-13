
import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/BIRO.png";
import biologyVideo from "../assets/Biology.mp4";
import originVideo from "../assets/Origin.mp4";
const SUBJECTS_DATABASE = [
  {
    id: "science",
    title: "Science Core",
    stats: "PDFs: 0, Videos: 2, Tests: 0",
    icon: "🔬",
    videosList: [
      {
        id: "biology-chapter-1",
        title: "Biology - Chapter 1: Foundation Lecture",
        desc: "Biology Chapter 1 - Foundation Lecture.",
        src: biologyVideo,
      },
      {
        id: "science-chapter-2",
        title: "Science - Chapter 2: Chemical Reactions",
        desc: "In-depth analysis of chemical equations and experimental parameters.",
        src: "",
      },
      {
  id: "science-origin",
  title: "Science - Origin",
  desc: "Science Origin Lecture.",
  src: originVideo,
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

export default function Videos() {
  const [currentView, setCurrentView] = useState("subjects");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [playerError, setPlayerError] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    setPlayerError("");
  }, [selectedVideo]);

  const handleSubjectClick = (subject) => {
    if (subject.videosList.length > 0) {
      setSelectedSubject(subject);
      setCurrentView("lectures");
    } else {
      window.alert(
        `${subject.title} has no lectures available yet. Please check back later.`
      );
    }
  };

  const handleVideoClick = (video) => {
    setPlayerError("");
    setSelectedVideo(video);
    setCurrentView("player");
  };

  const goBackToSubjects = () => {
    videoRef.current?.pause();
    setCurrentView("subjects");
    setSelectedSubject(null);
    setSelectedVideo(null);
    setPlayerError("");
  };

  const goBackToLectures = () => {
    videoRef.current?.pause();
    setCurrentView("lectures");
    setSelectedVideo(null);
    setPlayerError("");
  };

  const handleVideoError = () => {
    const mediaError = videoRef.current?.error;
    const errorCode = mediaError?.code;

    console.error("Video playback error:", {
      code: errorCode,
      message: mediaError?.message,
      source: videoRef.current?.currentSrc,
    });

    if (!selectedVideo?.src) {
      setPlayerError("This lecture video has not been added yet.");
    } else if (errorCode === 1) {
      setPlayerError(
        "Video playback was interrupted. Please try playing the video again."
      );
    } else if (errorCode === 2) {
      setPlayerError(
        "The video could not be loaded. Check the file path and network connection."
      );
    } else if (errorCode === 3) {
      setPlayerError(
        "The video could not be decoded. The file may use an unsupported codec or may be damaged."
      );
    } else if (errorCode === 4) {
      setPlayerError(
        "This video format is not supported or the video file is unavailable. Try an MP4 encoded with H.264 video and AAC audio."
      );
    } else {
      setPlayerError(
        `Video playback failed. Error code: ${errorCode ?? "unknown"}. ${
          mediaError?.message || "Check whether the video file is valid and complete."
        }`
      );
    }
  };

  return (
    <section className="free-videos-page-container">
      <style>{`
        .free-videos-page-container {
          min-height: 100vh;
          padding: 100px 8% 80px;
          overflow-x: hidden;
          font-family: Inter, system-ui, -apple-system, sans-serif;
          background: radial-gradient(circle at top, #064e3b, #022c22);
          color: #fff;
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
          padding: 25px 35px;
          gap: 20px;
          background: rgba(15, 23, 42, 0.88);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          margin-bottom: 45px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }

        .videos-brand {
          display: flex;
          align-items: center;
          gap: 20px;
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
        }

        .videos-header-banner p {
          color: #f87171;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 2px;
          margin: 8px 0 0;
        }

        .section-title-text {
          font-size: 1.2rem;
          font-weight: 800;
          color: #e2e8f0;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin: 0 0 25px;
        }

        .subjects-rows-wrapper,
        .lectures-list-wrapper {
          display: flex;
          flex-direction: column;
          gap: 28px;
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
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-top: 4px solid #f59e0b;
          border-bottom: 4px solid #d97706;
          border-radius: 16px;
          overflow: hidden;
          text-align: left;
          font: inherit;
          color: inherit;
          background: rgba(15, 23, 42, 0.82);
          box-shadow:
            0 15px 35px -10px rgba(0, 0, 0, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.15);
          cursor: pointer;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .pw-premium-curved-row-strip:hover {
          transform: translateY(-4px);
          background: rgba(15, 23, 42, 0.98);
        }

        .pw-premium-curved-row-strip:focus-visible,
        .back-workspace-btn:focus-visible {
          outline: 3px solid #fbbf24;
          outline-offset: 4px;
        }

        .yellow-accent-brand-block {
          flex: 0 0 80px;
          min-height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.1rem;
          background: linear-gradient(135deg, #f59e0b, #d97706);
        }

        .subject-row-details-main {
          flex: 1;
          min-width: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          padding: 24px 30px;
        }

        .content-foreground-text-lock {
          min-width: 0;
        }

        .content-foreground-text-lock h3 {
          margin: 0;
          color: #fff;
          font-size: 1.3rem;
          font-weight: 900;
          overflow-wrap: anywhere;
        }

        .content-foreground-text-lock p {
          display: inline-block;
          max-width: 100%;
          margin: 9px 0 0;
          padding: 5px 10px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.9);
          color: #0f172a;
          font-size: 0.8rem;
          font-weight: 800;
        }

        .lecture-description {
          display: block;
          margin-top: 10px;
          color: #cbd5e1;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .pw-row-arrow-icon {
          flex-shrink: 0;
          color: #f59e0b;
          font-size: 1.5rem;
          transition: transform 0.25s ease;
        }

        .pw-premium-curved-row-strip:hover .pw-row-arrow-icon {
          transform: translateX(5px);
        }

        .back-workspace-btn {
          display: inline-block;
          margin-bottom: 30px;
          padding: 12px 22px;
          border: 1px solid rgba(239, 68, 68, 0.4);
          border-radius: 8px;
          background: rgba(239, 68, 68, 0.15);
          color: #fecaca;
          font-size: 0.9rem;
          font-weight: 800;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .back-workspace-btn:hover {
          background: #ef4444;
          color: white;
        }

        .video-player-workspace {
          width: 100%;
          max-width: 950px;
          margin: 0 auto;
        }

        .main-video-player-frame {
          width: 100%;
          aspect-ratio: 16 / 9;
          margin-bottom: 28px;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          background: #000;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.55);
        }

        .main-video-player-frame video {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #000;
        }

        .video-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          width: 100%;
          height: 100%;
          min-height: 220px;
          padding: 24px;
          color: #cbd5e1;
          text-align: center;
        }

        .video-placeholder strong {
          color: #fff;
          font-size: 1.1rem;
        }

        .player-error {
          margin: 0 0 24px;
          padding: 14px 16px;
          border: 1px solid rgba(248, 113, 113, 0.5);
          border-radius: 10px;
          background: rgba(127, 29, 29, 0.25);
          color: #fecaca;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .active-video-details-box {
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          background: rgba(15, 23, 42, 0.88);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
        }

        .stream-on-badge {
          display: inline-block;
          padding: 6px 12px;
          border: 1px solid rgba(34, 197, 94, 0.4);
          border-radius: 6px;
          background: rgba(34, 197, 94, 0.1);
          color: #86efac;
          font-size: 0.75rem;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .active-video-details-box h2 {
          margin: 15px 0 10px;
          color: #fff;
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          overflow-wrap: anywhere;
        }

        .active-video-details-box p {
          margin: 0;
          color: #cbd5e1;
          font-size: 1rem;
          line-height: 1.7;
        }

        .player-help {
          margin-top: 14px !important;
          font-size: 0.88rem !important;
          color: #a7f3d0 !important;
        }

        @media (max-width: 768px) {
          .free-videos-page-container {
            padding: 90px 5% 50px;
          }

          .videos-header-banner {
            justify-content: center;
            padding: 22px;
            text-align: center;
          }

          .videos-brand {
            flex-direction: column;
            gap: 12px;
          }

          .subjects-rows-wrapper,
          .lectures-list-wrapper {
            gap: 20px;
          }

          .yellow-accent-brand-block {
            flex-basis: 60px;
            min-height: 90px;
            font-size: 1.6rem;
          }

          .subject-row-details-main {
            padding: 18px 14px;
            gap: 10px;
          }

          .content-foreground-text-lock h3 {
            font-size: 1rem;
          }

          .content-foreground-text-lock p {
            font-size: 0.7rem;
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

      <header className="videos-header-banner">
        <div className="videos-brand">
          <img
            src={logo}
            alt="BIRO Logo"
            className="biro-videos-logo"
          />

          <div>
            <h1>BIRO CENTRAL VIDEOS</h1>
            <p>⚡ FREE LECTURE PORTAL</p>
          </div>
        </div>
      </header>

      {/* VIEW 1: SUBJECTS */}
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
                className="pw-premium-curved-row-strip"
                onClick={() => handleSubjectClick(subject)}
              >
                <span className="yellow-accent-brand-block">
                  {subject.icon}
                </span>

                <span className="subject-row-details-main">
                  <span className="content-foreground-text-lock">
                    <h3>{subject.title}</h3>
                    <p>{subject.stats}</p>
                  </span>

                  <span
                    className="pw-row-arrow-icon"
                    aria-hidden="true"
                  >
                    ➔
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* VIEW 2: LECTURES */}
      {currentView === "lectures" && selectedSubject && (
        <section>
          <button
            type="button"
            className="back-workspace-btn"
            onClick={goBackToSubjects}
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
                className="pw-premium-curved-row-strip"
                onClick={() => handleVideoClick(video)}
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

                  <span
                    className="pw-row-arrow-icon"
                    aria-hidden="true"
                  >
                    ➔
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* VIEW 3: VIDEO PLAYER */}
      {currentView === "player" && selectedVideo && (
        <section className="video-player-workspace">
          <button
            type="button"
            className="back-workspace-btn"
            onClick={goBackToLectures}
          >
            ⬅ Back To Lectures List
          </button>

          <div className="main-video-player-frame">
            {selectedVideo.src ? (
              <video
                ref={videoRef}
                key={selectedVideo.id}
                controls
                playsInline
                preload="metadata"
                onError={handleVideoError}
              >
                <source
                  src={selectedVideo.src}
                  type="video/mp4"
                />
                Your browser does not support HTML video.
              </video>
            ) : (
              <div className="video-placeholder">
                <span style={{ fontSize: "2.5rem" }}>▶</span>
                <strong>This video is not available yet.</strong>
                <span>
                  The video file for this lecture has not been added.
                </span>
              </div>
            )}
          </div>

          {playerError && (
            <p className="player-error" role="alert">
              {playerError}
            </p>
          )}

          <div className="active-video-details-box">
            <span className="stream-on-badge">
              ● LECTURE PLAYER
            </span>

            <h2>{selectedVideo.title}</h2>
            <p>{selectedVideo.desc}</p>

            <p className="player-help">
              Make sure the player is not muted and your device volume
              is turned up.
            </p>
          </div>
        </section>
      )}
    </section>
  );
}
