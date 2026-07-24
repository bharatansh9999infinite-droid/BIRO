import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import MeetingCard from "../components/MeetingCard";
import "./Meetings.css";

function Meetings() {

  const navigate = useNavigate();

  const [meetings, setMeetings] = useState([]);
  const [filteredMeetings, setFilteredMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [search, setSearch] = useState("");



  useEffect(() => {

    fetchMeetings();

  }, []);




  useEffect(() => {

    const result = meetings.filter((meeting) => {

      const title =
        meeting.title?.toLowerCase() || "";

      const description =
        meeting.description?.toLowerCase() || "";

      return (
        title.includes(search.toLowerCase()) ||
        description.includes(search.toLowerCase())
      );

    });

    setFilteredMeetings(result);

  }, [search, meetings]);





  async function fetchMeetings() {

    try {

      setLoading(true);

      setErrorMessage("");

      const { data, error } = await supabase

        .from("meetings")

        .select("*")

        .order("created_at", {
          ascending: false,
        });


      if (error) {

        throw error;

      }


      console.log("Meetings Data:", data);

      setMeetings(data || []);

    }

    catch (error) {

      console.log(
        "Meeting Fetch Error:",
        error.message
      );

      setErrorMessage(error.message);

    }

    finally {

      setLoading(false);

    }

  }





  if (loading) {

    return (

      <section className="meetings-page">

        <h1>
          Loading BIRO Meetings...
        </h1>

      </section>

    );

  }





  if (errorMessage) {

    return (

      <section className="meetings-page">

        <h1>
          Error Loading Meetings
        </h1>

        <p>

          {errorMessage}

        </p>


        <button
          onClick={fetchMeetings}
          className="refresh-btn"
        >

          Try Again

        </button>


      </section>

    );

  }





  return (

    <section className="meetings-page">



      <div className="meetings-header">

        <h1>

          🧠 BIRO Online Meetings

        </h1>


        <p>

          Join live scientific discussions,
          AI conferences and research sessions.

        </p>


        <button
          onClick={() => navigate("/create-meeting")}
          className="create-meeting-btn"
        >

          + Create New Meeting

        </button>


      </div>





      <div className="meeting-count">

        <strong>

          {meetings.length}

        </strong>

        <span>

          Meetings Available

        </span>

      </div>





      <div className="meeting-search">

        <input

          type="text"

          placeholder="Search meetings..."

          value={search}

          onChange={(e) =>
            setSearch(e.target.value)
          }

        />

      </div>






      <div className="meeting-grid">

        {

          filteredMeetings.length > 0 ?

            filteredMeetings.map((meeting) => (

              <MeetingCard

                key={meeting.id}

                meeting={meeting}

              />

            ))

            :

            <h2>

              No Meetings Available

            </h2>

        }

      </div>





    </section>

  );

}

export default Meetings;