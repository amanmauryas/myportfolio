import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentInstitution, setCurrentInstitution] = useState(0);

  const institutions = [
    'IIT Madras',
    'IIT Mandi'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const currentInstitutionText = institutions[currentInstitution];
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < currentInstitutionText.length) {
        setTypedText(currentInstitutionText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setTypedText(currentInstitutionText.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === currentInstitutionText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setCurrentInstitution((currentInstitution + 1) % institutions.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentInstitution]);

  return (
    <div className="relative h-full w-full flex items-center justify-center p-4 sm:p-8">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:16px_16px] opacity-20"></div>

      <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center justify-center min-h-[80vh]">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Hi, I'm <span className="text-white/60">Aman Maurya</span>
          </h1>
          
          <div className="h-20 flex items-center justify-center">
            <p className="text-lg sm:text-xl text-white/60">
              Student at{' '}
              <span className="text-white font-medium">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </p>
          </div>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
            A passionate developer focused on creating innovative solutions in the fields of AI and web development.<br/>
            Facsinated about neuroscience
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/amanmauryas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm sm:text-base">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/amanmauryas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm sm:text-base">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/amanmauryas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
              <span className="text-sm sm:text-base">Twitter</span>
            </a>
            <a
              href="mailto:info.amanmauryas@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm sm:text-base">Email</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
            >
              Learn More
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-lg border border-white/10 text-white hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
