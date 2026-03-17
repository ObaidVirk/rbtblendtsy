import Link from "next/link";
import Image from "next/image";
import { mockFooterLinks } from "@/lib/mockData";
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-finBlue text-white">
      {/* Main Footer */}
      <div className="container-max section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-5" aria-label="Go to homepage">
              <Image
                src="/rbtblendtsy.png"
                alt="rbtblendtsy.com logo"
                width={140}
                height={30}
                className="h-[30px] w-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Powering financial innovation for banks and financial institutions across 130+ countries.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-finPurple flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-finPurple flex items-center justify-center transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-finPurple flex items-center justify-center transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {mockFooterLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-2.5">
              {mockFooterLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {mockFooterLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              {mockFooterLinks.support.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-2">
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Mail size={14} className="text-primary-300 flex-shrink-0" />
                <span>info@rbtblendtsy.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Phone size={14} className="text-primary-300 flex-shrink-0" />
                <span>+1 (800) 728-7425</span>
              </div>
              <div className="flex items-start gap-2 text-gray-300 text-sm">
                <MapPin size={14} className="text-primary-300 flex-shrink-0 mt-0.5" />
                <span>Global Headquarters,<br />120 Finstech Ave, New York, NY</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 md:px-8 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} rbtblendtsy.com. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {mockFooterLinks.support.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white text-xs transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
