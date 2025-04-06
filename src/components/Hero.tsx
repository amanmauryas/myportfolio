import React, { useState, useEffect } from 'react';
import { FileText, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentInstitute, setCurrentInstitute] = useState(0);
  const institutes = ['IIT Madras', 'IIT Mandi'];

  useEffect(() => {
    const currentText = institutes[currentInstitute];
    const speed = isDeleting ? 50 : 100;
    const pause = 2000;

    if (!isDeleting && typedText === currentText) {
      setTimeout(() => setIsDeleting(true), pause);
      return;
    }

    if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setCurrentInstitute((prev) => (prev + 1) % institutes.length);
      return;
    }

    const timeout = setTimeout(() => {
      setTypedText(prev => 
        isDeleting 
          ? prev.slice(0, -1)
          : currentText.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentInstitute, institutes]);

  const handleSectionChange = (section: string) => {
    const event = new CustomEvent('changeSection', { detail: { section } });
    window.dispatchEvent(event);
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-4xl w-full px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 sm:gap-12">
          {/* Left side - Main content */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4">
              Hi, I'm Aman Maurya
            </h1>
            <div className="h-6 sm:h-8 mb-3 sm:mb-4">
              <p className="text-lg sm:text-2xl text-white/60">
                Student at {typedText}
                <span className="animate-blink">|</span>
              </p>
            </div>
            <p className="text-sm sm:text-base text-white/60 mb-6 sm:mb-8 max-w-lg">
              Passionate about building innovative solutions and exploring new technologies.
              Currently focused on Web Development, Machine Learning, and Cloud Computing.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => handleSectionChange('about')}
                className="px-4 sm:px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-sm sm:text-base"
              >
                Learn More
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 bg-[#ff9c43] hover:bg-[#ff9c43]/90 rounded-lg transition-colors inline-flex items-center gap-2 text-sm sm:text-base"
              >
                <FileText size={16} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right side - Social links */}
          <div className="flex sm:flex-col gap-4 sm:gap-6">
            <a
              href="https://github.com/amanmauryas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Github size={20} className="text-white/60 hover:text-white" />
            </a>
            <a
              href="https://linkedin.com/in/amanmauryas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Linkedin size={20} className="text-white/60 hover:text-white" />
            </a>
            <a
              href="https://twitter.com/amanmauryas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Twitter size={20} className="text-white/60 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
