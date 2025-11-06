import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-inner">
          <p
            className="hero-eyebrow"
            data-reveal
            style={{ '--reveal-delay': '0.05s' }}
          >
            A Fullstack Developer
          </p>

          <h1
            className="hero-title"
            data-reveal
            data-parallax
            style={{ '--reveal-delay': '0.15s' }}
          >
            Hi, I'm{' '}
            <span className="hero-name" aria-label="Shardul Sawant">
              {"Shardul Sawant".split('').map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  className="hero-name-char"
                  aria-hidden="true"
                  style={{ '--char-index': index }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h1>

          <p
            className="hero-copy"
            data-reveal
            style={{ '--reveal-delay': '0.28s' }}
          >
            Designing what you see, engineering what you don’t... shaping seamless experiences end to end.
          </p>

          <div
            className="social-links"
            data-reveal
            style={{ '--reveal-delay': '0.4s' }}
          >
            <a
              href="https://github.com/carnifex-cmd"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shardulsawant855"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:shardul855@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
