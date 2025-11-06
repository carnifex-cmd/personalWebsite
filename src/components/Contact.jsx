import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = {
    email: "shardul855@gmail.com",
    linkedin: "https://www.linkedin.com/in/shardulsawant855",
    github: "https://github.com/carnifex-cmd"
  };

  return (
    <section id="contact" className="section section-dark">
      <div className="container">
        <h2 data-reveal>Get In Touch</h2>

        <div
          className="contact-intro"
          data-reveal
          style={{ '--reveal-delay': '0.1s' }}
        >
          <p>
            I'm always interested in hearing about new opportunities and collaborations.
            Feel free to reach out if you'd like to discuss potential projects
            or just want to connect!
          </p>
        </div>

        <div className="contact-grid">
          <a
            href={`mailto:${contactInfo.email}`}
            className="contact-card surface-card"
            data-reveal
            style={{ '--reveal-delay': '0.18s' }}
            aria-label="Email Shardul"
          >
            <div className="contact-icon" aria-hidden="true">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <p>{contactInfo.email}</p>
          </a>

          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card surface-card"
            data-reveal
            style={{ '--reveal-delay': '0.26s' }}
            aria-label="Connect on LinkedIn"
          >
            <div className="contact-icon" aria-hidden="true">
              <FaLinkedin />
            </div>
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
          </a>

          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card surface-card"
            data-reveal
            style={{ '--reveal-delay': '0.34s' }}
            aria-label="View GitHub profile"
          >
            <div className="contact-icon" aria-hidden="true">
              <FaGithub />
            </div>
            <h3>GitHub</h3>
            <p>Check out my code</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
