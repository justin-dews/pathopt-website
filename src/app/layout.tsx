import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/ui/SkipLink";
import { JsonLd, organizationSchema, websiteSchema } from "@/components/seo/JsonLd";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pathopt.com'),
  title: "Growth & Operations Partner for Small Business | PathOpt",
  description: "Three experienced business owners helping you grow, systematize, and optimize. Strategy + execution + marketing with complete transparency.",
  keywords: "small business growth partner, fractional CMO, business systematization, performance marketing, transparent marketing",
  openGraph: {
    title: "Fractional CMO for Small Business | PathOpt",
    description: "Three experienced business owners helping you grow, systematize, and optimize. Strategy + execution + marketing with complete transparency.",
    type: "website",
    locale: "en_US",
    siteName: "PathOpt",
    images: [{
      url: '/og-images/og-main-v3.png',
      width: 1456,
      height: 816,
      alt: 'PathOpt - Fractional CMO for Small Business',
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional CMO for Small Business | PathOpt",
    description: "Three experienced business owners helping you grow, systematize, and optimize.",
    images: ['/og-images/og-main-v3.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="grain-overlay antialiased" suppressHydrationWarning>
        <SkipLink />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
