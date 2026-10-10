// src/pages/Batches.jsx
import React, { useState } from "react";
import "./Batches.css";

function Batches() {
  // Pure front-face static dataset mapping for perfect presentation
  const mockAllBatches = [
    { id: "b1", title: "🧬 NEET Target Batch 2027", desc: "Premium batch focused on NEET Biology & Chemistry syllabus with intensive doubt solving panels.", status: "Active" },
    { id: "b2", title: "🏫 UP Board Class 10 Foundation", desc: "Complete targeted preparation course for class 10th mathematics, physics, and chemistry board curriculum.", status: "Active" },
    { id: "b3", title: "⚡ SBN School Special Section E", desc: "Targeted numerical problem sets, quick formula tricks, and performance monitoring matrix cell.", status: "Active" },
    { id: "b4", title: "🚀 JEE IIT Target Core", desc: "Upcoming advanced batch focusing on physics formulas, matrices, algorithms, and analytical reasoning.", status: "Upcoming" }
  ];

  return (
    <section className="batches-page text-white bg-black min-h-screen p-6 font-sans">
      <div className="batches-hero border-b border-gray-900 pb-4 mb-6">
        <h1 className="text-3xl font-black text-red-500 tracking-tight">🎒 BIRO Institutional Batches</h1>
        <p className="text-gray-400 text-sm mt-1">Explore current academic modules, specialized sections, and course workspaces.</p>
      </div>

      <div className="batches-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockAllBatches.map((batch) => (
          <div key={batch.id} className="batch-panel-card bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-xl hover:border-red-500 transition flex flex-col justify-between">
            <div>
              <span className={`inline-block text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-md mb-3 ${batch.status === 'Active' ? 'bg-green-900/40 text-green-400 border border-green-800' : 'bg-yellow-900/40 text-yellow-400 border border-yellow-800'}`}>
                ● {batch.status}
              </span>
              <h2 className="text-xl font-bold text-gray-200 mt-1">{batch.title}</h2>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed">{batch.desc}</p>
            </div>
            
            <button className="w-full bg-gray-800 hover:bg-red-600 text-white font-bold text-xs py-2.5 rounded-xl mt-4 transition duration-200">
              Enter Class Workspace →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Batches;
