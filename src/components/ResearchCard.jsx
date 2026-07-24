import { Link } from "react-router-dom";
import BIRO from "../assets/BIRO.png";
import "./ResearchCard.css";


function ResearchCard({ research }) {

  return (

    <div className="research-card">


      {/* BIRO LOGO */}

      <img
        src={BIRO}
        alt="BIRO Logo"
        className="card-logo"
      />


      {/* IMAGE */}

      <div className="research-image">

        <img
          src={research.image}
          alt={research.title}
        />

      </div>



      {/* CONTENT */}

      <div className="research-content">


        <span className="research-category">

          {research.category}

        </span>



        <h3>

          {research.title}

        </h3>



        <p>

          {research.description}

        </p>



        <div className="research-footer">


          <span className="author">

            👨‍🔬 {research.author || "BIRO Research Team"}

          </span>



          <Link
            to={`/research/${research.id}`}
            className="view-btn"
          >

            View Research →

          </Link>


        </div>


      </div>



    </div>

  )

}


export default ResearchCard;