import { Metadata } from "next";
import DefectiveProductsContent from "./DefectiveProductsContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Defective Product Liability Lawyers | Osbelia Castillo",
  description: "Injured by a dangerous or defective product? Our Santa Barbara product liability attorneys fight for your recovery against large manufacturers. Free consultation.",
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
      "name": "Defective Products",
      "item": "https://castillolawsb.com/practice-areas/personal-injury/defective-products"
    }
  ]
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Defective Products & Liability Lawyers | Osbelia Castillo",
  "description": "Legal representation for victims of unsafe consumer products and pharmaceuticals.",
  "publisher": {
    "@id": "https://castillolawsb.com/#organization"
  }
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <DefectiveProductsContent />
    </>
  );
}
