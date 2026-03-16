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
  ClipboardList,
} from "lucide-react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      const tl = gsap.timeline();
      const heroWords = document.querySelectorAll(".hero-word");

      tl.fromTo(
        heroWords,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.5,
        },
      )
        .fromTo(
          ".reveal",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
          "-=0.5",
        )
        .fromTo(
          ".hero-line",
          { scaleX: 0 },
          { scaleX: 1, duration: 1.5, ease: "expo.out" },
          "-=1",
        );

      // Scroll reveals
      gsap.fromTo(
        ".reveal-up",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".reveal-up",
            start: "top 85%",
          },
        },
      );

      // Specific section reveals
      const revealElems = document.querySelectorAll(".reveal");
      revealElems.forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      // Process Section Animations
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

      gsap.to(".process-line", {
        width: "80px",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".process-line",
          start: "top 90%",
        },
      });

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

      gsap.fromTo(
        ".process-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.4)",
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
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      aboutTl
        .to(".about-bg-skew", {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        })
        .to(
          ".about-glow",
          {
            opacity: 1,
            duration: 0.8,
          },
          "<",
        )
        .fromTo(
          ".about-header",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.2",
        )
        .fromTo(
          ".about-card",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          ".about-button",
          { scale: 0.8, opacity: 0 },
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
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#practices",
            start: "top 70%",
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
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        )
        .fromTo(
          ".contact-action",
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.4",
        );

      // Micro-interactions: Magnetic Button Effect
      const buttons = document.querySelectorAll(".magnetic-btn");
      buttons.forEach((btn) => {
        (btn as HTMLElement).addEventListener("mousemove", (e: MouseEvent) => {
          const rect = (btn as HTMLElement).getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.4,
            ease: "power2.out",
          });
        });
        (btn as HTMLElement).addEventListener("mouseleave", () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.3)",
          });
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center pt-20 pb-16 px-6 md:px-12 overflow-hidden bg-white"
      >
        {/* Architectural Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03] lg:opacity-[0.05]">
          <Image
            src="/assets/background.avif"
            alt="Law Office Architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white/50"></div>
        </div>

        {/* Decorative Ambient Accents */}
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-[#C5A059]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[10%] -right-[5%] w-[30%] h-[30%] bg-[#0A1128]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Left Text */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-3 mb-4 opacity-0 reveal">
              <div className="h-[1px] w-10 bg-[#C5A059]"></div>
              <span className="text-[#C5A059] font-sans font-black tracking-[0.4em] uppercase text-[10px] md:text-[12px]">
                Prestige Legal Representation
              </span>
            </div>

            <h1
              ref={headlineRef}
              className="text-5xl md:text-7xl xl:text-8xl font-serif font-bold text-[#0A1128] leading-[1.1] mb-6 tracking-tight overflow-hidden"
            >
              <span className="inline-block hero-word">Defense</span>{" "}
              <span className="inline-block hero-word text-[#C5A059]">
                Insights
              </span>
              <br />
              <span className="inline-block hero-word">Plaintiff</span>{" "}
              <span className="inline-block hero-word italic font-light">
                Results
              </span>
            </h1>

            <div className="hero-line h-[1px] w-32 bg-[#C5A059] mb-8 origin-left"></div>

            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10 opacity-0 reveal">
              Leveraging former insurance defense experience to secure maximum
              compensation for the injured in Santa Barbara & Ventura County.
            </p>

            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 opacity-0 reveal"
            >
              <a
                href="#contact"
                className="group relative px-10 py-5 bg-[#0A1128] text-white font-sans font-black tracking-[0.2em] uppercase text-[12px] rounded-full overflow-hidden transition-all hover:shadow-2xl active:scale-95"
              >
                <span className="relative z-10">Start Your Recovery</span>
                <div className="absolute inset-0 bg-[#C5A059] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </a>
              <div className="flex items-center gap-3 text-[#0A1128]">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold tracking-widest uppercase">
                  805-283-7656
                </span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-5 relative z-10 mb-2">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-6 bg-[#FCFCFC] relative overflow-hidden"
      >
        <div className="about-bg-skew absolute top-0 right-0 w-1/3 h-full bg-[#0A1128]/5 transform skew-x-12 translate-x-32 hidden lg:block opacity-0"></div>
        <div className="about-glow absolute top-20 left-10 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl opacity-0"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="about-header text-center mb-16 opacity-0">
            <p className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-[12px] mb-4">
              Our Vision
            </p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0A1128] tracking-tight">
              Aggressive Advocacy, <br />
              <span className="italic font-light">Sophisticated Strategy</span>
            </h2>
          </div>

          <div className="about-card bg-white rounded-[2rem] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100 relative opacity-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C5A059]/20 to-transparent rounded-bl-full rounded-tr-[2rem] transition-all duration-700 group-hover:scale-110"></div>

            <div className="space-y-6 text-gray-800 font-normal leading-relaxed text-base md:text-lg relative z-10 mb-10">
              <p>
                Osbelia Castillo brings a unique advantage to the table. Having
                spent five years as a civil litigator representing major
                insurance companies, she understands the tactics used to deny or
                minimize claims.
              </p>
              <p className="font-bold border-l-4 border-[#C5A059] pl-6 py-2 italic text-[#0A1128]">
                "We don't just guess what the insurance companies are
                thinking—we know how they work."
              </p>
              <p>
                Now, she uses that inside knowledge exclusively for the injured.
                Our firm combines high-level defense strategy with a
                compassionate, results-driven approach for our clients.
              </p>
            </div>

            <div className="about-button opacity-0">
              <a
                href="/attorneys/osbelia-castillo"
                className="inline-flex items-center gap-3 bg-[#0A1128] text-white px-10 py-4 rounded-full font-bold tracking-[0.2em] uppercase text-[10px] md:text-[14px] hover:bg-[#C5A059] transition-all shadow-xl hover:-translate-y-1 transform duration-300 group"
              >
                Read Full Profile
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Practices Section */}
      <section id="practices" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <p className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-[12px] mb-3">
                Expertise & Focus
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A1128] tracking-tight">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Personal Injury",
                desc: "Handling catastrophic injuries with an aggressive approach to secure the compensation you deserve.",
                image: "/assets/per-injury-new.jpg",
                link: "/practice-areas/personal-injury",
              },
              {
                title: "Vehicle Accidents",
                desc: "Expert representation for car, truck, and motorcycle accident victims throughout California.",
                image: "/assets/car-accident-pennsylvania-optimize.jpg",
                link: "/practice-areas/vehicle-accidents",
              },
              {
                title: "Wrongful Death",
                desc: "Compassionate legal support for families seeking justice after the loss of a loved one.",
                image: "/assets/wrong-death-new.jpg",
                link: "/practice-areas/wrongful-death",
              },
              {
                title: "Workers' Comp",
                desc: "Protecting the rights of injured workers and ensuring they receive full medical and financial benefits.",
                image: "/assets/workerscomp-new.jpg",
                link: "/practice-areas/workers-compensation",
              },
            ].map((practice, idx) => (
              <div
                key={idx}
                className="group relative bg-white border border-gray-100 p-2 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:border-transparent rounded-xl bento-card"
              >
                <div className="overflow-hidden relative h-56 rounded-lg mb-6">
                  <div className="absolute inset-0 bg-[#0A1128]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={practice.image}
                    alt={practice.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="px-4 pb-6">
                  <h3 className="text-xl font-serif font-bold text-[#0A1128] mb-3 group-hover:text-[#C5A059] transition-colors duration-300">
                    {practice.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {practice.desc}
                  </p>

                  <a
                    href={practice.link}
                    className="inline-flex items-center gap-2 text-[#0A1128] font-bold text-[12px] tracking-[0.15em] uppercase border-b border-gray-200 pb-1 group-hover:border-[#C5A059] transition-all"
                  >
                    Explore Area
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-6 bg-[#FCFCFC] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
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
                  className="w-full h-auto"
                />
              </div>
              <div className="process-line h-1 w-0 bg-[#C5A059] mt-8"></div>
            </div>

            <div className="process-text opacity-0 space-y-6 text-gray-800 font-normal leading-relaxed text-base md:text-lg">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A1128] leading-tight">
                Defining Goals, Method & Success Together
              </h2>
              <p>
                Our approach is rooted in meticulous preparation and tactical
                precision. We begin every case with a deep understanding of the
                individual’s needs, determining the most effective route to a
                successful recovery.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2.5"></div>
                  <p>In-depth analysis of insurance policies and liability.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2.5"></div>
                  <p>Aggressive negotiation fueled by defense-side data.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2.5"></div>
                  <p>
                    Trial-ready preparation for maximum settlement leverage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <ClipboardList />,
                title: "Evaluation",
                text: "Discovery of facts and evidence collection.",
              },
              {
                icon: <Scale />,
                title: "Strategy",
                text: "Designing the tactical approach to litigation.",
              },
              {
                icon: <Users />,
                title: "Advocacy",
                text: "Aggressive fighting for your rightful recovery.",
              },
              {
                icon: <Banknote />,
                title: "Result",
                text: "Securing the maximum compensation available.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 process-card"
              >
                <div className="text-[#C5A059] mb-4 opacity-70">
                  {step.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0A1128] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 lg:py-32 px-6 bg-white overflow-hidden relative"
      >
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none z-0">
          <div className="text-[30vw] font-serif font-black text-[#0A1128] select-none tracking-tighter leading-none -rotate-90 origin-left">
            JUSTICE
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 border-t border-gray-100 pt-20">
            <div className="lg:w-3/5 text-left contact-content opacity-0">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-[1px] w-12 bg-[#C5A059]"></div>
                <p className="text-gray-700 text-sm font-bold tracking-[0.2em] uppercase">
                  Consultation Offereed in English & Spanish
                </p>
              </div>

              <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#0A1128] leading-tight mb-8">
                Speak Directly with <br />
                <span className="text-[#C5A059]">Attorney Castillo</span>
              </h2>

              <p className="text-xl text-slate-600 font-light leading-relaxed max-w-xl">
                Ready to examine the facts of your case. We provide an
                aggressive approach to secure justice for you and your family.
              </p>
            </div>

            <div className="lg:w-2/5 w-full contact-action opacity-0">
              <div className="relative group p-1 bg-gradient-to-br from-gray-100 to-transparent rounded-[2.5rem]">
                <div className="bg-white border border-gray-100 rounded-[2.4rem] p-10 md:p-14 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)] flex flex-col items-center text-center">
                  <a
                    href="tel:8052837656"
                    className="group relative flex flex-col items-center gap-6 magnetic-btn"
                  >
                    <div className="w-20 h-20 bg-[#0A1128] rounded-full flex items-center justify-center text-[#C5A059] transition-transform duration-500 group-hover:scale-110 shadow-xl">
                      <Phone className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em] mb-2">
                        Get Help Now
                      </p>
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#0A1128]">
                        805-283-7656
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
