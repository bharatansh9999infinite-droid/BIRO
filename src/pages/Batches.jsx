// src/pages/Batches.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./Batches.css";

function Batches() {
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorLog, setErrorLog] = useState("");

  useEffect(() => {
    fetchRealTimeBatches();
  }, []);

  async function fetchRealTimeBatches() {
    try {
      setLoading(true);
      setErrorLog("");
      
      // Pulling active institutional batch matrix entries directly from the server schema
      const { data, error } = await supabase
        .from("batches")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setBatches(data || []);
    } catch (err) {
      console.error("Database Engine Execution Mismatch:", err.message);
      setErrorLog(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div className="text-center py-20 text-white font-bold">📡 Connecting to BIRO Cloud Servers...</div>;
  if (errorLog) return <div className="text-center py-20 text-red-500 font-bold">⚠️ Connection Error: {errorLog}</div>;

  return (
    <section className="batches-page text-white bg-black min-h-screen p-6 font-sans">
      <div className="batches-hero border-b border-gray-900 pb-4 mb-6">
        <h1 className="text-3xl font-black text-red-500 tracking-tight">🎒 Real-Time Active Batches</h1>
        <p className="text-gray-400 text-sm mt-1">Live data pipelines synced with Doctor Ansh Upadhyay Research Hub backend nodes.</p>
      </div>

      <div className="batches-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {batches.length > 0 ? (
          batches.map((batch) => (
            <div key={batch.id} className="batch-panel-card bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-xl hover:border-red-500 transition">
              <span className="badge-active">● Active</span>
              <h2 className="text-xl font-bold text-gray-200 mt-2">{batch.title}</h2>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed">{batch.description || 'No database summary available.'}</p>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-2.5 rounded-xl mt-4 transition">
                Enter Class Workspace →
              </button>
            </div>
          ))
        ) : (
          <h2 className="col-span-full text-center text-gray-600 py-10">No batches records found in your database table.</h2>
        )}
      </div>
    </section>
  );
}

export default Batches;
