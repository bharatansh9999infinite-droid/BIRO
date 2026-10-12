
import { useState } from "react";
import { supabase } from "../supabaseClient";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [field, setField] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  async function handleSignup(event) {
    event.preventDefault();
    setMessage("");
    setMessageType("");

    if (!name.trim() || !email.trim() || !password || !field.trim() || !role) {
      setMessage("Please complete all fields.");
      setMessageType("error");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must contain at least 6 characters.");
      setMessageType("error");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            name: name.trim(),
            research_field: field.trim(),
            role,
          },
        },
      });

      if (error) {
        throw error;
      }

      if (data.session) {
        setMessage("Your BIRO account has been created successfully.");
      } else {
        setMessage(
          "Your account has been created. Please check your email to confirm your account before signing in."
        );
      }

      setMessageType("success");
      setName("");
      setEmail("");
      setPassword("");
      setField("");
      setRole("");
    } catch (error) {
      setMessage(error.message || "Unable to create your account.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="biro-signup-page">
      <div className="signup-background-glow signup-glow-one" />
      <div className="signup-background-glow signup-glow-two" />

      <section className="signup-content">
        <header className="signup-heading">
          <span className="signup-eyebrow">WELCOME TO BIRO</span>

          <h1>
            Join <span>BIRO</span> Research Network
          </h1>

          <p>
            Create your account and become part of a global research community.
          </p>
        </header>

        <div className="signup-glass-card">
          <div className="signup-card-highlight" />

          <form onSubmit={handleSignup} className="signup-form">
            <div className="signup-field">
              <label htmlFor="signup-name">Full Name</label>
              <input
                id="signup-name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                required
              />
            </div>

            <div className="signup-field">
              <label htmlFor="signup-email">Email</label>
              <input
                id="signup-email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
              />
            </div>

            <div className="signup-field">
              <label htmlFor="signup-password">Password</label>
              <input
                id="signup-password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="new-password"
                minLength={6}
                required
              />
              <span className="signup-field-hint">
                Use at least 6 characters.
              </span>
            </div>

            <div className="signup-field">
              <label htmlFor="signup-research-field">Research Field</label>
              <input
                id="signup-research-field"
                type="text"
                placeholder="Physics, Biology, Computer Science..."
                value={field}
                onChange={(event) => setField(event.target.value)}
                required
              />
            </div>

            <div className="signup-field">
              <label htmlFor="signup-role">Your Role</label>
              <select
                id="signup-role"
                value={role}
                onChange={(event) => setRole(event.target.value)}
                required
              >
                <option value="" disabled>
                  Select your role
                </option>
                <option value="Scientist">Scientist</option>
                <option value="Philosopher">Philosopher</option>
                <option value="Student Researcher">Student Researcher</option>
                <option value="Research Organisation">
                  Research Organisation
                </option>
              </select>
            </div>

            {message && (
              <div
                className={`signup-message signup-message-${messageType}`}
                role="status"
                aria-live="polite"
              >
                {message}
              </div>
            )}

            <button
              className="signup-submit-button"
              type="submit"
              disabled={loading}
            >
              <span>
                {loading ? "Creating Account..." : "Create Account"}
              </span>
              {!loading && <span aria-hidden="true">↗</span>}
            </button>

            <p className="signup-terms">
              By creating an account, you agree to use the BIRO platform
              responsibly.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Signup;
