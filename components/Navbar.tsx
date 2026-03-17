"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, LayoutDashboard, LogIn, UserPlus, LogOut } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "@/lib/TranslationContext";

const solutionLinks = [
  { label: "Retail Banking", href: "/retail-banking", icon: "🏦" },
  { label: "Transaction Banking", href: "/transaction-banking", icon: "💼" },
  { label: "Lending", href: "/lending", icon: "💰" },
  { label: "Treasury", href: "/treasury", icon: "📊" },
  { label: "Capital Markets", href: "/capital-markets", icon: "📈" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();

  const navLinks = [
    { label: t.nav.home, href: "/" },
    {
      label: t.nav.solutions,
      href: "/solutions",
      dropdown: solutionLinks,
    },
    { label: t.nav.platform, href: "/platform" },
    { label: t.nav.resources, href: "/resources" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.pricing, href: "/pricing" },
    { label: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const checkAdmin = () =>
      setIsAdmin(localStorage.getItem("adminLoggedIn") === "true");
    checkAdmin();
    window.addEventListener("storage", checkAdmin);
    return () => window.removeEventListener("storage", checkAdmin);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-nav"
          : "bg-white/95 backdrop-blur-md border-b border-finGray-100"
      }`}
    >
      <div className="container-max px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Go to homepage">
            <Image
              src="/rbtblendtsy.png"
              alt="rbtblendtsy.com logo"
              width={180}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`nav-link flex items-center gap-1 px-3 py-2 rounded-md hover:bg-finGray-50 ${
                      isActive(link.href) ? "text-finPurple" : ""
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-finGray-100 py-2 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-finGray-700 hover:bg-primary-50 hover:text-finPurple transition-colors duration-150"
                        >
                          <span className="text-base">{item.icon}</span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`nav-link px-3 py-2 rounded-md hover:bg-finGray-50 ${
                    isActive(link.href) ? "text-finPurple bg-primary-50" : ""
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSelector />
            {isAdmin ? (
              <>
                <Link
                  href="/admin"
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-finGray-600 hover:text-finPurple hover:bg-finGray-50 rounded-lg transition-all duration-200"
                >
                  <LayoutDashboard size={16} />
                  <span>{t.nav.dashboard}</span>
                </Link>
                <button
                  onClick={() => {
                    localStorage.removeItem("adminLoggedIn");
                    setIsAdmin(false);
                    window.location.href = "/";
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-red-500 border border-red-300 rounded-lg hover:bg-red-50 transition-all duration-200"
                >
                  <LogOut size={14} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-finPurple border border-finPurple rounded-lg hover:bg-finPurple hover:text-white transition-all duration-200"
                >
                  <LogIn size={14} />
                  {t.nav.login}
                </Link>
                <Link
                  href="/signup"
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-finPurple rounded-lg hover:bg-finPurple-dark transition-all duration-200 shadow-md"
                >
                  <UserPlus size={14} />
                  {t.nav.signup}
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-finGray-700 hover:bg-finGray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-finGray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.label ? null : link.label)
                    }
                    className="w-full flex items-center justify-between px-4 py-3 text-finGray-700 font-medium rounded-lg hover:bg-finGray-50 text-sm"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div className="ml-4 mt-1 space-y-0.5">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-finGray-600 hover:text-finPurple hover:bg-primary-50 rounded-lg"
                        >
                          <span>{item.icon}</span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.href)
                      ? "text-finPurple bg-primary-50"
                      : "text-finGray-700 hover:bg-finGray-50"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 border-t border-finGray-100 space-y-2">
              <div className="px-4">
                <LanguageSelector />
              </div>
              {isAdmin ? (
                <>
                  <Link
                    href="/admin"
                    className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-finGray-600 hover:bg-finGray-50 rounded-lg"
                  >
                    <LayoutDashboard size={16} />
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      localStorage.removeItem("adminLoggedIn");
                      setIsAdmin(false);
                      window.location.href = "/";
                    }}
                    className="w-full flex items-center gap-2 px-4 py-3 text-sm font-semibold text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <LogOut size={14} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-finPurple border border-finPurple rounded-lg"
                  >
                    <LogIn size={14} />
                    {t.nav.login}
                  </Link>
                  <Link
                    href="/signup"
                    className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-finPurple rounded-lg"
                  >
                    <UserPlus size={14} />
                    {t.nav.signup}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
