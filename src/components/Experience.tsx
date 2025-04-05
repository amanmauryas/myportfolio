import React from 'react';
import { Trophy, Users, Lightbulb, Heart } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Hackathons & Competitions',
      items: [
        {
          title: 'Hackathon Winner',
          description: 'Won first place in a national AI/ML hackathon',
          year: '2023'
        },
        {
          title: 'Coding Competition',
          description: 'Top 10 in an international coding competition',
          year: '2023'
        }
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community & Leadership',
      items: [
        {
          title: 'Tech Club President',
          description: 'Led a team of 50+ members in organizing tech events',
          year: '2023'
        },
        {
          title: 'Open Source Contributor',
          description: 'Active contributor to various open-source projects',
          year: '2023'
        }
      ]
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation & Research',
      items: [
        {
          title: 'Research Project',
          description: 'Published research paper on AI applications',
          year: '2023'
        },
        {
          title: 'Innovation Award',
          description: 'Received recognition for innovative tech solution',
          year: '2023'
        }
      ]
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Volunteering & Social Impact',
      items: [
        {
          title: 'Tech Mentor',
          description: 'Mentored students in programming and tech skills',
          year: '2023'
        },
        {
          title: 'Community Service',
          description: 'Volunteered in tech education initiatives',
          year: '2023'
        }
      ]
    }
  ];

  return (
    <div className="relative h-full w-full p-8 overflow-y-auto">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:16px_16px] opacity-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">Fun Times & Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((category, index) => (
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

              <div className="space-y-6">
                {category.items.map((item, i) => (
                  <div key={i} className="relative pl-6">
                    <div className="absolute left-0 top-0 w-1 h-full bg-white/10 rounded-full">
                      <div className="absolute top-0 left-0 w-1 h-1/2 bg-white/60 rounded-full"></div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-medium text-white">{item.title}</h4>
                      <p className="text-white/60">{item.description}</p>
                      <p className="text-white/40 text-sm">{item.year}</p>
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

export default Experience;