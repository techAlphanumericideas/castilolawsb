"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ShieldAlert, Scale, Bus, Users, ClipboardCheck, ChevronDown, Plus, Minus } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const BusAccidentsContent = () => {
  const t = useTranslations("PracticeAreasPage.subPages.busAccidents");
  const commonT = useTranslations("PracticeAreasPage.common");
  const contentRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

  const faqData = [
    { q: t("content.faqs.q1"), a: t("content.faqs.a1") },
    { q: t("content.faqs.q2"), a: t("content.faqs.a2") },
    { q: t("content.faqs.q3"), a: t("content.faqs.a3") },
    { q: t("content.faqs.q4"), a: t("content.faqs.a4") },
  ];

  return (
    <div ref={contentRef} className="bg-white min-h-screen">
      {/* Hero Section - Keep Structure Unchanged */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-[#0A1128] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C5A059]/5 transform skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 mb-6 hero-reveal">
                <div className="h-[1px] w-10 bg-[#C5A059]"></div>
                <span className="text-[#C5A059] font-sans font-black tracking-[0.4em] uppercase text-[10px] md:text-[12px]">
                  {t("hero.prestige")}
                </span>
              </div>
              <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight hero-reveal">
                {t("hero.title")} <br />
                <span className="text-[#C5A059] italic">{t("hero.subtitle")}</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10 hero-reveal max-w-2xl">
                {t("hero.description")}
              </p>
            </div>

            <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] hero-portrait flex items-start justify-center lg:justify-end">
              <div className="relative w-full max-w-[450px] h-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                 <Image
                   src="/assets/osbelia-castillo.jpg"
                   alt={t("hero.alt")}
                   fill
                   className="object-cover object-top"
                   priority
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 space-y-16 md:space-y-24">
            
            {/* Section 1: Intro - Modern Legal Framework styling */}
            <div className="reveal-up relative">
              <div className="hidden md:block absolute -left-10 top-0 w-1 h-24 bg-[#C5A059]"></div>
              <h2 className="text-3xl font-serif font-bold text-[#0A1128] mb-6 md:mb-8 leading-tight">
                {t("content.section1.title")}
              </h2>
              <div className="space-y-6 md:space-y-8">
                <p className="text-xl md:text-xl font-light text-gray-500 italic leading-relaxed">
                  {t("content.section1.p1")}
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {t("content.section1.p2")}
                </p>
              </div>
            </div>

            {/* Section 2: Steps - Interactive Progress Cards */}
            <div className="reveal-up">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
                <h2 className="text-3xl font-serif font-bold text-[#0A1128] whitespace-nowrap">
                  {t("content.section2.title")}
                </h2>
                <div className="h-[1px] w-full bg-gray-100"></div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {[
                  { icon: ClipboardCheck, title: t("content.section2.items.item1"), text: t("content.section2.items.item2"), step: "01" },
                  { icon: Users, title: t("content.section2.items.item3"), text: t("content.section2.items.item4"), step: "02" },
                  { icon: Bus, title: t("content.section2.items.item5"), text: t("content.section2.items.item6"), step: "03" }
                ].map((item, i) => (
                  <div key={i} className="group flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-10 bg-white border border-gray-100 rounded-[2rem] hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#F9F9F9] rounded-bl-[4rem] flex items-center justify-center text-3xl font-black text-gray-100 group-hover:text-[#C5A059]/10 transition-colors">
                      {item.step}
                    </div>
                    <div className="shrink-0">
                      <div className="w-14 h-14 bg-[#0A1128] rounded-xl flex items-center justify-center group-hover:bg-[#C5A059] transition-colors duration-500">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#0A1128] group-hover:text-[#C5A059] transition-colors">{item.title}</h3>
                      <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-xl">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Quote Block - High Contrast Premium Signature */}
            <div className="reveal-up bg-[#0A1128] rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C5A059] to-transparent"></div>
              </div>
              
              <div className="relative z-10">
                <span className="text-5xl font-serif text-[#C5A059] block mb-6">“</span>
                <h2 className="text-2xl md:text-3xl font-serif text-white italic leading-relaxed mb-10 max-w-3xl mx-auto">
                  {t("content.quote")}
                </h2>
                <div className="inline-flex items-center gap-4">
                   <div className="h-[1px] w-8 bg-[#C5A059]"></div>
                   <p className="text-[#C5A059] font-sans font-black tracking-[0.3em] uppercase text-[10px] md:text-[12px]">
                    Osbelia Castillo
                   </p>
                   <div className="h-[1px] w-8 bg-[#C5A059]"></div>
                </div>
                <p className="mt-8 text-white/40 text-sm md:text-base italic font-light">
                  {t("content.section3.p1")}
                </p>
              </div>
            </div>

            {/* Section 4: FAQs - Clean Minimalist List */}
            <div className="reveal-up space-y-10 md:space-y-12">
              <h2 className="text-3xl font-serif font-bold text-[#0A1128]">
                {t("content.faqs.title")}
              </h2>
              
              <div className="grid grid-cols-1 gap-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100">
                    <button 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full py-6 flex items-center justify-between text-left group"
                    >
                      <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${openFaq === index ? 'text-[#C5A059]' : 'text-[#0A1128]'}`}>
                        {faq.q}
                      </span>
                      <div className={`shrink-0 ml-4 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-[#C5A059]' : 'text-gray-300'}`}>
                        {openFaq === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pb-8 text-gray-600 text-sm md:text-base leading-relaxed pr-8">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Defense Advantage Banner - Enhanced for Mobile */}
            <div className="reveal-up">
              <div className="bg-[#0A1128] p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] relative shadow-2xl overflow-hidden border border-white/5">
                <div className="relative z-10 space-y-12">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-white text-center">
                    {commonT("defenseAdvantage")}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div className="group p-8 md:p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500">
                      <div className="w-12 h-12 bg-[#C5A059] rounded-xl flex items-center justify-center mb-6 shadow-xl shadow-[#C5A059]/20">
                        <ShieldAlert className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-4">{commonT("insuranceExpertise")}</h4>
                      <p className="text-white/50 text-sm md:text-base leading-relaxed">
                        {commonT("insuranceExpertiseDesc")}
                      </p>
                    </div>

                    <div className="group p-8 md:p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500">
                      <div className="w-12 h-12 bg-[#C5A059] rounded-xl flex items-center justify-center mb-6 shadow-xl shadow-[#C5A059]/20">
                        <Scale className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-4">{commonT("maximumRecovery")}</h4>
                      <p className="text-white/50 text-sm md:text-base leading-relaxed">
                        {commonT("maximumRecoveryDesc")}
                      </p>
                    </div>
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

export default BusAccidentsContent;