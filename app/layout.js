import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

// --------------------
// 🔹 SEO + Meta Config
// --------------------
export const metadata = {
  title: "ATF Service Center — 24×7 Home Appliance Repair in Delhi NCR",
  description:
    "ATF Service Center provides expert repair and servicing for AC, Washing Machine, Refrigerator, Microwave, LED TV, Geyser and more. 24×7 doorstep service by skilled technicians. Call now: 8510070555.",
  keywords: [
    "ATF Service Center",
    "home appliance repair",
    "AC repair",
    "Washing Machine repair",
    "Refrigerator repair",
    "Microwave repair",
    "LED TV repair",
    "Geyser repair",
    "Dishwasher repair",
    "Dryer repair",
    "home appliance technician",
    "Delhi NCR repair service",
    "24x7 appliance repair",
    "Faridabad appliance repair",
    "Gurgaon appliance services",
  ],

  openGraph: {
    title: "ATF Service Center — 24×7 Home Appliance Repair | Delhi NCR",
    description:
      "Expert repair for AC, Washing Machine, Refrigerator, Microwave & LED TV. 24×7 service with genuine spare parts. Skilled technicians available across Delhi NCR.",
    url: "https://atfservicecenter.in",
    siteName: "ATF Service Center",
    images: [
      {
        url: "https://atfservicecenter.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "ATF Service Center — Home Appliance Repair",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ATF Service Center — Home Appliance Repair in Delhi NCR",
    description:
      "24×7 home appliance repair service for AC, Washing Machine, Refrigerator, Microwave & LED TV. Genuine parts. Expert technicians.",
    images: ["https://atfservicecenter.in/og-image.png"],
  },

  metadataBase: new URL("https://atfservicecenter.in"),

  alternates: {
    canonical: "https://atfservicecenter.in",
  },
};

// --------------------
// 🔹 Root Layout
// --------------------
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
       

        {/* Mobile Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0d6efd" />
        <meta name="robots" content="index, follow" />

        {/* --------------------
            🔹 JSON-LD Structured Data
        -------------------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ATF Service Center",
              url: "https://atfservicecenter.in",
              logo: "https://atfservicecenter.in/favicon.png",
              image: "https://atfservicecenter.in/og-image.png",
              description:
                "24×7 doorstep repair service for AC, Washing Machine, Refrigerator, Microwave and LED TV in Delhi NCR.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Faridabad",
                addressRegion: "Haryana",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8510070555",
                contactType: "customer service",
                availableLanguage: ["English", "Hindi"],
              },
              areaServed: "Delhi NCR",
              sameAs: [
                "https://facebook.com/",
                "https://instagram.com/",
                "https://twitter.com/",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "1200",
              },
            }),
          }}
        />

         {/* Google Analytics (GA4) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>

      <body>{children}</body>

      <SpeedInsights />
      <Analytics />
    </html>
  );
}
