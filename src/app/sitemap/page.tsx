"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SitemapPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const links = [
    { url: "/", title: "Home", description: "Main page of the website" },
    { url: "/about", title: "About", description: "Information about the author/company" },
    { url: "/projects", title: "Projects", description: "Portfolio of projects" },
    { url: "/blogs", title: "Blogs", description: "Blog articles and posts" },
    { url: "/contact", title: "Contact", description: "Contact information and form" },
    { url: "/privacy-policy", title: "Privacy Policy", description: "Privacy policy details" },
    { url: "/terms-of-service", title: "Terms of Service", description: "Terms of service information" },
  ];

  return (
    <main className="w-full flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className={`w-full max-w-4xl ${isMobile ? 'space-y-6' : 'space-y-8'}`}>
        <h1 className={`text-center font-bold ${isMobile ? 'text-2xl' : 'text-4xl'}`}>
          Sitemap
        </h1>
        
        <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <ul className="space-y-4">
              {links.map((link, index) => (
                <li key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
                  <Link 
                    href={link.url} 
                    className="block hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded-md p-2"
                  >
                    <h2 className={`font-semibold ${isMobile ? 'text-lg' : 'text-xl'} text-primary dark:text-primary-dark`}>
                      {link.title}
                    </h2>
                    <p className={`text-gray-600 dark:text-gray-300 ${isMobile ? 'text-sm' : 'text-base'} mt-1`}>
                      {link.description}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {link.url}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 