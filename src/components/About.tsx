import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
            About Me
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Academic Background
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Data Science student at IIT Madras with a passion for Data Science AI and Neuroscience.
          </p>
        </div>

        {/* Updated Grid Layout */}
        <div className="mt-10 ml-10 flex w-full  md:grid-cols-[2fr_1fr] gap-x-5 px-2">

          {/* Left Column: Current Program & Research Interests */}
          <div className="space-y-10">
            {/* Current Program */}
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 dark:bg-indigo-600 text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Current Program</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  B.S Data science<br />
                  Indian Institute of Technology Madras<br />
                  Expected Graduation: May 2028<br />
                </p>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Minor in CSE and Gen AI<br />
                  Indian Institute of Technology Mandi<br />
                  Expected Graduation: July 2025<br />
                </p>
              </div>
            </div>

            {/* Research Interests */}
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 dark:bg-indigo-600 text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Research Interests</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-base text-gray-500 dark:text-gray-400">
                  <li>Neuroscience</li>
                  <li>Computer Vision</li>
                  <li>Natural Language Processing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Relevant Coursework */}
          <div className="relative">
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 dark:bg-indigo-600 text-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div className="ml-16">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Relevant Coursework</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-base text-gray-500 dark:text-gray-400">
                <li>Python | Java | Javascript</li>
                <li>Data Structures and Algorithms</li>
                <li>Frontend Development</li>
                <li>AI and ML</li>
                <li>Database Management Systems</li>
                <li>Computer Networks</li>
                <li>Operating Systems</li>
                <li>Cloud Computing</li>
                <li>Generative AI</li>
                <li>System Design Principles</li>
                <li>Cybersecurity Fundamentals</li>
              </ul>
            </div>
          </div>
          {/*  */}
          {/* Right Column: Relevant Coursework */}
          <div className="relative">
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 dark:bg-indigo-600 text-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3h6a2 2 0 012 2v2h3a1 1 0 011 1v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3V5a2 2 0 012-2zM9 5v2h6V5H9z" />
              </svg>

            </div>
            <div className="ml-16">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Miscellaneous Skills</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-base text-gray-500 dark:text-gray-400">
                <li>Data Ethics & Privacy</li>
                <li>Ethical hacking</li>
                <li>Graphic designing</li>
                <li>Numpy</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
                <li>Canva</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
