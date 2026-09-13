"use client";

import Navbar from "@/components/Navbar";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-linear-to-r from-red-800 via-red-700 to-slate-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-red-200 font-semibold uppercase tracking-widest text-xs">Get In Touch</span>
          <h1 className="text-4xl font-black">Contact Tuition Advisory</h1>
          <p className="text-red-100 text-base max-w-xl mx-auto">
            Have questions regarding ICAG, CITG, CIMA, or PMP admissions? Our advisors are here to help.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Campus & Office Information</h2>
          <div className="space-y-4 text-gray-600 text-sm">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800">Accra Main Campus</p>
                <p>Ring Road East, Danquah Circle, Osu, Accra, Ghana</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-red-600 shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">Direct Lines</p>
                <p>+233 30 290 0000 / +233 24 400 1122</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-red-600 shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">Email Support</p>
                <p>admissions@aspiretuition.edu.gh</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800">Office Hours</p>
                <p>Mon - Fri: 8:00 AM - 6:00 PM | Sat: 8:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Message</label>
              <textarea
                rows={3}
                placeholder="How can we assist you?"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition shadow-md"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
