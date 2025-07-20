'use client'

import { useState, useEffect } from 'react';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Newsletter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [subscriberName, setSubscriberName] = useState('');

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    
    // Clear error message when user starts typing again
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus('error');
      setErrorMessage('Semua field harus diisi');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Format email tidak valid');
      return;
    }

    try {
      setStatus('loading');
      
      // Make API call to the newsletter endpoint
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Terjadi kesalahan saat mengirim data');
      }
      
      // Store subscriber name for personalized success message
      setSubscriberName(formData.name.split(' ')[0]); // First name only
      setStatus('success');
      setFormData({ name: '', email: '' });
      
      // Reset success status after 6 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 6000);
      
    } catch (err) {
      console.error('Error submitting form:', err);
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Terjadi kesalahan saat mengirim data');
    }
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute -bottom-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.3, duration: 1.5 }}
      />
      <motion.div 
        className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="bg-gradient-to-tr from-white/95 to-white/80 dark:from-dark/80 dark:to-dark/60 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="p-6 sm:p-10 md:p-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                >
                  <motion.span 
                    className="text-primary font-medium mb-4 inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
                    Stay Updated
                  </motion.span>
                  
                  <motion.h2 
                    className={`text-${isMobile ? '2xl' : '3xl'} md:text-4xl font-bold mb-6`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Berlangganan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Newsletter</span> Saya
                  </motion.h2>
                  
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    Dapatkan update terbaru tentang proyek, artikel blog, dan wawasan teknologi langsung ke kotak masuk Anda. Tidak ada spam, hanya konten berkualitas!
                  </motion.p>
                </motion.div>
                
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div 
                      className="flex flex-col items-center justify-center text-center gap-4 py-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      key="success-message"
                    >
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-2">
                        <FaCheckCircle className="text-green-500 text-4xl" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                        Terima kasih, {subscriberName}!
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 max-w-sm">
                        Anda telah berhasil berlangganan newsletter kami. Kami akan mengirimkan update terbaru secara berkala.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      className="flex flex-col gap-4 sm:gap-5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.7 }}
                      onSubmit={handleSubmit}
                      key="subscription-form"
                    >
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Nama Lengkap"
                          className={`w-full px-5 sm:px-6 py-3 sm:py-4 rounded-xl border dark:text-white ${
                            status === 'error' && !formData.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
                          } bg-white/50 dark:bg-dark/50 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/40 backdrop-blur-sm`}
                          required
                        />
                      </div>
                      
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Alamat Email"
                          className={`w-full px-5 sm:px-6 py-3 sm:py-4 rounded-xl border dark:text-white ${
                            status === 'error' && !formData.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
                          } bg-white/50 dark:bg-dark/50 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/40 backdrop-blur-sm`}
                          required
                        />
                      </div>
                      
                      <AnimatePresence>
                        {status === 'error' && (
                          <motion.p 
                            className="text-red-500 text-sm pl-2"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          >
                            ⚠️ {errorMessage}
                          </motion.p>
                        )}
                      </AnimatePresence>
                      
                      <motion.button
                        type="submit"
                        disabled={status === 'loading'}
                        className={`bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 sm:py-4 rounded-xl shadow-lg transition-all group flex items-center justify-center ${
                          status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'
                        }`}
                        whileHover={status !== 'loading' ? { y: -5, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)" } : {}}
                        whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="mr-2 font-medium">
                          {status === 'loading' ? 'Mengirim...' : 'Berlangganan Sekarang'}
                        </span>
                        <FaPaperPlane className={`${status !== 'loading' ? 'group-hover:translate-x-1 group-hover:-translate-y-1' : ''} transition-transform`} />
                      </motion.button>
                      
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 text-center lg:text-left">
                        Kami menghormati privasi Anda. Unsubscribe kapan saja.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10 pt-8 border-t border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">100+</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Berlangganan</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-secondary">24</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Newsletter Terbit</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">4.9/5</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Rating Pembaca</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 