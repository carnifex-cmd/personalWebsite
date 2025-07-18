import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import jobApplicationImage from '../assets/jobapplication.jpg';
import matchYourCodeImage from '../assets/matchyourcode.jpg';
import echoBoard from '../assets/echoboard.png';

const Projects = () => {
  const projects = [
    {
      title: "MatchYourCode",
      description: "Developed a platform to assist developers in mastering Data Structures & Algorithms through spaced repetition of LeetCode-style problems",
      image: matchYourCodeImage, 
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/carnifex-cmd/matchyourcode",
      // live: "https://project1-demo.com"
    },
    {
      title: "Job Application Tracker Dashboard",
      description: "Developed a modern, full-stack job application tracking dashboard built with React and Node.js. Track a job search progress with a clean, responsive interface and powerful features.",
      image: jobApplicationImage, 
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/carnifex-cmd/JobApplicationTracker",
      live: "https://job-application-tracker-sage-five.vercel.app/"
    },
    {
      title: "Echo Board",
      description: "Developed a personal audio message board using React and Firebase. Record, organize, and share voice notes with custom boards. Features Google authentication, privacy controls, and a responsive Tailwind CSS design for seamless desktop and mobile use.",
      image: echoBoard, 
      technologies: ["React", "Firebase (Firestore, Storage, Authentication)", "Tailwind CSS", "Web Audio API", "React Router", "Context API"],
      github: "https://github.com/carnifex-cmd/echoBoard",
      live: "https://echo-board-theta.vercel.app/"
    }

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