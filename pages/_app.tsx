import "@/styles/globals.css";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div id="preloader">
          <div id="round2">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : null}
      <Component {...pageProps} />
    </>
  );
}
