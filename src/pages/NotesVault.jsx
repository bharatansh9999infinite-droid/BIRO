
import React, { useState } from "react";
import logo from "../assets/BIRO.png";
import biologyPDF from "../assets/biology_core_notes.pdf";
import "./NotesVault.css";

const tabs = [
  { id: "notes", label: "Notes", icon: "▤" },
  { id: "messages", label: "Messages", icon: "✉" },
  { id: "texts", label: "Texts", icon: "▤" },
  { id: "updates", label: "Updates", icon: "↻" },
];

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v11m-4-4 4 4 4-4M5 16v4h14v-4" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 6c-2.5-2-5-2-9-1v15c4-1 6.5-1 9 1m0-15c2.5-2 5-2 9-1v15c-4-1-6.5-1-9 1m0-15v15" />
      <path d="M6 9h3M6 12h3m9-3h-2m2 3h-2" />
    </svg>
  );
}

function NotesVault() {
  const [activeTab, setActiveTab] = useState("notes");

  const note = {
    subjectName: "Class 10th Complete Biology",
    topicTitle: "Complete Biology Notes",
    title: "Class 10th Complete Biology",
    subtitle: "Handwritten Modules",
    description:
      "Class 10th Complete Biology Handwritten Modules with detailed diagrams, important concepts, and exam-oriented notes.",
    fileSize: "4.8 MB",
    fileName: "biology_core_notes.pdf",
    file: biologyPDF,
  };

  return (
    <section className="notes-vault-container">
      <aside className="vault-sidebar">
        <div className="sidebar-brand">
          <img src={logo} alt="BIRO Logo" className="biro-vault-logo-img" />
        </div>

        <button
          type="button"
          className="sidebar-subject active"
          onClick={() => setActiveTab("notes")}
        >
          <span className="sidebar-chat-icon">▣</span>
          <span>BHARATANSH - TELEGRAPH</span>
        </button>

        <div className="sidebar-footer">
          <span className="sidebar-status-dot" />
          BIRO NOTES VAULT
        </div>
      </aside>

      <main className="vault-main">
        <header className="stream-header">
          <div className="vault-heading-icon">
            <BookIcon />
          </div>

          <div className="vault-heading-content">
            <h1 className="dynamic-visible-header">
              BHARATANSH - TELEGRAPH
            </h1>
            <p className="vault-subtitle">
              <span className="subtitle-bolt">ϟ</span>
              Bharatansh Max Premium Respiratory Course
            </p>
          </div>
        </header>

        <nav className="vault-tabs" aria-label="Notes sections">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.id}
              className={`vault-tab ${
                activeTab === tab.id ? "vault-tab-active" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
            >
              <span className="vault-tab-icon">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="vault-content">
          {activeTab === "notes" && (
            <article className="note-glass-card">
              <div className="note-card-main">
                <div className="note-card-badges">
                  <a
                    className="note-subject-badge"
                    href={note.file}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookIcon />
                    <span>{note.subjectName}</span>
                  </a>

                  <a
                    className="note-view-badge"
                    href={note.file}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <EnvelopeIcon />
                    <span>View Notes</span>
                  </a>
                </div>

                <h2>{note.title}</h2>
                <h3>{note.subtitle}</h3>

                <p className="note-description">{note.description}</p>

                <div className="note-meta">
                  <span className="note-file-size">
                    <span className="meta-file-icon">▤</span>
                    CAPACITY STORAGE SIZE: <strong>{note.fileSize}</strong>
                  </span>

                  <span className="note-security">
                    <span className="security-icon">⬡</span>
                    Verified Security Node Data
                  </span>
                </div>
              </div>

              <div className="note-card-actions">
                <a
                  href={note.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="round-action view-action"
                  aria-label="View Biology Notes"
                  title="View Notes"
                >
                  <EnvelopeIcon />
                </a>

                <span className="action-divider" />

                <a
                  href={note.file}
                  download={note.fileName}
                  className="round-action download-action"
                  aria-label="Download Biology Notes PDF"
                  title="Download PDF"
                >
                  <DownloadIcon />
                </a>
              </div>
            </article>
          )}

          {activeTab === "messages" && (
            <section className="vault-empty-card">
              <div className="empty-icon">
                <EnvelopeIcon />
              </div>
              <h2>Messages</h2>
              <p>
                Messages from the BIRO team will appear here.
              </p>
            </section>
          )}

          {activeTab === "texts" && (
            <section className="vault-empty-card">
              <div className="empty-icon">
                <BookIcon />
              </div>
              <h2>Texts</h2>
              <p>
                Text-based study material will appear here.
              </p>
            </section>
          )}

          {activeTab === "updates" && (
            <section className="vault-empty-card">
              <div className="empty-icon">
                <span className="updates-symbol">↻</span>
              </div>
              <h2>Updates</h2>
              <p>
                The latest notes and course updates will appear here.
              </p>
            </section>
          )}
        </div>

        <footer className="vault-footer">
          <span className="footer-status">
            <span className="sidebar-status-dot" />
            BIRO EDUCATIONAL REPOSITORY
          </span>

          <a
            href={note.file}
            download={note.fileName}
            className="sample-download-button"
            title="Download Biology Notes PDF"
          >
            <DownloadIcon />
            <span>Download Notes</span>
          </a>
        </footer>
      </main>
    </section>
  );
}

export default NotesVault;
