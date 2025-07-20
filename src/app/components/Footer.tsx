'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaEnvelope, FaChevronUp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the newsletter subscription
    // For now, just reset the form
    setEmail('')
    alert('Terima kasih telah berlangganan newsletter!')
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-gray-900 border-t border-gray-200 dark:border-gray-800 relative">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={handleScrollToTop} 
          className="bg-white dark:bg-gray-800 text-primary hover:bg-primary hover:text-white dark:hover:bg-primary w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
        >
          <FaChevronUp />
        </button>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="mb-4 flex items-center">
              <div className="relative h-10 w-10 mr-2">
                <Image 
                  src="/logo-mjs.png" 
                  alt="Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <Link href="/" className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Maulana.JS
              </Link>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Membuat website berkualitas tinggi dengan pengalaman pengguna yang menarik dan teknologi terkini.
            </p>
            <div className="flex space-x-3 mt-4">
              <a
                href="https://github.com/maulanajs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors p-2 rounded-full shadow-sm hover:shadow"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/maulana_j_s/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors p-2 rounded-full shadow-sm hover:shadow"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/maulanajs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors p-2 rounded-full shadow-sm hover:shadow"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/maulanajs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors p-2 rounded-full shadow-sm hover:shadow"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@maulanajs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors p-2 rounded-full shadow-sm hover:shadow"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-200">Menu Utama</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Tentang Saya
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Proyek
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-200">Layanan</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 dark:text-gray-300">Web Development</li>
              <li className="text-gray-600 dark:text-gray-300">UI/UX Design</li>
              <li className="text-gray-600 dark:text-gray-300">Mobile App Development</li>
              <li className="text-gray-600 dark:text-gray-300">E-Commerce Solutions</li>
              <li className="text-gray-600 dark:text-gray-300">SEO Optimization</li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-200">Newsletter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Berlangganan newsletter untuk mendapatkan update terbaru
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email anda"
                  className="w-full pl-10 pr-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Langganan
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom section with copyright and additional info */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              © {currentYear} Maulana.JS. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/privacy-policy" className="hover:text-primary dark:hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-primary dark:hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-primary dark:hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 