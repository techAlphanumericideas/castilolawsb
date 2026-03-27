"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ShieldAlert, Scale, Cctv, Building2, Lamp } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const NegligentSecurityContent = () => {
  const t = useTranslations("PracticeAreasPage.subPages.negligentSecurity");
  const commonT = useTranslations("PracticeAreasPage.common");
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
                  {t("hero.prestige")}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight hero-reveal">
                {t("hero.title")} <br />
                <span className="text-[#C5A059] italic">{t("hero.subtitle")}</span>
              </h1>
              <p className="text-xl text-white/70 font-light leading-relaxed mb-10 hero-reveal max-w-2xl">
                {t("hero.description")}
              </p>
            </div>

            <div className="lg:col-span-5 relative w-full h-[280px] md:h-[300px] lg:h-[300px] hero-portrait flex items-start justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] h-full rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] border border-white/20 bg-white/5 backdrop-blur-sm">
                 <div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/10 to-transparent"></div>
                 <Image
                   src="/assets/osbelia-castillo.jpg"
                   alt={t("hero.alt")}
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
            
            {/* Intro Section */}
            <div className="reveal-up">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A1128] mb-8">
                {t("content.section1.title")}
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>{t("content.section1.p1")}</p>
                <p>{t("content.section1.p2")}</p>
              </div>
            </div>

            {/* Grid Section: Security Locations */}
            <div className="reveal-up">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0A1128] mb-8">
                {t("content.section2.title")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <Lamp className="w-10 h-10 text-[#C5A059] mb-6" />
                  <h3 className="text-xl font-bold mb-4 text-[#0A1128]">{t("content.section2.items.item1")}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t("content.section2.items.item2")}
                  </p>
                </div>
                <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <Building2 className="w-10 h-10 text-[#C5A059] mb-6" />
                  <h3 className="text-xl font-bold mb-4 text-[#0A1128]">{t("content.section2.items.item3")}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t("content.section2.items.item4")}
                  </p>
                </div>
                <div className="p-8 bg-[#0A1128] rounded-3xl md:col-span-2 flex flex-col md:flex-row gap-8 items-center">
                  <Cctv className="w-16 h-16 text-[#C5A059] shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{t("content.section2.items.item5")}</h3>
                    <p className="text-white/70 leading-relaxed">
                      {t("content.section2.items.item6")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="reveal-up bg-[#F9F9F9] p-10 rounded-[2rem] border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0A1128] mb-6">
                {t("content.section3.title")}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t("content.section3.p1")}
              </p>
              <div className="flex items-center gap-4 text-[#C5A059] font-serif italic text-lg">
                <blockquote className="border-l-4 border-[#C5A059] pl-6 py-2">
                  "{t("content.quote")}"
                </blockquote>
              </div>
            </div>

            {/* Defense Advantage Banner */}
            <div className="reveal-up">
              <div className="bg-[#0A1128] text-white p-10 rounded-[2rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-[100px]"></div>
                <h3 className="text-3xl font-serif font-bold mb-6 relative z-10">
                  {commonT("defenseAdvantage")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-4">
                    <ShieldAlert className="w-8 h-8 text-[#C5A059]" />
                    <h4 className="text-xl font-bold">{commonT("insuranceExpertise")}</h4>
                    <p className="text-white/60 text-sm">
                      {commonT("insuranceExpertiseDesc")}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Scale className="w-8 h-8 text-[#C5A059]" />
                    <h4 className="text-xl font-bold">{commonT("maximumRecovery")}</h4>
                    <p className="text-white/60 text-sm">
                      {commonT("maximumRecoveryDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Sticky Contact Form */}
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

export default NegligentSecurityContent;