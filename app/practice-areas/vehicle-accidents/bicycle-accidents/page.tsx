import { Metadata } from "next";
import BicycleAccidentsContent from "./BicycleAccidentsContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Bicycle Accident Lawyers | Osbelia Castillo",
  description: "Injured while cycling? Our Santa Barbara bicycle accident attorneys protect your rights and fight for full settlement from negligent drivers.",
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
      "name": "Vehicle Accidents",
      "item": "https://castillolawsb.com/practice-areas/vehicle-accidents"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Bicycle Accidents",
      "item": "https://castillolawsb.com/practice-areas/vehicle-accidents/bicycle-accidents"
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Bicycle Accident Lawyers | Osbelia Castillo",
  "description": "Legal representation for injured cyclists.",
  "publisher": {
    "@id": "https://castillolawsb.com/#organization"
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <BicycleAccidentsContent />
    </>
  );
}
