import React from 'react';
import { Code2, Globe, Database, Smartphone, Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'AI-Powered Portfolio Generator',
      description: 'A web application that uses AI to generate personalized portfolio websites based on user input and preferences.',
      technologies: ['React', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Node.js'],
      github: 'https://github.com/yourusername/portfolio-generator',
      demo: 'https://portfolio-generator-demo.com',
      image: '/images/portfolio-generator.png',
      features: [
        'AI-powered content generation',
        'Customizable templates',
        'Real-time preview',
        'Responsive design'
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'E-commerce Analytics Dashboard',
      description: 'A comprehensive analytics dashboard for e-commerce businesses with real-time data visualization and insights.',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      github: 'https://github.com/yourusername/ecommerce-analytics',
      demo: 'https://ecommerce-analytics-demo.com',
      image: '/images/analytics-dashboard.png',
      features: [
        'Real-time data visualization',
        'Custom report generation',
        'Sales forecasting',
        'Inventory management'
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data Science Project Management',
      description: 'A platform for managing and collaborating on data science projects with version control and experiment tracking.',
      technologies: ['Python', 'Django', 'React', 'Docker', 'MLflow'],
      github: 'https://github.com/yourusername/ds-project-manager',
      demo: 'https://ds-project-manager-demo.com',
      image: '/images/ds-project-manager.png',
      features: [
        'Experiment tracking',
        'Model versioning',
        'Team collaboration',
        'Automated documentation'
      ]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Health & Fitness Tracker',
      description: 'A mobile application for tracking health metrics, workouts, and nutrition with personalized recommendations.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'HealthKit'],
      github: 'https://github.com/yourusername/health-tracker',
      demo: 'https://health-tracker-demo.com',
      image: '/images/health-tracker.png',
      features: [
        'Activity tracking',
        'Nutrition logging',
        'Progress visualization',
        'AI-powered recommendations'
      ]
    }
  ];

  return (
    <div className="relative h-full w-full p-4 sm:p-8 overflow-y-auto">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:16px_16px] opacity-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Featured Projects</h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Project Image */}
                <div className="w-full md:w-1/3 h-48 md:h-auto bg-white/5">
                  <div className="w-full h-full flex items-center justify-center">
                    {project.icon}
                  </div>
                </div>

                {/* Project Content */}
                <div className="w-full md:w-2/3 p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-white/10 text-white/80">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="text-white/60 mt-2 text-sm sm:text-base">{project.description}</p>
                      
                      {/* Technologies */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-white/10 text-white/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="mt-4">
                        <h4 className="text-white/80 font-medium mb-2 text-sm sm:text-base">Key Features</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-white/60 text-sm sm:text-base">
                              <span className="w-1.5 h-1.5 rounded-full bg-white/60 mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Links */}
                      <div className="mt-6 flex flex-wrap gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-white/60 hover:text-white transition-colors text-sm sm:text-base"
                        >
                          <Github className="w-5 h-5 mr-2" />
                          GitHub
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-white/60 hover:text-white transition-colors text-sm sm:text-base"
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;