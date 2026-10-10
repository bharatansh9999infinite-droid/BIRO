import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MeetingCard from "../components/MeetingCard";
import "./Meetings.css";

function Meetings() {
  const navigate = useNavigate();

  // Core System States
  const [meetings, setMeetings] = useState([]);
  const [filteredMeetings, setFilteredMeetings] = useState([]);
  const [currentTab, setCurrentTab] = useState("all"); // 'all', 'admin', 'public', 'recorded'
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // Hardcoded Mock Data for instant visual presentations to the Manager Sir
  useEffect(() => {
    const defaultRooms = [
      {
        id: "biro-premium-bio",
        title: "🧠 NEET Biology - Human Endocrine System (Live)",
        description: "Official session detailing hormone mechanisms and gland drawings.",
        category: "admin",
        isLive: true,
        recordedUrl: null
      },
      {
        id: "sbn-class10-maths",
        title: "🏫 SBN Inter College - Real Numbers Revision",
        description: "Public school classroom workspace node open for all section students.",
        category: "public",
        isLive: true,
        recordedUrl: null
      },
      {
        id: "past-session-01",
        title: "📼 Organic Chemistry Basics (Recorded)",
        description: "This live class has ended. Watch the full dynamic recording below.",
        category: "recorded",
        isLive: false,
        recordedUrl: "https://youtube.com"
      }
    ];
    setMeetings(defaultRooms);
  }, []);

  // Advanced Filtering System (Category Tab + Search Filter)
  useEffect(() => {
    const result = meetings.filter((meeting) => {
      const matchesSearch =
        meeting.title?.toLowerCase().includes(search.toLowerCase()) ||
        meeting.description?.toLowerCase().includes(search.toLowerCase());

      if (currentTab === "all") return matchesSearch;
      if (currentTab === "admin") return matchesSearch && meeting.category === "admin" && meeting.isLive;
      if (currentTab === "public") return matchesSearch && meeting.category === "public" && meeting.isLive;
      if (currentTab === "recorded") return matchesSearch && (!meeting.isLive || meeting.category === "recorded");

      return matchesSearch;
    });

    setFilteredMeetings(result);
  }, [search, meetings, currentTab]);

  // Function to simulate dynamic instant joining without closing viewports
  const handleEndMeeting = (id) => {
    setMeetings(prev => 
      prev.map(m => m.id === id ? { ...m, isLive: false, category: "recorded", title: m.title.replace("(Live)", "(Recorded)") } : m)
    );
  };

  return (
    <section className="meetings-page">
      <div className="meetings-header">
        <h1>🧠 BIRO Online Meetings</h1>
        <p>Join live scientific discussions, AI conferences and research sessions.</p>
        
        {/* Navigates directly to the page you created */}
        <button
          onClick={() => navigate("/create-meeting")}
          className="create-meeting-btn"
        >
          + Create New Meeting
        </button>
      </div>

      {/* Dynamic Sub-Header Filters to separate sections cleanly */}
      <div className="meeting-tab-bar bg-gray-900 p-2 rounded-xl flex gap-2 my-4 border border-gray-800">
        <button onClick={() => setCurrentTab("all")} className={`px-4 py-2 text-xs font-bold rounded-lg ${currentTab === "all" ? "bg-red-600 text-white" : "text-gray-400"}`}>All Sessions</button>
        <button onClick={() => setCurrentTab("admin")} className={`px-4 py-2 text-xs font-bold rounded-lg ${currentTab === "admin" ? "bg-red-600 text-white" : "text-gray-400"}`}>🔒 Admin Batches</button>
        <button onClick={() => setCurrentTab("public")} className={`px-4 py-2 text-xs font-bold rounded-lg ${currentTab === "public" ? "bg-red-600 text-white" : "text-gray-400"}`}>🌍 Public Schools</button>
        <button onClick={() => setCurrentTab("recorded")} className={`px-4 py-2 text-xs font-bold rounded-lg ${currentTab === "recorded" ? "bg-red-600 text-white" : "text-gray-400"}`}>📼 Recorded Video Archive</button>
      </div>

      <div className="meeting-count text-sm text-gray-400 mb-4">
        <strong>{filteredMeetings.length}</strong> Sessions Available in this layout
      </div>

      <div className="meeting-search">
        <input
          type="text"
          placeholder="Search live sessions or schools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-2.5 text-white"
        />
      </div>

      <div className="meeting-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredMeetings.length > 0 ? (
          filteredMeetings.map((meeting) => (
            <div key={meeting.id} className="relative group">
              <MeetingCard meeting={meeting} />
              
              {/* Dev shortcut tool to test live disappearing feature */}
              {meeting.isLive && (
                <button 
                  onClick={() => handleEndMeeting(meeting.id)}
                  className="absolute top-2 right-2 bg-black/80 hover:bg-red-700 text-[10px] text-white px-2 py-1 rounded border border-gray-700 transition"
                >
                  ⏱ End (Simulate Archive)
                </button>
              )}
            </div>
          ))
        ) : (
          <h2 className="col-span-full text-center text-gray-600 py-10">No Meetings Available Under This Tab</h2>
        )}
      </div>
    </section>
  );
}

export default Meetings;
