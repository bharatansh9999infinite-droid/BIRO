// src/pages/NotesVault.jsx
import React, { useState } from "react";
import logo from "../assets/BIRO.png"; // Your authentic website logo path link
import "./NotesVault.css";

function NotesVault() {
  const [activeChannel, setActiveChannel] = useState("c1");

  const channelsList = [
    { id: "c1", title: "🎒 Class 10 Notes Node", subtitle: "245 items live" },
    { id: "c2", title: "🧬 NEET Bio Resource Vault", subtitle: "120 items live" }
  ];

  const [notesMatrix] = useState({
    c1: Array.from({ length: 45 }, (_, i) => ({
      id: `c1-note-${i}`,
      code: `CH-${i + 1}`,
      title: `Class 10 Board Test Paper Part ${i + 1}`,
      fileName: `SST_Board_Doc_Part_${i + 1}.pdf`,
      size: "1.1 MB"
    })),
    c2: Array.from({ length: 38 }, (_, i) => ({
      id: `c2-note-${i}`,
      code: `BIO-${i + 1}`,
      title: `NEET Biology Practice Set ${i + 1}`,
      fileName: `NEET_Bio_Target_Set_${i + 1}.pdf`,
      size: "2.4 MB"
    }))
  });

  return (
    <section className="notes-vault-container bg-black text-white min-h-screen font-sans flex">
      
      {/* 🔮 3D STUDIO CYBER SIDEBAR */}
      <div className="vault-sidebar w-64 bg-gray-950 border-r border-gray-900 flex flex-col">
        <div className="sidebar-header p-4 border-b border-gray-900 flex items-center justify-center">
          {/* Text head permanently replaced with your branding logo */}
          <img 
            src={logo} 
            alt="BIRO Platform Logo" 
            className="biro-vault-logo-img filter drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]" 
          />
        </div>
        <div className="channels-list flex-1 overflow-y-auto p-3 space-y-2">
          {channelsList.map((ch) => (
            <div 
              key={ch.id} 
              onClick={() => setActiveChannel(ch.id)}
              className={`channel-card p-3.5 rounded-xl cursor-pointer transition text-xs font-bold uppercase tracking-wider ${
                activeChannel === ch.id 
                  ? "bg-gradient-to-r from-red-950/40 to-black border border-red-500 text-white shadow-[0_0_15px_rgba(220,38,38,0.15)]" 
                  : "hover:bg-gray-900 text-gray-500"
              }`}
            >
              {ch.title}
            </div>
          ))}
        </div>
      </div>

      {/* 🚀 EXTREME 3D STUDIO GRID STAGE VIEWPORT */}
      <div className="vault-main flex-1 flex flex-col bg-radial-gradient p-8 overflow-y-auto">
        <div className="stream-header pb-4 border-b border-gray-900 mb-8 flex justify-between items-center">
          <div>
            <h3 className="font-black text-lg tracking-wide bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              HIGH-DENSITY ISOMETRIC GRID MODULE
            </h3>
            <p className="text-[11px] text-red-500 font-extrabold uppercase mt-0.5 tracking-widest">
              ⚡ 3D Studio Engine Synced
            </p>
          </div>
        </div>

        {/* Dense 18-20 Columns Flow Flex Area */}
        <div className="notes-micro-dense-flex">
          {notesMatrix[activeChannel].map((note) => (
            <div 
              key={note.id} 
              className="notes-3d-cube-card"
              title={`${note.title} (${note.size})`}
              onClick={() => alert(`Active Module Asset: ${note.fileName}\n(Pending global database setup script validation)`)}
            >
              <div className="cube-top-shimmer"></div>
              <div className="cube-icon">📄</div>
              <div className="cube-code-label">{note.code}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default NotesVault;
