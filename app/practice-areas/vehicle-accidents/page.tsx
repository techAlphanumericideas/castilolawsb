"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Car, AlertTriangle, ShieldCheck, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";

gsap.registerPlugin(ScrollTrigger);

const VehicleAccidentsPage = () => {
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
              Vehicle <br />
              <span className="text-[#C5A059] italic">Accidents</span>
            </h1>
            <p className="text-xl text-white/70 font-light leading-relaxed mb-10">
              Aggressive litigation for car, truck, motorcycle, and pedestrian
              accidents. We secure the compensation you need to move forward.
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
                Specialized Accident Categories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: "Drunk Driving Accident",
                    href: "/practice-areas/vehicle-accidents/drunk-driving",
                  },
                  {
                    name: "Hit and Run",
                    href: "/practice-areas/vehicle-accidents/hit-and-run",
                  },
                  {
                    name: "Accidents Due to Cell Phone Use",
                    href: "/practice-areas/vehicle-accidents/cell-phone-use",
                  },
                  {
                    name: "Truck Accidents",
                    href: "/practice-areas/vehicle-accidents/truck-accidents",
                  },
                  {
                    name: "Motorcycle Accidents",
                    href: "/practice-areas/vehicle-accidents/motorcycle-accidents",
                  },
                  {
                    name: "Bicycle Accidents",
                    href: "/practice-areas/vehicle-accidents/bicycle-accidents",
                  },
                  {
                    name: "Pedestrian Accidents",
                    href: "/practice-areas/vehicle-accidents/pedestrian-accidents",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center justify-between p-6 bg-[#FCFCFC] border border-gray-100 rounded-xl hover:shadow-lg hover:border-[#C5A059] transition-all group"
                  >
                    <span className="text-gray-800 font-serif font-bold">
                      {item.name}
                    </span>
                    <Car className="w-5 h-5 text-[#C5A059] opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            <div className="reveal-up">
              <div className="flex gap-6 p-10 bg-[#FCFCFC] border border-gray-100 rounded-[2rem]">
                <div className="w-16 h-16 rounded-2xl bg-[#0A1128] flex items-center justify-center text-[#C5A059] shrink-0">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#0A1128] mb-4">
                    Meticulous Investigation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We go beyond the police report, using accident
                    reconstruction experts and digital forensics to establish
                    liability in complex vehicle collision cases.
                  </p>
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

export default VehicleAccidentsPage;
