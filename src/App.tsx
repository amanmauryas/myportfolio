import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Academics from './components/Academics';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import ExtraCurricular from './components/ExtraCurricular';
import Freelance from './components/Freelance';

type Section = {
  id: string;
  component: JSX.Element;
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolling, setIsScrolling] = useState(false);

  const defaultComponent = <Hero />;
  const sections: Section[] = [
    { id: 'hero', component: defaultComponent },
    { id: 'about', component: <About /> },
    { id: 'projects', component: <Projects /> },
    { id: 'skills', component: <Skills /> },
    { id: 'academics', component: <Academics /> },
    { id: 'certificates', component: <Certificates /> },
    { id: 'freelance', component: <Freelance /> },
    { id: 'extracurricular', component: <ExtraCurricular /> },
    { id: 'contact', component: <Contact /> }
  ];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      setIsScrolling(true);
      const timeout = window.setTimeout(() => setIsScrolling(false), 1000);

      const currentIndex = sections.findIndex(section => section.id === activeSection);
      if (e.deltaY > 0 && currentIndex < sections.length - 1) {
        setActiveSection(sections[currentIndex + 1].id);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setActiveSection(sections[currentIndex - 1].id);
      }

      return () => window.clearTimeout(timeout);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeSection, isScrolling, sections]);

  useEffect(() => {
    const handleSectionChange = (e: CustomEvent<{ section: string }>) => {
      setActiveSection(e.detail.section);
    };

    window.addEventListener('changeSection' as any, handleSectionChange);
    return () => window.removeEventListener('changeSection' as any, handleSectionChange);
  }, []);

  const getPageTitle = () => {
    return sections.find(section => section.id === activeSection)?.id.charAt(0).toUpperCase() + sections.find(section => section.id === activeSection)?.id.slice(1) || '';
  };

  return (
    <div className="h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

          * {
            font-family: 'Space Grotesk', sans-serif;
          }

          .nav-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
          }

          .nav-dot.active {
            background: #ff9c43;
          }

          .nav-dot:hover {
            background: rgba(255, 255, 255, 0.4);
          }

          .orange-circle {
            position: relative;
          }

          .orange-circle::after {
            content: '';
            position: absolute;
            width: 120%;
            height: 120%;
            left: -10%;
            top: -10%;
            border: 2px solid #ff9c43;
            border-radius: 50%;
            opacity: 0.6;
          }

          .orange-arrow {
            position: absolute;
            right: -40px;
            bottom: -20px;
            transform: rotate(45deg);
            color: #ff9c43;
          }
        `}
      </style>

      {/* Logo */}
      <div className="fixed top-8 left-8 text-2xl font-bold">
        <span className="text-[#ff9c43]">[</span>
        <span className="text-[#ff9c43] ml-1">Aman</span>
        <span className="text-[#ff9c43]">]</span>
      </div>

      {/* Page Title */}
      {activeSection !== 'hero' && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 text-2xl font-medium">
          {getPageTitle()}
        </div>
      )}

      {/* Contact Button */}
      <button 
        onClick={() => setActiveSection('contact')}
        className="fixed top-8 right-8 px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
      >
        Contact
      </button>

      {/* Navigation dots */}
      <div className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-3 z-50">
        <div className="hidden sm:block absolute -left-8 top-1/2 -translate-y-1/2 h-px w-6 bg-white/20" />
        {sections.map(({ id }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              activeSection === id 
                ? 'bg-white scale-100' 
                : 'bg-white/20 scale-75 hover:scale-90 hover:bg-white/40'
            }`}
            aria-label={`Go to ${id} section`}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative w-full h-full">
        {sections.find(section => section.id === activeSection)?.component ?? defaultComponent}
      </div>
    </div>
  );
};

export default App;