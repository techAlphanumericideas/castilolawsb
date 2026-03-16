import { Metadata } from "next";
import DogBitesContent from "./DogBitesContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Dog Bite Injury Lawyers | Santa Barbara | Osbelia Castillo",
  description: "Injured by a dog bite? California follows strict liability for animal attacks. Our personal injury lawyers help you recover for trauma and medical costs. Free consultation.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://castillolawsb.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Practice Areas",
      "item": "https://castillolawsb.com/practice-areas"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Personal Injury",
      "item": "https://castillolawsb.com/practice-areas/personal-injury"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Dog Bites",
      "item": "https://castillolawsb.com/practice-areas/personal-injury/dog-bites"
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Dog Bite Injury Lawyers | Osbelia Castillo",
  "description": "Legal representation for victims of dog bites and animal attacks.",
  "publisher": {
    "@id": "https://castillolawsb.com/#organization"
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <DogBitesContent />
    </>
  );
}
