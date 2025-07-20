'use client'
import Link from 'next/link'
import Image from 'next/image'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen size
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Set initial scroll state
    setScrolled(window.scrollY > 20);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      const navbarElement = document.getElementById('mobile-menu-container');
      const hamburgerButton = document.getElementById('hamburger-button');
      
      if (
        navbarElement && 
        !navbarElement.contains(event.target as Node) &&
        hamburgerButton && 
        !hamburgerButton.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: '/', label: 'Beranda', icon: '🏠' },
    { href: '/about', label: 'Tentang', icon: '👤' },
    { href: '/projects', label: 'Proyek', icon: '💼' },
    { href: '/blogs', label: 'Blog', icon: '📝' },
    { href: '/contact', label: 'Kontak', icon: '📞' },
  ];

  // Define animation variants for the navbar
  const navbarVariants = {
    transparent: {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderColor: 'rgba(229, 231, 235, 0)',
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
    },
    light: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderColor: 'rgba(229, 231, 235, 0.8)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
    },
    dark: {
      backgroundImage: 'linear-gradient(to right, rgba(12, 18, 32, 0.9), rgba(10, 31, 59, 0.9), rgba(17, 24, 39, 0.9))',
      borderColor: 'rgba(31, 41, 55, 0.8)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)'
    }
  };

  // Animation variants for mobile menu
  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants: Variants = {
    closed: {
      opacity: 0,
      x: -10
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <header className="pt-3 sm:pt-5 fixed w-full z-50">
      <motion.nav 
        initial="transparent"
        animate={scrolled ? (theme === 'dark' ? "dark" : "light") : "transparent"}
        variants={navbarVariants}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`mx-3 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-auto max-w-7xl xl:px-8 rounded-2xl sm:rounded-full backdrop-blur-sm border shadow-lg transition-all ${theme === 'dark' && scrolled ? 'dark-navbar-gradient' : ''}`}
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-18">
            <motion.div 
              initial={{ opacity: 0.7, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center">
                <div className={`relative ${isMobile ? 'h-8 w-8' : 'h-10 w-10'}`}>
                  <Image 
                    src="/logo-mjs.png" 
                    alt="MJS Logo" 
                    fill
                    className="object-contain" 
                    sizes="(max-width: 640px) 32px, 40px"
                    priority
                  />
                </div>
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="hidden sm:block ml-2 text-base sm:text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                >
                  Maulana.JS
                </motion.span>
              </Link>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link 
                    href={item.href} 
                    className={`px-3 lg:px-4 py-2 rounded-full transition-colors ${
                      pathname === item.href 
                        ? 'text-primary font-medium bg-primary/5 dark:bg-primary/10' 
                        : scrolled 
                          ? 'hover:text-primary hover:bg-gray-100/50 dark:hover:bg-gray-800/30' 
                          : `${theme === 'dark' ? 'text-white' : 'text-gray-800'} hover:text-primary hover:bg-white/20 dark:hover:bg-gray-800/30`}`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Theme toggle button */}
              <motion.button
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: menuItems.length * 0.1, duration: 0.5 }}
                onClick={toggleTheme}
                className={`ml-1 p-2 rounded-full transition-colors ${scrolled 
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800/50' 
                  : `${theme === 'dark' ? 'text-white' : 'text-gray-800'} hover:bg-white/20 dark:hover:bg-gray-800/30`}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              id="hamburger-button"
              className={`md:hidden p-2 rounded-full ${
                isMobileMenuOpen ? 'text-primary bg-primary/10' : ''
              }`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              whileTap={{ scale: 0.95 }}
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: isMobileMenuOpen ? -90 : 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: isMobileMenuOpen ? 90 : -90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  ) : (
                    <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu - Improved positioning and animations */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                id="mobile-menu-container"
                className="md:hidden fixed inset-x-0 top-[4.2rem] sm:top-[5rem] px-3 sm:px-4 z-50"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <motion.div 
                  className={`bg-white rounded-2xl shadow-xl py-2 border border-gray-100 max-w-md mx-auto ${theme === 'dark' ? 'dark-navbar-gradient dark:bg-gradient-to-br dark:from-[#0c1220] dark:via-[#0a1f3b] dark:to-[#111827] dark:border-gray-800/50' : ''}`}
                >
                  {menuItems.map((item) => (
                    <motion.div
                      key={item.href}
                      variants={menuItemVariants}
                      className={`${pathname === item.href ? (theme === 'dark' ? 'bg-blue-900/20' : 'bg-blue-50') : ''}`}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center w-full px-5 py-3 ${
                          pathname === item.href 
                            ? 'text-primary font-medium'
                            : theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="mr-3 text-lg">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                        {pathname === item.href && (
                          <motion.div 
                            className="ml-auto h-2 w-2 bg-primary rounded-full"
                            layoutId="activeIndicator"
                          ></motion.div>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Theme toggle button in mobile menu */}
                  <motion.div
                    variants={menuItemVariants}
                    className={`mt-1 pt-2 border-t ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200'}`}
                  >
                    <button
                      onClick={() => {
                        toggleTheme();
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center w-full px-5 py-3 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}
                    >
                      {theme === 'dark' ? (
                        <>
                          <span className="mr-3 text-lg">☀️</span>
                          <span className="font-medium">Mode Terang</span>
                        </>
                      ) : (
                        <>
                          <span className="mr-3 text-lg">🌙</span>
                          <span className="font-medium">Mode Gelap</span>
                        </>
                      )}
                    </button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </header>
  )
} 