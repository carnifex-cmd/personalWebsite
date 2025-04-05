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
              I’m a Software Engineer with 3+ years of experience crafting responsive, scalable, and user-first applications. I’ve worked on high-traffic platforms serving millions of users daily, focusing on delivering seamless experiences and clean, maintainable code. I care about performance, usability, and building products that just work.
              </p>
            </div>
            
            <div className="quick-facts">
              <h3>Quick Facts</h3>
              <ul className="facts-list">
                <li>🎓 B.E. in Computer Engineering</li>
                <li>💼 3+ years building cool stuff that actually ships</li>
                <li>🌆 Based in Mumbai – powered by street food & late-night debugging</li>
                <li>🚀 Into fast-loading websites, slick UIs, and clean backend logic</li>
                <li>🛠️ Currently solving real-world dev puzzles at WebMD</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 