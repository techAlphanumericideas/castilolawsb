import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const baseUrl = "https://castillolawsb.com";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en': `${baseUrl}/en`,
        'es': `${baseUrl}/es`,
        'x-default': `${baseUrl}/en`,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 1. Validate locale. If it's not valid, call notFound().
  // Note: Ensure you have a app/[locale]/not-found.tsx or app/not-found.tsx
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // 2. Enable static rendering
  setRequestLocale(locale);
  
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": t("organizationName"),
    "image": "https://castillolawsb.com/assets/logo.png",
    "@id": "https://castillolawsb.com/#organization",
    "url": `https://castillolawsb.com/${locale}`,
    "telephone": "805-283-7656",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1111 Garden St #100",
      "addressLocality": "Santa Barbara",
      "addressRegion": "CA",
      "postalCode": "93101",
      "addressCountry": "US"
    },
    // ... rest of your schema
  };

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}