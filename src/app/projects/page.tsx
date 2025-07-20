'use client'

import { projects } from '@/contents/projects'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaFilter, FaSearch } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/utils/animations'
import { useState, useEffect } from 'react'

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Listen for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Extract unique technologies for filter
  const allTechnologies = ['All'];
  projects.forEach(project => {
    project.technologies.forEach(tech => {
      if (!allTechnologies.includes(tech)) {
        allTechnologies.push(tech);
      }
    });
  });
  
  // Filter projects based on search and technology filter
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || project.technologies.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.3, duration: 1.5 }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      />
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span 
            className="text-primary font-medium mb-4 inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
            Portfolio
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Semua <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Proyek</span>
          </motion.h1>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
          
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Kumpulan berbagai proyek yang telah saya kerjakan untuk berbagai klien dan kebutuhan
          </motion.p>
        
          {/* Search and Filter Section */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative w-full md:w-80">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari proyek..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-dark/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {allTechnologies.slice(0, 7).map((tech) => (
                <motion.button
                  key={tech}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === tech 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-white/70 dark:bg-dark/50 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                  }`}
                  onClick={() => setActiveFilter(tech)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.button>
              ))}
              
              <motion.div
                className="relative group"
                whileHover={{ y: -2 }}
              >
                <button
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white/70 dark:bg-dark/50 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 flex items-center gap-2"
                >
                  <FaFilter size={12} />
                  <span>More</span>
                </button>
                
                <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-dark/80 shadow-lg rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-1">
                    {allTechnologies.slice(7).map((tech) => (
                      <button
                        key={tech}
                        className={`px-3 py-1.5 text-xs rounded-lg transition-all ${
                          activeFilter === tech 
                            ? 'bg-primary/20 text-primary font-medium' 
                            : 'hover:bg-gray-100 dark:hover:bg-dark/50'
                        }`}
                        onClick={() => setActiveFilter(tech)}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                className="bg-white/90 dark:bg-dark/60 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 group"
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110 duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient overlay - show on hover for desktop, always visible for mobile */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-500`} />
                  
                  {/* Action buttons - transformed for desktop hover, always visible for mobile */}
                  <div className={`absolute bottom-0 left-0 right-0 p-6 ${isMobile ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'} transition-transform duration-500`}>
                    <div className="flex gap-4">
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/80 dark:bg-dark/80 text-gray-800 dark:text-white p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/80 dark:bg-dark/80 text-gray-800 dark:text-white p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark/50 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          // No results found UI
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div 
              className="inline-block p-5 rounded-full bg-gray-100 dark:bg-dark/50 mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
            >
              <FaSearch className="w-10 h-10 text-gray-400" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-3">Tidak Ada Proyek Ditemukan</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Coba ubah kata kunci pencarian atau filter teknologi Anda
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('All');
              }}
              className="bg-primary text-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              Reset Filter
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
} 