import React from 'react';
import { Mail, FileText, Linkedin, Github } from 'lucide-react';
import TypingEffect from './TypingName';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: <Mail size={28} />, href: 'mailto:info.amanmauryas@example.com', delay: 0 },
    { icon: <Github size={28} />, href: 'https://github.com/amanmauryas', delay: 0.1 },
    { icon: <Linkedin size={28} />, href: 'https://linkedin.com/in/amanmauryas', delay: 0.2 },
    { icon: <FileText size={28} />, href: '/resume.pdf', delay: 0.3 },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:16px_16px] opacity-20"></div>

      {/* Floating Social Icons */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-8">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transform hover:scale-110 transition-all duration-300 animate-float"
            style={{ animationDelay: `${link.delay}s` }}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white">
            <span className="block">Hi</span>
            <span className="block mt-2">
              I'm Aman Maurya
            </span>
          </h1>
          <div className="text-2xl md:text-3xl text-white/80">
            <TypingEffect />
          </div>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Data Science Student at IITM | Minor in CSE and GenAI IIT Mandi
            <br />
            Building <a href="http://healmymind.in">healmymind.in</a>
          </p>
        </div>
      </div>

      {/* Decorative line */}
      <svg
        className="absolute bottom-0 left-0 right-0 opacity-10"
        width="100%"
        height="2"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="1"
          x2="100%"
          y2="1"
          stroke="currentColor"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="text-white"
        />
      </svg>
    </div>
  );
};

export default Hero;
