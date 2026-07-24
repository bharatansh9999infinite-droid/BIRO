import { Link } from "react-router-dom";
import BIRO from "../assets/BIRO.png";
import "./MeetingCard.css";

function MeetingCard({ meeting }) {

  return (

    <div className="meeting-card">

      {/* BIRO Logo */}

      <img
        src={BIRO}
        alt="BIRO Logo"
        className="meeting-logo"
      />



      {/* LIVE Badge */}

      {meeting?.status === "live" && (

        <span className="live-badge">

          🔴 LIVE

        </span>

      )}




      {/* Meeting Title */}

      <h2>

        {meeting?.title || "Untitled Meeting"}

      </h2>




      {/* Description */}

      <p>

        {meeting?.description || "No description available."}

      </p>





      {/* Meeting Details */}

      <div className="meeting-details">

        <div>

          🌐 <strong>

            {meeting?.access_type || "Public"}

          </strong>

        </div>



        <div>

          👥 <strong>

            {meeting?.participants || 0}

          </strong>

        </div>



        <div>

          👨‍🏫 <strong>

            {meeting?.host_name || "BIRO Team"}

          </strong>

        </div>



        <div>

          📅 <strong>

            {meeting?.meeting_date || "Coming Soon"}

          </strong>

        </div>



        <div>

          🕒 <strong>

            {meeting?.meeting_time || "--"}

          </strong>

        </div>

      </div>






      {/* Join Button */}

      <Link

        to={`/meeting/${meeting?.meeting_code || "default-room"}`}

        className="join-btn"

      >

        🚀 Join Meeting

      </Link>

    </div>

  );

}

export default MeetingCard;