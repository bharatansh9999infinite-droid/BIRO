// src/pages/Videos.jsx
import React, { useState } from "react";
import logo from "../assets/BIRO.png";
import "./Videos.css";

// 🗂️ CONSTANT FIXED 15 SUBJECTS DATABASE WITH DYNAMIC CUSTOM THUMBNAIL TRACKS
const SUBJECTS_DATABASE = [
  { id: "science", title: "Science Core", stats: "PDFs: 86, Videos: 1, Tests: 9", icon: "🔬", customPng: null },
  { id: "maths", title: "Mathematics", stats: "PDFs: 90, Videos: 0, Tests: 5", icon: "📐", customPng: null },
  { id: "ai", title: "Artificial Intelligence (AI)", stats: "PDFs: 24, Videos: 0, Tests: 0", icon: "🤖", customPng: null },
  { id: "it", title: "Information Technology (IT)", stats: "PDFs: 30, Videos: 0, Tests: 0", icon: "💻", customPng: null },
  { id: "cs", title: "Computer Science", stats: "PDFs: 40, Videos: 0, Tests: 0", icon: "🖥️", customPng: null },
  { id: "hindi", title: "Hindi", stats: "PDFs: 50, Videos: 0, Tests: 4", icon: "📝", customPng: null },
  { id: "english", title: "English", stats: "PDFs: 35, Videos: 0, Tests: 2", icon: "📖", customPng: null },
  { id: "sanskrit", title: "Sanskrit", stats: "PDFs: 20, Videos: 0, Tests: 0", icon: "📜", customPng: null },
  { id: "vyakaran", title: "Vyakaran (Hindi Grammar)", stats: "PDFs: 25, Videos: 0, Tests: 5", icon: "✍️", customPng: null },
  { id: "eng_grammar", title: "English Grammar", stats: "PDFs: 28, Videos: 0, Tests: 3", icon: "🔤", customPng: null },
  { id: "spec_biology", title: "Special Biology", stats: "PDFs: 60, Videos: 0, Tests: 8", icon: "🧬", customPng: null },
  { id: "spec_microbio", title: "Special Microbiology", stats: "PDFs: 15, Videos: 0, Tests: 0", icon: "🧫", customPng: null },
  { id: "upsc", title: "UPSC Classes", stats: "PDFs: 110, Videos: 0, Tests: 12", icon: "🏛️", customPng: null },
  { id: "jee", title: "JEE Classes", stats: "PDFs: 95, Videos: 0, Tests: 15", icon: "🚀", customPng: null },
  { id: "spec_maths", title: "Special Mathematics", stats: "PDFs: 70, Videos: 0, Tests: 6", icon: "📊", customPng: null }
];

const VIDEOS_REPOSITORY = {
  science: [
    {
      id: "sci-01",
      title: "🔬 Class 10 Free Science Foundation - Chemical Reactions One-Shot",
      description: "Official free classroom stream covering balancing equations and oxidation states reactions analysis.",
      videoSrc: "", 
      instructor: "Doctor Ansh Upadhyay",
      duration: "42:15"
    }
  ],
  maths: [], ai: [], it: [], cs: [], hindi: [], english: [], sanskrit: [], 
  vyakaran: [], eng_grammar: [], spec_biology: [], spec_microbio: [], upsc: [], jee: [], spec_maths: []
};

function Videos() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const handleSubjectSelect = (subId) => {
    setSelectedSubject(subId);
    const availableVideos = VIDEOS_REPOSITORY[subId] || [];
    if (availableVideos.length > 0) {
      setActiveVideo(availableVideos[0]); 
    } else {
      setActiveVideo(null);
    }
  };

  return (
    <section className="free-videos-page-container min-h-screen font-sans p-6 md:p-8">
      
      {/* TOP HEADER CONSOLE */}
      <div className="videos-header-banner pb-4 border-b border-gray-900/40 mb-8 flex justify-between items-center z-10 relative">
        <div>
          <h1 className="font-black text-2xl tracking-widest uppercase text-white">
            BIRO CENTRAL VIDEOS
          </h1>
          <p className="text-[10px] text-red-500 font-extrabold uppercase mt-1 tracking-widest">
            ⚡ PW-MAX 15 SUBJECT ENGINE
          </p>
        </div>
        <img src={logo} alt="BIRO Branding" className="biro-videos-logo filter drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]" />
      </div>

      {/* SCREEN TOGGLE PIPELINE */}
      {!selectedSubject ? (
        /* SCREEN 1: BRIGHT WHITE HORIZONTAL ROWS OVER GREEN BACKGROUND */
        <div className="subjects-rows-wrapper max-w-4xl mx-auto space-y-4 z-10 relative">
          <h3 className="text-sm font-black text-gray-300 uppercase tracking-widest mb-2 px-1">Select Subject Workspace</h3>
          
          {SUBJECTS_DATABASE.map((sub) => (
            <div 
              key={sub.id}
              onClick={() => handleSubjectSelect(sub.id)}
              className="pw-white-subject-row-strip bg-white text-gray-950 p-5 rounded-2xl flex items-center justify-between cursor-pointer transition duration-300 shadow-xl"
            >
              <div className="flex items-center gap-5">
                {/* 🖼️ DYNAMIC UNIQUE THUMBNAIL DIBBA: Default emoji or manual image asset path */}
                <div className="subject-square-avatar w-14 h-14 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-2xl shadow-inner flex-shrink-0">
                  {sub.customPng ? (
                    <img src={sub.customPng} alt={sub.title} className="w-full h-full object-contain rounded-xl" />
                  ) : (
                    <span>{sub.icon}</span>
                  )}
                </div>
                
                <div>
                  <h3 className="font-black text-base text-gray-900 tracking-wide leading-tight">{sub.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 font-bold">{sub.stats}</p>
                </div>
              </div>
              <div className="pw-row-arrow-icon text-gray-400 text-lg font-bold pr-2">➔</div>
            </div>
          ))}
        </div>
      ) : (
        /* SCREEN 2: MAIN COMPILER IN-APP VIDEO VIEWPORT AREA */
        <div className="active-video-workspace-grid flex flex-col lg:flex-row gap-6 z-10 relative text-white">
          
          <button 
            onClick={() => setSelectedSubject(null)} 
            className="absolute -top-12 left-0 text-xs font-black text-red-500 uppercase tracking-widest hover:text-red-400 transition"
          >
            ⬅ Back To Subjects List
          </button>

          <div className="flex-1">
            {!activeVideo ? (
              <div className="empty-studio-stage flex flex-col items-center justify-center py-24 border border-dashed border-gray-900 rounded-3xl bg-black/60 w-full aspect-video">
                <span className="text-5xl opacity-30 animate-pulse">存放</span>
                <h4 className="text-lg font-bold text-gray-400 mt-4 tracking-tight">No Videos Inserted Yet</h4>
                <p className="text-xs text-gray-600 mt-1 max-w-sm text-center px-4 leading-relaxed font-semibold">
                  This subject track is currently unpopulated. Free video lectures will instantly display in 3D panels once added via code.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="main-video-player-frame bg-black border-2 border-gray-900 rounded-2xl overflow-hidden shadow-2xl relative aspect-video w-full flex items-center justify-center">
                  <div className="text-center p-6 flex flex-col items-center justify-center">
                    <span className="text-4xl text-red-500 animate-pulse">📺</span>
                    <h4 className="text-sm font-bold text-gray-400 mt-2">Secure Media Stream Active</h4>
                    <p className="text-[11px] text-gray-500 mt-1">{activeVideo.title}</p>
                  </div>
                </div>

                <div className="active-video-details-box p-6 bg-gray-950/80 border border-gray-900 rounded-2xl shadow-inner">
                  <span className="bg-red-600/10 border border-red-900/60 text-red-500 text-[10px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider">● STREAM ON</span>
                  <h2 className="font-black text-xl text-gray-100 tracking-wide mt-3">{activeVideo.title}</h2>
                  <p className="text-xs text-gray-400 font-semibold leading-relaxed mt-2">{activeVideo.description}</p>
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-80 bg-gray-950 border border-gray-900 rounded-2xl p-4 h-fit text-white">
            <h4 className="text-[10px] text-gray-500 font-black uppercase tracking-wider mb-3 px-1">LECTURES REPOSITORY</h4>
            {VIDEOS_REPOSITORY[selectedSubject]?.length === 0 ? (
              <p className="text-xs text-gray-600 p-2 italic font-bold">List Empty</p>
            ) : (
              VIDEOS_REPOSITORY[selectedSubject]?.map((vid) => (
                <div 
                  key={vid.id}
                  onClick={() => setActiveVideo(vid)}
                  className={`p-3 rounded-xl cursor-pointer border text-xs font-bold transition ${
                    activeVideo?.id === vid.id ? "active-video-node border-red-500" : "bg-gray-900/40 border-gray-800 text-gray-400"
                  }`}
                >
                  {vid.title}
                </div>
              ))
            )}
          </div>

        </div>
      )}
    </section>
  );
}

export default Videos;

