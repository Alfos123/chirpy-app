"use client";

import Navbar from "@/components/Navbar";
import { Award, BookOpen, Users, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-red-500 font-bold uppercase tracking-widest text-sm">
            About Aspire Executive Tuition
          </span>
          <h1 className="text-4xl md:text-5xl font-black">
            Pioneering Professional Excellence in Ghana
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Empowering accountants, tax practitioners, finance managers, and project leaders with world-class tuition and digital learning tools.
          </p>
        </div>
      </section>

      {/* Institution Info */}
      <section id="institution" className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Our Institution</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
            Over a Decade of Premier Professional Education
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Aspire Executive Tuition is Ghana’s leading professional tuition provider for ICAG, CITG, CIMA, and PMP qualifications. Our proven methodology combines experienced practitioner-tutors, computer-based exam stimulation, and comprehensive study packs.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-gray-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span>Highest exam pass rates across ICAG and CIMA diets</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span>State-of-the-art Computer-Based Exam (CBE) testing platform</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span>Flexible weekend, weekday, and online e-learning options</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          <img
            src="/images/chirpy1.webp"
            alt="Aspire Tuition Institution"
            className="w-full h-80 object-cover"
          />
        </div>
      </section>

      {/* Hall of Fame & Testimonials */}
      <section id="hall-of-fame" className="bg-white py-16 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Hall of Fame & Achievements</h2>
            <p className="text-gray-600 mt-2">Celebrating our overall best students and prize winners across professional diets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200 text-center">
              <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900">Top ICAG Graduate</h3>
              <p className="text-gray-600 text-sm mt-2">Overall Best Student in Financial Management & Strategic Case Study.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200 text-center">
              <BookOpen className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900">CIMA Global Recognition</h3>
              <p className="text-gray-600 text-sm mt-2">Premier CIMA tuition partner with consistent first-time pass rates.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200 text-center">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900">2,000+ Alumni</h3>
              <p className="text-gray-600 text-sm mt-2">Alumni leading finance and executive positions across West Africa.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
