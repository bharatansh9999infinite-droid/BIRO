import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "./CreateMeeting.css";


function CreateMeeting() {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [loading, setLoading] = useState(false);


  async function createMeeting() {

    try {

      setLoading(true);


      const {
        data: { user },
        error: userError
      } = await supabase.auth.getUser();


      if (userError || !user) {

        alert("Please login first");
        return;

      }


      const roomCode = crypto.randomUUID();



      const { error } = await supabase
        .from("meetings")
        .insert({

          title: title,

          description: description,

          host_id: user.id,

          room_id: roomCode,

          meeting_date: date,

          meeting_time: time,

          status: "scheduled"

        });



      if (error) {

        throw error;

      }


      alert("Meeting Created Successfully 🚀");


      navigate("/meetings");


    }

    catch(error) {

      console.log(
        "Create Meeting Error:",
        error.message
      );

      alert(error.message);

    }

    finally {

      setLoading(false);

    }

  }



  return (

    <section className="create-meeting-page">


      <div className="create-meeting-card">


        <h1>
          🚀 Create New Meeting
        </h1>



        <input

          type="text"

          placeholder="Meeting Title"

          value={title}

          onChange={(e)=>setTitle(e.target.value)}

        />



        <textarea

          placeholder="Meeting Description"

          value={description}

          onChange={(e)=>setDescription(e.target.value)}

        />



        <label>
          Meeting Date
        </label>


        <input

          type="date"

          value={date}

          onChange={(e)=>setDate(e.target.value)}

        />



        <label>
          Meeting Time
        </label>


        <input

          type="time"

          value={time}

          onChange={(e)=>setTime(e.target.value)}

        />



        <button

          onClick={createMeeting}

          disabled={loading}

        >

          {
            loading
            ? "Creating..."
            : "Create Meeting"
          }

        </button>



      </div>


    </section>

  );

}


export default CreateMeeting;