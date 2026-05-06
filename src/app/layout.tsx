import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const siteUrl = getSiteUrl();
const headingFont = Sora({ subsets: ["latin"], variable: "--font-heading" });
const bodyFont = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BrandSathi | Growth Marketing & Shopify Agency",
    template: "%s | BrandSathi",
  },
  description:
    "BrandSathi is a full-service digital marketing, web design, app development, and Shopify growth agency.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "BrandSathi | Where Brands Are Born. Where Growth Never Stops.",
    description:
      "Performance-focused agency for SEO, PPC, Shopify, websites, and app development.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@brandsathi",
    site: "@brandsathi",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-sans antialiased bg-brand-light text-brand-dark`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
