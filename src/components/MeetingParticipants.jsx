import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./MeetingParticipants.css";

function MeetingParticipants({ meetingCode }) {

  const [participants, setParticipants] = useState([]);

  const [loading, setLoading] = useState(true);

  const [username, setUsername] = useState("");



  useEffect(() => {

    let name =
      localStorage.getItem("biro_username");

    if (!name) {

      name =
        "Guest-" +
        Math.floor(Math.random() * 1000);

      localStorage.setItem(
        "biro_username",
        name
      );

    }

    setUsername(name);

  }, []);




  useEffect(() => {

    if (!meetingCode) return;

    joinMeeting();

    fetchParticipants();

  }, [meetingCode]);





  useEffect(() => {

    if (!meetingCode) return;

    const channel = supabase

      .channel(
        "participants-" + meetingCode
      )

      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "meeting_participants"
        },
        () => {

          fetchParticipants();

        }
      )

      .subscribe();



    return () => {

      supabase.removeChannel(channel);

    };

  }, [meetingCode]);





  async function joinMeeting() {

    if (!username) return;

    await supabase

      .from("meeting_participants")

      .insert([
        {
          meeting_code: meetingCode,
          username: username
        }
      ]);

  }





  async function fetchParticipants() {

    setLoading(true);

    const { data } = await supabase

      .from("meeting_participants")

      .select("*")

      .eq(
        "meeting_code",
        meetingCode
      )

      .order(
        "joined_at",
        {
          ascending: true
        }
      );

    setParticipants(data || []);

    setLoading(false);

  }
    /* ============================
      UI
  ============================ */

  if (loading) {

    return (

      <div className="meeting-participants">

        <div className="participants-header">

          👥 Participants

        </div>

        <div className="participants-loading">

          Loading...

        </div>

      </div>

    );

  }



  return (

    <div className="meeting-participants">

      <div className="participants-header">

        👥 Participants

        <span className="participant-count">

          {participants.length}

        </span>

      </div>



      <div className="participants-body">

        {

          participants.length === 0 ?

          (

            <div className="no-participants">

              No Participants

            </div>

          )

          :

          (

            participants.map((user) => (

              <div

                className="participant-card"

                key={user.id}

              >

                <div className="participant-avatar">

                  {user.username
                    ?.charAt(0)
                    .toUpperCase()}

                </div>



                <div className="participant-info">

                  <strong>

                    {user.username}

                  </strong>



                  <span>

                    🟢 Online

                  </span>

                </div>



                {

                  user.username === username && (

                    <div className="you-badge">

                      You

                    </div>

                  )

                }

              </div>

            ))

          )

        }

      </div>

    </div>

  );

}

export default MeetingParticipants;