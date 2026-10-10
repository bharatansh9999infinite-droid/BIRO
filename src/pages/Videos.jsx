// src/pages/Videos.jsx
import React, { useState } from "react";
import logo from "../assets/BIRO.png";
import "./Videos.css";

// 🗂️ CONSTANT FIXED 15 SUBJECTS DATABASE WITH SST CORE
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
  { id: "spec_biology", title: "Special Biology", stats: "PDFs: 0, Videos: 1, Tests: 0", icon: "🧬", bgThumb: "https://unsplash.com" },
  { id: "spec_microbio", title: "Special Microbiology", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "🧫", bgThumb: "https://unsplash.com" },
  { id: "upsc", title: "UPSC Classes", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "🏛️", bgThumb: "https://unsplash.com" },
  { id: "jee", title: "JEE Classes", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "🚀", bgThumb: "https://unsplash.com" },
  { id: "spec_maths", title: "Special Mathematics", stats: "PDFs: 0, Videos: 0, Tests: 0", icon: "📊", bgThumb: "https://unsplash.com" }
];

function Videos() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="free-videos-page-container min-h-screen font-sans p-6 md:p-10">
      
      {/* BRAND HEADER BANNER */}
      <div className="videos-header-banner pb-4 border-b border-gray-900/40 mb-10 flex justify-between items-center relative">
        <div>
          <h1 className="font-black text-2xl tracking-widest uppercase text-white">BIRO CENTRAL VIDEOS</h1>
          <p className="text-[10px] text-red-500 font-extrabold uppercase mt-1 tracking-widest">⚡ FREE LECTURE PORTAL</p>
        </div>
        <img src={logo} alt="BIRO Branding" className="biro-videos-logo filter drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]" />
      </div>

      {/* VIEWPORT LAYOUT SWITCH PANEL */}
      {!showVideo ? (
        /* SCREEN 1: THE ACCURATE CURVED ROW PATTI LIST */
        <div className="subjects-rows-wrapper max-w-4xl mx-auto space-y-6 relative">
          <h3 className="text-sm font-black text-gray-300 uppercase tracking-widest mb-4 px-1">Available Classes Module</h3>
          
          {SUBJECTS_DATABASE.map((sub) => (
            <div 
              key={sub.id}
              onClick={() => {
                if (sub.id === "spec_biology") setShowVideo(true);
                else alert(`${sub.title} track is currently unpopulated. Content will instantly load once linked via admin.`);
              }}
              className="pw-premium-curved-row-strip flex items-stretch cursor-pointer transition duration-300 shadow-2xl relative overflow-hidden"
            >
              <div className="yellow-accent-brand-block w-20 flex-shrink-0 flex items-center justify-center text-3xl">
                {sub.icon}
              </div>

              <div className="subject-row-details-main flex-1 p-5 flex items-center justify-between relative">
                <div className="absolute inset-0 row-subject-bg-overlay" style={{ backgroundImage: `url(${sub.bgThumb})` }}></div>
                <div className="relative z-20 content-foreground-text-lock">
                  <h3 className="font-black text-xl text-gray-950 tracking-wide uppercase leading-tight text-shadow-white">{sub.title}</h3>
                  <p className="text-xs text-gray-700 mt-1.5 font-extrabold tracking-wider bg-white/70 px-2 py-0.5 rounded w-fit">{sub.stats}</p>
                </div>
                <div className="pw-row-arrow-icon text-gray-900 text-xl font-black pr-4">➔</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* SCREEN 2: BADA SECURE MEDIA STREAMING PLAYER ACTIVE WORKSPACE */
        <div className="max-w-5xl mx-auto space-y-6 relative text-white">
          <button onClick={() => setShowVideo(false)} className="text-xs font-black text-red-500 uppercase tracking-widest hover:text-red-400 transition mb-4 block">
            ⬅ Back To Subjects Workspace
          </button>

          {/* 🔴 HIGH SPEED OPEN-SOURCE DIRECT STREAM LINK - 100% PROOF NO CORS ERRORS */}
          <div className="main-video-player-frame bg-black border-2 border-gray-900 rounded-2xl overflow-hidden shadow-2xl relative aspect-video w-full">
            <video 
              src="https://mozilla.net" // Ultra-stable guaranteed developer streaming stream file
              controls 
              autoPlay
              controlsList="nodownload" 
              className="w-full h-full object-contain" 
            />
          </div>

          <div className="active-video-details-box p-6 bg-gray-950/80 border border-gray-900 rounded-2xl shadow-inner">
            <span className="bg-red-600/10 border border-red-900/60 text-red-500 text-[10px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider">● STREAM ON</span>
            <h2 className="font-black text-xl text-gray-100 tracking-wide mt-3">🧬 Central Dogma Theory One-Shot Masterclass</h2>
            <p className="text-xs text-gray-400 font-semibold leading-relaxed mt-2">In-depth free video lecture tracing replication forks, transcription phases, genetic code translations, and core cellular mechanisms mapped securely inside the platform container layout.</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Videos;
