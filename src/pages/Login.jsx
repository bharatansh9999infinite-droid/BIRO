import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "./Login.css";

function GoogleIcon() {
  return (
    <svg
      className="login-provider-icon"
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.9 6.1-15Z"
      />
      <path
        fill="#34A853"
        d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.6-5.1c-1.8 1.2-4.1 1.9-6.9 1.9-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z"
      />
      <path
        fill="#FBBC05"
        d="M12.6 27.6a12 12 0 0 1 0-7.2v-5.3H5.8a20 20 0 0 0 0 17.8l6.8-5.3Z"
      />
      <path
        fill="#EA4335"
        d="M24 12.1c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6.1 29.5 4 24 4A20 20 0 0 0 5.8 15.1l6.8 5.3c1.6-4.8 6.1-8.3 11.4-8.3Z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      className="login-provider-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="#1877F2"
        d="M24 12a12 12 0 1 0-13.875 11.85v-8.38H7.08V12h3.045V9.35c0-3.005 1.79-4.665 4.53-4.665 1.312 0 2.685.234 2.685.234v2.953h-1.512c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.47h-2.796v8.38A12.002 12.002 0 0 0 24 12Z"
      />
    </svg>
  );
}

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("error");

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  function showMessage(text, type = "error") {
    setMessage(text);
    setMessageType(type);
  }

  // Google and Facebook login
  async function handleOAuth(provider) {
    setLoading(true);
    setMessage("");

    try {
      const redirectTo = `${window.location.origin}/research`;

      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo,
        },
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error(`${provider} login error:`, error);
      showMessage(error.message || "Login failed. Please try again.");
      setLoading(false);
    }
  }

  // Guest login
  async function continueAsGuest() {
    setLoading(true);
    setMessage("");

    try {
      const { error } = await supabase.auth.signInAnonymously();

      if (error) {
        throw error;
      }

      window.location.assign("/research");
    } catch (error) {
      console.error("Guest login error:", error);
      showMessage(error.message || "Guest login failed.");
      setLoading(false);
    }
  }

  // Send phone OTP
  async function sendOTP(event) {
    event.preventDefault();
    setMessage("");

    const cleanPhone = phone.trim();

    if (!cleanPhone) {
      showMessage("Please enter your phone number, including country code.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithOtp({
        phone: cleanPhone,
      });

      if (error) {
        throw error;
      }

      setOtpSent(true);
      showMessage("OTP sent successfully. Check your phone.", "success");
    } catch (error) {
      console.error("OTP error:", error);
      showMessage(error.message || "Unable to send OTP.");
    } finally {
      setLoading(false);
    }
  }

  // Verify phone OTP
  async function verifyOTP(event) {
    event.preventDefault();
    setMessage("");

    const cleanPhone = phone.trim();
    const cleanOtp = otp.trim();

    if (!cleanPhone) {
      showMessage("Please enter your phone number, including country code.");
      return;
    }

    if (!cleanOtp) {
      showMessage("Please enter the OTP.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.verifyOtp({
        phone: cleanPhone,
        token: cleanOtp,
        type: "sms",
      });

      if (error) {
        throw error;
      }

      window.location.assign("/research");
    } catch (error) {
      console.error("OTP verification error:", error);
      showMessage(error.message || "Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login-page">
      <div className="login-orb login-orb-one" aria-hidden="true" />
      <div className="login-orb login-orb-two" aria-hidden="true" />

      <section className="login-card">
        <div className="login-brand-mark" aria-hidden="true">
          <span>B</span>
        </div>

        <p className="login-eyebrow">WELCOME BACK</p>

        <h1>Welcome to BIRO</h1>

        <p className="login-subtitle">
          Research <span>•</span> Innovation <span>•</span> Collaboration
        </p>

        {/* Google and Facebook */}
        <div className="login-social-buttons">
          <button
            className="login-button login-social-button"
            type="button"
            onClick={() => handleOAuth("google")}
            disabled={loading}
          >
            <GoogleIcon />
            <span>
              {loading ? "Please wait..." : "Continue with Google"}
            </span>
          </button>

          <button
            className="login-button login-social-button"
            type="button"
            onClick={() => handleOAuth("facebook")}
            disabled={loading}
          >
            <FacebookIcon />
            <span>Continue with Facebook</span>
          </button>
        </div>

        <div className="login-divider">
          <span>OR CONTINUE WITH PHONE</span>
        </div>

        {/* Phone number and OTP */}
        <form
          className="login-phone-form"
          onSubmit={otpSent ? verifyOTP : sendOTP}
        >
          <label htmlFor="login-phone">Phone number</label>

          <input
            id="login-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91XXXXXXXXXX"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            disabled={loading}
          />

          {otpSent && (
            <>
              <label htmlFor="login-otp">Verification code</label>

              <input
                id="login-otp"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                placeholder="Enter OTP"
                value={otp}
                onChange={(event) => setOtp(event.target.value)}
                disabled={loading}
              />
            </>
          )}

          <button
            className="login-button login-primary-button"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Please wait..."
              : otpSent
                ? "Verify OTP"
                : "Send OTP"}
          </button>

          {otpSent && (
            <button
              className="login-text-button"
              type="button"
              disabled={loading}
              onClick={() => {
                setOtpSent(false);
                setOtp("");
                setMessage("");
              }}
            >
              Change phone number
            </button>
          )}
        </form>

        {/* Login status */}
        {message && (
          <p
            className={`login-message ${messageType}`}
            role="status"
            aria-live="polite"
          >
            {message}
          </p>
        )}

        <div className="login-divider login-divider-small">
          <span>NEW TO BIRO?</span>
        </div>

        {/* Navigate to signup */}
        <button
          className="login-button login-create-button"
          type="button"
          onClick={() => navigate("/signup")}
          disabled={loading}
        >
          Create New Account
        </button>

        {/* Guest login */}
        <button
          className="login-button login-guest-button"
          type="button"
          onClick={continueAsGuest}
          disabled={loading}
        >
          <span className="login-guest-icon" aria-hidden="true">
            ↗
          </span>
          Continue as Guest
        </button>

        <p className="login-footer">
          Your research journey starts here.
        </p>
      </section>
    </main>
  );
}

export default Login;