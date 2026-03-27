"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ShieldAlert, Scale, HardHat, Construction, ClipboardList, ChevronDown, Plus, Minus } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const CraneAccidentsContent = () => {
  const t = useTranslations("PracticeAreasPage.subPages.craneAccidents");
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-8 space-y-24 md:space-y-32">
            
            {/* Section 1: Intro - Modern Gallery Style */}
            <div className="reveal-up relative">
              <div className="absolute -left-12 top-0 text-[12rem] font-black text-gray-50 select-none leading-none z-0 hidden xl:block">
                01
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-serif font-bold text-[#0A1128] mb-10 leading-snug">
                  {t("content.section1.title")}
                </h2>
                <div className="space-y-10">
                  <div className="p-8 md:p-12 bg-[#F9F9F9] border-r-4 border-[#C5A059] rounded-l-[3rem] shadow-sm">
                    <p className="text-xl md:text-2xl font-light text-gray-600 italic leading-relaxed">
                      {t("content.section1.p1")}
                    </p>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl ml-4">
                    {t("content.section1.p2")}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Steps - Asymmetric Card Grid */}
            <div className="reveal-up">
              <div className="flex items-center gap-6 mb-16">
                <h2 className="text-3xl font-serif font-bold text-[#0A1128] shrink-0">
                  {t("content.section2.title")}
                </h2>
                <div className="h-[2px] w-full bg-gradient-to-r from-[#C5A059]/30 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: HardHat, title: t("content.section2.items.item1"), text: t("content.section2.items.item2"), color: "bg-white" },
                  { icon: Construction, title: t("content.section2.items.item3"), text: t("content.section2.items.item4"), color: "bg-[#F9F9F9]" },
                  { icon: ClipboardList, title: t("content.section2.items.item5"), text: t("content.section2.items.item6"), color: "bg-white", span: "md:col-span-2" }
                ].map((item, i) => (
                  <div key={i} className={`p-10 ${item.color} ${item.span || ""} border border-gray-100 rounded-[2.5rem] hover:shadow-2xl transition-all duration-500 group`}>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="shrink-0 w-16 h-16 bg-[#0A1128] rounded-2xl flex items-center justify-center group-hover:bg-[#C5A059] transition-colors duration-500 shadow-lg">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-[#0A1128]">{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-base">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Quote Block - Minimalist High-Contrast */}
            <div className="reveal-up relative py-20 px-8 md:px-16 bg-[#0A1128] rounded-[3rem] overflow-hidden text-center shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A059] rounded-full blur-[120px]"></div>
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-serif text-white italic leading-[1.6] mb-12 max-w-2xl mx-auto">
                  "{t("content.quote")}"
                </h2>
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#C5A059]"></div>
                  <span className="text-[#C5A059] font-sans font-black tracking-[0.4em] uppercase text-xs">Osbelia Castillo</span>
                  <div className="h-[1px] w-12 bg-[#C5A059]"></div>
                </div>
                <p className="text-white/40 text-lg max-w-xl mx-auto font-light">
                  {t("content.section3.p1")}
                </p>
              </div>
            </div>

            {/* Section 4: FAQs - Clean Side-Line Style */}
            <div className="reveal-up">
              <h2 className="text-3xl font-serif font-bold text-[#0A1128] mb-12 flex items-center gap-4">
                <span className="w-2 h-10 bg-[#C5A059] rounded-full"></span>
                {t("content.faqs.title")}
              </h2>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="group">
                    <button 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className={`w-full p-8 flex items-center justify-between text-left rounded-3xl transition-all duration-300 border ${openFaq === index ? 'bg-white border-[#C5A059] shadow-xl' : 'bg-[#FCFCFC] border-transparent hover:border-gray-200'}`}
                    >
                      <span className={`text-xl font-bold transition-colors ${openFaq === index ? 'text-[#C5A059]' : 'text-[#0A1128]'}`}>
                        {faq.q}
                      </span>
                      <div className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openFaq === index ? 'bg-[#C5A059] text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-[#C5A059]/10 group-hover:text-[#C5A059]'}`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="p-10 text-gray-600 leading-relaxed text-lg border-l-2 border-[#C5A059]/20 ml-6 italic">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Defense Advantage - Template Consistency */}
            <div className="reveal-up">
              <div className="bg-[#0A1128] p-10 md:p-16 rounded-[3rem] relative shadow-2xl overflow-hidden border border-white/5">
                <div className="relative z-10 space-y-12">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-white text-center">
                    {commonT("defenseAdvantage")}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="group p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500">
                      <div className="w-12 h-12 bg-[#C5A059] rounded-xl flex items-center justify-center mb-6 shadow-xl shadow-[#C5A059]/20">
                        <ShieldAlert className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">{commonT("insuranceExpertise")}</h4>
                      <p className="text-white/50 text-base leading-relaxed">
                        {commonT("insuranceExpertiseDesc")}
                      </p>
                    </div>
                    <div className="group p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500">
                      <div className="w-12 h-12 bg-[#C5A059] rounded-xl flex items-center justify-center mb-6 shadow-xl shadow-[#C5A059]/20">
                        <Scale className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">{commonT("maximumRecovery")}</h4>
                      <p className="text-white/50 text-base leading-relaxed">
                        {commonT("maximumRecoveryDesc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Sticky Contact Form - Unchanged */}
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

export default CraneAccidentsContent;