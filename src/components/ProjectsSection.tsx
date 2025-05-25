import React, { useState } from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  additionalImages?: string[];
}

interface ProjectsSectionProps {
  isDarkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isDarkMode }) => {
  const projectCategories = ['All', 'Web', 'Mobile', 'Design', 'Other'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Masasya',
      description: 'A comprehensive e-commerce platform specializing in modern kitchen solutions. Features include a responsive design, product catalog with kitchen designs, and seamless user experience.',
      imageUrl: 'https://i.ibb.co/Qr0ZQXL/masasya.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Kitchen Design'],
      category: 'Web',
      liveUrl: 'https://masasya.com',
      githubUrl: 'https://github.com/Mohamed-Dibo/masasya-v2'
    },
    {
      id: 2,
      title: 'A2M Medical',
      description: 'A modern medical company website showcasing services and products with an intuitive user interface.',
      imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React.js', 'Tailwind CSS', 'Node.js'],
      category: 'Web',
      liveUrl: 'https://www.a2m-medical.com',
      githubUrl: 'https://github.com/Mohamed-Dibo/A2M-Medical'
    },
    {
      id: 3,
      title: 'Burger Builder',
      description: 'An interactive web application for customizing and ordering burgers. Features a dynamic burger builder interface with real-time visualization of ingredients.',
      imageUrl: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React.js', 'CSS3', 'JavaScript', 'Responsive Design'],
      category: 'Web',
      liveUrl: 'https://mohamed-dibo.github.io/Burger/',
      githubUrl: 'https://github.com/Mohamed-Dibo/Burger'
    },
    {
      id: 4,
      title: 'Social Media E-commerce Platform',
      description: 'ITI Graduation project combining social networking features with e-commerce functionality.',
      imageUrl: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
      category: 'Web',
      liveUrl: 'https://iti-graduation-project-minute.netlify.app',
      githubUrl: 'https://github.com/Mohamed-Dibo/Graduation-Project'
    },
    {
      id: 5,
      title: 'Image Gallery API',
      description: 'A robust REST API for managing and serving images with features like authentication, image upload, and categorization.',
      imageUrl: 'https://images.pexels.com/photos/1266159/pexels-photo-1266159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Multer'],
      category: 'Web',
      githubUrl: 'https://github.com/Mohamed-Dibo/image-gallery-api'
    },
    {
      id: 6,
      title: 'Zid Landing Page',
      description: 'A modern and responsive landing page for Zid, showcasing their e-commerce platform and services.',
      imageUrl: 'https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      category: 'Web',
      liveUrl: 'https://mohamed-dibo.github.io/Zid-Landing-page/',
      githubUrl: 'https://github.com/Mohamed-Dibo/Zid-Landing-page'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section 
      id="projects" 
      className={`py-20 ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
            <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mr-2`}>04.</span> 
            Projects
          </h2>
          
          <p className={`mb-12 max-w-3xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Explore a collection of my professional projects. Each one represents challenges I've overcome and skills I've applied to deliver effective solutions.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? isDarkMode 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-blue-500 text-white'
                    : isDarkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className={`rounded-lg overflow-hidden group transition-all duration-300 hover:transform hover:-translate-y-2 ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:shadow-xl hover:shadow-blue-500/10' 
                    : 'bg-white hover:shadow-xl'
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4 ${
                    isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
                  }`}>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full ${
                          isDarkMode 
                            ? 'bg-blue-500 text-white hover:bg-blue-600' 
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full ${
                          isDarkMode 
                            ? 'bg-gray-700 text-white hover:bg-gray-600' 
                            : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                        }`}
                      >
                        <GitHub size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className={`mb-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className={`px-2 py-1 rounded-full text-xs ${
                          isDarkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
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

export default ProjectsSection;