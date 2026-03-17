"use client";

import { useState, FormEvent } from "react";
import HeroSection from "@/components/HeroSection";
import { Mail, Phone, MapPin, Clock, MessageSquare, Headphones, FileText } from "lucide-react";

const offices = [
  { city: "New York", role: "Global HQ", address: "120 Finstech Avenue, New York, NY 10004", phone: "+1 (212) 555-0100", icon: "🗽" },
  { city: "London", role: "EMEA HQ", address: "25 Canary Wharf, London E14 5LQ", phone: "+44 20 7946 0800", icon: "🇬🇧" },
  { city: "Singapore", role: "APAC HQ", address: "1 Raffles Place, Singapore 048616", phone: "+65 6511 0200", icon: "🇸🇬" },
  { city: "Dubai", role: "MEA Hub", address: "DIFC Gate Avenue, Dubai, UAE", phone: "+971 4 509 0300", icon: "🇦🇪" },
];

const contactOptions = [
  { icon: <MessageSquare size={24} />, title: "Sales Inquiry", description: "Talk to our sales team about solutions, pricing, and demos.", color: "text-finPurple bg-primary-50" },
  { icon: <Headphones size={24} />, title: "Customer Support", description: "Existing clients can reach our 24/7 support team.", color: "text-blue-600 bg-blue-50" },
  { icon: <FileText size={24} />, title: "Partnership", description: "Explore integration partnerships and referral programs.", color: "text-green-600 bg-green-50" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", company: "", role: "", subject: "", message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <HeroSection
        tag="Get in Touch"
        title="Let's Talk About Your"
        titleHighlight="Financial Technology Needs"
        subtitle="Whether you're exploring solutions, need technical support, or want to discuss a partnership — our team is here to help."
        compact
      />

      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {contactOptions.map((opt) => (
              <div key={opt.title} className="bg-finGray-50 rounded-2xl p-7 border border-finGray-100 hover:shadow-card transition-all duration-300 hover:-translate-y-1 text-center">
                <div className={`w-14 h-14 rounded-2xl ${opt.color} flex items-center justify-center mx-auto mb-4`}>
                  {opt.icon}
                </div>
                <h3 className="font-bold text-finBlue text-lg mb-2">{opt.title}</h3>
                <p className="text-finGray-400 text-sm">{opt.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-finBlue mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">Message Sent!</h3>
                  <p className="text-green-600 text-sm">
                    Thank you for reaching out. A member of our team will respond within 1 business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-finGray-700 mb-1.5">First Name</label>
                      <input type="text" className="input-field" placeholder="John" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-finGray-700 mb-1.5">Last Name</label>
                      <input type="text" className="input-field" placeholder="Doe" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-finGray-700 mb-1.5">Work Email</label>
                    <input type="email" className="input-field" placeholder="john@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-finGray-700 mb-1.5">Company</label>
                      <input type="text" className="input-field" placeholder="Acme Bank" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-finGray-700 mb-1.5">Your Role</label>
                      <select className="input-field" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} required>
                        <option value="">Select role</option>
                        <option>C-Suite / Executive</option>
                        <option>IT / Technology</option>
                        <option>Finance / Treasury</option>
                        <option>Operations</option>
                        <option>Risk & Compliance</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-finGray-700 mb-1.5">Subject</label>
                    <select className="input-field" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required>
                      <option value="">Select subject</option>
                      <option>Product Demo Request</option>
                      <option>Pricing Inquiry</option>
                      <option>Technical Support</option>
                      <option>Partnership Inquiry</option>
                      <option>General Question</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-finGray-700 mb-1.5">Message</label>
                    <textarea className="input-field resize-none" rows={5} placeholder="Describe your inquiry in detail..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 text-base rounded-xl">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info Panel */}
            <div className="space-y-6">
              <div className="bg-finGray-50 rounded-2xl p-7 border border-finGray-100">
                <h3 className="font-bold text-finBlue mb-5">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-finPurple" />
                    </div>
                    <div>
                      <p className="text-xs text-finGray-400 mb-0.5">General Inquiries</p>
                      <p className="text-sm font-medium text-finBlue">info@rbtblendtsy.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-finPurple" />
                    </div>
                    <div>
                      <p className="text-xs text-finGray-400 mb-0.5">Sales Hotline</p>
                      <p className="text-sm font-medium text-finBlue">+1 (800) 728-7425</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-finPurple" />
                    </div>
                    <div>
                      <p className="text-xs text-finGray-400 mb-0.5">Support Hours</p>
                      <p className="text-sm font-medium text-finBlue">24/7 for enterprise clients</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offices */}
              <div>
                <h3 className="font-bold text-finBlue mb-5">Our Offices</h3>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div key={office.city} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-finGray-100 hover:shadow-card transition-shadow">
                      <span className="text-2xl flex-shrink-0">{office.icon}</span>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="font-semibold text-finBlue text-sm">{office.city}</p>
                          <span className="text-xs text-finPurple font-medium bg-primary-50 px-2 py-0.5 rounded-full">{office.role}</span>
                        </div>
                        <p className="text-xs text-finGray-400">{office.address}</p>
                        <p className="text-xs text-finGray-500 mt-0.5">{office.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
