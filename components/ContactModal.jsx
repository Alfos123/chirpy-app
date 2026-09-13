"use client";

import { useState, useEffect } from "react";
import { X, Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "ICAG Professional Program",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "ICAG Professional Program",
        message: "",
      });
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 z-10 transform transition-all">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 p-6 text-white flex justify-between items-center relative">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-red-200">
              Aspire Executive Tuition
            </span>
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition-colors text-white focus:outline-none"
            aria-label="Close Modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
              <h3 className="text-2xl font-bold text-gray-800">Thank You!</h3>
              <p className="text-gray-600 max-w-xs">
                Your message has been received. Our tuition advisory team will reach out to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kwame Mensah"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="kwame@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+233 24 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Program of Interest
                </label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition text-sm bg-white"
                >
                  <option value="ICAG Professional Program">ICAG Professional Program</option>
                  <option value="CITG Program">CITG Program</option>
                  <option value="CIMA Professional Programs">CIMA Professional Programs</option>
                  <option value="PMP Certifications">PMP Certifications</option>
                  <option value="Corporate Training">Corporate Training</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Your Message
                </label>
                <textarea
                  rows={3}
                  placeholder="How can we assist your professional journey?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition text-sm resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-gray-900 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm rounded-xl shadow-lg hover:shadow-red-600/30 transition-all flex items-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer Contact Info */}
        <div className="bg-gray-50 border-t border-gray-100 px-6 py-3 flex flex-wrap justify-between items-center text-xs text-gray-500">
          <span className="flex items-center space-x-1">
            <Phone className="w-3.5 h-3.5 text-red-600" />
            <span>+233 30 290 0000</span>
          </span>
          <span className="flex items-center space-x-1">
            <Mail className="w-3.5 h-3.5 text-red-600" />
            <span>info@aspiretuition.edu.gh</span>
          </span>
        </div>
      </div>
    </div>
  );
}
