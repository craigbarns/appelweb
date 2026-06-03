import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://appelweb.fr";
const TITLE = "AppelWeb — Des sites internet qui génèrent des appels et des devis";
const DESCRIPTION =
  "AppelWeb crée des sites internet modernes pour les artisans et entreprises locales. Hébergement, maintenance et référencement Google local inclus. À partir de 49€/mois.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · AppelWeb",
  },
  description: DESCRIPTION,
  applicationName: "AppelWeb",
  keywords: [
    "site internet artisan",
    "création site plombier",
    "site internet électricien",
    "référencement local",
    "site web artisan du bâtiment",
    "Google Business Profile",
    "site internet couvreur",
    "site internet serrurier",
    "abonnement site web",
  ],
  authors: [{ name: "AppelWeb" }],
  creator: "AppelWeb",
  publisher: "AppelWeb",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "AppelWeb",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#070B18",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AppelWeb",
  description: DESCRIPTION,
  url: SITE_URL,
  areaServed: "France",
  priceRange: "À partir de 49€/mois",
  serviceType: [
    "Création de site internet",
    "Refonte de site web",
    "Référencement Google local",
    "Maintenance et hébergement",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ink-900 text-slate-300 antialiased">{children}</body>
    </html>
  );
}
