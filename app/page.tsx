'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  Scale,
  Car,
  Gavel,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  ChevronRight
} from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-foreground bg-background">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 flex flex-col">
              <span className={`text-xl font-serif font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
                THE LAW OFFICE OF
              </span>
              <span className="text-2xl font-serif font-extrabold text-accent">
                OSBELIA CASTILLO
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="hover:text-accent transition-colors font-medium">Home</Link>
              <Link href="#practice-areas" className="hover:text-accent transition-colors font-medium">Practice Areas</Link>
              <Link href="#about" className="hover:text-accent transition-colors font-medium">About</Link>
              <Link href="#contact" className="hover:text-accent transition-colors font-medium">Contact</Link>
              <a
                href="tel:8052837656"
                className={`px-5 py-2 rounded-full border-2 transition-all font-bold ${
                  isScrolled
                    ? 'border-primary text-primary hover:bg-primary hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-primary'
                }`}
              >
                805-283-7656
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isScrolled ? 'text-primary' : 'text-white'} p-2`}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white text-primary shadow-xl absolute w-full top-full left-0 border-t border-gray-100 animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <Link href="#home" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium hover:text-accent">Home</Link>
              <Link href="#practice-areas" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium hover:text-accent">Practice Areas</Link>
              <Link href="#about" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium hover:text-accent">About</Link>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium hover:text-accent">Contact</Link>
              <a
                href="tel:8052837656"
                className="block w-full text-center bg-primary text-white py-3 rounded-lg font-bold"
              >
                Call Now: 805-283-7656
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000"
            alt="Law Office Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white pt-20">
          <div className="max-w-3xl">
            <h2 className="text-accent text-xl md:text-2xl font-bold mb-4 tracking-wider uppercase">
              Santa Barbara • Oxnard • Ventura
            </h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Need Litigation? <br />
              <span className="text-accent italic">Proven Aggressive Representation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              We are ready to examine the facts of your case, and we will explain your options in English or Spanish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="bg-accent hover:bg-accent/90 text-primary font-extrabold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg text-center"
              >
                Schedule a Consultation
              </Link>
              <a
                href="tel:8052837656"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all text-center"
              >
                Call: 805-283-7656
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest mb-4">Our Practices</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary">How We Can Help You</h3>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Personal Injury",
              icon: Scale,
              desc: "Accidents and personal injuries are inevitable. Most cases of personal injuries are brought by act of negligence."
            },
            {
              title: "Vehicular Accident",
              icon: Car,
              desc: "Vehicle accident can happen in different type of situations: in the highway, but may also occur in side streets."
            },
            {
              title: "Wrongful Death",
              icon: Gavel,
              desc: "A wrongful death is an instance when a person is killed as a result of human acts of negligence or recklessness."
            },
            {
              title: "Worker's Compensation",
              icon: Briefcase,
              desc: "It is every employee's right to work in a safe environment and it is an employer's responsibility."
            }
          ].map((area, idx) => (
            <div key={idx} className="group bg-background p-8 rounded-xl border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="mb-6 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors">
                <area.icon size={40} className="text-accent group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-primary mb-4">{area.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {area.desc}
              </p>
              <Link href="#contact" className="text-primary font-bold flex items-center hover:text-accent group-hover:gap-2 transition-all">
                Learn More <ChevronRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1000"
                alt="Law Professional"
                className="relative z-10 rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-xl z-20 hidden md:block">
                <p className="text-3xl font-serif font-bold italic">"Aggressive & Dedicated"</p>
                <p className="text-accent font-bold mt-2">— Osbelia Castillo</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-accent font-bold uppercase tracking-widest mb-4">About the Firm</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Osbelia Castillo: Your Advocate with an Edge</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For over five years Osbelia has worked as an aggressive civil litigator representing insurance companies in both state and federal court. She has handled hundreds of personal injury cases including catastrophic injuries and wrongful deaths.
              </p>
              <div className="bg-white p-6 rounded-lg border-l-4 border-accent shadow-sm mb-8">
                <p className="text-primary font-bold text-xl italic">
                  "Her experience on the defense side gives her a unique perspective and ability to achieve favorable results at an early stage."
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                Osbelia is fluent in <span className="font-bold text-primary">English and Spanish</span>, ensuring clear communication and dedicated representation for our diverse community.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-all shadow-lg"
              >
                Learn More About Our Edge <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-16 text-white">
              <h3 className="text-4xl font-serif font-bold mb-8">Get a Free Case Consultation</h3>
              <p className="text-gray-300 text-lg mb-12">
                The Law Office of Osbelia Castillo is ready to examine the facts of your case. Tell us what happened, and we'll help you navigate the next steps.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-accent font-bold uppercase tracking-wider text-sm">Call Us</p>
                    <a href="tel:8052837656" className="text-2xl font-bold hover:text-accent transition-colors">805-283-7656</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-accent font-bold uppercase tracking-wider text-sm">Our Office</p>
                    <p className="text-lg">315 Meigs Rd, Ste A142<br />Santa Barbara, California 93109</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-accent font-bold uppercase tracking-wider text-sm">Bilingual Service</p>
                    <p className="text-lg">English & Spanish Spoken</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-12 lg:p-16">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-primary font-bold mb-2">Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-accent" placeholder="Full Name" />
                  </div>
                  <div>
                    <label className="block text-primary font-bold mb-2">Phone</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-accent" placeholder="Phone Number" />
                  </div>
                </div>
                <div>
                  <label className="block text-primary font-bold mb-2">Email</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-accent" placeholder="Email Address" />
                </div>
                <div>
                  <label className="block text-primary font-bold mb-2">Type of Case</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-accent appearance-none">
                    <option>Personal Injury</option>
                    <option>Vehicular Accident</option>
                    <option>Wrongful Death</option>
                    <option>Worker's Compensation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-primary font-bold mb-2">How can we help?</label>
                  <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-accent" placeholder="Tell us about your case..."></textarea>
                </div>
                <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-primary font-extrabold text-xl py-4 rounded-lg transition-all shadow-lg transform hover:scale-[1.02]">
                  Submit Consultation Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex flex-col mb-6">
                <span className="text-lg font-serif font-bold tracking-tight">THE LAW OFFICE OF</span>
                <span className="text-xl font-serif font-extrabold text-accent">OSBELIA CASTILLO</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Santa Barbara, Oxnard & Ventura professional group of lawyers specializing in Personal injury, Vehicular Accidents, Wrongful Death and Workers' Compensation cases.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 hover:bg-accent p-2 rounded-lg transition-colors"><Facebook size={20} /></a>
                <a href="#" className="bg-white/10 hover:bg-accent p-2 rounded-lg transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-serif font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                <li><Link href="#home" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link href="#practice-areas" className="hover:text-accent transition-colors">Practice Areas</Link></li>
                <li><Link href="#about" className="hover:text-accent transition-colors">About Firm</Link></li>
                <li><Link href="#contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-serif font-bold mb-6">Office Information</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex gap-3">
                  <MapPin className="text-accent shrink-0" size={20} />
                  <span>315 Meigs Rd, Ste A142<br />Santa Barbara, California 93109</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="text-accent shrink-0" size={20} />
                  <a href="tel:8052837656" className="hover:text-accent transition-colors">805-283-7656</a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <p className="mb-4">&copy; {new Date().getFullYear()} The Law Office of Osbelia Castillo. All rights reserved.</p>
            <p className="max-w-3xl mx-auto leading-relaxed">
              Disclaimer: The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
