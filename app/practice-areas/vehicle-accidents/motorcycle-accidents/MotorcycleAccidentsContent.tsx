"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Scale, ShieldCheck, ArrowRight, Bike } from "lucide-react";
import ContactForm from "@/components/ContactForm";

gsap.registerPlugin(ScrollTrigger);

const MotorcycleAccidentsContent = () => {
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
                Motorcycle <br />
                <span className="text-[#C5A059] italic">Accidents</span>
              </h1>
              <p className="text-xl text-white/70 font-light leading-relaxed mb-10 hero-reveal max-w-2xl">
                Riders face unique risks on the road. We provide aggressive representation 
                to protect your rights and recover compensation for serious motorcycle injuries.
              </p>
            </div>

            {/* Right Side: Premium Portrait */}
            <div className="lg:col-span-5 relative w-full h-[280px] md:h-[300px] lg:h-[300px] hero-portrait flex items-start justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] h-full rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] border border-white/20 bg-white/5 backdrop-blur-sm">
                 <div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/10 to-transparent"></div>
                 <Image
                   src="/assets/osbelia-castillo.jpg"
                   alt="Attorney Osbelia Castillo - Dedicated Motorcycle Accident Lawyer for Injured Riders"
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
                Protecting the Rights of Motorcyclists
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Motorcycle accidents often result in severe, life-altering injuries due to the 
                lack of protection for the rider. We understand the bias riders often face and 
                fight to ensure you are treated fairly by insurance companies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Bike className="w-6 h-6" />,
                    title: "Rider Advocacy",
                    desc: "Combating the negative stereotypes associated with motorcyclists to prove driver error.",
                  },
                  {
                    icon: <ShieldCheck className="w-6 h-6" />,
                    title: "Injury Expertise",
                    desc: "Specializing in cases involving road rash, broken bones, and head injuries.",
                  },
                  {
                    icon: <Scale className="w-6 h-6" />,
                    title: "Liability Defense",
                    desc: "Proving that the other driver's failure to see or respect your lane caused the accident.",
                  },
                  {
                    icon: <ArrowRight className="w-6 h-6" />,
                    title: "Future Costs",
                    desc: "Calculating long-term rehabilitation and medical expenses for severe bike accidents.",
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

export default MotorcycleAccidentsContent;
