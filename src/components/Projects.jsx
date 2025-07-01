import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import jobApplicationImage from '../assets/jobapplication.jpg';
import matchYourCodeImage from '../assets/matchyourcode.jpg';

const Projects = () => {
  const projects = [
    {
      title: "MatchYourCode",
      description: "Developed a platform to assist developers in mastering Data Structures & Algorithms through spaced repetition of LeetCode-style problems",
      image: matchYourCodeImage, // Add your project image
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/carnifex-cmd/matchyourcode",
      // live: "https://project1-demo.com"
    },
    {
      title: "Job Application Tracker Dashboard",
      description: "Developed a modern, full-stack job application tracking dashboard built with React and Node.js. Track a job search progress with a clean, responsive interface and powerful features.",
      image: jobApplicationImage, // Use the imported image
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/carnifex-cmd/JobApplicationTracker/blob/main/README.md",
      live: "https://job-application-tracker-sage-five.vercel.app/"
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
                {/* Custom image container that bypasses CSS constraints */}
                {project.image && (
                  <div style={{ 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'flex-start',
                    marginBottom: '1rem'
                  }}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        borderRadius: '8px'
                      }}
                    />
                  </div>
                )}
                
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
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
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