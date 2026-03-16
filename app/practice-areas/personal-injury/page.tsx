"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scale, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";

gsap.registerPlugin(ScrollTrigger);

const PersonalInjuryPage = () => {
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
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef} className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-[#0A1128] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C5A059]/5 transform skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-[1px] w-10 bg-[#C5A059]"></div>
              <span className="text-[#C5A059] font-sans font-black tracking-[0.4em] uppercase text-[12px]">
                Practice Areas
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Personal Injury <br />
              <span className="text-[#C5A059] italic">Law Specialists</span>
            </h1>
            <p className="text-xl text-white/70 font-light leading-relaxed mb-10">
              Recovering compensation for those injured by negligence. We bring
              defense-side insights to every plaintiff's case.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            <div className="reveal-up">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A1128] mb-8">
                Personal Injury Focus Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: "Slip and Fall",
                    href: "/practice-areas/personal-injury/slip-and-fall",
                  },
                  {
                    name: "Defective Products & Drugs",
                    href: "/practice-areas/personal-injury/defective-products",
                  },
                  {
                    name: "Brain & Spinal Injury",
                    href: "/practice-areas/personal-injury/brain-spinal-injury",
                  },
                  {
                    name: "Dog Bites",
                    href: "/practice-areas/personal-injury/dog-bites",
                  },
                  {
                    name: "Asbestos & Mesothelioma",
                    href: "/practice-areas/personal-injury/asbestos-mesothelioma",
                  },
                  {
                    name: "Sexual Molestation & Abuse",
                    href: "/practice-areas/personal-injury/sexual-abuse",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center justify-between p-6 bg-[#FCFCFC] border border-gray-100 rounded-xl hover:border-[#C5A059] hover:shadow-lg transition-all group"
                  >
                    <span className="text-gray-800 font-serif font-bold">
                      {item.name}
                    </span>
                    <ArrowRight className="w-5 h-5 text-[#C5A059] opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </div>

            <div className="reveal-up">
              <div className="bg-[#0A1128] text-white p-10 rounded-[2rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-[100px]"></div>
                <h3 className="text-3xl font-serif font-bold mb-6 relative z-10">
                  The Defense Advantage
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-4">
                    <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
                    <h4 className="text-xl font-bold">Insurance Expertise</h4>
                    <p className="text-white/60 text-sm">
                      We anticipate insurance company tactics to prevent common
                      claim denial strategies.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Scale className="w-8 h-8 text-[#C5A059]" />
                    <h4 className="text-xl font-bold">Maximum Recovery</h4>
                    <p className="text-white/60 text-sm">
                      Meticulous case preparation designed to secure the highest
                      possible settlements.
                    </p>
                  </div>
                </div>
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

export default PersonalInjuryPage;
