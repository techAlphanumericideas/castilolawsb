import { Metadata } from "next";
import ElderDependentAbuseContent from "./ElderDependentAbuse";
import JsonLd from "@/components/JsonLd";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PracticeAreasPage.personalInjury.metadata" });
  const baseUrl = "https://castillolawsb.com";
  const path = "/practice-areas/personal-injury/elder-dependent-abuse";

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
  const subT = await getTranslations({ locale, namespace: "PracticeAreasPage.subPages.elderDependentAbuse" });

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
        "name": t("vehicleAccidents.title"),
        "item": `https://castillolawsb.com/${locale}/practice-areas/personal-injury`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": subT("hero.title"),
        "item": `https://castillolawsb.com/${locale}/practice-areas/personal-injury/elder-dependent-abuse`
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
      <ElderDependentAbuseContent />
    </>
  );
}
