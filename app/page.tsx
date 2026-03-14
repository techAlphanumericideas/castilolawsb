"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Scale,
  ShieldCheck,
  Gavel,
  Car,
  Users,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Stethoscope,
  HeartOff,
  Briefcase
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      const tl = gsap.timeline();
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
      ).fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );

      // Navbar Entrance
      gsap.fromTo(
        navbarRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );

      // Scroll Reveals
      const revealElements = document.querySelectorAll(".reveal");
      revealElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Interactive Marquee via GSAP for better control
      const marquee = document.querySelector(".gsap-marquee");
      if (marquee) {
        gsap.to(marquee, {
          xPercent: -50,
          repeat: -1,
          duration: 20,
          ease: "none",
        });
      }

      // Micro-interactions: Magnetic Button Effect
      const buttons = document.querySelectorAll(".magnetic-btn");
      buttons.forEach((btn) => {
        btn.addEventListener("mousemove", (e: any) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { xPercent: 100 },
        { xPercent: 0, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [isMenuOpen]);

  const settlements = [
    "$3,500,000 Car Accident",
    "$3,400,000 Spinal Injury",
    "$2,000,000 Car Accident",
    "$1,750,000 Motor Vehicle Accident",
    "$1,600,000 Pedestrian Accident",
  ];

  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 w-full z-50 glass px-6 py-4 flex items-center justify-between"
      >
        <div className="text-2xl font-serif font-bold tracking-tight">
          CASTILLO<span className="text-accent">LAW</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest uppercase">
          <a href="#practices" className="hover:text-accent transition-colors">Practices</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#process" className="hover:text-accent transition-colors">Process</a>
          <a href="#contact" className="px-5 py-2 border border-accent text-accent hover:bg-accent hover:text-primary transition-all rounded-full magnetic-btn">
            Free Consultation
          </a>
        </div>

        <div className="md:hidden" onClick={() => setIsMenuOpen(true)}>
          <Menu className="w-6 h-6 text-accent cursor-pointer" />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center space-y-8 text-3xl font-serif"
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-accent"
          >
            <X className="w-8 h-8" />
          </button>
          <a href="#practices" onClick={() => setIsMenuOpen(false)} className="hover:text-accent">Practices</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-accent">About</a>
          <a href="#process" onClick={() => setIsMenuOpen(false)} className="hover:text-accent">Process</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="px-8 py-3 bg-accent text-primary rounded-full text-xl font-bold">
            Free Consultation
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 text-center"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
            alt="Architectural background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <h1
            ref={headlineRef}
            className="text-5xl md:text-8xl font-serif font-bold leading-tight mb-8"
          >
            Modern Legal Defense. <br />
            <span className="text-accent italic font-light">Human Centered.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            The Law Office of Osbelia Castillo combines aggressive litigation experience with a personalized, tech-forward approach to secure the results you deserve.
          </p>

          <div ref={ctaRef} className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="bg-accent text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 magnetic-btn">
              Start Your Claim <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 text-accent font-medium text-lg">
              <Phone className="w-6 h-6" /> 805-283-7656
            </div>
          </div>
        </div>

        {/* Settlement Ticker - GSAP Controlled */}
        <div className="absolute bottom-0 left-0 w-full bg-accent/10 border-t border-accent/20 py-4 overflow-hidden whitespace-nowrap">
          <div className="gsap-marquee inline-block">
            {[...settlements, ...settlements, ...settlements].map((item, i) => (
              <span key={i} className="mx-8 text-sm font-bold tracking-widest uppercase inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas (Bento Box) */}
      <section id="practices" className="py-32 px-6 max-w-7xl mx-auto reveal">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent mb-4">Our Practices</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Strategic Expertise for <span className="italic">Complex</span> Cases
            </h3>
          </div>
          <p className="text-gray-400 max-w-sm mb-2">
            Leveraging deep defense-side experience to give our clients an unfair advantage in litigation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[240px]">
          {/* Personal Injury - Large Card */}
          <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-3xl bg-emerald-deep/20 border border-white/5 p-8 flex flex-col justify-end">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2070"
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
              alt="Personal Injury"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            <div className="relative z-10">
              <Scale className="w-12 h-12 text-accent mb-6" />
              <h4 className="text-3xl font-serif font-bold mb-4">Personal Injury</h4>
              <p className="text-gray-400 max-w-md mb-6">
                Accidents and injuries are inevitable, but being under-compensated shouldn't be. We handle catastrophic injuries with meticulous detail.
              </p>
              <button className="flex items-center gap-2 text-accent font-bold group">
                Explore Expertise <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Vehicle Accidents */}
          <div className="md:col-span-4 md:row-span-1 group relative overflow-hidden rounded-3xl bg-accent/5 border border-accent/10 p-8 flex flex-col justify-center">
            <Car className="w-10 h-10 text-accent mb-4" />
            <h4 className="text-2xl font-serif font-bold mb-2">Vehicle Accidents</h4>
            <p className="text-sm text-gray-400">Highways, side streets, or parking lots. We navigate the complexities of road liability.</p>
          </div>

          {/* Workers' Comp */}
          <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col">
            <Briefcase className="w-10 h-10 text-accent mb-6" />
            <h4 className="text-2xl font-serif font-bold mb-4">Workers' Compensation</h4>
            <p className="text-gray-400 mb-8">Protecting your right to a safe workplace and ensuring medical coverage after on-the-job injuries.</p>
            <div className="mt-auto overflow-hidden rounded-2xl h-48">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="Construction worker"
              />
            </div>
          </div>

          {/* Wrongful Death */}
          <div className="md:col-span-4 md:row-span-1 group relative overflow-hidden rounded-3xl bg-emerald-deep/40 border border-white/5 p-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-2">
              <HeartOff className="w-8 h-8 text-accent" />
              <h4 className="text-2xl font-serif font-bold">Wrongful Death</h4>
            </div>
            <p className="text-sm text-gray-400">Seeking justice for families who have lost loved ones due to negligence and malpractice.</p>
          </div>

          {/* Medical Malpractice - Small Callout */}
          <div className="md:col-span-4 md:row-span-1 group relative overflow-hidden rounded-3xl bg-accent border border-accent p-8 flex flex-col justify-center text-primary">
            <Stethoscope className="w-10 h-10 mb-4" />
            <h4 className="text-xl font-bold mb-1">Medical Malpractice</h4>
            <p className="text-sm font-medium opacity-80">Hold healthcare providers accountable for their standard of care.</p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="about" className="py-32 bg-accent/5 overflow-hidden reveal">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative rounded-3xl overflow-hidden border border-accent/20">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=2000"
                alt="Osbelia Castillo"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 glass flex justify-between items-center">
                <div>
                  <p className="text-accent font-bold uppercase tracking-widest text-xs mb-1">Founding Partner</p>
                  <p className="text-2xl font-serif font-bold">Osbelia Castillo</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent">ES</div>
                  <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent">EN</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-about">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent mb-6">The Castillo Edge</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
              A Unique Perspective From the <span className="text-accent">Inside</span>.
            </h3>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                For over five years, Osbelia worked as an aggressive civil litigator representing insurance companies in both state and federal court. This experience gives her an unparalleled edge when fighting for her injured clients.
              </p>
              <p>
                Having handled hundreds of personal injury cases including catastrophic injuries, wrongful deaths, and traumatic brain injuries from the defense side, she possesses a unique ability to anticipate the opposition's moves and achieve favorable results at an early stage.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/10">
                <div>
                  <p className="text-3xl font-serif font-bold text-white mb-2">500+</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-accent">Cases Handled</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-white mb-2">100%</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-accent">Client Focused</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Selling Points (Methodology) */}
      <section id="process" className="py-32 px-6 reveal">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent mb-6">What We Do</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-bold mb-8">
            Defining Goals, Method & <span className="italic">Success</span> Together
          </h3>
          <p className="text-xl text-gray-400 font-light">
            Our approach saves our clients time and money over the long term through proactive domination and strategic assessment.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Gavel className="w-8 h-8" />,
              title: "Expert Litigation",
              desc: "Work with elite lawyers who understand the nuances of the courtroom."
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Strategic Advice",
              desc: "Get legal advice that aligns with your long-term holistic goals."
            },
            {
              icon: <Scale className="w-8 h-8" />,
              title: "Premium Rates",
              desc: "Experience high-end representation with competitive, transparent structures."
            },
            {
              icon: <ShieldCheck className="w-8 h-8" />,
              title: "Document Mastery",
              desc: "We meticulously review and prepare every document to ensure success."
            }
          ].map((item, idx) => (
            <div key={idx} className="reveal-card p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors group">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-serif font-bold mb-4">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-32 px-6 bg-emerald-deep/10 reveal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent mb-6">Connect With Us</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">
              Start Your Journey To <span className="italic">Justice</span>.
            </h3>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-accent mb-1">Call for Consultation</p>
                  <p className="text-2xl font-serif">805-283-7656</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-accent mb-1">Our Office</p>
                  <p className="text-lg text-gray-400">315 Meigs Rd, Ste A142<br />Santa Barbara, CA 93109</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-accent mb-1">Email Us</p>
                  <p className="text-lg text-gray-400">contact@castillolawsb.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-16">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-accent transition-colors text-lg" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-accent transition-colors text-lg" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-accent transition-colors text-lg" placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">Case Type</label>
                <select className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-accent transition-colors text-lg appearance-none">
                  <option className="bg-background">Personal Injury</option>
                  <option className="bg-background">Vehicle Accident</option>
                  <option className="bg-background">Workers' Comp</option>
                  <option className="bg-background">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-accent transition-colors text-lg resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full py-6 rounded-full bg-accent text-primary font-bold text-lg hover:scale-[1.02] active:scale-100 transition-all shadow-xl shadow-accent/10">
                Submit Consultation Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <div className="text-3xl font-serif font-bold tracking-tight mb-4">
              CASTILLO<span className="text-accent">LAW</span>
            </div>
            <p className="text-gray-500 max-w-sm text-sm">
              Premium legal representation for the modern era. Specializing in high-stakes personal injury and litigation defense.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Navigation</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#practices" className="hover:text-white transition-colors">Practices</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">The Firm</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Our Method</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Connect</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
          <p>© 2026 The Law Office of Osbelia Castillo. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
