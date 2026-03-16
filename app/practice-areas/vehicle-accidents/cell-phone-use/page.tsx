import { Metadata } from "next";
import CellPhoneUseContent from "./CellPhoneUseContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Cell Phone Use & Distracted Driving Accidents | Osbelia Castillo",
  description: "Injured by a driver texting or using a phone? Our distracted driving lawyers in Santa Barbara prove negligence and fight for your recovery.",
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
      "name": "Cell Phone Use Negligence",
      "item": "https://castillolawsb.com/practice-areas/vehicle-accidents/cell-phone-use"
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Distracted Driving Accident Lawyers | Osbelia Castillo",
  "description": "Legal services for victims of cell phone related distracted driving accidents.",
  "publisher": {
    "@id": "https://castillolawsb.com/#organization"
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <CellPhoneUseContent />
    </>
  );
}
