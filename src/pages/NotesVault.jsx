// src/pages/NotesVault.jsx
import React, { useState } from "react";
import logo from "../assets/BIRO.png";

// 🎯 DIRECT LOCAL ASSET PDF IMPORT ENGINE
import biologyPDF from "../assets/biology_core_notes.pdf"; 
import "./NotesVault.css";

function NotesVault() {
  const [activeSubject, setActiveSubject] = useState("main");

  // Premium Custom Data Matrix Layer
  const [adminRealNotes] = useState({
    main: [
      {
        id: "bio-notes-target-01",
        subjectName: "Biology",
        // Yahan aap future mein assets se directly subject ki thumbnail PNG map kar sakte hain
        customThumbnail: "🧬", 
        title: "🧬 NEET Biology - Complete Human Endocrine System & Glands",
        description: "Premium handwritten study notes tracking chemical coordination matrices, hormone feedback dynamics, and detailed step-by-step labeled biological system diagrams.",
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
        
        <div className="subjects-column-list flex-1 overflow-y-auto p-4 space-y-4">
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

      {/* 🚀 RIGHT COLUMN: TARGET 3D BHARATANSH - TELEGRAPH VIEWPORT HUB */}
      <div className="vault-main flex-1 flex flex-col p-8 overflow-y-auto relative">
        
        <div className="stream-header pb-4 border-b border-gray-900 mb-8 z-10 relative">
          <div>
            <h1 className="font-black text-3xl tracking-widest uppercase dynamic-visible-header">
              BHARATANSH - TELEGRAPH
            </h1>
            <p className="text-[10px] text-red-500 font-extrabold uppercase mt-1 tracking-widest">
              ⚡ Premium Linear Repository Nodes
            </p>
          </div>
        </div>

        {/* 📜 DENSE BOUNDED HORIZONTAL ROWS GENERATOR */}
        <div className="notes-row-layout-container space-y-4 z-10 relative">
          {adminRealNotes[activeSubject].map((note) => (
            <div key={note.id} className="premium-split-note-card flex items-stretch bg-gray-900/40 border border-gray-800 rounded-2xl overflow-hidden hover:border-red-500 transition duration-200">
              
              {/* 🔲 LEFT ELEMENT SIDE: PERFECT SQUARE DIBBA FOR THUMBNAIL (Click opens PDF) */}
              <a 
                href={note.pdfFileAsset} 
                target="_blank" 
                rel="noopener noreferrer"
                className="square-subject-wrapper w-36 bg-gray-950 border-r border-gray-800 p-4 flex flex-col items-center justify-center gap-2 flex-shrink-0 text-center cursor-pointer hover:bg-gray-900/60 transition"
                title="Click square to view full PDF document"
              >
                <div className="square-custom-thumb text-3xl w-16 h-16 bg-gradient-to-br from-red-600 to-red-950 border border-red-500 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition duration-200">
                  {note.customThumbnail}
                </div>
                <span className="text-[11px] font-black uppercase text-red-400 tracking-wider">
                  {note.subjectName} (OPEN)
                </span>
              </a>

              {/* 📜 RIGHT ELEMENT SIDE: ROW DETAILS CONTAINING TITLES */}
              <div className="flex-1 p-5 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-black text-base text-gray-100 tracking-wide line-clamp-1">{note.title}</h3>
                    <p className="text-xs text-gray-400 mt-1.5 leading-relaxed line-clamp-2">{note.description}</p>
                  </div>
                  
                  {/* Dedicated Action Button to instantly download file payload */}
                  <a 
                    href={note.pdfFileAsset}
                    download={note.exactFileName}
                    className="bg-red-600 hover:bg-red-700 text-white font-black text-xs px-5 py-3 rounded-xl transition shadow-lg text-center flex items-center justify-center whitespace-nowrap"
                  >
                    DOWNLOAD PDF
                  </a>
                </div>

                <div className="mt-4 pt-2 border-t border-gray-800/40 flex items-center text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  <span>💾 CAPACITY SIZE: {note.fileSize}</span>
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
