'use client'

import { personalData } from '../utils/data'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get to know me better and understand my journey in the world of DevOps and cloud technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Who I Am
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {personalData.description}
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm passionate about building scalable, automated systems and exploring the latest in DevOps and cloud technologies. 
              My journey started with a curiosity about how systems work and has evolved into a deep understanding of infrastructure automation.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently, I'm exploring advanced GitOps practices with ArgoCD, Argo Rollouts & Workflows, 
              focusing on progressive delivery and automated deployment strategies.
            </p>
          </div>
          
          {/* Right Content - Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">20+</div>
              <div className="text-gray-300">Mini Labs</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">8+</div>
              <div className="text-gray-300">Tech Skills</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">3</div>
              <div className="text-gray-300">Certifications</div>
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-4">What I Do</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Build and maintain CI/CD pipelines</li>
              <li>• Containerize applications with Docker</li>
              <li>• Orchestrate with Kubernetes</li>
              <li>• Automate infrastructure with Terraform</li>
              <li>• Monitor systems with Prometheus & Grafana</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-4">My Approach</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Infrastructure as Code (IaC)</li>
              <li>• GitOps and automated deployments</li>
              <li>• Continuous monitoring and alerting</li>
              <li>• Security-first mindset</li>
              <li>• Scalable and reliable solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
