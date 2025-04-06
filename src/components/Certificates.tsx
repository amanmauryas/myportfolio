import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates: React.FC = () => {
  const certificates = [
    {
      title: 'Deep Learning Specialization',
      issuer: 'Coursera - DeepLearning.AI',
      date: 'Dec 2023',
      link: 'https://coursera.org/verify/specialization/XXXXXX'
    },
    {
      title: 'Full Stack Development',
      issuer: 'Meta',
      date: 'Nov 2023',
      link: 'https://coursera.org/verify/professional-cert/XXXXXX'
    },
    {
      title: 'Machine Learning',
      issuer: 'Stanford Online',
      date: 'Oct 2023',
      link: 'https://coursera.org/verify/XXXXXX'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Sep 2023',
      link: 'https://aws.amazon.com/verification/XXXXXX'
    }
  ];

  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-4xl w-full px-6">
        <div className="grid grid-cols-2 gap-4">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-white/5 rounded-lg">
                  <Award className="text-[#ff9c43]" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold truncate">{cert.title}</h3>
                    <ExternalLink 
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-white/60 flex-shrink-0"
                    />
                  </div>
                  <p className="text-white/60 text-xs mt-0.5 truncate">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates; 