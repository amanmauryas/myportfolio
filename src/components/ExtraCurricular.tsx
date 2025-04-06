import React from 'react';
import { Users, Trophy, Mic, Code } from 'lucide-react';

const ExtraCurricular: React.FC = () => {
  const activities = [
    {
      title: 'Founder',
      organization: 'Neuroscience Club',
      period: '2025 - Present',
      description: 'Started a club NeuroNexus under Corbett House IITM BS degree focusing on innovation and research in neuroscience',
      icon: <Code className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'Founder',
      organization: 'healmymind.in',
      period: '2025 - Present',
      description: 'Started a website to help people with mental health issues',
      icon: <Mic className="text-[#ff9c43]" size={20} />
    },
  ];

  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-4xl w-full px-6">
        <div className="grid grid-cols-2 gap-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-white/5 rounded-lg">
                  {activity.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold truncate">{activity.title}</h3>
                  <p className="text-white/60 text-xs mt-0.5 truncate">
                    {activity.organization} • {activity.period}
                  </p>
                  <p className="text-white/40 text-xs mt-1 line-clamp-2">
                    {activity.description}
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

export default ExtraCurricular; 