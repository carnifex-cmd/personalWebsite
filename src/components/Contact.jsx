import { motion } from 'framer-motion';
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          
          <div className="contact-intro">
            <p>
              I'm always interested in hearing about new opportunities and collaborations.
              Feel free to reach out if you'd like to discuss potential projects
              or just want to connect!
            </p>
          </div>

          <div className="contact-grid">
            <motion.a
              href={`mailto:${contactInfo.email}`}
              className="contact-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>{contactInfo.email}</p>
            </motion.a>

            <motion.a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
            </motion.a>

            <motion.a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contact-icon">
                <FaGithub />
              </div>
              <h3>GitHub</h3>
              <p>Check out my code</p>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 