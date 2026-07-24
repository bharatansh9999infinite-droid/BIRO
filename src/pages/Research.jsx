import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import ResearchCard from "../components/ResearchCard";
import "./Research.css";


function Research() {


  const [groups, setGroups] = useState([]);

  const [loading, setLoading] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");



  const categories = [
    "All",
    "AI",
    "Physics",
    "Biology",
    "Mathematics",
    "Space",
    "Environment"
  ];




  useEffect(()=>{

    fetchGroups();

  },[]);





  async function fetchGroups(){


    try{


      setLoading(true);

      setErrorMessage("");



      const {data,error}=await supabase

      .from("research_groups")

      .select("*")

      .order("id",{ascending:true});



      if(error){

        throw error;

      }



      setGroups(data || []);



    }

    catch(error){


      console.log(error.message);

      setErrorMessage(error.message);


    }

    finally{

      setLoading(false);

    }


  }






  const filteredGroups = groups

  .filter((group)=>{


    const title =

    group.title?.toLowerCase() || "";


    return title.includes(
      search.toLowerCase()
    );


  })


  .filter((group)=>{


    if(selectedCategory==="All"){

      return true;

    }


    return group.category===selectedCategory;


  });







  if(loading){

    return(

      <section className="research-page">

        <h1>
          Loading BIRO Research Library...
        </h1>

      </section>

    );

  }






  return(


    <section className="research-page">



      <div className="research-header">


        <span className="library-tag">
          🧠 BIRO AI RESEARCH LIBRARY
        </span>


        <h1>
          Explore Scientific Discoveries
        </h1>


        <p>
          Discover research groups, collaborate with innovators
          and build the future of science.
        </p>



        <div className="research-count">

          {filteredGroups.length}

          <span>
            Research Groups
          </span>

        </div>


      </div>






      <div className="search-box">


        <input

          className="research-search"

          type="text"

          placeholder="Search AI, Physics, Biology..."

          value={search}

          onChange={(e)=>

            setSearch(e.target.value)

          }

        />


      </div>







      <div className="category-buttons">


        {

          categories.map((category)=>(


            <button

              key={category}

              className={

                selectedCategory===category

                ?

                "active"

                :

                ""

              }


              onClick={()=>


                setSelectedCategory(category)


              }


            >

              {category}


            </button>


          ))

        }


      </div>








      {

      errorMessage ?


      (

        <div className="error-box">

          <p>
            {errorMessage}
          </p>


          <button onClick={fetchGroups}>
            Retry
          </button>


        </div>


      )



      :



      filteredGroups.length===0 ?



      (

        <h2 className="no-result">

          No Research Groups Found

        </h2>


      )



      :



      (

        <div className="research-grid">


          {

          filteredGroups.map((group)=>(


            <ResearchCard

              key={group.id}

              research={group}

            />


          ))

          }


        </div>

      )


      }



    </section>


  );


}


export default Research;