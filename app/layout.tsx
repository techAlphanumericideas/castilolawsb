import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Law Office of Osbelia Castillo",
  description:
    "Aggressive Personal Injury & Vehicle Accident Representation in Santa Barbara, Oxnard, and Ventura.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "The Law Office of Osbelia Castillo",
  "image": "https://castillolawsb.com/assets/logo.png",
  "@id": "https://castillolawsb.com/#organization",
  "url": "https://castillolawsb.com/",
  "telephone": "805-283-7656",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1111 Garden St #100",
    "addressLocality": "Santa Barbara",
    "addressRegion": "CA",
    "postalCode": "93101",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.4253,
    "longitude": -119.7027
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/castillolawSB/",
    "https://www.instagram.com/castillolawsb/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
