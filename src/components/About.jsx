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
              Hey, I'm Shardul — a fullstack developer who enjoys building for the web. With over 3 years of experience, I’ve worked on high-traffic platforms and projects that actually hold up in the real world.

I care about clean code, fast performance, and smooth user experiences. Most days, you’ll find me experimenting with side projects, learning something new, or just refining the little details that make things feel right.
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