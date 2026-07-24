function Community(){

  const posts = [

    {
      title:"New Biology Research Discussion",
      text:"Scientists can share ideas, discoveries and biological research projects here."
    },

    {
      title:"Physics Innovation Forum",
      text:"Discuss theories, experiments and new concepts with researchers worldwide."
    },

    {
      title:"AI Research Collaboration",
      text:"Share artificial intelligence projects and collaborate with innovators."
    }

  ];


  return(

    <section className="community">


      <h2>
        BIRO Research Community
      </h2>


      <p>
        Connect, discuss and collaborate with researchers around the world.
      </p>



      <div className="group-container">


        {
          posts.map((post,index)=>(

            <div 
              className="card"
              key={index}
            >


              <h3>
                {post.title}
              </h3>


              <p>
                {post.text}
              </p>


              <button>
                Join Discussion
              </button>


            </div>

          ))
        }


      </div>



      <div style={{marginTop:"50px"}}>


        <h2>
          Share Research
        </h2>


        <p>
          Future feature: Upload research papers, images and project updates.
        </p>


        <button>
          Create Post
        </button>


      </div>



    </section>

  );

}


export default Community;