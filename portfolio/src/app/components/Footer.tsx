import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Ahmad Shaqqou</h3>
            <p className="mt-1">Software Engineer • UCF 2025</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/about#projects" className="transition">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/about#contact" className="transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/ahmadshaqqou" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/ahmad-shaqqou/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="/AhmadShaqqouResume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center md:text-left">
          <p className="text-sm">
            © {currentYear} Ahmad Shaqqou. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
