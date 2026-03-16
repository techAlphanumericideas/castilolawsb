"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  CheckCircle2,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

gsap.registerPlugin(ScrollTrigger);

const OsbeliaCastilloContent = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-up", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reveal-up",
          start: "top 85%",
        },
      });

      gsap.from(".hero-reveal", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        stagger: 0.1
      });

      gsap.from(".hero-portrait", {
        x: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef} className="bg-white min-h-screen">
      {/* Bio Hero */}
      <section className="relative pt-40 pb-24 bg-[#0A1128] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C5A059]/5 transform skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 mb-6 hero-reveal">
                <div className="h-[1px] w-10 bg-[#C5A059]"></div>
                <span className="text-[#C5A059] font-sans font-black tracking-[0.4em] uppercase text-[12px]">
                  Founding Attorney
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight hero-reveal">
                Osbelia <br />
                <span className="text-[#C5A059]">Castillo</span>
              </h1>
              <div className="bg-[#C5A059]/10 border-l-4 border-[#C5A059] p-6 mb-10 hero-reveal max-w-2xl">
                <p className="text-xl text-white italic font-serif leading-relaxed">
                  &quot;Having seen how insurance companies defend claims from the
                  inside, I now use that knowledge to fight for the maximum
                  recovery for my clients.&quot;
                </p>
              </div>
            </div>

            {/* Right Side: Replicated Homepage Portrait Style */}
            <div className="lg:col-span-5 relative w-full h-[450px] md:h-[500px] lg:h-[550px] hero-portrait flex items-start justify-center lg:justify-end">
              <div className="relative w-full max-w-[450px] h-full rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-white/20 bg-white/10 backdrop-blur-md">
                 <div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/20 to-transparent"></div>
                 <img
                   src="/assets/osbelia-castillo.jpg"
                   alt="Attorney Osbelia Castillo - Founding Lawyer of The Law Office of Osbelia Castillo"
                   className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Details */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-12">
            <div className="reveal-up">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A1128] mb-6">
                Professional Profile
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-normal">
                <p>
                  For over five years, Osbelia has worked as an aggressive civil
                  litigator representing insurance companies in both state and
                  federal court. She has handled hundreds of personal injury
                  cases including catastrophic injuries, wrongful deaths, and
                  complex liability cases.
                </p>
                <p>
                  Her experience representing insurance companies gives her an
                  edge when fighting for her injured clients. Her background on
                  the defense side provides a unique perspective to achieve
                  favorable results at an early stage.
                </p>
              </div>
            </div>

            <div className="reveal-up">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A1128] mb-8">
                Core Competencies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Catastrophic Injury Litigation",
                  "Insurance Defense Strategy",
                  "Complex Liability Analysis",
                  "Wrongful Death Representation",
                  "Bilingual Legal Advocacy",
                  "Pre-Trial Settlement Negotiation",
                ].map((skill, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-center p-6 bg-[#FCFCFC] border border-gray-100 rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-[#0A1128] text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden reveal-up">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/20 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-serif font-bold mb-8 relative z-10">
                  Direct Contact
                </h3>
                <div className="space-y-6 relative z-10">
                  <Link
                    key="direct-phone"
                    href="tel:8052837656"
                    aria-label="Call Attorney Osbelia Castillo directly"
                    className="flex items-center gap-4 hover:text-[#C5A059] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C5A059] transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="font-bold">805-283-7656</span>
                  </Link>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-white/70">
                      English & Spanish
                    </span>
                  </div>
                </div>
              </div>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OsbeliaCastilloContent;
