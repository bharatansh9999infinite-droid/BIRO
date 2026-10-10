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

      {/* 🚀 RIGHT COLUMN: TARGET BHARATANSH - TELEGRAPH VIEWPORT */}
      <div className="vault-main flex-1 flex flex-col p-8 overflow-y-auto relative">
        
        {/* STYLISH ULTRA-DARK FRAMED TOP HEADER CONTAINER */}
        <div className="stream-header-frame p-5 bg-black/80 border-2 border-red-950/80 rounded-2xl mb-8 z-10 relative shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
          <div>
            <h1 className="font-black text-3xl tracking-widest uppercase dynamic-visible-header">
              BHARATANSH - TELEGRAPH
            </h1>
            <p className="text-[10px] text-red-500 font-extrabold uppercase mt-1 tracking-widest">
              ⚡ PW-Max Premium Repository Core
            </p>
          </div>
        </div>

        {/* 📜 ORNAMENTED CARDS BLOCK TRAILING ROW */}
        <div className="notes-row-layout-container space-y-6 z-10 relative">
          {adminRealNotes[activeSubject].map((note) => (
            <div key={note.id} className="premium-split-note-card flex items-stretch bg-black/90 border border-gray-800 rounded-2xl overflow-hidden hover:border-red-600 transition duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
              
              {/* 🔲 LEFT SIDE: DECORATIVE ORNAMENTED ENVELOPE DIBBA (Click opens PDF) */}
              <a 
                href={note.pdfFileAsset} 
                target="_blank" 
                rel="noopener noreferrer"
                className="ornamented-envelope-wrapper w-40 p-4 flex flex-col items-center justify-center gap-2 flex-shrink-0 text-center cursor-pointer transition relative overflow-hidden"
                title="Click Envelope to view PDF"
              >
                {/* Envelope Geometric Flaps & Corners Design Components */}
                <div className="envelope-corner-top-left"></div>
                <div className="envelope-corner-bottom-right"></div>
                
                <div className="envelope-core-box w-20 h-16 rounded-xl flex flex-col items-center justify-center shadow-inner relative border-t-4 border-red-600 bg-gradient-to-b from-red-950 to-gray-900">
                  <span className="text-2xl filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">📂</span>
                  <div className="envelope-seal-badge"></div>
                </div>
                
                <span className="envelope-subject-label text-[10px] font-black uppercase text-red-400 tracking-widest mt-1 block">
                  {note.subjectName}
                </span>
                <span className="text-[8px] font-bold text-gray-500 uppercase tracking-tighter">Click to View</span>
              </a>

              {/* 📜 RIGHT SIDE: STYLISH DARK FRAMED CONTENT SYSTEM */}
              <div className="flex-1 p-6 flex flex-col justify-between custom-dark-content-frame bg-gradient-to-r from-gray-950 to-black/40">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="space-y-2 flex-1">
                    {/* Dark framed internal component for the sub-topic label */}
                    <div className="topic-frame-badge bg-black border border-red-950 px-3 py-1 rounded-md text-[10px] font-black text-red-500 tracking-widest w-fit uppercase">
                      {note.topicTitle}
                    </div>
                    
                    <h3 className="font-black text-base text-gray-100 tracking-wide leading-snug">
                      {note.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-semibold leading-relaxed max-w-2xl">
                      {note.description}
                    </p>
                  </div>
                  
                  {/* Highly Ornamented Dynamic Action Download Trigger Link */}
                  <a 
                    href={note.pdfFileAsset}
                    download={note.exactFileName}
                    className="ornamented-download-btn bg-gradient-to-b from-red-600 to-red-800 text-white font-black text-xs px-5 py-3.5 rounded-xl transition shadow-xl text-center flex items-center justify-center whitespace-nowrap tracking-wider active:scale-95 border-t border-red-400"
                  >
                    DOWNLOAD PDF
                  </a>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-900 flex items-center justify-between text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  <span>📂 FILE CAPACITY SIZE: <strong className="text-gray-300">{note.fileSize}</strong></span>
                  <span className="text-red-900/60 font-black">Verified Document Node</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bounded Square "Notes" indicator preserved at the baseline bottom layout */}
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
