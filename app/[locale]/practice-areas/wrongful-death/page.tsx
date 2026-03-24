import { Metadata } from "next";
import WrongfulDeathContent from "./WrongfulDeathContent";
import JsonLd from "@/components/JsonLd";
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'PracticeAreasPage.wrongfulDeath.metadata'});
 
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'PracticeAreasPage'});

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": t("breadcrumbs.home"),
        "item": `https://castillolawsb.com/${locale}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": t("breadcrumbs.practiceAreas"),
        "item": `https://castillolawsb.com/${locale}/practice-areas`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": t("wrongfulDeath.title"),
        "item": `https://castillolawsb.com/${locale}/practice-areas/wrongful-death`
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t("wrongfulDeath.metadata.title"),
    "description": t("wrongfulDeath.metadata.description"),
    "publisher": {
      "@id": "https://castillolawsb.com/#organization"
    }
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <WrongfulDeathContent />
    </>
  );
}
