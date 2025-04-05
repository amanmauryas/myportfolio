import React from 'react';
import { GraduationCap, Award, BookOpen, Trophy } from 'lucide-react';

const Academics: React.FC = () => {
  const education = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Bachelor of Science in Data Science and Applications',
      institution: 'Indian Institute of Technology Madras',
      duration: '2023 - 2027',
      details: [
        'Major in Data Science and Applications',
        'Focus on AI/ML, Data Analytics, and Software Development'
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Minor in CSE and GenAI',
      institution: 'IIT Mandi',
      duration: '2024 - 2025',
      details: [
        'Minor in Computer Science and Engineering',
        'Focus on GenAI'
      ]
    }
  ];

  const certifications = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'CS50: Introduction to Computer Science',
      issuer: 'Harvard University',
      date: '2023',
      details: 'Comprehensive introduction to computer science and programming'
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Full Stack Development',
      issuer: 'Your Certification Provider',
      date: '2023',
      details: 'Complete web development course covering frontend and backend technologies'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'AI/ML Specialization',
      issuer: 'Your Certification Provider',
      date: '2023',
      details: 'Advanced course in Artificial Intelligence and Machine Learning'
    }
  ];

  return (
    <div className="relative h-full w-full p-8 overflow-y-auto">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:16px_16px] opacity-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">Academics & Certifications</h2>

        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/10 text-white/80">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white">{edu.title}</h4>
                    <p className="text-white/60 mt-1">{edu.institution}</p>
                    <p className="text-white/40 text-sm mt-1">{edu.duration}</p>
                    <ul className="mt-4 space-y-2">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="text-white/60 flex items-start">
                          <span className="mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/10 text-white/80">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white">{cert.title}</h4>
                    <p className="text-white/60 mt-1">{cert.issuer}</p>
                    <p className="text-white/40 text-sm mt-1">{cert.date}</p>
                    <p className="text-white/60 mt-4">{cert.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics; 