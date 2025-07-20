'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaSearch } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24 flex flex-col items-center justify-center text-center">
      <motion.div
        className="bg-white dark:bg-dark/60 rounded-xl shadow-lg p-8 md:p-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-6xl md:text-8xl font-bold text-primary mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          404
        </motion.div>

        <motion.h1 
          className="text-2xl md:text-3xl font-bold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Blog Post Not Found
        </motion.h1>

        <motion.p 
          className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          The blog post you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            href="/blogs" 
            className="inline-flex items-center justify-center bg-primary/10 text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full transition-colors font-medium w-full sm:w-auto"
          >
            <FaArrowLeft className="mr-2" />
            <span>Back to Blogs</span>
          </Link>
          
          <Link 
            href="/" 
            className="inline-flex items-center justify-center bg-secondary/10 text-secondary hover:bg-secondary hover:text-white px-6 py-3 rounded-full transition-colors font-medium w-full sm:w-auto"
          >
            <FaSearch className="mr-2" />
            <span>Go to Homepage</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
} 