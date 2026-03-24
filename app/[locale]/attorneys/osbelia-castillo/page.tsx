import { Metadata }
from "next";
import OsbeliaCastilloContent from "./OsbeliaCastilloContent";
import JsonLd from "@/components/JsonLd";
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'OsbeliaCastillo.metadata'});
 
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Navbar'});

  const attorneySchema = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "name": "Osbelia Castillo",
    "image": "https://castillolawsb.com/assets/osbelia-castillo.jpg",
    "description": "Founding Attorney specializing in personal injury, catastrophic injuries, and wrongful death.",
    "url": `https://castillolawsb.com/${locale}/attorneys/osbelia-castillo`,
    "telephone": "805-283-7656",
    "knowsLanguage": ["English", "Spanish"],
    "memberOf": {
      "@id": "https://castillolawsb.com/#organization"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": t("home"),
        "item": `https://castillolawsb.com/${locale}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": t("attorneys"),
        "item": `https://castillolawsb.com/${locale}/attorneys/osbelia-castillo`
      }
    ]
  };

  return (
    <>
      <JsonLd data={attorneySchema} />
      <JsonLd data={breadcrumbSchema} />
      <OsbeliaCastilloContent />
    </>
  );
}
