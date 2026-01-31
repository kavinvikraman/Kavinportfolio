import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Calculator with Voice Assistant",
      description: "A feature-rich calculator app that supports voice commands for hands-free calculations. Users can perform arithmetic operations by simply speaking, making it accessible and convenient.",
      tech: [
        { name: "React", desc: "Frontend UI library" },
        { name: "HTML", desc: "Page structure" },
        { name: "JavaScript", desc: "Voice recognition & logic" },
        { name: "CSS", desc: "Custom styling" }
      ],
      image: "/calculatorphoto.png",
      link: "https://rune-thrill-ca6.notion.site/21bf7d47707b8055a3ffe362bc00efb4?source=copy_link",
      github: "https://github.com/kavinvikraman/Calculator-with-voice-Assitant",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      title: "Kavin Portfolio",
      description: "An immersive portfolio experience featuring interactive 3D elements, smooth animations, and modern design. Showcases projects with engaging visual effects and seamless navigation.",
      tech: [
        { name: "React", desc: "Component-based UI" },
        { name: "TypeScript", desc: "Type-safe JavaScript" },
        { name: "Tailwind CSS", desc: "Utility-first styling" },
        { name: "Vite", desc: "Fast build tool" }
      ],
      image: "/kavinportfolio.png",
      link: "#",
      github: "https://github.com/kavinvikraman",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "TaskVerse",
      description: "A comprehensive productivity platform that helps users organize projects, manage schedules, and track daily tasks. Features intuitive UI with real-time updates and collaborative tools.",
      tech: [
        { name: "React", desc: "Interactive frontend" },
        { name: "Node.js", desc: "Backend runtime" },
        { name: "Django", desc: "Python web framework" },
        { name: "Flask", desc: "Lightweight API server" },
        { name: "PostgreSQL", desc: "Relational database" },
        { name: "TailwindCSS", desc: "Utility-first styling" }
      ],
      image: "/taskverse photo.png",
      link: "https://rune-thrill-ca6.notion.site/21bf7d47707b8028b20ed107950c2ce2?source=copy_link",
      github: "https://github.com/kavinvikraman/Taskverse-Project",
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 4,
      title: "ClassBot",
      description: "An AI-powered chatbot designed for college students to instantly access academic information, schedules, and campus resources through natural conversation.",
      tech: [
        { name: "Python", desc: "Backend logic" },
        { name: "Flask", desc: "Web framework" },
        { name: "PostgreSQL", desc: "Relational database" },
        { name: "SpaCy", desc: "NLP processing" },
        { name: "HTML", desc: "Page structure" },
        { name: "CSS", desc: "Styling" },
        { name: "JavaScript", desc: "Frontend interactivity" }
      ],
      image: "/classbotphoto.png",
      link: "#",
      github: "https://github.com/kavinvikraman/ClassBot",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 5,
      title: "MemoMate",
      description: "A personal journaling app that combines diary entries with mood tracking and task management. Helps users reflect on their emotions and stay organized daily.",
      tech: [
        { name: "React", desc: "Dynamic UI components" },
        { name: "HTML", desc: "Semantic structure" },
        { name: "CSS", desc: "Custom animations" }
      ],
      image: "/memomate.png",
      link: "#",
      github: "https://github.com/kavinvikraman/memomate-planner",
      color: "from-rose-500 to-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="min-h-screen px-4 pt-32 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            My Work
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-slate-900">Featured </span>
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A collection of projects I've built with passion and dedication
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Floating Badge */}
                  <motion.div 
                    className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-bold rounded-full shadow-lg`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    #{index + 1}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className={`text-xl font-bold text-slate-800 mb-3 group-hover:bg-gradient-to-r group-hover:${project.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack with descriptions */}
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Tech Stack</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.tech.map((tech) => (
                        <div
                          key={tech.name}
                          className="group/tech relative"
                        >
                          <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-100 hover:border-slate-200 hover:bg-slate-100 transition-all cursor-default">
                            <span className="text-xs font-semibold text-slate-700">{tech.name}</span>
                          </div>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                            {tech.desc}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.link !== "#" && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 py-2.5 bg-gradient-to-r ${project.color} rounded-xl text-white font-semibold text-sm text-center shadow-lg hover:shadow-xl transition-shadow`}
                      >
                        View Project
                      </motion.a>
                    )}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2.5 bg-slate-900 rounded-xl text-white font-semibold text-sm flex items-center gap-2 hover:bg-slate-800 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </motion.a>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-slate-500 mb-4">Want to see more?</p>
          <motion.a
            href="https://github.com/kavinvikraman"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
