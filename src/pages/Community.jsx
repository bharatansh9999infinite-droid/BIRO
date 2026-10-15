
import React, { useState } from "react";
import "./Community.css";

const INITIAL_DISCUSSIONS = [
  {
    id: "biology",
    title: "New Biology Research Discussion",
    text: "Scientists can share ideas, discoveries and biological research projects here.",
    analysis: "Share biological research, findings and ideas.",
    role: "Researcher",
    sector: "Biology",
    subject: "Biological Research",
    messages: [],
    createdBy: "BIRO Community",
  },
  {
    id: "physics",
    title: "Physics Innovation Forum",
    text: "Discuss theories, experiments and new concepts with researchers worldwide.",
    analysis: "Discuss physics theories and experimental concepts.",
    role: "Researcher",
    sector: "Physics",
    subject: "Physics Innovation",
    messages: [],
    createdBy: "BIRO Community",
  },
  {
    id: "ai",
    title: "AI Research Collaboration",
    text: "Share artificial intelligence projects and collaborate with innovators.",
    analysis: "Explore AI ideas and research collaborations.",
    role: "Researcher",
    sector: "Artificial Intelligence",
    subject: "AI Research",
    messages: [],
    createdBy: "BIRO Community",
  },
];

const EMPTY_FORM = {
  title: "",
  analysis: "",
  role: "",
  sector: "",
  subject: "",
  text: "",
};

function Community() {
  const [discussions, setDiscussions] = useState(INITIAL_DISCUSSIONS);
  const [showForm, setShowForm] = useState(false);
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [chatError, setChatError] = useState("");

  const updateForm = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setFormError("");
  };

  const createDiscussion = (event) => {
    event.preventDefault();

    if (
      !form.title.trim() ||
      !form.analysis.trim() ||
      !form.role.trim() ||
      !form.sector.trim() ||
      !form.subject.trim()
    ) {
      setFormError("Please fill in all required discussion fields.");
      return;
    }

    const newDiscussion = {
      id: `discussion-${Date.now()}`,
      title: form.title.trim(),
      text: form.text.trim() || form.analysis.trim(),
      analysis: form.analysis.trim(),
      role: form.role.trim(),
      sector: form.sector.trim(),
      subject: form.subject.trim(),
      messages: [],
      createdBy: "You",
    };

    setDiscussions((previous) => [newDiscussion, ...previous]);
    setForm(EMPTY_FORM);
    setShowForm(false);
    setFormError("");
    setSelectedDiscussion(newDiscussion);
  };

  const openDiscussion = (discussion) => {
    setSelectedDiscussion(discussion);
    setMessage("");
    setChatError("");
  };

  const closeDiscussion = () => {
    setSelectedDiscussion(null);
    setMessage("");
    setChatError("");
  };

  const sendMessage = (event) => {
    event.preventDefault();

    if (!selectedDiscussion || !message.trim()) {
      return;
    }

    const newMessage = {
      id: `${Date.now()}-${Math.random()}`,
      text: message.trim(),
      sender: "You",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setDiscussions((previous) =>
      previous.map((discussion) =>
        discussion.id === selectedDiscussion.id
          ? {
              ...discussion,
              messages: [...discussion.messages, newMessage],
            }
          : discussion
      )
    );

    setSelectedDiscussion((previous) => ({
      ...previous,
      messages: [...previous.messages, newMessage],
    }));

    setMessage("");
    setChatError("");
  };

  const getLatestDiscussion = () => {
    if (!selectedDiscussion) return null;

    return (
      discussions.find(
        (discussion) => discussion.id === selectedDiscussion.id
      ) || selectedDiscussion
    );
  };

  const activeDiscussion = getLatestDiscussion();

  return (
    <main className="biro-community-page">
      <div className="community-ambient-glow" aria-hidden="true" />

      <header className="community-hero glass-panel">
        <div className="community-hero-icon" aria-hidden="true">
          <span>♟</span>
        </div>

        <div className="community-hero-copy">
          <span className="community-eyebrow">
            BIRO • RESEARCH NETWORK
          </span>

          <h1>BIRO Research Community</h1>

          <p>
            Connect, discuss and collaborate with researchers around
            the world.
          </p>

          <div className="community-hero-status">
            <span className="status-dot" />
            A place for research and ideas
          </div>
        </div>

        <div className="community-orbit-art" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="orbit orbit-three" />
          <span className="orbit-center">B</span>
        </div>
      </header>

      {!selectedDiscussion && (
        <>
          <section className="community-toolbar">
            <div>
              <span className="community-eyebrow">
                EXPLORE THE NETWORK
              </span>
              <h2>Research Discussions</h2>
              <p>
                Discover research topics or create a discussion of your
                own.
              </p>
            </div>

            <button
              type="button"
              className="community-primary-button create-discussion-trigger"
              onClick={() => setShowForm((previous) => !previous)}
            >
              <span aria-hidden="true">＋</span>
              {showForm ? "Close Form" : "Create Discussion"}
            </button>
          </section>

          {showForm && (
            <section className="community-form-panel glass-panel">
              <div className="community-panel-heading">
                <div className="panel-heading-icon">✦</div>
                <div>
                  <span className="community-eyebrow">
                    START SOMETHING NEW
                  </span>
                  <h2>Create a Discussion</h2>
                  <p>
                    Add the details so others can understand your
                    research topic.
                  </p>
                </div>
              </div>

              <form onSubmit={createDiscussion}>
                <div className="community-form-grid">
                  <label className="community-field field-full">
                    <span>Discussion Name *</span>
                    <input
                      type="text"
                      name="title"
                      value={form.title}
                      onChange={updateForm}
                      placeholder="e.g. Future of Biotechnology"
                      maxLength={120}
                      required
                    />
                  </label>

                  <label className="community-field field-full">
                    <span>Research Analysis *</span>
                    <textarea
                      name="analysis"
                      value={form.analysis}
                      onChange={updateForm}
                      placeholder="Describe the research question, objective or analysis..."
                      rows={4}
                      maxLength={2000}
                      required
                    />
                  </label>

                  <label className="community-field">
                    <span>Your Role *</span>
                    <select
                      name="role"
                      value={form.role}
                      onChange={updateForm}
                      required
                    >
                      <option value="">Select your role</option>
                      <option value="Student">Student</option>
                      <option value="Researcher">Researcher</option>
                      <option value="Teacher">Teacher / Educator</option>
                      <option value="Developer">Developer</option>
                      <option value="Research Lead">Research Lead</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>

                  <label className="community-field">
                    <span>Research Sector *</span>
                    <select
                      name="sector"
                      value={form.sector}
                      onChange={updateForm}
                      required
                    >
                      <option value="">Select a sector</option>
                      <option value="Biology">Biology</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Artificial Intelligence">
                        Artificial Intelligence
                      </option>
                      <option value="Computer Science">
                        Computer Science
                      </option>
                      <option value="Medicine">Medicine</option>
                      <option value="Environment">Environment</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>

                  <label className="community-field field-full">
                    <span>Subject / Topic *</span>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={updateForm}
                      placeholder="e.g. Cell Biology, Machine Learning..."
                      maxLength={160}
                      required
                    />
                  </label>

                  <label className="community-field field-full">
                    <span>Short Introduction</span>
                    <textarea
                      name="text"
                      value={form.text}
                      onChange={updateForm}
                      placeholder="What should other participants know before joining?"
                      rows={3}
                      maxLength={1000}
                    />
                  </label>
                </div>

                {formError && (
                  <p className="community-form-error" role="alert">
                    {formError}
                  </p>
                )}

                <div className="community-form-actions">
                  <button
                    type="button"
                    className="community-secondary-button"
                    onClick={() => {
                      setShowForm(false);
                      setFormError("");
                    }}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="community-primary-button"
                  >
                    Create Discussion <span>→</span>
                  </button>
                </div>
              </form>
            </section>
          )}

          <section className="community-discussions-section">
            <div className="community-section-heading">
              <div>
                <span className="community-eyebrow">
                  DISCOVER & COLLABORATE
                </span>
                <h2>Available Topics</h2>
              </div>

              <span className="community-count">
                {discussions.length}{" "}
                {discussions.length === 1 ? "topic" : "topics"}
              </span>
            </div>

            <div className="community-card-grid">
              {discussions.map((discussion, index) => {
                const isCreatedByUser =
                  discussion.createdBy === "You";

                return (
                  <article
                    className="community-topic-card glass-panel"
                    key={discussion.id}
                  >
                    <div className="topic-card-topline">
                      <span className="topic-card-icon">
                        {index % 4 === 0
                          ? "✧"
                          : index % 4 === 1
                            ? "⌘"
                            : index % 4 === 2
                              ? "⌬"
                              : "◈"}
                      </span>

                      <span
                        className={
                          isCreatedByUser
                            ? "topic-status topic-status-new"
                            : "topic-status"
                        }
                      >
                        {isCreatedByUser ? "NEW DISCUSSION" : "OPEN TOPIC"}
                      </span>
                    </div>

                    <h3>{discussion.title}</h3>

                    <p className="topic-card-description">
                      {discussion.text}
                    </p>

                    <div className="topic-card-metadata">
                      <span>
                        <b>Sector</b>
                        {discussion.sector}
                      </span>

                      <span>
                        <b>Subject</b>
                        {discussion.subject}
                      </span>
                    </div>

                    <div className="topic-card-footer">
                      <span className="topic-created-by">
                        <span className="mini-status-dot" />
                        {discussion.createdBy}
                      </span>

                      <button
                        type="button"
                        className="community-primary-button topic-action-button"
                        onClick={() => openDiscussion(discussion)}
                      >
                        {isCreatedByUser
                          ? "Join Discussion"
                          : "Start Discussion"}
                        <span aria-hidden="true">→</span>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="community-share-banner glass-panel">
            <div className="share-banner-icon">↗</div>

            <div className="share-banner-copy">
              <span className="community-eyebrow">
                YOUR IDEAS MATTER
              </span>
              <h2>Have a research topic in mind?</h2>
              <p>
                Create a focused discussion and invite others to exchange
                ideas around your subject.
              </p>
            </div>

            <button
              type="button"
              className="community-primary-button"
              onClick={() => {
                setShowForm(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Create Discussion <span>→</span>
            </button>
          </section>
        </>
      )}

      {selectedDiscussion && activeDiscussion && (
        <section className="community-workspace">
          <button
            type="button"
            className="community-back-button"
            onClick={closeDiscussion}
          >
            <span>←</span> Back to Discussions
          </button>

          <div className="community-workspace-grid">
            <div className="community-details-column">
              <section className="discussion-detail-card glass-panel">
                <span className="community-eyebrow">
                  DISCUSSION WORKSPACE
                </span>

                <h2>{activeDiscussion.title}</h2>

                <p className="discussion-detail-intro">
                  {activeDiscussion.text}
                </p>

                <div className="discussion-detail-status">
                  <span className="status-dot" />
                  Discussion room
                </div>

                <div className="discussion-detail-divider" />

                <h3>Research Details</h3>

                <div className="discussion-detail-list">
                  <div>
                    <span>Research Analysis</span>
                    <p>{activeDiscussion.analysis}</p>
                  </div>

                  <div>
                    <span>Role</span>
                    <p>{activeDiscussion.role}</p>
                  </div>

                  <div>
                    <span>Sector</span>
                    <p>{activeDiscussion.sector}</p>
                  </div>

                  <div>
                    <span>Subject / Topic</span>
                    <p>{activeDiscussion.subject}</p>
                  </div>

                  <div>
                    <span>Created By</span>
                    <p>{activeDiscussion.createdBy}</p>
                  </div>
                </div>
              </section>

              <section className="discussion-guidelines glass-panel">
                <h3>Discussion Guidelines</h3>
                <ul>
                  <li>Keep messages relevant to the research topic.</li>
                  <li>Share ideas respectfully and constructively.</li>
                  <li>Do not share private or confidential information.</li>
                </ul>
              </section>
            </div>

            <section className="community-chat-panel glass-panel">
              <header className="community-chat-header">
                <div className="chat-heading-icon">▤</div>

                <div>
                  <h2>Discussion Chat</h2>
                  <p>{activeDiscussion.title}</p>
                </div>

                <span className="chat-local-badge">
                  <span className="status-dot" />
                  Local
                </span>
              </header>

              <div
                className="community-chat-messages"
                aria-live="polite"
              >
                {activeDiscussion.messages.length === 0 ? (
                  <div className="chat-empty-state">
                    <div className="chat-empty-icon">✉</div>
                    <h3>Start the conversation</h3>
                    <p>
                      Share your first thought, question or research
                      insight with this discussion.
                    </p>
                  </div>
                ) : (
                  activeDiscussion.messages.map((item) => (
                    <div className="chat-message-row" key={item.id}>
                      <div className="chat-avatar">
                        {item.sender === "You" ? "Y" : "R"}
                      </div>

                      <div className="chat-message-content">
                        <div className="chat-message-meta">
                          <strong>{item.sender}</strong>
                          <time>{item.time}</time>
                        </div>

                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <form
                className="community-chat-composer"
                onSubmit={sendMessage}
              >
                <label
                  className="chat-message-label"
                  htmlFor="community-chat-input"
                >
                  Message
                </label>

                <div className="chat-input-row">
                  <input
                    id="community-chat-input"
                    type="text"
                    value={message}
                    onChange={(event) => {
                      setMessage(event.target.value);
                      setChatError("");
                    }}
                    placeholder="Write a research message..."
                    maxLength={2000}
                    autoComplete="off"
                  />

                  <button
                    type="submit"
                    className="chat-send-button"
                    disabled={!message.trim()}
                    aria-label="Send message"
                  >
                    ➤
                  </button>
                </div>

                <p className="chat-composer-note">
                  Messages are currently stored only in this page's state.
                </p>

                {chatError && (
                  <p className="community-form-error">{chatError}</p>
                )}
              </form>
            </section>
          </div>
        </section>
      )}

      <footer className="community-footer">
        <div className="community-footer-brand">
          <span className="footer-brand-emblem">✧</span>
          <span>BIRO</span>
        </div>

        <p>
          BIRO Research Community · Connect ideas. Advance research.
        </p>

        <button
          type="button"
          className="community-footer-link"
          onClick={() => {
            setSelectedDiscussion(null);
            setShowForm(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to top ↑
        </button>
      </footer>
    </main>
  );
}

export default Community;
