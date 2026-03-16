"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, FileText, CheckCircle2, Scale } from "lucide-react";
import ContactForm from "@/components/ContactForm";

gsap.registerPlugin(ScrollTrigger);

const WorkersCompensationPage = () => {
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
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef} className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-[#0A1128] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C5A059]/5 transform skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-[1px] w-10 bg-[#C5A059]"></div>
              <span className="text-[#C5A059] font-sans font-black tracking-[0.4em] uppercase text-[12px]">
                Workers' Rights
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Workplace <br />
              <span className="text-[#C5A059] italic">Injuries</span>
            </h1>
            <p className="text-xl text-white/70 font-light leading-relaxed mb-10">
              Protecting your rights and livelihood. We ensure you get the full
              medical and financial benefits you deserve under California law.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            <div className="reveal-up">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A1128] mb-8">
                Workers' Compensation Benefits
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                The workers' comp system is complex and often skewed in favor of
                employers. We rebalance the scales to ensure you receive full
                coverage for your workplace injuries.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Briefcase />,
                    title: "Lost Wages",
                    desc: "Compensation for time off work during recovery.",
                  },
                  {
                    icon: <FileText />,
                    title: "Medical Care",
                    desc: "Full coverage for surgery, therapy, and medications.",
                  },
                  {
                    icon: <Scale />,
                    title: "Disability",
                    desc: "Permanent or temporary disability payments.",
                  },
                  {
                    icon: <CheckCircle2 />,
                    title: "Retraining",
                    desc: "Vouchers for new skill training if you can't return to the same role.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-8 bg-[#FCFCFC] border border-gray-100 rounded-2xl hover:border-[#C5A059] transition-all"
                  >
                    <div className="text-[#C5A059] mb-4">{item.icon}</div>
                    <h4 className="text-xl font-serif font-bold text-[#0A1128] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-up">
              <div className="bg-[#FCFCFC] p-10 rounded-[2rem] border border-[#0A1128]/5 relative overflow-hidden">
                <h3 className="text-2xl font-serif font-bold text-[#0A1128] mb-6">
                  Filing Your Claim
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Timing is critical in workers' compensation cases. Follow
                  these steps to protect your claim:
                </p>
                <div className="space-y-4">
                  {[
                    "Report the injury to your employer immediately.",
                    "Seek medical evaluation from a certified provider.",
                    "Contact our office to file a formal DWC-1 form.",
                    "Document all symptoms and treatment interactions.",
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <span className="text-[#C5A059] font-serif font-bold text-2xl">
                        0{i + 1}
                      </span>
                      <p className="text-gray-800 font-medium">{step}</p>
                    </div>
                  ))}
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

export default WorkersCompensationPage;
