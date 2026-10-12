import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "./Signup.css";

function Profile() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("error");

  function showMessage(text, type = "error") {
    setMessage(text);
    setMessageType(type);
  }

  useEffect(() => {
    let active = true;

    async function loadProfile() {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (error) throw error;
        if (active) setUser(data.user ?? null);
      } catch (error) {
        console.error("Unable to load profile:", error);
        if (active) {
          setUser(null);
          showMessage("Unable to load your profile. Please sign in again.");
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    loadProfile();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (active) {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  async function handleAvatarChange(event) {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file || !user) return;

    if (!file.type.startsWith("image/")) {
      showMessage("Please select an image file.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      showMessage("Please choose an image smaller than 2 MB.");
      return;
    }

    setUploading(true);
    setMessage("");

    try {
      const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
      const filePath = `${user.id}/avatar-${Date.now()}.${extension}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, {
          upsert: false,
          contentType: file.type,
        });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);

      const avatarUrl = urlData.publicUrl;

      const { data, error: updateError } = await supabase.auth.updateUser({
        data: { avatar_url: avatarUrl },
      });

      if (updateError) throw updateError;

      setUser(data.user);
      showMessage("Profile picture updated successfully.", "success");
    } catch (error) {
      console.error("Avatar upload error:", error);
      showMessage(
        error.message || "Could not upload your photo. Check Storage policies."
      );
    } finally {
      setUploading(false);
    }
  }

  async function handleLogout() {
    setLoggingOut(true);
    setMessage("");

    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
      showMessage(error.message || "Unable to log out. Please try again.");
      setLoggingOut(false);
    }
  }

  if (loading) {
    return (
      <main className="biro-signup-page biro-profile-page">
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
      <main className="biro-signup-page biro-profile-page">
        <section className="signup-glass-card signup-profile-card">
          <span className="signup-eyebrow">BIRO MEMBER ACCESS</span>
          <h1>BIRO Profile</h1>
          <p className="profile-subtitle">
            Please sign in to view your profile.
          </p>
          <button
            type="button"
            className="signup-submit-button"
            onClick={() => navigate("/login")}
          >
            Go to Login <span aria-hidden="true">↗</span>
          </button>
        </section>
      </main>
    );
  }

  const details = user.user_metadata ?? {};
  const displayName = details.name || "BIRO Researcher";
  const researchField = details.research_field || "Not added yet";
  const role = details.role || "Not added yet";
  const avatarUrl = details.avatar_url;

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
          <p>Welcome to your personal space in the BIRO Research Network.</p>
        </header>

        <div className="signup-glass-card signup-profile-card">
          <div className="signup-card-highlight" />

          <div className="profile-welcome">
            <div className="profile-avatar">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={`${displayName}'s profile`}
                  className="profile-avatar-image"
                />
              ) : (
                displayName.charAt(0).toUpperCase()
              )}
            </div>

            <div className="profile-welcome-text">
              <span className="profile-member-label">WELCOME BACK</span>
              <h2>{displayName}</h2>
              <p>{user.email || "Email not available"}</p>
            </div>

            <div className="profile-status">
              <span className="profile-status-dot" />
              Account
            </div>
          </div>

          <div className="profile-avatar-actions">
            <label className="profile-upload-button">
              {uploading ? "Uploading..." : "Change profile picture"}
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                disabled={uploading}
              />
            </label>
            <span>Image only · Maximum 2 MB</span>
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

          <div className="profile-section-heading">
            <span className="profile-section-line" />
            <h3>Researcher Information</h3>
          </div>

          <div className="signup-profile-details">
            <div><span>Full Name</span><strong>{displayName}</strong></div>
            <div><span>Email Address</span><strong>{user.email || "Not available"}</strong></div>
            <div><span>Research Field</span><strong>{researchField}</strong></div>
            <div><span>Research Role</span><strong>{role}</strong></div>
            <div><span>Member Since</span><strong>{memberSince}</strong></div>
            <div><span>Account ID</span><strong className="signup-profile-id">{user.id}</strong></div>
          </div>

          <div className="profile-section-heading">
            <span className="profile-section-line" />
            <h3>Your Research Activity</h3>
          </div>

          <div className="profile-stat-grid">
            <div className="profile-stat-card">
              <div className="profile-stat-icon" aria-hidden="true">◈</div>
              <span>Groups Joined</span>
              <strong>0</strong>
              <p>Your research communities</p>
            </div>
            <div className="profile-stat-card">
              <div className="profile-stat-icon" aria-hidden="true">⌑</div>
              <span>Research Papers</span>
              <strong>0</strong>
              <p>Your published contributions</p>
            </div>
          </div>

          <div className="profile-footer">
            <p>Your research journey starts here.</p>
            <button
              type="button"
              className="signup-submit-button profile-logout-button"
              onClick={handleLogout}
              disabled={loggingOut || uploading}
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