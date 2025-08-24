'use client'

import { personalData } from '../utils/data'
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-green-400">
                Hi, I'm
              </h1>
              <h2 className="text-5xl lg:text-7xl font-bold text-green-400">
                {personalData.name}
              </h2>
            </div>
            
            <div className="text-xl lg:text-2xl text-white font-medium">
              {personalData.designation}
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              {personalData.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={personalData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-400 text-black font-bold rounded-lg hover:bg-green-300 transition-colors duration-300"
              >
                <FaDownload className="mr-2" />
                View Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-400 transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href={personalData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href={personalData.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-4 border-green-400 overflow-hidden bg-gray-800 shadow-2xl">
                <img
                  src={personalData.profile}
                  alt={personalData.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center text-gray-400 text-lg">
                  Profile Image
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-500 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
