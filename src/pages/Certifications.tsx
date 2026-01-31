import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<{ title: string; image: string } | null>(null);

  const certifications = [
    {
      id: 1,
      title: "Oracle Certification",
      issuer: "Oracle",
      image: "/cert1.png",
      link: "#",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      title: "Red Hat Certification",
      issuer: "Red Hat",
      image: "/cert2.png",
      link: "#",
      color: "from-red-600 to-red-500"
    },
    {
      id: 3,
      title: "EF SET English Certificate",
      issuer: "EF Education First",
      image: "/cert3.png",
      link: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      title: "Accenture Job Simulation",
      issuer: "Accenture via Forage",
      image: "/cert4.png",
      link: "#",
      color: "from-purple-600 to-violet-500"
    },
    {
      id: 5,
      title: "Letter of Recommendation",
      issuer: "Code Alpha",
      image: "/cert5.png",
      link: "#",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 6,
      title: "TCS Job Simulation",
      issuer: "TCS via Forage",
      image: "/cert6.png",
      link: "#",
      color: "from-blue-600 to-indigo-500"
    },
    {
      id: 7,
      title: "NPTEL Certification",
      issuer: "NPTEL - IIT",
      image: "/cert7.png",
      link: "#",
      color: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen px-4 pt-32 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            🏆 Achievements
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-slate-900">My </span>
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">Certifications</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Credentials and certifications I've earned throughout my learning journey
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden bg-gray-50">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Badge */}
                <motion.div 
                  className={`absolute top-3 right-3 w-10 h-10 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white text-lg">🏅</span>
                </motion.div>
              </div>

              {/* Certificate Info */}
              <div className="p-5">
                <h3 className={`text-lg font-bold text-slate-800 mb-1 group-hover:bg-gradient-to-r group-hover:${cert.color} group-hover:bg-clip-text group-hover:text-transparent transition-all`}>
                  {cert.title}
                </h3>
                <p className="text-slate-500 text-sm mb-4">Issued by {cert.issuer}</p>
                
                <motion.button
                  onClick={() => setSelectedCert({ title: cert.title, image: cert.image })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${cert.color} text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow`}
                >
                  View Certificate
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <h3 className="text-xl font-bold text-slate-800">{selectedCert.title}</h3>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCert(null)}
                  className="w-10 h-10 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
              
              {/* Certificate Image */}
              <div className="p-4 overflow-auto max-h-[calc(90vh-80px)]">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certifications;
