import React from 'react';
import { ArrowUp, Github as GitHub, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      className={`py-12 ${
        isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <a href="#home" className="text-xl font-bold tracking-tight">
                <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Portfolio</span>
                <span className="text-blue-500">.</span>
              </a>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Building digital experiences that matter.
              </p>
            </div>
            
            <div className="flex gap-4">
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
          
          <div className="border-t pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} Mohamed Diab. All rights reserved.
            </div>
            
            <div className="mt-4 md:mt-0">
              <button 
                onClick={scrollToTop}
                className={`p-2 rounded-full ${
                  isDarkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
                } transition-colors duration-200`}
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;