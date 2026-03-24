"use client";

import { Link } from "@/i18n/routing";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { nameKey: "home", href: "/" },
  {
    nameKey: "attorneys",
    href: "/attorneys/osbelia-castillo",
    dropdownItems: [
      { nameKey: "osbelia", href: "/attorneys/osbelia-castillo" },
    ],
  },
  {
    nameKey: "personalInjury",
    href: "/practice-areas/personal-injury",
    dropdownItems: [
      {
        nameKey: "slipAndFall",
        href: "/practice-areas/personal-injury/slip-and-fall",
      },
      {
        nameKey: "defectiveProducts",
        href: "/practice-areas/personal-injury/defective-products",
      },
      {
        nameKey: "brainSpinal",
        href: "/practice-areas/personal-injury/brain-spinal-injury",
      },
      {
        nameKey: "dogBites",
        href: "/practice-areas/personal-injury/dog-bites",
      },
      {
        nameKey: "asbestos",
        href: "/practice-areas/personal-injury/asbestos-mesothelioma",
      },
      {
        nameKey: "sexualAbuse",
        href: "/practice-areas/personal-injury/sexual-abuse",
      },
    ],
  },
  {
    nameKey: "vehicleAccidents",
    href: "/practice-areas/vehicle-accidents",
    dropdownItems: [
      {
        nameKey: "drunkDriving",
        href: "/practice-areas/vehicle-accidents/drunk-driving",
      },
      {
        nameKey: "hitAndRun",
        href: "/practice-areas/vehicle-accidents/hit-and-run",
      },
      {
        nameKey: "cellPhone",
        href: "/practice-areas/vehicle-accidents/cell-phone-use",
      },
      {
        nameKey: "truckAccidents",
        href: "/practice-areas/vehicle-accidents/truck-accidents",
      },
      {
        nameKey: "motorcycleAccidents",
        href: "/practice-areas/vehicle-accidents/motorcycle-accidents",
      },
      {
        nameKey: "bicycleAccidents",
        href: "/practice-areas/vehicle-accidents/bicycle-accidents",
      },
      {
        nameKey: "pedestrianAccidents",
        href: "/practice-areas/vehicle-accidents/pedestrian-accidents",
      },
    ],
  },
  { nameKey: "wrongfulDeath", href: "/practice-areas/wrongful-death" },
  {
    nameKey: "workersComp",
    href: "/practice-areas/workers-compensation",
  },
];

const Navbar = () => {
  const t = useTranslations("Navbar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(menuRef.current, {
        x: "0%",
        opacity: 1,
        visibility: "visible",
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      document.body.style.overflow = "auto";
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(menuRef.current, { visibility: "hidden" });
        },
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full bg-white border-b border-gray-100 px-4 md:px-6 py-4 flex items-center shadow-sm transition-all duration-300 ${
          isMenuOpen ? "z-[120]" : "z-50"
        }`}
      >
        {/* Full-width inner row — no max-width so Spanish labels never overflow */}
        <div className="w-full flex items-center justify-between gap-2">

          {/* Logo */}
          <div className="flex-none flex items-center border-r border-gray-100 pr-4">
            <Link
              href="/"
              className="flex transition-all hover:brightness-110 active:scale-95"
            >
              <Image
                src="/assets/logo.png"
                alt={t("logoAlt")}
                width={220}
                height={55}
                className="w-32 md:w-40 h-auto object-contain antialiased"
                priority
                unoptimized
              />
            </Link>
          </div>

          {/* Desktop Navigation — hidden on < lg */}
          <div className="hidden lg:flex flex-1 items-center justify-center flex-wrap gap-x-0 gap-y-0 min-w-0">
            {navLinks.map((link) => {
              const linkName = t(link.nameKey as any);
              return (
                <div
                  key={link.nameKey}
                  className="relative group flex-shrink-0"
                  onMouseEnter={() => setActiveDropdown(link.nameKey)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`px-2 py-1 flex items-center gap-0.5 text-[10px] font-bold tracking-wider uppercase transition-colors whitespace-nowrap ${
                      activeDropdown === link.nameKey
                        ? "text-black"
                        : "text-gray-700 hover:text-black"
                    }`}
                  >
                    {linkName}
                    {link.dropdownItems && link.nameKey !== "attorneys" && (
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-300 flex-shrink-0 ${
                          activeDropdown === link.nameKey
                            ? "rotate-180 text-[#C5A059]"
                            : ""
                        }`}
                      />
                    )}
                    {(!link.dropdownItems || link.nameKey === "attorneys") && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#C5A059] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {link.dropdownItems && link.nameKey !== "attorneys" && (
                    <div
                      className="absolute top-full left-0 pt-3 w-60 opacity-0 invisible transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50"
                    >
                      <div className="bg-white border border-gray-100 shadow-2xl rounded-xl overflow-hidden py-2">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.nameKey}
                            href={item.href}
                            className="block px-5 py-2.5 text-[11px] font-medium text-gray-600 hover:bg-gray-50 hover:text-[#C5A059] transition-all border-l-4 border-transparent hover:border-[#C5A059]"
                          >
                            {t(item.nameKey as any)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Language switcher + phone icon */}
          <div className="hidden lg:flex flex-none items-center gap-1 pl-3 border-l border-gray-100">
            <LanguageSwitcher />
            {/* Phone button: icon only; number in tooltip on lg-xl, inline on 2xl */}
            <a
              href="tel:8052837656"
              title="805-283-7656"
              className="group relative flex items-center gap-1.5 px-3 py-2 bg-[#0A1128] text-white rounded-full transition-all duration-300 hover:bg-[#C5A059] hover:shadow-[0_10px_25px_rgba(197,160,89,0.3)] hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-[#C5A059] group-hover:text-white transition-colors flex-shrink-0" />
              <span className="hidden 2xl:inline text-[10px] font-black tracking-widest uppercase whitespace-nowrap">
                805-283-7656
              </span>
              {/* Tooltip visible on lg/xl */}
              <span className="2xl:hidden absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[#0A1128] text-white text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                805-283-7656
              </span>
            </a>
          </div>

          {/* Mobile: language switcher + hamburger */}
          <div className="lg:hidden ml-auto flex items-center gap-2">
            <LanguageSwitcher />
            <button
              className="flex items-center z-[110]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-7 h-7 text-[#0A1128] cursor-pointer hover:text-[#C5A059] transition-all duration-300" />
              ) : (
                <Menu className="w-7 h-7 text-[#0A1128] cursor-pointer hover:text-[#C5A059] transition-all duration-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[100] bg-white lg:hidden h-screen w-screen overflow-y-auto"
        style={{
          transform: "translateX(100%)",
          opacity: 0,
          visibility: "hidden",
        }}
      >
        <div className="flex flex-col min-h-full pt-32 pb-12 px-8">
          <div className="space-y-4">
            {navLinks.map((link, idx) => {
              const linkName = t(link.nameKey as any);
              return (
                <div
                  key={link.nameKey}
                  className="border-b border-gray-50 pb-4"
                >
                  {link.dropdownItems ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Link
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-4 text-2xl font-serif font-bold text-[#0A1128]"
                        >
                          <span className="text-[#C5A059] text-[10px] font-sans tracking-[0.3em] uppercase opacity-70">
                            0{idx + 1}
                          </span>
                          {linkName}
                        </Link>
                        <button
                          onClick={() =>
                            setMobileExpanded(
                              mobileExpanded === link.nameKey
                                ? null
                                : link.nameKey,
                            )
                          }
                          className="p-2 bg-gray-50 rounded-lg"
                        >
                          <ChevronDown
                            className={`w-5 h-5 text-[#C5A059] transition-transform duration-300 ${
                              mobileExpanded === link.nameKey ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      <div
                        className={`space-y-2 pl-8 overflow-hidden transition-all duration-500 ${
                          mobileExpanded === link.nameKey
                            ? "max-h-[600px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {link.dropdownItems.map((subItem) => (
                          <Link
                            key={subItem.nameKey}
                            href={subItem.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-base text-gray-600 hover:text-[#C5A059] transition-colors py-1"
                          >
                            {t(subItem.nameKey as any)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-4 text-2xl font-serif font-bold text-[#0A1128] hover:text-[#C5A059] transition-colors"
                    >
                      <span className="text-[#C5A059] text-[10px] font-sans tracking-[0.3em] uppercase opacity-70">
                        0{idx + 1}
                      </span>
                      {linkName}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12">
            <a
              href="tel:8052837656"
              className="w-full py-5 bg-[#0A1128] text-white text-[11px] font-black tracking-[0.3em] uppercase rounded-xl flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              {t("callNow")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
