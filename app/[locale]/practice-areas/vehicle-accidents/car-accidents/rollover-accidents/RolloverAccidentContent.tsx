"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { RefreshCw, AlertTriangle, ShieldAlert, Gavel } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const RolloverAccidentContent = () => {
  const t = useTranslations("PracticeAreasPage.subPages.rolloverAccidents");
  const commonT = useTranslations("PracticeAreasPage.common");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-up", {
        y: 40, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: ".reveal-up", start: "top 85%" },
      });
      gsap.from(".hero-reveal", { y: 30, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2, stagger: 0.1 });
      gsap.from(".hero-portrait", { x: 30, opacity: 0, duration: 1.2, ease: "power4.out", delay: 0.5 });
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
            <div className="lg:col-span-5 relative w-full h-[280px] md:h-[300px] hero-portrait flex items-start justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] h-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm">
                 <Image src="/assets/osbelia-castillo.jpg" alt={t("hero.alt")} fill className="object-cover object-top scale-105" priority />
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
                {t("content.section1.title")}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{t("content.section1.p1")}</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">{t("content.section1.p2")}</p>

              <h2 className="text-2xl font-serif font-bold text-[#0A1128] mb-6">
                {t("content.section2.title")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: <RefreshCw className="w-6 h-6" />, title: t("content.section2.items.item1"), desc: t("content.section2.items.item2") },
                  { icon: <AlertTriangle className="w-6 h-6" />, title: t("content.section2.items.item3"), desc: t("content.section2.items.item4") },
                  { icon: <Gavel className="w-6 h-6" />, title: t("content.section2.items.item5"), desc: t("content.section2.items.item6") },
                  { icon: <ShieldAlert className="w-6 h-6" />, title: commonT("maximumRecovery"), desc: t("content.section3.p1") },
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-[#FCFCFC] border border-gray-100 rounded-2xl hover:shadow-lg transition-all">
                    <div className="text-[#C5A059] mb-4">{item.icon}</div>
                    <h4 className="text-xl font-serif font-bold text-[#0A1128] mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-up">
              <div className="bg-[#FCFCFC] p-10 rounded-[2rem] border border-[#0A1128]/5 relative overflow-hidden">
                <h3 className="text-[10px] font-sans font-black tracking-widest text-[#C5A059] uppercase mb-4">{commonT("defenseAdvantage")}</h3>
                <p className="text-[#0A1128] leading-relaxed italic font-serif text-xl">"{t("content.quote")}"</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="sticky top-32"><ContactForm compact /></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RolloverAccidentContent;