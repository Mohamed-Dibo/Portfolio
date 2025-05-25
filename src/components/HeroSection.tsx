import React from 'react';
import { ArrowDown, Github as GitHub, Linkedin, Mail, FileText } from 'lucide-react';

interface HeroSectionProps {
  isDarkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDarkMode }) => {
  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center relative overflow-x-hidden ${
        isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          backgroundImage: isDarkMode 
            ? 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(13, 148, 136, 0.1) 0%, transparent 50%)' 
            : 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(13, 148, 136, 0.05) 0%, transparent 50%)'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium mb-6 ${
              isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
            }`}>
              Full Stack Developer | React & Node.js | Oracle APEX & PL/SQL | Building Scalable Web & ERP Systems
            </span>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-blue-500">Mohamed Diab</span>
              <div className="h-2"></div>
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                Building digital experiences that matter
              </span>
            </h1>
            
            <p className={`text-base md:text-xl mb-8 max-w-2xl ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              A highly motivated Full Stack Developer with expertise in Oracle database development. 
              Passionate about creating responsive web applications and robust database solutions 
              that deliver real business value. Currently seeking new opportunities in Full Stack, 
              Frontend, Backend, and Oracle development roles.
            </p>

            <div className="space-y-3 mb-8">
              <div className={`inline-block py-2 px-4 rounded-lg text-sm ${
                isDarkMode ? 'bg-green-900/20 text-green-400' : 'bg-green-100 text-green-700'
              }`}>
                🔍 Open to:
              </div>
              <div className="flex flex-wrap gap-2">
                <span className={`py-1 px-3 rounded-full text-sm ${
                  isDarkMode ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  Frontend Development (React)
                </span>
                <span className={`py-1 px-3 rounded-full text-sm ${
                  isDarkMode ? 'bg-teal-900/20 text-teal-400' : 'bg-teal-100 text-teal-600'
                }`}>
                  Backend Development (Node.js)
                </span>
                <span className={`py-1 px-3 rounded-full text-sm ${
                  isDarkMode ? 'bg-amber-900/20 text-amber-400' : 'bg-amber-100 text-amber-600'
                }`}>
                  Oracle Development
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8 md:mb-12">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a 
                href="/Mohamed-Diab-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto px-6 py-3 rounded-md font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${
                  isDarkMode 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <FileText size={18} />
                View Resume
              </a>
            </div>
            
            <div className="flex gap-5 justify-center sm:justify-start">
              <a 
                href="https://github.com/Mohamed-Dibo" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  isDarkMode 
                    ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                    : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                } transition-colors duration-200`}
              >
                <GitHub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/mohamed-ebrahem" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  isDarkMode 
                    ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                    : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                } transition-colors duration-200`}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:MohamedEbrahimDiab@gmail.com" 
                className={`p-2 rounded-full ${
                  isDarkMode 
                    ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                    : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                } transition-colors duration-200`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full animate-bounce ${
          isDarkMode 
            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
        } transition-colors duration-200`}
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;