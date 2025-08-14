"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useLanguage();

  const stats = [
    {
      number: t("stats.users.value"),
      label: t("stats.users.label"),
      gradient: "from-primary-500 to-accent-500",
    },
    {
      number: t("stats.interviews.value"),
      label: t("stats.interviews.label"),
      gradient: "from-accent-500 to-electric-600",
    },
    {
      number: t("stats.firstApps.value"),
      label: t("stats.firstApps.label"),
      gradient: "from-electric-600 to-primary-500",
    },
    {
      number: t("stats.weekly.value"),
      label: t("stats.weekly.label"),
      gradient: "from-primary-500 to-electric-600",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4"
          >
            {t("stats.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            {t("stats.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <div
                className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
              >
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-neutral-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo cloud */}
        <div className="mt-20">
          <p className="text-center text-sm text-neutral-500 mb-8">
            {t("stats.trustedBy")}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
            {["Google", "Meta", "Amazon", "Microsoft", "Apple", "Netflix"].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.6 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-2xl font-bold text-neutral-400"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}