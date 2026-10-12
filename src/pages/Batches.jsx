
import React, { useState } from "react";
import "./Batches.css";

function Batches() {
  const [message, setMessage] = useState("");

  const mockAllBatches = [
    {
      id: "b1",
      title: "🧬 NEET Target Batch 2027",
      desc: "Premium batch focused on NEET Biology & Chemistry syllabus with intensive doubt solving panels.",
      status: "Active",
    },
    {
      id: "b2",
      title: "🏫 UP Board Class 10 Foundation",
      desc: "Complete targeted preparation course for class 10th mathematics, physics, and chemistry board curriculum.",
      status: "Active",
    },
    {
      id: "b3",
      title: "⚡ SBN School Special Section E",
      desc: "Targeted numerical problem sets, quick formula tricks, and performance monitoring matrix cell.",
      status: "Active",
    },
    {
      id: "b4",
      title: "🚀 JEE IIT Target Core",
      desc: "Upcoming advanced batch focusing on physics formulas, matrices, algorithms, and analytical reasoning.",
      status: "Upcoming",
    },
  ];

  function handleEnrollClick() {
    setMessage("Please enroll batch");
  }

  return (
    <section className="batches-page">
      {/* Animated background bubbles */}
      <div className="batches-bubble batches-bubble-one" aria-hidden="true" />
      <div className="batches-bubble batches-bubble-two" aria-hidden="true" />
      <div className="batches-bubble batches-bubble-three" aria-hidden="true" />

      <div className="batches-content">
        {/* Heading remains red */}
        <header className="batches-hero">
          <h1>🎒 BIRO Institutional Batches</h1>

          <p>
            Explore current academic modules, specialized sections, and course workspaces.
          </p>
        </header>

        {/* Batch cards */}
        <div className="batches-container">
          {mockAllBatches.map((batch) => (
            <article className="batch-panel-card" key={batch.id}>
              <div className="batch-card-content">
                <span
                  className={`batch-status ${
                    batch.status === "Active"
                      ? "batch-status-active"
                      : "batch-status-upcoming"
                  }`}
                >
                  <span className="batch-status-dot" aria-hidden="true" />
                  {batch.status}
                </span>

                <h2>{batch.title}</h2>

                <p>{batch.desc}</p>
              </div>

              <button
                type="button"
                className="batch-enter-button"
                onClick={handleEnrollClick}
              >
                Enter Class Workspace
                <span aria-hidden="true">→</span>
              </button>
            </article>
          ))}
        </div>

        {/* Enrollment message */}
        {message && (
          <div
            className="batch-message"
            role="status"
            aria-live="polite"
          >
            <span aria-hidden="true">ℹ</span>

            <p>{message}</p>

            <button
              type="button"
              className="batch-message-close"
              onClick={() => setMessage("")}
              aria-label="Dismiss message"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Batches;
