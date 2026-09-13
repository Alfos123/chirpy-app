"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Footer from "@/components/Footer";
import { FaGraduationCap } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { Smartphone, BookOpen, Briefcase, ExternalLink } from "lucide-react";

const intakeTabs = [
  {
    name: "ICAG INTAKE",
    title: "ICAG Professional Pathway",
    description:
      "Build a strong foundation in accounting, business strategy, and exam readiness with expert guidance designed for professional success.",
    image: "/images/pp.jpg",
    button: "Explore ICAG",
  },
  {
    name: "CITG INTAKE",
    title: "CITG Foundation to Practice",
    description:
      "Get structured support, practical insight, and an exam-focused roadmap that helps you move confidently through each CITG stage.",
    image: "/images/PP2.avif",
    button: "View CITG",
  },
  {
    name: "CIMG INTAKE",
    title: "CIMG Leadership Journey",
    description:
      "Prepare for management and leadership excellence with a learning experience that balances technical strength and strategic thinking.",
    image: "/images/chirpy1.webp",
    button: "Join CIMG",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const selectedTab = intakeTabs[activeTab];

  return (
    <main id="home">
      <Navbar />
      <HeroCarousel />

      <section className="-mt-1">
        <div className="flex flex-col md:flex-row gap-4 justify-evenly text-center bg-blue-900 text-white py-20">
          <div>
            <p className="text-3xl font-bold">2,000+</p>
            <p className="font-serif">STUDENT TRAINED</p>
          </div>
          <div>
            <p className="text-3xl font-bold">60+</p>
            <p className="font-serif">EXAM SUBJECTS</p>
          </div>
          <div>
            <p className="text-3xl font-bold">10+</p>
            <p className="font-serif">YEARS OF EXECELLENCE</p>
          </div>
          <div>
            <p className="text-3xl font-bold">3</p>
            <p className="font-serif">LEARNING PLATFORMS</p>
          </div>
        </div>
      </section>

      <section id="about" className="p-10">
        <div className="text-3xl font-bold text-center py-10">OUR PROGRAMS- BUILT FOR YOUR SUCCESS</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 px-4">
          {/* Card 1: ICAG */}
          <div id="icag" className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
            <FaGraduationCap className="text-5xl mb-4 p-2 text-red-700" />
            <h3 className="text-xl font-bold p-2 text-gray-900">ICAG Professional Program</h3>
            <p className="p-2 text-gray-600 text-sm leading-relaxed">
              The Institute of Chartered Accountants Ghana (ICAG) qualification is the gold standard for accounting professionals in Ghana. At Aspire, our expert tutors guide you through every level with proven teaching methods and exclusive CBE practice.
            </p>
            <Link href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wider uppercase px-4 py-2.5 rounded-lg mt-4 transition">
              LEARN MORE ABOUT ICAG
            </Link>
          </div>

          {/* Card 2: CITG */}
          <div id="citg" className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
            <IoBagCheckSharp className="text-5xl mb-4 p-2 text-red-700" />
            <h3 className="text-xl font-bold p-2 text-gray-900">CITG Program</h3>
            <p className="p-2 text-gray-600 text-sm leading-relaxed">
              The Chartered Institute of Taxation Ghana (CITG) qualification gives you practical taxation, statutory audit, and tax consulting expertise required by leading accounting firms.
            </p>
            <Link href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wider uppercase px-4 py-2.5 rounded-lg mt-4 transition">
              LEARN MORE ABOUT CITG
            </Link>
          </div>

          {/* Card 3: CIMA */}
          <div id="cima" className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
            <FaShoppingBag className="text-5xl mb-4 p-2 text-red-700" />
            <h3 className="text-xl font-bold p-2 text-gray-900">CIMA Professional Programs</h3>
            <p className="p-2 text-gray-600 text-sm leading-relaxed">
              The Chartered Institute of Management Accountants (CIMA) equips you for executive financial decision-making and strategic leadership in the modern digital economy.
            </p>
            <Link href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wider uppercase px-4 py-2.5 rounded-lg mt-4 transition">
              LEARN MORE ABOUT CIMA
            </Link>
          </div>

          {/* Card 4: PMP */}
          <div id="pmp" className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
            <FaChartBar className="text-5xl mb-4 p-2 text-red-700" />
            <h3 className="text-xl font-bold p-2 text-gray-900">PMP® Certifications</h3>
            <p className="p-2 text-gray-600 text-sm leading-relaxed">
              The Project Management Professional (PMP)® is the world&apos;s leading project management credential. Elevate your strategic team management and first-time exam pass rates.
            </p>
            <Link href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wider uppercase px-4 py-2.5 rounded-lg mt-4 transition">
              LEARN MORE ABOUT PMP
            </Link>
          </div>

          {/* Card 5: Corporate Training */}
          <div id="corporate-training" className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
            <FaCalendarCheck className="text-5xl mb-4 p-2 text-red-700" />
            <h3 className="text-xl font-bold p-2 text-gray-900">Corporate Training &amp; Consultancy</h3>
            <p className="p-2 text-gray-600 text-sm leading-relaxed">
              Custom executive workshops, corporate governance training, and financial analysis masterclasses tailored specifically for high-performing teams and corporate clients.
            </p>
            <Link href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wider uppercase px-4 py-2.5 rounded-lg mt-4 transition">
              EXPLORE CORPORATE TRAINING
            </Link>
          </div>
        </div>
      </section>

      {/* Student Resources Section */}
      <section id="services" className="py-10 px-4 md:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* Main Dark Navy CBE Platform Banner Card */}
          <div className="bg-[#051329] rounded-[2rem] px-6 py-8 md:px-10 md:py-9 shadow-2xl relative overflow-hidden text-white border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Text & Action */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-block bg-[#102847] border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-md shadow-sm">
                  EXAM SIMULATION
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  CBE Platform: Practice Exams Online
                </h2>
                
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl font-normal">
                  Practice in real exam conditions with hundreds of past questions and instant results. Build confidence and identify weak areas before test day.
                </p>
                
                <div className="pt-1">
                  <Link
                    href="https://cbe.aspiretuition.edu.gh"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-[#d92626] hover:bg-red-700 text-white font-bold text-xs md:text-sm tracking-wider uppercase px-6 py-3 rounded-xl shadow-xl hover:shadow-red-600/40 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>GO TO CBE PLATFORM</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Side Dashboard Preview Graphic */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md max-h-[270px] md:max-h-[310px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-slate-900 group">
                  <img
                    src="/images/cbe_dashboard.png"
                    alt="CBE Exam Simulation Dashboard"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 3 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            
            {/* Card 1: Aspire E-Learning App */}
            <div className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    Aspire E-Learning App
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Access Summary Notes, E-Learning Videos, and full curriculum content for ICAG and CITG subjects anywhere, anytime.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <button className="px-4 py-2 text-xs font-bold bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition">
                  APP STORE
                </button>
                <button className="px-4 py-2 text-xs font-bold bg-gray-100 text-gray-800 rounded-xl hover:bg-gray-200 transition">
                  GOOGLE PLAY
                </button>
              </div>
            </div>

            {/* Card 2: Bookstore */}
            <div id="bookstore" className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    Bookstore
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Order study texts, revision kits, and official curriculum materials online for delivery or campus collection.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="#bookstore"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-red-600 hover:text-red-700"
                >
                  <span>VISIT STORE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Job Portal */}
            <div className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    Job Portal
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Exclusive vacancies and internship placement opportunities in accounting, tax, and finance updated daily for graduates.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="#job-portal"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-red-600 hover:text-red-700"
                >
                  <span>BROWSE JOBS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center p-6 md:p-10">
            <h3 className="text-xl font-semibold text-red-500">Program Schedules & Flyers</h3>
            <h1 className="text-2xl font-bold p-2 md:text-4xl">Upcoming Diet Intake Schedules</h1>
            <p className="mx-auto max-w-2xl text-gray-600">
              Download and explore official intake timetables, class schedules, and lecture formats for our upcoming professional diets.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex w-full max-w-4xl flex-wrap justify-center gap-3 rounded-full border border-gray-200 bg-gray-50 p-2 shadow-sm">
              {intakeTabs.map((tab, index) => (
                <button
                  key={tab.name}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={[
                    "rounded-full px-6 py-3 text-sm font-bold tracking-wide transition-all duration-200 md:text-base",
                    activeTab === index
                      ? "bg-red-600 text-white shadow-md"
                      : "bg-transparent text-gray-700 hover:bg-white hover:text-red-600",
                  ].join(" ")}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-lg md:grid-cols-2 md:p-8">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
              <img src={selectedTab.image} alt={selectedTab.name} className="h-full min-h-[280px] w-full object-cover" />
            </div>

            <div className="flex flex-col justify-center p-2 md:p-4">
              <span className="mb-3 inline-flex w-fit rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-red-700">
                {selectedTab.name}
              </span>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                {selectedTab.title}
              </h2>
              <p className="mb-6 text-base leading-7 text-gray-700">
                {selectedTab.description}
              </p>
              <button className="w-fit rounded-md bg-blue-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
                {selectedTab.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <Footer />
    </main>
  );
}
