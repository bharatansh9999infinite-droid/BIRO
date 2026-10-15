
import React, { useRef, useState } from "react";
import "./Images Document.css";

const FIELD_OPTIONS = [
  "General Public Opinions",
  "Science",
  "Biology",
  "Chemistry",
  "Physics",
  "Mathematics",
  "Artificial Intelligence",
  "Computer Science",
  "Microbiology",
  "Environmental Science",
  "Research Analysis",
  "Philosophy",
  "Other",
];

const ROLE_OPTIONS = [
  "Student",
  "Researcher",
  "Teacher / Professor",
  "Scientist",
  "Philosopher",
  "Developer",
  "General Public",
  "I am quiet",
  "Other",
];

const UPLOAD_TYPES = [
  {
    id: "image",
    title: "Upload Image",
    description:
      "Share scientific images, research diagrams, experiments, discoveries and visual ideas.",
    icon: "▧",
    accept: "image/*",
    button: "Choose Image",
  },
  {
    id: "document",
    title: "Upload Document",
    description:
      "Share research papers, notes, reports, essays and educational documents.",
    icon: "▤",
    accept: ".pdf,.doc,.docx,.txt,.ppt,.pptx,.xls,.xlsx",
    button: "Choose Document",
  },
  {
    id: "post",
    title: "Upload Post",
    description:
      "Publish your research thoughts, public opinions, analysis and written ideas.",
    icon: "✎",
    accept: "",
    button: "Write a Post",
  },
];

function ImagesDocument() {
  const [activeType, setActiveType] = useState("");
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    title: "",
    field: "Science",
    subject: "",
    role: "Student",
    description: "",
    essay: "",
    file: null,
  });

  const fileInputRef = useRef(null);

  const resetForm = () => {
    setForm({
      title: "",
      field: "Science",
      subject: "",
      role: "Student",
      description: "",
      essay: "",
      file: null,
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const openUploadForm = (type) => {
    setActiveType(type);
    setMessage("");
    resetForm();
  };

  const closeUploadForm = () => {
    setActiveType("");
    setMessage("");
    resetForm();
  };

  const updateForm = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    const maxSize = 20 * 1024 * 1024;

    if (selectedFile.size > maxSize) {
      setMessage("File size must be 20 MB or less.");
      event.target.value = "";
      return;
    }

    if (
      activeType === "image" &&
      !selectedFile.type.startsWith("image/")
    ) {
      setMessage("Please select a valid image file.");
      event.target.value = "";
      return;
    }

    if (
      activeType === "document" &&
      selectedFile.type.startsWith("image/")
    ) {
      setMessage("Please select a document file.");
      event.target.value = "";
      return;
    }

    setMessage("");

    setForm((previous) => ({
      ...previous,
      file: selectedFile,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("");

    if (!form.title.trim()) {
      setMessage("Please enter a title.");
      return;
    }

    if (!form.description.trim()) {
      setMessage("Please enter a description.");
      return;
    }

    if (
      (activeType === "image" ||
        activeType === "document") &&
      !form.file
    ) {
      setMessage("Please choose a file to upload.");
      return;
    }

    if (activeType === "post" && !form.essay.trim()) {
      setMessage("Please write your post content.");
      return;
    }

    let previewUrl = "";

    if (form.file) {
      previewUrl = URL.createObjectURL(form.file);
    }

    const newItem = {
      id: `${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 8)}`,
      type: activeType,
      title: form.title.trim(),
      field: form.field,
      subject: form.subject.trim(),
      role: form.role,
      description: form.description.trim(),
      essay: form.essay.trim(),
      file: form.file,
      fileName: form.file?.name || "",
      fileSize: form.file?.size || 0,
      fileType: form.file?.type || "",
      previewUrl,
      createdAt: new Date().toLocaleString(),
    };

    setItems((previous) => [newItem, ...previous]);
    closeUploadForm();
    setMessage("Your contribution has been added to this page.");
  };

  const deleteItem = (itemId) => {
    const itemToDelete = items.find(
      (item) => item.id === itemId
    );

    if (itemToDelete?.previewUrl) {
      URL.revokeObjectURL(itemToDelete.previewUrl);
    }

    setItems((previous) =>
      previous.filter((item) => item.id !== itemId)
    );
  };

  const filteredItems = items.filter((item) => {
    const matchesType =
      filterType === "All" || item.type === filterType;

    const search = searchText.trim().toLowerCase();

    const matchesSearch =
      !search ||
      item.title.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search) ||
      item.field.toLowerCase().includes(search) ||
      item.subject.toLowerCase().includes(search) ||
      item.role.toLowerCase().includes(search);

    return matchesType && matchesSearch;
  });

  const formatFileSize = (bytes) => {
    if (!bytes) return "";

    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }

    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const getTypeLabel = (type) => {
    if (type === "image") return "Image";
    if (type === "document") return "Document";
    return "Post";
  };

  return (
    <main className="id-page">
      <div className="id-background-glow id-glow-one" />
      <div className="id-background-glow id-glow-two" />

      <div className="id-shell">
        <header className="id-hero">
          <div className="id-eyebrow">
            BIRO · KNOWLEDGE SHARING
          </div>

          <h1>
            Images <span>&</span> Documents
          </h1>

          <p className="id-hero-description">
            A shared space for research images, educational
            documents, scientific discoveries and public ideas.
            Share your knowledge with the community.
          </p>

          <div className="id-hero-tags">
            <span>Research</span>
            <span>Education</span>
            <span>Science</span>
            <span>Public Ideas</span>
          </div>
        </header>

        <section className="id-upload-section">
          <div className="id-section-heading">
            <div>
              <span className="id-section-kicker">
                CONTRIBUTE TO BIRO
              </span>

              <h2>What would you like to share?</h2>

              <p>
                Select a card to open its upload form.
              </p>
            </div>
          </div>

          <div className="id-upload-grid">
            {UPLOAD_TYPES.map((type) => (
              <button
                type="button"
                key={type.id}
                className={`id-upload-card ${
                  activeType === type.id
                    ? "id-upload-card-active"
                    : ""
                }`}
                onClick={() => openUploadForm(type.id)}
              >
                <span className="id-upload-icon">
                  {type.icon}
                </span>

                <span className="id-upload-card-title">
                  {type.title}
                </span>

                <span className="id-upload-card-description">
                  {type.description}
                </span>

                <span className="id-upload-card-action">
                  {type.button}
                  <span aria-hidden="true"> ↗</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        {message && (
          <div
            className="id-notice"
            role="status"
          >
            {message}
          </div>
        )}

        {activeType && (
          <section className="id-form-panel">
            <div className="id-form-header">
              <div>
                <span className="id-section-kicker">
                  NEW CONTRIBUTION
                </span>

                <h2>
                  {activeType === "image" &&
                    "Upload an Image"}

                  {activeType === "document" &&
                    "Upload a Document"}

                  {activeType === "post" &&
                    "Create a Post"}
                </h2>

                <p>
                  Add the details so others understand
                  what you are sharing.
                </p>
              </div>

              <button
                type="button"
                className="id-close-button"
                onClick={closeUploadForm}
                aria-label="Close upload form"
              >
                ×
              </button>
            </div>

            <form
              className="id-upload-form"
              onSubmit={handleSubmit}
            >
              <div className="id-form-grid">
                <label className="id-field id-field-full">
                  <span>Title *</span>

                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={updateForm}
                    placeholder={
                      activeType === "image"
                        ? "e.g. Cell Structure Research Image"
                        : activeType === "document"
                        ? "e.g. Biology Research Report"
                        : "e.g. My Thoughts on AI Research"
                    }
                    maxLength={120}
                    required
                  />
                </label>

                <label className="id-field">
                  <span>Research Field *</span>

                  <select
                    name="field"
                    value={form.field}
                    onChange={updateForm}
                    required
                  >
                    {FIELD_OPTIONS.map((field) => (
                      <option
                        key={field}
                        value={field}
                      >
                        {field}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="id-field">
                  <span>Subject / Topic</span>

                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={updateForm}
                    placeholder="e.g. Chemistry, AI, Algebra"
                    maxLength={120}
                  />
                </label>

                <label className="id-field id-field-full">
                  <span>Your Role *</span>

                  <select
                    name="role"
                    value={form.role}
                    onChange={updateForm}
                    required
                  >
                    {ROLE_OPTIONS.map((role) => (
                      <option
                        key={role}
                        value={role}
                      >
                        {role}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="id-field id-field-full">
                  <span>Description *</span>

                  <textarea
                    name="description"
                    value={form.description}
                    onChange={updateForm}
                    placeholder="Explain what this contribution is about..."
                    rows={3}
                    maxLength={1000}
                    required
                  />

                  <small>
                    {form.description.length}/1000 characters
                  </small>
                </label>

                {activeType === "post" && (
                  <label className="id-field id-field-full">
                    <span>Post Content / Essay *</span>

                    <textarea
                      name="essay"
                      value={form.essay}
                      onChange={updateForm}
                      placeholder="Write your research analysis, opinion, explanation or essay..."
                      rows={7}
                      maxLength={10000}
                      required
                    />

                    <small>
                      {form.essay.length}/10000 characters
                    </small>
                  </label>
                )}

                {(activeType === "image" ||
                  activeType === "document") && (
                  <div className="id-field id-field-full">
                    <span>
                      {activeType === "image"
                        ? "Choose Image *"
                        : "Choose Document *"}
                    </span>

                    <label className="id-file-drop">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept={
                          UPLOAD_TYPES.find(
                            (item) => item.id === activeType
                          )?.accept
                        }
                        onChange={handleFileChange}
                        required
                      />

                      <span className="id-file-icon">
                        {activeType === "image"
                          ? "▧"
                          : "▤"}
                      </span>

                      <strong>
                        {form.file
                          ? form.file.name
                          : "Click here to select a file"}
                      </strong>

                      <span>
                        {form.file
                          ? formatFileSize(form.file.size)
                          : activeType === "image"
                          ? "Image files · Maximum 20 MB"
                          : "PDF, DOC, DOCX, TXT, PPT, XLS · Maximum 20 MB"}
                      </span>
                    </label>

                    {form.file &&
                      activeType === "image" && (
                        <div className="id-selected-preview">
                          <img
                            src={URL.createObjectURL(form.file)}
                            alt="Selected upload preview"
                          />
                        </div>
                      )}
                  </div>
                )}
              </div>

              <div className="id-form-footer">
                <p>
                  * Required fields. Please only share files
                  you have permission to distribute.
                </p>

                <div className="id-form-actions">
                  <button
                    type="button"
                    className="id-secondary-button"
                    onClick={closeUploadForm}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="id-primary-button"
                  >
                    {activeType === "image" &&
                      "Add Image"}

                    {activeType === "document" &&
                      "Add Document"}

                    {activeType === "post" &&
                      "Publish Post"}

                    <span aria-hidden="true"> →</span>
                  </button>
                </div>
              </div>
            </form>
          </section>
        )}

        <section className="id-library-section">
          <div className="id-section-heading id-library-heading">
            <div>
              <span className="id-section-kicker">
                COMMUNITY LIBRARY
              </span>

              <h2>Shared Contributions</h2>

              <p>
                Explore the images, documents and posts
                added during this session.
              </p>
            </div>

            <div className="id-total-count">
              <strong>{items.length}</strong>
              <span>Contributions</span>
            </div>
          </div>

          <div className="id-library-controls">
            <label className="id-search-box">
              <span aria-hidden="true">⌕</span>

              <input
                type="search"
                value={searchText}
                onChange={(event) =>
                  setSearchText(event.target.value)
                }
                placeholder="Search titles, topics or fields..."
                aria-label="Search contributions"
              />
            </label>

            <label className="id-filter-box">
              <span>Filter</span>

              <select
                value={filterType}
                onChange={(event) =>
                  setFilterType(event.target.value)
                }
                aria-label="Filter contributions by type"
              >
                <option value="All">All Types</option>
                <option value="image">Images</option>
                <option value="document">Documents</option>
                <option value="post">Posts</option>
              </select>
            </label>
          </div>

          {filteredItems.length === 0 ? (
            <div className="id-empty-state">
              <div className="id-empty-icon">✧</div>

              <h3>
                {items.length === 0
                  ? "Your knowledge space is ready"
                  : "No matching contributions found"}
              </h3>

              <p>
                {items.length === 0
                  ? "Be the first to share an image, research document or thoughtful post with the BIRO community."
                  : "Try a different search term or change the selected filter."}
              </p>

              {items.length === 0 && (
                <button
                  type="button"
                  className="id-primary-button"
                  onClick={() => openUploadForm("post")}
                >
                  Create Your First Post →
                </button>
              )}
            </div>
          ) : (
            <div className="id-library-grid">
              {filteredItems.map((item) => (
                <article
                  className="id-content-card"
                  key={item.id}
                >
                  <div className="id-content-card-top">
                    <span className="id-type-badge">
                      {getTypeLabel(item.type)}
                    </span>

                    <button
                      type="button"
                      className="id-delete-button"
                      onClick={() => deleteItem(item.id)}
                      title="Remove from this session"
                      aria-label={"Remove " + item.title}
                    >
                      ×
                    </button>
                  </div>

                  {item.type === "image" &&
                    item.previewUrl && (
                      <a
                        href={item.previewUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="id-image-preview"
                      >
                        <img
                          src={item.previewUrl}
                          alt={item.title}
                        />
                      </a>
                    )}

                  {item.type === "document" && (
                    <div className="id-document-preview">
                      <span>PDF</span>
                      <div>
                        <strong>Document attached</strong>
                        <small>
                          {item.fileName}
                        </small>
                        <small>
                          {formatFileSize(item.fileSize)}
                        </small>
                      </div>
                    </div>
                  )}

                  {item.type === "post" && (
                    <div className="id-post-preview">
                      <span aria-hidden="true">“</span>
                      <p>{item.essay}</p>
                    </div>
                  )}

                  <div className="id-content-card-body">
                    <h3>{item.title}</h3>

                    <p className="id-content-description">
                      {item.description}
                    </p>

                    <div className="id-content-metadata">
                      <span>{item.field}</span>

                      {item.subject && (
                        <span>{item.subject}</span>
                      )}
                    </div>

                    <div className="id-content-author">
                      <div className="id-avatar">
                        {item.role
                          .charAt(0)
                          .toUpperCase()}
                      </div>

                      <div>
                        <strong>{item.role}</strong>
                        <small>{item.createdAt}</small>
                      </div>
                    </div>

                    {item.type === "document" &&
                      item.previewUrl && (
                        <a
                          href={item.previewUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="id-document-open"
                        >
                          Open Document ↗
                        </a>
                      )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <footer className="id-footer">
          <span className="id-footer-mark">BIRO</span>

          <p>
            Share knowledge. Respect ideas. Support research.
          </p>

          <small>
            Images & Documents · BIRO Community
          </small>
        </footer>
      </div>
    </main>
  );
}

export default ImagesDocument;
