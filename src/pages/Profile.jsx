
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./Signup.css";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [loggingOut, setLoggingOut] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let active = true;

    async function loadProfile() {
      try {
        const { data, error } = await supabase.auth.getUser();

        if (!active) return;

        if (error) {
          console.error("Unable to load profile:", error);
          setUser(null);
          setErrorMessage("Unable to load your profile. Please sign in again.");
        } else {
          setUser(data.user);
        }
      } catch (error) {
        console.error("Profile error:", error);

        if (active) {
          setUser(null);
          setErrorMessage("Something went wrong while loading your profile.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadProfile();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!active) return;

      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  async function handleLogout() {
    setLoggingOut(true);
    setErrorMessage("");

    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw error;
      }

      window.location.assign("/login");
    } catch (error) {
      console.error("Logout error:", error);
      setErrorMessage(error.message || "Unable to log out. Please try again.");
      setLoggingOut(false);
    }
  }

  if (loading) {
    return (
      <main className="biro-signup-page">
        <section className="signup-glass-card signup-profile-card">
          <div className="profile-loading-indicator" />
          <h2>Loading Your Profile</h2>
          <p className="profile-subtitle">
            Preparing your BIRO researcher dashboard...
          </p>
        </section>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="biro-signup-page">
        <section className="signup-glass-card signup-profile-card">
          <span className="signup-eyebrow">BIRO MEMBER ACCESS</span>
          <h1>BIRO Profile</h1>

          <p className="profile-subtitle">
            {errorMessage || "No user is currently logged in."}
          </p>

          <button
            type="button"
            className="signup-submit-button"
            onClick={() => window.location.assign("/login")}
          >
            Go to Login <span aria-hidden="true">↗</span>
          </button>
        </section>
      </main>
    );
  }

  const details = user.user_metadata ?? {};
  const displayName = details.name || "BIRO Researcher";
  const researchField = details.research_field || "Not selected";
  const role = details.role || "Not selected";

  const memberSince = user.created_at
    ? new Date(user.created_at).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Not available";

  return (
    <main className="biro-signup-page biro-profile-page">
      <div className="signup-background-glow signup-glow-one" />
      <div className="signup-background-glow signup-glow-two" />

      <section className="signup-content signup-profile-content">
        <header className="signup-heading">
          <span className="signup-eyebrow">YOUR BIRO ACCOUNT</span>

          <h1>
            Researcher <span>Dashboard</span>
          </h1>

          <p>
            Welcome to your personal space in the BIRO Research Network.
          </p>
        </header>

        <div className="signup-glass-card signup-profile-card">
          <div className="signup-card-highlight" />

          <div className="profile-welcome">
            <div className="profile-avatar" aria-hidden="true">
              {displayName.charAt(0).toUpperCase()}
            </div>

            <div className="profile-welcome-text">
              <span className="profile-member-label">WELCOME BACK</span>
              <h2>{displayName}</h2>
              <p>{user.email}</p>
            </div>

            <div className="profile-status">
              <span className="profile-status-dot" />
              Account
            </div>
          </div>

          <div className="profile-section-heading">
            <span className="profile-section-line" />
            <h3>Researcher Information</h3>
          </div>

          <div className="signup-profile-details">
            <div>
              <span>Full Name</span>
              <strong>{displayName}</strong>
            </div>

            <div>
              <span>Email Address</span>
              <strong>{user.email || "Not available"}</strong>
            </div>

            <div>
              <span>Research Field</span>
              <strong>{researchField}</strong>
            </div>

            <div>
              <span>Research Role</span>
              <strong>{role}</strong>
            </div>

            <div>
              <span>Member Since</span>
              <strong>{memberSince}</strong>
            </div>

            <div>
              <span>Account ID</span>
              <strong className="signup-profile-id">{user.id}</strong>
            </div>
          </div>

          <div className="profile-section-heading">
            <span className="profile-section-line" />
            <h3>Your Research Activity</h3>
          </div>

          <div className="profile-stat-grid">
            <div className="profile-stat-card">
              <div className="profile-stat-icon" aria-hidden="true">
                ◈
              </div>
              <span>Groups Joined</span>
              <strong>0</strong>
              <p>Your research communities</p>
            </div>

            <div className="profile-stat-card">
              <div className="profile-stat-icon" aria-hidden="true">
                ⌑
              </div>
              <span>Research Papers</span>
              <strong>0</strong>
              <p>Your published contributions</p>
            </div>
          </div>

          <div className="profile-footer">
            <p>Your research journey starts here.</p>

            {errorMessage && (
              <div className="signup-message signup-message-error">
                {errorMessage}
              </div>
            )}

            <button
              type="button"
              className="signup-submit-button profile-logout-button"
              onClick={handleLogout}
              disabled={loggingOut}
            >
              {loggingOut ? "Signing Out..." : "Logout"}
              {!loggingOut && <span aria-hidden="true">↗</span>}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
