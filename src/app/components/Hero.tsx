'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn } from '@/utils/animations';

export default function Hero() {
  // Function to handle WhatsApp button click
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open('https://wa.me/85770216133', '_blank');
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      />
      <motion.div 
        className="absolute bottom-10 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1.5 }}
      />
      
      {/* Main content container */}
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left section: Content */}
          <motion.div 
            className="lg:w-3/5 text-center lg:text-left"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <motion.p 
              className="text-primary font-medium mb-4 inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
              Web Developer &amp; Designer
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Hai, Saya <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary inline-block"
                {...fadeIn}
                transition={{ delay: 0.9 }}
              >
                Maulana.JS
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
              {...fadeInUp}
              transition={{ delay: 0.5 }}
            >
              <span className="font-semibold">Front-End Developer</span> | <span className="font-semibold">Desainer Grafis</span> | <span className="font-semibold">Web Developer</span> | <span className="font-semibold">Web Designer</span>
            </motion.p>
            
            <motion.div 
              className="flex justify-center lg:justify-start space-x-6 mb-10"
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="https://github.com/maulanajs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors p-3 bg-white/80 dark:bg-dark/30 rounded-full shadow-md hover:shadow-xl"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/maulanajs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors p-3 bg-white/80 dark:bg-dark/30 rounded-full shadow-md hover:shadow-xl"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/maulana_j_s/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors p-3 bg-white/80 dark:bg-dark/30 rounded-full shadow-md hover:shadow-xl"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              {...fadeInUp}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="/projects"
                  className="bg-gradient-to-r from-primary to-primary/80 inline-block w-full md:w-auto text-white px-8 py-4 rounded-xl shadow-lg hover:translate-y-[-2px] transition-all font-medium"
                >
                  <div className="flex items-center gap-2">
                    Lihat Proyek
                    <FaArrowRight className="text-sm" />
                  </div>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="https://wa.me/85770216133"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="backdrop-blur-md bg-white/30 dark:bg-white/10 inline-block w-full md:w-auto text-gray-800 dark:text-white px-8 py-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:translate-y-[-2px] transition-all font-medium cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    Hubungi Saya
                    <FaWhatsapp className="text-green-500" />
                  </div>
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hidden lg:flex mt-12 gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-400"></div>
                <div className="w-8 h-8 rounded-full bg-red-400"></div>
                <div className="w-8 h-8 rounded-full bg-green-400"></div>
                <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold">100+</span> Proyek sukses diselesaikan
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right section: Profile picture */}
          <motion.div 
            className="lg:w-2/5"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 }
            }}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut"
                }}
              />
              <div className="bg-gradient-to-tr p-2 from-primary/20 via-secondary/20 to-transparent rounded-full">
                <div className="bg-white dark:bg-dark/50 p-4 rounded-full">
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="aspect-square overflow-hidden rounded-full"
                  >
                    <Image 
                      src="/profile.png" 
                      alt="Profil" 
                      width={320} 
                      height={320} 
                      className="w-full h-full object-cover rounded-full"
                      style={{ aspectRatio: "1/1" }}
                      priority
                    />
                  </motion.div>
                </div>
              </div>
              
              {/* Decorative floating elements */}
              <motion.div 
                className="absolute -bottom-6 -left-6 p-4 bg-white dark:bg-dark/80 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary">5+</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Tahun</p>
                    <p className="font-medium">Pengalaman</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -right-6 p-4 bg-white dark:bg-dark/80 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                whileHover={{ y: 5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="font-bold text-secondary">20+</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Klien</p>
                    <p className="font-medium">Puas</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
