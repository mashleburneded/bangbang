import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script'; // Import Script for JSON-LD
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- Default SEO Metadata ---
const siteTitle = "Catenary | Next-Gen Decentralized Infrastructure for Global Trade";
const siteDescription = "Catenary is a specialized Layer 3 network built on the OP Stack, featuring a native CLOB, intent-based system (Geass), and AI connector (MSAC) to accelerate cross-border trade settlement and financial innovation.";
const siteUrl = "https://catenary.xyz"; // Corrected site URL
const siteImageUrl = "https://catenary.xyz/images/catenary-logo.png"; // Default image for sharing

export const metadata: Metadata = {
  // Use metadataBase for resolving relative image URLs
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | Catenary`, // Template for page-specific titles
  },
  description: siteDescription,
  openGraph: {
    title: { // Allow overriding title per page
      default: siteTitle,
      template: `%s | Catenary`,
    },
    description: siteDescription,
    url: siteUrl,
    siteName: 'Catenary',
    images: [
      {
        url: siteImageUrl, // Use absolute URL or ensure metadataBase is set
        width: 1200,
        height: 630,
        alt: 'Catenary Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: { // Allow overriding title per page
      default: siteTitle,
      template: `%s | Catenary`,
    },
    description: siteDescription,
    // siteId: '@YourTwitterHandle', // Optional: Add Twitter handle
    // creator: '@YourTwitterHandle', // Optional: Add Twitter handle
    images: [siteImageUrl], // Use absolute URL or ensure metadataBase is set
  },
  // Optional: Add icons, manifest etc.
  // icons: {
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
  // manifest: '/site.webmanifest',
};

// --- Site-wide Structured Data (JSON-LD) ---
// Combine WebSite and Organization data in an array
const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Catenary',
    url: siteUrl,
    // potentialAction: { // Optional: Add search action
    //   '@type': 'SearchAction',
    //   target: `${siteUrl}/search?q={search_term_string}`,
    //   'query-input': 'required name=search_term_string',
    // },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Catenary Foundation', // Or 'Catenary' if preferred
    url: siteUrl,
    logo: siteImageUrl, // Use the same logo URL
    // Optional: Add contact info, address, social links if available and desired
    // sameAs: [
    //   "https://x.com/CatenaryFDN",
    //   "https://discord.com/invite/catenary"
    // ]
  }
];


export default function RootLayout({
  children,
}: { // Simplified type definition
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {/* Inject Site-wide JSON-LD */}
        <Script
          id="website-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} // Use the combined array
          strategy="beforeInteractive" // Load early but not blocking
        />
        <ClientBody>{children}</ClientBody> {/* Restore children rendering */}
      </body>
    </html>
  );
}
