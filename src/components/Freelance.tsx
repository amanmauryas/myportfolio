import React from 'react';
import { Code2, Globe, Database, Smartphone } from 'lucide-react';

const Freelance: React.FC = () => {
  const projects = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Maurya Digital Print website',
      client: 'Arvind Maurya',
      year: '2024',
      description: 'Developed a website for a printing company',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
      link: 'https://mauryadigitalprint.in'
    },
    // {
    //   icon: <Globe className="w-6 h-6" />,
    //   title: 'Portfolio Website',
    //   client: 'Client Name',
    //   year: '2023',
    //   description: 'Created a modern portfolio website with animations and responsive design',
    //   technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    //   link: '#'
    // },
    // {
    //   icon: <Database className="w-6 h-6" />,
    //   title: 'Data Analytics Dashboard',
    //   client: 'Client Name',
    //   year: '2023',
    //   description: 'Built a real-time data analytics dashboard with interactive visualizations',
    //   technologies: ['Python', 'Django', 'Chart.js', 'PostgreSQL', 'D3.js'],
    //   link: '#'
    // },
    // {
    //   icon: <Smartphone className="w-6 h-6" />,
    //   title: 'Mobile App Development',
    //   client: 'Client Name',
    //   year: '2023',
    //   description: 'Developed a cross-platform mobile application with React Native',
    //   technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    //   link: '#'
    // }
  ];

  return (
    <div className="relative h-full w-full p-8 overflow-y-auto">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:16px_16px] opacity-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">Freelance Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/10 text-white/80">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-white/60">{project.client}</p>
                    <span className="text-white/40">•</span>
                    <p className="text-white/40">{project.year}</p>
                  </div>
                  <p className="text-white/60 mt-4">{project.description}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-white/10 text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="mt-4 inline-flex items-center text-white/60 hover:text-white transition-colors"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Freelance; 