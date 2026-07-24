function Contact(){

  return(

    <section className="contact">


      <h2>
        Contact BIRO
      </h2>


      <p>
        Bharatansh International Research Organisation
      </p>


      <div className="card">


        <h3>
          📧 Email
        </h3>


        <p>
          bharatansh9999infinite@gmail.com
        </p>


      </div>




      <div className="card">


        <h3>
          🌐 Research Community
        </h3>


        <p>
          Join our BIRO ON FACE BOOK BY (BHARATANSH INTERNATIONAL RESEARCH ORGANISATION ) 
        </p>


        <a 
          href="https://www.facebook.com/share/g/1Dyd1SSpph/"
          target="_blank"
          rel="noreferrer"
        >

          <button>
            Join Facebook Group
          </button>

        </a>


      </div>




      <div className="card">


        <h3>
          ✉️ Send Message
        </h3>


        <input
          type="text"
          placeholder="Your Name"
        />


        <br/><br/>


        <input
          type="email"
          placeholder="Your Email"
        />


        <br/><br/>


        <textarea
          placeholder="Your Message"
          rows="5"
        />


        <br/><br/>


        <button>
          Send Message
        </button>


      </div>



    </section>

  );

}


export default Contact;