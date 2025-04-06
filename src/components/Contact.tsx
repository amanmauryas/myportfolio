import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      title: 'Email',
      value: 'info.amanmauryas@gmail.com',
      link: 'mailto:info.amanmauryas@gmail.com',
      icon: <Mail className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'Location',
      value: 'India',
      icon: <MapPin className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'Phone',
      value: '+91 7985637880',
      icon: <Phone className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'GitHub',
      value: 'github.com/amanmauryas',
      link: 'https://github.com/amanmauryas',
      icon: <Github className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/amanmauryas',
      link: 'https://linkedin.com/in/amanmauryas',
      icon: <Linkedin className="text-[#ff9c43]" size={20} />
    },
    {
      title: 'Twitter',
      value: 'twitter.com/amanmauryas',
      link: 'https://twitter.com/amanmauryas',
      icon: <Twitter className="text-[#ff9c43]" size={20} />
    }
  ];

  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-4xl w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="p-3 sm:p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="p-1 sm:p-1.5 bg-white/5 rounded-lg flex-shrink-0">
                  {contact.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold">
                    {contact.title}
                  </h3>
                  {contact.link ? (
                    <a
                      href={contact.link}
                      target={contact.link.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white text-xs sm:text-sm mt-0.5 block truncate transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-white/60 text-xs sm:text-sm mt-0.5 truncate">
                      {contact.value}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;