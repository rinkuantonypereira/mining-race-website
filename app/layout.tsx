import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mining RACE — Start Mining in Minutes",
    template: "%s | Mining RACE",
  },
  description:
    "No hardware. No technical setup. Join a global Bitcoin mining network across 140+ countries. Download the app and start mining today.",
  keywords: ["Bitcoin mining", "crypto mining", "mining race", "BTC mining", "cloud mining"],
  metadataBase: new URL("https://miningrace.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://miningrace.com",
    siteName: "Mining RACE",
    title: "Mining RACE — Start Mining in Minutes",
    description: "No hardware. No technical setup. Just powerful mining, made simple.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mining RACE — Start Mining in Minutes",
    description: "No hardware. No technical setup. Just powerful mining, made simple.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WXFB92MZ');`,
          }}
        />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WXFB92MZ" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        {children}
      </body>
    </html>
  );
}
