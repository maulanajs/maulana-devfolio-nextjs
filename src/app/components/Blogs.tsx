'use client'

import { blogs } from '@/contents/blogs';
import Link from 'next/link';
import { FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/utils/animations';

export default function Blogs() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute top-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.3, duration: 1.5 }}
      />
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span 
            className="text-secondary font-medium mb-4 inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-secondary"></span>
            Blog
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Artikel <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Terbaru</span>
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
          
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Wawasan dan artikel terbaru tentang pengembangan web, desain, dan teknologi
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.slug}
              className="bg-white/80 dark:bg-dark/60 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 group"
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4 mb-4">
                  <motion.span 
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaCalendarAlt className="mr-2 text-secondary" />
                    {new Date(blog.date).toLocaleDateString('id-ID')}
                  </motion.span>
                  <motion.span 
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaClock className="mr-2 text-secondary" />
                    {blog.readTime}
                  </motion.span>
                </div>
              
                <Link href={`/blogs/${blog.slug}`}>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-secondary transition-colors">
                    {blog.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <Link href={`/blogs/${blog.slug}`} className="inline-flex items-center text-secondary font-medium group/link">
                  <span>Baca Selengkapnya</span>
                  <FaArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/blogs"
            className="group flex items-center gap-2 bg-white dark:bg-dark/60 px-6 py-3 rounded-xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all"
          >
            <span>Lihat Semua Artikel</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 