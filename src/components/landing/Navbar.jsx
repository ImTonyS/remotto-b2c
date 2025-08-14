"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Logo from "@/public/logo-color.png";

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-neutral-200 max-w-5xl mx-auto rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="Remotto"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="flex items-center gap-8">
            {/* Navigation links */}
            <Link
              href="/product"
              className="hidden md:block text-neutral-600 hover:text-neutral-900 font-medium"
            >
              {t("nav.product")}
            </Link>
            <Link
              href="/pricing"
              className="hidden md:block text-neutral-600 hover:text-neutral-900 font-medium"
            >
              {t("nav.pricing")}
            </Link>
            <Link
              href="/resources"
              className="hidden md:block text-neutral-600 hover:text-neutral-900 font-medium"
            >
              {t("nav.resources")}
            </Link>
            <Link
              href="/about"
              className="hidden md:block text-neutral-600 hover:text-neutral-900 font-medium"
            >
              {t("nav.about")}
            </Link>
          </div>

          {/* Language switcher and CTA buttons */}
          <div className="flex items-center gap-4">
            {/* Language switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1.5 text-neutral-600 hover:text-neutral-900 font-medium border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <span className="text-sm">{language === "en" ? "EN" : "ES"}</span>
            </button>

            <Link
              href="/login"
              className="hidden md:block text-neutral-600 hover:text-neutral-900 font-medium"
            >
              {t("nav.login")}
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              {t("nav.getStarted")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
