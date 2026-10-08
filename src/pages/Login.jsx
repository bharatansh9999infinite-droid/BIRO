import { useState } from "react";
import { supabase } from "../supabaseClient";

function Login() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  // Google / Facebook OAuth
  async function handleOAuth(provider) {
    try {
      setLoading(true);
      setMessage("");

      // ✅ सुधार: लॉगिन के बाद यूजर को सीधे /research डैशबोर्ड पर भेजें
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
      setMessage(error.message || "Login failed. Please try again.");
      setLoading(false);
    }
  }

  // Guest Login
  async function continueAsGuest() {
    try {
      setLoading(true);
      setMessage("");

      const { error } = await supabase.auth.signInAnonymously();

      if (error) {
        throw error;
      }

      window.location.assign("/research");
    } catch (error) {
      console.error("Guest login error:", error);
      setMessage(error.message || "Guest login failed.");
      setLoading(false);
    }
  }

  // Send Phone OTP
  async function sendOTP() {
    try {
      setLoading(true);
      setMessage("");

      const cleanPhone = phone.trim();

      if (!cleanPhone) {
        setMessage("Please enter your phone number.");
        return;
      }

      const { error } = await supabase.auth.signInWithOtp({
        phone: cleanPhone,
      });

      if (error) {
        throw error;
      }

      setOtpSent(true);
      setMessage("OTP sent successfully.");
    } catch (error) {
      console.error("OTP Error:", error);
      setMessage(error.message || "Unable to send OTP.");
    } finally {
      setLoading(false);
    }
  }

  // Verify Phone OTP
  async function verifyOTP() {
    try {
      setLoading(true);
      setMessage("");

      const cleanPhone = phone.trim();
      const cleanOtp = otp.trim();

      if (!cleanPhone) {
        setMessage("Please enter your phone number.");
        return;
      }

      if (!cleanOtp) {
        setMessage("Please enter the OTP.");
        return;
      }

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
      setMessage(error.message || "Invalid OTP.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>Welcome to BIRO</h1>
        <p>Research • Innovation • Collaboration</p>

        {/* Google Login */}
        <button type="button" onClick={() => handleOAuth("google")} disabled={loading}>
          {loading ? "Please wait..." : "Continue with Google"}
        </button>

        {/* Facebook Login */}
        <button
          type="button"
          onClick={() => handleOAuth("facebook")}
          disabled={loading}
          style={{ marginTop: "12px" }}
        >
          Continue with Facebook
        </button>

        <hr style={{ margin: "25px 0" }} />

        {/* Phone Login */}
        <h3>📱 Login with Phone</h3>
        <input
          type="tel"
          placeholder="+91XXXXXXXXXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={loading}
        />

        {!otpSent && (
          <button type="button" onClick={sendOTP} disabled={loading} style={{ marginTop: "12px" }} >
            {loading ? "Sending..." : "Send OTP"}
          </button>
        )}

        {otpSent && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              disabled={loading}
              style={{ marginTop: "12px" }}
            />
            <button type="button" onClick={verifyOTP} disabled={loading} style={{ marginTop: "12px" }} >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}

        {/* Guest Login */}
        <button type="button" onClick={continueAsGuest} disabled={loading} style={{ marginTop: "12px" }} >
          Continue as Guest
        </button>

        {/* Message */}
        {message && (
          <p style={{ marginTop: "15px", color: message.toLowerCase().includes("success") ? "green" : "red" }} >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

export default Login;
