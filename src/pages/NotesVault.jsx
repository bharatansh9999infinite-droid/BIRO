// src/pages/NotesVault.jsx
import React, { useState } from "react";
import logo from "../assets/BIRO.png";
import noteImage from "../assets/image_QPwbwS.png"; // Aapka notepad asset image link trace
import "./NotesVault.css";

function NotesVault() {
  const [activeSubject, setActiveSubject] = useState("main");

  // Dynamic Content Matrix Layer initialized directly with your required structural items
  const [adminRealNotes] = useState({
    main: [
      {
        id: "bio-notes-target-01",
        subjectName: "Biology",
        imageAsset: noteImage, // Left square area container mapping image
        title: "🧬 NEET Biology - Complete Human Endocrine System",
        description: "Premium study modules mapping chemical coordination matrices, hormone feedback dynamics, and detailed organ diagrams.",
        fileSize: "4.8 MB"
      },
      {
        id: "chem-notes-target-02",
        subjectName: "Chemistry",
        imageAsset: noteImage,
        title: "🧪 Organic Chemistry - Radical Reaction Mechanisms",
        description: "Detailed reaction tracking sheet covering electrophilic additions, substitution states, and clear chemical structure properties.",
        fileSize: "3.5 MB"
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
            <img src={noteImage} alt="Icon Grid" className="w-10 h-10 object-contain" />
            <span className="font-black text-sm uppercase tracking-widest subject-3d-text">
              BHARATANSH - TELEGRAPH
            </span>
          </div>
        </div>
      </div>

      {/* 🚀 RIGHT COLUMN: TARGET 3D SPLIT ROW GRID SYSTEM */}
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

        {/* 📜 DENSE BOUNDED HORIZONTAL ROWS TRACK GENERATOR */}
        <div className="notes-row-layout-container space-y-4">
          {adminRealNotes[activeSubject].map((note) => (
            <div key={note.id} className="premium-split-note-card flex items-stretch bg-gray-900/40 border border-gray-800 rounded-2xl overflow-hidden hover:border-red-500 transition duration-200">
              
              {/* 🔲 LEFT ELEMENT SIDE: PERFECT SQUARE CONTAINER FOR PHOTO & SUBJECT */}
              <div className="square-subject-wrapper w-36 bg-gray-950 border-r border-gray-800 p-4 flex flex-col items-center justify-center gap-2 flex-shrink-0 text-center">
                <img 
                  src={note.imageAsset} 
                  alt={note.subjectName} 
                  className="square-note-thumbnail w-14 h-14 object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" 
                />
                <span className="text-[11px] font-black uppercase text-red-400 tracking-wider text-shadow">
                  {note.subjectName}
                </span>
              </div>

              {/* 📜 RIGHT ELEMENT SIDE: CHOUDA PATH ROW CONTAINING TITLES */}
              <div className="flex-1 p-5 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-black text-base text-gray-100 tracking-wide line-clamp-1">{note.title}</h3>
                    <p className="text-xs text-gray-400 mt-1.5 leading-relaxed line-clamp-2">{note.description}</p>
                  </div>
                  <button 
                    onClick={() => alert(`Pulling metadata file asset string tracking index: ${note.id}`)}
                    className="bg-red-600 hover:bg-red-700 text-white font-black text-xs px-4 py-2.5 rounded-xl transition shadow-lg active:scale-95 whitespace-nowrap"
                  >
                    DOWNLOAD
                  </button>
                </div>

                <div className="mt-4 pt-2 border-t border-gray-800/40 flex items-center text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  <span>💾 CAPACITY SIZE: {note.fileSize}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bounded Square "Notes" identifier preserved at the baseline bottom layout */}
        <div className="notes-action-footer-panel p-4 border-t border-gray-900 flex justify-start items-center mt-auto">
          <div className="notes-small-square-indicator bg-gray-900 border border-red-600 text-red-500 font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.15)]">
            Notes
          </div>
        </div>

      </div>
    </section>
  );
}

export default NotesVault;
