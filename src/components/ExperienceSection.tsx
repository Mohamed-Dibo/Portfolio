import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

interface ExperienceSectionProps {
  isDarkMode: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isDarkMode }) => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Oracle Developer",
      company: "Ultimate Solutions",
      duration: "2022 - Present",
      location: "Jeddah, Saudi Arabia",
      description: [
        "Developing and maintaining complex database applications using Oracle PL/SQL",
        "Designing, generating, and optimizing business-critical reports",
        "Collaborating with cross-functional teams to understand requirements and deliver effective database solutions",
        "Troubleshooting and resolving database-related issues to ensure optimal performance and data integrity",
        "Contributing to database schema design and documentation for new features and enhancements"
      ]
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Freelance Projects",
      duration: "2020 - Present",
      location: "Remote",
      description: [
        "Built and deployed responsive web applications using React.js, achieving a 95% client satisfaction rate",
        "Developed RESTful APIs using Node.js and Express.js for seamless client-server communication",
        "Successfully delivered a medical company website (www.a2m-medical.com) using React.js and modern web technologies",
        "Implemented responsive designs ensuring compatibility across all major browsers and devices"
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      className={`py-20 ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center">
            <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mr-2`}>02.</span> 
            Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div 
              className={`absolute top-0 bottom-0 left-6 md:left-1/2 w-px transform md:-translate-x-px ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
              }`} 
            />
            
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} md:w-1/2 ${
                  index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                }`}
              >
                {/* Timeline dot */}
                <div 
                  className={`absolute left-6 md:left-1/2 top-0 w-4 h-4 rounded-full border-2 transform -translate-y-1/2 md:-translate-x-1/2 ${
                    isDarkMode 
                      ? 'bg-gray-900 border-blue-500' 
                      : 'bg-white border-blue-500'
                  }`} 
                />

                <div 
                  className={`ml-12 md:ml-0 p-6 rounded-lg ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'
                  } transition-transform hover:scale-105 duration-200`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                      isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {exp.duration}
                    </div>
                  </div>
                  
                  <div className={`flex items-center mb-4 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <Briefcase size={16} className="mr-2" />
                    <span>{exp.company} • {exp.location}</span>
                  </div>
                  
                  <ul className={`space-y-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`mt-1.5 mr-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                        }`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;