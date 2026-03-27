"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ShieldAlert, Scale, Activity, FileText, Brain, Plus, Minus, HandHelping } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const CatastrophicInjuryContent = () => {
  const t = useTranslations("PracticeAreasPage.subPages.catastrophicInjuries");
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
          <div className="lg:col-span-8 space-y-20">
            
            {/* Intro Section - Clean & Typography Focused */}
            <div className="reveal-up">
              <h2 className="text-4xl font-serif font-bold text-[#0A1128] mb-8 leading-tight">
                {t("content.section1.title")}
              </h2>
              <div className="text-lg text-gray-600 space-y-6">
                <p className="font-light text-xl leading-relaxed">{t("content.section1.p1")}</p>
                <p>{t("content.section1.p2")}</p>
              </div>
            </div>

            {/* Steps Section - Styled as Progress Cards */}
            <div className="reveal-up">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0A1128] mb-12">
                {t("content.section2.title")}
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Activity, title: t("content.section2.items.item1"), text: t("content.section2.items.item2") },
                  { icon: FileText, title: t("content.section2.items.item3"), text: t("content.section2.items.item4") },
                  { icon: HandHelping, title: t("content.section2.items.item5"), text: t("content.section2.items.item6") }
                ].map((item, i) => (
                  <div key={i} className="group flex gap-6 p-8 bg-[#F9F9F9] rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl hover:border-[#C5A059]/30 transition-all duration-500">
                    <div className="shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-[#0A1128] transition-colors">
                      <item.icon className="w-6 h-6 text-[#C5A059]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#0A1128]">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote Block - Dark Themed Styling */}
            <div className="reveal-up bg-[#0A1128] rounded-[3rem] p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                <h2 className="text-white text-2xl md:text-3xl font-serif mb-8 italic relative z-10 leading-relaxed">
                    "{t("content.quote")}"
                </h2>
                <div className="h-[1px] w-24 bg-[#C5A059] mx-auto mb-8 relative z-10"></div>
                <p className="text-white/60 text-lg max-w-2xl mx-auto relative z-10">
                    {t("content.section3.p1")}
                </p>
            </div>

            {/* FAQs Section - Modern Accordion Styling */}
            <div className="reveal-up space-y-10">
              <h2 className="text-3xl font-serif font-bold text-[#0A1128]">
                {t("content.faqs.title")}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <button 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left group"
                    >
                      <span className={`text-lg font-bold transition-colors ${openFaq === index ? 'text-[#C5A059]' : 'text-[#0A1128]'}`}>
                        {faq.q}
                      </span>
                      <div className={`p-2 rounded-lg transition-all ${openFaq === index ? 'bg-[#C5A059] text-white' : 'bg-gray-50 text-gray-400'}`}>
                        {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>
                    <div className={`transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-8 pb-8 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Defense Advantage Banner - Unchanged Template */}
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

          {/* Right Side Sticky Contact Form - Keep Unchanged */}
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

export default CatastrophicInjuryContent;