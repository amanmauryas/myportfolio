import React from 'react';
import { Code2, Brain, Rocket, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      title: 'Full Stack Developer',
      description: 'Building modern web applications with React, Node.js, and cloud technologies',
      icon: <Code2 className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'AI Enthusiast',
      description: 'Exploring machine learning and deep learning with Python and TensorFlow',
      icon: <Brain className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'Problem Solver',
      description: 'Strong analytical skills with a focus on efficient and scalable solutions',
      icon: <Lightbulb className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'Quick Learner',
      description: 'Adaptable and eager to learn new technologies and methodologies',
      icon: <Rocket className="text-[#ff9c43]" size={20} />
    }
  ];

  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-4xl w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {/* About Text */}
          <div className="p-3 sm:p-4 bg-white/5 rounded-lg col-span-1 sm:col-span-2">
            <p className="text-sm sm:text-base text-white/60">
              I'm a Computer Science student passionate about creating innovative solutions 
              that make a difference. With a strong foundation in both frontend and backend 
              development, I enjoy tackling complex problems and turning ideas into reality.
              <br /><br />
              Currently exploring the intersections of web development, artificial intelligence, 
              and cloud computing. Always eager to learn and contribute to meaningful projects.
            </p>
          </div>

          {/* Highlights */}
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-3 sm:p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="p-1 sm:p-1.5 bg-white/5 rounded-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm mt-0.5 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
