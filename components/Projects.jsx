'use client'

import { projects } from '../utils/data'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in DevOps, 
            containerization, and infrastructure automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-sm">Project Image</div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                  {project.name}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${tag.color}`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex space-x-3">
                  <a
                    href={project.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    <FaGithub className="text-lg" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Project Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Project Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">3</div>
                <div className="text-gray-300">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">70%</div>
                <div className="text-gray-300">Deployment Time Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300">Infrastructure as Code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
