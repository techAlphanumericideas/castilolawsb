"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Scale, AlertCircle, FileText, CheckCircle2 } from "lucide-react";
import ContactForm from "@/components/ContactForm";

gsap.registerPlugin(ScrollTrigger);

const SlipAndFallContent = () => {
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
      {/* Practice Area Hero */}
      <section className="relative pt-40 pb-24 bg-[#0A1128] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C5A059]/5 transform skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 mb-6 hero-reveal">
                <div className="h-[1px] w-10 bg-[#C5A059]"></div>
                <span className="text-[#C5A059] font-sans font-black tracking-[0.4em] uppercase text-[12px]">
                  Personal Injury Specialists
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight hero-reveal">
                Slip and Fall <br />
                <span className="text-[#C5A059] italic">Accident Attorneys</span>
              </h1>
              <p className="text-xl text-white/70 font-light leading-relaxed mb-10 hero-reveal max-w-2xl">
                Recovering justice for premises liability victims in Santa
                Barbara, Oxnard, and Ventura.
              </p>
            </div>

            {/* Right Side: Replicated Homepage Portrait Style */}
            <div className="lg:col-span-5 relative w-full h-[280px] md:h-[300px] lg:h-[300px] hero-portrait flex items-start justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] h-full rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] border border-white/20 bg-white/5 backdrop-blur-sm">
                 <div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/10 to-transparent"></div>
                 <Image
                   src="/assets/osbelia-castillo.jpg"
                   alt="Attorney Osbelia Castillo - Slip and Fall and Premises Liability Specialist"
                   fill
                   className="object-cover object-top scale-105"
                   priority
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-20">
            <div className="reveal-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#0A1128] flex items-center justify-center text-[#C5A059]">
                  <Scale className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A1128]">
                  Premises Liability
                </h2>
              </div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed font-normal">
                Premises liability arises when an injury is caused by an unsafe
                or defective condition on someone's property. Owners have the
                legal duty to keep their property safe for visitors.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Wet or greasy floors",
                  "Torn carpeting",
                  "Narrow or uneven stairs",
                  "Broken or cracked public sidewalks",
                  "Poor lighting",
                  "Uneven pavement",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-[#FCFCFC] border border-gray-100 rounded-xl"
                  >
                    <AlertCircle className="w-5 h-5 text-[#C5A059] mt-0.5" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#0A1128] flex items-center justify-center text-[#C5A059]">
                  <FileText className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A1128]">
                  Proving Negligence
                </h2>
              </div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                To win a compensation claim, we must demonstrate that the
                property owner knew or should have known about the dangerous
                condition and failed to address it.
              </p>
              <div className="space-y-4">
                {[
                  "Establishing the property owner created the condition.",
                  "Proving actual knowledge of the defect.",
                  "Demonstrating constructive knowledge (failure to inspect).",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-all"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#C5A059] shrink-0" />
                    <p className="text-gray-700 font-medium">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SlipAndFallContent;
