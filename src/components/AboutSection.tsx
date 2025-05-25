import React from 'react';
import { Award, BookOpen, Clock } from 'lucide-react';

interface AboutSectionProps {
  isDarkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isDarkMode }) => {
  return (
    <section 
      id="about" 
      className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
            <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mr-2`}>01.</span> 
            About Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className={`p-6 rounded-lg ${
              isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-gray-100 hover:bg-gray-200'
            } transition-colors duration-200 text-center`}>
              <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full ${
                isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
              }`}>
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                3+ years of development experience
              </p>
            </div>
            
            <div className={`p-6 rounded-lg ${
              isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-gray-100 hover:bg-gray-200'
            } transition-colors duration-200 text-center`}>
              <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full ${
                isDarkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-600'
              }`}>
                <Award size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expertise</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Full Stack & Oracle Development
              </p>
            </div>
            
            <div className={`p-6 rounded-lg ${
              isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-gray-100 hover:bg-gray-200'
            } transition-colors duration-200 text-center`}>
              <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full ${
                isDarkMode ? 'bg-amber-900/30 text-amber-400' : 'bg-amber-100 text-amber-600'
              }`}>
                <BookOpen size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Bachelor of Computers and Information
              </p>
            </div>
          </div>
          
          <div className={`prose max-w-none ${
            isDarkMode ? 'prose-invert prose-gray' : 'prose-gray'
          }`}>
            <p className="mb-4">
              I am a Full Stack Developer with a strong foundation in web technologies and specialized expertise 
              in Oracle database development. My journey in software development has been driven by a passion 
              for creating efficient, scalable solutions that solve real-world problems.
            </p>
            
            <p className="mb-4">
              Currently working as an Oracle Developer at Ultimate Solutions in Jeddah, Saudi Arabia, 
              I develop and maintain complex database applications while also pursuing freelance web 
              development projects. This dual focus allows me to maintain a broad skill set across 
              both front-end and back-end technologies.
            </p>
            
            <p className="mb-4">
              I take pride in writing clean, maintainable code and building user-friendly applications 
              that deliver real business value. My approach combines technical expertise with strong 
              problem-solving skills and a commitment to continuous learning and improvement.
            </p>

            <div className={`mt-8 p-6 rounded-lg ${
              isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50'
            }`}>
              <h3 className={`text-lg font-semibold mb-2 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                🎓 Professional Development
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Successfully completed the Information Technology Institute (ITI) 3-month intensive training program 
                in Frontend Development. This comprehensive program enhanced my skills in modern web technologies 
                and best practices, preparing me for real-world development challenges. I'm grateful to ITI for 
                this valuable opportunity that has significantly contributed to my professional growth.
                <a 
                  href="https://www.linkedin.com/feed/update/urn:li:activity:6886684215832809472/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block mt-2 text-sm ${
                    isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  View Certificate →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;