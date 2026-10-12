import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  // Replace these with your real phone numbers.
  const phoneNumber = "+917817090795";
  const whatsappNumber = "+918318973332";

  const instagramLink = "https://www.instagram.com/bharatanshaged/";
  const facebookLink = "https://www.facebook.com/share/g/1Dyd1SSpph/";

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("Please complete all fields before sending.");
      return;
    }

    // Opens the visitor's email app; it does not send automatically.
    const subject = encodeURIComponent(`BIRO Contact Message from ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
    );

    window.location.href =
      `mailto:bharatansh9999infinite@gmail.com?subject=${subject}&body=${body}`;

    setStatus("Your email app should open with your message ready to send.");
  }

  const phoneAvailable = !phoneNumber.includes("X");
  const whatsappAvailable = !whatsappNumber.includes("X");

  return (
    <main className="contact-page">
      <div className="contact-glow contact-glow-one" aria-hidden="true" />
      <div className="contact-glow contact-glow-two" aria-hidden="true" />

      <section className="contact-container">
        <header className="contact-header">
          <span className="contact-eyebrow">LET'S CONNECT</span>
          <h1>Contact BIRO</h1>
          <p>
            Bharatansh International Research Organisation
          </p>
          <p className="contact-intro">
            Connect with our community, reach out to us, or share your message.
          </p>
        </header>

        <div className="contact-grid">
          {/* Email */}
          <article className="contact-card">
            <div className="contact-icon email-icon" aria-hidden="true">
              ✉
            </div>
            <h2>Email Us</h2>
            <p>For questions, collaboration, and general enquiries.</p>
            <a
              className="contact-button"
              href="mailto:bharatansh9999infinite@gmail.com"
            >
              Send Email
            </a>
            <span className="contact-detail">
              bharatansh9999infinite@gmail.com
            </span>
          </article>

          {/* Facebook */}
          <article className="contact-card">
            <div className="contact-icon facebook-icon" aria-hidden="true">
              f
            </div>
            <h2>Research Community</h2>
            <p>
              Join the BIRO Facebook Group to connect with our research
              community.
            </p>
            <a
              className="contact-button facebook-button"
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Facebook Group
            </a>
          </article>

          {/* Instagram */}
          <article className="contact-card">
            <div className="contact-icon instagram-icon" aria-hidden="true">
              ◎
            </div>
            <h2>Follow on Instagram</h2>
            <p>Follow BIRO updates and connect with us on Instagram.</p>
            <a
              className="contact-button instagram-button"
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Instagram
            </a>
            <span className="contact-detail">@bharatanshaged</span>
          </article>

          {/* Phone */}
          <article className="contact-card">
            <div className="contact-icon phone-icon" aria-hidden="true">
              ☎
            </div>
            <h2>Call Us</h2>
            <p>Contact us by phone for enquiries.</p>
            {phoneAvailable ? (
              <a className="contact-button" href={`tel:${phoneNumber}`}>
                Call BIRO
              </a>
            ) : (
              <span className="contact-detail">
                Phone number will be added soon.
              </span>
            )}
          </article>

          {/* WhatsApp */}
          <article className="contact-card">
            <div className="contact-icon whatsapp-icon" aria-hidden="true">
              ☏
            </div>
            <h2>WhatsApp</h2>
            <p>Start a WhatsApp conversation with us.</p>
            {whatsappAvailable ? (
              <a
                className="contact-button whatsapp-button"
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            ) : (
              <span className="contact-detail">
                WhatsApp number will be added soon.
              </span>
            )}
          </article>

          {/* Contact form */}
          <article className="contact-card contact-form-card">
            <div className="contact-icon message-icon" aria-hidden="true">
              ✎
            </div>
            <h2>Send a Message</h2>
            <p>Fill out the form to prepare an email to the BIRO team.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />

              <label htmlFor="contact-email">Your Email</label>
              <input
                id="contact-email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                placeholder="How can we help you?"
                rows="5"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />

              <button className="contact-button contact-submit" type="submit">
                Prepare Email
              </button>

              {status && (
                <p className="contact-status" role="status">
                  {status}
                </p>
              )}
            </form>
          </article>
        </div>

        <footer className="contact-footer">
          Research • Innovation • Collaboration
        </footer>
      </section>
    </main>
  );
}

export default Contact;