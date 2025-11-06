import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'  // Commented until projects are ready
import Contact from './components/Contact'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });
  const [highContrast, setHighContrast] = useState(() => {
    const savedContrast = localStorage.getItem('contrast');
    return savedContrast === 'true';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('data-contrast', highContrast ? 'high' : 'normal');
    localStorage.setItem('contrast', highContrast.toString());
  }, [highContrast]);

  useEffect(() => {
    // Orchestrate reveal + parallax animations with a reduced-motion fallback.
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const setupReveal = () => {
      const elements = document.querySelectorAll('[data-reveal]');

      if (reduceMotionQuery.matches) {
        elements.forEach((el) => el.classList.add('is-visible'));
        return () => {};
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });

      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    };

    const setupParallax = () => {
      const hero = document.querySelector('.hero');
      const target = hero?.querySelector('[data-parallax]');

      if (!hero || !target) {
        return () => {};
      }

      if (reduceMotionQuery.matches) {
        target.style.transform = '';
        return () => {};
      }

      let rafId = null;

      const update = () => {
        const heroHeight = hero.offsetHeight || 1;
        const progress = Math.min(Math.max(window.scrollY / heroHeight, 0), 1);
        target.style.transform = `translateY(${progress * 60}px)`;
        rafId = null;
      };

      const schedule = () => {
        if (rafId !== null) {
          return;
        }
        rafId = requestAnimationFrame(update);
      };

      schedule();
      window.addEventListener('scroll', schedule, { passive: true });
      window.addEventListener('resize', schedule);

      return () => {
        window.removeEventListener('scroll', schedule);
        window.removeEventListener('resize', schedule);
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
        }
      };
    };

    let cleanupReveal = setupReveal();
    let cleanupParallax = setupParallax();

    const handleMotionPreferenceChange = () => {
      cleanupReveal();
      cleanupParallax();
      cleanupReveal = setupReveal();
      cleanupParallax = setupParallax();
    };

    reduceMotionQuery.addEventListener('change', handleMotionPreferenceChange);

    return () => {
      cleanupReveal();
      cleanupParallax();
      reduceMotionQuery.removeEventListener('change', handleMotionPreferenceChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const toggleContrast = () => {
    setHighContrast(prev => !prev)
  }

  return (
    <div className="app-shell">
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme}
        highContrast={highContrast}
        toggleContrast={toggleContrast}
      />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        {/* Projects section commented out until ready to showcase */}
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
