"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ShieldAlert, Scale, Flame, Stethoscope, Wallet, Plus, Minus } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const BurnInjuryContent = () => {
  const t = useTranslations("PracticeAreasPage.subPages.burnInjury");
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
      {/* Hero Section - KEEP UNCHANGED */}
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
            
            {/* Section 1: Intro */}
            <div className="reveal-up">
              <h2 className="text-4xl font-serif font-bold text-[#0A1128] mb-8 leading-tight">
                {t("content.section1.title")}
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6 max-w-none">
                <p className="text-xl font-light leading-relaxed">{t("content.section1.p1")}</p>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#C5A059]/40 to-transparent my-8"></div>
                <p>{t("content.section1.p2")}</p>
              </div>
            </div>

            {/* Section 2: Impact Grid */}
            <div className="reveal-up">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0A1128] mb-10">
                {t("content.section2.title")}
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="group flex flex-col md:flex-row gap-8 p-10 bg-[#FCFCFC] border border-gray-100 rounded-[2rem] hover:border-[#C5A059] transition-all duration-500">
                  <div className="p-4 bg-white rounded-2xl shadow-sm self-start group-hover:bg-[#0A1128] group-hover:text-white transition-all">
                    <Stethoscope className="w-8 h-8 text-[#C5A059]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-[#0A1128]">{t("content.section2.items.item1")}</h3>
                    <p className="text-gray-600 leading-relaxed">{t("content.section2.items.item2")}</p>
                  </div>
                </div>

                <div className="group flex flex-col md:flex-row gap-8 p-10 bg-[#FCFCFC] border border-gray-100 rounded-[2rem] hover:border-[#C5A059] transition-all duration-500">
                  <div className="p-4 bg-white rounded-2xl shadow-sm self-start group-hover:bg-[#0A1128] group-hover:text-white transition-all">
                    <Flame className="w-8 h-8 text-[#C5A059]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-[#0A1128]">{t("content.section2.items.item3")}</h3>
                    <p className="text-gray-600 leading-relaxed">{t("content.section2.items.item4")}</p>
                  </div>
                </div>

                <div className="group flex flex-col md:flex-row gap-8 p-10 bg-[#FCFCFC] border border-gray-100 rounded-[2rem] hover:border-[#C5A059] transition-all duration-500">
                  <div className="p-4 bg-white rounded-2xl shadow-sm self-start group-hover:bg-[#0A1128] group-hover:text-white transition-all">
                    <Wallet className="w-8 h-8 text-[#C5A059]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-[#0A1128]">{t("content.section2.items.item5")}</h3>
                    <p className="text-gray-600 leading-relaxed">{t("content.section2.items.item6")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Quote & Experience */}
            <div className="reveal-up bg-[#0A1128] rounded-[3rem] p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <blockquote className="text-2xl md:text-3xl font-serif text-white italic leading-relaxed mb-10 relative z-10">
                   "{t("content.quote")}"
                </blockquote>
                <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10 border-t border-white/10 pt-8">
                  <p className="text-white/60 leading-relaxed text-lg">
                    {t("content.section3.p1")}
                  </p>
                </div>
            </div>

            {/* FAQs Section */}
            <div className="reveal-up space-y-10">
              <h2 className="text-3xl font-serif font-bold text-[#0A1128]">
                {t("content.faqs.title")}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {faqData.map((faq, index) => (
                  <div key={index} className={`rounded-3xl border transition-all duration-300 ${openFaq === index ? 'border-[#C5A059] bg-[#FCFCFC]' : 'border-gray-100 bg-white'}`}>
                    <button 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left group"
                    >
                      <span className={`text-lg font-bold ${openFaq === index ? 'text-[#C5A059]' : 'text-[#0A1128]'}`}>
                        {faq.q}
                      </span>
                      <div className={`shrink-0 ml-4 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                         {openFaq === index ? <Minus className="w-5 h-5 text-[#C5A059]" /> : <Plus className="w-5 h-5 text-gray-400" />}
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-8 pb-8 text-gray-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Defense Advantage Banner - KEEP UNCHANGED */}
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

          {/* Right Side Sticky Contact Form - KEEP UNCHANGED */}
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

export default BurnInjuryContent;