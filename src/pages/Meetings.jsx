
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import MeetingCard from "../components/MeetingCard";
import "./Meetings.css";

export default function Meetings() {
  const navigate = useNavigate();
  const [meetings, setMeetings] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadMeetings() {
      const { data, error } = await supabase
        .from("meetings")
        .select("*")
        .in("status", ["live", "scheduled"])
        .order("id", { ascending: false });

      if (!active) return;

      if (error) {
        setError(error.message);
      } else {
        setMeetings(data || []);
        setError("");
      }

      setLoading(false);
    }

    loadMeetings();

    const channel = supabase
      .channel("biro-meetings-list")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "meetings" },
        loadMeetings
      )
      .subscribe();

    return () => {
      active = false;
      supabase.removeChannel(channel);
    };
  }, []);

  const visibleMeetings = meetings.filter((meeting) => {
    const text = `${meeting.title || ""} ${
      meeting.discription || meeting.description || ""
    }`.toLowerCase();

    return text.includes(search.toLowerCase());
  });

  return (
    <section className="meetings-page">
      <header className="meetings-header">
        <h1>BIRO Online Meetings</h1>
        <p>Join a live discussion or create your own meeting.</p>
        <button
          className="create-meeting-btn"
          onClick={() => navigate("/create-meeting")}
        >
          + Create New Meeting
        </button>
      </header>

      <input
        className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white"
        placeholder="Search meetings..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {loading && <p>Loading meetings...</p>}
      {error && <p role="alert">Could not load meetings: {error}</p>}

      {!loading && !error && (
        <>
          <p className="my-4 text-gray-300">
            {visibleMeetings.length} meetings available
          </p>

          <div className="meeting-grid">
            {visibleMeetings.map((meeting) => (
              <MeetingCard key={meeting.id} meeting={meeting} />
            ))}
          </div>

          {visibleMeetings.length === 0 && (
            <p className="text-center py-10 text-gray-400">
              No active meetings found. Create the first one!
            </p>
          )}
        </>
      )}
    </section>
  );
}
