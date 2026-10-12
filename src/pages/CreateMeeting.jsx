
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "./CreateMeeting.css";

export default function CreateMeeting() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function createMeeting(event) {
    event.preventDefault();

    if (!title.trim()) {
      setError("Please enter a meeting title.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const meetingCode = crypto.randomUUID();

      const { data, error: insertError } = await supabase
        .from("meetings")
        .insert({
          title: title.trim(),
          discription: description.trim(),
          meeting_code: meetingCode,
          access_type: "public",
          status: "live"
        })
        .select("meeting_code")
        .single();

      if (insertError) throw insertError;
      if (!data?.meeting_code) {
        throw new Error("Meeting created but no room code was returned.");
      }

      navigate(`/meeting/${encodeURIComponent(data.meeting_code)}`, {
        replace: true
      });
    } catch (err) {
      setError(err.message || "Could not create the meeting.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="create-meeting-page">
      <form className="create-meeting-card" onSubmit={createMeeting}>
        <h1>Create New Meeting</h1>
        <p>Create a public BIRO room and invite guests with its link.</p>

        <label htmlFor="meeting-title">Meeting Title</label>
        <input
          id="meeting-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="e.g. Biology Discussion"
          maxLength={120}
          required
        />

        <label htmlFor="meeting-description">Description</label>
        <textarea
          id="meeting-description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="What will you discuss?"
          maxLength={1000}
        />

        {error && <p role="alert" className="text-red-400">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create and Join Meeting"}
        </button>
      </form>
    </section>
  );
}
