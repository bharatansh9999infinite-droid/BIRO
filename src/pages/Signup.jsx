import { useState } from "react";
import { supabase } from "../supabaseClient";


function Signup(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [field,setField] = useState("");
const [role,setRole] = useState("");

  async function handleSignup(){

    const { data, error } = await supabase.auth.signUp({

      email: email,

      password: password,

      options: {

        data: {

          name:name,

          research_field:field,
role:role

        }

      }

    });


    if(error){

      alert(error.message);

    }
    else{

      alert("BIRO Account Created Successfully");

      console.log(data);

    }

  }



  return(

    <section className="contact">


      <h2>
        Join BIRO Research Network
      </h2>


      <div className="card">


        <input

          placeholder="Full Name"

          onChange={(e)=>setName(e.target.value)}

        />


        <br/><br/>


        <input

          type="email"

          placeholder="Email"

          onChange={(e)=>setEmail(e.target.value)}

        />


        <br/><br/>


        <input

          type="password"

          placeholder="Password"

          onChange={(e)=>setPassword(e.target.value)}

        />


        <br/><br/>


        <input

          placeholder="Research Field (Physics, Biology etc.)"

          onChange={(e)=>setField(e.target.value)}

        />
<br/><br/>

<select
  onChange={(e)=>setRole(e.target.value)}
>

  <option value="">
    Select Your Role
  </option>

  <option value="Scientist">
    Scientist
  </option>

  <option value="Philosopher">
    Philosopher
  </option>

  <option value="Student Researcher">
    Student Researcher
  </option>

  <option value="Research Organisation">
    Research Organisation
  </option>

</select>

        <br/><br/>


        <button onClick={handleSignup}>

          Create Account

        </button>


      </div>


    </section>

  );

}


export default Signup;