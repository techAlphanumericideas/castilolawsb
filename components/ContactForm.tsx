"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ContactFormProps {
  compact?: boolean;
}

const ContactForm = ({ compact = false }: ContactFormProps) => {
  return (
    <div
      className={`bg-white/70 backdrop-blur-xl border border-white/40 rounded-[1.25rem] shadow-[0_20px_60px_rgba(10,17,40,0.05)] relative overflow-hidden flex flex-col justify-center ${compact ? "p-6" : "p-8 md:p-10 md:h-[480px]"}`}
    >
      {/* Internal Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full">
        <div className="mb-6">
          <p className="text-[#C5A059] font-sans font-black tracking-[0.3em] uppercase text-[10px] mb-1">
            Case Submission
          </p>
          <h2
            className={`${compact ? "text-lg" : "text-xl md:text-2xl"} font-serif font-bold text-[#0A1128] tracking-tight leading-none`}
          >
            Free Consultation
          </h2>
        </div>

        <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="First Name"
              className="w-full bg-white/50 border border-slate-200 rounded-lg px-4 py-3 text-xs outline-none focus:border-[#C5A059] transition-all text-black placeholder:text-slate-400"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full bg-white/50 border border-slate-200 rounded-lg px-4 py-3 text-xs outline-none focus:border-[#C5A059] transition-all text-black placeholder:text-slate-400"
              required
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-white/50 border border-slate-200 rounded-lg px-4 py-3 text-xs outline-none focus:border-[#C5A059] transition-all text-black placeholder:text-slate-400"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="relative">
              <select
                className="w-full bg-white/50 border border-slate-200 rounded-lg px-4 py-3 text-xs text-slate-500 appearance-none outline-none focus:border-[#C5A059]"
                defaultValue="California"
              >
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#C5A059]">
                <ArrowRight className="w-3.5 h-3.5 rotate-90" />
              </div>
            </div>

            <input
              type="tel"
              placeholder="Phone"
              className="w-full bg-white/50 border border-slate-200 rounded-lg px-4 py-3 text-xs outline-none focus:border-[#C5A059] transition-all text-black placeholder:text-slate-400"
              required
            />
          </div>

          <textarea
            rows={compact ? 2 : 3}
            placeholder="Briefly describe your case"
            className="w-full bg-white/50 border border-slate-200 rounded-lg px-4 py-3 text-xs outline-none focus:border-[#C5A059] transition-all text-black resize-none placeholder:text-slate-400"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#0A1128] text-white font-sans font-black tracking-[0.2em] uppercase text-[12px] py-4 rounded-lg hover:bg-[#C5A059] transition-all shadow-lg mt-2 cursor-pointer"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
