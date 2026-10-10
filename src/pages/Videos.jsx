// src/pages/Videos.jsx
import React, { useState } from "react";
import logo from "../assets/BIRO.png";
import "./Videos.css";

// 🗂️ CONSTANT FIXED 15 SUBJECTS WITH UNSPLASH BACKGROUND OVERLAYS
const SUBJECTS_DATABASE = [
  { id: "science", title: "Science Core", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "🔬", bgThumb: "https://unsplash.com" },
  { id: "sst", title: "SST Core", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "🗺️", bgThumb: "https://unsplash.com" },
  { id: "maths", title: "Mathematics", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "📐", bgThumb: "https://unsplash.com" },
  { id: "ai", title: "Artificial Intelligence (AI)", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "🤖", bgThumb: "https://unsplash.com" },
  { id: "it", title: "Information Technology (IT)", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "💻", bgThumb: "https://unsplash.com" },
  { id: "cs", title: "Computer Science", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "🖥️", bgThumb: "https://unsplash.com" },
  { id: "hindi", title: "Hindi", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "📝", bgThumb: "https://unsplash.com" },
  { id: "english", title: "English", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "📖", bgThumb: "https://unsplash.com" },
  { id: "sanskrit", title: "Sanskrit", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "📜", bgThumb: "https://unsplash.com" },
  { id: "vyakaran", title: "Vyakaran (Hindi Grammar)", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "✍️", bgThumb: "https://unsplash.com" },
  { id: "eng_grammar", title: "English Grammar", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "🔤", bgThumb: "https://unsplash.com" },
  { id: "spec_biology", title: "Special Biology", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "🧬", bgThumb: "https://unsplash.com" },
  { id: "spec_microbio", title: "Special Microbiology", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "🧫", bgThumb: "https://unsplash.com" },
  { id: "upsc", title: "UPSC Classes", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "🏛️", bgThumb: "https://unsplash.com" },
  { id: "jee", title: "JEE Classes", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "🚀", bgThumb: "https://unsplash.com" },
  { id: "spec_maths", title: "Special Mathematics", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "📊", bgThumb: "https://unsplash.com" }
];

const VIDEOS_REPOSITORY = {
  science: [], sst: [], maths: [], ai: [], it: [], cs: [], hindi: [], english: [], sanskrit: [], 
  vyakaran: [], eng_grammar: [], spec_biology: [], spec_microbio: [], upsc: [], jee: [], spec_maths: []
};

function Videos() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const handleSubjectSelect = (subId) => {
    setSelectedSubject(subId);
    const availableVideos = VIDEOS_REPOSITORY[subId] || [];
    if (availableVideos.length > 0) {
      setActiveVideo(availableVideos); 
    } else {
      setActiveVideo(null);
    }
  };

  return (
    <section className="free-videos-page-container min-h-screen font-sans p-6 md:p-10">
      <div className="videos-header-banner pb-4 border-b border-gray-900/40 mb-10 flex justify-between items-center z-10 relative">
        <div>
          <h1 className="font-black text-2xl tracking-widest uppercase text-white">BIRO CENTRAL VIDEOS</h1>
          <p className="text-[10px] text-red-500 font-extrabold uppercase mt-1 tracking-widest">⚡ PW-MAX PREMIUM SUBJECT MATRIX</p>
        </div>
        <img src={logo} alt="BIRO Branding" className="biro-videos-logo filter drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]" />
      </div>

      {!selectedSubject ? (
        <div className="subjects-rows-wrapper max-w-4xl mx-auto z-10 relative">
          <h3 className="text-sm font-black text-gray-300 uppercase tracking-widest mb-6 px-2">Select Subject Workspace</h3>
          <div className="subjects-list-spacing-container">
            {SUBJECTS_DATABASE.map((sub) => (
              <div key={sub.id} onClick={() => handleSubjectSelect(sub.id)} className="pw-premium-curved-row-strip flex items-stretch cursor-pointer transition duration-300 shadow-2xl relative overflow-hidden" >
                <div className="yellow-accent-brand-block w-20 flex-shrink-0 flex items-center justify-center text-3xl shadow-inner relative z-10">
                  <span className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">{sub.icon}</span>
                </div>
                <div className="subject-row-details-main flex-1 p-5 flex items-center justify-between relative z-10">
                  <div className="absolute inset-0 row-subject-bg-overlay" style={{ backgroundImage: `url(${sub.bgThumb})` }} ></div>
                  <div className="relative z-20 content-foreground-text-lock">
                    <h3 className="font-black text-lg text-gray-950 tracking-wide uppercase leading-tight text-shadow-white">{sub.title}</h3>
                    <p className="text-xs text-gray-700 mt-1 font-extrabold tracking-wider bg-white/70 px-2 py-0.5 rounded w-fit shadow-sm">{sub.stats}</p>
                  </div>
                  <div className="pw-row-arrow-icon text-gray-900 text-xl font-black pr-4 relative z-20">➔</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="active-video-workspace-grid flex flex-col lg:flex-row gap-6 z-10 relative text-white">
          <button onClick={() => setSelectedSubject(null)} className="absolute -top-12 left-0 text-xs font-black text-red-500 uppercase tracking-widest hover:text-red-400 transition" > ⬅ Back To Subjects List </button>
          <div className="flex-1">
            {!activeVideo ? (
              <div className="empty-studio-stage flex flex-col items-center justify-center py-24 border border-dashed border-gray-900 rounded-3xl bg-black/60 w-full aspect-video">
                <span className="text-5xl opacity-30 animate-pulse"> 📼 </span>
                <h4 className="text-lg font-bold text-gray-400 mt-4 tracking-tight">No Videos Inserted Yet</h4>
                <p className="text-xs text-gray-600 mt-1 max-w-sm text-center px-4 leading-relaxed font-semibold"> This subject track is currently unpopulated. Free video lectures will instantly display once added via code. </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="main-video-player-frame bg-black border-2 border-gray-900 rounded-2xl overflow-hidden shadow-2xl relative aspect-video w-full flex items-center justify-center">
                  <video src={activeVideo.videoSrc} controls className="w-full h-full object-contain" controlsList="nodownload" />
                </div>
                <div className="active-video-details-box p-6 bg-gray-950/80 border border-gray-800 rounded-2xl shadow-inner">
                  <span className="bg-red-600/10 border border-red-900/60 text-red-500 text-[10px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider">● STREAM ON</span>
                  <h2 className="font-black text-xl text-gray-100 tracking-wide mt-3">{activeVideo.title}</h2>
                  <p className="text-xs text-gray-400 font-semibold leading-relaxed mt-2">{activeVideo.description}</p>
                </div>
              </div>
            )}
          </div>
          <div className="w-full lg:w-80 bg-gray-950 border border-gray-900 rounded-2xl p-4 h-fit text-white">
            <h4 className="text-[10px] text-gray-500 font-black uppercase tracking-wider mb-3 px-1">LECTURES REPOSITORY</h4>
            {!VIDEOS_REPOSITORY[selectedSubject] || VIDEOS_REPOSITORY[selectedSubject].length === 0 ? (
              <p className="text-xs text-gray-600 p-2 italic font-bold">List Empty</p>
            ) : (
              VIDEOS_REPOSITORY[selectedSubject].map((vid) => (
                <div key={vid.id} onClick={() => setActiveVideo(vid)} className={`p-3 rounded-xl cursor-pointer border text-xs font-bold transition ${activeVideo?.id === vid.id ? "active-video-node border-red-500" : "bg-gray-900/40 border-gray-800 text-gray-400"}`}>{vid.title}</div>
              ))
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Videos;
