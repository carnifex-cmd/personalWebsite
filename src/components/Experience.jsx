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
        <h2 data-reveal>What I Do</h2>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <article
              key={exp.company}
              className="experience-card surface-card"
              data-reveal
              style={{ '--reveal-delay': `${0.12 * index + 0.12}s` }}
            >
              <div className="experience-icon" aria-hidden="true">
                <FaBriefcase />
              </div>
              <div className="experience-details">
                <h3>{exp.position}</h3>
                <p className="company">{exp.company}</p>
                <p className="period">{exp.period}</p>
                <p className="summary">{exp.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
