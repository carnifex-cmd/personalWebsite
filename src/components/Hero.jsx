import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="hero-title">
            Hi, I'm <span>Shardul Sawant</span>
          </h1>
          <p className="subtitle">
            Fullstack Developer
          </p>
          <p className="description">
          I design smooth, intuitive experiences — one pixel and function at a time. Always building, always learning.
          </p>

          <div className="social-links">
            <a
              href="https://github.com/carnifex-cmd"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shardulsawant855"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:shardul855@gmail.com"
              className="social-link"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 