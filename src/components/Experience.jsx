import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: "WebMD",
      position: "Software Engineer",
      period: "June 2022 - Present",
      description: [
        "Led the development of an ads comparison tool to compare page-level and slot-level ad targets from two different URLs, reducing manual testing efforts by 40%.",
        "Integrated user identification tools like Transmunion Connectivity API, Pulsepoint ID5, and Liveramp, enhancing user personalization and ad targeting across WebMD website.",
        "Optimized software performance and user experience, implementing a viewport-based ad debounce mechanism, improving page scrolling and core web vitals by reducing unnecessary ad requests and enhancing page load speed by 400ms.",
        "Researched and implemented emerging technologies and frameworks, such as Server-Side Rendering (SSR) for Medscape pages, resulting in a 20% increase in SEO performance and 15% faster page load times.",
        "Enforced unit testing, achieving 95% code coverage, ensuring code quality and reliability.",
        "Developed new dynamic ad creatives named Appointment-360 and Doctor Discussion Guide, resulting in a 5% increase in newsletter subscriptions.",
        "Developed and spearheaded the creation of the Helios Team management application.",
        "Collaborated with geographically distributed teams, ensuring efficient communication and achieving a 100% sprint completion rate for 10 consecutive sprints.",
        "Authored and maintained detailed technical documentation for various systems and APIs.",
        "Worked on optimizing the ads framework, improving performance by 20% and driving higher ad revenue.",
        "Mentored junior developers under WebMD Helios Program, fostering skill development."
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
          <h2>Work Experience</h2>
          
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
                    <ul className="description-list">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
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