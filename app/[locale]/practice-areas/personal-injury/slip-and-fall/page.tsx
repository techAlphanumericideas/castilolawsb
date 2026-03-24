import { Metadata } from "next";
import SlipAndFallContent from "./SlipAndFallContent";
import JsonLd from "@/components/JsonLd";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  // Scoped to the metadata section of the specific sub-page
  const t = await getTranslations({ locale, namespace: "PracticeAreasPage.subPages.slipAndFall.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  // Scoped to PracticeAreasPage to access breadcrumbs and main category titles
  const t = await getTranslations({ locale, namespace: "PracticeAreasPage" });
  
  // Scoped to the specific sub-page for hero and local metadata
  const subT = await getTranslations({ locale, namespace: "PracticeAreasPage.subPages.slipAndFall" });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        // Matches JSON: PracticeAreasPage.breadcrumbs.home
        "name": t("breadcrumbs.home"),
        "item": `https://castillolawsb.com/${locale}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        // Matches JSON: PracticeAreasPage.breadcrumbs.practiceAreas
        "name": t("breadcrumbs.practiceAreas"),
        "item": `https://castillolawsb.com/${locale}/practice-areas/personal-injury`
      },
      {
        "@type": "ListItem",
        "position": 3,
        // Matches JSON: PracticeAreasPage.personalInjury.title
        "name": t("personalInjury.title"),
        "item": `https://castillolawsb.com/${locale}/practice-areas/personal-injury`
      },
      {
        "@type": "ListItem",
        "position": 4,
        // Matches JSON: PracticeAreasPage.subPages.slipAndFall.hero.title
        "name": subT("hero.title"),
        "item": `https://castillolawsb.com/${locale}/practice-areas/personal-injury/slip-and-fall`
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
      <SlipAndFallContent />
    </>
  );
}