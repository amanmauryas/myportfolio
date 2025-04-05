import React from 'react';
import { Book, Award, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Book className="w-6 h-6" />,
      title: 'Education',
      description: 'BS in Data Science and Applications from IIT Madras',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certifications',
      description: 'CS50 from Harvard, Full Stack Development, AI/ML Specializations',
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Experience',
      description: 'Worked on various projects in AI, Web Development, and Data Science',
    },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center p-8">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:16px_16px] opacity-20"></div>

      <div className="relative z-10 max-w-4xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm a passionate developer focused on creating innovative solutions in the fields of AI and web development. 
            With a strong foundation in data science and programming, I strive to build applications that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-white/10 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-white/60 group-hover:text-white/80 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
          <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
          <div className="space-y-4 text-white/60">
            <p>
              Currently pursuing my Bachelor's in Data Science and Applications at IIT Madras, 
              I've developed a strong foundation in both theoretical concepts and practical applications.
            </p>
            <p>
              My interests span across various domains of technology, with a particular focus on:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Artificial Intelligence and Machine Learning</li>
              <li>Full Stack Web Development</li>
              <li>Data Science and Analytics</li>
              <li>Cloud Computing and DevOps</li>
            </ul>
            <p>
              I'm constantly learning and exploring new technologies to stay at the forefront of innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
