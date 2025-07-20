'use client'

import { useState, useEffect } from 'react'
import { blogs } from '@/contents/blogs'
import Link from 'next/link'
import { FaCalendarAlt, FaClock, FaSearch } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Set initial value
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Filter blogs based on search term
  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className={`text-${isMobile ? '2xl' : '3xl'} sm:text-4xl md:text-5xl font-bold mb-4`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Posts</span>
        </motion.h1>
        
        <motion.p 
          className="text-secondary mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Insights, tutorials and updates from the world of web development
        </motion.p>
        
        {/* Search bar */}
        <motion.div
          className="relative max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-dark/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
        </motion.div>
      </motion.div>
      
      {filteredBlogs.length === 0 ? (
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-2xl font-medium mb-4">No matching articles found</p>
          <p className="text-secondary mb-8">Try a different search term</p>
          <button 
            onClick={() => setSearchTerm('')}
            className="inline-flex items-center bg-primary/10 text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full transition-colors font-medium"
          >
            Clear search
          </button>
        </motion.div>
      ) : (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {filteredBlogs.map((blog, index) => (
            <motion.article
              key={index}
              className="bg-white dark:bg-dark/50 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-800/50 h-full flex flex-col"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <Link 
                href={`/blogs/${blog.slug}`}
                className="block flex-grow"
              >
                <div className="p-6">
                  <motion.div 
                    className="bg-primary/10 text-primary text-xs font-medium rounded-full px-3 py-1 inline-flex mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Blog
                  </motion.div>
                  
                  <motion.h2 
                    className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2 h-[3.75rem]"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {blog.title}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-secondary mb-6 line-clamp-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {blog.excerpt}
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-center gap-4 text-sm text-secondary mt-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div 
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaCalendarAlt className="h-4 w-4" />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaClock className="h-4 w-4" />
                      <span>{blog.readTime}</span>
                    </motion.div>
                  </motion.div>
                </div>
              </Link>
              
              <div className="px-6 pb-6 mt-auto">
                <Link 
                  href={`/blogs/${blog.slug}`}
                  className="inline-block w-full text-center bg-primary/10 hover:bg-primary text-primary hover:text-white py-2.5 px-4 rounded-lg transition-colors font-medium"
                >
                  Read Article
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      )}
    </div>
  )
} 