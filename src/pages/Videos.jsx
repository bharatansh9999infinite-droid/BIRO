// src/pages/Videos.jsx
import React, { useState } from "react";
import logo from "../assets/BIRO.png";

// 🎯 DIRECT SECURE LOCAL MP4 FILE IMPORT
// Aapne jo assets mein free_biology_lecture.mp4 dali hai, yeh use securely fetch karega
import freeLectureMP4 from "../assets/free_biology_lecture.mp4";
import "./Videos.css";

function Videos() {
  // 🗂️ CODING CHANNELS LIST: Only you control this array manually from the code
  const [freeLectures] = useState([
    {
      id: "free-lecture-01",
      title: "🧬 Class 10 & NEET Free Foundation - Biology Endocrine Glands One-Shot",
      description: "Official free classroom stream covering complete hormone coordination systems, diagnostic gland structure drawings, and target unsolved question analysis.",
      videoSrc: freeLectureMP4, // Embedded directly via secure coding import
      duration: "45:12",
      instructor: "Doctor Ansh Upadhyay"
    }
  ]);

  const [currentVideo, setCurrentVideo] = useState(freeLectures[0]);

  return (
    <section className="free-videos-page-container text-white min-h-screen font-sans flex flex-col lg:flex-row">
      
      {/* 🔮 LEFT SIDEBAR: BIRO FREE VIDEOS CATALOG TRACK */}
      <div className="videos-sidebar w-full lg:w-80 bg-gray-950 border-r border-gray-900 flex flex-col">
        <div className="sidebar-header p-5 border-b border-gray-900 flex items-center justify-center">
          <img 
            src={logo} 
            alt="BIRO Branding" 
            className="biro-videos-logo filter drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]" 
          />
        </div>
        
        {/* Playlist of free videos controlled strictly by your code code entries */}
        <div className="playlist-scroll-area flex-1 overflow-y-auto p-4 space-y-3">
          <p className="text-[10px] text-gray-500 font-black uppercase tracking-wider px-1">AVAILABLE FREE LECTURES</p>
          {freeLectures.map((vid) => (
            <div 
              key={vid.id}
              onClick={() => setCurrentVideo(vid)}
              className={`playlist-video-item p-3.5 rounded-xl cursor-pointer transition-all border ${
                currentVideo.id === vid.id 
                  ? "active-video-node text-white" 
                  : "bg-gray-900/40 border-gray-800 text-gray-400 hover:bg-gray-900"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-red-500 font-bold text-xs">📼 FREE</span>
                <span className="text-[10px] text-gray-500 ml-auto font-black">{vid.duration}</span>
              </div>
              <h4 className="font-bold text-xs line-clamp-2 text-gray-200">{vid.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* 🚀 RIGHT SIDE: MAIN SECURE IN-APP VIDEO STREAM PLAYER */}
      <div className="videos-main-viewport flex-1 p-6 md:p-8 flex flex-col">
        
        {/* Bounded Top Section Title */}
        <div className="videos-header-banner pb-4 border-b border-gray-900 mb-6">
          <h1 className="font-black text-2xl tracking-widest uppercase text-white">
            BIRO FREE VIDEOS CENTRAL
          </h1>
          <p className="text-[10px] text-red-500 font-extrabold uppercase mt-1 tracking-widest">
            ⚡ INTERNAL SECURE MEDIA CONTROLLER SITE
          </p>
        </div>

        {/* 🔴 BADA SECURE PLAYER SYSTEM (Plays strictly inside your website layout) */}
        <div className="main-video-player-frame bg-black border-2 border-gray-900 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.9)] relative aspect-video w-full max-w-5xl">
          <video 
            src={currentVideo.videoSrc} 
            controls 
            controlsList="nodownload" // Stops standard browser download popup leaks
            className="w-full h-full object-contain"
            poster={logo} // Uses your logo as default video placeholder thumbnail cover
          />
        </div>

        {/* ACTIVE MOUNTED VIDEO DESCRIPTION AREA PACKAGE */}
        <div className="active-video-details-box mt-6 p-6 bg-gray-950/60 border border-gray-900 rounded-2xl max-w-5xl shadow-inner">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-red-600/10 border border-red-900/60 text-red-500 text-[10px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider">
              ● STREAM ACTIVE
            </span>
            <span className="text-xs text-gray-400 font-bold">Uploaded by: <strong className="text-gray-200">{currentVideo.instructor}</strong></span>
          </div>

          <h2 className="font-black text-xl text-gray-100 tracking-wide leading-snug">
            {currentVideo.title}
          </h2>
          
          <p className="text-xs text-gray-400 font-semibold leading-relaxed mt-2 tracking-wide text-justify">
            {currentVideo.description}
          </p>
        </div>

      </div>
    </section>
  );
}

export default Videos;
