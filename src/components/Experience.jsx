import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: "WebMD",
      position: "Fullstack Developer",
      period: "June 2022 - Present",
      summary:
        "Fullstack Developer with expertise in React, Vue.js, Node.js, and Express, experienced in building scalable REST APIs and reusable front-end components. Improved ad framework performance, SEO, and user engagement through optimized rendering strategies and responsive UI development. Ensured high reliability with unit testing, CI pipelines, and efficient state management for large-scale applications."
    }
  ];

  return (
    <section id="experience" className="section section-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>What I Do</h2>
          
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="experience-content">
                  <div className="experience-icon">
                    <FaBriefcase />
                  </div>
                  <div className="experience-details">
                    <h3>{exp.position}</h3>
                    <p className="company">{exp.company}</p>
                    <p className="period">{exp.period}</p>
                    <p className="summary">{exp.summary}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
