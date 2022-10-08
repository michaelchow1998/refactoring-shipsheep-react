import "../styles/globals.css";
import type { AppProps } from "next/app";
import ContextLayer from "../context/ContextLayer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextLayer>
      <Component {...pageProps} />
    </ContextLayer>
  );
}

export default MyApp;
