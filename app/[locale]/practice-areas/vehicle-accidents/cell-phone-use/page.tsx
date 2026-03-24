import { Metadata } from "next";
import CellPhoneUseContent from "./CellPhoneUseContent";
import JsonLd from "@/components/JsonLd";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PracticeAreasPage.subPages.cellPhone" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PracticeAreasPage.subPages.cellPhone" });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": locale === "es" ? "Inicio" : "Home",
        "item": `https://castillolawsb.com/${locale}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": locale === "es" ? "Áreas de Práctica" : "Practice Areas",
        "item": `https://castillolawsb.com/${locale}/practice-areas`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": locale === "es" ? "Accidentes de Vehículos" : "Vehicle Accidents",
        "item": `https://castillolawsb.com/${locale}/practice-areas/vehicle-accidents`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": t("metadata.breadcrumb"),
        "item": `https://castillolawsb.com/${locale}/practice-areas/vehicle-accidents/cell-phone-use`
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t("metadata.title"),
    "description": t("metadata.description"),
    "publisher": {
      "@id": "https://castillolawsb.com/#organization"
    }
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <CellPhoneUseContent />
    </>
  );
}
