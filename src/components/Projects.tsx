import React from 'react';
import { Github, ExternalLink, Code, Laptop, Bot, Database } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio built with React, TypeScript, and Tailwind CSS',
      tech: ['React', 'TypeScript', 'Tailwind'],
      github: 'https://github.com/username/portfolio',
      demo: 'https://portfolio.dev',
      icon: <Laptop className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'AI Chat Assistant',
      description: 'Real-time chat bot using OpenAI GPT-3.5 with streaming responses',
      tech: ['Python', 'FastAPI', 'OpenAI'],
      github: 'https://github.com/username/ai-chat',
      demo: 'https://ai-chat.dev',
      icon: <Bot className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing and analyzing business metrics',
      tech: ['React', 'D3.js', 'Node.js'],
      github: 'https://github.com/username/dashboard',
      demo: 'https://dashboard.dev',
      icon: <Database className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'Code Editor Extension',
      description: 'VS Code extension for enhanced coding productivity',
      tech: ['TypeScript', 'VS Code API'],
      github: 'https://github.com/username/code-ext',
      demo: 'https://marketplace.visualstudio.com',
      icon: <Code className="text-[#ff9c43]" size={20} />
    }
  ];

  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-4xl w-full px-6">
        <div className="grid grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-white/5 rounded-lg">
                  {project.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold truncate">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 flex-shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        <Github size={14} />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                  <p className="text-white/60 text-xs mt-0.5 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-1.5 py-0.5 bg-white/5 rounded text-white/40 text-[10px]"
                      >
                        {tech}
                      </span>
                    ))}
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