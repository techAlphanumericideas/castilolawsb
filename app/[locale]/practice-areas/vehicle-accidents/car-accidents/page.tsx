import { Metadata } from "next";
import CarAccidentContent from "./CarAccidentContent";
import JsonLd from "@/components/JsonLd";
import { getTranslations, setRequestLocale } from "next-intl/server";

const baseUrl = "https://castillolawsb.com";
const path = "/practice-areas/vehicle-accidents/car-accidents";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  // Ensure the namespace matches your JSON structure exactly
  const t = await getTranslations({ locale, namespace: "PracticeAreasPage.subPages.carAccidents.metadata" });
  
  return {
    title: t("title"),
    description: t("description"),
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

export default async function Page({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  
  // CRITICAL: Required for static rendering/caching with next-intl
  setRequestLocale(locale);
  
  const t = await getTranslations({ locale, namespace: "PracticeAreasPage" });
  const subT = await getTranslations({ locale, namespace: "PracticeAreasPage.subPages.carAccidents" });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": t("breadcrumbs.home"),
        "item": `${baseUrl}/${locale}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": t("breadcrumbs.practiceAreas"),
        "item": `${baseUrl}/${locale}/practice-areas`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": t("vehicleAccidents.title"), // Ensure this key exists in PracticeAreasPage namespace
        "item": `${baseUrl}/${locale}/practice-areas/vehicle-accidents`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": subT("hero.title"),
        "item": `${baseUrl}/${locale}${path}`
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": subT("metadata.title"),
    "description": subT("metadata.description"),
    "publisher": { "@id": `${baseUrl}/#organization` },
    "breadcrumb": { "@id": `${baseUrl}/${locale}${path}#breadcrumb` }
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      {/* If CarAccidentContent is a Client Component, 
          it will automatically have access to the locale via next-intl hooks */}
      <CarAccidentContent />
    </>
  );
}