"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ShoppingBag, Menu, X } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileSection, setActiveMobileSection] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdowns = {
    about: {
      title: "About Us",
      items: [
        { label: "Our Institution", href: "#institution" },
        { label: "Gallery", href: "#gallery" },
        { label: "Hall of Fame", href: "#hall-of-fame" },
        { label: "Testimonials", href: "#testimonials" },
      ],
    },
    programs: {
      title: "Professional Programs",
      items: [
        { label: "ICAG Professional Program", href: "#icag" },
        { label: "CITG Program", href: "#citg" },
        { label: "CIMA Professional Programs", href: "#cima" },
        { label: "PMP Certifications", href: "#pmp" },
      ],
    },
    training: {
      title: "Training & Consultancy",
      items: [{ label: "Corporate Training", href: "#corporate-training" }],
    },
  };

  const toggleDropdown = (key) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  const toggleMobileSection = (key) => {
    setActiveMobileSection((prev) => (prev === key ? null : key));
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
        {/* Main Nav Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" ref={dropdownRef}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/images/logo.svg"
              alt="Aspire Executive Tuition"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                // Fallback to text logo if SVG fails to load
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="hidden items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-700 to-red-500 flex items-center justify-center text-white font-black text-xl shadow-md">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-gray-900 leading-none">
                  ASPIRE <span className="text-red-600">TUITION</span>
                </span>
                <span className="text-[10px] font-bold text-gray-500 tracking-wider uppercase">
                  Executive Education
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {/* Home Link (Red Accent) */}
            <Link
              href="/"
              className="relative py-2 text-red-600 font-bold tracking-wide flex items-center after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600 after:rounded-full"
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                onMouseEnter={() => setActiveDropdown("about")}
                className="flex items-center space-x-1.5 py-2 font-medium text-gray-700 hover:text-red-600 transition-colors focus:outline-none"
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "about" ? "rotate-180 text-red-600" : "text-gray-400"
                  }`}
                />
              </button>

              {activeDropdown === "about" && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-fadeIn"
                >
                  {dropdowns.about.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Professional Programs Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("programs")}
                onMouseEnter={() => setActiveDropdown("programs")}
                className="flex items-center space-x-1.5 py-2 font-medium text-gray-700 hover:text-red-600 transition-colors focus:outline-none"
              >
                <span>Professional Programs</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "programs" ? "rotate-180 text-red-600" : "text-gray-400"
                  }`}
                />
              </button>

              {activeDropdown === "programs" && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-fadeIn"
                >
                  {dropdowns.programs.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium transition-colors border-b border-gray-50 last:border-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Training & Consultancy Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("training")}
                onMouseEnter={() => setActiveDropdown("training")}
                className="flex items-center space-x-1.5 py-2 font-medium text-gray-700 hover:text-red-600 transition-colors focus:outline-none"
              >
                <span>Training & Consultancy</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "training" ? "rotate-180 text-red-600" : "text-gray-400"
                  }`}
                />
              </button>

              {activeDropdown === "training" && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-fadeIn"
                >
                  {dropdowns.training.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Bookstore Link */}
            <Link
              href="#bookstore"
              className="py-2 font-medium text-gray-700 hover:text-red-600 transition-colors"
            >
              Bookstore
            </Link>
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Shopping Bag Button */}
            <button
              aria-label="Shopping Bag"
              className="relative p-2.5 rounded-full text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors focus:outline-none"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow">
                0
              </span>
            </button>

            {/* Red Contact Us Button */}
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white rounded-full px-5 py-2 font-semibold shadow-md hover:shadow-red-600/30 transition-all text-sm tracking-wide inline-block"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              aria-label="Shopping Bag"
              className="relative p-2 rounded-full text-gray-700 hover:text-red-600"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
            {/* Home Link */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-bold text-red-600 bg-red-50 rounded-xl"
            >
              Home
            </Link>

            {/* Mobile About Us Accordion */}
            <div className="border-b border-gray-100 pb-2">
              <button
                onClick={() => toggleMobileSection("about")}
                className="w-full flex justify-between items-center px-3 py-2 text-base font-semibold text-gray-800 focus:outline-none"
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMobileSection === "about" ? "rotate-180 text-red-600" : "text-gray-400"
                  }`}
                />
              </button>
              {activeMobileSection === "about" && (
                <div className="pl-6 space-y-1 mt-1">
                  {dropdowns.about.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-600 hover:text-red-600"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Professional Programs Accordion */}
            <div className="border-b border-gray-100 pb-2">
              <button
                onClick={() => toggleMobileSection("programs")}
                className="w-full flex justify-between items-center px-3 py-2 text-base font-semibold text-gray-800 focus:outline-none"
              >
                <span>Professional Programs</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMobileSection === "programs" ? "rotate-180 text-red-600" : "text-gray-400"
                  }`}
                />
              </button>
              {activeMobileSection === "programs" && (
                <div className="pl-6 space-y-1 mt-1">
                  {dropdowns.programs.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-600 hover:text-red-600"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Training & Consultancy Accordion */}
            <div className="border-b border-gray-100 pb-2">
              <button
                onClick={() => toggleMobileSection("training")}
                className="w-full flex justify-between items-center px-3 py-2 text-base font-semibold text-gray-800 focus:outline-none"
              >
                <span>Training & Consultancy</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMobileSection === "training" ? "rotate-180 text-red-600" : "text-gray-400"
                  }`}
                />
              </button>
              {activeMobileSection === "training" && (
                <div className="pl-6 space-y-1 mt-1">
                  {dropdowns.training.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-sm text-gray-600 hover:text-red-600"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Bookstore */}
            <Link
              href="#bookstore"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-gray-800 hover:text-red-600"
            >
              Bookstore
            </Link>

            {/* Mobile Red Contact Us Button */}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full py-3 font-semibold shadow-md text-center text-sm block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Contact Modal Triggered from Nav */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
