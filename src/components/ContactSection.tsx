import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

interface ContactSectionProps {
  isDarkMode: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isDarkMode }) => {
  return (
    <section 
      id="contact" 
      className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
            <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mr-2`}>05.</span> 
            Get In Touch
          </h2>
          
          <p className={`mb-12 max-w-2xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a question or want to work together? Feel free to reach out using the form below or through my contact details.
          </p>
          
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="space-y-6">
                <div className={`p-6 rounded-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <div className="flex">
                    <div className={`p-3 rounded-md mr-4 ${
                      isDarkMode ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                    }`}>
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <a href="mailto:MohamedEbrahimDiab@gmail.com" className="hover:underline">
                          MohamedEbrahimDiab@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className={`p-6 rounded-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <div className="flex">
                    <div className={`p-3 rounded-md mr-4 ${
                      isDarkMode ? 'bg-teal-900/20 text-teal-400' : 'bg-teal-100 text-teal-600'
                    }`}>
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <a href="tel:+966564654874" className="hover:underline">
                          (+966) 56-465-4874
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className={`p-6 rounded-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <div className="flex">
                    <div className={`p-3 rounded-md mr-4 ${
                      isDarkMode ? 'bg-amber-900/20 text-amber-400' : 'bg-amber-100 text-amber-600'
                    }`}>
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Location</h3>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Jeddah, Saudi Arabia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="name" 
                      className={`block text-sm font-medium mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className={`w-full px-4 py-2 rounded-md border ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                      } focus:outline-none focus:ring-1 focus:ring-blue-500`}
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className={`block text-sm font-medium mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className={`w-full px-4 py-2 rounded-md border ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                      } focus:outline-none focus:ring-1 focus:ring-blue-500`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    htmlFor="subject" 
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className={`w-full px-4 py-2 rounded-md border ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className={`w-full px-4 py-2 rounded-md border ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    placeholder="Your message here..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;