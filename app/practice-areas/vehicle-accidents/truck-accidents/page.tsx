import { Metadata } from "next";
import TruckAccidentsContent from "./TruckAccidentsContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Commercial Truck Accident Lawyers | Osbelia Castillo",
  description: "Involved in a collision with a semi-truck or commercial vehicle? Our Santa Barbara trucking accident lawyers handle complex commercial litigation.",
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
      "name": "Truck Accidents",
      "item": "https://castillolawsb.com/practice-areas/vehicle-accidents/truck-accidents"
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Truck Accident Lawyers | Osbelia Castillo",
  "description": "Expert legal help for victims of semi-truck and commercial vehicle accidents.",
  "publisher": {
    "@id": "https://castillolawsb.com/#organization"
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <TruckAccidentsContent />
    </>
  );
}
