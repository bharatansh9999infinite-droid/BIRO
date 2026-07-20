import "./App.css";
import logo from "./assets/BIRO.png";

function App() {
  return (
    <div className="App">

      <header className="header">
        <img src={logo} alt="BIRO Logo" className="logo" />

        <h1>BIRO</h1>

        <p>
          BHARATANSH INTERNATIONAL RESEARCH ORGANISATION
        </p>
      </header>


      <section className="hero">

        <h2>Welcome to BIRO</h2>

        <p>
          A Global Platform for Scientists, Philosophers and Researchers
          to Collaborate, Share Research and Innovate Together.
        </p>

        <button>
          Join BIRO
        </button>


        <section className="groups">

          <h2>Research Groups</h2>

          <div className="group-container">

            <button>
              Biology Research
            </button>

            <button>
              Physics Research
            </button>

            <button>
              Chemistry Research
            </button>

            <button>
              AI & Technology
            </button>

            <button>
              Astronomy Research
            </button>

            <button>
              Philosophy & Science
            </button>

          </div>

        </section>


      </section>


      <section className="contact">

        <h2>Contact BIRO</h2>

        <p>
          Email: bharatansh9999infinite@gmail.com
        </p>

        <p>
          Join our Facebook Research Community
        </p>

      </section>


    </div>
  );
}

export default App;