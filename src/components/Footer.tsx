import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About</h3>
            <p className="mt-4 text-base text-gray-300">
              Data Science student at IIT Madras with a passion for AI, machine learning, Software development and Neuroscience.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#home" className="text-base text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-base text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-base text-gray-300 hover:text-white">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-base text-gray-300 hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-base text-gray-300 hover:text-white">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
            <div className="mt-4 flex space-x-6">
              <a href="https://github.com/amanmauryas" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/amanmauryas" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:info.amanmauryas@gmail.com" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-8 text-base text-gray-400">
              Looking for internship opportunities for Summer 2025.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
           
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Aman kumar maurya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;