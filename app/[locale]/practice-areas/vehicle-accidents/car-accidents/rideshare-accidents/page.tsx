import { Metadata } from "next";
import RideshareAccidentContent from "./RideshareAccidentContent";
import JsonLd from "@/components/JsonLd";
import { getTranslations } from "next-intl/server";

const baseUrl = "https://castillolawsb.com";
const path = "/practice-areas/personal-injury/car-accidents/rideshare-accidents";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PracticeAreasPage.subPages.rideshareAccidents.metadata" });
  
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${baseUrl}/${locale}${path}`,
      languages: { 'en': `${baseUrl}/en${path}`, 'es': `${baseUrl}/es${path}`, 'x-default': `${baseUrl}/en${path}` },
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PracticeAreasPage" });
  const subT = await getTranslations({ locale, namespace: "PracticeAreasPage.subPages.rideshareAccidents" });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": t("breadcrumbs.home"), "item": `${baseUrl}/${locale}` },
      { "@type": "ListItem", "position": 2, "name": t("breadcrumbs.practiceAreas"), "item": `${baseUrl}/${locale}/practice-areas` },
      { "@type": "ListItem", "position": 3, "name": t("vehicleAccidents.title"), "item": `${baseUrl}/${locale}/practice-areas/vehicle-accidents` },
      { 
        "@type": "ListItem", 
        "position": 4, 
        "name": t("subPages.carAccidents.hero.title"), // Corrected line: Access via 'subPages'
        "item": `${baseUrl}/${locale}/practice-areas/personal-injury/car-accidents` 
      },
      { "@type": "ListItem", "position": 5, "name": subT("hero.title"), "item": `${baseUrl}/${locale}${path}` }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": subT("metadata.title"),
    "description": subT("metadata.description"),
    "publisher": { "@id": `${baseUrl}/#organization` }
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <RideshareAccidentContent />
    </>
  );
}