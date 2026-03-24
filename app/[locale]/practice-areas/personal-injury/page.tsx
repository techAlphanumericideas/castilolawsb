import { Metadata } from "next";
import PersonalInjuryContent from "./PersonalInjuryContent";
import JsonLd from "@/components/JsonLd";
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'PracticeAreasPage.personalInjury.metadata'});
 
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Navbar'});

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
        "name": t("practiceAreas"),
        "item": `https://castillolawsb.com/${locale}/practice-areas/personal-injury`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Personal Injury",
        "item": `https://castillolawsb.com/${locale}/practice-areas/personal-injury`
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Personal Injury Law Specialists | Osbelia Castillo",
    "description": "Comprehensive legal representation for all personal injury and premises liability cases.",
    "publisher": {
      "@id": "https://castillolawsb.com/#organization"
    }
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <PersonalInjuryContent />
    </>
  );
}
