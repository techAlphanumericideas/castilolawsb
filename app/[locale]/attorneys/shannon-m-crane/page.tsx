import { Metadata } from "next";
import ShannonMCraneContent from "./ShannonMCraneContent";
import JsonLd from "@/components/JsonLd";
import {getTranslations} from 'next-intl/server';
import { notFound } from "next/navigation";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  if (locale === 'es') return {};

  const t = await getTranslations({locale, namespace: 'ShannonMCrane.metadata'});
  const baseUrl = "https://castillolawsb.com";
  const path = "/attorneys/shannon-m-crane";
 
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}/${locale}${path}`,
      languages: {
        'en': `${baseUrl}/en${path}`,
        'x-default': `${baseUrl}/en${path}`,
      },
    },
  };
}

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (locale === 'es') notFound();

  const t = await getTranslations({locale, namespace: 'Navbar'});

  const attorneySchema = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "name": "Shannon M. Crane",
    "description": "Managing Partner specializing in personal injury, wrongful death, and trucking accidents.",
    "url": `https://castillolawsb.com/${locale}/attorneys/shannon-m-crane`,
    "telephone": "805-292-7074",
    "knowsLanguage": ["English"],
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
        "item": `https://castillolawsb.com/${locale}/attorneys/shannon-m-crane`
      }
    ]
  };

  return (
    <>
      <JsonLd data={attorneySchema} />
      <JsonLd data={breadcrumbSchema} />
      <ShannonMCraneContent />
    </>
  );
}