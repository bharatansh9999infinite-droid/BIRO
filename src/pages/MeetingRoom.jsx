import { Link, useParams } from "react-router-dom";
import { JitsiMeeting } from "@jitsi/react-sdk";

import BIRO from "../assets/BIRO.png";

import MeetingChat from "../components/MeetingChat";
import MeetingParticipants from "../components/MeetingParticipants";

import "./MeetingRoom.css";

function MeetingRoom() {

  const { code } = useParams();

  return (

    <section className="meeting-room">

      {/* Top Bar */}

      <div className="meeting-topbar">

        <div className="meeting-brand">

          <img
            src={BIRO}
            alt="BIRO Logo"
            className="meeting-logo"
          />

          <div>

            <h2>

              BIRO Research Meeting

            </h2>

            <span>

              Room : {code}

            </span>

          </div>

        </div>

        <Link
          to="/meetings"
          className="leave-button"
        >

          Leave Meeting

        </Link>

      </div>





      {/* Main Layout */}

      <div className="meeting-layout">

        {/* Video Area */}

        <div className="meeting-video">

          <JitsiMeeting

            domain="meet.jit.si"

            roomName={`BIRO-${code}`}

            configOverwrite={{

              startWithAudioMuted: false,

              startWithVideoMuted: false,

              prejoinPageEnabled: true,

              disableModeratorIndicator: true,

            }}

            interfaceConfigOverwrite={{

              SHOW_JITSI_WATERMARK: false,

              SHOW_WATERMARK_FOR_GUESTS: false,

            }}

            getIFrameRef={(iframe) => {

              iframe.style.height = "700px";

              iframe.style.width = "100%";

              iframe.style.border = "none";

              iframe.style.borderRadius = "20px";

            }}

          />

        </div>





        {/* Right Sidebar */}

        <div className="meeting-sidebar">

          <MeetingParticipants
            meetingCode={code}
          />

          <MeetingChat
            meetingCode={code}
          />

        </div>

      </div>





      {/* Footer */}

      <div className="meeting-footer">

        <div>

          🧠 BIRO Scientific Collaboration Platform

        </div>

      </div>

    </section>

  );

}

export default MeetingRoom;