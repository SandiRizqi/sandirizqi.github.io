'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Link2, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUpClass = "transform transition-all duration-500 ease-out hover:scale-105";
  const navbarClass = `fixed w-full z-50 transition-all duration-300 ${
    scrollY > 50 ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
  }`;


  const projects = [
    {
      title: "Web-GIS",
      image: "/images/webgis_platform.png",
      description: "Built a full-stack Web-GIS  platform using Next.js and Microservices architecture",
      tags: ["Next.js", "Django", "Postgres", "Geoserver", "AWS"],
    },
    {
      title: "Task Management App",
      image: "/images/taskmanager.png",
      description: "Developed a  task management application with React and Firebase to manage and monitor company's projects",
      tags: ["React", "Firebase", "Python"],
      link: "https://www.geo-circle.com/"
    },
    {
      title: "Machine Learning App",
      image: "/images/ml.png",
      description: "Designed and developed a  modern  Machine Learning technologies for Geospatial Data",
      tags: ["Next.js", "Python", "Pytorch", "Scikit-Learn", "Kubernetes", "Docker"],
  
    },
    {
      title: "Monitoring & Alert System",
      image: "/images/monitoring.png",
      description: "Designed and developed a modern technology to Monitor Hotspot and Deforestation",
      tags: ["Next.js", "Python", "Kubernetes", "Microservice"],
      
    },
    {
      title: "IELTS Simulation Platform",
      image: "/images/speedyielts.png",
      description: "Designed and developed an Online Platform to Simulate 4 Skills Official IELTS Test that Powered by LLM",
      tags: ["Next.js", "Python", "Generative AI", "Firebase"],
      link: "https://speedyielts.com/"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
    "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "Django", "Microservices", "Kubernetes", "Firebase", "LLM (ChatGPT/Gemini)", "GIS", "Remote Sensing",
    "DevOps", "Git", "Geoserver"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={navbarClass}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                SandiRizqi
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="mb-8 relative">
              <div className="w-48 h-48 mx-auto relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full transform rotate-6"></div>
                <div className="absolute inset-0 bg-blue-200 rounded-full transform -rotate-6"></div>
                <div className="relative rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="https://cdn.geo-circle.com/static/images/sandi.jpeg" 
                    alt="Sandi Rizqi" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Hi, I'm Sandi Rizqi</span>
              <span className="block text-blue-600 text-5xl">Full Stack Web and Machine Learning  Developer</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            GIS (Geographic Information System) and Geo-Artificial Intelligence practitioner with over 5 years of experience. Adept at developing cutting-edge spatial data processing  and analytics technology, combining web, GIS, and artificial intelligence to drive efficiency and innovation
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-16">
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${fadeInUpClass} bg-white rounded-xl overflow-hidden shadow-lg`}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project?.link && (
                    <a
                      href={project.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 group"
                    >
                      View Project
                      <ExternalLink size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-16">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            
            <div className={`${fadeInUpClass} bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto`}>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Sandi Rizqi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;