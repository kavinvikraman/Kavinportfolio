
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      color: 'bg-blue-500',
      lightBg: 'bg-blue-50',
      border: 'border-blue-200',
      skills: [
        { name: 'Java', icon: '☕' },
        { name: 'Python', icon: '🐍' },
        { name: 'C Basics', icon: '🔷' },
      ]
    },
    {
      title: 'Frontend',
      icon: '🎨',
      color: 'bg-rose-500',
      lightBg: 'bg-rose-50',
      border: 'border-rose-200',
      skills: [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'JavaScript', icon: '🟨' },
        { name: 'HTML5', icon: '🟧' },
        { name: 'CSS3', icon: '🔵' },
        { name: 'Tailwind', icon: '🌊' },
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      color: 'bg-emerald-500',
      lightBg: 'bg-emerald-50',
      border: 'border-emerald-200',
      skills: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express.js', icon: '⚡' },
        { name: 'Flask', icon: '🌶️' },
        { name: 'Python', icon: '🐍' },
      ]
    },
    {
      title: 'Database & Cloud',
      icon: '🗄️',
      color: 'bg-amber-500',
      lightBg: 'bg-amber-50',
      border: 'border-amber-200',
      skills: [
        { name: 'Firebase', icon: '🔥' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Vercel', icon: '▲' },
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: '🛠️',
      color: 'bg-violet-500',
      lightBg: 'bg-violet-50',
      border: 'border-violet-200',
      skills: [
        { name: 'Git', icon: '🔴' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'VS Code', icon: '💙' },
        { name: 'Docker', icon: '🐳' },
        { name: 'NPM', icon: '📦' },
        { name: 'Postman', icon: '🚀' },
        { name: 'Figma', icon: '🎨' },
      ]
    }
  ];

  return (
    <div className="min-h-screen px-4 pt-28 pb-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-semibold mb-4">
            🔧 My Tech Arsenal
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-slate-900">Tech </span>
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Stack</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className={`${category.lightBg} rounded-2xl p-6 border ${category.border}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 ${category.color} rounded-xl flex items-center justify-center text-xl shadow-lg`}>
                  {category.icon}
                </div>
                <h2 className="text-xl font-bold text-slate-800">{category.title}</h2>
                <span className="ml-auto px-3 py-1 bg-white rounded-full text-sm font-semibold text-slate-600 shadow-sm">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all cursor-pointer"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-sm font-semibold text-slate-800">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="mt-16 flex justify-center items-center gap-12 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { label: 'Technologies', value: '20+' },
            { label: 'Projects Built', value: '10+' },
            { label: 'Years Learning', value: '2+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-black bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm text-slate-500 font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
