import "../styles/globals.css";
import "./customIndicator.css";
import Script from 'next/script'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.refresh();

    AOS.init({
      duration: 300
    });
  }, []);
  return (
    <div>

      <Component {...pageProps} />


      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script id="googleAnalyticsScriptImport" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${"G-LVZE0PP403"}`} />

      <Script id="googleAnalyticsInit" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${"G-LVZE0PP403"}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Script id="ZohoCRMTrackingCodeScript" src="https://crm.zoho.com/crm/javascript/zcga.js" />
    </div>
  );
}

export default MyApp;
