"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Scale, ShieldAlert, AlertTriangle, ArrowRight, Gavel } from "lucide-react";
import ContactForm from "@/components/ContactForm";

gsap.registerPlugin(ScrollTrigger);

const DrunkDrivingContent = () => {
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
                Drunk Driving <br />
                <span className="text-[#C5A059] italic">Accidents</span>
              </h1>
              <p className="text-xl text-white/70 font-light leading-relaxed mb-10 hero-reveal max-w-2xl">
                Holding negligent drivers accountable for reckless choices. We fight for 
                justice and maximum recovery for victims of DUI collisions.
              </p>
            </div>

            {/* Right Side: Premium Portrait */}
            <div className="lg:col-span-5 relative w-full h-[280px] md:h-[300px] lg:h-[300px] hero-portrait flex items-start justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] h-full rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] border border-white/20 bg-white/5 backdrop-blur-sm">
                 <div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/10 to-transparent"></div>
                 <Image
                   src="/assets/osbelia-castillo.jpg"
                   alt="Principal Attorney Osbelia Castillo representing victims of drunk driving accidents"
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
                Justice for DUI Victims
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                When a driver chooses to operate a vehicle under the influence, they are 
                making a choice that endangers everyone on the road. We are committed to 
                securing the compensation you deserve for your injuries and losses.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Gavel className="w-6 h-6" />,
                    title: "Punitive Damages",
                    desc: "Seeking additional compensation to punish reckless behavior and deter future incidents.",
                  },
                  {
                    icon: <AlertTriangle className="w-6 h-6" />,
                    title: "Criminal vs. Civil",
                    desc: "Understanding how a DUI criminal case impacts your personal injury claim.",
                  },
                  {
                    icon: <Scale className="w-6 h-6" />,
                    title: "Full Liability",
                    desc: "Holding the intoxicated driver fully responsible for all medical costs and lost wages.",
                  },
                  {
                    icon: <ShieldAlert className="w-6 h-6" />,
                    title: "Rigorous Proof",
                    desc: "Using police reports, blood alcohol tests, and eyewitness accounts to build a solid case.",
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

            <div className="reveal-up">
              <div className="bg-[#FCFCFC] p-10 rounded-[2rem] border border-[#0A1128]/5 relative overflow-hidden">
                <h3 className="text-2xl font-serif font-bold text-[#0A1128] mb-4">
                  Why Hire Us?
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Drunk driving cases require a specific legal strategy to maximize recovery. 
                  We have the experience to navigate both the civil and criminal implications 
                  of your accident.
                </p>
                <a
                  href="tel:8052837656"
                  aria-label="Start your drunk driving accident claim with a free consultation"
                  className="inline-flex items-center gap-2 text-[#C5A059] font-bold uppercase tracking-widest text-sm hover:translate-x-1 transition-transform"
                >
                  Start Your Claim <ArrowRight className="w-4 h-4" />
                </a>
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

export default DrunkDrivingContent;
