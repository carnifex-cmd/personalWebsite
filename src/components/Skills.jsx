import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaGitAlt,
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaDocker, FaGithub, FaJira
} from 'react-icons/fa';
import { SiVuedotjs, SiWebpack, SiMongodb, SiFastapi } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "JavaScript (ES6)", icon: <FaJs /> },
        { name: "Python", icon: <FaPython /> },
      ]
    },
    {
      category: "Frameworks",
      items: [
        { name: "Vue.js", icon: <SiVuedotjs /> },
        { name: "React", icon: <FaReact /> },
      ]
    },
    {
      category: "Backend Technologies",
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "FastAPI", icon: <SiFastapi /> },
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Technical Skills</h2>
          
          <div className="skills-categories">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={index}
                className="skill-category"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{skillCategory.category}</h3>
                <div className="skills-grid">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-card"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                      <h4>{skill.name}</h4>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 