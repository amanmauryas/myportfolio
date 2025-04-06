import React from 'react';
import { Code2, Layout, Server, Database, Cpu, Rocket } from 'lucide-react';

const Freelance: React.FC = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Full-stack web applications with modern technologies and best practices',
      skills: ['React', 'Next.js', 'Node.js', 'TypeScript'],
      icon: <Layout className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'Backend Development',
      description: 'Scalable and secure backend services with robust architecture',
      skills: ['Express', 'FastAPI', 'MongoDB', 'PostgreSQL'],
      icon: <Server className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation',
      skills: ['REST', 'GraphQL', 'Swagger', 'Authentication'],
      icon: <Database className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'AI Integration',
      description: 'Machine learning model integration and AI-powered features',
      skills: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'],
      icon: <Cpu className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored software solutions for specific business needs',
      skills: ['Architecture', 'Optimization', 'Security', 'Testing'],
      icon: <Code2 className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'Project Consultation',
      description: 'Technical guidance and project planning assistance',
      skills: ['Planning', 'Architecture', 'Best Practices', 'Code Review'],
      icon: <Rocket className="text-[#ff9c43]" size={20} />
    }
  ];

  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-4xl w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-3 sm:p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="p-1 sm:p-1.5 bg-white/5 rounded-lg flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm mt-0.5 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {service.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-1.5 py-0.5 bg-white/5 rounded text-white/40 text-[9px] sm:text-[10px]"
                      >
                        {skill}
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

export default Freelance; 