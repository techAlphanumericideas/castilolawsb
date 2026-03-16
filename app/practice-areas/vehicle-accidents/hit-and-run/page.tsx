import { Metadata } from "next";
import HitAndRunContent from "./HitAndRunContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Hit and Run Accident Claims | The Law Office of Osbelia Castillo",
  description: "Was the driver involved in your accident fleeing the scene? Our hit and run lawyers in Santa Barbara can help you recover damages today.",
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
      "name": "Hit and Run Claims",
      "item": "https://castillolawsb.com/practice-areas/vehicle-accidents/hit-and-run"
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Hit and Run Accident Claims | Osbelia Castillo",
  "description": "Legal representation for hit and run accident victims.",
  "publisher": {
    "@id": "https://castillolawsb.com/#organization"
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <HitAndRunContent />
    </>
  );
}
