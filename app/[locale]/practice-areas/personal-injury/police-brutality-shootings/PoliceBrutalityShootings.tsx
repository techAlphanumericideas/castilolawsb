"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ShieldAlert, Scale, Gavel, UserCheck, ChevronDown, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const PoliceBrutalityContent = () => {
  const t = useTranslations("PracticeAreasPage.subPages.policeBrutality");
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
      <section className="py-24 px-6 md:px-9 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8 space-y-24">
            
            {/* Section 1: Intro - Sophisticated Border-Box Design */}
            <div className="reveal-up group">
              <div className="relative p-1 md:p-10 border border-gray-100 rounded-[3rem] bg-[#FCFCFC] transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-[#C5A059]/5">
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#C5A059] -translate-x-2 -translate-y-2 rounded-tl-[3rem] opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h2 className="text-3xl md:text-3xl font-serif font-bold text-[#0A1128] mb-10 leading-[1.15] px-8">
                  {t("content.section1.title")}
                </h2>
                <div className="space-y-10 px-8 pb-4">
                  <p className="text-xl font-light text-gray-500 leading-relaxed italic border-l-4 border-[#C5A059] pl-8">
                    {t("content.section1.p1")}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                    {t("content.section1.p2")}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Cards for Types of Misconduct */}
            <div className="reveal-up">
              <div className="flex items-center gap-6 mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A1128] shrink-0">
                  {t("content.section2.title")}
                </h2>
                <div className="h-[2px] w-full bg-gradient-to-r from-gray-100 to-transparent"></div>
              </div>

              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: t("content.section2.items.item1"), text: t("content.section2.items.item2"), step: "01" },
                  { icon: UserCheck, title: t("content.section2.items.item3"), text: t("content.section2.items.item4"), step: "02" },
                  { icon: Gavel, title: t("content.section2.items.item5"), text: t("content.section2.items.item6"), step: "03" }
                ].map((item, i) => (
                  <div key={i} className="group relative flex flex-col md:flex-row gap-8 p-10 bg-white border border-gray-100 rounded-[2.5rem] hover:border-[#C5A059] transition-all duration-500">
                    <div className="shrink-0">
                      <div className="w-16 h-16 bg-[#0A1128] rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                        <div className="absolute top-0 left-0 w-full h-full bg-[#C5A059] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                        <item.icon className="w-7 h-7 text-white relative z-10" />
                      </div>
                      <div className="mt-4 text-center font-serif italic text-[#C5A059] font-bold text-lg">{item.step}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-[#0A1128] group-hover:text-[#C5A059] transition-colors">{item.title}</h3>
                      <p className="text-gray-500 text-base leading-relaxed max-w-2xl">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Dark Quote Block - High Impact */}
            <div className="reveal-up bg-[#0A1128] rounded-[3.5rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C5A059]/5 rounded-full blur-[80px] -ml-32 -mb-32"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-1 w-[#C5A059] bg-[#C5A059] mx-auto mb-10"></div>
                <h2 className="text-2xl md:text-2xl font-serif text-white italic leading-[1.4] mb-12 max-w-3xl mx-auto">
                  "{t("content.quote")}"
                </h2>
                <div className="inline-block px-8 py-3 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                  <p className="text-[#C5A059] font-sans font-black tracking-[0.3em] uppercase text-[12px]">
                    Osbelia Castillo
                  </p>
                </div>
                <p className="mt-12 text-white/60 text-lg max-w-xl mx-auto italic font-light">
                  {t("content.section3.p1")}
                </p>
              </div>
            </div>

            {/* Section 4: FAQs - Side-Accented Minimalism */}
            <div className="reveal-up">
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A1128] mb-4">
                  {t("content.faqs.title")}
                </h2>
                <div className="w-20 h-1.5 bg-[#C5A059]"></div>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {faqData.map((faq, index) => (
                  <div key={index} 
                       className={`overflow-hidden rounded-3xl transition-all duration-500 ${openFaq === index ? 'bg-white shadow-2xl' : 'bg-[#F9F9F9] hover:bg-white hover:shadow-lg'}`}>
                    <button 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-10 py-8 flex items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-6">
                        <span className={`text-xl font-serif font-bold ${openFaq === index ? 'text-[#C5A059]' : 'text-gray-300'}`}>
                          {index + 1}.
                        </span>
                        <span className={`text-xl font-bold transition-colors ${openFaq === index ? 'text-[#C5A059]' : 'text-[#0A1128]'}`}>
                          {faq.q}
                        </span>
                      </div>
                      <ChevronDown className={`shrink-0 w-6 h-6 transition-transform duration-500 ${openFaq === index ? 'rotate-180 text-[#C5A059]' : 'text-gray-400'}`} />
                    </button>
                    <div className={`transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                      <div className="px-24 pb-10 text-gray-600 leading-relaxed text-lg italic border-l-2 border-[#C5A059]/20 ml-10 md:ml-24">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5: Defense Advantage Banner */}
            <div className="reveal-up">
              <div className="bg-[#0A1128] p-1 md:p-16 rounded-[4rem] relative shadow-2xl overflow-hidden border border-white/5">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/pattern.png')] opacity-10 mix-blend-overlay"></div>
                
                <div className="relative z-10 space-y-16">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-white text-center">
                    {commonT("defenseAdvantage")}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-all duration-500">
                      <div className="w-14 h-14 bg-[#C5A059] rounded-2xl flex items-center justify-center mb-8">
                        <ShieldAlert className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">{commonT("insuranceExpertise")}</h4>
                      <p className="text-white/50 text-base leading-relaxed">
                        {commonT("insuranceExpertiseDesc")}
                      </p>
                    </div>

                    <div className="relative group p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-all duration-500">
                      <div className="w-14 h-14 bg-[#C5A059] rounded-2xl flex items-center justify-center mb-8">
                        <Scale className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-4">{commonT("maximumRecovery")}</h4>
                      <p className="text-white/50 text-base leading-relaxed">
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

export default PoliceBrutalityContent;