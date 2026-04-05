import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SpeedInsights />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;