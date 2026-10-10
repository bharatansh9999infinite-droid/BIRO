// src/pages/NotesVault.jsx
import React, { useState } from "react";
import logo from "../assets/BIRO.png";

// 🎯 DIRECT LOCAL ASSET PDF IMPORT ENGINE
import biologyPDF from "../assets/biology_core_notes.pdf"; 
import "./NotesVault.css";

function NotesVault() {
  const [activeSubject, setActiveSubject] = useState("main");

  const [adminRealNotes] = useState({
    main: [
      {
        id: "bio-notes-target-01",
        subjectName: "Biology Core",
        topicTitle: "🧬 HUMAN ENDOCRINE SYSTEM",
        title: "NEET Biology - Complete Human Endocrine System & Glands Notes",
        description: "Premium handwritten study modules mapping chemical coordination matrices, hormone feedback dynamics, and detailed step-by-step labeled biological diagrams.",
        fileSize: "4.8 MB",
        pdfFileAsset: biologyPDF,
        exactFileName: "biology_core_notes.pdf"
      }
    ]
  });

  return (
    <section className="notes-vault-container text-white min-h-screen font-sans flex">
      
      {/* 🔮 LEFT COLUMN: THICK PREMIUM SINGLE ROW TRACK */}
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

      {/* 🚀 RIGHT COLUMN: TARGET 3D BHARATANSH - TELEGRAPH VIEWPORT */}
      <div className="vault-main flex-1 flex flex-col p-8 overflow-y-auto relative">
        
        <div className="stream-header-frame p-5 bg-black/80 border-2 border-red-950/80 rounded-2xl mb-8 z-10 relative">
          <div>
            <h1 className="font-black text-3xl tracking-widest uppercase dynamic-visible-header">
              BHARATANSH - TELEGRAPH
            </h1>
            <p className="text-[10px] text-red-500 font-extrabold uppercase mt-1 tracking-widest">
              ⚡ PW-Max Premium Repository Core
            </p>
          </div>
        </div>

        {/* 📜 DENSE BOUNDED RECTANGULAR ROW STRIP GENERATOR */}
        <div className="notes-row-layout-container space-y-6 z-10 relative">
          {adminRealNotes[activeSubject].map((note) => (
            <div key={note.id} className="premium-split-note-card interactive-envelope-row flex items-stretch bg-black/90 border border-gray-800 rounded-2xl overflow-hidden hover:border-red-600 transition duration-300">
              
              {/* 🔲 LEFT ELEMENT SIDE: SOLID EXTRA WIDE FULLY LOADED ENVELOPE BLOCK */}
              <a 
                href={note.pdfFileAsset} 
                target="_blank" 
                rel="noopener noreferrer"
                className="fully-loaded-envelope-container w-48 p-6 flex flex-col items-center justify-center gap-3 flex-shrink-0 text-center cursor-pointer transition relative bg-gradient-to-b from-gray-950 to-black border-r border-gray-800"
                title="Click Envelope Node to deploy file"
              >
                <div className="envelope-3d-heavy-box w-28 h-20 rounded-xl flex flex-col items-center justify-center relative border-t-4 border-red-600 bg-gradient-to-b from-red-950 via-gray-900 to-black shadow-2xl">
                  <span className="text-3xl filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">📂</span>
                  <div className="envelope-heavy-seal"></div>
                </div>
                <div className="mt-1">
                  <span className="text-[11px] font-black uppercase text-red-400 tracking-widest block">{note.subjectName}</span>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tight block mt-0.5">Click to Open</span>
                </div>
              </a>

              {/* 📜 RIGHT ELEMENT SIDE: BOTTOM-ALIGNED DENSE METADATA AREA */}
              <div className="flex-1 p-6 flex flex-col justify-end relative group custom-dense-bottom-frame bg-gradient-to-r from-gray-950 to-black/40">
                
                {/* Upper dynamic top badge for the strict topic classification */}
                <div className="absolute top-6 left-6 topic-frame-badge bg-black border border-red-950 px-3 py-1 rounded-md text-[10px] font-black text-red-500 tracking-widest uppercase">
                  {note.topicTitle}
                </div>

                {/* HIDDEN LINK CONTROLS TRIGGER - REVEALS ON ROW INTERACTION HOVER */}
                <div className="absolute top-4 right-6 hidden-action-trigger-container opacity-0 transition-opacity duration-200">
                  <a 
                    href={note.pdfFileAsset}
                    download={note.exactFileName}
                    className="bg-gradient-to-b from-red-600 to-red-800 text-white font-black text-[11px] px-4 py-2.5 rounded-xl border-t border-red-400 shadow-xl transition"
                  >
                    DOWNLOAD PDF
                  </a>
                </div>

                {/* DENSE STRUCTURE BLOCK: ALL SIGNALS SHIFTED TO THE BOTTOM TERMINAL EDGE */}
                <div className="dense-bottom-text-package mt-12 space-y-2 border-t border-gray-900/60 pt-4">
                  <h3 className="font-black text-base text-gray-100 tracking-wide leading-tight">
                    {note.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-semibold leading-relaxed max-w-3xl">
                    {note.description}
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-gray-500 font-bold uppercase tracking-wider pt-1">
                    <span>📂 FILE CAPACITY SIZE: <strong className="text-gray-300">{note.fileSize}</strong></span>
                    <span className="text-red-900/60 font-black">Verified Document Node</span>
                  </div>
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
