"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "./Navbar";
import Background from "@/public/background-gradient.png";
import Image from "next/image";

export default function Hero() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const inputRef = useRef(null);
  const { t } = useLanguage();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    setFile(file);
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-neutral-50">
      {/* Animated gradient background */}
      <Image src={Background} alt="Background" fill className="absolute  " />

      <div className="absolute left-0 top-0 w-full h-auto z-30 pointer-events-auto">
        <Navbar />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-sm text-primary-700 font-medium">
              +10,000 {t("hero.users")}
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-neutral-900 mb-6 leading-tight"
          >
            {t("hero.title1")}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary-500 via-accent-500 to-electric-600 bg-clip-text text-transparent">
                {t("hero.title2")}
              </span>
            </span>
            <br />
            {t("hero.title3")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Upload area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <form onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
              <div
                className={`relative group ${
                  dragActive ? "scale-[1.02]" : ""
                } transition-all duration-200`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-electric-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />

                <label
                  htmlFor="file-upload"
                  className={`relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-200 ${
                    dragActive
                      ? "border-primary-500 bg-primary-50"
                      : "border-neutral-300 bg-white hover:border-primary-400 hover:bg-neutral-50"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  {!file ? (
                    <>
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-12 h-12 mb-4 text-neutral-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="mb-2 text-lg font-semibold text-neutral-700">
                          {t("hero.uploadText")}
                        </p>
                        <p className="text-sm text-neutral-500">
                          {t("hero.uploadSupport")}
                        </p>
                        <p className="mt-4 text-xs text-neutral-400">
                          O si prefieres,{" "}
                          <span className="text-primary-600 font-semibold">
                            empezamos desde cero
                          </span>
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      {isAnalyzing ? (
                        <>
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mb-4"></div>
                          <p className="text-lg font-semibold text-neutral-700">
                            {t("hero.uploadingText")}
                          </p>
                          <p className="text-sm text-neutral-500 mt-2">
                            Encontrando las mejores oportunidades
                          </p>
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-12 h-12 mb-4 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <p className="text-lg font-semibold text-neutral-700">
                            {file.name}
                          </p>
                          <p className="text-sm text-green-600 mt-2">
                            CV cargado exitosamente
                          </p>
                          <button
                            onClick={() => setFile(null)}
                            className="mt-4 text-sm text-primary-600 hover:text-primary-700 font-medium"
                          >
                            Cambiar archivo
                          </button>
                        </>
                      )}
                    </div>
                  )}
                  <input
                    ref={inputRef}
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleChange}
                    accept=".pdf,.doc,.docx"
                  />
                </label>
              </div>
            </form>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                <span className="relative z-10">{t("hero.cta")}</span>
              </button>

              <button className="px-8 py-4 bg-white border-2 border-neutral-200 text-neutral-700 font-semibold rounded-xl hover:border-primary-300 hover:bg-neutral-50 transition-all duration-200">
                Ver demo en vivo
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{t("hero.guarantee").split(" • ")[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  {t("hero.stats.avgDays")} {t("hero.stats.avgDaysText")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  {t("hero.guarantee").split(" • ")[1] || "Cancel anytime"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
