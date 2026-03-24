"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition } from "react";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "es" : "en";
    startTransition(() => {
      // replace the current route with the new locale
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className={`flex items-center justify-center gap-2 px-4 py-2 mx-2 text-sm font-bold tracking-widest uppercase transition-all duration-300 border border-gray-200 rounded-full text-gray-700 hover:text-[#C5A059] hover:border-[#C5A059] ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <Globe className="w-4 h-4" />
      {locale === "en" ? "ES" : "EN"}
    </button>
  );
}
