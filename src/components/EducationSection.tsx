import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
}

interface EducationSectionProps {
  isDarkMode: boolean;
}

const EducationSection: React.FC<EducationSectionProps> = ({ isDarkMode }) => {
  const educations: Education[] = [
    {
      id: 1,
      degree: "Front End Development Track (MCIT)",
      institution: "Information Technology Institute (ITI)",
      duration: "2021",
      location: "Alexandria, Egypt",
      description: "Completed intensive training in front-end development. Created a Social Media E-commerce Platform as graduation project, which can be viewed at iti-graduation-project-minute.netlify.app"
    },
    {
      id: 2,
      degree: "Bachelor of Computers and Information",
      institution: "University of Kafr El Sheikh",
      duration: "2016 - 2019",
      location: "Kafr El Sheikh, Egypt",
      description: "Graduated with Good grade from the Faculty of Computers and Information. Developed a Social Media Website as graduation project, receiving a Very Good grade."
    }
  ];

  return (
    <section 
      id="education" 
      className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center">
            <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mr-2`}>03.</span> 
            Education
          </h2>
          
          <div className="space-y-8">
            {educations.map((edu) => (
              <div 
                key={edu.id}
                className={`p-6 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-750' 
                    : 'bg-gray-100 hover:bg-gray-50'
                } transition-all duration-300 hover:shadow-md`}
              >
                <div className="flex items-start">
                  <div className={`p-3 rounded-md mr-4 hidden sm:flex ${
                    isDarkMode ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                  }`}>
                    <GraduationCap size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <div className={`flex items-center mt-1 sm:mt-0 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <Calendar size={16} className="mr-1" />
                        <span className="text-sm">{edu.duration}</span>
                      </div>
                    </div>
                    
                    <p className={`text-base font-medium mb-3 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-800'
                    }`}>
                      {edu.institution} • {edu.location}
                    </p>
                    
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;