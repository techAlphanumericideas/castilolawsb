import { Metadata } from "next";
import PedestrianAccidentsContent from "./PedestrianAccidentsContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pedestrian Accident Lawyers | Osbelia Castillo",
  description: "Struck by a car while walking? Our Santa Barbara pedestrian accident attorneys help you recover for medical bills and trauma. Free consultation.",
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
      "name": "Pedestrian Accidents",
      "item": "https://castillolawsb.com/practice-areas/vehicle-accidents/pedestrian-accidents"
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Pedestrian Accident Lawyers | Osbelia Castillo",
  "description": "Legal representation for injured pedestrians.",
  "publisher": {
    "@id": "https://castillolawsb.com/#organization"
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <PedestrianAccidentsContent />
    </>
  );
}
