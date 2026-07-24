import { useState } from "react";
import { supabase } from "../supabaseClient";
import "./Calls.css";


function Calls() {

  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);



  async function searchUsers() {

    if (!search.trim()) {

      setUsers([]);

      return;

    }


    try {

      setLoading(true);


      const { data, error } = await supabase

        .from("profiles")

        .select("*")

        .ilike("username", `%${search}%`);



      if(error) {

        throw error;

      }


      setUsers(data || []);


    }

    catch(error) {

      console.log(
        "User Search Error:",
        error.message
      );

    }

    finally {

      setLoading(false);

    }

  }




  return (

    <section className="calls-page">


      <div className="calls-container">


        <h1>
          📞 BIRO Calls
        </h1>



        <div className="search-box">


          <input

            type="text"

            placeholder="Search user..."

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

          />


          <button
            onClick={searchUsers}
          >

            Search

          </button>


        </div>



        {
          loading &&

          <p>
            Searching users...
          </p>
        }




        <div className="user-results">


          {
            users.map((user)=>(


              <div
                className="user-card"
                key={user.id}
              >


                <div className="user-info">


                  {
                    user.avatar_url &&

                    <img

                      src={user.avatar_url}

                      alt="avatar"

                      className="user-avatar"

                    />

                  }



                  <div>

                    <h3>
                      {user.username}
                    </h3>


                    <p>
                      BIRO User
                    </p>


                  </div>


                </div>



                <button
                  className="call-btn"
                >

                  📞 Call

                </button>



              </div>


            ))
          }


        </div>



      </div>


    </section>

  );

}


export default Calls;