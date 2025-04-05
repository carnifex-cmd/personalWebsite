import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: "WebMD",
      position: "Software Engineer",
      period: "June 2022 - Present",
      sections: [
        {
          title: "WebMD Ads",
          items: [
            "Designed and built a React-based ads comparison tool, reducing manual testing efforts by 40%.",
            "Integrated REST APIs like Transunion, Pulsepoint ID5, and Liveramp for advanced user personalization and targeting.",
            "Enhanced ad framework performance with a viewport-based debounce system, improving scroll smoothness and reducing ad request overhead, resulting in a 400ms faster load time.",
            "Developed dynamic and reusable ad components named Appointment-360 and Doctor Discussion Guide with cross-platform compatibility, resulting in a 5% increase in newsletter subscriptions."
          ]
        },
        {
          title: "Medscape",
          items: [
            "Engineered responsive headers for both desktop and mobile platforms using React and CSS.",
            "Implemented Server-Side Rendering (SSR) for Medscape pages, resulting in a 20% increase in SEO performance and 15% faster page load times.",
            "Built RESTful APIs with Node.js and Express for seamless data handling and inter-service communication.",
            "Maintained high code quality through regular code reviews and CI pipelines; ensured 100% sprint completion in cross-functional teams."
          ]
        },
        {
          title: "WebMD Helios Website",
          items: [
            "Spearheaded development of the Helios team management app for tracking working hours and team info.",
            "Integrated Redux for robust and scalable state management across the application, improving maintainability and performance.",
            "Enforced unit testing, achieving 95% code coverage, ensuring code quality and reliability, and reducing potential bugs during deployment.",
            "Mentored junior developers, contributing to a collaborative and high-performing team environment."
          ]
        }
      ]
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
                    {exp.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="experience-section">
                        <h4>{section.title}</h4>
                        <ul className="description-list">
                          {section.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
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