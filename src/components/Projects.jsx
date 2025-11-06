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
      technologies: ["React", "Firebase", "Tailwind CSS", "Web Audio API", "React Router", "Context API"],
      github: "https://github.com/carnifex-cmd/echoBoard",
      live: "https://echo-board-theta.vercel.app/"
    }

  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 data-reveal>Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card surface-card"
              data-reveal
              style={{ '--reveal-delay': `${0.12 * index + 0.12}s` }}
            >
              {project.image && (
                <div className="project-media">
                  <img src={project.image} alt={project.title} />
                </div>
              )}

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tag">
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
                    aria-label={`${project.title} GitHub`}
                  >
                    <FaGithub /> Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`${project.title} live demo`}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
