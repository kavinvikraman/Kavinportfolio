import React from 'react';
import { motion } from 'framer-motion';

const CodingProfiles = () => {
  const profiles = [
    {
      id: 1,
      name: "LeetCode",
      description: "90+ problems solved",
      image: "/leetcode.png",
      link: "https://leetcode.com/u/kavin_vikraman2005/",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      icon: "🧩"
    },
    {
      id: 2,
      name: "GeeksforGeeks",
      description: "62 Problems Solved | Coding Score 97 | Institute Rank 75",
      image: "/gfg.png",
      link: "https://www.geeksforgeeks.org/profile/kavindev27?tab=activity",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: "📗"
    },
    {
      id: 3,
      name: "HackerRank",
      description: "Badges: Problem Solving ⭐ | Java ⭐⭐⭐ | Python ⭐",
      image: "/hacker rank.png",
      link: "https://www.hackerrank.com/profile/kavinvikraman06",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      icon: "💻"
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
            className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            💻 Competitive Programming
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-slate-900">Coding </span>
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">Profiles</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            My journey in competitive programming and problem solving
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group block ${profile.bgColor} rounded-3xl p-5 border ${profile.borderColor} hover:shadow-2xl transition-all duration-500`}
            >
              {/* Profile Image - Medium Size */}
              <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 mb-5">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Profile Info */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl">{profile.icon}</span>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}>
                    {profile.name}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">{profile.description}</p>
                <motion.div 
                  className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${profile.color} text-white rounded-full text-sm font-semibold shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Profile
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-8 border border-gray-100 max-w-2xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="text-4xl mb-4"
            >
              📈
            </motion.div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Current Progress</h3>
            <p className="text-slate-600 mb-4">
              These stats reflect my ongoing journey. I'm committed to solving more problems, 
              learning new concepts, and continuously pushing my limits every single day.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium">Always learning, always growing</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CodingProfiles;
