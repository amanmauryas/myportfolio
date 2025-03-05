import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Pursuing BS in Data science',
      position: 'Student',
      period: 'Jan 2024 - Dec 2028',
      location: '',
      description: '',
      achievements: [
        'Foundation level completed',
      ],
      technologies: [''],
    }
  ];
  //   {
  //     company: 'Microsoft Research India',
  //     position: 'Research Intern',
  //     period: 'May 2023 - July 2023',
  //     location: 'Bangalore, India',
  //     description: 'Worked on developing machine learning models for natural language understanding in low-resource languages. Implemented transformer-based architectures and contributed to research publications.',
  //     achievements: [
  //       'Improved model accuracy by 18% through novel data augmentation techniques',
  //       'Developed a custom tokenization algorithm for Indian languages',
  //       'Co-authored a research paper submitted to ACL 2024',
  //     ],
  //     technologies: ['Python', 'PyTorch', 'Transformers', 'NLTK', 'HuggingFace'],
  //   },
  //   {
  //     company: 'IIT Madras Research Park',
  //     position: 'Software Development Intern',
  //     period: 'Dec 2022 - Feb 2023',
  //     location: 'Chennai, India',
  //     description: 'Contributed to the development of a smart campus initiative, building IoT-based solutions for energy management and space utilization.',
  //     achievements: [
  //       'Designed and implemented a real-time dashboard for energy consumption monitoring',
  //       'Reduced energy consumption by 12% through intelligent automation',
  //       'Integrated multiple IoT sensors with a centralized management system',
  //     ],
  //     technologies: ['React', 'Node.js', 'MongoDB', 'MQTT', 'Docker', 'AWS IoT'],
  //   },
  //   {
  //     company: 'Goldman Sachs',
  //     position: 'Summer Analyst',
  //     period: 'May 2022 - July 2022',
  //     location: 'Bangalore, India',
  //     description: 'Worked with the technology division to develop and optimize trading algorithms and data processing pipelines.',
  //     achievements: [
  //       'Optimized data processing pipeline, reducing latency by 35%',
  //       'Implemented secure API endpoints for internal trading systems',
  //       'Participated in code reviews and agile development processes',
  //     ],
  //     technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Kafka', 'RESTful APIs'],
  //   },
  // ];

  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Professional Journey
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Work Experience
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
          My internships and professional experiences in the technology industry.
        </p>
      </div>
  
      <div className="mt-12 space-y-12">
        {experiences.map((experience, index) => (
          <div key={index} className="relative">
            {index !== experiences.length - 1 && (
              <div
                className="absolute top-12 left-6 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"
                aria-hidden="true"
              ></div>
            )}
            <div className="relative flex items-start">
              <div className="h-12 w-12 flex items-center justify-center bg-indigo-600 rounded-full">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1 ml-6">
                <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {experience.position}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-base font-medium text-indigo-600 dark:text-indigo-400">
                    {experience.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {experience.location}
                  </p>
                  <p className="mt-4 text-base text-gray-500 dark:text-gray-300">
                    {experience.description}
                  </p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                      Key Achievements:
                    </h4>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-gray-500 dark:text-gray-300">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default Experience;