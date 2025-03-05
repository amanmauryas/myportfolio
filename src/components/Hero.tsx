import React from 'react';
import { ChevronRight } from 'lucide-react';
import TypingEffect from './TypingName';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-white dark:bg-gray-900 flex items-center justify-center min-h-screen text-center transition-colors duration-200 before:absolute before:inset-0 before:bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_1px,_transparent_1px)] before:bg-[size:16px_16px] before:opacity-30">

      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          <span className="block">Aman Kumar Maurya</span>
          <TypingEffect />
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Data Science Student at IITM | Minor in CSE and GenAI IIT Mandi <br />
          Frontend Developer | Python | Neuroscience <br />
          Building something amazing in HealTech
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 text-base font-medium rounded-md text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-indigo-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-gray-600 transition-colors flex items-center justify-center"
          >
            Contact Me
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
