import React from 'react';
import { Code2, Database, Cpu, Layout, Cloud, GitBranch } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
      icon: <Layout className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'FastAPI', 'Express', 'MongoDB'],
      icon: <Code2 className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'Database & APIs',
      skills: ['PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs', 'Redis'],
      icon: <Database className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLTK'],
      icon: <Cpu className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'],
      icon: <Cloud className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'Tools & Version Control',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Jira'],
      icon: <GitBranch className="text-[#ff9c43]" size={20} />
    }
  ];

  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-4xl w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-3 sm:p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="p-1 sm:p-1.5 bg-white/5 rounded-lg flex-shrink-0">
                  {category.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold truncate">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-1.5 sm:mt-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-1 sm:px-1.5 py-0.5 bg-white/5 rounded text-white/40 text-[9px] sm:text-[10px]"
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

export default Skills;