
import { Link } from "react-router-dom";
import BIRO from "../assets/BIRO.png";
import "./MeetingCard.css";

export default function MeetingCard({ meeting }) {
  const code = meeting?.meeting_code;

  return (
    <article className="meeting-card">
      <img src={BIRO} alt="BIRO Logo" className="meeting-logo" />

      <span className="live-badge">
        {meeting?.status === "live" ? "LIVE" : "SCHEDULED"}
      </span>

      <h2>{meeting?.title || "Untitled Meeting"}</h2>

      <p>
        {meeting?.discription ||
          meeting?.description ||
          "Join this BIRO meeting."}
      </p>

      <div className="meeting-details">
        <div>🌐 <strong>{meeting?.access_type || "Public"}</strong></div>
        <div>🆔 <strong>{code || "Code unavailable"}</strong></div>
      </div>

      {code ? (
        <Link to={`/meeting/${encodeURIComponent(code)}`} className="join-btn">
          Join Meeting
        </Link>
      ) : (
        <button className="join-btn" disabled>
          Meeting Code Unavailable
        </button>
      )}
    </article>
  );
}
