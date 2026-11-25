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
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WH2WTJXX');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4B54VXTKTW"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4B54VXTKTW');
          `}
        </Script>

        {/* OpenAI Ads Pixel */}
        <Script
          id="openai-ads-pixel"
          strategy="afterInteractive"
        >
          {`
            !function(w,d,s,u){
              if(w.oaiq)return;
              var q=function(){q.q.push(arguments)};
              q.q=[];
              w.oaiq=q;
              var j=d.createElement(s);
              j.async=1;
              j.src=u;
              var f=d.getElementsByTagName(s)[0];
              f.parentNode.insertBefore(j,f);
            }(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");
            oaiq("init",{
              pixelId:"Y88NhnabgXyGeCYs1Rb5Yk",
              debug:true
            });
          `}
        </Script>
      </head>

      <body>
        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WH2WTJXX"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
