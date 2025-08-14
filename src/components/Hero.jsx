"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import background from "@/public/background-gradient.png";
import CvMockup from "@/public/cv.png";
import Navbar from "@/components/landing/Navbar";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section className=" min-h-screen overflow-hidden">
        {/* Background */}
        <Image
          src={background}
          alt="Background"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute top-10 left-0 w-full h-full z-10 ">
          <Navbar />
        </div>
        {/* Main container con padding consistente */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-32 ">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
            {/* Content Column */}
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl sm:text-5xl mb-6 mr-4"
              >
                Find Remote Work. <br />
                <span className="relative font-bold ">
                  Land Your Dream Job.
                  {/* SVG underline animation */}
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl italic text-black/80 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Access 1M+ remote opportunities worldwide and AI-powered tools
                to accelerate your path to senior remote roles.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                <button className="group px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-3xl shadow-lg transition-all duration-200 flex items-center gap-2 ">
                  Get Started
                  <span className=" transition-transform duration-200 group-hover:translate-x-1.5 ">
                    →
                  </span>
                </button>

                <div className="border-2 border-dashed border-gray-300/50 rounded-xl px-6 py-4 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm hover:from-white/95 hover:to-gray-50/95 transition-all duration-300 cursor-pointer group shadow-lg">
                  <div className="flex items-center gap-4">
                    {/* Score Circle */}
                    <div className="relative w-16 h-16">
                      <svg
                        className="w-16 h-16 transform -rotate-90"
                        viewBox="0 0 36 36"
                      >
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="url(#scoreGradient)"
                          strokeWidth="2"
                          strokeDasharray="0, 100"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient
                            id="scoreGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#ef4444" />
                            <stop offset="50%" stopColor="#f97316" />
                            <stop offset="100%" stopColor="#22c55e" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                          0
                        </span>
                      </div>
                    </div>

                    {/* Upload Content */}
                    <div className="flex flex-col">
                      <h3 className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-1">
                        Import your resume
                      </h3>
                      <p className="text-sm text-gray-600">
                        <span className="text-blue-600 font-medium">Click</span>{" "}
                        or{" "}
                        <span className="text-blue-600 font-medium">drop</span>{" "}
                        your resume to start
                      </p>
                    </div>
                  </div>

                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".pdf,.doc,.docx"
                  />
                </div>
              </motion.div>
            </div>

            <Image
              src={CvMockup}
              alt="CV Mockup"
              className="object-cover hidden md:block w-full h-full"
              width={1000}
              height={1000}
            />

            {/* Upload Column */}
          </div>
        </div>
      </section>
    </>
  );
}
