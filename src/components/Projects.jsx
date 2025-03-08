import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of your first project. What problem did it solve? What technologies did you use?",
      image: "project1.jpg", // Add your project image
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1-demo.com"
    },
    {
      title: "Project 2",
      description: "Description of your second project. Highlight the key features and your role in development.",
      image: "project2.jpg", // Add your project image
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2-demo.com"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="project-image">
                  {/* Add your project image here */}
                  {/* <img src={project.image} alt={project.title} /> */}
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-tags">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="project-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
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

export default Projects; 