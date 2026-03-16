"use client";

import Link from "next/link";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { gsap } from "gsap";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Attorneys",
    href: "/attorneys/osbelia-castillo",
    dropdownItems: [
      { name: "Osbelia Castillo", href: "/attorneys/osbelia-castillo" },
    ],
  },
  {
    name: "Personal Injury",
    href: "/practice-areas/personal-injury",
    dropdownItems: [
      {
        name: "Slip and Fall",
        href: "/practice-areas/personal-injury/slip-and-fall",
      },
      {
        name: "Defective Products & Drugs",
        href: "/practice-areas/personal-injury/defective-products",
      },
      {
        name: "Brain & Spinal Injury",
        href: "/practice-areas/personal-injury/brain-spinal-injury",
      },
      { name: "Dog Bites", href: "/practice-areas/personal-injury/dog-bites" },
      {
        name: "Asbestos & Mesothelioma",
        href: "/practice-areas/personal-injury/asbestos-mesothelioma",
      },
      {
        name: "Sexual Molestation & Abuse",
        href: "/practice-areas/personal-injury/sexual-abuse",
      },
    ],
  },
  {
    name: "Vehicle Accidents",
    href: "/practice-areas/vehicle-accidents",
    dropdownItems: [
      {
        name: "Drunk Driving Accident",
        href: "/practice-areas/vehicle-accidents/drunk-driving",
      },
      {
        name: "Hit and Run",
        href: "/practice-areas/vehicle-accidents/hit-and-run",
      },
      {
        name: "Accidents Due to Cell Phone Use",
        href: "/practice-areas/vehicle-accidents/cell-phone-use",
      },
      {
        name: "Truck Accidents",
        href: "/practice-areas/vehicle-accidents/truck-accidents",
      },
      {
        name: "Motorcycle Accidents",
        href: "/practice-areas/vehicle-accidents/motorcycle-accidents",
      },
      {
        name: "Bicycle Accidents",
        href: "/practice-areas/vehicle-accidents/bicycle-accidents",
      },
      {
        name: "Pedestrian Accidents",
        href: "/practice-areas/vehicle-accidents/pedestrian-accidents",
      },
    ],
  },
  { name: "Wrongful Death", href: "/practice-areas/wrongful-death" },
  {
    name: "Worker's Compensation",
    href: "/practice-areas/workers-compensation",
  },
];

const Navbar = () => {
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
        className={`fixed top-0 left-0 w-full bg-white border-b border-gray-100 px-4 md:px-10 py-6 flex items-center shadow-sm transition-all duration-300 ${isMenuOpen ? "z-[120]" : "z-50"
          }`}
      >
        {/* Logo */}
        <div className="flex-none flex items-center pr-10 border-r border-gray-100">
          <Link
            href="/"
            className="flex transition-all hover:brightness-110 active:scale-95"
          >
            <Image
              src="/assets/logo.png"
              alt="Law Office of Osbelia Castillo"
              width={300}
              height={75}
              className="w-48 md:w-64 h-auto object-contain antialiased"
              priority
              unoptimized
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex flex-grow items-center justify-center space-x-2 flex-nowrap">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group flex-shrink-0"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.name === "Attorneys" ? "/attorneys/osbelia-castillo" : link.href}
                className={`px-5 py-3 flex items-center gap-2 text-[14px] font-bold tracking-widest uppercase transition-colors whitespace-nowrap ${activeDropdown === link.name ? "text-black" : "text-gray-700 hover:text-black"
                  }`}
              >
                {link.name}
                {link.dropdownItems && link.name !== "Attorneys" && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180 text-[#C5A059]" : ""
                      }`}
                  />
                )}
                {(!link.dropdownItems || link.name === "Attorneys") && (
                  <span className="absolute bottom-1 left-5 right-5 h-0.5 bg-[#C5A059] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                )}
              </Link>

              {/* Mega Dropdown / Submenu */}
              {link.dropdownItems && link.name !== "Attorneys" && (
                <div
                  className={`absolute top-full left-0 pt-4 w-72 opacity-0 invisible transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50`}
                >
                  <div className="bg-white border border-gray-100 shadow-2xl rounded-xl overflow-hidden py-3">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-8 py-4 text-[13px] font-medium text-gray-600 hover:bg-gray-50 hover:text-[#C5A059] transition-all border-l-4 border-transparent hover:border-[#C5A059]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex flex-none items-center pl-10 border-l border-gray-100">
          <Link
            href="tel:8052837656"
            className="flex items-center gap-3 px-10 py-4 bg-[#0A1128] text-white text-[15px] font-black tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-[#C5A059] hover:shadow-[0_15px_30px_rgba(197,160,89,0.3)] hover:-translate-y-1"
          >
            <Phone className="w-5 h-5 text-[#C5A059]" />
            805-283-7656
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div
          className="xl:hidden ml-auto flex items-center z-[110]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-7 h-7 text-[#0A1128] cursor-pointer hover:text-[#C5A059] transition-all duration-300 transform rotate-0" />
          ) : (
            <Menu className="w-7 h-7 text-[#0A1128] cursor-pointer hover:text-[#C5A059] transition-all duration-300" />
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[100] bg-white xl:hidden h-screen w-screen overflow-y-auto"
        style={{
          transform: "translateX(100%)",
          opacity: 0,
          visibility: "hidden",
        }}
      >
        <div className="flex flex-col min-h-full pt-32 pb-12 px-8">
          <div className="space-y-4">
            {navLinks.map((link, idx) => (
              <div key={link.name} className="border-b border-gray-50 pb-4">
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
                        {link.name}
                      </Link>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === link.name ? null : link.name,
                          )
                        }
                        className="p-2 bg-gray-50 rounded-lg"
                      >
                        <ChevronDown
                          className={`w-5 h-5 text-[#C5A059] transition-transform duration-300 ${mobileExpanded === link.name ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>

                    <div
                      className={`space-y-2 pl-8 overflow-hidden transition-all duration-500 ${mobileExpanded === link.name ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      {link.dropdownItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-lg text-gray-600 hover:text-[#C5A059] transition-colors py-1"
                        >
                          {subItem.name}
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
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-8">
            <Link
              href="tel:8052837656"
              className="w-full py-5 bg-[#0A1128] text-white text-[11px] font-black tracking-[0.3em] uppercase rounded-xl flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              Call Now: 805-283-7656
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
