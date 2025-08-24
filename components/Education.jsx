'use client'

import { education, certifications } from '../utils/data'
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education & Certifications</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My educational background and professional certifications that demonstrate my commitment to continuous learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-4xl text-green-400 mr-4" />
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-6 rounded-lg border-l-4 border-green-400 hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                    <span className="text-sm text-gray-400 bg-gray-600 px-3 py-1 rounded-full">
                      {edu.date}
                    </span>
                  </div>
                  <p className="text-green-400 font-medium mb-2">{edu.school}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Section */}
          <div>
            <div className="flex items-center mb-8">
              <FaCertificate className="text-4xl text-green-400 mr-4" />
              <h3 className="text-3xl font-bold text-white">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-6 rounded-lg border-l-4 border-green-400 hover:transform hover:scale-105 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
                      {cert.name}
                    </h4>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </a>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  
                  {/* Certification Badge */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                      <div className="text-gray-400 text-center">
                        <div className="text-lg">🏆</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">
                      Click icon to verify
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-700 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Learning Journey
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">3+</div>
                <div className="text-gray-300">Years of Study</div>
              </div>
                             <div className="text-center">
                 <div className="text-3xl font-bold text-green-400 mb-2">4</div>
                 <div className="text-gray-300">Professional Certifications</div>
               </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300">Continuous Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
