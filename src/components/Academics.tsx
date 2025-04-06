import React from 'react';
import { GraduationCap, Building2 } from 'lucide-react';

const Academics: React.FC = () => {
  const education = [
    {
      degree: 'B.S in Data Science and Applications',
      institution: 'IIT Madras',
      period: '2024 - 2028',
      details: [
        'Member of Mental health club',
        'Research work in Machine Learning'
      ],
      icon: <GraduationCap className="text-[#ff9c43]" size={20} />
    },
    {
      degree: 'Minor in CSE and GenAI',
      institution: 'IIT Mandi',
      period: '2024 - 2025',
      details: [
        'Coursework: Python, DSA, DBMS, OOPs, AI, System design, IoT etc',
      ],
      icon: <Building2 className="text-[#ff9c43]" size={20} />
    }
  ];

  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-4xl w-full px-6">
        <div className="grid grid-cols-2 gap-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-white/5 rounded-lg">
                  {edu.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold truncate">
                    {edu.degree}
                  </h3>
                  <p className="text-white/60 text-xs mt-0.5 truncate">
                    {edu.institution} • {edu.period}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="text-white/40 text-xs">
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
    </div>
  );
};

export default Academics; 