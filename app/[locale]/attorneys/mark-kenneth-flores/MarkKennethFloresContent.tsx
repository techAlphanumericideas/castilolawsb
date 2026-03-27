"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  CheckCircle2,
  Mail,
  Phone,
  GraduationCap,
  Gavel,
  Users,
  ShieldCheck,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const MarkKennethFloresContent = () => {
  const t = useTranslations("MarkKennethFlores");
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
      {/* Bio Hero */}
      <section className="relative pt-40 pb-1 bg-[#0A1128] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C5A059]/5 transform skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-[150px] translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-6  md:px-12 relative z-10">
          <div className="flex flex-col items-center  text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6 hero-reveal">
              <div className="h-[1px] w-10 bg-[#C5A059]"></div>
              <span className="text-[#C5A059] font-sans font-black tracking-[0.4em] uppercase text-[12px]">
                {t("hero.role")}
              </span>
              <div className="h-[1px] w-10 bg-[#C5A059]"></div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight hero-reveal">
              Mark Kenneth <br />
              <span className="text-[#C5A059]">Flores</span>
            </h1>

            <div className="bg-[#C5A059]/10 border-t-4 md:border-t-0 md:border-l-4 border-[#C5A059] p-8 md:p-10 mb-10 hero-reveal max-w-3xl backdrop-blur-sm self-center">
              <p className="text-xl md:text-2xl text-white italic font-serif leading-relaxed">
                &quot;{t("hero.quote")}&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Details */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-16">
            <div className="reveal-up">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A1128] mb-6">
                {t("profile.title")}
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-normal">
                <p>
                  {t("profile.p1")}
                </p>
                <p>
                  {t("profile.p2")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="reveal-up">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-[#C5A059]" />
                  <h3 className="text-2xl font-serif font-bold text-[#0A1128]">
                    {t("education.title")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[t("education.item1"), t("education.item2")].map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2.5 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="reveal-up">
                <div className="flex items-center gap-3 mb-6">
                  <Gavel className="w-6 h-6 text-[#C5A059]" />
                  <h3 className="text-2xl font-serif font-bold text-[#0A1128]">
                    {t("admissions.title")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[t("admissions.item1"), t("admissions.item2")].map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2.5 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="reveal-up">
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
                <h3 className="text-2xl font-serif font-bold text-[#0A1128]">
                  {t("awards.title")}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
                {[
                  { src: "/assets/million-dollar-advocates.png", alt: "Million Dollar Advocates Forum" },
                  { src: "/assets/lawyer-premium-member.png", alt: "Lawyer.com Premium Member" },
                  { src: "/assets/caoc-logo.png", alt: "Consumer Attorneys of California" },
                  { src: "/assets/caala-logo.png", alt: "CAALA" },
                  { src: "/assets/provisors-logo.png", alt: "ProVisors" },
                  { src: "/assets/top-10-verdict.png", alt: "Top 10 Verdict 2016" },
                  { src: "/assets/10-best-client-satisfaction.png", alt: "10 Best Client Satisfaction" },
                  { src: "/assets/expertise-logo.png", alt: "Expertise.com Best Personal Injury Lawyers" },
                  { src: "/assets/usc-logo.png", alt: "USC" },
                  { src: "/assets/loyola-logo.png", alt: "Loyola Law School" },
                ].map((award, i) => (
                  <div key={i} className="relative group grayscale hover:grayscale-0 transition-all duration-300">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                      <Image
                        src={award.src}
                        alt={award.alt}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-up">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-6 h-6 text-[#C5A059]" />
                <h3 className="text-2xl font-serif font-bold text-[#0A1128]">
                  {t("associations.title")}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  t("associations.skill1"),
                  t("associations.skill2"),
                  t("associations.skill3"),
                  t("associations.skill4"),
                  t("associations.skill5"),
                  t("associations.skill6"),
                  t("associations.skill7"),
                  t("associations.skill8"),
                ].map((skill, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-center p-6 bg-[#FCFCFC] border border-gray-100 rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-[#0A1128] text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden reveal-up">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/20 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-serif font-bold mb-8 relative z-10">
                  {t("sidebar.directContact")}
                </h3>
                <div className="space-y-6 relative z-10">
                  <Link
                    key="direct-phone"
                    href={`tel:${t("sidebar.phone").replace(/\D/g, "")}`}
                    aria-label="Call Attorney Mark Kenneth Flores directly"
                    className="flex items-center gap-4 hover:text-[#C5A059] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C5A059] transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="font-bold">{t("sidebar.phone")}</span>
                  </Link>
                  <div className="flex items-center gap-4 text-white/70">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="font-medium">
                      Available 24/7
                    </span>
                  </div>
                </div>
              </div>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarkKennethFloresContent;
