import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section section-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a Software Engineer with 2+ years of experience in building responsive, scalable, and user-centric applications,
                including high-traffic platforms handling around 2.5 million daily visits. I'm proficient in VueJs and
                JavaScript(ES6), with a strong background in modern web development.
              </p>
              <p>
                I specialize in working with Scrum teams to deliver seamless integration of technologies,
                ensuring optimized performance for applications that serve millions of users daily. My focus is on
                creating efficient, scalable solutions while maintaining high code quality standards.
              </p>
            </div>
            
            <div className="quick-facts">
              <h3>Quick Facts</h3>
              <ul className="facts-list">
                <li>🎓 Bachelor of Engineering in Computer Engineering - University of Mumbai</li>
                <li>💼 2+ years of professional experience</li>
                <li>🌍 Based in Mumbai, India</li>
                <li>🚀 Passionate about Web Development and Performance Optimization</li>
                <li>📚 Currently working at WebMD as Software Engineer</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 