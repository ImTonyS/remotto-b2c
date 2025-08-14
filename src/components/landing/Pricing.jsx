"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Gratis",
      price: "$0",
      period: "",
      description: "Perfecto para empezar",
      features: [
        "3 CV roasts al mes",
        "1 review profesional",
        "10 matches diarios",
        "1 plantilla de CV",
        "Aplicación manual",
        "Soporte por email",
      ],
      notIncluded: [
        "Auto-aplicación",
        "Preparación entrevistas",
        "Analytics avanzado",
      ],
      cta: "Empezar gratis",
      popular: false,
      gradient: "from-neutral-500 to-neutral-600",
    },
    {
      name: "Pro",
      price: billingCycle === "monthly" ? "$199" : "$1,990",
      period: billingCycle === "monthly" ? "/mes" : "/año",
      description: "Para búsqueda seria",
      features: [
        "Roasts y reviews ilimitados",
        "Matches ilimitados",
        "Todas las plantillas",
        "50 auto-aplicaciones/mes",
        "Optimización ATS",
        "Carta presentación IA",
        "Analytics básico",
        "Soporte prioritario",
      ],
      notIncluded: [
        "Preparación entrevistas",
        "Coach personal IA",
      ],
      cta: "Empezar prueba gratis",
      popular: true,
      gradient: "from-primary-500 to-accent-500",
      savings: billingCycle === "yearly" ? "Ahorra $398" : null,
    },
    {
      name: "Premium",
      price: billingCycle === "monthly" ? "$399" : "$3,990",
      period: billingCycle === "monthly" ? "/mes" : "/año",
      description: "Máximo poder",
      features: [
        "Todo lo de Pro",
        "Auto-aplicaciones ilimitadas",
        "Preparación entrevistas IA",
        "Coach personal 24/7",
        "LinkedIn optimization",
        "Negociación salarial",
        "Analytics completo",
        "Soporte VIP",
        "Garantía de entrevistas",
      ],
      notIncluded: [],
      cta: "Contactar ventas",
      popular: false,
      gradient: "from-electric-600 to-primary-500",
      savings: billingCycle === "yearly" ? "Ahorra $798" : null,
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4"
          >
            Invierte en tu{" "}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              futuro profesional
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Planes diseñados para cada etapa de tu búsqueda laboral
          </motion.p>
        </div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-neutral-100 p-1 rounded-xl inline-flex">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                billingCycle === "monthly"
                  ? "bg-white text-neutral-900 shadow-md"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                billingCycle === "yearly"
                  ? "bg-white text-neutral-900 shadow-md"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Anual
              <span className="ml-2 text-xs bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent font-bold">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="relative"
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Más popular
                  </div>
                </div>
              )}

              <div className={`h-full bg-white rounded-2xl ${
                plan.popular ? "border-2 border-primary-300 shadow-xl" : "border border-neutral-200"
              } p-8 hover:shadow-xl transition-shadow duration-300`}>
                {/* Plan name */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  {plan.name}
                </h3>
                
                {/* Description */}
                <p className="text-neutral-600 mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <span className="text-neutral-600 ml-2">
                      {plan.period}
                    </span>
                  </div>
                  {plan.savings && (
                    <p className="text-sm text-green-600 font-medium mt-1">
                      {plan.savings}
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 mb-8 ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg transform hover:-translate-y-0.5"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}>
                  {plan.cta}
                </button>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-neutral-700">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 opacity-50">
                      <svg className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-neutral-500 line-through">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 border border-green-200 rounded-xl">
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div className="text-left">
              <p className="font-semibold text-green-900">Garantía de 30 días</p>
              <p className="text-sm text-green-700">Si no consigues entrevistas, te devolvemos tu dinero</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}