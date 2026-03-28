"use client";

import { Link } from "@/i18n/routing";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

// Corrected Types
type SubItem = { nameKey: string; href: string };
type DropdownItem = { nameKey: string; href: string; subItems?: SubItem[] };
type NavLink = {
  nameKey: string;
  href: string;
  dropdownItems?: DropdownItem[];
};

const navLinks: NavLink[] = [
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
        subItems: [
          {
            nameKey: "medicalDeviceRecall",
            href: "/practice-areas/personal-injury/defective-products/3-spring-reservoir-kits",
          },
        ],
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
      {
        nameKey: "elderDependentAbuse",
        href: "/practice-areas/personal-injury/elder-dependent-abuse",
      },
      {
        nameKey: "negligentSecurity",
        href: "/practice-areas/personal-injury/negligent-security",
      },
      {
        nameKey: "burnInjury",
        href: "/practice-areas/personal-injury/burn-injury",
      },
      {
        nameKey: "catastrophicInjuries",
        href: "/practice-areas/personal-injury/catastrophic-injuries",
      },
      {
        nameKey: "policeBrutalityShootings",
        href: "/practice-areas/personal-injury/police-brutality-shootings",
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
        nameKey: "carAccidents",
        href: "/practice-areas/vehicle-accidents/car-accidents",
        subItems: [
          {
            nameKey: "carAccidentLiability",
            href: "/practice-areas/vehicle-accidents/car-accidents/car-accident-liability",
          },
          {
            nameKey: "propertyDamages",
            href: "/practice-areas/vehicle-accidents/car-accidents/property-damages",
          },
          {
            nameKey: "rideshareAccidents",
            href: "/practice-areas/vehicle-accidents/car-accidents/rideshare-accidents",
          },
          {
            nameKey: "rolloverAccidents",
            href: "/practice-areas/vehicle-accidents/car-accidents/rollover-accidents",
          },
          {
            nameKey: "underinsuredMotorist",
            href: "/practice-areas/vehicle-accidents/car-accidents/underinsured-motorist-claims",
          }, // Fixed trailing space
        ],
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
      {
        nameKey: "boatingAccidents",
        href: "/practice-areas/vehicle-accidents/boating-accidents",
      },
      {
        nameKey: "busAccidents",
        href: "/practice-areas/vehicle-accidents/bus-accidents",
      },
      {
        nameKey: "constructionSiteAccidents",
        href: "/practice-areas/vehicle-accidents/construction-site-accidents",
        subItems: [
          {
            nameKey: "craneAccidents",
            href: "/practice-areas/vehicle-accidents/construction-site-accidents/crane-accidents",
          },
          {
            nameKey: "forkliftAccidents",
            href: "/practice-areas/vehicle-accidents/construction-site-accidents/forklift-accidents",
          },
        ],
      },
    ],
  },
  { nameKey: "wrongfulDeath", href: "/practice-areas/wrongful-death" },
  { nameKey: "workersComp", href: "/practice-areas/workers-compensation" },
];

const Navbar = () => {
  const t = useTranslations("Navbar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(
    null,
  );
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(menuRef.current, {
        x: "0%",
        opacity: 1,
        visibility: "visible",
        pointerEvents: "auto",
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      document.body.style.overflow = "auto";
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        pointerEvents: "none",
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
      <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 px-4 md:px-6 py-4 flex items-center shadow-sm transition-all duration-300 z-50">
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-center flex-wrap gap-x-0 gap-y-0 min-w-0">
            {navLinks.map((link) => (
              <div
                key={link.nameKey}
                className="relative group flex-shrink-0"
                onMouseEnter={() => setActiveDropdown(link.nameKey)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`px-2 py-1 flex items-center gap-0.5 text-[10px] font-bold tracking-wider uppercase transition-colors whitespace-nowrap ${activeDropdown === link.nameKey ? "text-black" : "text-gray-700 hover:text-black"}`}
                >
                  {t(link.nameKey as any)}
                  {link.dropdownItems && link.nameKey !== "attorneys" && (
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-300 flex-shrink-0 ${activeDropdown === link.nameKey ? "rotate-180 text-[#C5A059]" : ""}`}
                    />
                  )}
                </Link>

                {/* Dropdown Level 1 */}
                {link.dropdownItems && link.nameKey !== "attorneys" && (
                  <div className="absolute top-full left-0 pt-3 w-64 opacity-0 invisible transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50">
                    <div className="bg-white border border-gray-100 shadow-2xl rounded-xl overflow-visible py-2">
                      {link.dropdownItems.map((item) => (
                        <div key={item.nameKey} className="relative group/sub">
                          <Link
                            href={item.href}
                            className="flex items-center justify-between px-5 py-2.5 text-[11px] font-medium text-gray-600 hover:bg-gray-50 hover:text-[#C5A059] transition-all border-l-4 border-transparent hover:border-[#C5A059]"
                          >
                            {t(item.nameKey as any)}
                            {item.subItems && (
                              <ChevronRight className="w-3 h-3" />
                            )}
                          </Link>

                          {/* Level 2 Sub-menu */}
                          {item.subItems && (
                            <div className="absolute left-full top-[-8px] ml-1 w-64 opacity-0 invisible transition-all duration-300 transform translate-x-2 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0">
                              <div className="bg-white border border-gray-100 shadow-2xl rounded-xl py-2">
                                {item.subItems.map((sub) => (
                                  <Link
                                    key={sub.nameKey}
                                    href={sub.href}
                                    className="block px-5 py-2.5 text-[11px] font-medium text-gray-600 hover:bg-gray-50 hover:text-[#C5A059] transition-all border-l-4 border-transparent hover:border-[#C5A059]"
                                  >
                                    {t(sub.nameKey as any)}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex flex-none items-center gap-1 pl-3 border-l border-gray-100">
            <LanguageSwitcher />
            <a
              href="tel:8052837656"
              className="group relative flex items-center gap-1.5 px-3 py-2 bg-[#0A1128] text-white rounded-full transition-all duration-300 hover:bg-[#C5A059] hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-[#C5A059] group-hover:text-white transition-colors flex-shrink-0" />
              <span className="hidden 2xl:inline text-[10px] font-black tracking-widest uppercase whitespace-nowrap">
                805-283-7656
              </span>
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="lg:hidden ml-auto flex items-center gap-2">
            <LanguageSwitcher />
            <button
              className="flex items-center z-[110]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-7 h-7 text-[#0A1128]" />
              ) : (
                <Menu className="w-7 h-7 text-[#0A1128]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[100] bg-white lg:hidden h-screen w-screen overflow-y-auto translate-x-full opacity-0 invisible pointer-events-none"
      >
        <div className="flex flex-col min-h-full pt-32 pb-12 px-8">
          <div className="space-y-4">
            {navLinks.map((link, idx) => (
              <div key={link.nameKey} className="border-b border-gray-50 pb-4">
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
                        {t(link.nameKey as any)}
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
                          className={`w-5 h-5 text-[#C5A059] transition-transform duration-300 ${mobileExpanded === link.nameKey ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>

                    <div
                      className={`space-y-2 pl-8 overflow-hidden transition-all duration-500 ${mobileExpanded === link.nameKey ? "max-h-[1500px] opacity-100 py-2" : "max-h-0 opacity-0"}`}
                    >
                      {link.dropdownItems.map((subItem) => (
                        <div key={subItem.nameKey} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Link
                              href={subItem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block text-base text-gray-600 hover:text-[#C5A059] py-1"
                            >
                              {t(subItem.nameKey as any)}
                            </Link>
                            {subItem.subItems && (
                              <button
                                onClick={() =>
                                  setMobileSubExpanded(
                                    mobileSubExpanded === subItem.nameKey
                                      ? null
                                      : subItem.nameKey,
                                  )
                                }
                                className="p-1"
                              >
                                <ChevronDown
                                  className={`w-4 h-4 text-[#C5A059] transition-transform ${mobileSubExpanded === subItem.nameKey ? "rotate-180" : ""}`}
                                />
                              </button>
                            )}
                          </div>
                          {/* MOBILE NESTED MENU */}
                          {subItem.subItems && (
                            <div
                              className={`pl-4 border-l-2 border-gray-100 overflow-hidden transition-all duration-300 ${mobileSubExpanded === subItem.nameKey ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                              {subItem.subItems.map((sub) => (
                                <Link
                                  key={sub.nameKey}
                                  href={sub.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="block text-sm text-gray-500 py-2"
                                >
                                  {t(sub.nameKey as any)}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 text-2xl font-serif font-bold text-[#0A1128] hover:text-[#C5A059]"
                  >
                    <span className="text-[#C5A059] text-[10px] font-sans tracking-[0.3em] uppercase opacity-70">
                      0{idx + 1}
                    </span>
                    {t(link.nameKey as any)}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
