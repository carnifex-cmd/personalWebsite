const About = () => {
  return (
    <section id="about" className="section section-dark">
      <div className="container">
        <h2 data-reveal>About Me</h2>

        <div className="about-grid">
          <div
            className="about-text"
            data-reveal
            style={{ '--reveal-delay': '0.1s' }}
          >
            <p>
              Hey, I'm Shardul — a fullstack developer who enjoys building for the web. With over 3 years of experience, I’ve worked on high-traffic platforms and projects that actually hold up in the real world.
            </p>
            <p>
              I care about clean code, fast performance, and smooth user experiences. Most days, you’ll find me experimenting with side projects, learning something new, or just refining the little details that make things feel right.
            </p>
          </div>

          <div
            className="quick-facts surface-card"
            data-reveal
            style={{ '--reveal-delay': '0.18s' }}
          >
            <h3>Quick Facts</h3>
            <ul className="facts-list">
              <li>🎓 B.E. in Computer Engineering</li>
              <li>💼 3+ years building cool stuff that actually ships</li>
              <li>🌆 Based in Mumbai – powered by street food & late-night debugging</li>
              <li>🚀 Into fast-loading websites, slick UIs, and clean backend logic</li>
              <li>🛠️ Currently solving real-world dev puzzles at WebMD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
