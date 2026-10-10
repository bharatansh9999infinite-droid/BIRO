// src/pages/NotesVault.jsx
import React, { useState } from "react";
import "./NotesVault.css";

function NotesVault() {
  const [activeChannel, setActiveChannel] = useState("c1");
  const [typedMessage, setTypedMessage] = useState("");

  const channelsList = [
    { id: "c1", title: "📚 Class 10 Notes & Study", subtitle: "245 members" },
    { id: "c2", title: "🧬 NEET Target Biology Box", subtitle: "120 members" },
    { id: "c3", title: "📝 UP Board Unsolved PYQs", subtitle: "85 members" }
  ];

  const [messagesStream, setMessagesStream] = useState({
    c1: [
      { id: 1, sender: "Ansh Upadhyay", role: "Admin", text: "Welcome to Class 10 Main Hub! Kal ke test ke liye Social Science ke notes niche attach kar diye hain. In keywords ko ache se yaad kar lena.", file: "SST_History_Ch1_Keywords.pdf", size: "1.2 MB", time: "09:30 AM" },
      { id: 2, sender: "Class Monitor", role: "Student", text: "Thank you so much brother! Isme standard short descriptions bohot helpful hain.", file: null, size: null, time: "09:45 AM" }
    ],
    c2: [
      { id: 3, sender: "Ansh Upadhyay", role: "Admin", text: "NEET Aspirants, chemical structure properties of retinol and tocopherol coordinates list is live now. Solve the assignment grid by tonight.", file: "NEET_Bio_Chemical_Retinol_Tocopherol.pdf", size: "4.5 MB", time: "11:15 AM" }
    ],
    c3: [
      { id: 4, sender: "System Bot", role: "System", text: "UP Board 5-Years Unsolved Mathematics Question Papers matrix uploaded for November deployment schedules.", file: "UPBoard_Maths_5Years_Unsolved.pdf", size: "8.9 MB", time: "Yesterday" }
    ]
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!typedMessage.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: "Ansh Upadhyay",
      role: "Admin",
      text: typedMessage,
      file: null, 
      size: null,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessagesStream({
      ...messagesStream,
      [activeChannel]: [...messagesStream[activeChannel], newMsg]
    });
    setTypedMessage("");
  };

  return (
    <section className="notes-vault-container bg-black text-white min-h-screen font-sans flex">
      
      {/* LEFT COLUMN: TELEGRAM SIDEBAR CHANNELS */}
      <div className="vault-sidebar w-80 bg-gray-950 border-r border-gray-900 flex flex-col">
        <div className="sidebar-header p-4 border-b border-gray-900">
          <h2 className="text-xl font-black text-red-500 tracking-wide">💬 BIRO TELE-FEED</h2>
          <p className="text-[10px] text-gray-500 font-bold uppercase mt-0.5">Notes & Question Papers</p>
        </div>
        <div className="channels-list flex-1 overflow-y-auto p-2 space-y-1">
          {channelsList.map((ch) => (
            <div 
              key={ch.id} 
              onClick={() => setActiveChannel(ch.id)}
              className={`channel-card p-3 rounded-xl cursor-pointer transition ${activeChannel === ch.id ? "bg-red-950/30 border border-red-900 text-white" : "hover:bg-gray-900 text-gray-400"}`}
            >
              <h4 className="font-bold text-sm text-gray-200">{ch.title}</h4>
              <p className="text-[11px] text-gray-500 mt-0.5">{ch.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN: TELEGRAM MESSAGES SYSTEM CONSOLE */}
      <div className="vault-main flex-1 flex flex-col bg-gray-950/40">
        
        {/* Stream Channel Bar Title */}
        <div className="stream-header p-4 bg-gray-950/90 border-b border-gray-900 flex justify-between items-center">
          <div>
            <h3 className="font-extrabold text-base text-gray-200">{channelsList.find(c => c.id === activeChannel)?.title}</h3>
            <p className="text-xs text-green-400 font-semibold">● online resource mode active</p>
          </div>
        </div>

        {/* Dynamic Bubble Messages Feed Layout Container */}
        <div className="stream-messages flex-1 overflow-y-auto p-6 space-y-4">
          {messagesStream[activeChannel].map((msg) => (
            <div key={msg.id} className="message-wrapper max-w-2xl bg-gray-900 border border-gray-800/80 p-4 rounded-2xl shadow-md">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-extrabold text-sm text-red-400">{msg.sender}</span>
                <span className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded ${msg.role === 'Admin' ? 'bg-red-600/20 text-red-500 border border-red-900/50' : 'bg-gray-800 text-gray-400'}`}>{msg.role}</span>
                <span className="text-[10px] text-gray-600 ml-auto">{msg.time}</span>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed whitespace-pre-line mt-1.5">{msg.text}</p>
              
              {/* Conditional PDF File Attachment Component Layer */}
              {msg.file && (
                <div className="file-attachment-box mt-3 p-3 bg-black border border-gray-800 rounded-xl flex items-center gap-3">
                  <div className="text-2xl">📄</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-300 truncate">{msg.file}</p>
                    <p className="text-[10px] text-gray-500 font-bold">{msg.size}</p>
                  </div>
                  <a 
                    href="#download" 
                    onClick={(e) => { e.preventDefault(); alert(`Downloading: ${msg.file}\n(Database table configuration sync required for dynamic backend download links).`); }}
                    className="bg-red-600 hover:bg-red-700 text-white text-[11px] font-black px-3 py-1.5 rounded-lg transition"
                  >
                    📥 DOWNLOAD
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Operational Typing Bar Console */}
        <form onSubmit={handleSendMessage} className="stream-input-bar p-4 bg-gray-950 border-t border-gray-900 flex gap-3 items-center">
          <input 
            type="text" 
            value={typedMessage}
            onChange={(e) => setTypedMessage(e.target.value)}
            placeholder="Broadcast a note description or copy paste updates here..." 
            className="flex-1 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-red-500"
          />
          <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition shadow-lg active:scale-95">
            Send Link
          </button>
        </form>

      </div>
    </section>
  );
}

export default NotesVault;
