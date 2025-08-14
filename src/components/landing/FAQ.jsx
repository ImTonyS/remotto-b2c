"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Realmente aplican a trabajos por mí?",
      answer: "Sí, literalmente. Una vez que configuras tus preferencias y apruebas los trabajos, nuestro sistema aplica automáticamente con tu CV optimizado y carta de presentación personalizada. No es solo matching, es aplicación real.",
    },
    {
      question: "¿Cómo sé que no es spam genérico?",
      answer: "Cada aplicación es única. Adaptamos tu CV para cada vacante usando las palabras clave específicas del puesto, ajustamos el orden de tu experiencia para destacar lo más relevante, y generamos cartas de presentación personalizadas que mencionan la empresa y el rol específico.",
    },
    {
      question: "¿Qué tan rápido consigo entrevistas?",
      answer: "El 73% de nuestros usuarios consigue su primera entrevista en los primeros 14 días. El promedio es de 5 entrevistas en el primer mes. Pero depende de tu industria, experiencia y qué tan activo seas en la plataforma.",
    },
    {
      question: "¿Funciona para cualquier industria?",
      answer: "Funciona mejor para roles de oficina, tech, marketing, ventas, administración y similares. Para trabajos muy especializados (medicina, abogacía) o trabajos manuales, somos menos efectivos. Pero siempre puedes probar gratis.",
    },
    {
      question: "¿Puedo cancelar en cualquier momento?",
      answer: "Por supuesto. Sin letra chica, sin períodos de retención. Cancelas cuando quieras desde tu dashboard con un click. Si cancelas, terminas el mes que pagaste y listo.",
    },
    {
      question: "¿Qué pasa con mi información personal?",
      answer: "Tu información está encriptada y nunca la compartimos con terceros sin tu permiso explícito. Solo la usamos para aplicar a los trabajos que tú apruebas. Cumplimos con GDPR y puedes eliminar todos tus datos cuando quieras.",
    },
    {
      question: "¿El CV roasting es realmente tan brutal?",
      answer: "Sí, pero es por tu bien. Te decimos exactamente por qué tu CV no funciona sin suavizarlo. Pero no te preocupes, después de destrozarlo, te ayudamos a reconstruirlo mejor que nunca.",
    },
    {
      question: "¿Necesito tener un CV para empezar?",
      answer: "No necesariamente. Si no tienes CV, podemos crear uno desde cero con nuestra IA. Solo necesitas responder algunas preguntas sobre tu experiencia y educación, y generamos un CV profesional en minutos.",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4"
          >
            Preguntas{" "}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              frecuentes
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-neutral-600"
          >
            Todo lo que necesitas saber antes de empezar
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:border-primary-300 transition-colors duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors duration-200"
              >
                <span className="font-semibold text-neutral-900 pr-8">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-5 text-neutral-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-neutral-600">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-neutral-600 mb-4">
            ¿Aún tienes dudas?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white border border-neutral-200 text-neutral-700 font-semibold rounded-xl hover:border-primary-300 transition-colors duration-200">
              Hablar con ventas
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Probar gratis ahora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}