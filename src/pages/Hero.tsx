import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Floating tech icons data
  const floatingIcons = [
    { icon: '⚛️', name: 'React', top: '15%', right: '10%', delay: 0, size: 'w-16 h-16' },
    { icon: '🟢', name: 'Node.js', top: '25%', right: '25%', delay: 0.5, size: 'w-14 h-14' },
    { icon: '🍃', name: 'MongoDB', top: '45%', right: '5%', delay: 1, size: 'w-12 h-12' },
    { icon: '🐍', name: 'Python', top: '60%', right: '20%', delay: 1.5, size: 'w-14 h-14' },
    { icon: '☕', name: 'Java', top: '75%', right: '8%', delay: 2, size: 'w-12 h-12' },
    { icon: '🟨', name: 'JS', top: '35%', right: '35%', delay: 0.8, size: 'w-10 h-10' },
    { icon: '🐳', name: 'Docker', top: '85%', right: '30%', delay: 1.2, size: 'w-12 h-12' },
    { icon: '🔷', name: 'TypeScript', top: '10%', right: '35%', delay: 0.3, size: 'w-10 h-10' },
    { icon: '🌊', name: 'Tailwind', top: '55%', right: '38%', delay: 1.8, size: 'w-11 h-11' },
    { icon: '🐙', name: 'GitHub', top: '70%', right: '42%', delay: 2.2, size: 'w-10 h-10' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={item.name}
            className={`absolute ${item.size} bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center`}
            style={{ top: item.top, right: item.right }}
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: item.delay },
              scale: { duration: 0.5, delay: item.delay },
              y: {
                duration: 3 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay
              }
            }}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <span className="text-2xl">{item.icon}</span>
          </motion.div>
        ))}

        {/* Decorative code bracket */}
        <motion.div
          className="absolute bottom-[20%] right-[15%] w-32 h-32 bg-white rounded-full shadow-xl border border-gray-100 flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span className="text-4xl font-mono text-slate-800 font-bold">&lt;/&gt;</span>
          <span className="text-xs text-slate-500 mt-1">Full Stack</span>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
      >
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <motion.div variants={itemVariants}>
            <p className="text-lg text-slate-500 mb-2 font-medium">Hi, I am</p>
            <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tight">
              <span className="text-slate-900">Kavin Vikraman</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl font-semibold text-slate-700">
              Full Stack Developer <span className="text-slate-400">|</span> UI/UX Designer
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
              I'm a full stack developer who builds scalable, high performance web applications from front to back. I specialize in turning complex problems into clean, user focused solutions. Driven by innovation, consistency, and a passion for impactful technology.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/KAVIN RESUME.pdf';
                link.download = 'KAVIN RESUME.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full text-white font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white border-2 border-slate-200 rounded-full text-slate-700 font-semibold text-lg transition-all duration-300 hover:border-slate-300 hover:shadow-lg"
            >
              Reach Me
            </motion.button>

            {/* Social Icons */}
            <div className="flex items-center gap-3 ml-2">
              <motion.a
                href="https://github.com/kavinvikraman"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-700 hover:shadow-lg transition-shadow"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/kavinvikraman"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-700 hover:shadow-lg transition-shadow"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Profile Photo */}
        <motion.div variants={itemVariants} className="relative flex justify-center">
          <motion.div 
            className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/20 relative z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src="/profile-photo.png" 
              alt="Kavin" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Decorative ring */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-full border-2 border-dashed border-cyan-200" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
