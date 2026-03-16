"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Scale, Phone, AlertTriangle, ArrowRight, Smartphone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

gsap.registerPlugin(ScrollTrigger);

const CellPhoneUseContent = () => {
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
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-[#0A1128] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C5A059]/5 transform skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 mb-6 hero-reveal">
                <div className="h-[1px] w-10 bg-[#C5A059]"></div>
                <span className="text-[#C5A059] font-sans font-black tracking-[0.4em] uppercase text-[12px]">
                  Vehicle Accidents
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight hero-reveal">
                Cell Phone Use <br />
                <span className="text-[#C5A059] italic">Negligence</span>
              </h1>
              <p className="text-xl text-white/70 font-light leading-relaxed mb-10 hero-reveal max-w-2xl">
                Distracted driving is a choice that leads to tragedy. We hold drivers accountable for 
                endangering others by prioritizing their screens over the road.
              </p>
            </div>

            {/* Right Side: Premium Portrait */}
            <div className="lg:col-span-5 relative w-full h-[280px] md:h-[300px] lg:h-[300px] hero-portrait flex items-start justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] h-full rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] border border-white/20 bg-white/5 backdrop-blur-sm">
                 <div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/10 to-transparent"></div>
                 <Image
                   src="/assets/osbelia-castillo.jpg"
                   alt="Lawyer Osbelia Castillo handling distracted driving and cell phone negligence cases"
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
          <div className="lg:col-span-8 space-y-16">
            <div className="reveal-up">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A1128] mb-8">
                Combating Distracted Driving
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Cell phone use including texting, calling without hands-free devices, or using 
                apps while driving is a primary cause of serious accidents today. We specialize 
                in uncovering the evidence needed to prove digital distraction.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Smartphone className="w-6 h-6" />,
                    title: "Digital Forensics",
                    desc: "Subpoenaing phone records and analyzing data timestamps to prove phone use during the collision.",
                  },
                  {
                    icon: <AlertTriangle className="w-6 h-6" />,
                    title: "High-Impact Liability",
                    desc: "Proving gross negligence when drivers intentionally violate distracted driving laws.",
                  },
                  {
                    icon: <Scale className="w-6 h-6" />,
                    title: "Victim Rights",
                    desc: "Ensuring you receive full compensation for medical treatment, property damage, and trauma.",
                  },
                  {
                    icon: <Phone className="w-6 h-6" />,
                    title: "Hands-Free Violations",
                    desc: "Identifying when drivers failed to use legally required safety equipment.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-8 bg-[#FCFCFC] border border-gray-100 rounded-2xl hover:shadow-lg transition-all"
                  >
                    <div className="text-[#C5A059] mb-4">{item.icon}</div>
                    <h4 className="text-xl font-serif font-bold text-[#0A1128] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
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

export default CellPhoneUseContent;
