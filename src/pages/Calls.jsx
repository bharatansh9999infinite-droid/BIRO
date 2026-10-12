
import { useState } from "react";
import { supabase } from "../supabaseClient";
import "./Calls.css";

function Calls() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [notice, setNotice] = useState("");
  const [currentUserId, setCurrentUserId] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function searchUsers(event) {
    event?.preventDefault();

    const term = search.trim();
    setNotice("");
    setErrorMessage("");
    setSelectedUser(null);

    if (!term) {
      setUsers([]);
      setErrorMessage("Enter a username to search.");
      return;
    }

    try {
      setLoading(true);

      const {
        data: { user: signedInUser },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      setCurrentUserId(signedInUser?.id || "");

      // Search only the fields your profiles table actually contains.
      const { data, error } = await supabase
        .from("profiles")
        .select("id, username, avatar_url")
        .ilike("username", `%${term}%`)
        .limit(20);

      if (error) throw error;

      const filteredUsers = (data || []).filter(
        (profile) => profile.id !== signedInUser?.id
      );

      setUsers(filteredUsers);

      if (filteredUsers.length === 0) {
        setNotice("No matching users found.");
      }
    } catch (error) {
      console.error("User search failed:", error);
      setErrorMessage(
        error.message || "Could not search users. Please try again."
      );
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }

  function startCall(user) {
    // Do not expose phone numbers from the public profile search.
    // A real calling feature needs an opt-in, access-controlled phone
    // directory or an integrated calling provider.
    setNotice(
      `Calling for ${user.username || "this user"} is not configured yet.`
    );
  }

  async function sendMessage(event) {
    event.preventDefault();
    setNotice("");
    setErrorMessage("");

    const content = message.trim();

    if (!selectedUser) {
      setErrorMessage("Select a user before sending a message.");
      return;
    }

    if (!content) {
      setErrorMessage("Write a message first.");
      return;
    }

    try {
      setSending(true);

      const {
        data: { user: signedInUser },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!signedInUser) {
        setErrorMessage("Please log in to send messages.");
        return;
      }

      if (signedInUser.id === selectedUser.id) {
        setErrorMessage("You cannot send a message to yourself.");
        return;
      }

      // Requires a "messages" table with sender_id, recipient_id,
      // content columns and suitable Row Level Security policies.
      const { error } = await supabase.from("messages").insert({
        sender_id: signedInUser.id,
        recipient_id: selectedUser.id,
        content,
      });

      if (error) throw error;

      setMessage("");
      setNotice(`Message sent to ${selectedUser.username}.`);
    } catch (error) {
      console.error("Message send failed:", error);
      setErrorMessage(
        error.message ||
          'Message could not be sent. Check the "messages" table and its access policies.'
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="calls-page">
      <div className="calls-background-orb calls-orb-one" />
      <div className="calls-background-orb calls-orb-two" />

      <section className="calls-shell">
        <header className="calls-heading">
          <span className="calls-heading-icon" aria-hidden="true">
            ☎
          </span>

          <div>
            <h1>BIRO Calls</h1>
            <p>Find members and connect with the BIRO community.</p>
          </div>
        </header>

        <section className="calls-search-envelope">
          <div className="calls-section-heading">
            <span className="calls-mini-icon" aria-hidden="true">
              ◉
            </span>
            <div>
              <h2>Find a Member</h2>
              <p>Search by the member's profile username.</p>
            </div>
          </div>

          <form className="calls-search-box" onSubmit={searchUsers}>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search username..."
              aria-label="Search username"
              maxLength={80}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </button>
          </form>
        </section>

        {errorMessage && (
          <p className="calls-feedback calls-error" role="alert">
            {errorMessage}
          </p>
        )}

        {notice && (
          <p className="calls-feedback calls-notice" role="status">
            {notice}
          </p>
        )}

        {users.length > 0 && (
          <section className="calls-results-envelope">
            <div className="calls-section-heading">
              <span className="calls-mini-icon" aria-hidden="true">
                ♙
              </span>
              <div>
                <h2>Members</h2>
                <p>{users.length} matching member(s)</p>
              </div>
            </div>

            <div className="calls-user-grid">
              {users.map((user) => (
                <article className="calls-user-card" key={user.id}>
                  <div className="calls-user-info">
                    {user.avatar_url ? (
                      <img
                        className="calls-user-avatar"
                        src={user.avatar_url}
                        alt=""
                        loading="lazy"
                      />
                    ) : (
                      <div className="calls-user-avatar calls-avatar-fallback">
                        {(user.username || "B").charAt(0).toUpperCase()}
                      </div>
                    )}

                    <div className="calls-user-copy">
                      <h3>{user.username || "BIRO Member"}</h3>
                      <p>BIRO Community Member</p>
                    </div>
                  </div>

                  <div className="calls-user-actions">
                    <button
                      type="button"
                      className="calls-action-button calls-call-button"
                      onClick={() => startCall(user)}
                    >
                      <span aria-hidden="true">☎</span> Call
                    </button>

                    <button
                      type="button"
                      className="calls-action-button calls-message-button"
                      onClick={() => {
                        setSelectedUser(user);
                        setMessage("");
                        setNotice("");
                        setErrorMessage("");
                      }}
                    >
                      <span aria-hidden="true">✉</span> Message
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {selectedUser && (
          <section className="calls-message-envelope">
            <div className="calls-section-heading">
              <span className="calls-mini-icon" aria-hidden="true">
                ✉
              </span>
              <div>
                <h2>Send a Message</h2>
                <p>
                  To: <strong>{selectedUser.username}</strong>
                </p>
              </div>

              <button
                type="button"
                className="calls-close-button"
                onClick={() => setSelectedUser(null)}
                aria-label="Close message form"
              >
                ×
              </button>
            </div>

            <form className="calls-message-form" onSubmit={sendMessage}>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Write your message..."
                rows={4}
                maxLength={2000}
                required
              />

              <div className="calls-message-footer">
                <span>{message.length}/2000</span>
                <button type="submit" disabled={sending}>
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </section>
        )}

        <footer className="calls-footer">
          <span className="calls-footer-dot" />
          BIRO Member Communication
        </footer>
      </section>
    </main>
  );
}

export default Calls;
