"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      title: "Sube tu CV o empieza desde cero",
      description: "Arrastra tu CV actual o crea uno nuevo con nuestra IA. Analizamos tu experiencia en segundos.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      color: "from-primary-500 to-accent-500",
    },
    {
      number: "02",
      title: "IA encuentra trabajos perfectos",
      description: "Nuestro algoritmo analiza miles de vacantes y encuentra las que mejor se ajustan a tu perfil.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-accent-500 to-electric-600",
    },
    {
      number: "03",
      title: "Optimización automática de CV",
      description: "Adaptamos tu CV para cada vacante, usando las palabras clave correctas para pasar los filtros ATS.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      color: "from-electric-600 to-primary-500",
    },
    {
      number: "04",
      title: "Aplicamos mientras duermes",
      description: "Aplicamos automáticamente a los trabajos que elijas. Tú solo espera las llamadas para entrevistas.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-primary-500 to-electric-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4"
          >
            Conseguir trabajo nunca fue{" "}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              tan fácil
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            4 simples pasos que transformarán tu búsqueda de empleo
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-200 via-accent-200 to-electric-200 hidden lg:block" />

          <div className="space-y-12 lg:space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className={`inline-flex items-center gap-4 mb-4 ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}>
                    <span className={`text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 max-w-md mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>

                {/* Icon circle */}
                <div className="relative">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${step.color} p-0.5`}>
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <div className={`bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} blur-xl opacity-20`} />
                </div>

                {/* Placeholder for balance */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
            Empieza ahora - Es gratis
          </button>
          <p className="mt-4 text-sm text-neutral-500">
            No necesitas tarjeta de crédito • Cancela cuando quieras
          </p>
        </motion.div>
      </div>
    </section>
  );
}