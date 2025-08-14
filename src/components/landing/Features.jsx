"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      title: "Attract - CRM",
      subtitle:
        "Easily find talented candidates with AI ML-driven search and candidate matching tools.",
      icon: "👥",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-100",
      iconBg: "bg-blue-500",
    },
    {
      title: "Convert - Experience",
      subtitle:
        "Streamline your hiring process with seamless experience for both candidates and teams.",
      icon: "⚡",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-100",
      iconBg: "bg-pink-500",
    },
    {
      title: "Manage - ATS",
      subtitle:
        "Organize and track all your candidates with powerful applicant tracking tools.",
      icon: "📊",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-100",
      iconBg: "bg-orange-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
            Featured Features
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4 max-w-2xl"
          >
            Empower your hiring: explore{" "}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              all-in-one
            </span>{" "}
            platform.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-neutral-600 max-w-2xl mb-8"
          >
            We make hiring simple by providing modern core technologies
            specifically designed to make your hiring process more efficient.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-4"
          >
            <button className="px-6 py-3 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors">
              Try it for free
            </button>
            <button className="px-6 py-3 text-neutral-700 font-semibold hover:text-neutral-900 transition-colors">
              Watch Video
            </button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-accent-200 to-accent-300 rounded-full opacity-20 blur-3xl"></div>
          </div>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-white border border-neutral-200 rounded-3xl p-8 hover:border-neutral-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}
                  />

                  {/* Icon container */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div
                      className={`w-8 h-8 ${feature.iconBg} rounded-lg flex items-center justify-center text-white text-lg`}
                    >
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-neutral-600 leading-relaxed">
                    {feature.subtitle}
                  </p>

                  {/* Arrow icon */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r ${feature.color} rounded-full`}
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17l9.2-9.2M17 17V7H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom illustration area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 text-center"
        ></motion.div>
      </div>
    </section>
  );
}
