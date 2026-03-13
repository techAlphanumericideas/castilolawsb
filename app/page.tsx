import React from 'react';
import { Scale, Phone, Mail, MapPin, ArrowRight, Shield, Award, Users, CheckCircle2, Car, Briefcase, Heart, AlertTriangle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-slate-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-amber-500" />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight leading-none uppercase font-playfair">Castillo</span>
                <span className="text-xs tracking-[0.2em] uppercase text-amber-500">Law Office</span>
              </div>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="hover:text-amber-500 transition-colors text-sm font-medium uppercase tracking-wider">Home</a>
              <a href="#practice-areas" className="hover:text-amber-500 transition-colors text-sm font-medium uppercase tracking-wider">Practice Areas</a>
              <a href="#about" className="hover:text-amber-500 transition-colors text-sm font-medium uppercase tracking-wider">About</a>
              <a href="#contact" className="hover:text-amber-500 transition-colors text-sm font-medium uppercase tracking-wider border border-amber-500 px-4 py-2 hover:bg-amber-500 hover:text-slate-900 transition-all">Schedule a Consultation</a>
            </div>

            <div className="md:hidden">
              <Phone className="h-6 w-6 text-amber-500" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-[85vh] flex items-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
            alt="Law Office"
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 border border-amber-500 text-amber-500 text-xs font-semibold tracking-widest uppercase mb-6">
              Experienced Civil Litigation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-playfair leading-tight mb-6">
              Aggressive Advocacy for the <span className="text-amber-500 font-italic">Injured</span>.
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Former insurance defense attorney Osbelia Castillo brings a unique perspective and an aggressive edge to fighting for your rights in Personal Injury, Vehicular Accidents, and Workers&apos; Compensation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-bold transition-all flex items-center justify-center group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:8052837656"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 text-lg font-bold transition-all flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5 text-amber-500" />
                805-283-7656
              </a>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-2 bg-amber-500 hidden lg:block"></div>
      </header>

      {/* Trust Bar */}
      <div className="bg-slate-50 border-y border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-slate-400 mb-3" />
              <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">Aggressive Defense</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-8 w-8 text-slate-400 mb-3" />
              <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">Proven Results</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-slate-400 mb-3" />
              <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">Bilingual Support</span>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="h-8 w-8 text-slate-400 mb-3" />
              <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">Free Consultation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-amber-600 mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-playfair text-slate-900">Comprehensive Legal Services</h3>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Personal Injury",
                desc: "Accidents caused by negligence require expert legal action to ensure you receive the compensation you deserve.",
                icon: Heart
              },
              {
                title: "Vehicle Accidents",
                desc: "From highways to parking lots, we handle all types of vehicular collision cases with aggressive advocacy.",
                icon: Car
              },
              {
                title: "Wrongful Death",
                desc: "Seeking justice for families who have lost loved ones due to human negligence or recklessness.",
                icon: AlertTriangle
              },
              {
                title: "Workers' Comp",
                desc: "Protecting your right to a safe environment and securing benefits for workplace injuries and illnesses.",
                icon: Briefcase
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 border border-slate-100 bg-slate-50 hover:bg-slate-900 hover:text-white transition-all duration-300">
                <item.icon className="h-12 w-12 text-amber-600 mb-6 group-hover:text-amber-500" />
                <h4 className="text-xl font-bold font-playfair mb-4">{item.title}</h4>
                <p className="text-slate-500 group-hover:text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <a href="#contact" className="inline-flex items-center mt-6 text-amber-600 font-bold text-sm uppercase tracking-wider group-hover:text-amber-500">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                  alt="Osbelia Castillo"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-amber-500 z-0"></div>
            </div>

            <div>
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-amber-500 mb-4">About the Attorney</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-playfair mb-8">Osbelia Castillo</h3>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  For over five years, Osbelia has worked as an aggressive civil litigator representing insurance companies in both state and federal court.
                </p>
                <p>
                  Her experience representing insurance companies gives her an <span className="text-white font-bold italic">edge</span> when fighting for her injured clients. She understands the defense strategies used to minimize claims, allowing her to achieve favorable results early in the process.
                </p>
                <p>
                  Fluent in both English and Spanish, Osbelia is dedicated to ensuring her clients understand every aspect of their case.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold font-playfair text-amber-500 mb-2">100s</div>
                  <div className="text-sm uppercase tracking-widest text-slate-400">Cases Handled</div>
                </div>
                <div>
                  <div className="text-4xl font-bold font-playfair text-amber-500 mb-2">Bilingual</div>
                  <div className="text-sm uppercase tracking-widest text-slate-400">English & Spanish</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-amber-600 mb-4">Contact Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-playfair text-slate-900 mb-8">Get A Free Case Consultation</h3>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                The Law Office of Osbelia Castillo is ready to examine the facts of your case. We will explain your options in English or Spanish. Call us today!
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider text-sm">Call Now</h4>
                    <p className="text-xl font-medium text-slate-700">805-283-7656</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider text-sm">Location</h4>
                    <p className="text-lg text-slate-700">315 Meigs Rd, Ste A142<br />Santa Barbara, California 93109</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider text-sm">Email</h4>
                    <p className="text-lg text-slate-700">contact@castillolawsb.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 shadow-xl border border-slate-100">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Name</label>
                    <input type="text" className="w-full border-b-2 border-slate-200 focus:border-amber-500 outline-none py-3 transition-colors" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Phone</label>
                    <input type="tel" className="w-full border-b-2 border-slate-200 focus:border-amber-500 outline-none py-3 transition-colors" placeholder="Your Phone" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Email</label>
                  <input type="email" className="w-full border-b-2 border-slate-200 focus:border-amber-500 outline-none py-3 transition-colors" placeholder="Your Email" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Message</label>
                  <textarea rows={4} className="w-full border-b-2 border-slate-200 focus:border-amber-500 outline-none py-3 transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-5 px-8 text-lg uppercase tracking-widest transition-all shadow-lg hover:shadow-amber-500/20">
                  Submit Consultation Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Scale className="h-8 w-8 text-amber-500" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight leading-none uppercase font-playfair">Castillo</span>
                  <span className="text-xs tracking-[0.2em] uppercase text-amber-500 font-sans">Law Office</span>
                </div>
              </div>
              <p className="text-slate-400 max-w-md leading-relaxed mb-8">
                A Santa Barbara, Oxnard & Ventura professional group of lawyers specializing in Personal injury, Vehicular Accidents, Wrongful Death and Workers’ Compensation cases.
              </p>
              <div className="flex space-x-4">
                {/* Social placeholders */}
                <div className="h-10 w-10 bg-slate-800 flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">FB</div>
                <div className="h-10 w-10 bg-slate-800 flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">LN</div>
                <div className="h-10 w-10 bg-slate-800 flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">IG</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold font-playfair text-lg mb-6 text-amber-500">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#practice-areas" className="hover:text-white transition-colors">Practice Areas</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Osbelia</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold font-playfair text-lg mb-6 text-amber-500">Legal</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Disclaimer</li>
                <li className="pt-4 text-xs italic">
                  The information on this website is for general information purposes only. Receipt or viewing does not constitute an attorney-client relationship.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} The Law Office of Osbelia Castillo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
