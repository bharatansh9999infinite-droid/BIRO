// src/pages/NotesVault.jsx
import React, { useState } from "react";
import logo from "../assets/BIRO.png";

// 🎯 DIRECT LOCAL ASSET PDF FILE PIPELINE
import biologyPDF from "../assets/biology_core_notes.pdf"; 
import "./NotesVault.css";

function NotesVault() {
  const [activeSubject, setActiveSubject] = useState("main");

  // Premium Bounded Dataset Matrix Layout
  const [adminRealNotes] = useState({
    main: [
      {
        id: "bio-notes-target-01",
        subjectName: "Biology Core",
        topicTitle: "🧬 HUMAN ENDOCRINE SYSTEM TARGET",
        title: "NEET Biology - Complete Human Endocrine System & Glands Handwritten Modules",
        description: "High-density educational document repository sheet mapping chemical coordination parameters, hormone loop mechanisms, and diagnostic gland structural drawings.",
        fileSize: "4.8 MB",
        pdfFileAsset: biologyPDF,
        exactFileName: "biology_core_notes.pdf"
      }
    ]
  });

  return (
    <section className="notes-vault-container text-white min-h-screen font-sans flex">
      
      {/* 🔮 LEFT COLUMN: NAVIGATION CONTROL PANEL DRAWER */}
      <div className="vault-sidebar w-80 bg-gray-950 border-r border-gray-900 flex flex-col">
        <div className="sidebar-header p-4 border-b border-gray-900 flex items-center justify-center">
          <img 
            src={logo} 
            alt="BIRO Core Branding" 
            className="biro-vault-logo-img filter drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]" 
          />
        </div>
        
        <div className="subjects-column-list flex-1 overflow-y-auto p-4">
          <div 
            onClick={() => setActiveSubject("main")}
            className="subject-row-node active-3d-node p-5 rounded-2xl cursor-pointer flex items-center gap-4 transition-all"
          >
            <div className="text-xl w-10 h-10 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center shadow-md">
              💬
            </div>
            <span className="font-black text-sm uppercase tracking-widest subject-3d-text">
              BHARATANSH - TELEGRAPH
            </span>
          </div>
        </div>
      </div>

      {/* 🚀 RIGHT COLUMN: BHARATANSH - TELEGRAPH VIEWPORT GRID CANVAS */}
      <div className="vault-main flex-1 flex flex-col p-8 overflow-y-auto relative">
        
        {/* Dynamic Static Title Container */}
        <div className="stream-header pb-4 border-b border-gray-900 mb-8 z-10 relative">
          <div>
            <h1 className="font-black text-3xl tracking-widest uppercase dynamic-visible-header">
              BHARATANSH - TELEGRAPH
            </h1>
            <p className="text-[10px] text-red-500 font-extrabold uppercase mt-1 tracking-widest">
              ⚡ PW-Max Premium Repository Core
            </p>
          </div>
        </div>

        {/* 📜 DISCIPLINED RIGID ENVELOPE BOUNDARY MATRIX ROW */}
        <div className="notes-row-layout-container space-y-6 z-10 relative">
          {adminRealNotes[activeSubject].map((note) => (
            <div key={note.id} className="rigid-envelope-frame-patti flex flex-col p-6 rounded-2xl border-2 border-red-950 transition duration-300">
              
              {/* LINE 1 FLOW: TOP LEVEL INTERACTION BLOCK */}
              <div className="flex items-center gap-4 border-b border-gray-900/60 pb-3">
                
                {/* Clickable Square Subject Label Node */}
                <a 
                  href={note.pdfFileAsset}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="thick-square-subject-badge bg-gradient-to-br from-red-950 to-black border border-red-900 px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-red-400 hover:border-red-500 transition whitespace-nowrap"
                >
                  {note.subjectName} (Click to View)
                </a>

                {/* 🔗 DIRECT COMPACT COMPONENT DOWNLOAD LINK SYMBOL (Replaced rectangular button) */}
                <a 
                  href={note.pdfFileAsset}
                  download={note.exactFileName}
                  className="thick-blue-anchor-link font-black text-sm tracking-wide uppercase hover:text-blue-400 transition flex items-center gap-1.5"
                  title="Execute file download token stream"
                >
                  <span>🔗</span> DOWNLOAD LINK PDF
                </a>

                {/* Internal specific topic classification layout tracking */}
                <div className="topic-badge-coordinate ml-auto bg-black/60 border border-gray-800 px-3 py-1.5 rounded-lg text-[10px] font-black text-gray-400 tracking-widest uppercase hidden md:block">
                  {note.topicTitle}
                </div>

              </div>

              {/* LINE 2 FLOW: HIGH DENSITY DENSE BOTTOM ALIGNED CONTENT TEXT PACKAGES */}
              <div className="dense-bottom-text-package mt-4 space-y-2">
                <h3 className="font-black text-base text-gray-100 tracking-wide leading-tight dynamic-bone-white-text">
                  {note.title}
                </h3>
                
                <p className="text-xs text-gray-400 font-semibold leading-relaxed max-w-4xl tracking-wide">
                  {note.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  <span>💾 CAPACITY STORAGE SIZE: <strong className="text-gray-300 font-black">{note.fileSize}</strong></span>
                  <span className="text-red-900/50 font-black">Verified Security Node Data</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bounded Square "Notes" identifier preserved at the baseline bottom layout */}
        <div className="notes-action-footer-panel p-4 border-t border-gray-900 flex justify-start items-center mt-auto z-10 relative">
          <div className="notes-small-square-indicator bg-gray-900 border border-red-600 text-red-500 font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.15)]">
            Notes
          </div>
        </div>

      </div>
    </section>
  );
}

export default NotesVault;
