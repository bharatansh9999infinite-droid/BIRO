import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function Profile() {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {

    async function loadProfile() {

      try {

        const { data, error } = await supabase.auth.getUser();

        if (error) {

          console.log(error);
          setUser(null);

        } else {

          setUser(data.user);

        }

      } catch (err) {

        console.log(err);
        setUser(null);

      }

      setLoading(false);

    }

    loadProfile();

  }, []);



  async function handleLogout() {

    await supabase.auth.signOut();

    alert("Logged Out Successfully");

    window.location.href = "/login";

  }



  if (loading) {

    return (

      <section className="contact">

        <h2>Loading Profile...</h2>

      </section>

    );

  }



  if (!user) {

    return (

      <section className="contact">

        <h2>BIRO Profile</h2>

        <div className="card">

          <h3>No user is logged in.</h3>

          <br />

          <button
            onClick={() => window.location.href="/login"}
          >
            Go to Login
          </button>

        </div>

      </section>

    );

  }



  return (

    <section className="contact">

      <h2>👨‍🔬 BIRO Researcher Dashboard</h2>

      <div className="card">

        <h3>Welcome</h3>

        <br />

        <p><strong>Name:</strong> {user.user_metadata?.name || "Not Available"}</p>

        <br />

        <p><strong>Email:</strong> {user.email}</p>

        <br />

        <p><strong>Role:</strong> {user.user_metadata?.role || "Not Selected"}</p>

        <br />

        <p><strong>Research Field:</strong> {user.user_metadata?.research_field || "Not Selected"}</p>

        <br />

        <p><strong>Groups Joined:</strong> 0</p>

        <br />

        <p><strong>Research Papers:</strong> 0</p>

        <br />

        <button onClick={handleLogout}>

          Logout

        </button>

      </div>

    </section>

  );

}

export default Profile;