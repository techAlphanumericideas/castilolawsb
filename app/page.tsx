"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Phone,
  Menu,
  X,
  Scale,
  Users,
  Banknote,
  FileText,
} from "lucide-react";
import Image from "next/image";

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
      // Inside your useEffect / gsap.context
      const marquee = document.querySelector(".gsap-marquee");
      if (marquee) {
        // 1. Create the infinite loop
        const loop = gsap.to(marquee, {
          xPercent: -50,
          repeat: -1,
          duration: 25,
          ease: "none",
        });

        // 2. Stop the loop on hover
        marquee.addEventListener("mouseenter", () => loop.pause());

        // 3. Start it again on leave
        marquee.addEventListener("mouseleave", () => loop.play());
      }
      // Hero Entrance
      const tl = gsap.timeline();

      const heroWords = document.querySelectorAll(".hero-word");

      tl.fromTo(
        heroWords,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        },
      ).fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5",
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
          },
        );
      });

      // 1. Reveal the Image from the Left
      gsap.fromTo(
        ".process-image",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-image",
            start: "top 80%",
          },
        },
      );

      // 2. Animate the accent line width
      gsap.to(".process-line", {
        width: "80px",
        duration: 1,
        delay: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".process-image",
          start: "top 80%",
        },
      });

      // 3. Reveal the Text from the Right
      gsap.fromTo(
        ".process-text",
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-text",
            start: "top 80%",
          },
        },
      );

      // 4. Staggered reveal for the 4 Cards
      gsap.fromTo(
        ".process-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.4)", // Gives a slight "bounce" effect
          scrollTrigger: {
            trigger: ".process-card",
            start: "top 85%",
          },
        },
      );

      // Optimized About Section Timeline
      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%", // Starts a bit earlier so it's ready when you arrive
          toggleActions: "play none none none",
        },
      });

      aboutTl
        .to(".about-bg-skew", {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power2.out",
        })
        .to(
          ".about-glow",
          {
            opacity: 1,
            duration: 0.8,
          },
          "<",
        ) // "<" means: start at the same time as the previous animation
        .fromTo(
          ".about-header",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4 },
          "-=0.2", // Slight overlap
        )
        .fromTo(
          ".about-card",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.2",
        )
        .fromTo(
          ".about-p",
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 },
          "-=0.3",
        )
        .fromTo(
          ".about-button",
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.5)" },
          "-=0.2",
        );
      // Scroll Reveals for Bento Cards
      const bentoCards = document.querySelectorAll(".bento-card");
      gsap.fromTo(
        bentoCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: "#practices",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      const contactTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#contact",
          start: "top 75%",
        },
      });

      contactTl
        .fromTo(
          ".contact-content",
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power4.out" },
        )
        .fromTo(
          ".contact-action",
          { scale: 0.9, opacity: 0, x: 30 },
          { scale: 1, opacity: 1, x: 0, duration: 1, ease: "power3.out" },
          "-=0.7",
        )
        .fromTo(
          ".contact-action .magnetic-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "back.out(2)" },
          "-=0.4",
        );

      // Micro-interactions: Magnetic Button Effect
      const buttons = document.querySelectorAll(".magnetic-btn");
      buttons.forEach((btn) => {
        (btn as HTMLElement).addEventListener("mousemove", (e: MouseEvent) => {
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
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden";
      gsap.to(menuRef.current, {
        x: "0%",
        opacity: 1,
        visibility: "visible",
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      document.body.style.overflow = "auto";
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(menuRef.current, { visibility: "hidden" });
        },
      });
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
        className={`fixed top-0 left-0 w-full bg-white border-b border-gray-100 px-6 md:px-12 py-4 flex items-center shadow-sm transition-all duration-300 ${
          isMenuOpen ? "z-[120]" : "z-50"
        }`}
      >
        {/* Left: Logo - Flex-1 ensures it takes equal space to the right side */}
        <div
          className={`flex-1 flex justify-start items-center transition-opacity duration-300 ${isMenuOpen ? "opacity-0 invisible md:visible md:opacity-100" : "opacity-100 visible"}`}
        >
          <a
            href="#"
            className="flex transition-all hover:brightness-110 active:scale-95"
          >
            <Image
              src="/assets/logo.png"
              alt="Law Office of Osbelia Castillo"
              width={288} // Set this to your maximum intended width (e.g., 72 * 4 = 288)
              height={80} // Set this to match your logo's natural aspect ratio
              className="w-48 md:w-60 h-auto object-contain antialiased"
              style={{ imageRendering: "auto" }} // Ensures smooth but clear rendering
              priority
              unoptimized
              quality={100} // Boosts quality from the default 75
            />
          </a>
        </div>

        {/* Center: Navlinks - Flex-none so it only takes what it needs */}
        <div className="hidden md:flex flex-none items-center space-x-8 lg:space-x-12 text-[12px] lg:text-[13px] font-semibold tracking-widest uppercase text-gray-800">
          {[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Practices", href: "#practices" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative group transition-colors hover:text-black"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right: Button - Flex-1 matches the Left side to keep center links perfectly centered */}
        <div className="hidden md:flex flex-1 justify-end items-center">
          <a
            href="#contact"
            className="px-6 lg:px-8 py-3 bg-[#0A1128] text-white text-[10px] lg:text-[11px] font-bold tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:bg-[#C5A059] hover:shadow-lg hover:-translate-y-0.5"
          >
            Free Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <div
          className="md:hidden ml-auto flex items-center z-[110]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-7 h-7 text-[#0A1128] cursor-pointer hover:text-[#C5A059] transition-all duration-300 transform rotate-0" />
          ) : (
            <Menu className="w-7 h-7 text-[#0A1128] cursor-pointer hover:text-[#C5A059] transition-all duration-300" />
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[100] bg-white md:hidden h-screen w-screen"
        style={{
          transform: "translateX(100%)",
          opacity: 0,
          visibility: "hidden",
        }}
      >
        <div className="flex flex-col h-full pt-40 px-6 space-y-12 items-center text-center">
          {[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Practices", href: "#practices" },
            { name: "Free Consultation", href: "#contact" },
          ].map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-serif font-bold text-[#0A1128] hover:text-[#C5A059] transition-colors flex flex-col items-center gap-2 group"
            >
              <span className="text-[#C5A059] text-[10px] font-sans tracking-[0.3em] uppercase opacity-70">
                0{idx + 1}
              </span>
              {item.name}
              <div className="h-[1px] w-0 bg-[#C5A059] group-hover:w-full transition-all duration-300"></div>
            </a>
          ))}

          <div className="pt-6 flex flex-col items-center space-y-4">
            <p className="text-gray-600 text-[10px] font-medium tracking-[0.2em] uppercase">
              Santa Barbara • Oxnard • Ventura
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}

      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center pt-20 pb-20 bg-white overflow-hidden"
      >
        {/* Architectural Background with Parallax effect */}
        <div className="absolute inset-0 z-0 opacity-[0.03] lg:opacity-[0.05]">
          <img
            src="/assets/background.avif"
            alt="Architectural background"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white/50"></div>
        </div>

        {/* Decorative Ambient Accents */}
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-[#C5A059]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[10%] -right-[5%] w-[30%] h-[30%] bg-[#0A1128]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Text: High-Impact Typography */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-3 mb-4 opacity-0 reveal">
              <div className="h-[1px] w-10 bg-[#C5A059]"></div>
              <span className="text-[#C5A059] font-sans font-black tracking-[0.4em] uppercase text-[12px]">
                Prestige Legal Representation
              </span>
            </div>

            <h1
              ref={headlineRef}
              className="text-4xl md:text-6xl lg:text-[4.5rem] font-serif font-black leading-[0.9] mb-4 text-[#0A1128] tracking-tighter"
            >
              <span className="hero-word block">Need</span>{" "}
              <span className="hero-word text-[#C5A059] pr-4">Litigation?</span>
            </h1>

            <p className="text-base md:text-[24px] text-slate-700 mb-6 font-medium leading-[1.4] max-w-xl opacity-0 reveal">
              The Law Office of Osbelia Castillo delivers elite defense
              strategies with
              <span className="text-[#0A1128] font-bold">
                {" "}
                surgical precision
              </span>{" "}
              and bilingual expertise.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 opacity-0 reveal">
              <div ref={ctaRef}>
                <a
                  href="tel:8052837656"
                  className="group relative bg-[#0A1128] text-white px-8 py-4 rounded-full font-sans font-black tracking-[0.2em] text-[13px] uppercase hover:bg-[#C5A059] transition-all flex items-center gap-2 shadow-[0_15px_30px_rgba(10,17,40,0.1)] hover:-translate-y-1 transform duration-500 magnetic-btn"
                >
                  <Phone className="w-4 h-4 text-[#C5A059] group-hover:text-white transition-colors" />
                  805-283-7656
                </a>
              </div>
              <p className="text-[#0A1128] font-serif italic text-sm border-b border-[#C5A059]/30 pb-0.5">
                Consultation in English & Spanish
              </p>
            </div>
          </div>

          {/* Right Form: Glassmorphism Luxury Container */}
          <div className="lg:col-span-5 relative z-10 mb-2">
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 md:p-10 rounded-[1.25rem] shadow-[0_20px_60px_rgba(10,17,40,0.05)] relative md:h-[480px] overflow-hidden reveal flex flex-col justify-center">
              {/* Internal Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 w-full">
                <div className="mb-6">
                  <p className="text-[#C5A059] font-sans font-black tracking-[0.3em] uppercase text-[10px] mb-1">
                    Case Submission
                  </p>
                  <h2 className="text-xl md:text-2xl font-serif font-bold text-[#0A1128] tracking-tight leading-none">
                    Free Consultation
                  </h2>
                </div>

                <form className="space-y-3.5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full bg-white/50 border border-slate-200 rounded-lg px-4 py-3 text-xs outline-none focus:border-[#C5A059] transition-all text-black placeholder:text-slate-400"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full bg-white/50 border border-slate-200 rounded-lg px-4 py-3 text-xs outline-none focus:border-[#C5A059] transition-all text-black placeholder:text-slate-400"
                      required
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/50 border border-slate-200 rounded-lg px-4 py-3 text-xs outline-none focus:border-[#C5A059] transition-all text-black placeholder:text-slate-400"
                    required
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="relative">
                      <select
                        className="w-full bg-white/50 border border-slate-200 rounded-lg px-4 py-3 text-xs text-slate-500 appearance-none outline-none focus:border-[#C5A059]"
                        defaultValue="Select State"
                      >
                        <option value="Select State">Select State</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="District of Columbia">
                          District of Columbia
                        </option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#C5A059]">
                        <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                      </div>
                    </div>

                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full bg-white/50 border border-slate-200 rounded-lg px-4 py-3 text-xs outline-none focus:border-[#C5A059] transition-all text-black placeholder:text-slate-400"
                      required
                    />
                  </div>

                  <textarea
                    rows={3}
                    placeholder="Briefly describe your case"
                    className="w-full bg-white/50 border border-slate-200 rounded-lg px-4 py-3 text-xs outline-none focus:border-[#C5A059] transition-all text-black resize-none placeholder:text-slate-400"
                    required
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-[#0A1128] text-white font-sans font-black tracking-[0.2em] uppercase text-[12px] py-4 rounded-lg hover:bg-[#C5A059] transition-all shadow-lg mt-2 cursor-pointer"
                  >
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Improved Settlement Ticker */}
        <div className="absolute bottom-0 left-0 w-full bg-[#0A1128] py-4 overflow-hidden whitespace-nowrap z-20 border-t border-[#C5A059]/10">
          <div className="gsap-marquee inline-block will-change-transform cursor-default">
            {[
              ...settlements,
              ...settlements,
              ...settlements,
              ...settlements,
            ].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center mx-12 text-white/40 font-sans font-black tracking-[0.2em] uppercase text-[12px] transition-all duration-600 hover:text-[#C5A059]"
              >
                <span className="w-2 h-2 bg-[#C5A059] mr-8 rounded-full shadow-[0_0_10px_rgba(197,160,89,0.5)]"></span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Osbelia Castillo Section */}
      <section
        id="about"
        className="py-24 px-6 bg-[#FCFCFC] relative overflow-hidden"
      >
        {/* Animated Decorative elements */}
        <div className="about-bg-skew absolute top-0 right-0 w-1/3 h-full bg-[#0A1128]/5 transform skew-x-12 translate-x-32 hidden lg:block opacity-0"></div>
        <div className="about-glow absolute top-20 left-10 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl opacity-0"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12 about-header opacity-0">
            <p className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-[12px] mb-4">
              Legal Leadership
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A1128] leading-tight">
              About Osbelia Castillo
            </h2>
          </div>

          {/* The main card with a reveal animation */}
          <div className="about-card bg-white rounded-[2rem] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100 relative opacity-0">
            {/* Accent corner that pulses on hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C5A059]/20 to-transparent rounded-bl-full rounded-tr-[2rem] transition-all duration-700 group-hover:scale-110"></div>

            <div className="space-y-6 text-gray-800 font-normal leading-relaxed text-base md:text-lg relative z-10 mb-10">
              <p className="about-p opacity-0">
                For over five years, Osbelia has worked as an aggressive civil
                litigator representing insurance companies in both state and
                federal court. She has handled hundreds of personal injury cases
                including catastrophic injuries, wrongful deaths, and complex
                liability cases.
              </p>
              <p className="about-p opacity-0">
                Her experience representing insurance companies gives her an
                <span className="text-[#0A1128] font-bold">
                  {" "}
                  edge when fighting for her injured clients.
                </span>{" "}
                Her background on the defense side provides a unique perspective
                to achieve favorable results at an early stage.
              </p>
              <div className="about-p flex items-center gap-4 opacity-0">
                <div className="h-[1px] w-12 bg-[#C5A059]"></div>
                <span className="text-[#C5A059] font-bold tracking-widest text-xs uppercase">
                  Fluent in English & Spanish
                </span>
              </div>
            </div>

            <div className="about-button opacity-0">
              <a
                href="#home"
                className="inline-flex items-center gap-3 bg-[#0A1128] text-white px-10 py-4 rounded-full font-bold tracking-[0.2em] uppercase text-[10px] md:text-[14px] hover:bg-[#C5A059] transition-all shadow-xl hover:-translate-y-1 transform duration-300 group"
              >
                Read Full Profile
                <ArrowRight className="w-4 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Practices Section */}
      <section id="practices" className="py-24 px-6 bg-white reveal">
        <div className="max-w-6xl mx-auto">
          {" "}
          {/* Constrained to match Hero width */}
          {/* Section Header - More Minimal */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <p className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-[12px] mb-3">
                Expertise & Focus
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A1128] leading-tight">
                Practice Areas
              </h2>
            </div>
            <div className="hidden md:block">
              <div className="h-[1px] w-24 bg-gray-200 mb-4"></div>
              <p className="text-gray-700 text-sm italic">
                Dedicated to your recovery.
              </p>
            </div>
          </div>
          {/* Grid - Refined Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Personal Injury",
                desc: "Handling catastrophic injuries with an aggressive approach to secure the compensation you deserve.",
                image: "/assets/per-injury-new.jpg",
                link: "/practice-areas/personal-injury/",
              },
              {
                title: "Vehicle Accidents",
                desc: "Expert representation for highway collisions, side-street accidents, and complex parking lot cases.",
                image: "/assets/car-accident-pennsylvania-optimize.jpg",
                link: "/practice-areas/vehicle-accidents/",
              },
              {
                title: "Wrongful Death",
                desc: "Compassionate legal support for families seeking justice after the loss of a loved one due to negligence.",
                image: "/assets/wrong-death-new.jpg",
                link: "/practice-areas/wrongful-death/",
              },
              {
                title: "Workers' Comp",
                desc: "Protecting your right to a safe workplace and ensuring full benefits for on-the-job injuries.",
                image: "/assets/workerscomp-new.jpg",
                link: "/practice-areas/workers-compensation/",
              },
            ].map((practice, idx) => (
              <div
                key={idx}
                className="group relative bg-white border border-gray-100 p-2 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:border-transparent rounded-xl"
              >
                {/* Image Container */}
                <div className="overflow-hidden relative h-56 rounded-lg mb-6">
                  <div className="absolute inset-0 bg-[#0A1128]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={practice.image}
                    alt={practice.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Text Content */}
                <div className="px-4 pb-6">
                  <h3 className="text-xl font-serif font-bold text-[#0A1128] mb-3 group-hover:text-[#C5A059] transition-colors duration-300">
                    {practice.title}
                  </h3>
                  <p className="text-gray-700 font-normal leading-relaxed text-sm mb-6 line-clamp-3">
                    {practice.desc}
                  </p>

                  <a
                    href="#home"
                    className="inline-flex items-center gap-2 text-[#0A1128] font-bold text-[12px] tracking-[0.15em] uppercase border-b border-gray-200 pb-1 group-hover:border-[#C5A059] transition-all"
                  >
                    Explore Area
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call Us Section */}
      <section
        id="contact"
        className="py-24 lg:py-32 px-6 bg-white overflow-hidden relative"
      >
        {/* The "Justice" watermark remains but is shifted to the side for a more editorial feel */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none z-0">
          <div className="text-[30vw] font-serif font-black text-[#0A1128] select-none tracking-tighter leading-none -rotate-90 origin-left">
            JUSTICE
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 border-t border-gray-100 pt-20">
            {/* Left: Content Side */}
            <div className="lg:w-3/5 text-left contact-content opacity-0">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-[1px] w-12 bg-[#C5A059]"></div>
                <p className="text-[#C5A059] font-bold tracking-[0.4em] uppercase text-[10px] md:text-[12px]">
                  Consultation Offereed in English & Spanish
                </p>
              </div>

              <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#0A1128] mb-8 tracking-tight leading-[1.05]">
                Ready to <span className="text-[#C5A059]">Defend</span> <br />
                Your Future.
              </h2>

              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-xl">
                We take the time to examine every detail of your case. Let us
                guide you through your legal options with clarity and
                dedication.
              </p>
            </div>

            {/* Right: Interactive Phone Side */}
            <div className="lg:w-2/5 w-full contact-action opacity-0">
              <div className="relative group p-1 bg-gradient-to-br from-gray-100 to-transparent rounded-[2.5rem]">
                <div className="bg-white border border-gray-100 rounded-[2.4rem] p-10 md:p-14 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)] flex flex-col items-center text-center">
                  <p className="text-gray-400 font-serif italic text-sm mb-8">
                    Speak directly with our team
                  </p>

                  <a
                    href="tel:8052837656"
                    className="group relative flex flex-col items-center gap-6 magnetic-btn"
                  >
                    {/* Animated Phone Icon */}
                    <div className="w-20 h-20 bg-[#0A1128] rounded-full flex items-center justify-center text-[#C5A059] transition-transform duration-500 group-hover:scale-110 shadow-xl">
                      <Phone className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                    </div>

                    <div className="space-y-2">
                      <span className="block text-3xl md:text-4xl font-serif font-bold text-[#0A1128] tracking-tight">
                        805-283-7656
                      </span>
                      <span className="block text-[#C5A059] font-bold tracking-[0.2em] uppercase text-[10px] border-b border-[#C5A059]/30 pb-1">
                        Click to Call
                      </span>
                    </div>
                  </a>

                  <div className="mt-12 pt-8 border-t border-gray-50 w-full text-center">
                    <p className="text-gray-400 text-[11px] uppercase tracking-widest font-bold">
                      Initial Consultation — No Charge
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-6 bg-[#FCFCFC] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Left: Image with reveal-left class */}
            <div className="process-image opacity-0">
              <p className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-[14px] mb-4">
                What We Do
              </p>
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/assets/556-1.png"
                  alt="The Law Office of Osbelia Castillo"
                  width={500}
                  height={500}
                  unoptimized
                  className="object-contain object-left"
                />
              </div>
              <div className="process-line h-1 w-0 bg-[#C5A059] mt-8"></div>
            </div>

            {/* Right: Text with reveal-right class */}
            <div className="process-text opacity-0 space-y-6 text-gray-800 font-normal leading-relaxed text-base md:text-lg">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A1128] leading-tight">
                Defining Goals, Method & Success Together
              </h2>
              <p>
                By conducting various internal investigation activities and
                implementing risk management assessments, our approach saves our
                clients time and money over the long term.
              </p>
              <p>
                Organically grow the holistic world view of disruptive
                innovation via workplace diversity and empowerment.
              </p>
            </div>
          </div>

          {/* Part 2: 4-Step Process Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Scale className="w-6 h-6" />,
                title: "Get Your Legal Advice",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Work With Expert Lawyers",
              },
              {
                icon: <Banknote className="w-6 h-6" />,
                title: "Have Great Discounted Rates",
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Review Your Case Documents",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="process-card opacity-0 group relative p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#0A1128] rounded-xl flex items-center justify-center text-[#C5A059] mb-6 shadow-lg group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-500">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#0A1128] leading-snug group-hover:text-[#C5A059] transition-colors">
                    {step.title}
                  </h3>
                  <div className="w-8 h-[2px] bg-gray-100 mt-4 group-hover:w-12 group-hover:bg-[#C5A059] transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FCFCFC] border-t border-gray-100 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
            {/* Column 1: Logo & About */}
            <div className="lg:col-span-4 space-y-8">
              <div className="h-10 relative">
                <Image
                  src="/assets/logo.png"
                  alt="The Law Office of Osbelia Castillo"
                  fill
                  unoptimized
                  className="object-contain object-left"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed max-w-sm font-normal">
                A Santa Barbara, Oxnard & Ventura professional group of lawyers
                specializing in Personal injury, Vehicular Accidents, Wrongful
                Death and Workers’ Compensation cases.
              </p>
              <a
                href="#home"
                className="text-[#C5A059] text-xs font-bold uppercase tracking-widest hover:text-[#0A1128] transition-colors flex items-center gap-2 group"
              >
                Read More
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-3">
              <h3 className="text-[#0A1128] font-serif font-bold text-lg mb-8">
                Quick Links
              </h3>
              <ul className="space-y-4 text-sm text-gray-700 font-normal">
                {[
                  { label: "Home", href: "#" },
                  { label: "Attorneys", href: "#about" },
                  { label: "Personal Injury", href: "#practices" },
                  { label: "Vehicular Accident", href: "#practices" },
                  { label: "Wrongful Death", href: "#practices" },
                  { label: "Worker’s Compensation", href: "#practices" },
                  { label: "News", href: "#" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="hover:text-[#C5A059] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div className="lg:col-span-5">
              <h3 className="text-[#0A1128] font-serif font-bold text-lg mb-8">
                Contact Us
              </h3>
              <div className="space-y-6">
                <p className="text-gray-700 text-sm font-normal leading-relaxed">
                  The Law Office of Osbelia Castillo is ready to examine the
                  facts of your case, and we will explain your options in
                  English or Spanish. Call us today for a free consultation!
                </p>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">
                      Phone Number
                    </p>
                    <a
                      href="tel:8052837656"
                      className="text-[#0A1128] font-serif font-bold text-lg"
                    >
                      805-283-7656
                    </a>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">
                    Office Address
                  </p>
                  <p className="text-[#0A1128] text-sm leading-relaxed font-normal">
                    <span className="font-bold">
                      Law Offices of Osbelia Castillo
                    </span>
                    <br />
                    315 Meigs Rd, Ste A142
                    <br />
                    Santa Barbara, California 93109
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
            <p>
              © 2026 The Law Office of Osbelia Castillo. All Rights Reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#C5A059] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#C5A059] transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
