import { useEffect, useRef, useState } from "react";
import { supabase } from "../supabaseClient";
import "./MeetingChat.css";

function MeetingChat({ meetingCode }) {

  /* ============================
      STATES
  ============================ */

  const [messages, setMessages] = useState([]);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(true);

  const [sending, setSending] = useState(false);

  const [username, setUsername] = useState("");

  const bottomRef = useRef(null);



  /* ============================
      USER NAME
  ============================ */

  useEffect(() => {

    let name =
      localStorage.getItem("biro_username");

    if (!name) {

      name =
        prompt("Enter Your Name");

      if (!name || name.trim() === "") {

        name =
          "Guest-" +
          Math.floor(
            Math.random() * 1000
          );

      }

      localStorage.setItem(
        "biro_username",
        name
      );

    }

    setUsername(name);

  }, []);




  /* ============================
      LOAD MESSAGES
  ============================ */

  useEffect(() => {

    if (!meetingCode) return;

    fetchMessages();

  }, [meetingCode]);





  /* ============================
      REALTIME
  ============================ */

  useEffect(() => {

    if (!meetingCode) return;

    const channel = supabase

      .channel(
        "meeting-chat-" + meetingCode
      )

      .on(

        "postgres_changes",

        {

          event: "*",

          schema: "public",

          table: "meeting_messages"

        },

        () => {

          fetchMessages();

        }

      )

      .subscribe();




    return () => {

      supabase.removeChannel(
        channel
      );

    };

  }, [meetingCode]);





  /* ============================
      AUTO SCROLL
  ============================ */

  useEffect(() => {

    bottomRef.current?.scrollIntoView({

      behavior: "smooth"

    });

  }, [messages]);





  /* ============================
      FETCH
  ============================ */

  async function fetchMessages() {

    setLoading(true);

    const {

      data,

      error

    } = await supabase

      .from("meeting_messages")

      .select("*")

      .eq(
        "meeting_code",
        meetingCode
      )

      .order(
        "created_at",
        {
          ascending: true
        }
      );



    if (!error) {

      setMessages(data || []);

    }

    setLoading(false);

  }
    /* ============================
      SEND MESSAGE
  ============================ */

  async function sendMessage() {

    if (!message.trim()) return;

    if (!username) return;

    setSending(true);

    const { error } = await supabase

      .from("meeting_messages")

      .insert([

        {

          meeting_code: meetingCode,

          sender: username,

          message: message.trim()

        }

      ]);



    if (!error) {

      setMessage("");

      fetchMessages();

    }

    else {

      console.log(
        "Message Error :",
        error.message
      );

    }

    setSending(false);

  }




  /* ============================
      ENTER KEY
  ============================ */

  function handleKeyDown(e){

    if(e.key==="Enter"){

      sendMessage();

    }

  }




  /* ============================
      FORMAT TIME
  ============================ */

  function formatTime(time){

    if(!time) return "";

    return new Date(time)

      .toLocaleTimeString([],{

        hour:"2-digit",

        minute:"2-digit"

      });

  }




  /* ============================
      LOADING
  ============================ */

  if(loading){

    return(

      <div className="meeting-chat">

        <div className="chat-header">

          💬 Live Chat

        </div>

        <div className="chat-loading">

          Loading Messages...

        </div>

      </div>

    );

  }
    /* ============================
      UI
  ============================ */

  return (

    <div className="meeting-chat">

      <div className="chat-header">

        💬 BIRO Live Chat

      </div>



      <div className="chat-body">

        {

          messages.length === 0 ?

          (

            <div className="no-messages">

              No Messages Yet

            </div>

          )

          :

          (

            messages.map((msg) => (

              <div

                key={msg.id}

                className="chat-message"

              >

                <div className="chat-user">

                  <strong>

                    {msg.sender}

                  </strong>

                  <span>

                    {formatTime(msg.created_at)}

                  </span>

                </div>

                <div className="chat-text">

                  {msg.message}

                </div>

              </div>

            ))

          )

        }

        <div ref={bottomRef}></div>

      </div>




      <div className="chat-input">

        <input

          type="text"

          placeholder="Type your message..."

          value={message}

          onChange={(e)=>

            setMessage(e.target.value)

          }

          onKeyDown={handleKeyDown}

        />



        <button

          onClick={sendMessage}

          disabled={sending}

        >

          {

            sending

            ?

            "Sending..."

            :

            "Send"

          }

        </button>

      </div>

    </div>

  );

}

export default MeetingChat;