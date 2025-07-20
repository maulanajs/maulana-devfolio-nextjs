'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function TermsOfService() {
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

  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link 
          href="/" 
          className="inline-flex items-center text-primary hover:text-primary-dark transition-colors font-medium"
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className={`text-${isMobile ? '2xl' : '3xl'} sm:text-4xl md:text-5xl font-bold mb-6`}>Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Service</span></h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Welcome to Maulana.JS. By accessing our website, you agree to these Terms of Service in their entirety. If you disagree with any part of these terms, you may not access our website or use our services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property</h2>
            <p className="mb-4">
              The content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of Maulana.JS or its content suppliers and is protected by international copyright laws.
            </p>
            <p>
              Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Maulana.JS.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p className="mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p className="mb-4">
              You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
            </p>
            <p>
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Services</h2>
            <p className="mb-4">
              Maulana.JS provides web development, UI/UX design, mobile app development, e-commerce solutions, and SEO optimization services.
            </p>
            <p>
              We reserve the right to withdraw or amend our service, and any service or material we provide, in our sole discretion without notice. We will not be liable if for any reason all or any part of our service is unavailable at any time or for any period.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
            <p className="mb-4">
              Payment terms are established in individual service agreements or contracts. Unless otherwise specified:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Payment is due upon receipt of invoice</li>
              <li>We accept payment via bank transfer, credit card, or other specified payment methods</li>
              <li>Late payments may result in service suspension or termination</li>
              <li>Refunds are subject to our refund policy specified in individual agreements</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. User Conduct</h2>
            <p className="mb-4">
              You agree to use our website and services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the website.
            </p>
            <p>
              Prohibited behavior includes but is not limited to: harassing, abusing, threatening others; posting defamatory, obscene, or offensive content; attempting to gain unauthorized access to our systems or user accounts; engaging in any activity that interferes with our services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p>
              In no event shall Maulana.JS, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Indonesia, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us via email or through the contact form on our website.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  )
} 