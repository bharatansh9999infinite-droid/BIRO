import { useState } from "react";
import { supabase } from "../supabaseClient";


function Login() {


  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const [otpSent, setOtpSent] = useState(false);



  async function handleOAuth(provider) {

    try {

      setLoading(true);
      setMessage("");


      const { error } = await supabase.auth.signInWithOAuth({

        provider: provider,

        options: {
          redirectTo: window.location.origin
        }

      });


      if(error){

        throw error;

      }


    } catch(error){

      console.log(
        `${provider} login error:`,
        error.message
      );

      setMessage(error.message);


    } finally {

      setLoading(false);

    }

  }





  async function continueAsGuest(){


    try {

      setLoading(true);
      setMessage("");


      const { error } =
      await supabase.auth.signInAnonymously();



      if(error){

        throw error;

      }


      window.location.href="/research";


    } catch(error){


      console.log(
        "Guest login error:",
        error.message
      );


      setMessage(error.message);


    } finally {

      setLoading(false);

    }

  }






  async function sendOTP(){


    try {


      setLoading(true);
      setMessage("");



      const { error } =
      await supabase.auth.signInWithOtp({

        phone: phone

      });



      if(error){

        throw error;

      }



      setOtpSent(true);

      setMessage(
        "OTP sent successfully"
      );



    } catch(error){


      console.log(
        "OTP Error:",
        error.message
      );


      setMessage(error.message);



    } finally {

      setLoading(false);

    }

  }







  async function verifyOTP(){


    try {


      setLoading(true);
      setMessage("");



      const { error } =
      await supabase.auth.verifyOtp({

        phone: phone,

        token: otp,

        type:"sms"

      });



      if(error){

        throw error;

      }



      window.location.href="/research";



    } catch(error){


      console.log(
        "OTP Verify Error:",
        error.message
      );


      setMessage(error.message);



    } finally {

      setLoading(false);

    }

  }





  return (


    <section className="auth-page">


      <div className="auth-card">



        <h1>
          Welcome to BIRO
        </h1>



        <p>
          Research • Innovation • Collaboration
        </p>





        <button

          onClick={() => handleOAuth("google")}

          disabled={loading}

        >

          Continue with Google

        </button>






        <button

          onClick={() => handleOAuth("facebook")}

          disabled={loading}

          style={{
            marginTop:"12px"
          }}

        >

          Continue with Facebook

        </button>







        <hr
          style={{
            margin:"25px 0"
          }}
        />






        <h3>
          📱 Login with Phone
        </h3>




        <input

          type="tel"

          placeholder="+91XXXXXXXXXX"

          value={phone}

          onChange={(e)=>setPhone(e.target.value)}

        />




        {
          !otpSent &&

          <button

            onClick={sendOTP}

            disabled={loading}

            style={{
              marginTop:"12px"
            }}

          >

            Send OTP

          </button>

        }







        {
          otpSent &&

          <>

          <input

            type="text"

            placeholder="Enter OTP"

            value={otp}

            onChange={(e)=>setOtp(e.target.value)}

          />



          <button

            onClick={verifyOTP}

            disabled={loading}

            style={{
              marginTop:"12px"
            }}

          >

            Verify OTP

          </button>


          </>

        }








        <button

          onClick={continueAsGuest}

          disabled={loading}

          style={{
            marginTop:"12px"
          }}

        >

          Continue as Guest

        </button>






        {
          message &&

          <p
            style={{
              color:"red",
              marginTop:"15px"
            }}
          >

            {message}

          </p>

        }



      </div>


    </section>


  );

}


export default Login;