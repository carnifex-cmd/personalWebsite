import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const toggleContrast = () => {
    setHighContrast(prev => !prev)
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
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
