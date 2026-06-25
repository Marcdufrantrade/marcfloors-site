import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marc Floors | Flooring Installation in Sacramento",
  description:
    "Marc Floors provides hardwood, laminate, LVP, floor prep and flooring installation services in Sacramento and surrounding areas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4B54VXTKTW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4B54VXTKTW');
          `}
        </Script>
      </head>

      <body>{children}</body>
    </html>
  );
}
