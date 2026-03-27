"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { CheckCircle2, Video, Globe, Award, Clock } from "lucide-react";
import { Link } from "@/i18n/routing";
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const ShannonMCraneContent = () => {
  const t = useTranslations("ShannonMCrane");
  const contentRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    const items = gsap.utils.toArray<HTMLElement>(".reveal-up");
    items.forEach((item) => {
      gsap.from(item, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item, // Trigger is the specific item
          start: "top 85%",
        },
      });
    });

    // Hero Reveal (Standard entrance, no ScrollTrigger needed)
    gsap.from(".hero-reveal", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
      stagger: 0.1,
    });

    // Logo Reveal (Independent trigger)
    const logos = gsap.utils.toArray<HTMLElement>(".logo-reveal");
    if (logos.length > 0) {
      gsap.from(logos, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".reveal-up",
          start: "top 90%",
        },
      });
    }
  }, contentRef);

  return () => ctx.revert();
}, []);

  return (
    <div ref={contentRef} className="bg-white min-h-screen">
      {/* Bio Hero */}
      <section className="relative pt-40 pb-20 lg:pb-18 bg-[#0A1128] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C5A059]/5 transform skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-3 mb-6 hero-reveal">
              <div className="h-[1px] w-10 bg-[#C5A059]"></div>
              <span className="text-[#C5A059] font-sans font-black tracking-[0.4em] uppercase text-[12px]">
                {t("hero.subtitle")}
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight hero-reveal">
              {t("hero.name")}
            </h1>
            <div className="bg-[#C5A059]/10 border-l-4 border-[#C5A059] p-3 md:p-10 hero-reveal max-w-2xl mt-10">
            <p className="text-xl md:text-2xl text-white font-serif italic leading-relaxed">
              {t("hero.tagline")}
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-16 lg:gap-24">
          <div className="lg:col-span-7 space-y-16">
            <div className="reveal-up">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A1128] mb-6 leading-tight">
                {t("hero.heading")}
              </h2>
              <h3 className="text-xl md:text-2xl text-[#C5A059] font-medium mb-12 italic border-l-4 border-[#C5A059] pl-6">
                {t("hero.subtitle")}
              </h3>

              {/* Achievement Logos */}
              <div className="bg-gray-50/50 rounded-3xl p-8 mb-16 border border-gray-100">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-8 text-center">
                  Recognized & Accredited By
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center">
                  {[
                    { src: "/assets/cca-logo.png", alt: "CCA Logo" },
                    { src: "/assets/caala-logo.png", alt: "CAALA Logo" },
                    { src: "/assets/ucsb-logo.png", alt: "UCSB" },
                    { src: "/assets/loyola-logo.png", alt: "Loyola Law" },
                    { src: "/assets/expertise-logo.png", alt: "Expertise" },
                  ].map((logo, i) => (
                    <div
                      key={i}
                      className="flex justify-center transition-transform hover:scale-110 duration-500"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={100}
                        height={100}
                        className="object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8 text-gray-700 text-lg leading-relaxed font-light">
                <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-[#0A1128]">
                  {t("profile.p1")}
                </p>
                <p>{t("profile.p2")}</p>
              </div>
            </div>

            {/* Qualifications */}
            <div className="space-y-12">
              <div className="reveal-up">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0A1128] mb-8 uppercase tracking-widest flex items-center gap-3">
                   <span className="w-8 h-[1px] bg-[#C5A059]"></span>
                  {t("education.title")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {t.raw("education.list").map((item: string, i: number) => (
                    <div
                      key={i}
                      className="flex gap-4 items-center p-6 bg-[#FCFCFC] border border-gray-100 rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
                      <span className="text-gray-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal-up">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0A1128] mb-8 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-[#C5A059]"></span>
                  {t("admissions.title")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {t.raw("admissions.list").map((item: string, i: number) => (
                    <div
                      key={i}
                      className="flex gap-4 items-center p-6 bg-[#FCFCFC] border border-gray-100 rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
                      <span className="text-gray-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-10">
              <div className="">
                <ContactForm compact />
              </div>

              {/* Enhanced Video Section */}
              <div className="group bg-[#0A1128] rounded-[1rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(10,17,40,0.4)] reveal-up border border-white/10">
                <div className="relative aspect-video overflow-hidden">
                  <video
                    controls
                    poster="/assets/shannon-video-thumb.png"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  >
                    <source src="/assets/shannon-video.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0A1128] to-transparent opacity-60"></div>
                </div>
                <div className="p-8">
                  <p className="text-white font-serif text-xl leading-snug italic">
                    "{t("highlights.experience")}"
                  </p>
                  <div className="mt-4 w-12 h-1 bg-[#C5A059]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Video,
                title: t("highlights.virtualConsult.title"),
                desc: t("highlights.virtualConsult.desc"),
              },
              {
                icon: Globe,
                title: t("highlights.spanishService.title"),
                desc: t("highlights.spanishService.desc"),
              },
              {
                icon: Award,
                title: t("highlights.recoveredMillions.title"),
                desc: "Securing justice for our clients through aggressive representation.",
              },
              {
                icon: Clock,
                title: t("highlights.available24.title"),
                desc: "Round-the-clock support for your legal emergencies.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white p-10 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-[#C5A059]/30 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 reveal-up hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-[#F8F9FA] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0A1128] transition-colors duration-500">
                  <item.icon className="w-7 h-7 text-[#C5A059]" />
                </div>
                <h4 className="text-[#0A1128] font-serif font-bold text-xl mb-4 leading-tight">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShannonMCraneContent;
