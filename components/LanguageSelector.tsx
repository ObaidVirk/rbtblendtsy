"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "@/lib/TranslationContext";

const languages = [
  { code: "en", name: "English", country: "gb" },
  { code: "ur", name: "Urdu", country: "pk" },
  { code: "ar", name: "Arabic", country: "sa" },
  { code: "es", name: "Spanish", country: "es" },
  { code: "fr", name: "French", country: "fr" },
  { code: "de", name: "German", country: "de" },
  { code: "it", name: "Italian", country: "it" },
  { code: "pt", name: "Portuguese", country: "pt" },
  { code: "nl", name: "Dutch", country: "nl" },
  { code: "tr", name: "Turkish", country: "tr" },
  { code: "hi", name: "Hindi", country: "in" },
  { code: "zh", name: "Chinese", country: "cn" },
  { code: "ja", name: "Japanese", country: "jp" },
  { code: "ko", name: "Korean", country: "kr" },
  { code: "ru", name: "Russian", country: "ru" },
  { code: "id", name: "Indonesian", country: "id" },
  { code: "th", name: "Thai", country: "th" },
  { code: "vi", name: "Vietnamese", country: "vn" },
  { code: "pl", name: "Polish", country: "pl" },
  { code: "el", name: "Greek", country: "gr" },
];

interface LanguageSelectorProps {
  theme?: "light" | "dark";
}

export default function LanguageSelector({ theme = "light" }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { locale, setLocale } = useTranslation();

  const selected = languages.find((l) => l.code === locale) ?? languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isDark = theme === "dark";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          isDark
            ? "text-white hover:bg-white/10 border border-white/20"
            : "text-finGray-700 hover:bg-finGray-100 border border-finGray-200"
        }`}
        aria-label="Select language"
      >
        <Image
          src={`https://flagcdn.com/w40/${selected.country}.png`}
          alt={selected.name}
          width={20}
          height={15}
          className="rounded-sm object-cover"
          style={{ width: 20, height: 15 }}
          unoptimized
        />
        <span className="hidden sm:inline">{selected.name}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-2xl border border-finGray-100 z-50 overflow-hidden">
          <div className="max-h-80 overflow-y-auto py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLocale(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors duration-150 ${
                  selected.code === lang.code
                    ? "bg-primary-50 text-finPurple font-semibold"
                    : "text-finGray-700 hover:bg-finGray-50"
                }`}
              >
                <Image
                  src={`https://flagcdn.com/w40/${lang.country}.png`}
                  alt={lang.name}
                  width={20}
                  height={15}
                  className="rounded-sm object-cover flex-shrink-0"
                  style={{ width: 20, height: 15 }}
                  unoptimized
                />
                <span>{lang.name}</span>
                {selected.code === lang.code && (
                  <span className="ml-auto text-finPurple">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
