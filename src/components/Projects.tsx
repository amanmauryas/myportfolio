import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI-Powered Mental health Diagnosis tool (Under dev)',
      description: 'Developing an AI Based web app that can diagnose psychiatric disorder but asking few questions.',
      technologies: ['Python', 'Typescript', 'Javasceipt'],
      github: 'https://github.com/amanmauryas/healmymind-frontend',
      demo: 'https://github.com/amanmauryas/healmymind-frontend',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'Web Based Code Visualizer',
      description: 'Created a web app to run and visualize code line by line how it works.',
      technologies: ['React', 'Node.js', 'Typescript', 'Javascript'],
      github: 'https://github.com/amanmauryas/codeviz',
      demo: 'https://codevisualizer.vercel.app/',
      image: 'https://images.unsplash.com/photo-1537884944318-390069bb8665?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'AI Based Legal Advisor',
      description: 'Developing AI based legal advisor for ease access to legal help, legal document creation (AI Model under development)',
      technologies: ['Python', 'Typescript', 'Javasceipt'],
      github: 'https://github.com/amanmauryas/legaladvisor.ai',
      demo: 'https://legaladvisor-ai.vercel.app/',
      image: 'https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGVnYWwlMjBhZHZpY2V8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'More intersting projects coming son',
      description: 'Developing more projects based on AI and ML',
      technologies: [''],
      github: '',
      demo: '',
      image: 'https://plus.unsplash.com/premium_photo-1722069799821-860b3129d252?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5kZXIlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Portfolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            A selection of my academic and research projects showcasing my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 transition-colors duration-200">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{project.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Technologies Used:</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/amanmauryas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors"
          >
            View More Projects on GitHub
            <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;