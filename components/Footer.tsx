"use client";

import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";

const settlements = [
  "$3,500,000 Car Accident",
  "$3,400,000 Spinal Injury",
  "$2,000,000 Car Accident",
  "$1,750,000 Motor Vehicle Accident",
  "$1,600,000 Pedestrian Accident",
];

const Footer = () => {
  return (
    <footer className="bg-[#FCFCFC] border-t border-gray-100 relative pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto overflow-hidden">
        {/* Improved Settlement Ticker */}
        <div className="absolute top-0 left-0 w-full bg-[#0A1128] py-4 overflow-hidden whitespace-nowrap z-20 border-b border-[#C5A059]/10">
          <div className="gsap-marquee inline-block will-change-transform cursor-default">
            {[
              ...settlements,
              ...settlements,
              ...settlements,
              ...settlements,
            ].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center mx-12 text-white/40 font-sans font-black tracking-[0.2em] uppercase text-[12px] transition-all duration-600 hover:text-[#C5A059]"
              >
                <span className="w-2 h-2 bg-[#C5A059] mr-8 rounded-full shadow-[0_0_10px_rgba(197,160,89,0.5)]"></span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20 mt-12">
          {/* Column 1: Logo & About */}
          <div className="lg:col-span-4 space-y-8">
            <div className="h-10 relative">
              <Image
                src="/assets/logo.png"
                alt="The Law Office of Osbelia Castillo"
                width={200}
                height={40}
                className="object-contain object-left"
                priority
                unoptimized
              />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed max-w-sm font-normal">
              A Santa Barbara, Oxnard & Ventura professional group of lawyers
              specializing in Personal injury, Vehicular Accidents, Wrongful
              Death and Workers’ Compensation cases.
            </p>
            <a
              href="/"
              className="text-[#C5A059] text-xs font-bold uppercase tracking-widest hover:text-[#0A1128] transition-colors flex items-center gap-2 group"
            >
              Read More
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-[#0A1128] font-serif font-bold text-lg mb-8">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm text-gray-700 font-normal">
              {[
                { label: "Home", href: "/" },
                { label: "Attorneys", href: "/attorneys/osbelia-castillo" },
                {
                  label: "Personal Injury",
                  href: "/practice-areas/personal-injury",
                },
                {
                  label: "Vehicular Accident",
                  href: "/practice-areas/vehicle-accidents",
                },
                {
                  label: "Wrongful Death",
                  href: "/practice-areas/wrongful-death",
                },
                {
                  label: "Worker’s Compensation",
                  href: "/practice-areas/workers-compensation",
                },
                { label: "News", href: "#" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="lg:col-span-5">
            <h3 className="text-[#0A1128] font-serif font-bold text-lg mb-8">
              Contact Us
            </h3>
            <div className="space-y-6">
              <p className="text-gray-700 text-sm font-normal leading-relaxed">
                The Law Office of Osbelia Castillo is ready to examine the facts
                of your case, and we will explain your options in English or
                Spanish. Call us today for a free consultation!
              </p>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">
                    Phone Number
                  </p>
                  <a
                    href="tel:8052837656"
                    className="text-[#0A1128] font-serif font-bold text-lg"
                  >
                    805-283-7656
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">
                  Office Address
                </p>
                <div className="text-[#0A1128] text-sm leading-relaxed font-normal">
                  <p className="font-bold">Law Offices of Osbelia Castillo</p>
                  <p>315 Meigs Rd, Ste A142</p>
                  <p>Santa Barbara, California 93109</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
          <p>© 2026 The Law Office of Osbelia Castillo. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#C5A059] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#C5A059] transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
