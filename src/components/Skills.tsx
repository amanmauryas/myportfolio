import React from 'react';
import { Code2, Database, Cloud, Smartphone, Palette, Server } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Next.js', level: 80 }
      ]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'Python', level: 90 },
        { name: 'Django', level: 75 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Database & ORM',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Mongoose', level: 80 },
        { name: 'Prisma', level: 70 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 80 },
        { name: 'Git', level: 90 },
        { name: 'CI/CD', level: 75 },
        { name: 'Linux', level: 85 },
        { name: 'Nginx', level: 70 }
      ]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 70 },
        { name: 'iOS Development', level: 65 },
        { name: 'Android Development', level: 65 },
        { name: 'Expo', level: 75 },
        { name: 'Mobile UI/UX', level: 80 }
      ]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Design & Tools',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Photoshop', level: 75 },
        { name: 'Illustrator', level: 70 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Responsive Design', level: 90 }
      ]
    }
  ];

  return (
    <div className="relative h-full w-full p-8 overflow-y-auto">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:16px_16px] opacity-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">Skills & Expertise (Dummmy)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-white/10 text-white/80">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white/60">{skill.name}</span>
                      <span className="text-white/40">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-white/60 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;