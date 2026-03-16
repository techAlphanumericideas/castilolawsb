import { Metadata } from "next";
import MotorcycleAccidentsContent from "./MotorcycleAccidentsContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Motorcycle Accident Lawyers | Osbelia Castillo",
  description: "Injured while riding? Our motorcycle accident attorneys fight for riders' rights and full compensation in Santa Barbara. Free consult.",
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
      "name": "Motorcycle Accidents",
      "item": "https://castillolawsb.com/practice-areas/vehicle-accidents/motorcycle-accidents"
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Motorcycle Accident Lawyers | Osbelia Castillo",
  "description": "Expert legal representation for injured motorcyclists.",
  "publisher": {
    "@id": "https://castillolawsb.com/#organization"
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <MotorcycleAccidentsContent />
    </>
  );
}
