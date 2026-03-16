"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scale, Heart, Users, FileText } from "lucide-react";
import ContactForm from "@/components/ContactForm";

gsap.registerPlugin(ScrollTrigger);

const WrongfulDeathPage = () => {
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
                Compassionate Justice
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Wrongful <br />
              <span className="text-[#C5A059] italic">Death Claims</span>
            </h1>
            <p className="text-xl text-white/70 font-light leading-relaxed mb-10">
              Seeking justice for families navigating unimaginable loss. We
              fight for your future while you focus on healing.
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
                Securing Your Family's Future
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                While no amount of money can replace a loved one, a wrongful
                death claim can provide the financial security your family needs
                to survive and thrive following a tragic loss.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Users />,
                    title: "Survival Actions",
                    desc: "Claims for the victim's pre-death suffering.",
                  },
                  {
                    icon: <Heart />,
                    title: "Loss of Consortium",
                    desc: "Justice for the loss of companionship and care.",
                  },
                  {
                    icon: <Banknote />,
                    title: "Lost Earnings",
                    desc: "Recovering future income lost due to the death.",
                  },
                  {
                    icon: <FileText />,
                    title: "Funeral Costs",
                    desc: "Coverage for final medical and burial expenses.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-8 bg-[#FCFCFC] border border-gray-100 rounded-2xl hover:shadow-lg transition-all"
                  >
                    <div className="text-[#C5A059] mb-4">{item.icon}</div>
                    <h4 className="text-xl font-serif font-bold text-[#0A1128] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-up">
              <div className="bg-[#0A1128] text-white p-10 rounded-[2rem] relative overflow-hidden">
                <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">
                  Aggressive Litigation
                </h3>
                <p className="text-white/70 leading-relaxed mb-6 relative z-10">
                  We use our insurance industry knowledge to hold negligent
                  parties accountable, ensuring they pay the full value for the
                  life they've affected.
                </p>
                <a
                  href="tel:8052837656"
                  className="inline-flex items-center gap-2 text-[#C5A059] font-bold uppercase tracking-widest text-sm relative z-10"
                >
                  Get Help Now <ArrowRight className="w-4 h-4" />
                </a>
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

export default WrongfulDeathPage;
