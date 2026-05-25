"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function TrackingScripts() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    setConsent(localStorage.getItem("cookieConsent") === "true");

    const handleConsent = () => setConsent(true);
    window.addEventListener("cookieConsentGranted", handleConsent);
    return () =>
      window.removeEventListener("cookieConsentGranted", handleConsent);
  }, []);

  if (!consent) return null;

  return (
    <>
      <Script
        id="clarity-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wcpoclmaid");`,
        }}
      />
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1280449327636969');
fbq('track', 'PageView');`,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1280449327636969&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
}
