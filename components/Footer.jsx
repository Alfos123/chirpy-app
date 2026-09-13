"use client";

import { useState } from "react";
import Link from "next/link";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <footer id="contact" className="w-full bg-[#020b18] text-slate-300 select-none">
        
        {/* Top CTA Banner Section */}
        <div className="relative bg-[#041126] py-20 px-4 sm:px-8 text-center border-b border-slate-800/80 overflow-hidden">
          {/* Subtle Hexagonal / Grid Pattern Background */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Start Your Professional Journey?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              Thousands of professionals have advanced their careers through Aspire. Whether you&apos;re just starting out or looking to sharpen your expertise, we have a program for you.
            </p>

            <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-[#d92626] hover:bg-red-700 text-white font-bold text-xs sm:text-sm tracking-widest uppercase px-8 py-3.5 rounded-xl shadow-lg hover:shadow-red-600/30 transition-all transform hover:-translate-y-0.5"
              >
                ENROL NOW
              </button>

              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-transparent hover:bg-slate-900/60 border border-slate-700/80 hover:border-slate-500 text-slate-200 font-bold text-xs sm:text-sm tracking-widest uppercase px-8 py-3.5 rounded-xl backdrop-blur-sm transition-all transform hover:-translate-y-0.5"
              >
                DOWNLOAD BROCHURE
              </button>
            </div>
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Column 1: Aspire Executive Institute */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Aspire Executive Institute
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Empowering global leaders through elite executive education and professional accounting excellence. Partnering with you for career-defining successes.
              </p>
            </div>

            {/* Column 2: NAVIGATION */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-200 tracking-wider uppercase">
                NAVIGATION
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="#home" className="text-slate-400 hover:text-white transition-colors block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-slate-400 hover:text-white transition-colors block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-slate-400 hover:text-white transition-colors block">
                    Professional Services
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-slate-400 hover:text-white transition-colors block">
                    Training and Consultancy
                  </Link>
                </li>
                <li>
                  <Link href="#bookstore" className="text-slate-400 hover:text-white transition-colors block">
                    Bookstore
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: PROGRAMS & TRAINING */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-200 tracking-wider uppercase">
                PROGRAMS &amp; TRAINING
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="#icag" className="text-slate-400 hover:text-white transition-colors block">
                    ICAG Professional
                  </Link>
                </li>
                <li>
                  <Link href="#corporate-training" className="text-slate-400 hover:text-white transition-colors block">
                    Corporate Training
                  </Link>
                </li>
                <li>
                  <Link href="#executive-training" className="text-slate-400 hover:text-white transition-colors block">
                    Executive Training
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: PARTNERSHIPS & APPS */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-200 tracking-wider uppercase">
                PARTNERSHIPS &amp; APPS
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Empowering global leaders through elite executive education and professional accounting excellence. Partnering with you for career-defining successes.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 bg-[#010712] py-6 px-6 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Aspire Executive Institute. All rights reserved.</p>
        </div>
      </footer>

      {/* Enquiry Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
