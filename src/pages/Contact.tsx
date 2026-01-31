import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

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
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    try {
      const response = await fetch("https://formspree.io/f/manjdbwd", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setSuccess(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto w-full"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">Let's Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl p-8 shadow-xl border border-gray-200">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors shadow-sm"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors shadow-sm"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-gray-700 text-lg font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors shadow-sm"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)",
                  rotate: [0, -1, 1, 0],
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  backgroundPosition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                className="w-full px-8 py-4 bg-gradient-to-r from-electric-blue via-cyber-purple to-neon-pink bg-300% rounded-lg text-white font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                Send Message
              </motion.button>
            </motion.div>
            {success && (
              <div className="text-green-400 text-center font-semibold mt-4">
                Thank you! Your message has been sent.
              </div>
            )}
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <motion.div variants={itemVariants} className="text-center">
            <motion.div 
              className="w-16 h-16 bg-gradient-to-r from-electric-blue to-cyber-purple rounded-full flex items-center justify-center mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-2xl">📧</span>
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300">kavinvikraman06@gmail.com</p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <motion.div 
              className="w-16 h-16 bg-gradient-to-r from-cyber-purple to-neon-pink rounded-full flex items-center justify-center mx-auto mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-2xl">📱</span>
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-300">8754792210</p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <motion.div 
              className="w-16 h-16 bg-gradient-to-r from-neon-pink to-electric-blue rounded-full flex items-center justify-center mx-auto mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-2xl">📍</span>
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-300">Coimbatore, Tamil nadu</p>
          </motion.div>
        </motion.div>

        {/* Social Links Section */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <h2 className="text-3xl font-bold cyber-text mb-8">Connect With Me</h2>
          <div className="flex justify-center space-x-8">
            <motion.a
              href="https://www.linkedin.com/in/kavin-vikraman-777572297"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ 
                scale: 1.3, 
                rotate: [0, -10, 10, 0],
                y: -10
              }}
              whileTap={{ scale: 0.9 }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                <Linkedin size={32} />
              </div>
              <motion.div
                className="absolute -inset-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.a>

            <motion.a
              href="https://github.com/kavinvikraman"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ 
                scale: 1.3, 
                rotate: [0, 10, -10, 0],
                y: -10
              }}
              whileTap={{ scale: 0.9 }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-white text-2xl shadow-lg group-hover:shadow-gray-500/50 transition-all duration-300">
                <Github size={32} />
              </div>
              <motion.div
                className="absolute -inset-2 bg-gray-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
