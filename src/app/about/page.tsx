'use client'

import { FaCode, FaLaptopCode, FaPalette, FaReact, FaHtml5, FaNode, FaUserTie, FaBriefcase, FaGraduationCap, FaCertificate, FaLink, FaFileAlt, FaDownload } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiAdobeaftereffects } from 'react-icons/si'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover,
  cardHoverSmall,
  slideInLeft,
  slideInRight
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto pt-24 pb-16 px-4 sm:px-6">
      <motion.div
        className="relative mb-10 sm:mb-16"
        {...fadeIn}
      >
        <motion.div 
          className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        <motion.div 
          className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        />
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8 text-center relative z-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          {...fadeInDown}
        >
          About Me
        </motion.h1>
        
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 sm:mb-12 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
      </motion.div>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-12 sm:mb-20 relative"
        {...fadeInUp}
      >
        <motion.div 
          className="text-base sm:text-lg md:text-xl text-secondary max-w-3xl mx-auto text-center p-6 sm:p-8 bg-white dark:bg-dark/30 backdrop-blur-sm rounded-lg border border-gray-100 dark:border-gray-800 shadow-lg"
          whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          transition={{ type: "spring" as const, stiffness: 200 }}
        >
          <FaUserTie className="text-primary h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4 sm:mb-6" />
          <p className="leading-relaxed">
            I&apos;m a <span className="text-primary font-semibold">Designer & Web Developer</span> passionate about transforming concepts into visually compelling and functional designs that inspire, engage, and communicate powerful stories.
          </p>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-12 sm:mb-20"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold mb-2 text-center"
          {...fadeInUp}
        >
          Skills & Expertise
        </motion.h2>
        <motion.p 
          className="text-secondary text-center mx-auto max-w-2xl mb-8 sm:mb-12"
          {...fadeInUp}
          transition={{ delay: 0.1 }}
        >
          Specialized in web development and design with proficiency in these technologies
        </motion.p>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white/90 dark:bg-dark/70 p-6 sm:p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <FaCode className="h-8 w-8 sm:h-10 sm:w-10 text-primary mr-3 sm:mr-4 p-2 bg-primary/10 rounded-lg" />
              <h3 className="text-xl sm:text-2xl font-bold">Frontend Developer</h3>
            </div>
            <ul className="text-secondary space-y-3 sm:space-y-4">
              <li className="flex items-center gap-3 bg-white/50 dark:bg-dark/50 p-3 rounded-lg transition-all hover:translate-x-1">
                <FaReact className="text-blue-500 text-lg sm:text-xl" /> 
                <span>React / Next.js</span>
              </li>
              <li className="flex items-center gap-3 bg-white/50 dark:bg-dark/50 p-3 rounded-lg transition-all hover:translate-x-1">
                <SiTypescript className="text-blue-600 text-lg sm:text-xl" /> 
                <span>TypeScript</span>
              </li>
              <li className="flex items-center gap-3 bg-white/50 dark:bg-dark/50 p-3 rounded-lg transition-all hover:translate-x-1">
                <SiTailwindcss className="text-cyan-500 text-lg sm:text-xl" /> 
                <span>Tailwind CSS</span>
              </li>
              <li className="flex items-center gap-3 bg-white/50 dark:bg-dark/50 p-3 rounded-lg transition-all hover:translate-x-1">
                <FaHtml5 className="text-orange-500 text-lg sm:text-xl" /> 
                <span>HTML5 / CSS3</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white/90 dark:bg-dark/70 p-6 sm:p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <FaLaptopCode className="h-8 w-8 sm:h-10 sm:w-10 text-primary mr-3 sm:mr-4 p-2 bg-primary/10 rounded-lg" />
              <h3 className="text-xl sm:text-2xl font-bold">Backend Developer</h3>
            </div>
            <ul className="text-secondary space-y-3 sm:space-y-4">
              <li className="flex items-center gap-3 bg-white/50 dark:bg-dark/50 p-3 rounded-lg transition-all hover:translate-x-1">
                <FaNode className="text-green-600 text-lg sm:text-xl" /> 
                <span>Node.js</span>
              </li>
              <li className="flex items-center gap-3 bg-white/50 dark:bg-dark/50 p-3 rounded-lg transition-all hover:translate-x-1">
                <SiExpress className="text-gray-500 text-lg sm:text-xl" /> 
                <span>Express</span>
              </li>
              <li className="flex items-center gap-3 bg-white/50 dark:bg-dark/50 p-3 rounded-lg transition-all hover:translate-x-1">
                <SiPostgresql className="text-blue-700 text-lg sm:text-xl" /> 
                <span>PostgreSQL</span>
              </li>
              <li className="flex items-center gap-3 bg-white/50 dark:bg-dark/50 p-3 rounded-lg transition-all hover:translate-x-1">
                <SiMongodb className="text-green-500 text-lg sm:text-xl" /> 
                <span>MongoDB</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white/90 dark:bg-dark/70 p-6 sm:p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <FaPalette className="h-8 w-8 sm:h-10 sm:w-10 text-primary mr-3 sm:mr-4 p-2 bg-primary/10 rounded-lg" />
              <h3 className="text-xl sm:text-2xl font-bold">Graphic Design</h3>
            </div>
            <ul className="text-secondary space-y-3 sm:space-y-4">
              <li className="flex items-center gap-3 bg-white/50 dark:bg-dark/50 p-3 rounded-lg transition-all hover:translate-x-1">
                <SiAdobeillustrator className="text-orange-600 text-lg sm:text-xl" /> 
                <span>Adobe Illustrator</span>
              </li>
              <li className="flex items-center gap-3 bg-white/50 dark:bg-dark/50 p-3 rounded-lg transition-all hover:translate-x-1">
                <SiAdobephotoshop className="text-blue-800 text-lg sm:text-xl" /> 
                <span>Adobe Photoshop</span>
              </li>
              <li className="flex items-center gap-3 bg-white/50 dark:bg-dark/50 p-3 rounded-lg transition-all hover:translate-x-1">
                <SiAdobepremierepro className="text-purple-700 text-lg sm:text-xl" /> 
                <span>Adobe Premiere Pro</span>
              </li>
              <li className="flex items-center gap-3 bg-white/50 dark:bg-dark/50 p-3 rounded-lg transition-all hover:translate-x-1">
                <SiAdobeaftereffects className="text-purple-600 text-lg sm:text-xl" /> 
                <span>Adobe After Effect</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="mb-12 sm:mb-20 relative"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.div 
          className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold mb-2 text-center"
          {...fadeInUp}
        >
          Professional Experience
        </motion.h2>
        <motion.p 
          className="text-secondary text-center mx-auto max-w-2xl mb-8 sm:mb-12"
          {...fadeInUp}
          transition={{ delay: 0.1 }}
        >
          My journey in the industry
        </motion.p>
        <motion.div 
          className="max-w-4xl mx-auto space-y-6 sm:space-y-8 relative z-10 px-2 sm:px-0"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white/95 dark:bg-dark/70 p-6 sm:p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden"
            variants={slideInRight}
            {...cardHoverSmall}
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            <div className="flex flex-col sm:flex-row items-start">
              <div className="mb-4 sm:mb-0 sm:mr-6">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                  <FaBriefcase className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div className="hidden sm:block h-full w-px bg-gray-200 dark:bg-gray-700 mx-auto mt-4"></div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Full Stack Developer</h3>
                <p className="text-primary mb-4 inline-block bg-primary/10 px-3 py-1 rounded-full text-sm font-medium">Fastwork Technologies Indonesia • 2020 - Present</p>
                <ul className="text-secondary list-disc list-inside space-y-2 ml-2 sm:ml-4">
                  <li>Led development of multiple web applications using React and Node.js</li>
                  <li>Implemented CI/CD pipelines reducing deployment time by 50%</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white/90 dark:bg-dark/70 p-6 sm:p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden"
            variants={slideInLeft}
            {...cardHoverSmall}
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
            <div className="flex flex-col sm:flex-row items-start">
              <div className="mb-4 sm:mb-0 sm:mr-6">
                <div className="p-2 sm:p-3 bg-secondary/10 rounded-lg">
                  <FaBriefcase className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
                </div>
                <div className="hidden sm:block h-full w-px bg-gray-200 dark:bg-gray-700 mx-auto mt-4"></div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Frontend Developer</h3>
                <p className="text-secondary mb-4 inline-block bg-secondary/10 px-3 py-1 rounded-full text-sm font-medium">Fiverr • 2023 - Present</p>
                <ul className="text-secondary list-disc list-inside space-y-2 ml-2 sm:ml-4">
                  <li>Developed and maintained RESTful APIs</li>
                  <li>Built responsive user interfaces with modern JavaScript frameworks</li>
                  <li>Optimized database queries improving performance by 40%</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white/90 dark:bg-dark/70 p-6 sm:p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden"
            variants={slideInRight}
            {...cardHoverSmall}
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            <div className="flex flex-col sm:flex-row items-start">
              <div className="mb-4 sm:mb-0 sm:mr-6">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                  <FaBriefcase className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Project Designer</h3>
                <p className="text-primary mb-4 inline-block bg-primary/10 px-3 py-1 rounded-full text-sm font-medium">PT Graha Esa • 2024 - 2025</p>
                <ul className="text-secondary list-disc list-inside space-y-2 ml-2 sm:ml-4">
                  <li>Conduct high-quality photo and video coverage for every corporate event</li>
                  <li>As well as manage the content on social media platforms.</li>
                  <li>Fully responsible for the planning, design, development, and maintenance of the company&apos;s website</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="mb-12 sm:mb-20"
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold mb-2 text-center"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.p 
          className="text-secondary text-center mx-auto max-w-2xl mb-8 sm:mb-12"
          {...fadeInUp}
          transition={{ delay: 0.1 }}
        >
          Academic background
        </motion.p>
        <motion.div 
          className="max-w-3xl mx-auto px-2 sm:px-0"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white/90 dark:bg-dark/70 p-6 sm:p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-secondary" />
            <div className="flex flex-col sm:flex-row items-start">
              <div className="mb-4 sm:mb-0 sm:mr-6">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
                  <FaGraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Bachelor of Science in Computer Science</h3>
                <p className="text-primary mb-4 inline-block bg-primary/10 px-3 py-1 rounded-full text-sm font-medium">PKBM Himata • 2014 - 2018</p>
                <p className="text-secondary">
                  Graduated with honors. Focused on software engineering and web development.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Licenses and Certifications Section */}
      <motion.section 
        className="mb-12 sm:mb-20 relative"
        {...fadeIn}
        transition={{ delay: 0.7 }}
      >
        <motion.div 
          className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold mb-2 text-center"
          {...fadeInUp}
        >
          Lisensi dan Sertifikasi
        </motion.h2>
        <motion.p 
          className="text-secondary text-center mx-auto max-w-2xl mb-8 sm:mb-12"
          {...fadeInUp}
          transition={{ delay: 0.1 }}
        >
          Professional certifications and credentials
        </motion.p>
        <motion.div 
          className="max-w-4xl mx-auto space-y-6 sm:space-y-8 relative z-10 px-2 sm:px-0"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white/95 dark:bg-dark/70 p-6 sm:p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-secondary" />
            <div className="flex flex-col md:flex-row items-start gap-5 sm:gap-8">
              <div className="w-full md:w-1/3">
                <motion.img 
                  src="/sertifikat.jpeg" 
                  alt="HTB Certified Penetration Testing Specialist Certificate" 
                  className="w-full h-auto rounded-lg shadow-md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              <div className="w-full md:w-2/3">
                <div className="flex items-center mb-4">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mr-3 sm:mr-4">
                    <FaCertificate className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold">HTB Certified Penetration Testing Specialist</h3>
                </div>
                <p className="text-secondary mb-4 sm:mb-6 text-sm sm:text-base">
                  HTB Certified Penetration Testing Specialist (HTB CPTS) is a highly hands-on certification that assesses the candidates&apos; penetration testing skills.
                </p>
                <div className="space-y-3">
                  <p className="flex flex-col sm:flex-row sm:items-center text-sm">
                    <span className="font-semibold mr-2 mb-1 sm:mb-0">ID Kredensial:</span>
                    <span className="text-primary bg-primary/10 px-3 py-1 rounded-full text-xs break-all">
                      BMXsDqmdImr8WvvSUniDLlUnOHXXeWyKvc4G3g9YvGrDM0ocRZzFsF6yQY7S
                    </span>
                  </p>
                  <a 
                    href="https://labs.hackthebox.com/achievement/machine/2208854/395" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <FaLink className="mr-2" />
                    View Certification
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Resume Section */}
      <motion.section 
        className="mb-12 sm:mb-20 relative"
        {...fadeIn}
        transition={{ delay: 0.8 }}
      >
        <motion.div 
          className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold mb-2 text-center"
          {...fadeInUp}
        >
          Resume
        </motion.h2>
        <motion.p 
          className="text-secondary text-center mx-auto max-w-2xl mb-8 sm:mb-12"
          {...fadeInUp}
          transition={{ delay: 0.1 }}
        >
          My professional resume
        </motion.p>
        
        <motion.div 
          className="max-w-5xl mx-auto bg-white/95 dark:bg-dark/70 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden px-2 sm:px-0"
          variants={fadeInUp}
          {...cardHover}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Resume Image */}
            <div className="lg:w-1/2 relative overflow-hidden h-64 sm:h-80 lg:h-auto">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
              <motion.img 
                src="/Maulana_Jafar_Shodiq_resume.jpg" 
                alt="Maulana Jafar Shodiq Resume" 
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            
            {/* Resume Content */}
            <div className="lg:w-1/2 p-5 sm:p-8 lg:p-12 flex flex-col justify-center">
              <motion.div
                className="space-y-4 sm:space-y-6"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <motion.div variants={fadeInUp}>
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mr-3 sm:mr-4">
                      <FaFileAlt className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold">FullStack Developer | Graphics Designer</h3>
                  </div>
                  
                  <p className="text-secondary text-sm sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                    I&apos;m a Designer & Web Developer passionate about transforming concepts into visually compelling and functional designs that inspire, engage, and communicate powerful stories.
                  </p>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="mt-4 sm:mt-8">
                  <a 
                    href="https://drive.google.com/file/d/1xhRlqjrcxku8JUuuDYbccKxHGyHj-ZxX/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <FaDownload className="text-sm sm:text-base" /> 
                    <span>Download Resume</span>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
} 