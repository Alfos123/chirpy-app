"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import { FaGraduationCap } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { MdPhoneAndroid } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";

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

export default function Home(){
  const [activeTab, setActiveTab] = useState(0);
  const selectedTab = intakeTabs[activeTab];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroCarousel />
      <section className="-mt-1">
          <div  className="flex flex-col md:flex-row gap-4 justify-evenly text-center bg-blue-900 text-white py-20">
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
            <p className="font-serif">LEARNING PLATFORMS </p>
          </div>
          </div>
        </section>
        <section className="p-10">
          <div className="text-3xl font-bold text-center py-10">OUR PROGRAMS- BUILT FOR YOUR SUCCESS</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4  py-10 px-4">

            <div className="p-4 rounded-lg border-1 border-gray-300">
              <FaGraduationCap className="text-5xl mx-auto mb-4 p-2 text-red-700" />
              <h3 className="text-xl font-bold p-2">ICAG Professional Program</h3>
              <p className="p-2">
                The Institute of Chartered Accountants Ghana (ICAG) qualification is the gold standard for accounting professionals in Ghana. At Aspire, our expert tutors guide you through every level with proven teaching methods and exclusive CBE practice.
              </p>
              <button className="bg-red-600 text-white px-4q py-2 rounded mt-4">LEARN MORE ABOUT ICAG</button>
            </div>

            <div className="p-4 rounded-lg border-1 border-gray-300">
             <IoBagCheckSharp className="text-5xl mx-auto mb-4 p-2 text-red-700" />
              <h3 className="text-xl font-bold p-2">ICAG Professional Program</h3>
              <p className=" p-2">
                The Institute of Chartered Accountants Ghana (ICAG) qualification is the gold standard for accounting professionals in Ghana. At Aspire, our expert tutors guide you through every level with proven teaching methods and exclusive CBE practice.
              </p>
              <button className="bg-red-600 text-white px-4 py-2 rounded mt-4">LEARN MORE ABOUT ICAG</button>
            </div>

            <div className="p-4 rounded-lg border-1 border-gray-300">
             <FaShoppingBag className="text-5xl mx-auto mb-4 p-2 text-red-700" />
              <h3 className="text-xl font-bold p-2">ICAG Professional Program</h3>
              <p className=" p-2">
                The Institute of Chartered Accountants Ghana (ICAG) qualification is the gold standard for accounting professionals in Ghana. At Aspire, our expert tutors guide you through every level with proven teaching methods and exclusive CBE practice.
              </p>
              <button className="bg-red-600 text-white px-4 py-2 rounded mt-4">LEARN MORE ABOUT ICAG</button>
            </div>

            <div className="p-4 rounded-lg border-1 border-gray-300">
              <FaChartBar  className="text-5xl mx-auto mb-4 p-2 text-red-700" />
              <h3 className="text-xl font-bold p-2">ICAG Professional Program</h3>
              <p className=" p-2">
                The Institute of Chartered Accountants Ghana (ICAG) qualification is the gold standard for accounting professionals in Ghana. At Aspire, our expert tutors guide you through every level with proven teaching methods and exclusive CBE practice.
              </p>
              <button className="bg-red-600 text-white px-4 py-2 rounded mt-4">LEARN MORE ABOUT ICAG</button>
            </div>

            <div className="p-4 rounded-lg border-1 border-gray-300">
              <FaCalendarCheck className="text-5xl mx-auto mb-4 p-2 text-red-700"/>
              <h3 className="text-xl font-bold p-2">ICAG Professional Program</h3>
              <p className=" p-2">
                The Institute of Chartered Accountants Ghana (ICAG) qualification is the gold standard for accounting professionals in Ghana. At Aspire, our expert tutors guide you through every level with proven teaching methods and exclusive CBE practice.
              </p>
              <button className="bg-red-600 text-white px-4 py-2 rounded mt-4 ">LEARN MORE ABOUT ICAG</button>
            </div>

          </div>
        </section>
        <section className="p-10 bg-blue-50">
          <div classame="text-center">
            <h2 className="text-4xl font-bold text-center ">Student Resources</h2>
            <p className="text-center p-6">
              Everything you need to succeed — in one place. Aspire equips every student with powerful tools beyond the classroom.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4  py-10 px-4 bg-blue-950 rounded-2xl">
            <div>
              <button className="bg-green-300 text-white px-4 py-2 rounded mt-4 p-2">EXAM STIMULATION</button>
              <h4 className="text-xl font-bold p-2 text-white">CBE Platform: Practice Exams Online</h4>
              <p className="p-2 text-white">Practice in real exam conditions with hundreds of past questions and instant results. Build confidence and identify weak areas before test day.</p>
              <button className="bg-green-300 text-white px-4 py-2 rounded mt-4">GO TO CBE PLARTFORM </button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-48 md:h-64">
              <img
                src="/images/PP2.avif"
                alt="Student resources"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        <section className="p-10 bg-blue-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-300 p-5 rounded-lg bg-white shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <MdPhoneAndroid className="text-3xl text-blue-700" />
                <p className="text-lg font-semibold">Aspire E-Learning App</p>
              </div>
              <h2 className="text-base text-gray-700">
                Access Summary Notes, E-Learning Videos, and full curriculum content for ICAG and CITG subjects anywhere, anytime.
              </h2>
              <div className="flex flex-wrap gap-3 mt-auto">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">APPSTORE</button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded">GOOGLE PLAY</button>
              </div>
            </div>

            <div className="border border-gray-300 p-5 rounded-lg bg-white shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <FaBookOpen className="text-3xl text-red-700" />
                <p className="text-lg font-semibold">Bookstore</p>
              </div>
              <h2 className="text-base text-gray-700">
                Order study texts and revision kits online for delivery or collection.
              </h2>
              <button className="text-red-500 font-semibold px-4 py-2 rounded mt-auto w-fit">VISIT STORE</button>
            </div>

            <div className="border border-gray-300 p-5 rounded-lg bg-white shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <IoBagRemoveOutline className="text-3xl text-red-700" />
                <p className="text-lg font-semibold">JOB PORTAL</p>
              </div>
              <h2 className="text-base text-gray-700">
                Exclusive vacancies in accounting and finance updated daily for graduates.
              </h2>
              <button className="text-red-500 font-semibold px-4 py-2 rounded mt-auto w-fit">BROWSE JOB</button>
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
                <img
                  src={selectedTab.image}
                  alt={selectedTab.name}
                  className="h-full min-h-[280px] w-full object-cover"
                />
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
    </main>
  )
}