"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Phone,
  Scale,
  Users,
  Banknote,
  FileText,
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const tHero = useTranslations("Hero");
  const tSets = useTranslations("Settlements");
  const tAbout = useTranslations("About");
  const tPractices = useTranslations("PracticeAreas");
  const tContact = useTranslations("Contact");
  const tProcess = useTranslations("Process");

  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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
        ".hero-portrait",
        { opacity: 0, y: -50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out" }
      ).fromTo(
        heroWords,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.5"
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

  const settlements = [
    `$3,500,000 ${tSets("carAccident")}`,
    `$3,400,000 ${tSets("spinalInjury")}`,
    `$2,000,000 ${tSets("carAccident")}`,
    `$1,750,000 ${tSets("motorVehicle")}`,
    `$1,600,000 ${tSets("pedestrian")}`,
  ];

  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}

      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center pt-32 pb-32 bg-white overflow-hidden"
      >
        {/* Architectural Background with Parallax effect */}
        <div className="absolute inset-0 z-0 opacity-[0.35] lg:opacity-[0.35]">
          <img
            src="/assets/hero-background.png"
            alt="The Law Office of Osbelia Castillo - Architectural legal building background"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white/50"></div>
          
        </div>


        {/* Decorative Ambient Accents */}
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-[#C5A059]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[10%] -right-[5%] w-[30%] h-[30%] bg-[#0A1128]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col items-center">
          

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full mb-16">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 flex flex-col items-start text-left pt-8">
              <div className="inline-flex items-center gap-3 mb-6 opacity-0 reveal">
                <div className="h-[1px] w-10 bg-[#C5A059]"></div>
                <span className="text-[#C5A059] font-sans font-black tracking-[0.4em] uppercase text-[12px]">
                  {tHero("prestige")}
                </span>
              </div>

              <h1
                ref={headlineRef}
                className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-black leading-[0.9] mb-8 text-[#0A1128] tracking-tighter"
              >
                <span className="hero-word block">{tHero("need")}</span>{" "}
                <span className="hero-word text-[#C5A059]">{tHero("litigation")}</span>
              </h1>

              <div className="text-xl md:text-[26px] text-slate-700 mb-10 font-medium leading-[1.3] max-w-2xl opacity-0 reveal">
                {tHero.rich("description", {
                  precision: (chunks) => <span className="text-[#0A1128] font-bold">{chunks}</span>
                })}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 opacity-0 reveal">
                <div ref={ctaRef}>
                  <a
                    href="tel:8052837656"
                    aria-label={tHero("ariaCall")}
                    className="group relative bg-[#0A1128] text-white px-10 py-5 rounded-full font-sans font-black tracking-[0.2em] text-[15px] uppercase hover:bg-[#C5A059] transition-all flex items-center gap-2 shadow-[0_20px_40px_rgba(10,17,40,0.15)] hover:-translate-y-1 transform duration-500 magnetic-btn"
                  >
                    <Phone className="w-5 h-5 text-[#C5A059] group-hover:text-white transition-colors" />
                    805-283-7656
                  </a>
                </div>
                <p className="text-[#0A1128] font-serif italic text-lg border-b border-[#C5A059]/30 pb-1">
                  {tHero("consultation")}
                </p>
              </div>
            </div>

            {/* Right Column: Premium Portrait - 400x300 Rounded Rect */}
            <div className="lg:col-span-5 relative w-full h-[400px] md:h-[300px] lg:h-[300px] hero-portrait flex items-start justify-center lg:translate-y-4 lg:mt-10">
              <div className="relative w-full max-w-[400px] h-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white/40 bg-white/30 backdrop-blur-sm">
                {/* Elegant Background Shape behind the Lawyer */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/10 to-transparent"></div>
                <Image
                  src="/assets/osbelia-castillo.jpg"
                  alt="Principal Attorney Osbelia Castillo - Personal Injury and Vehicle Accident Specialist"
                  fill
                  className="object-cover object-top scale-105"
                  priority
                  unoptimized
                />
              </div>
              
            </div>
          </div>

          {/* Bottom: Modern Horizontal Form Bar */}
          <div className="w-full relative z-10 -mt-8">
            <div className="bg-white/80 backdrop-blur-2xl border border-white/40 p-1 md:p-2 rounded-[2.5rem] shadow-[0_30px_90px_rgba(10,17,40,0.08)] reveal">
              <div className="bg-[#FCFCFC]/80 rounded-[2.25rem] p-6 md:p-8 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  {/* Form Label */}
                  <div className="lg:w-1/4">
                    <p className="text-[#C5A059] font-sans font-black tracking-[0.3em] uppercase text-[10px] mb-2">
                      {tHero("getStarted")}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0A1128] tracking-tight leading-none italic">
                      {tHero("freeConsultation")}
                    </h2>
                  </div>

                  {/* Horizontal Form Fields */}
                  <form className="lg:w-3/4 flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                      <input
                        type="text"
                        placeholder={tHero("firstName")}
                        className="bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#C5A059] transition-all text-black placeholder:text-slate-400"
                        required
                      />
                      <input
                        type="text"
                        placeholder={tHero("lastName")}
                        className="bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#C5A059] transition-all text-black placeholder:text-slate-400"
                        required
                      />
                      <input
                        type="email"
                        placeholder={tHero("email")}
                        className="bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#C5A059] transition-all text-black placeholder:text-slate-400 lg:col-span-2"
                        required
                      />
                    </div>

                    <div className="flex flex-col md:flex-row gap-3">
                      <textarea
                        rows={1}
                        placeholder={tHero("describeCase")}
                        className="flex-grow bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#C5A059] transition-all text-black resize-none placeholder:text-slate-400 min-h-[56px]"
                        required
                      ></textarea>
                      <button
                        type="submit"
                        aria-label={tHero("ariaSubmit")}
                        className="md:w-64 bg-[#0A1128] text-white font-sans font-black tracking-[0.2em] uppercase text-[13px] py-4 rounded-xl hover:bg-[#C5A059] transition-all shadow-xl cursor-pointer"
                      >
                        {tHero("sendRequest")}
                      </button>
                    </div>
                  </form>
                </div>
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
              {tAbout("leadership")}
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A1128] leading-tight">
              {tAbout("title")}
            </h2>
          </div>

          {/* The main card with a reveal animation */}
          <div className="about-card bg-white rounded-[2rem] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100 relative opacity-0">
            {/* Accent corner that pulses on hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C5A059]/20 to-transparent rounded-bl-full rounded-tr-[2rem] transition-all duration-700 group-hover:scale-110"></div>

            <div className="space-y-6 text-gray-800 font-normal leading-relaxed text-base md:text-lg relative z-10 mb-10">
              <p className="about-p opacity-0">
                {tAbout("p1")}
              </p>
              <p className="about-p opacity-0">
                {tAbout.rich("p2", {
                  edge: (chunks) => <span className="text-[#0A1128] font-bold">{chunks}</span>
                })}
              </p>
              <div className="about-p flex items-center gap-4 opacity-0">
                <div className="h-[1px] w-12 bg-[#C5A059]"></div>
                <span className="text-[#C5A059] font-bold tracking-widest text-xs uppercase">
                  {tAbout("fluent")}
                </span>
              </div>
            </div>

            <div className="about-button opacity-0">
              <a
                href="/attorneys/osbelia-castillo"
                aria-label={tAbout("ariaProfile")}
                className="inline-flex items-center gap-3 bg-[#0A1128] text-white px-10 py-4 rounded-full font-bold tracking-[0.2em] uppercase text-[10px] md:text-[14px] hover:bg-[#C5A059] transition-all shadow-xl hover:-translate-y-1 transform duration-300 group"
              >
                {tAbout("readProfile")}
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
                {tPractices("expertise")}
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A1128] leading-tight">
                {tPractices("title")}
              </h2>
            </div>
            <div className="hidden md:block">
              <div className="h-[1px] w-24 bg-gray-200 mb-4"></div>
              <p className="text-gray-700 text-sm italic">
                {tPractices("subtitle")}
              </p>
            </div>
          </div>
          {/* Grid - Refined Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: tPractices("piTitle"),
                desc: tPractices("piDesc"),
                image: "/assets/per-injury-new.jpg",
                link: "/practice-areas/personal-injury/",
              },
              {
                title: tPractices("vaTitle"),
                desc: tPractices("vaDesc"),
                image: "/assets/car-accident-pennsylvania-optimize.jpg",
                link: "/practice-areas/vehicle-accidents/",
              },
              {
                title: tPractices("wdTitle"),
                desc: tPractices("wdDesc"),
                image: "/assets/wrong-death-new.jpg",
                link: "/practice-areas/wrongful-death/",
              },
              {
                title: tPractices("wcTitle"),
                desc: tPractices("wcDesc"),
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
                    href={practice.link}
                    className="inline-flex items-center gap-2 text-[#0A1128] font-bold text-[12px] tracking-[0.15em] uppercase border-b border-gray-200 pb-1 group-hover:border-[#C5A059] transition-all"
                  >
                    {tPractices("explore")}
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
                  {tContact("fluent")}
                </p>
              </div>

              <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#0A1128] mb-8 tracking-tight leading-[1.05]">
                {tContact.rich("ready", {
                  defend: (chunks) => <span className="text-[#C5A059]">{chunks}</span>
                })}
              </h2>

              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-xl">
                {tContact("description")}
              </p>
            </div>

            {/* Right: Interactive Phone Side */}
            <div className="lg:w-2/5 w-full contact-action opacity-0">
              <div className="relative group p-1 bg-gradient-to-br from-gray-100 to-transparent rounded-[2.5rem]">
                <div className="bg-white border border-gray-100 rounded-[2.4rem] p-10 md:p-14 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)] flex flex-col items-center text-center">
                  <p className="text-gray-400 font-serif italic text-sm mb-8">
                    {tContact("speakWithTeam")}
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
                        {tContact("clickToCall")}
                      </span>
                    </div>
                  </a>

                  <div className="mt-12 pt-8 border-t border-gray-50 w-full text-center">
                    <p className="text-gray-400 text-[11px] uppercase tracking-widest font-bold">
                      {tContact("initialConsultation")}
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
                {tProcess("whatWeDo")}
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
                {tProcess("title")}
              </h2>
              <p>
                {tProcess("p1")}
              </p>
              <p>
                {tProcess("p2")}
              </p>
            </div>
          </div>

          {/* Part 2: 4-Step Process Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Scale className="w-6 h-6" />,
                title: tProcess("step1"),
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: tProcess("step2"),
              },
              {
                icon: <Banknote className="w-6 h-6" />,
                title: tProcess("step3"),
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: tProcess("step4"),
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
    </main>
  );
}
