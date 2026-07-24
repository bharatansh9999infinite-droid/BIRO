import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import BIRO from "../assets/BIRO.png";
import "./ResearchDetails.css";


function ResearchDetails() {


  const { id } = useParams();


  const [research, setResearch] = useState(null);

  const [loading, setLoading] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");





  useEffect(() => {

    fetchResearch();

  }, [id]);






  async function fetchResearch() {


    try {


      setLoading(true);

      setErrorMessage("");



      const { data, error } = await supabase

        .from("research_groups")

        .select("*")

        .eq("id", id)

        .single();





      if(error){

        throw error;

      }



      setResearch(data);



    }


    catch(error){


      console.log(
        "Research Details Error:",
        error.message
      );


      setErrorMessage(error.message);


    }


    finally{


      setLoading(false);


    }


  }







  if(loading){


    return (

      <section className="research-details">

        <div className="details-container">

          <h1>
            Loading Research Details...
          </h1>

        </div>

      </section>

    );

  }







  if(errorMessage){


    return (

      <section className="research-details">

        <div className="details-container">


          <h1>
            Something went wrong
          </h1>


          <p>
            {errorMessage}
          </p>



          <Link 
          to="/research"
          className="back-btn"
          >

            Back To Research

          </Link>


        </div>


      </section>

    );

  }








  if(!research){


    return (

      <section className="research-details">

        <div className="details-container">


          <h1>
            Research Group Not Found
          </h1>



          <Link 
          to="/research"
          className="back-btn"
          >

            Back To Research

          </Link>


        </div>

      </section>

    );

  }









  return (


    <section className="research-details">


      <div className="details-container">





        {/* BIRO LOGO */}


        <img

          src={BIRO}

          alt="BIRO Logo"

          className="details-logo"

        />







        {
          research.featured && (

            <span className="details-featured">

              ⭐ Featured Research

            </span>

          )
        }







        <span className="details-category">

          {research.category || "Research"}

        </span>









        <h1>

          {research.title}

        </h1>









        {/* MAIN IMAGE */}


        {

          research.image && (

            <img

              src={research.image}

              alt={research.title}

              className="details-image"

            />

          )

        }









        <p className="details-description">


          {

            research.description ||

            "No description available"

          }


        </p>









        {/* STATS */}


        <div className="details-stats">





          <div className="stat-box">


            <strong>

              {research.members || 0}

            </strong>


            <span>

              Members

            </span>


          </div>






          <div className="stat-box">


            <strong>

              {research.projects || 0}

            </strong>


            <span>

              Projects

            </span>


          </div>






          <div className="stat-box">


            <strong>

              {research.papers || 0}

            </strong>


            <span>

              Papers

            </span>


          </div>





        </div>









        {/* EXTRA INFO */}



        <div className="research-extra">



          <div>

            👨‍🔬

            <strong>
              Researcher
            </strong>


            <p>

              {
                research.author ||

                "BIRO Research Team"

              }

            </p>


          </div>






          <div>


            👁

            <strong>
              Views
            </strong>


            <p>

              {
                research.views || 0

              }

            </p>


          </div>







          <div>


            ❤️

            <strong>
              Likes
            </strong>


            <p>

              {
                research.likes || 0

              }

            </p>


          </div>





        </div>









        {/* ACTION BUTTONS */}



        <div className="research-actions">



          <button>

            🎙 Voice Explanation

          </button>





          <button>


            📄 Download PDF


          </button>






          <button className="join-research-btn">


            👥 Join Research Group


          </button>





        </div>









        <Link

          to="/research"

          className="back-btn"

        >

          ← Back To Research

        </Link>






      </div>



    </section>



  );


}





export default ResearchDetails;