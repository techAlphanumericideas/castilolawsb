"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { gsap } from "gsap";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Attorneys",
    dropdownItems: [
      { name: "Osbelia Castillo", href: "/attorneys/osbelia-castillo" },
    ],
  },
  {
    name: "Personal Injury",
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
        className={`fixed top-0 left-0 w-full bg-white border-b border-gray-100 px-4 md:px-8 py-4 flex items-center shadow-sm transition-all duration-300 ${
          isMenuOpen ? "z-[120]" : "z-50"
        }`}
      >
        {/* Logo */}
        <div className="flex-none flex items-center pr-8 border-r border-gray-100">
          <a
            href="/"
            className="flex transition-all hover:brightness-110 active:scale-95"
          >
            <Image
              src="/assets/logo.png"
              alt="Law Office of Osbelia Castillo"
              width={200}
              height={50}
              className="w-32 md:w-44 h-auto object-contain antialiased"
              priority
              unoptimized
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex flex-grow items-center justify-center space-x-1">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.dropdownItems ? (
                <button
                  className={`px-4 py-2 flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase transition-colors ${activeDropdown === link.name ? "text-black" : "text-gray-700 hover:text-black"}`}
                >
                  {link.name}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180 text-[#C5A059]" : ""}`}
                  />
                </button>
              ) : (
                <a
                  href={link.href}
                  className="px-4 py-2 block text-[11px] font-bold tracking-widest uppercase text-gray-700 hover:text-black transition-colors relative"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#C5A059] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              )}

              {/* Mega Dropdown / Submenu */}
              {link.dropdownItems && (
                <div
                  className={`absolute top-full left-0 pt-4 w-64 opacity-0 invisible transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50`}
                >
                  <div className="bg-white border border-gray-100 shadow-2xl rounded-xl overflow-hidden py-2">
                    {link.dropdownItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-6 py-3 text-[12px] font-medium text-gray-600 hover:bg-gray-50 hover:text-[#C5A059] transition-all border-l-2 border-transparent hover:border-[#C5A059]"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex flex-none items-center pl-8 border-l border-gray-100">
          <a
            href="tel:8052837656"
            className="flex items-center gap-2 px-6 py-2.5 bg-[#0A1128] text-white text-[10px] font-black tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-[#C5A059] hover:shadow-lg hover:-translate-y-0.5"
          >
            <Phone className="w-3.5 h-3.5" />
            805-283-7656
          </a>
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
                    <button
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === link.name ? null : link.name,
                        )
                      }
                      className="w-full flex items-center justify-between text-2xl font-serif font-bold text-[#0A1128]"
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-[#C5A059] text-[10px] font-sans tracking-[0.3em] uppercase opacity-70">
                          0{idx + 1}
                        </span>
                        {link.name}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#C5A059] transition-transform duration-300 ${mobileExpanded === link.name ? "rotate-180" : ""}`}
                      />
                    </button>

                    <div
                      className={`space-y-2 pl-8 overflow-hidden transition-all duration-500 ${mobileExpanded === link.name ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      {link.dropdownItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-lg text-gray-600 hover:text-[#C5A059] transition-colors py-1"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 text-2xl font-serif font-bold text-[#0A1128] hover:text-[#C5A059] transition-colors"
                  >
                    <span className="text-[#C5A059] text-[10px] font-sans tracking-[0.3em] uppercase opacity-70">
                      0{idx + 1}
                    </span>
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-8">
            <a
              href="tel:8052837656"
              className="w-full py-5 bg-[#0A1128] text-white text-[11px] font-black tracking-[0.3em] uppercase rounded-xl flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              Call Now: 805-283-7656
            </a>

            <div className="text-center space-y-2">
              <p className="text-gray-400 text-[10px] font-black tracking-[0.4em] uppercase">
                Free Consultation
              </p>
              <p className="text-[#0A1128] font-serif italic">
                English & Spanish Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
