"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { gsap } from "gsap";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Attorneys", href: "/attorneys/osbelia-castillo" },
  {
    name: "Personal Injury",
    href: "/practice-areas/personal-injury",
    dropdownItems: [
      { name: "Slip and Fall", href: "/practice-areas/personal-injury/slip-and-fall" },
      { name: "Defective Products", href: "/practice-areas/personal-injury/defective-products" },
      { name: "Brain & Spinal Injury", href: "/practice-areas/personal-injury/brain-spinal-injury" },
      { name: "Dog Bites", href: "/practice-areas/personal-injury/dog-bites" },
      { name: "Asbestos & Mesothelioma", href: "/practice-areas/personal-injury/asbestos-mesothelioma" },
      { name: "Sexual Molestation & Abuse", href: "/practice-areas/personal-injury/sexual-molestation-abuse" },
    ],
  },
  {
    name: "Vehicle Accidents",
    href: "/practice-areas/vehicle-accidents",
    dropdownItems: [
      { name: "Drunk Driving", href: "/practice-areas/vehicle-accidents/drunk-driving" },
      { name: "Hit and Run", href: "/practice-areas/vehicle-accidents/hit-and-run" },
      { name: "Accidents Due to Cell Phone Use", href: "/practice-areas/vehicle-accidents/crashes-due-to-cellphone-use" },
      { name: "Truck Accidents", href: "/practice-areas/vehicle-accidents/truck-accidents" },
      { name: "Motorcycle Accidents", href: "/practice-areas/vehicle-accidents/motorcycle-accidents" },
      { name: "Bicycle Accidents", href: "/practice-areas/vehicle-accidents/bicycle-accidents" },
      { name: "Pedestrian Accidents", href: "/practice-areas/vehicle-accidents/pedestrian-accidents" },
    ],
  },
  { name: "Wrongful Death", href: "/practice-areas/wrongful-death" },
  { name: "Worker's Compensation", href: "/practice-areas/workers-compensation" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, { x: "0%", opacity: 1, visibility: "visible", duration: 0.5, ease: "power4.out" });
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(menuRef.current, { x: "100%", opacity: 0, duration: 0.4, ease: "power2.in", onComplete: () => {
        gsap.set(menuRef.current, { visibility: "hidden" });
        document.body.style.overflow = "auto";
      }});
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-[1600px] mx-auto flex items-center h-20 px-4 sm:px-6">
          
          {/* Logo Container - Responsive Widths */}
          <div className="flex-none pr-4 lg:pr-6 border-r border-gray-100">
            <Link href="/">
              <Image 
                src="/assets/logo.png" 
                alt="Logo" 
                width={220} 
                height={55} 
                className="w-36 md:w-40 lg:w-44 xl:w-48 h-auto object-contain" 
                priority 
              />
            </Link>
          </div>

          {/* Desktop Navigation - Optimized for high-res screens */}
          <div className="hidden xl:flex flex-grow items-center justify-center space-x-1 2xl:space-x-4">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group flex-shrink-0"
                onMouseEnter={() => setActiveTab(link.name)}
                onMouseLeave={() => setActiveTab(null)}
              >
                <Link
                  href={link.href}
                  className={`px-2 py-7 flex items-center gap-1 text-[11px] 2xl:text-[12px] font-bold tracking-widest uppercase transition-colors whitespace-nowrap ${
                    activeTab === link.name ? "text-black" : "text-gray-600 hover:text-black"
                  }`}
                >
                  {link.name}
                  {link.dropdownItems && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeTab === link.name ? "rotate-180 text-[#C5A059]" : "opacity-50"}`} />
                  )}
                </Link>

                {link.dropdownItems && (
                  <div className="absolute top-full left-0 pt-0 w-72 opacity-0 invisible transition-all duration-300 transform translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50">
                    {/* The "Bridge" - Essential for Mac Trackpad stability */}
                    <div className="h-4 w-full" /> 
                    <div className="bg-white border border-gray-100 shadow-2xl rounded-xl overflow-hidden py-2 backdrop-blur-sm bg-white/95">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-6 py-3 text-[12px] font-semibold text-gray-600 hover:bg-gray-50 hover:text-[#C5A059] transition-all border-l-4 border-transparent hover:border-[#C5A059]"
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

          {/* CTA Section */}
          <div className="hidden xl:flex flex-none pl-6 border-l border-gray-100">
            <Link href="tel:8052837656" className="flex items-center gap-2 px-5 py-3 bg-[#0A1128] text-white text-[12px] font-bold tracking-widest uppercase rounded-full hover:bg-[#C5A059] transition-all transform hover:scale-105 active:scale-95">
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" /> 805-283-7656
            </Link>
          </div>

          {/* Mobile UI */}
          <div className="xl:hidden ml-auto flex items-center gap-4">
             <Link href="tel:8052837656" className="p-2.5 bg-gray-50 rounded-full text-[#0A1128] md:hidden">
                <Phone size={18} />
             </Link>
             <div className="z-[70] cursor-pointer text-gray-900 transition-transform active:scale-90" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </div>
        </div>
      </nav>

      {/* --- RESPONSIVE MOBILE SIDEBAR --- */}
      <div 
        ref={menuRef}
        className="fixed inset-0 bg-white z-[60] xl:hidden flex flex-col pt-24 px-6 sm:px-10 invisible overflow-y-auto"
        style={{ transform: "translateX(100%)" }}
      >
        <div className="flex flex-col gap-y-1 pb-10 max-w-lg mx-auto w-full">
          {navLinks.map((link) => (
            <div key={link.name} className="py-1">
              <div className="flex items-center justify-between">
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-extrabold uppercase tracking-tight text-[#0A1128] py-2"
                >
                  {link.name}
                </Link>
                {link.dropdownItems && (
                  <button 
                    onClick={() => setMobileDropdown(mobileDropdown === link.name ? null : link.name)}
                    className="p-3 bg-gray-50 rounded-xl"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileDropdown === link.name ? "rotate-180 text-[#C5A059]" : ""}`} />
                  </button>
                )}
              </div>

              {link.dropdownItems && (
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileDropdown === link.name ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="flex flex-col gap-y-1 border-l-2 border-gray-100 ml-2 my-2">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="py-3 pl-6 text-[14px] font-medium text-gray-500 active:text-[#C5A059] active:bg-gray-50 rounded-r-lg"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              <div className="h-[1px] w-full bg-gray-50 mt-1" />
            </div>
          ))}
          
          <Link
            href="tel:8052837656"
            className="mt-8 flex items-center justify-center gap-3 w-full py-4 bg-[#0A1128] text-white rounded-xl font-bold uppercase tracking-widest shadow-lg active:bg-[#C5A059]"
          >
            <Phone size={18} className="text-[#C5A059]" />
            805-283-7656
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;