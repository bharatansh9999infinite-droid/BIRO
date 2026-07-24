import "./Founder.css";

function Founder() {
  return (
    <section className="founder-page">

      <div className="founder-header">
        <h1>Founder & Co-Founders</h1>

        <p>
          Meet the visionary leadership behind BIRO (Bharat Innovation &
          Research Organization), committed to advancing scientific research,
          artificial intelligence, innovation, and global collaboration.
        </p>
      </div>

      <div className="founder-container">

        {/* Founder */}

        <div className="founder-card">

          <img
            src="https://via.placeholder.com/180"
            alt="Founder"
          />

          <span className="badge founder">
            Founder & CEO
          </span>

          <h2>Dr. Ansh Upadhyay</h2>

          <h4>Founder of BIRO</h4>

          <p>
            Visionary founder of BIRO with the mission of creating a global
            AI-powered research ecosystem that connects researchers,
            innovators, students, and scientists worldwide.
          </p>

        </div>



        {/* Co-Founder 1 */}

        <div className="founder-card">

          <img
            src="https://via.placeholder.com/180"
            alt="Co-Founder"
          />

          <span className="badge cofounder">
            Co-Founder
          </span>

          <h2>Dr. Pranjal Tiwari</h2>

          <h4>Research & Innovation</h4>

          <p>
            Dedicated to strengthening scientific collaboration,
            research development, and innovation initiatives within BIRO,
            helping shape the future of global research.
          </p>

        </div>



        {/* Co-Founder 2 */}

        <div className="founder-card">

          <img
            src="https://via.placeholder.com/180"
            alt="Co-Founder"
          />

          <span className="badge cofounder">
            Co-Founder
          </span>

          <h2>Ansh Singh Rajput</h2>

          <h4>Technology & Platform Development</h4>

          <p>
            Focused on technology, digital transformation,
            and platform development to build a modern ecosystem
            for researchers and innovators around the world.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Founder;