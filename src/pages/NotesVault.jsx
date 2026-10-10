import React, { useState } from "react";
import logo from "../assets/BIRO.png";
import "./NotesVault.css";

function NotesVault() {
  const [activeSubject, setActiveSubject] = useState("bio");
  
  // Clean empty database state loop structure - no notes show until uploaded by admins
  const [adminRealNotes, setAdminRealNotes] = useState({
    bio: [], // Empty row arrays to prevent pre-rendering dummy text notes
    maths: [],
    physics: []
  });

  const subjectsList = [
    { 
      id: "bio", 
      name: "Biology Core", 
      thumb: "https://unsplash.com" 
    },
    { 
      id: "maths", 
      name: "Mathematics", 
      thumb: "https://unsplash.com" 
    },
    { 
      id: "physics", 
      name: "Physics Blast", 
      thumb: "https://unsplash.com" 
    }
  ];

  return (
    <section className="notes-vault-container text-white min-h-screen font-sans flex">
      
      {/* 🔮 LEFT COLUMN: 3D PHOTO-INTEGRATED SIDEBAR */}
      <div className="vault-sidebar w-72 bg-gray-950 border-r border-gray-900 flex flex-col">
        <div className="sidebar-header p-4 border-b border-gray-900 flex items-center justify-center">
          <img 
            src={logo} 
            alt="BIRO Platform Branding" 
            className="biro-vault-logo-img filter drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]" 
          />
        </div>
        
        {/* Dynamic Column List with Photo Thumbnails & 3D Typography */}
        <div className="subjects-column-list flex-1 overflow-y-auto p-3 space-y-3">
          {subjectsList.map((sub) => (
            <div 
              key={sub.id} 
              onClick={() => setActiveSubject(sub.id)}
              className={`subject-row-node p-3 rounded-xl cursor-pointer flex items-center gap-3 transition-all ${
                activeSubject === sub.id 
                  ? "active-3d-node text-white" 
                  : "hover:bg-gray-900/60 text-gray-500"
              }`}
            >
              {/* Photo Thumbnail Element */}
              <img src={sub.thumb} alt={sub.name} className="subject-thumb-img border border-gray-800 rounded-lg object-cover" />
              
              {/* 3D Glowing Text Parameter */}
              <span className="font-black text-xs uppercase tracking-wider subject-3d-text">
                {sub.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 🚀 RIGHT COLUMN: BHARATANSH TELEGRAPH ROW SYSTEM */}
      <div className="vault-main flex-1 flex flex-col p-8 overflow-y-auto">
        <div className="stream-header pb-4 border-b border-gray-900 mb-8 flex justify-between items-center">
          <div>
            <h1 className="font-black text-2xl tracking-widest bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
              BHARATANSH TELEGRAPH
            </h1>
            <p className="text-[10px] text-red-500 font-extrabold uppercase mt-0.5 tracking-widest">
              ⚡ PW-Max Notes Repository Stream
            </p>
          </div>
        </div>

        {/* Dynamic Display Logic - Shows clean layout canvas if zero elements exist */}
        {adminRealNotes[activeSubject].length === 0 ? (
          <div className="empty-studio-stage flex flex-col items-center justify-center flex-1 py-20 border border-dashed border-gray-900/50 rounded-3xl bg-gray-950/20">
            <div className="telegram-cloud-icon text-5xl opacity-30 animate-pulse">📝</div>
            <h4 className="text-lg font-bold text-gray-400 mt-4 tracking-tight">Vault Center Unpopulated</h4>
            <p className="text-xs text-gray-600 mt-1 max-w-sm text-center px-4 leading-relaxed font-semibold">
              Waiting for direct administrator database push variables. Content will automatically align into premium row structures instantly upon upload.
            </p>
          </div>
        ) : (
          <div className="notes-row-layout-container space-y-3">
            {adminRealNotes[activeSubject].map((note) => (
              <div 
                key={note.id} 
                className="premium-note-row-strip bg-gray-900 border border-gray-800 p-4 rounded-xl flex items-center justify-between hover:border-red-500 transition duration-200"
                onClick={() => alert(`Connecting securely to file payload link...`)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl text-red-500">📄</span>
                  <div>
                    <h3 className="font-bold text-sm text-gray-200">{note.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{note.description}</p>
                  </div>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white font-black text-xs px-4 py-2 rounded-lg transition">
                  DOWNLOAD
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default NotesVault;
