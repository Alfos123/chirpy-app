"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, X, ExternalLink } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Kwaku Mensah, CA",
    program: "ICAG Professional Graduate",
    role: "Senior Financial Analyst at Stanbic Bank",
    badge: "ICAG Overall Best",
    rating: 5,
    quote:
      "Aspire's exam-focused tuition and CBE practice platforms were the ultimate game changer for me. I passed all my final ICAG papers on my first attempt!",
    fullStory:
      "Enrolling at Aspire Executive Tuition for my ICAG qualification was the best decision of my professional life. The tutors are practicing Chartered Accountants who understand exam structures inside out. The CBE platform matched the official exam interface perfectly, removing all test-day anxiety. I strongly recommend Aspire to anyone serious about becoming a Chartered Accountant.",
    avatarBg: "from-red-600 to-red-800",
    initials: "KM",
  },
  {
    id: 2,
    name: "Abena Osei, PMP®",
    program: "PMP Certification Alumni",
    role: "Lead Project Manager at MTN Ghana",
    badge: "First-Time Pass",
    rating: 5,
    quote:
      "The structured 4-week PMP prep course gave me the exact tools and confidence needed to clear the PMP exam on my very first try.",
    fullStory:
      "The PMP weekend lectures at Aspire were engaging, practical, and highly focused. The study guides, cheat sheets, and 1,000+ simulation question bank helped me score 'Above Target' across all domains. The mentorship provided even after classes ended made a huge difference.",
    avatarBg: "from-blue-600 to-slate-900",
    initials: "AO",
  },
  {
    id: 3,
    name: "Emmanuel K. Addo, ACMA",
    program: "CIMA Management Pathway",
    role: "Management Accountant at Tullow Oil",
    badge: "CIMA Distinction",
    rating: 5,
    quote:
      "As a busy working executive, flexible e-learning was essential. Aspire delivered top-tier CIMA tuition with unmatched tutor access.",
    fullStory:
      "Balancing a demanding executive job with CIMA preparation seemed daunting until I joined Aspire. Their recorded lectures, summary notes, and mobile app allowed me to revise on the go. The case study workshops gave me the exact strategy needed to pass the Strategic Case Study exam.",
    avatarBg: "from-[#051329] to-red-700",
    initials: "EA",
  },
  {
    id: 4,
    name: "Grace Kyeremeh, CITG",
    program: "Chartered Tax Practitioner",
    role: "Tax Consultant at Deloitte Ghana",
    badge: "Taxation Specialist",
    rating: 5,
    quote:
      "Hands-down the premier professional tuition center in Ghana. The faculty consists of seasoned practitioners who bring real-world clarity.",
    fullStory:
      "Tax law requires practical context, not just rote learning. Aspire's taxation lecturers brought real corporate tax scenarios into the classroom, making complex statutory provisions easy to understand and apply. I cleared my CITG papers with top marks!",
    avatarBg: "from-emerald-700 to-slate-900",
    initials: "GK",
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused || selectedStory) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused, selectedStory]);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-slate-50 border-t border-gray-100 select-none">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Section from User Screenshot */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-red-600 font-bold uppercase text-xs md:text-sm tracking-widest block">
            ALUMNI SUCCESS STORIES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            What Our Students &amp; Alumni Say
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed pt-1">
            Click any testimonial card to expand and view full success stories from our ICAG, CIMA, and PMP graduates.
          </p>
          <div className="w-14 h-1.5 bg-red-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards Grid / Display (Showing 2 cards on desktop, 1 on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {[0, 1].map((offset) => {
              const itemIndex = (currentIndex + offset) % testimonials.length;
              const item = testimonials[itemIndex];
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedStory(item)}
                  className="bg-white border border-gray-200/90 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 group transform hover:-translate-y-1 relative"
                >
                  {/* Top Quote Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-red-50 text-red-700 text-xs font-bold px-3 py-1 rounded-full border border-red-100 uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <Quote className="w-8 h-8 text-red-100 group-hover:text-red-500 transition-colors" />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Main Short Quote */}
                  <p className="text-gray-800 text-base md:text-lg font-semibold leading-snug group-hover:text-slate-900 transition-colors">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  {/* Click to expand prompt */}
                  <div className="text-xs font-bold text-red-600 flex items-center gap-1 group-hover:underline pt-2">
                    <span>Read Full Success Story</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>

                  {/* Author Profile Footer */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.avatarBg} text-white font-black text-base flex items-center justify-center shadow-md shrink-0`}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs font-semibold text-red-600">{item.program}</p>
                      <p className="text-xs text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows & Indicators */}
          <div className="flex items-center justify-between pt-8 max-w-xs mx-auto">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white border border-gray-200 hover:border-red-600 text-gray-700 hover:text-red-600 shadow-sm transition-all hover:scale-105 focus:outline-none"
              aria-label="Previous Testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pill Indicator Dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 h-2.5 bg-red-600 rounded-full shadow-sm"
                      : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400 rounded-full"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white border border-gray-200 hover:border-red-600 text-gray-700 hover:text-red-600 shadow-sm transition-all hover:scale-105 focus:outline-none"
              aria-label="Next Testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Testimonial Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl relative space-y-6 border border-gray-100 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-800 hover:bg-gray-100 transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Profile Header */}
            <div className="flex items-center space-x-4 pr-8">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${selectedStory.avatarBg} text-white font-black text-lg flex items-center justify-center shadow-lg shrink-0`}
              >
                {selectedStory.initials}
              </div>
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                  {selectedStory.program}
                </span>
                <h3 className="text-xl font-extrabold text-gray-900">{selectedStory.name}</h3>
                <p className="text-xs text-gray-500 font-medium">{selectedStory.role}</p>
              </div>
            </div>

            {/* Rating Stars */}
            <div className="flex items-center space-x-1">
              {[...Array(selectedStory.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Full Story Content */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p className="font-bold text-slate-900 text-base italic border-l-4 border-red-600 pl-4 py-1 bg-red-50/50 rounded-r-lg">
                &ldquo;{selectedStory.quote}&rdquo;
              </p>
              <p className="text-gray-600">{selectedStory.fullStory}</p>
            </div>

            {/* Footer Action */}
            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setSelectedStory(null)}
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-xl transition"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
