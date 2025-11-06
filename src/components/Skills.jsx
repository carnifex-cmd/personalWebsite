import {
  FaReact, FaNodeJs, FaGitAlt,
  FaJs, FaPython, FaDocker, FaJira
} from 'react-icons/fa';
import { SiVuedotjs, SiWebpack, SiMongodb, SiFastapi, SiPostgresql, SiTailwindcss, SiNextdotjs, SiFirebase, SiTypescript, SiExpress } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "JavaScript (ES6)", icon: <FaJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ]
    },
    {
      category: "Frameworks",
      items: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Vue.js", icon: <SiVuedotjs /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Express.js", icon: <SiExpress /> },

      ]
    },
    {
      category: "Backend Technologies",
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ]
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Webpack", icon: <SiWebpack /> },
        { name: "JIRA", icon: <FaJira /> },
      ]
    }
  ];

  return (
    <section id="skills" className="section section-dark">
      <div className="container">
        <h2 data-reveal>Technical Skills</h2>

        <div className="skills-categories">
          {skills.map((skillCategory, index) => (
            <div
              key={skillCategory.category}
              className="skill-category"
              data-reveal
              style={{ '--reveal-delay': `${0.08 * index + 0.1}s` }}
            >
              <h3>{skillCategory.category}</h3>
              <div className="skills-grid">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="skill-card surface-card"
                    data-reveal
                    style={{ '--reveal-delay': `${0.08 * skillIndex + 0.2}s` }}
                  >
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <h4>{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
