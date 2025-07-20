'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Function to generate avatar URL with Indonesian color themes (red and white)
const generateAvatarUrl = (name: string, index: number) => {
  // Alternate between Indonesian flag colors and batik-inspired colors
  const colors = [
    { bg: 'DD0000', fg: 'FFFFFF' }, // Indonesian flag red
    { bg: 'FFFFFF', fg: 'DD0000' }, // Indonesian flag white
    { bg: 'A67D3D', fg: 'FFFFFF' }, // Batik brown
    { bg: '006B3C', fg: 'FFFFFF' }, // Batik green
    { bg: '1C4966', fg: 'FFFFFF' }  // Batik blue
  ];
  
  const colorIndex = index % colors.length;
  const { bg, fg } = colors[colorIndex];
  
  return `https://ui-avatars.com/api/?name=${name.replace(/\s+/g, '+')}&background=${bg}&color=${fg}&size=256&bold=true`;
};

// Testimonial data in Indonesian with generated avatars
const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    position: 'CEO Teknologi Indonesia',
    image: generateAvatarUrl('Budi Santoso', 1),
    text: 'Saya sangat puas dengan website yang dibuat. Desainnya modern, responsif, dan sesuai dengan kebutuhan bisnis kami. Proses pengerjaan sangat profesional dan tepat waktu.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    position: 'Marketing Director Kreatif Digital',
    image: generateAvatarUrl('Siti Rahayu', 2),
    text: 'Kolaborasi dengan Maulana sangat menyenangkan. Ia sangat mengerti kebutuhan kami dan memberikan solusi yang tepat. Website yang dihasilkan melebihi ekspektasi kami.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ahmad Fauzi',
    position: 'Founder Startup Inovasi',
    image: generateAvatarUrl('Ahmad Fauzi', 3),
    text: 'Pengerjaan website sangat cepat dan hasil akhirnya luar biasa. Komunikasi lancar dan setiap revisi ditanggapi dengan baik. Pasti akan bekerja sama lagi untuk proyek berikutnya.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Dewi Lestari',
    position: 'Owner Butik Online',
    image: generateAvatarUrl('Dewi Lestari', 4),
    text: 'Website e-commerce yang dibuat sangat user-friendly dan menarik. Fitur-fiturnya lengkap dan sesuai kebutuhan bisnis fashion kami. Terima kasih atas kerja kerasnya!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Rudi Wijaya',
    position: 'CTO Fintech Solutions',
    image: generateAvatarUrl('Rudi Wijaya', 5),
    text: 'Kualitas kode yang ditulis sangat bersih dan terstruktur. Performa website sangat baik dan aman. Layanan after-sales juga memuaskan. Sangat direkomendasikan!',
    rating: 5,
  },
  // 10 more testimonials
  {
    id: 6,
    name: 'Anisa Putri',
    position: 'Creative Director Studio Desain',
    image: generateAvatarUrl('Anisa Putri', 6),
    text: 'Kemampuan desain dan coding Maulana benar-benar seimbang. Portfolio website yang dibuatkan untuk studio kami mendapatkan banyak pujian dari klien. Sangat worth it!',
    rating: 5,
  },
  {
    id: 7,
    name: 'Hendra Gunawan',
    position: 'Pemilik Restoran Nusantara',
    image: generateAvatarUrl('Hendra Gunawan', 7),
    text: 'Website restoran kami kini memiliki sistem reservasi online yang sangat membantu operasional. Pengunjung juga meningkat berkat tampilan website yang menarik dan mudah digunakan.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Maya Anggraini',
    position: 'Event Organizer Jakarta',
    image: generateAvatarUrl('Maya Anggraini', 8),
    text: 'Maulana berhasil membuat website yang bisa menampilkan portfolio event kami dengan sangat menarik. Loading time cepat dan animasinya smooth. Responsif untuk semua device!',
    rating: 5,
  },
  {
    id: 9,
    name: 'Doni Prasetyo',
    position: 'Product Manager Tech Startup',
    image: generateAvatarUrl('Doni Prasetyo', 9),
    text: 'Kami mencari developer yang bisa membuat landing page yang convert, dan Maulana berhasil melakukannya. Conversion rate meningkat 40% setelah website baru kami launch.',
    rating: 5,
  },
  {
    id: 10,
    name: 'Indah Permata',
    position: 'Influencer & Content Creator',
    image: generateAvatarUrl('Indah Permata', 10),
    text: 'Sebagai content creator, personal branding sangat penting. Website portfolio yang dibuat sangat mencerminkan personal brand saya dan membantu mendapatkan lebih banyak kolaborasi.',
    rating: 5,
  },
  {
    id: 11,
    name: 'Rizal Mahendra',
    position: 'CEO Agensi Digital',
    image: generateAvatarUrl('Rizal Mahendra', 11),
    text: 'Kami telah berkolaborasi dengan Maulana untuk beberapa proyek klien dan hasilnya selalu memuaskan. Pengetahuan teknisnya up-to-date dan selalu menghasilkan website berkualitas tinggi.',
    rating: 5,
  },
  {
    id: 12,
    name: 'Lina Susanti',
    position: 'Pemilik Toko Online',
    image: generateAvatarUrl('Lina Susanti', 12),
    text: 'Toko online saya kini memiliki pengalaman berbelanja yang menyenangkan bagi customer. Integrasi dengan sistem pembayaran juga lancar. Omset meningkat signifikan sejak website baru diluncurkan!',
    rating: 5,
  },
  {
    id: 13,
    name: 'Arif Wicaksono',
    position: 'Direktur Lembaga Pendidikan',
    image: generateAvatarUrl('Arif Wicaksono', 13),
    text: 'Website lembaga pendidikan kami kini memiliki sistem pendaftaran online yang efisien. Tampilan profesional dan informatif membuat kepercayaan orangtua calon siswa meningkat.',
    rating: 5,
  },
  {
    id: 14,
    name: 'Ratna Dewi',
    position: 'Manager Hotel & Resort',
    image: generateAvatarUrl('Ratna Dewi', 14),
    text: 'Booking engine yang terintegrasi dengan website hotel kami sangat membantu meningkatkan reservasi langsung. Desain yang elegan mencerminkan kualitas properti kami.',
    rating: 5,
  },
  {
    id: 15,
    name: 'Taufik Hidayat',
    position: 'Founder Komunitas Developer',
    image: generateAvatarUrl('Taufik Hidayat', 15),
    text: 'Maulana tidak hanya membuat website yang bagus, tapi juga membantu kami memahami proses pengembangannya. Kode yang ditulis sangat bersih dan terorganisir. Rekomendasi tinggi!',
    rating: 5,
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [imageError, setImageError] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Function to go to next slide
  const nextSlide = useCallback(() => {
    setCurrent(current => current === testimonials.length - 1 ? 0 : current + 1);
    setImageError(false); // Reset error state when changing slides
  }, []);

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    setImageError(false); // Reset error state when changing slides
  };

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    setCurrent(index);
    setImageError(false); // Reset error state when changing slides
  };

  // Handle autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, current, nextSlide]);

  // Pause autoplay on hover
  const pauseAutoplay = () => setAutoplay(false);
  const resumeAutoplay = () => setAutoplay(true);

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white/50 to-gray-50/50 dark:from-dark/50 dark:to-gray-900/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Testimoni Klien
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pendapat dan pengalaman dari klien yang telah bekerja sama dengan saya
          </p>
        </div>

        {/* Testimonials slider */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
          onTouchStart={pauseAutoplay}
          onTouchEnd={resumeAutoplay}
        >
          {/* Main carousel */}
          <div className="overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10 mb-10">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Client image - Updated with fallback */}
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20 flex-shrink-0 relative">
                      {imageError ? (
                        <div className="w-full h-full flex items-center justify-center bg-primary text-white text-2xl font-bold">
                          {testimonials[current].name.split(' ').map(name => name[0]).join('')}
                        </div>
                      ) : (
                        <Image 
                          src={testimonials[current].image}
                          alt={testimonials[current].name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                        />
                      )}
                    </div>
                    
                    {/* Testimonial content */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="mb-4 text-primary">
                        {[...Array(testimonials[current].rating)].map((_, i) => (
                          <FaStar key={i} className="inline-block mr-1" />
                        ))}
                      </div>
                      
                      <div className="relative">
                        <FaQuoteLeft className="absolute -top-4 -left-2 text-primary/20 text-4xl" />
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
                          {testimonials[current].text}
                        </p>
                        <FaQuoteRight className="absolute -bottom-4 -right-2 text-primary/20 text-4xl" />
                      </div>
                      
                      <div className="mt-8">
                        <h4 className="font-bold text-xl">{testimonials[current].name}</h4>
                        <p className="text-gray-500 dark:text-gray-400">{testimonials[current].position}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial counter */}
                <div className="absolute bottom-0 right-0 bg-primary text-white text-sm px-3 py-1 rounded-tl-lg rounded-br-lg font-medium">
                  {current + 1} / {testimonials.length}
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation arrows */}
            <button 
              className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={prevSlide}
            >
              <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={nextSlide}
            >
              <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dots navigation - improved for many testimonials */}
          <div className="flex justify-center mt-6 flex-wrap gap-2 max-w-md mx-auto">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === current 
                    ? 'w-6 h-6 bg-primary rounded-full text-xs text-white flex items-center justify-center'
                    : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {index === current && (index + 1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 