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
            Hi, I'm{' '}
            <motion.span
              initial={{ 
                opacity: 0, 
                y: -200, 
                scale: 0.3,
                rotateZ: -15
              }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                rotateZ: 0
              }}
              transition={{
                delay: 0.8,
                duration: 1.2,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              style={{
                display: 'inline-block',
                transformOrigin: 'center'
              }}
            >
              Shardul Sawant
            </motion.span>
          </h1>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.5 }}
          >
            A Fullstack Developer
          </motion.p>
          <motion.p 
            className="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
          I design smooth, intuitive experiences — one pixel and function at a time. Always building, always learning.
          </motion.p>

          <motion.div 
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.5 }}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 