import { Metadata } from "next";
import DrunkDrivingContent from "./DrunkDrivingContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Drunk Driving Accident Lawyers | The Law Office of Osbelia Castillo",
  description: "Injured by a drunk driver? Get aggressive legal representation for your DUI accident claim in Santa Barbara and Ventura. Free consultation.",
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
      "name": "Drunk Driving Accidents",
      "item": "https://castillolawsb.com/practice-areas/vehicle-accidents/drunk-driving"
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Drunk Driving Accident Lawyers | Osbelia Castillo",
  "description": "Legal representation for victims of drunk driving accidents.",
  "publisher": {
    "@id": "https://castillolawsb.com/#organization"
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <DrunkDrivingContent />
    </>
  );
}
