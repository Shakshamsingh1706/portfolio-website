'use client'

import { useState } from 'react'
import { personalData } from '../utils/data'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-vertical"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-green-300 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-green-400 text-xl" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a 
                      href={`mailto:${personalData.email}`}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-green-400 text-xl" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <a 
                      href={`tel:${personalData.phone}`}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                    >
                      {personalData.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-green-400 text-xl" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-300">{personalData.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  <FaGithub className="text-3xl" />
                </a>
                <a
                  href={personalData.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
                <a
                  href={personalData.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  <FaTwitter className="text-3xl" />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-4">Availability</h4>
              <p className="text-gray-300 mb-2">
                <span className="font-medium">Status:</span> Open to Intern/Fresher roles
              </p>
              <p className="text-gray-300 mb-2">
                <span className="font-medium">Roles:</span> L1/L2 Service Desk / System Admin / DevOps
              </p>
              <p className="text-gray-300 text-sm">
                Prefer supporting US-based clients; comfortable with night shifts and ticket SLAs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
