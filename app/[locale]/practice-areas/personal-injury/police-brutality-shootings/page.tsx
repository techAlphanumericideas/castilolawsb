import { Metadata } from "next";
import PoliceBrutalityContent from "./PoliceBrutalityShootings"; // Ensure this matches your component filename
import JsonLd from "@/components/JsonLd";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  // Correct namespace path to reach the metadata object
  const t = await getTranslations({ locale, namespace: "PracticeAreasPage.subPages.policeBrutality.metadata" });
  const baseUrl = "https://castillolawsb.com";
  const path = "/practice-areas/personal-injury/police-brutality-shootings";

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

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PracticeAreasPage" });
  
  // Scoped to the main policeBrutality object so we can access hero, metadata, and faqs
  const subT = await getTranslations({ locale, namespace: "PracticeAreasPage.subPages.policeBrutality" });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": t("breadcrumbs.home"),
        "item": `https://castillolawsb.com/${locale}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": t("breadcrumbs.practiceAreas"),
        "item": `https://castillolawsb.com/${locale}/practice-areas/personal-injury`
      },
      {
        "@type": "ListItem",
        "position": 3,
        // Changed from vehicleAccidents to personalInjury because this is a civil rights/personal injury case
        "name": t("personalInjury.title"),
        "item": `https://castillolawsb.com/${locale}/practice-areas/personal-injury`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": subT("hero.title"),
        "item": `https://castillolawsb.com/${locale}/practice-areas/personal-injury/police-brutality-shootings`
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": subT("metadata.title"),
    "description": subT("metadata.description"),
    "publisher": {
      "@id": "https://castillolawsb.com/#organization"
    }
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <PoliceBrutalityContent />
    </>
  );
}