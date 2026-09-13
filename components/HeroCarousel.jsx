"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import ContactModal from "./ContactModal";

const slides = [
  {
    id: 1,
    badge: "BEST PMP TRAINING PARTNER IN GHANA AND AFRICA.",
    title: "Smart Technology. Expert Tuition. Proven Pathways to First-Time PMP Success.",
    description:
      "The Project Management Professional (PMP)® is the world's leading project management certification. Elevate your strategic capabilities, lead teams effectively, and drive business transformation.",
    primaryButton: "EXPLORE PMP PROGRAM",
    primaryHref: "#pmp",
    image: "/images/hero_grad_1.png",
  },
  {
    id: 2,
    badge: "BEST CIMA TRAINING PARTNER IN GHANA",
    title: "Master Financial Leadership & Strategic Management with CIMA.",
    description:
      "The Chartered Institute of Management Accountants (CIMA) equips you for executive decision-making and modern business leadership in the digital era.",
    primaryButton: "EXPLORE CIMA PROGRAMS",
    primaryHref: "#cima",
    image: "/images/hero_grad_2.png",
  },
  {
    id: 3,
    badge: "GOLD STANDARD ICAG TUITION IN GHANA",
    title: "Empowering Future Chartered Accountants with Exam-Focused Support.",
    description:
      "Pass ICAG exams on your first attempt with real online CBE practice platforms, structured revision masterclasses, and expert tutor guidance.",
    primaryButton: "EXPLORE ICAG PROGRAM",
    primaryHref: "#icag",
    image: "/images/hero_grad_3.png",
  },
  {
    id: 4,
    badge: "CITG & EXECUTIVE CORPORATE TRAINING",
    title: "Advance Your Career with Certified Professional Expertise.",
    description:
      "Gain practical taxation, audit, and corporate governance mastery designed specifically for high-performing professionals and executives.",
    primaryButton: "EXPLORE CITG & CORPORATE",
    primaryHref: "#corporate-training",
    image: "/images/hero_grad_4.png",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <>
      <section
        className="relative w-full min-h-[580px] md:min-h-[640px] flex items-center justify-center overflow-hidden bg-slate-950 text-white select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Image Carousel Slides */}
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-10000 ease-out"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/50" />
          </div>
        ))}

        {/* Content Container */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 py-16 text-center flex flex-col items-center justify-center space-y-6">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center space-x-2 bg-red-950/80 border border-red-700/60 text-red-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-lg animate-fadeIn">
            <Award className="w-4 h-4 text-red-500" />
            <span>{slides[currentSlide].badge}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl leading-tight text-shadow drop-shadow-md">
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl font-normal leading-relaxed text-shadow-sm">
            {slides[currentSlide].description}
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            {/* Primary Red Button */}
            <a
              href={slides[currentSlide].primaryHref}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase px-7 py-3.5 rounded-xl shadow-xl hover:shadow-red-600/40 transition-all transform hover:-translate-y-0.5"
            >
              {slides[currentSlide].primaryButton}
            </a>

            {/* Secondary Bookstore Button */}
            <a
              href="#bookstore"
              className="bg-slate-900/60 hover:bg-slate-900/90 text-white border border-white/30 font-bold text-sm tracking-wider uppercase px-7 py-3.5 rounded-xl backdrop-blur-md transition-all hover:border-white/60 transform hover:-translate-y-0.5"
            >
              VISIT BOOKSTORE
            </a>

            {/* Make Enquiry Button */}
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-slate-900/60 hover:bg-slate-900/90 text-white border border-white/30 font-bold text-sm tracking-wider uppercase px-7 py-3.5 rounded-xl backdrop-blur-md transition-all hover:border-white/60 transform hover:-translate-y-0.5"
            >
              MAKE ENQUIRY
            </button>
          </div>

          {/* Bottom Carousel Indicator Dots (Pill indicators just like in reference image) */}
          <div className="pt-8 flex items-center justify-center space-x-2">
            <div className="bg-slate-900/70 border border-white/10 px-4 py-2 rounded-full flex items-center space-x-2.5 backdrop-blur-md shadow-inner">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-all duration-300 focus:outline-none ${
                    idx === currentSlide
                      ? "w-8 h-2.5 bg-red-600 rounded-full shadow-md"
                      : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70 rounded-full"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Previous Slide Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-30 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white backdrop-blur-md transition-all hidden sm:flex items-center justify-center border border-white/10"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Slide Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 z-30 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white backdrop-blur-md transition-all hidden sm:flex items-center justify-center border border-white/10"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* Contact Modal Triggered by Enquiry Button */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
