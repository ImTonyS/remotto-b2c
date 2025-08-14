"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/lib/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Check for saved language preference
    const savedLang = localStorage.getItem("language");
    if (savedLang && (savedLang === "en" || savedLang === "es")) {
      setLanguage(savedLang);
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("es")) {
        setLanguage("es");
      }
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "es" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const t = (path) => {
    const keys = path.split(".");
    let value = translations[language];
    
    for (const key of keys) {
      if (value && typeof value === "object") {
        value = value[key];
      } else {
        console.warn(`Translation not found for: ${path}`);
        return path;
      }
    }
    
    return value || path;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}