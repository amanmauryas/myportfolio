import React, { useState } from 'react';
import { Menu, X, Home, User, Briefcase, Code, Sparkles, GraduationCap, FileText } from 'lucide-react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Academics from './components/Academics';
import Freelance from './components/Freelance';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);

  const sections = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'about', label: 'About Me', icon: <User size={20} /> },
    { id: 'academics', label: 'Academics', icon: <GraduationCap size={20} /> },
    { id: 'projects', label: 'Works', icon: <Briefcase size={20} /> },
    { id: 'freelance', label: 'Freelance', icon: <FileText size={20} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={20} /> },
    { id: 'experience', label: 'Fun Times', icon: <Sparkles size={20} /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'academics':
        return <Academics />;
      case 'projects':
        return <Projects />;
      case 'freelance':
        return <Freelance />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden font-['Ubuntu']">
      {/* Sidebar - Desktop */}
      <aside 
        className={`hidden md:flex flex-col fixed h-screen bg-black/50 backdrop-blur-sm border-r border-white/10 transition-all duration-300 z-10 ${
          isSidebarCollapsed ? 'w-16' : 'w-64'
        }`}
      >
        <div className="flex flex-col h-full py-8">
          <div className="px-4 mb-8 flex items-center justify-end">
            <button
              onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
              className="text-white/60 hover:text-white transition-colors"
            >
              {isSidebarCollapsed ? <Menu size={20} /> : <X size={20} />}
            </button>
          </div>
          <nav className="px-2 flex-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  const element = document.getElementById(section.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                } ${isSidebarCollapsed ? 'justify-center' : ''}`}
              >
                {section.icon}
                {!isSidebarCollapsed && <span className="text-sm md:text-base">{section.label}</span>}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-black/50 backdrop-blur-sm text-white/80 hover:text-white"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-sm">
          <nav className="p-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setIsMobileMenuOpen(false);
                  const element = document.getElementById(section.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg mb-2 ${
                  activeSection === section.id
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {section.icon}
                <span className="text-base">{section.label}</span>
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className={`flex-1 overflow-y-auto transition-all duration-300 ${
        isSidebarCollapsed ? 'md:ml-16' : 'md:ml-64'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="min-h-screen">
              {renderContent()}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;