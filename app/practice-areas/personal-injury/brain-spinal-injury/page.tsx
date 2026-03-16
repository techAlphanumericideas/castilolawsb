import { Metadata } from "next";
import BrainSpinalInjuryContent from "./BrainSpinalInjuryContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Brain & Spinal Cord Injury Lawyers | Osbelia Castillo",
  description: "Suffered a catastrophic brain or spinal injury? Our Santa Barbara personal injury attorneys fight for the long-term care and compensation you deserve. Free consultation.",
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
      "name": "Brain & Spinal Injury",
      "item": "https://castillolawsb.com/practice-areas/personal-injury/brain-spinal-injury"
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Brain & Spinal Cord Injury Lawyers | Osbelia Castillo",
  "description": "Legal representation for victims of catastrophic brain and spinal cord trauma.",
  "publisher": {
    "@id": "https://castillolawsb.com/#organization"
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <BrainSpinalInjuryContent />
    </>
  );
}
