"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa6";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "ICAG Professional Program",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans select-none">
      <Navbar />

      {/* Top Hero Banner - Matching Screenshot 1 */}
      <section
        className="relative bg-cover bg-center text-white py-20 px-4 md:px-8 text-center bg-slate-900"
        style={{ backgroundImage: "url('/images/pp.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Connect with Aspire
          </h1>
          <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            We are here to support your professional journey. Reach out to our advisors for curriculum advice, corporate training proposals, or general queries.
          </p>
        </div>
      </section>

      {/* Main Two-Column Contact Section - Matching Screenshot 2 */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Headquarters (Dark Navy Card) */}
          <div className="lg:col-span-5 bg-[#051329] text-white rounded-[2rem] p-8 sm:p-10 shadow-xl space-y-8 border border-slate-800">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              Office Headquarters
            </h2>

            <div className="space-y-6 text-sm">
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-800/40 text-red-500 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-red-500 uppercase tracking-widest block">
                    LOCATION
                  </span>
                  <p className="text-slate-200 font-medium leading-snug">
                    Aspire Plaza, Kwabenya Estate Junction, Accra, Ghana
                  </p>
                </div>
              </div>

              {/* Admissions Line */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-800/40 text-red-500 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-red-500 uppercase tracking-widest block">
                    ADMISSIONS LINE
                  </span>
                  <p className="text-white font-bold text-base tracking-wide">
                    +233 54 719 3614
                  </p>
                </div>
              </div>

              {/* Email Inquiry */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-800/40 text-red-500 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-red-500 uppercase tracking-widest block">
                    EMAIL INQUIRY
                  </span>
                  <p className="text-slate-200 font-medium">
                    info@aspireproconsult.com
                  </p>
                </div>
              </div>
            </div>

            {/* Digital Presence Social Links */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
                DIGITAL PRESENCE
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-600 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-600 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-600 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-600 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Send an Enquiry (White Card Form) */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-gray-200/80 space-y-6">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Send an Enquiry
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Fill out the form below and an Aspire advisor will contact you within 24 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-green-900">Enquiry Submitted Successfully!</h3>
                <p className="text-xs text-green-700 max-w-md mx-auto">
                  Thank you for reaching out. An Aspire executive tuition advisor will contact you via email or phone shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-green-600 text-white px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-green-700 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Your Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ama Mensah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none text-sm text-gray-800 transition"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ama@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none text-sm text-gray-800 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +233 54 719 3614"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none text-sm text-gray-800 transition"
                    />
                  </div>

                  {/* Program of Interest */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                      PROGRAM OF INTEREST
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none text-sm text-gray-800 bg-white transition cursor-pointer"
                    >
                      <option value="ICAG Professional Program">ICAG Professional Program</option>
                      <option value="CITG Program">CITG Program</option>
                      <option value="CIMA Professional Programs">CIMA Professional Programs</option>
                      <option value="PMP Certifications">PMP Certifications</option>
                      <option value="Corporate Executive Training">Corporate Executive Training</option>
                    </select>
                  </div>
                </div>

                {/* Your Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none text-sm text-gray-800 resize-none transition"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-[#d92626] hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase px-8 py-3.5 rounded-xl shadow-md hover:shadow-red-600/30 transition-all transform hover:-translate-y-0.5"
                  >
                    SUBMIT ENQUIRY
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
