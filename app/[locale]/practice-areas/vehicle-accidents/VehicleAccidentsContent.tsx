"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Car, AlertTriangle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const VehicleAccidentsContent = () => {
  const t = useTranslations("PracticeAreasPage");
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
                  {t("common.heroPrestige")}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight hero-reveal">
                {t("vehicleAccidents.hero.title")} <br />
                <span className="text-[#C5A059] italic">{t("vehicleAccidents.hero.subtitle")}</span>
              </h1>
              <p className="text-xl text-white/70 font-light leading-relaxed mb-10 hero-reveal max-w-2xl">
                {t("vehicleAccidents.hero.description")}
              </p>
            </div>

            {/* Right Side: Portrait */}
            <div className="lg:col-span-5 relative w-full h-[280px] md:h-[300px] lg:h-[300px] hero-portrait flex items-start justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] h-full rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] border border-white/20 bg-white/5 backdrop-blur-sm">
                 <div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/10 to-transparent"></div>
                 <Image
                   src="/assets/osbelia-castillo.jpg"
                   alt={t("vehicleAccidents.hero.alt")}
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
                {t("vehicleAccidents.categories.title")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: t("vehicleAccidents.categories.drunkDriving"),
                    href: "/practice-areas/vehicle-accidents/drunk-driving",
                  },
                  {
                    name: t("vehicleAccidents.categories.hitAndRun"),
                    href: "/practice-areas/vehicle-accidents/hit-and-run",
                  },
                  {
                    name: t("vehicleAccidents.categories.cellPhone"),
                    href: "/practice-areas/vehicle-accidents/cell-phone-use",
                  },
                  {
                    name: t("vehicleAccidents.categories.truck"),
                    href: "/practice-areas/vehicle-accidents/truck-accidents",
                  },
                  {
                    name: t("vehicleAccidents.categories.motorcycle"),
                    href: "/practice-areas/vehicle-accidents/motorcycle-accidents",
                  },
                  {
                    name: t("vehicleAccidents.categories.bicycle"),
                    href: "/practice-areas/vehicle-accidents/bicycle-accidents",
                  },
                  {
                    name: t("vehicleAccidents.categories.pedestrian"),
                    href: "/practice-areas/vehicle-accidents/pedestrian-accidents",
                  },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center justify-between p-6 bg-[#FCFCFC] border border-gray-100 rounded-xl hover:shadow-lg hover:border-[#C5A059] transition-all group"
                  >
                    <span className="text-gray-800 font-serif font-bold">
                      {item.name}
                    </span>
                    <Car className="w-5 h-5 text-[#C5A059] opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
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
                    {t("vehicleAccidents.investigation.title")}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t("vehicleAccidents.investigation.desc")}
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

export default VehicleAccidentsContent;
