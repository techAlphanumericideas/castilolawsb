import { Metadata } from "next";
import MarkKennethFloresContent from "./MarkKennethFloresContent";
import JsonLd from "@/components/JsonLd";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'MarkKennethFlores.metadata'});
  const baseUrl = "https://castillolawsb.com";
  const path = "/attorneys/mark-kenneth-flores";
 
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}/${locale}${path}`,
      languages: {
        'en': `${baseUrl}/en${path}`,
        'es': `${baseUrl}/es${path}`,
        'x-default': `${baseUrl}/en${path}`,
      },
    },
  };
}

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Navbar'});

  const attorneySchema = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "name": "Mark Kenneth Flores",
    "image": "https://castillolawsb.com/assets/mark-kenneth-flores.jpg",
    "description": "Attorney Mark Kenneth Flores is a founding partner specializing in personal injury and car accidents.",
    "url": `https://castillolawsb.com/${locale}/attorneys/mark-kenneth-flores`,
    "telephone": "805-292-7074",
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
        "item": `https://castillolawsb.com/${locale}/attorneys/mark-kenneth-flores`
      }
    ]
  };

  return (
    <>
      <JsonLd data={attorneySchema} />
      <JsonLd data={breadcrumbSchema} />
      <MarkKennethFloresContent />
    </>
  );
}
