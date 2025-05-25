import React from 'react';
import { Code, Layout, Database, Server, LineChart, Users } from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

interface SkillsSectionProps {
  isDarkMode: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isDarkMode }) => {
  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Layout size={24} />,
      skills: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Context API', 'GraphQL']
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Server size={24} />,
      skills: ['Node.js', 'Express.js', 'Socket.IO', 'RESTful APIs', 'MongoDB', 'Firebase']
    },
    {
      id: 'database',
      title: 'Database Technologies',
      icon: <Database size={24} />,
      skills: ['Oracle PL/SQL', 'Oracle APEX', 'Database Design', 'Performance Tuning', 'SQL', 'Reporting']
    },
    {
      id: 'devops',
      title: 'Development Tools',
      icon: <Code size={24} />,
      skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Postman', 'npm']
    },
    {
      id: 'analytics',
      title: 'Web Technologies',
      icon: <LineChart size={24} />,
      skills: ['Responsive Design', 'Web APIs', 'Browser DevTools', 'Cross-browser Compatibility', 'Performance Optimization']
    },
    {
      id: 'softskills',
      title: 'Soft Skills',
      icon: <Users size={24} />,
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Agile Methodologies']
    }
  ];

  return (
    <section 
      id="skills" 
      className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center">
            <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mr-2`}>03.</span> 
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div 
                key={category.id}
                className={`p-6 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:shadow-lg hover:shadow-blue-500/5' 
                    : 'bg-gray-100 hover:shadow-xl hover:shadow-gray-200/50'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-md mr-4 ${
                    isDarkMode ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDarkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;